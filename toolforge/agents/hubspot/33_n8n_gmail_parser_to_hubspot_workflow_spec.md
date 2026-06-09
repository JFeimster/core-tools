# 33 - n8n Gmail Parser to HubSpot Workflow Spec

## n8n Gmail Parser → HubSpot Workflow Spec  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document defines an n8n workflow for parsing Gmail messages and converting them into HubSpot CRM actions.

Use this spec for:

- Funding applicant replies
- New Gmail funding inquiries
- BankBreezy/Giggle follow-ups
- Provider delay emails
- Missing docs emails
- Partner applicant messages
- Broker profile update emails
- Manual email parsing workflows

The goal is to turn messy inbox activity into structured CRM memory.

---

## 2. Workflow Summary

```text
Gmail Trigger / Label
  ↓
Read Email Thread
  ↓
Parse Email Content
  ↓
Classify Intent
  ↓
Extract Entities
  ↓
Search HubSpot
  ↓
Create Note / Task / Deal Decision
  ↓
Draft Reply if Needed
  ↓
Log Result
```

---

## 3. Gmail Trigger Options

Possible triggers:

- New email in label
- New email from specific sender/domain
- Manual Gmail search
- Starred/flagged email
- Email forwarded to parsing inbox
- User-applied label like `CRM_PARSE`

Recommended labels:

```text
CRM_PARSE
CRM_FUNDING_APPLICANT
CRM_PARTNER_APPLICANT
CRM_BANKBREEZY
CRM_GIGGLE
CRM_MISSING_DOCS
CRM_REVIEW_DONE
CRM_REVIEW_ERROR
```

---

## 4. Email Classification

Classify as:

```text
funding_applicant_inquiry
funding_applicant_reply
bankbreezy_follow_up
giggle_follow_up
bank_link_issue
missing_docs
provider_delay
partner_applicant
broker_profile_update
course_group_support
general_inquiry
unknown_needs_review
```

---

## 5. Entity Extraction

Extract:

- Sender name/email
- Applicant name if different
- Phone
- Business name
- Website
- Funding requested
- Purpose
- Revenue
- Lowest monthly revenue
- Bank account type
- Time in business
- Credit score
- Provider/platform names
- Screenshot/attachment references
- Requested action
- Sentiment/urgency

---

## 6. AI Parser Output Schema

```json
{
  "classification": "",
  "confidence": 0.0,
  "person": {
    "full_name": "",
    "email": "",
    "phone": ""
  },
  "business": {
    "name": "",
    "website": "",
    "entity_confidence": ""
  },
  "funding": {
    "requested_amount": null,
    "requested_range": "",
    "purpose_raw": "",
    "monthly_revenue": "",
    "lowest_monthly_revenue": "",
    "bank_account_type": "",
    "time_in_business": "",
    "credit_score_raw": ""
  },
  "routing": {
    "suggested_lane": "",
    "provider_delay": "",
    "bank_link_status": "",
    "missing_docs": []
  },
  "recommended_actions": {
    "hubspot_note": true,
    "hubspot_task": true,
    "deal_review": false,
    "draft_reply": true,
    "manual_review": true
  },
  "summary": ""
}
```

Confidence under `0.75` should route to manual review.

---

## 7. HubSpot Actions

After parsing:

1. Search HubSpot contact by sender/applicant email.
2. Search by phone/name if needed.
3. Review existing deals.
4. Add note for CRM-relevant context.
5. Create task when action needed.
6. Create/update deal only under approved workflow.
7. Draft Gmail reply if requested/appropriate.
8. Apply Gmail label after processing.

---

## 8. Gmail Reply Draft Rules

Draft reply when:

- Applicant needs next step
- Link should be resent
- Missing docs needed
- Provider delay requires response
- Partner needs onboarding/profile response

Do not auto-send personal Gmail without approval.

Site-side/system acknowledgments may be automated under separate workflow.

---

## 9. Error Handling

Route to manual review when:

- No sender email
- Forwarded email makes applicant unclear
- Multiple HubSpot matches
- Attachments are sensitive
- AI confidence low
- Funding/partner intent mixed
- Deal creation unclear
- Email contains legal/complaint/escalation language

---

## 10. Gmail Label Updates

Recommended label flow:

```text
CRM_PARSE → CRM_REVIEW_DONE
CRM_PARSE → CRM_REVIEW_ERROR
CRM_PARSE → CRM_MANUAL_REVIEW
```

Do not remove original labels unless workflow is tested.

---

## 11. What Not To Do

Do not:

- Auto-send personal replies
- Create contacts without HubSpot search
- Create deals from vague email
- Trust AI extraction without confidence checks
- Store full sensitive email/attachments in HubSpot notes
- Treat forwarded sender as applicant without checking
- Delete Gmail messages
- Mark processed if HubSpot action failed

---

## 12. Operational Standard

The Gmail parser should produce:

- Classification
- Structured extracted data
- HubSpot search result
- CRM note
- Task if needed
- Draft reply if needed
- Processing label/log

Inbox chaos should turn into CRM clarity.
