# 31 - n8n HubSpot Contact Upsert Workflow Spec

## n8n HubSpot Contact Upsert Workflow Spec  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document defines the n8n workflow for safely creating or updating HubSpot contacts for Moonshine Capital.

Use this spec for:

- Wix form submissions
- Gmail parsed leads
- Manual webhook submissions
- Partner applications
- Funding applicant intake
- Broker profile submissions
- AI-agent outputs

The goal is to avoid duplicate contacts while updating clean fields and preserving context in notes.

Contact upsert is the front gate. If the gate is sloppy, the whole CRM becomes a raccoon motel.

---

## 2. Workflow Summary

```text
Webhook Trigger
  ↓
Validate Payload
  ↓
Normalize Identity
  ↓
Search HubSpot Contact by Email
  ↓
If Not Found: Search by Phone
  ↓
If Not Found: Search by Name
  ↓
Branch:
  ├── Existing Contact → Update safe fields + note/task
  └── New Contact → Create contact + note/task
  ↓
Log Result
```

---

## 3. Required Inputs

Minimum useful input:

```json
{
  "person": {
    "email": "",
    "phone": "",
    "first_name": "",
    "last_name": "",
    "full_name": ""
  },
  "source_system": "",
  "event_type": "",
  "idempotency_key": ""
}
```

At least one is required:

- email
- phone

If neither exists, route to manual review.

---

## 4. Normalization Rules

Normalize:

- Email to lowercase/trimmed
- Phone to consistent format if clear
- Full name split only if obvious
- Empty strings to null
- Website URLs to normalized URL when possible

Do not invent missing values.

---

## 5. HubSpot Search Order

1. Search contact by email.
2. If not found, search by phone.
3. If not found, search by full name.
4. If possible duplicate ambiguity exists, stop for manual review.

Do not create a new contact when duplicate risk is unresolved.

---

## 6. Safe Contact Fields

Safe fields when clean/verified:

```text
firstname
lastname
email
phone
company
website
hs_linkedin_url
facebook_profile
funding_requested
purpose
current_credit_score
date_of_birth
call_requested
partnerstatus
hubspot_owner_id
```

Only write dropdown fields when values are verified.

---

## 7. Update Rules

Update existing contact when:

- Field is blank and new value is clean
- New value corrects obvious formatting
- User/human review approved
- Workflow has low-risk auto-update permission

Do not overwrite:

- Existing email
- Existing phone
- Existing company
- Existing owner
- Conflicting applicant data

Without approval.

---

## 8. Create Contact Rules

Create contact when:

- No duplicate found
- Person has email or phone
- Source/event is legitimate
- Required data is present
- Automation rules allow create
- Or human review approves create

Recommended create fields:

```json
{
  "firstname": "",
  "lastname": "",
  "email": "",
  "phone": "",
  "company": "",
  "website": ""
}
```

---

## 9. Note Creation

Always create a source note when contact is created or meaningfully updated.

Note template:

```markdown
## Contact Upsert Source Note

Source: [source_system]  
Event type: [event_type]  
Idempotency key: [key]  
Contact action: [Created / Updated / Existing only]

Summary:
[What was received and what was changed.]

Fields updated:
- [Field]: [Value]

Fields not updated:
- [Field]: [Reason]

Next action:
[Task/deal/follow-up recommendation.]
```

---

## 10. Branching Logic

### Existing Contact Found

Actions:

- Fetch current values if needed
- Compare safe fields
- Update only safe fields
- Add note
- Continue to deal/task workflow if applicable

### Multiple Possible Matches

Actions:

- Stop automation
- Log ambiguity
- Send manual review alert
- Do not create new contact

### No Contact Found

Actions:

- Create contact if enough info
- Add note
- Continue to company/deal/task workflow if applicable

### No Email/Phone

Actions:

- Stop automation
- Route manual review
- Do not create contact

---

## 11. Suggested n8n Nodes

| Step | Node Type |
|---|---|
| Trigger | Webhook / Gmail / Wix |
| Validate | Code / IF |
| Normalize | Code |
| Search HubSpot Email | HTTP Request / HubSpot |
| Search HubSpot Phone | HTTP Request / HubSpot |
| Search HubSpot Name | HTTP Request / HubSpot |
| Branch | IF / Switch |
| Create/Update Contact | HTTP Request / HubSpot |
| Add Note | HTTP Request / HubSpot |
| Create Task | HTTP Request / HubSpot |
| Log Result | Google Sheets / Database |
| Error Handler | Error Trigger / Slack/Gmail |

---

## 12. Human Review Triggers

Require review when:

- Multiple possible contact matches
- Email conflict
- Phone conflict
- Company name conflict
- No email/phone
- Sensitive data detected
- Owner assignment needed
- Contact already has conflicting funding details
- Partner/funding intent mixed

---

## 13. Output Object

Return normalized result:

```json
{
  "status": "created|updated|existing|manual_review|failed",
  "hubspot_contact_id": "",
  "hubspot_contact_url": "",
  "matched_by": "email|phone|name|none",
  "fields_updated": [],
  "note_created": true,
  "manual_review_reason": "",
  "next_workflow": "deal|task|email|stop"
}
```

---

## 14. What Not To Do

Do not:

- Create contact without dedupe search
- Update conflicting fields blindly
- Treat name-only match as enough to update
- Create company automatically from contact company text
- Write invalid dropdowns
- Send emails from contact upsert workflow
- Skip source note
- Retry failed creates without idempotency check

---

## 15. Operational Standard

A successful contact upsert should produce:

- One correct contact
- No duplicates
- A source note
- Clean field updates only
- Manual review for ambiguity
- Next workflow handoff

Clean contact records are the foundation. Everything else stands or collapses on that.
