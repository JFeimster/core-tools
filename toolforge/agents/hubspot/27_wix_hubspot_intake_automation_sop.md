# 27 - Wix and HubSpot Intake Automation SOP

## Wix + HubSpot Intake Automation SOP  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This SOP defines how Wix intake activity should route into HubSpot CRM workflows for Moonshine Capital.

Use this document for:

- Wix form submissions
- Wix funding applications
- Wix partner applications
- Broker profile forms
- Wix courses
- Wix groups/memberships
- Wix chat / AI leads
- Wix CMS records
- Wix → n8n → HubSpot workflows
- Wix site-side acknowledgment emails
- HubSpot tasks/deals/notes created from Wix activity

The goal is to automate intake without creating duplicate records, fake companies, or trash-pile deals.

Automation should make the CRM cleaner, not faster at being wrong.

---

## 2. Wix Role vs HubSpot Role

| System | Role |
|---|---|
| Wix | Website, forms, courses, groups, membership, CMS, public pages |
| HubSpot | CRM records, applicant/partner status, notes, tasks, deals |
| Gmail | Personal/direct follow-up |
| n8n | Workflow routing/automation |
| Notion/Drive | Source docs/assets/context when needed |

---

## 3. Intake Classification

Every Wix submission must be classified before HubSpot action.

```text
Funding applicant
Partner applicant
Broker profile submission
Course enrollment
Group/member access
General contact
Tool/resource request
Chat lead
Unknown / needs review
```

Classification controls whether a deal/task/company should be created.

---

## 4. Wix → HubSpot Workflow

```markdown
1. Receive Wix submission.
2. Identify form/source/page.
3. Normalize email/phone/name.
4. Classify submission type.
5. Search HubSpot by email/phone/name.
6. Search company if real business/entity exists.
7. Search existing deals if funding intent exists.
8. Map verified fields.
9. Add source/context note.
10. Create deal only if real funding opportunity exists.
11. Create company only if real entity exists.
12. Create task if next action is needed.
13. Send site-side acknowledgment if appropriate.
14. Log automation result.
```

---

## 5. Funding Form Automation Rules

Funding form can create/update:

- Contact
- Company if valid entity
- Deal if real funding opportunity
- Note
- Task
- Acknowledgment email

Rules:

- Map verified contact fields.
- Preserve revenue/bank/time-in-business in notes unless verified fields exist.
- Deal amount uses exact amount or lower bound if range and approved.
- Create next-step/follow-up task if applicant is active.
- Do not guarantee funding.

---

## 6. Partner Form Automation Rules

Partner form can create/update:

- Contact
- Company if valid agency/entity
- Partner note
- Onboarding task
- Partner acknowledgment email

Usually do **not** create deal.

Create deal only if a partner pipeline/revenue tracking process is explicitly approved.

---

## 7. Broker Profile Form Automation Rules

Broker profile form can create/update:

- Contact
- Company if valid agency/entity
- Broker profile note
- Profile review/update task
- Asset/reference note

Do not create funding deal.

If profile work requires Wix/GitHub/Vercel update, create external action/recommendation outside HubSpot.

---

## 8. Course / Group Automation Rules

Course/group/member submissions usually create/update:

- Contact
- Note
- Access/support task if needed
- Site-side acknowledgment email

Do not create deal unless revenue tracking workflow explicitly says to.

Do not create company by default.

---

## 9. Chat Lead Automation Rules

Wix chat/AI leads should:

- Extract identity
- Classify intent
- Search HubSpot
- Add summary note
- Create follow-up task if human action needed

Do not create deal from vague chat intent.

---

## 10. Recommended Webhook Payload Fields

For future Wix/n8n automation, use a clean payload.

```json
{
  "source_system": "wix",
  "source_form": "funding_application",
  "submission_type": "funding_applicant",
  "submitted_at": "2026-04-29T12:00:00-04:00",
  "applicant": {
    "first_name": "",
    "last_name": "",
    "email": "",
    "phone": ""
  },
  "business": {
    "name": "",
    "website": "",
    "entity_confidence": "valid_company|company_text_only|none|unclear"
  },
  "funding": {
    "requested_amount": "",
    "requested_range": "",
    "purpose": "",
    "credit_score": "",
    "monthly_revenue": "",
    "lowest_monthly_revenue": "",
    "bank_account_type": "",
    "time_in_business": ""
  },
  "partner": {
    "partner_type": "",
    "target_clients": "",
    "experience": "",
    "resources_requested": ""
  },
  "profile": {
    "bio": "",
    "service_area": "",
    "booking_link": "",
    "headshot_status": ""
  },
  "routing": {
    "suggested_workflow": "",
    "needs_human_review": true
  }
}
```

---

## 11. Automation Approval Levels

| Action | Automation Level |
|---|---|
| Search HubSpot | Fully automated |
| Create contact from clean email/name | Automatable with dedupe |
| Update blank contact fields | Automatable with guardrails |
| Create company | Human review recommended |
| Create deal | Human review recommended unless strict criteria |
| Create note | Automatable |
| Create task | Automatable |
| Send site acknowledgment | Automatable |
| Send personal Gmail | Human approval |
| Update deal stage | Human/conditional approval |
| Close deal lost/won | Human approval |

---

## 12. Error Handling

If Wix → HubSpot automation fails:

- Log failed payload
- Do not retry blindly if validation error
- Notify/flag for manual review
- Preserve raw submission
- Avoid duplicate retries creating duplicate records
- Use idempotency key if possible

Suggested key:

```text
source_system + source_form + submission_id + email
```

---

## 13. What Not To Do

Do not:

- Create deals from every Wix form
- Create companies from every business-name field
- Send personal Jason-style emails from Wix automation
- Skip HubSpot dedupe
- Lose raw submission source
- Ignore form classification
- Store sensitive uploads in HubSpot notes
- Automate owner changes without rules
- Let Wix CMS become the CRM source of truth

---

## 14. Operational Standard

A good Wix → HubSpot automation should produce:

- Clean contact
- Valid company only when justified
- Deal only when real funding opportunity exists
- Note with source/context
- Task when action is needed
- Acknowledgment email when appropriate
- No duplicate garbage

Automate the discipline, not the chaos.
