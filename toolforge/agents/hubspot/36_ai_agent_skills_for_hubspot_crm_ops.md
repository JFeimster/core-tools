# 36 - AI Agent Skills for HubSpot CRM Ops

## AI Agent Skills for HubSpot CRM Ops  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document defines reusable AI agent skills for Moonshine Capital HubSpot CRM operations.

Use this source when building:

- Custom GPTs
- ChatGPT project prompts
- n8n AI nodes
- AI assistants
- GPT Actions
- Internal CRM copilots
- Website/chat agents

The goal is to break CRM work into reliable skills with clear inputs, outputs, and guardrails.

An AI agent should not be a giant blob of “figure it out.” That is not intelligence. That is improv with API keys.

---

## 2. Skill Design Standard

Each AI skill should define:

```text
Skill name
Purpose
Inputs
Outputs
Tools/connectors used
Guardrails
Human approval requirements
Example prompt
```

---

## 3. Applicant Intake Parser

Purpose:

Parse messy applicant intake into structured CRM-ready data.

Inputs:

- Form text
- Email body
- Screenshot summary
- Manual notes

Outputs:

- Applicant identity
- Business/entity classification
- Funding request
- Qualification details
- Missing info
- Recommended CRM actions

Guardrails:

- Do not write to HubSpot.
- Do not invent values.
- Preserve uncertainty.

---

## 4. HubSpot Duplicate Detector

Purpose:

Detect possible duplicate contacts, companies, and deals.

Inputs:

- Email
- Phone
- Name
- Business name
- Deal context

Outputs:

- Duplicate candidates
- Confidence level
- Recommended action

Guardrails:

- Do not merge/delete automatically.
- Name-only match is low confidence.

---

## 5. Funding Lane Router

Purpose:

Recommend BankBreezy, Giggle, parallel lane, or needs-more-info routing.

Inputs:

- Requested amount
- Bank account type
- Revenue
- Time in business
- Funding purpose
- Provider delay

Outputs:

- Suggested lane
- Routing reason
- Follow-up task recommendation
- Email template recommendation

Guardrails:

- No approval guarantees.
- No terms/funding timeline promises.

---

## 6. CRM Note Writer

Purpose:

Convert intake/email/workflow context into clean HubSpot notes.

Inputs:

- Parsed data
- Email/thread summary
- Routing context
- Action taken

Outputs:

- Note title
- Note body
- Association recommendations

Guardrails:

- Do not include unnecessary sensitive details.
- Include no-guarantee language for funding.

---

## 7. Task Cadence Builder

Purpose:

Recommend and draft HubSpot follow-up tasks.

Inputs:

- Applicant status
- Routing lane
- Last action
- Due timing
- Associated records

Outputs:

- Task title
- Due date/timing
- Task notes
- Associations

Guardrails:

- Avoid vague titles.
- Associate to contact/deal when applicable.

---

## 8. Gmail Draft Writer

Purpose:

Draft applicant/partner emails in the correct tone.

Inputs:

- Recipient/context
- Sending context
- Link/CTA
- Desired tone

Outputs:

- Subject
- Body
- Suggested HubSpot logging note/task

Guardrails:

- Draft only unless send is explicit.
- Avoid guarantees.
- Match Wix/system vs Jason personal tone.

---

## 9. Partner Profile Mapper

Purpose:

Map partner/broker profile intake into HubSpot notes/tasks.

Inputs:

- Partner profile details
- Links
- Bio
- Target clients
- Resources requested

Outputs:

- Contact/company mapping
- Broker profile note
- Profile task
- External build handoff if needed

Guardrails:

- Do not create funding deal.
- Company only if real entity exists.

---

## 10. Pipeline Cleanup Analyst

Purpose:

Review stale/duplicate/orphaned CRM items.

Inputs:

- HubSpot search results
- Deals/tasks/notes
- Review criteria

Outputs:

- Cleanup report
- Risk levels
- Proposed actions

Guardrails:

- No merge/delete/close without approval.
- Preserve history.

---

## 11. Weekly CRM Reporter

Purpose:

Generate weekly HubSpot action report.

Inputs:

- Active deals
- Overdue tasks
- New applicants
- Partner applicants
- Giggle/BankBreezy status

Outputs:

- Summary
- Action queue
- Cleanup queue
- Priority list

Guardrails:

- Do not treat partial sample as full report.
- Separate recommendations from completed actions.

---

## 12. n8n Payload Builder

Purpose:

Convert parsed data into standardized webhook JSON.

Inputs:

- Parsed applicant/partner data
- Event type
- Source system

Outputs:

- Valid webhook payload
- Idempotency key
- Human review flag

Guardrails:

- Default send_email false.
- Company/deal creation conditional.

---

## 13. Skill Prompt Template

```markdown
You are performing the [Skill Name] skill for Moonshine Capital HubSpot CRM Ops.

Inputs:
[Paste data]

Your job:
[Specific task]

Output:
[Required format]

Guardrails:
- Search first before recommending creates/updates if HubSpot tools are available.
- Do not guarantee funding outcomes.
- Do not invent missing data.
- Use notes for unverified fields.
- Require approval before write actions.
```

---

## 14. Skill Approval Matrix

| Skill | Can Read/Search | Can Propose | Can Write Automatically |
|---|---:|---:|---:|
| Applicant Intake Parser | n/a | Yes | No |
| Duplicate Detector | Yes | Yes | No |
| Funding Lane Router | n/a | Yes | No |
| CRM Note Writer | n/a | Yes | Conditional |
| Task Cadence Builder | n/a | Yes | Conditional |
| Gmail Draft Writer | Yes | Yes | Draft only |
| Partner Profile Mapper | Yes | Yes | No |
| Pipeline Cleanup Analyst | Yes | Yes | No |
| Weekly CRM Reporter | Yes | Yes | No |
| n8n Payload Builder | n/a | Yes | No |

---

## 15. Operational Standard

AI skills should be narrow, predictable, and reviewable.

A good skill produces a clean decision/output.

A bad skill tries to run the whole business from a single prompt wearing a wizard hat.
