# 37 - Custom GPT Action Design for HubSpot CRM Ops

## Custom GPT Action Design for HubSpot CRM Ops  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document defines recommended Custom GPT Action patterns for HubSpot CRM Ops.

Use this when designing GPT actions that interact with:

- HubSpot
- n8n webhooks
- Gmail draft workflows
- Wix intake workflows
- Google Drive references
- Applicant parsing APIs
- Partner profile automation

The goal is to design actions that propose safely and execute only when intended.

A GPT Action should be a scalpel, not a drunk forklift.

---

## 2. Recommended Action Categories

```text
search_hubspot_contact
search_hubspot_company
search_hubspot_deal
propose_crm_updates
create_hubspot_note
create_hubspot_task
upsert_hubspot_contact
create_funding_deal
create_partner_note
draft_gmail_reply
send_to_n8n_webhook
generate_weekly_crm_report
```

Separate read actions from write actions.

---

## 3. Read Action Pattern

Read/search actions should:

- Accept query parameters
- Return matching records
- Include confidence/duplicate risk
- Never modify data

Example input:

```json
{
  "email": "applicant@example.com",
  "phone": "555-555-5555",
  "full_name": "Anthony Sanders"
}
```

Example output:

```json
{
  "matches": [],
  "duplicate_risk": "low",
  "recommended_next_action": "create_contact_proposal"
}
```

---

## 4. Proposal Action Pattern

Proposal actions should not write to HubSpot.

They should return:

- Proposed object actions
- Field mappings
- Notes
- Tasks
- Approval required flags

Example output:

```json
{
  "requires_approval": true,
  "proposed_actions": [
    {
      "object": "CONTACT",
      "action": "CREATE",
      "properties": {}
    }
  ]
}
```

---

## 5. Write Action Pattern

Write actions must require:

```json
{
  "confirmation_status": "CONFIRMED"
}
```

or equivalent.

Write actions should reject requests if:

- Confirmation missing
- Duplicate risk unresolved
- Required fields missing
- Invalid dropdowns
- Sensitive action not approved

---

## 6. Recommended n8n Webhook Action

For GPT → n8n workflows, use a single controlled webhook action.

```json
{
  "event_type": "funding_applicant_intake",
  "source_system": "custom_gpt",
  "idempotency_key": "",
  "human_review_required": true,
  "payload": {}
}
```

n8n should handle dedupe, routing, logging, and HubSpot API execution.

---

## 7. Suggested GPT Action Schemas

### Search Contact

```json
{
  "action": "search_hubspot_contact",
  "input": {
    "email": "",
    "phone": "",
    "full_name": ""
  }
}
```

### Propose Funding Applicant Updates

```json
{
  "action": "propose_funding_applicant_updates",
  "input": {
    "parsed_intake": {},
    "hubspot_matches": {}
  }
}
```

### Create Note

```json
{
  "action": "create_hubspot_note",
  "input": {
    "confirmation_status": "CONFIRMED",
    "note_body": "",
    "associations": [
      {
        "object_type": "CONTACT",
        "object_id": ""
      }
    ]
  }
}
```

### Create Task

```json
{
  "action": "create_hubspot_task",
  "input": {
    "confirmation_status": "CONFIRMED",
    "task_title": "",
    "task_body": "",
    "due_at": "",
    "owner_id": "",
    "associations": []
  }
}
```

---

## 8. Approval UX Standard

The GPT should show:

```markdown
## Proposed Actions

| System | Object | Action | Details | Approval Needed |
|---|---|---|---|---|

Approve? [✅ Yes / ❌ No]
```

Then call write actions only after approval.

---

## 9. Security Rules

Do not expose:

- API keys
- OAuth client secrets
- Refresh tokens
- n8n production webhook secrets
- HubSpot private app tokens
- Sensitive applicant documents

Actions should pass minimum necessary data.

---

## 10. Error Handling

Action responses should include:

```json
{
  "status": "success|failed|manual_review",
  "error_code": "",
  "error_message": "",
  "safe_to_retry": false,
  "next_step": ""
}
```

Do not mask errors.

---

## 11. What Not To Do

Do not:

- Combine search and write in one action without confirmation
- Auto-send emails
- Auto-create companies from vague input
- Auto-create deals from vague inquiries
- Hide errors
- Use unverified field names
- Put secrets in GPT instructions
- Make public actions with private CRM logic exposed

---

## 12. Operational Standard

A good GPT Action design should:

- Read safely
- Propose clearly
- Write only after approval
- Log outcomes
- Fail honestly
- Minimize sensitive data movement

The agent should help Jason move fast without handing a toddler the CRM flamethrower.
