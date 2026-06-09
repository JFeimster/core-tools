# 29 - n8n and HubSpot Automation Architecture

## n8n + HubSpot Automation Architecture  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document defines the recommended n8n automation architecture for Moonshine Capital HubSpot CRM operations.

Use this source when designing, reviewing, or building automations that connect:

- HubSpot
- Gmail
- Wix
- Google Drive
- Google Sheets
- Google Calendar
- Notion
- Webhooks
- AI parsing/classification
- Custom GPTs or AI agents

The goal is to use n8n as an orchestration layer while keeping HubSpot as the CRM source of truth.

n8n should move clean data through guarded workflows. It should not become a caffeinated raccoon with API access.

---

## 2. Core Architecture Principle

Use n8n for workflow routing, normalization, enrichment, logging, and automation.

Use HubSpot for CRM records:

- Contacts
- Companies
- Deals
- Notes
- Tasks
- Ownership
- Associations
- Pipeline status

Use AI for parsing, classification, and draft generation — not blind write actions unless strict guardrails exist.

---

## 3. Recommended System Roles

| System | Role |
|---|---|
| HubSpot | CRM source of truth |
| n8n | Workflow automation/orchestration |
| Gmail | Email trigger and communication source |
| Wix | Website/form intake source |
| Google Drive | Document/asset storage |
| Google Sheets | Lightweight logs/audit tables |
| Notion | Planning, SOPs, content/project databases |
| Google Calendar | Scheduled calls/events |
| Custom GPT/AI Agent | Parsing, classification, proposed actions |
| Webhook endpoint | Intake trigger / payload receiver |

---

## 4. Recommended Workflow Layers

### Layer 1 — Intake Triggers

Sources:

- Wix form webhook
- Gmail label or inbox trigger
- Manual webhook
- Tally/form webhook
- Google Sheet row added
- ChatGPT/GPT action webhook
- Notion database status change

### Layer 2 — Normalization

Normalize:

- Email
- Phone
- Full name
- Business name
- Funding amount
- Funding range
- Purpose
- Credit score
- Bank account type
- Revenue values
- Source/form type

### Layer 3 — Classification

Classify record as:

```text
funding_applicant
partner_applicant
broker_profile_submission
course_or_group_access
gmail_reply
giggle_update
bankbreezy_update
missing_docs
unknown_needs_review
```

### Layer 4 — HubSpot Dedupe

Search HubSpot by:

1. Email
2. Phone
3. Full name
4. Company name/domain, if real business exists
5. Existing associated deals

### Layer 5 — Action Routing

Possible actions:

- Update/create contact
- Create/update company only if valid entity
- Create/update deal only if real funding opportunity
- Add note
- Create task
- Draft Gmail reply
- Log to Google Sheet
- Send manual review alert
- Stop with error

### Layer 6 — Human Approval

Use approval gates for:

- Company creation
- Deal creation
- Deal stage change
- Owner reassignment
- Sending personal Gmail
- Closing deals won/lost
- Merge/delete/cleanup actions

### Layer 7 — Logging and Error Handling

Log:

- Webhook payload ID
- Source
- Classification
- HubSpot search result
- Action taken
- Errors
- Retry status
- Human review required

---

## 5. Recommended Workflow Types

| Workflow | Purpose |
|---|---|
| Contact Upsert | Search/create/update contacts |
| Funding Applicant Deal Workflow | Create/update funding opportunities |
| Gmail Parser Workflow | Parse applicant/partner emails |
| Wix Forms Workflow | Convert Wix forms into CRM actions |
| Giggle / BankBreezy Routing Workflow | Log link/routing status and tasks |
| Missing Docs Workflow | Request/log documents |
| Partner Applicant Workflow | Partner onboarding notes/tasks |
| Broker Profile Workflow | Profile details and build tasks |
| Weekly Review Workflow | Create CRM report/action queue |
| Error Review Workflow | Review failed automation runs |

---

## 6. Human-in-the-Loop Rules

Automation can safely handle:

- Parsing
- Normalization
- HubSpot search
- Notes creation
- Task creation under strict templates
- Google Sheet logging
- Site-side acknowledgment emails
- Low-risk contact updates to blank fields

Human approval recommended for:

- New company creation
- New deal creation
- Deal stage changes
- Personal Gmail sending
- Owner assignment changes
- Partner/broker profile publication
- Closing deals won/lost

Human approval required for:

- Merging/deleting records
- Sensitive data handling decisions
- Sending funding claims or unusual email copy
- Updating disputed/conflicting fields
- Any action that changes revenue/pipeline truth materially

---

## 7. Recommended n8n Data Flow

```text
Trigger
  ↓
Normalize Input
  ↓
Classify Submission
  ↓
Validate Required Fields
  ↓
Search HubSpot Contact
  ↓
Branch:
  ├── Existing Contact
  │     ├── Update safe blank fields
  │     ├── Add note
  │     └── Create task/deal if needed
  └── New Contact
        ├── Create contact if enough data
        ├── Add note
        └── Create task/deal if needed
  ↓
Log Result
  ↓
Notify / Draft / Continue
```

---

## 8. Idempotency Rule

Every automation should use an idempotency key to prevent duplicate runs.

Recommended key:

```text
source_system + source_form + submission_id + normalized_email
```

Fallback:

```text
source_system + normalized_email + submitted_at_date + workflow_type
```

Store idempotency keys in:

- n8n execution data
- Google Sheet log
- HubSpot note if needed
- External database if scaling

---

## 9. Error Handling Standard

Every workflow should handle:

| Error Type | Response |
|---|---|
| Missing email | Search by phone/name or route to manual review |
| HubSpot duplicate ambiguity | Stop and require human review |
| Invalid dropdown value | Use note instead of field |
| Company unclear | Skip company creation |
| Deal duplicate risk | Stop and require human review |
| HubSpot API error | Log and retry only if safe |
| Gmail send error | Do not mark sent; keep draft/status |
| AI parsing uncertainty | Route to manual review |
| Sensitive document detected | Stop/flag for human review |

---

## 10. Recommended Audit Log Fields

Use a Google Sheet, Notion DB, or database table.

```json
{
  "run_id": "",
  "timestamp": "",
  "workflow_name": "",
  "source_system": "",
  "source_id": "",
  "idempotency_key": "",
  "classification": "",
  "applicant_email": "",
  "hubspot_contact_id": "",
  "hubspot_company_id": "",
  "hubspot_deal_id": "",
  "action_taken": "",
  "human_review_required": false,
  "error": "",
  "retry_count": 0
}
```

---

## 11. Security Rules

Do not expose:

- HubSpot tokens
- OAuth secrets
- n8n credentials
- Gmail tokens
- Wix API keys
- Personal applicant data in public logs
- Bank statements or ID documents in generic logs

Use environment variables and n8n credentials manager.

Do not hardcode secrets in workflow JSON.

---

## 12. What Not To Automate Blindly

Do not blindly automate:

- Company creation
- Deal creation from vague intake
- Sending personal Gmail replies
- Closing deals
- Merging records
- Owner changes
- Sensitive file processing
- Public GitHub issue creation with private applicant data
- Funding guarantee language

---

## 13. Operational Standard

A good n8n automation should be:

- Dedupe-aware
- Source-attributed
- Error-tolerant
- Approval-gated where needed
- Logged
- Re-runnable without duplicates
- Respectful of sensitive data
- Easy to debug

Automation should create clean momentum, not faster chaos.
