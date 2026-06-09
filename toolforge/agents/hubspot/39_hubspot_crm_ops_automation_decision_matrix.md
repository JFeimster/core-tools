# 39 - HubSpot CRM Ops Automation Decision Matrix

## HubSpot CRM Ops Automation Decision Matrix  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document defines what should be manual, AI-assisted, or fully automated in Moonshine Capital HubSpot CRM Ops.

Use this when deciding whether to automate:

- Applicant parsing
- Contact creation
- Company creation
- Deal creation
- Notes
- Tasks
- Gmail drafts/sends
- Owner assignment
- Pipeline updates
- Cleanup
- Reporting
- n8n workflows
- GPT actions

The goal is to automate the boring and repeatable while keeping humans in control of risky CRM decisions.

Automation should be a force multiplier, not a drunk intern with a webhook.

---

## 2. Automation Levels

| Level | Meaning |
|---|---|
| Manual | Human should perform/approve directly |
| AI-Assisted | AI can parse, propose, draft, summarize |
| Conditional Automation | Automation allowed under strict rules |
| Fully Automated | Safe to run without human review |
| Never Automate Blindly | Requires human judgment |

---

## 3. Decision Matrix

| Workflow | Manual | AI-Assisted | Conditional Automation | Fully Automated | Notes |
|---|---:|---:|---:|---:|---|
| Parse applicant intake |  | ✅ | ✅ |  | AI can parse; review if low confidence |
| Search HubSpot contacts |  | ✅ | ✅ | ✅ | Read/search is safe |
| Create contact |  | ✅ | ✅ |  | Only if email/phone and no duplicate |
| Update blank contact fields |  | ✅ | ✅ |  | Do not overwrite conflicts |
| Create company | ✅ | ✅ |  |  | Human review recommended |
| Update company fields | ✅ | ✅ | ✅ |  | Only clean verified fields |
| Create deal | ✅ | ✅ | ✅ |  | Requires clear funding intent |
| Update deal stage | ✅ | ✅ | ✅ |  | Stage changes affect reporting |
| Close deal won/lost | ✅ | ✅ |  |  | Human approval required |
| Add note |  | ✅ | ✅ | ✅ | Low-risk if summary is clean |
| Create task |  | ✅ | ✅ | ✅ | Safe with templates |
| Send site acknowledgment |  | ✅ | ✅ | ✅ | Brand-safe only |
| Draft personal Gmail |  | ✅ | ✅ |  | Draft only |
| Send personal Gmail | ✅ | ✅ |  |  | Explicit approval required |
| Assign owner | ✅ | ✅ |  |  | Avoid wrong owner |
| Merge contacts | ✅ | ✅ |  |  | Never blind |
| Delete/cancel records | ✅ | ✅ |  |  | Never blind |
| Weekly CRM report |  | ✅ | ✅ |  | Needs data scope clarity |
| n8n webhook logging |  |  | ✅ | ✅ | Safe if no sensitive raw docs |
| Sensitive document handling | ✅ | ✅ |  |  | Human review |

---

## 4. Low-Risk Automation

Generally safe to automate:

- Normalize email/phone
- Classify form type
- Search HubSpot
- Add source note
- Create templated task
- Log workflow result
- Send brand-safe acknowledgment
- Add Gmail processing label
- Create audit log row
- Route unclear cases to manual review

---

## 5. Medium-Risk Automation

Automate only with conditions:

- Create contact
- Update blank contact fields
- Create funding deal
- Update deal stage
- Create associations
- Create partner onboarding task
- Draft Gmail reply
- Create missing docs task
- Add lifecycle status note

Conditions:

- Dedupe completed
- Required fields present
- No conflicts
- Valid property values
- Idempotency key exists
- Human review flag when uncertain

---

## 6. High-Risk Actions

Require human approval:

- Company creation
- Deal creation from ambiguous intake
- Closing deals
- Owner reassignment
- Sending personal email
- Merging records
- Deleting/canceling records
- Updating conflicting fields
- Public profile publication
- Sensitive document interpretation
- Funding-specific claims

---

## 7. Never Automate Blindly

Never blindly automate:

```text
Approval/funding decisions
Funding guarantees
Company creation from vague data
Deal close won/lost
Merges/deletions
Sensitive file copying
Personal Gmail sending
Public GitHub issues with private applicant data
Owner changes
Legal/compliance responses
```

---

## 8. Confidence Thresholds

Suggested AI confidence rules:

| Confidence | Action |
|---:|---|
| 0.90+ | Can proceed under automation if low-risk |
| 0.75–0.89 | AI-assisted; create proposal |
| 0.50–0.74 | Manual review required |
| Below 0.50 | Do not act; ask/review |

---

## 9. Human Review Triggers

Always trigger human review if:

- Multiple HubSpot matches
- No email/phone
- Company unclear
- Deal duplicate risk
- Funding amount vague but deal requested
- Conflicting CRM values
- Sensitive docs involved
- Applicant complaint/escalation
- Legal/compliance concern
- Low AI confidence
- New workflow type not covered by SOP

---

## 10. Automation Readiness Checklist

Before automating a workflow:

```markdown
- [ ] Source system defined
- [ ] Payload schema defined
- [ ] Idempotency key defined
- [ ] HubSpot search-first logic included
- [ ] Duplicate handling included
- [ ] Field mapping verified
- [ ] Human approval rules defined
- [ ] Error handling defined
- [ ] Audit logging included
- [ ] Sensitive data rules included
- [ ] Rollback/manual recovery plan exists
```

---

## 11. Automation Rollout Phases

### Phase 1 — AI-Assisted Only

- Parse data
- Propose actions
- Draft emails
- Human executes or approves

### Phase 2 — Low-Risk Automation

- Search HubSpot
- Add notes
- Create tasks
- Send site acknowledgments
- Log audit rows

### Phase 3 — Conditional CRM Writes

- Create contacts
- Update blank fields
- Create deals under strict criteria
- Create associations under rules

### Phase 4 — Advanced Orchestration

- Multi-system routing
- Partner profile workflows
- Weekly reports
- n8n webhook coordination
- GPT Actions with approval gates

Do not jump to Phase 4 because the demo looked cute.

---

## 12. Operational Standard

Automate only when the workflow is:

- Repeated
- Well-defined
- Dedupe-safe
- Error-handled
- Logged
- Reversible or low-risk
- Approval-gated when needed

The best automation is boring, predictable, and accountable.

The worst automation is fast, confident, and wrong.
