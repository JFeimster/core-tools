# 32 - n8n Funding Applicant Deal Workflow Spec

## n8n Funding Applicant Deal Workflow Spec  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document defines the n8n workflow for creating or updating HubSpot deals for Moonshine Capital funding applicants.

Use this spec when automating or semi-automating:

- Funding application submissions
- BankBreezy applicants
- Giggle-routed applicants
- Gmail funding requests
- Wix funding forms
- Manual webhook applicant intake

The goal is to create one clean funding opportunity when appropriate — not a duplicate deal farm with pipeline glitter.

---

## 2. Workflow Summary

```text
Applicant Intake Received
  ↓
Contact Upsert Complete
  ↓
Classify Funding Intent
  ↓
Search Existing Deals
  ↓
Decide Create / Update / Skip
  ↓
Map Amount + Pipeline + Stage
  ↓
Create/Update Deal if Approved
  ↓
Add Note
  ↓
Create Follow-Up Task
  ↓
Log Result
```

---

## 3. Required Inputs

```json
{
  "hubspot_contact_id": "",
  "person": {},
  "business": {},
  "funding": {},
  "routing": {},
  "source_system": "",
  "event_type": "",
  "idempotency_key": ""
}
```

Required for deal creation:

- Contact ID
- Clear funding intent
- No duplicate active deal
- Pipeline/stage decision
- Human approval or strict automation rule

---

## 4. Deal Creation Criteria

Create a deal when:

- Applicant requested funding
- Funding intent is clear
- Contact exists
- No duplicate active deal exists
- Applicant was sent or should receive application/review path
- Funding workflow requires tracking

Do not create deal when:

- Inquiry is vague
- Applicant is only a partner applicant
- Submission is course/group access
- Funding amount/purpose is completely unclear and no action exists
- Duplicate active deal exists

---

## 5. Existing Deal Search

Search by:

1. Associated contact ID
2. Associated company ID if valid
3. Applicant name
4. Business name
5. Recently created active funding deals
6. Deal stage not closed won/lost

If existing active deal matches same request, update/add note instead of creating new deal.

---

## 6. Pipeline and Stage Defaults

Default funding pipeline:

```text
Sales Pipeline = default
```

Use Ecommerce Pipeline only if explicitly relevant/approved.

Default stage logic:

| Applicant Status | Stage |
|---|---|
| Funding request received / real opportunity | `qualifiedtobuy` |
| Funding link sent | `contractsent` |
| BankBreezy dashboard sent | `contractsent` |
| Giggle link/routing sent | `contractsent` |
| Applicant started application | `decisionmakerboughtin` |
| Underwriting pending | `decisionmakerboughtin` |
| Funded | `closedwon` |
| Declined/withdrawn/no response closed | `closedlost` |

---

## 7. Deal Amount Rules

| Input | Deal Amount |
|---|---|
| Specific amount | Use numeric amount |
| Range | Use lower bound if approved |
| Vague amount | Leave blank |
| No amount | Leave blank |

Always preserve original requested amount/range in note.

---

## 8. Deal Name Convention

```text
[Applicant Name] - Funding Request
```

or

```text
[Business Name] - [Applicant Name] - Funding Request
```

For routing-specific workflows:

```text
[Applicant Name] - BankBreezy Funding Request
[Applicant Name] - Giggle Funding Request
```

---

## 9. Deal Note Template

```markdown
## Funding Deal Intake Note

Source: [source_system]  
Event type: [event_type]  
Applicant: [Name]  
Contact ID: [ID]  
Business: [Business or “Not provided”]

Funding request:
- Requested amount: [Original]
- Deal amount used: [Amount or blank]
- Purpose: [Purpose]
- Credit score: [Value]

Qualification:
- Monthly revenue: [Value]
- Lowest monthly revenue: [Value]
- Bank account type: [Personal / Business / Unknown]
- Time in business: [Value]

Routing:
- Suggested lane: [BankBreezy / Giggle / Parallel / Needs review]
- Link sent: [Yes / No / URL]
- Lifecycle status: [Status]

Next action:
[Task/follow-up]

Compliance:
No approval, amount, terms, or timeline guaranteed.
```

---

## 10. Task Creation After Deal

Create task based on status.

| Status | Task |
|---|---|
| Link sent | Next-day follow-up |
| Bank link pending | Bank-link check |
| Missing docs | Missing docs request |
| No response | 48-hour follow-up |
| Underwriting pending | Status check |
| Parallel lane | Review alternative funding options |

---

## 11. Human Approval Triggers

Require approval when:

- Creating deal
- Updating deal stage
- Setting deal amount from a range
- Closing won/lost
- Associating company
- Deal duplicate ambiguity
- Large requested amount
- Sensitive/conflicting data exists

---

## 12. Output Object

```json
{
  "status": "created|updated|skipped|manual_review|failed",
  "hubspot_deal_id": "",
  "hubspot_deal_url": "",
  "deal_action": "",
  "duplicate_detected": false,
  "note_created": true,
  "task_created": true,
  "manual_review_reason": ""
}
```

---

## 13. What Not To Do

Do not:

- Create deal before contact exists
- Create duplicate active deal
- Invent amount
- Guess pipeline/stage
- Use ecommerce pipeline by default
- Create deal for partner application
- Close deal automatically without approval
- Skip note/context
- Skip follow-up task when action is needed

---

## 14. Operational Standard

A deal workflow should create:

- One active funding opportunity
- Correct contact association
- Company association only if valid
- Clear amount handling
- Clear lifecycle/status note
- Clear next task

If the workflow cannot confidently do that, route to manual review.
