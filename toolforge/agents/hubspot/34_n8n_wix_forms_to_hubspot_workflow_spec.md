# 34 - n8n Wix Forms to HubSpot Workflow Spec

## n8n Wix Forms → HubSpot Workflow Spec  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document defines an n8n workflow for routing Wix form submissions into HubSpot.

Use this spec for:

- Funding applications
- Partner applications
- Broker profile forms
- Course/group requests
- Contact forms
- Wix chat/AI lead captures
- Tool/resource requests

The goal is to transform Wix form submissions into clean HubSpot records, notes, tasks, and deal decisions.

---

## 2. Workflow Summary

```text
Wix Form Webhook
  ↓
Validate Payload
  ↓
Classify Form Type
  ↓
Normalize Fields
  ↓
Search HubSpot
  ↓
Map Fields
  ↓
Branch by Form Type
  ↓
Create/Update Contact
  ↓
Conditional Company/Deal
  ↓
Add Note
  ↓
Create Task
  ↓
Send/Draft Acknowledgment
  ↓
Log Result
```

---

## 3. Form Classifications

```text
funding_application
partner_application
broker_profile_submission
course_enrollment
group_access_request
general_contact
tool_resource_request
chat_lead
unknown
```

---

## 4. Common Wix Fields

```json
{
  "form_id": "",
  "form_name": "",
  "submission_id": "",
  "submitted_at": "",
  "page_url": "",
  "member_id": "",
  "first_name": "",
  "last_name": "",
  "full_name": "",
  "email": "",
  "phone": ""
}
```

---

## 5. Funding Form Branch

Actions:

- Search/create/update contact
- Company only if real entity
- Deal only if real funding opportunity
- Add funding intake note
- Create follow-up task
- Send/draft acknowledgment

Do not create deal from incomplete/vague forms unless criteria met.

---

## 6. Partner Form Branch

Actions:

- Search/create/update contact
- Company only if real agency/entity
- Add partner intake note
- Create onboarding task
- Send partner acknowledgment

Do not create funding deal.

---

## 7. Broker Profile Branch

Actions:

- Search/update contact
- Company if valid agency/entity
- Add broker profile note
- Create profile review/build task
- Store file/asset references
- Route build work to GitHub/Wix/Vercel if needed

---

## 8. Course/Group Branch

Actions:

- Search/create/update contact
- Add access/course note
- Create access issue task only if needed
- Send site-side acknowledgment

Usually no company/deal.

---

## 9. HubSpot Dedupe Rules

Search:

1. Email
2. Phone
3. Full name
4. Company if valid
5. Existing deals for funding forms
6. Existing tasks/notes for repeated submissions

If multiple matches, stop and route manual review.

---

## 10. Source Note Template

```markdown
## Wix Form Submission Note

Source: Wix  
Form: [Form name / ID]  
Submission ID: [ID]  
Page URL: [URL]  
Submitted at: [Date/time]

Classification:
[Funding applicant / Partner applicant / Broker profile / Course / Other]

Summary:
[Parsed summary.]

Mapped fields:
[Fields mapped.]

Not mapped / note-only:
[Details preserved in note.]

Next action:
[Task/deal/email recommendation.]
```

---

## 11. Task Creation

| Form Type | Task |
|---|---|
| Funding application | Review/route applicant |
| BankBreezy/Giggle candidate | Confirm application/link started |
| Partner application | Review partner applicant |
| Broker profile | Review broker profile |
| Course/group access issue | Resolve access request |
| General contact | Follow up on inquiry |

---

## 12. Acknowledgment Email Rules

Wix/site-side emails should be:

- Brand-safe
- Operational
- Short
- No guarantees
- Not personal Jason-style

Do not send high-pressure funding copy automatically.

---

## 13. Error Handling

If Wix submission lacks email/phone:

- Log payload
- Route manual review
- Do not create contact automatically

If company unclear:

- Skip company
- Preserve in note

If deal unclear:

- Skip deal
- Create review task

---

## 14. What Not To Do

Do not:

- Create deals for every form
- Create companies from vague business names
- Overwrite existing HubSpot data blindly
- Send personal emails from Wix automation
- Ignore form type/source
- Drop submissions with errors without logging
- Store sensitive uploads in HubSpot notes

---

## 15. Operational Standard

Every Wix form workflow should produce:

- Source attribution
- Dedupe-safe contact handling
- Correct classification
- Note with raw context
- Task/deal only when justified
- Clean log/audit record
