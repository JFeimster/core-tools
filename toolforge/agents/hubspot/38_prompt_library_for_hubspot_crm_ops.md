# 38 - Prompt Library for HubSpot CRM Ops

## Prompt Library for HubSpot CRM Ops  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document provides reusable prompts for Moonshine Capital HubSpot CRM Ops workflows.

Use these prompts in focused project threads for:

- Applicant intake parsing
- HubSpot search/proposed updates
- Giggle / BankBreezy routing
- Gmail drafts
- Task cadence creation
- Partner mapping
- Broker profiles
- CRM cleanup
- Weekly reporting
- n8n payload generation

These prompts are designed to create clean, execution-ready outputs with minimal back-and-forth.

---

## 2. Parse Funding Applicant Prompt

```markdown
Parse the following funding applicant intake for Moonshine Capital.

Extract:
- applicant identity
- contact info
- business/entity details
- funding requested
- funding purpose
- credit score
- revenue details
- lowest monthly revenue
- bank account type
- time in business
- routing signals
- missing information
- recommended HubSpot actions

Use the Applicant Intake Parsing Guide and Funding Applicant Intake to HubSpot Mapping rules.

Do not invent missing data. Use notes for unverified/contextual details.

Raw intake:
[PASTE INTAKE]
```

---

## 3. Search HubSpot and Propose Updates Prompt

```markdown
Search HubSpot for this applicant before creating or updating anything.

Search by:
1. email
2. phone
3. full name
4. company/business name if provided
5. existing deals/tasks/notes

Then propose exact HubSpot updates in a table.

Do not execute until I approve.

Applicant data:
[PASTE DATA]
```

---

## 4. Giggle / BankBreezy Routing Prompt

```markdown
Review this applicant for Giggle / BankBreezy routing.

Evaluate:
- requested funding amount
- bank account type
- monthly revenue
- lowest monthly revenue
- time in business
- urgency
- provider delays
- whether BankBreezy, Giggle, parallel lane, or needs-more-info is best

Output:
- recommended lane
- routing rationale
- HubSpot note
- follow-up task
- email template recommendation

Do not guarantee approval, amount, terms, or timeline.

Applicant:
[PASTE DATA]
```

---

## 5. Draft Applicant Gmail Prompt

```markdown
Draft a personal Gmail follow-up to this funding applicant.

Tone:
- direct
- human
- Jason-style
- motivating but compliant
- no guarantees

Include this link if relevant:
[LINK]

Context:
[PASTE CONTEXT]

Also recommend whether a HubSpot note/task should be created.
```

---

## 6. Wix Site Acknowledgment Email Prompt

```markdown
Draft a Wix/site-side acknowledgment email for this submission.

Tone:
- operational
- brand-safe
- short
- professional
- no hype
- no guarantees

Submission type:
[Funding / Partner / Broker Profile / Course / Group / Other]

Context:
[PASTE CONTEXT]
```

---

## 7. Create HubSpot Task Cadence Prompt

```markdown
Create a HubSpot follow-up task cadence for this applicant.

Include:
- task title
- due timing
- task notes
- associations
- sequence logic

Applicant/context:
[PASTE CONTEXT]

Use the HubSpot Task Templates and lifecycle rules.
```

---

## 8. Partner Applicant Mapping Prompt

```markdown
Parse this partner/broker applicant intake and map it to HubSpot.

Determine:
- contact fields
- whether company should be created
- note-only partner details
- onboarding/profile tasks
- whether a deal should be skipped

Do not create a funding deal unless there is a real funding request.

Partner intake:
[PASTE DATA]
```

---

## 9. Broker Profile CRM Prompt

```markdown
Create a HubSpot-ready broker profile note and task plan for this partner.

Include:
- profile status
- contact links
- service area
- target clients
- funding specialties
- bio/positioning
- missing assets
- requested tools/resources
- next tasks

Profile context:
[PASTE DATA]
```

---

## 10. Gmail Thread to HubSpot Note Prompt

```markdown
Summarize this Gmail thread into a HubSpot CRM note.

Include:
- thread subject
- participants
- date range
- key timeline
- CRM-relevant details
- action taken
- next action
- task recommendation

Do not paste unnecessary sensitive details.

Thread:
[PASTE THREAD]
```

---

## 11. CRM Cleanup Prompt

```markdown
Review these HubSpot records for cleanup.

Look for:
- duplicate contacts
- duplicate companies
- duplicate deals
- speculative companies
- stale deals
- overdue tasks
- missing associations
- missing notes
- Giggle/BankBreezy routing gaps

Output a cleanup report with risk levels and proposed actions.

Records:
[PASTE/SEARCH RESULTS]
```

---

## 12. Weekly CRM Review Prompt

```markdown
Generate a weekly HubSpot CRM review for Moonshine Capital.

Include:
- new funding applicants
- active deals needing action
- Giggle/BankBreezy status
- bank-link pending
- missing docs
- no-response applicants
- overdue tasks
- partner applicants
- cleanup issues
- top priorities

Use concise action tables.
```

---

## 13. n8n Webhook JSON Prompt

```markdown
Convert this applicant/partner intake into a standardized n8n webhook payload.

Use the n8n Webhook Payload Standards for HubSpot.

Set:
- source_system
- event_type
- idempotency_key
- human_review_required
- person
- business
- funding or partner/profile object
- routing
- requested_actions

Default send_email to false.

Raw data:
[PASTE DATA]
```

---

## 14. Custom GPT Action Proposal Prompt

```markdown
Prepare a Custom GPT Action design for this HubSpot CRM Ops workflow.

Include:
- action name
- purpose
- input schema
- output schema
- approval requirements
- error handling
- security guardrails
- example request/response

Workflow:
[DESCRIBE WORKFLOW]
```

---

## 15. Prompt Usage Rule

When using these prompts:

- Keep one thread focused on one job type.
- Search HubSpot before proposing writes.
- Do not execute without approval.
- Use notes for messy context.
- Avoid guarantees in funding workflows.
- Preserve source/system context.

Prompts should reduce chaos, not turn it into formatted chaos.
