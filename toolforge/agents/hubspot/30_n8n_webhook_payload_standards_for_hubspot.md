# 30 - n8n Webhook Payload Standards for HubSpot

## n8n Webhook Payload Standards for HubSpot  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document defines standardized webhook payload formats for n8n workflows that interact with HubSpot.

Use this when designing payloads for:

- Funding applicant intake
- Partner applicant intake
- Broker profile submissions
- Wix forms
- Gmail parser outputs
- Giggle / BankBreezy updates
- Bank-link status updates
- Missing documents
- Manual ChatGPT/GPT action requests
- AI-agent workflow outputs

The goal is to create predictable payloads that can be parsed, deduped, routed, and logged safely.

Good payloads make automation boring. Boring automation is profitable automation.

---

## 2. Universal Payload Envelope

Every webhook payload should include a standard envelope.

```json
{
  "schema_version": "1.0",
  "event_type": "",
  "source_system": "",
  "source_id": "",
  "submitted_at": "",
  "idempotency_key": "",
  "human_review_required": true,
  "payload": {}
}
```

### Required Envelope Fields

| Field | Required | Description |
|---|---:|---|
| `schema_version` | Yes | Payload version |
| `event_type` | Yes | Workflow event |
| `source_system` | Yes | Wix, Gmail, ChatGPT, n8n, Notion, etc. |
| `source_id` | Recommended | Submission/message/event ID |
| `submitted_at` | Yes | ISO datetime |
| `idempotency_key` | Yes | Duplicate prevention key |
| `human_review_required` | Yes | Whether workflow should pause |
| `payload` | Yes | Actual data |

---

## 3. Standard Event Types

Use these event types.

```text
funding_applicant_intake
partner_applicant_intake
broker_profile_submission
gmail_reply_received
bankbreezy_link_sent
giggle_routing_update
bank_link_pending
bank_link_confirmed
missing_docs_requested
missing_docs_received
provider_delay_reported
course_group_access_request
manual_crm_update_request
weekly_review_request
```

---

## 4. Applicant Identity Object

Use this structure for people.

```json
{
  "person": {
    "full_name": "",
    "first_name": "",
    "last_name": "",
    "email": "",
    "phone": "",
    "preferred_contact_method": "",
    "call_requested": null
  }
}
```

`call_requested` should be:

```json
true
false
null
```

---

## 5. Business Object

```json
{
  "business": {
    "name": "",
    "legal_name": "",
    "dba": "",
    "website": "",
    "domain": "",
    "phone": "",
    "state": "",
    "country": "",
    "ein_provided": false,
    "entity_confidence": "valid_company"
  }
}
```

Allowed `entity_confidence` values:

```text
valid_company
company_text_only
no_company
speculative_risk
unknown
```

Do not create a company when `entity_confidence` is not `valid_company` unless human approved.

---

## 6. Funding Object

```json
{
  "funding": {
    "requested_amount": null,
    "requested_range": "",
    "funding_requested_dropdown": "",
    "purpose_raw": "",
    "purpose_mapped": "",
    "credit_score_raw": "",
    "credit_score_mapped": "",
    "date_of_birth": "",
    "monthly_revenue": "",
    "lowest_monthly_revenue": "",
    "time_in_business": "",
    "bank_account_type": "unknown",
    "funding_urgency": "",
    "current_provider_issue": ""
  }
}
```

Allowed `bank_account_type` values:

```text
personal
business
mixed
unknown
```

---

## 7. Routing Object

```json
{
  "routing": {
    "suggested_lane": "needs_review",
    "bankbreezy_link_sent": false,
    "bankbreezy_link": "",
    "giggle_recommended": false,
    "advanced_to_giggle": false,
    "bank_link_status": "unknown",
    "missing_docs": [],
    "lifecycle_status": "",
    "routing_reason": "",
    "no_guarantee_acknowledged": true
  }
}
```

Allowed `suggested_lane` values:

```text
bankbreezy
giggle
parallel
needs_more_info
needs_review
not_fundable_now
```

Allowed `bank_link_status` values:

```text
linked
pending
not_started
failed
unknown
```

---

## 8. Partner Object

```json
{
  "partner": {
    "partner_type": "",
    "agency_name": "",
    "website": "",
    "linkedin_url": "",
    "facebook_profile": "",
    "target_clients": [],
    "industries_served": [],
    "funding_experience": "",
    "sales_experience": "",
    "resources_requested": [],
    "onboarding_status": ""
  }
}
```

---

## 9. Broker Profile Object

```json
{
  "broker_profile": {
    "profile_status": "",
    "public_email": "",
    "booking_link": "",
    "short_bio": "",
    "why_choose_you": "",
    "service_area": "",
    "target_client_types": [],
    "funding_specialties": [],
    "proof_credibility": "",
    "headshot_status": "",
    "requested_tools": [],
    "profile_url": ""
  }
}
```

---

## 10. Action Request Object

Use this to tell n8n what actions are requested.

```json
{
  "requested_actions": {
    "search_hubspot": true,
    "upsert_contact": true,
    "create_company": false,
    "create_deal": false,
    "add_note": true,
    "create_task": true,
    "draft_email": false,
    "send_email": false,
    "manual_review": true
  }
}
```

Default:

- `send_email` should be false.
- `create_company` should be false unless valid company.
- `create_deal` should be conditional.

---

## 11. Funding Applicant Payload Example

```json
{
  "schema_version": "1.0",
  "event_type": "funding_applicant_intake",
  "source_system": "wix",
  "source_id": "wix_submission_123",
  "submitted_at": "2026-04-29T12:00:00-04:00",
  "idempotency_key": "wix_funding_applicant_anthony@example.com_2026-04-29",
  "human_review_required": true,
  "payload": {
    "person": {
      "full_name": "Anthony Sanders",
      "first_name": "Anthony",
      "last_name": "Sanders",
      "email": "anthony@example.com",
      "phone": "555-555-5555",
      "call_requested": true
    },
    "business": {
      "name": "",
      "website": "",
      "entity_confidence": "no_company"
    },
    "funding": {
      "requested_amount": 50000,
      "requested_range": "$50,000 - $100,000",
      "funding_requested_dropdown": "$50,000 - $100,000",
      "purpose_raw": "working capital",
      "purpose_mapped": "Working Capital/Business Expansion (withOUT real estate)",
      "credit_score_raw": "300-579",
      "credit_score_mapped": "599 or below",
      "bank_account_type": "business",
      "lowest_monthly_revenue": "$8500"
    },
    "routing": {
      "suggested_lane": "bankbreezy",
      "bankbreezy_link_sent": false,
      "bankbreezy_link": "https://bankbreezy.com/funding/jason",
      "routing_reason": "Requested larger amount and has business banking context."
    },
    "requested_actions": {
      "search_hubspot": true,
      "upsert_contact": true,
      "create_company": false,
      "create_deal": true,
      "add_note": true,
      "create_task": true,
      "draft_email": true,
      "send_email": false,
      "manual_review": true
    }
  }
}
```

---

## 12. Error Payload

When workflow fails, log:

```json
{
  "run_id": "",
  "event_type": "",
  "idempotency_key": "",
  "status": "failed",
  "error_type": "",
  "error_message": "",
  "failed_step": "",
  "safe_to_retry": false,
  "manual_review_required": true
}
```

---

## 13. Validation Rules

Before HubSpot actions:

- Email or phone must exist for contact upsert.
- Company creation requires `entity_confidence = valid_company`.
- Deal creation requires clear funding intent.
- Deal amount must be numeric or blank.
- Dropdown values must match verified options.
- Send email must default false.
- Sensitive document fields should not include raw file contents.

---

## 14. Operational Standard

A clean webhook payload should make the workflow answer:

- Who is this?
- Where did it come from?
- What type of event is it?
- Is this duplicate-safe?
- What should HubSpot do?
- What requires human review?

If a payload cannot answer those questions, route it to manual review instead of letting automation improvise.
