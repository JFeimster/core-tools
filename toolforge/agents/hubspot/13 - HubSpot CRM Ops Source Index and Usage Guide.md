# 13 - HubSpot CRM Ops Source Index and Usage Guide

## HubSpot CRM Ops Source Index and Usage Guide  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document is the source index for the **HubSpot CRM Ops** project.

Use it to determine which source document should guide a specific HubSpot, Gmail, applicant intake, or CRM cleanup task.

As the project source library grows, this file helps prevent the assistant from pulling rules from the wrong document or treating every CRM request like the same generic task.

The goal is to make the project easier to use, easier to maintain, and harder to screw up.

---

## 2. Core Operating Rule

When working inside the HubSpot CRM Ops project:

1. Identify the user’s task type.
2. Match the task to the correct source document.
3. Apply the relevant SOP/rules.
4. Search HubSpot before any create/update action.
5. Propose changes before execution.
6. Wait for approval unless approval has been waived.
7. Execute only approved actions.
8. Return links/results clearly.

If multiple docs apply, use the most specific doc first, then reference the broader playbook.

Specific beats general.

---

## 3. Source Library Overview

| File | Primary Purpose | Use When |
|---|---|---|
| `01 - HubSpot CRM Ops Playbook.md` | Master operating rules | Any HubSpot CRM Ops task |
| `02 - Giggle BankBreezy Applicant SOP.md` | Giggle / BankBreezy applicant handling | Applicant may fit Giggle, BankBreezy, same-day funding, or parallel lane |
| `03 - HubSpot Task Templates.md` | Task naming, timing, notes, and cadence | Creating/reviewing follow-up tasks |
| `04 - HubSpot Email Templates.md` | Reusable email copy and tone rules | Drafting applicant, partner, or site-side emails |
| `05 - HubSpot Thread Names and Starter Prompts.md` | Thread organization | Starting new focused project chats |
| `06 - Funding Applicant Intake to HubSpot Mapping.md` | Field/property mapping | Mapping applicant intake into HubSpot fields/notes |
| `07 - HubSpot Connector Actions Playbook.md` | Connector execution rules | Using HubSpot connector to search/create/update records |
| `08 - HubSpot Record Creation Payload Examples.md` | Example action payloads/plans | Preparing proposed record creation/update actions |
| `09 - HubSpot Pipeline and Stage Rules.md` | Deal pipeline/stage logic | Creating/updating deals and stages |
| `10 - HubSpot Duplicate Prevention and Cleanup SOP.md` | Duplicate/stale/orphan cleanup | CRM cleanup, dedupe, stale deals, overdue tasks |
| `11 - Gmail + HubSpot Logging SOP.md` | Gmail-to-HubSpot memory | Logging email context into notes/tasks/deals |
| `12 - Applicant Intake Parsing Guide.md` | Parsing messy applicant data | Extracting and normalizing form/email/screenshot intake |

---

## 4. Which File to Use by Task Type

### 4.1 General HubSpot CRM Work

Use:

```text
01 - HubSpot CRM Ops Playbook.md
07 - HubSpot Connector Actions Playbook.md
```

Best for:

- General CRM operating rules
- Search-first logic
- Approval rules
- Structured fields vs notes
- Associations
- Connector safety
- Write-action guardrails

---

### 4.2 New Funding Applicant Intake

Use:

```text
12 - Applicant Intake Parsing Guide.md
06 - Funding Applicant Intake to HubSpot Mapping.md
01 - HubSpot CRM Ops Playbook.md
07 - HubSpot Connector Actions Playbook.md
```

Workflow:

1. Parse raw intake.
2. Map verified fields.
3. Search HubSpot.
4. Propose updates.
5. Execute only after approval.

Best for:

- Website funding applications
- Wix forms
- Gmail inquiries
- Manual intake details
- Screenshots
- Messy applicant messages

---

### 4.3 Giggle / BankBreezy Applicants

Use:

```text
02 - Giggle BankBreezy Applicant SOP.md
06 - Funding Applicant Intake to HubSpot Mapping.md
03 - HubSpot Task Templates.md
04 - HubSpot Email Templates.md
11 - Gmail + HubSpot Logging SOP.md
```

Best for:

- Same-day funding routing
- Giggle Finance routing
- BankBreezy dashboard next steps
- Bank-link follow-up
- Lowest monthly revenue logging
- Personal vs business bank account context
- Parallel funding lane follow-up

---

### 4.4 Deal Creation or Deal Stage Updates

Use:

```text
09 - HubSpot Pipeline and Stage Rules.md
08 - HubSpot Record Creation Payload Examples.md
07 - HubSpot Connector Actions Playbook.md
01 - HubSpot CRM Ops Playbook.md
```

Best for:

- Creating funding deals
- Choosing Sales Pipeline vs Ecommerce Pipeline
- Mapping applicant status to deal stage
- Handling deal amount
- Avoiding duplicate active deals
- Associating contacts/companies/deals

---

### 4.5 Task Creation / Follow-Up Cadence

Use:

```text
03 - HubSpot Task Templates.md
02 - Giggle BankBreezy Applicant SOP.md
11 - Gmail + HubSpot Logging SOP.md
```

Best for:

- Next-day Giggle follow-up
- 48-hour no-response follow-up
- Bank-link check
- Missing docs follow-up
- Underwriting update follow-up
- Business funding parallel lane follow-up
- Partner follow-up tasks

---

### 4.6 Gmail Drafts and Email Follow-Up

Use:

```text
04 - HubSpot Email Templates.md
11 - Gmail + HubSpot Logging SOP.md
03 - HubSpot Task Templates.md
```

Best for:

- Personal Gmail drafts
- Wix/site-side acknowledgment emails
- BankBreezy/Giggle follow-ups
- Missing docs emails
- No-response follow-ups
- Provider delay responses
- Partner emails
- Email-to-note/task workflows

---

### 4.7 Field Mapping / Property Decisions

Use:

```text
06 - Funding Applicant Intake to HubSpot Mapping.md
12 - Applicant Intake Parsing Guide.md
07 - HubSpot Connector Actions Playbook.md
```

Best for:

- `funding_requested`
- `purpose`
- `date_of_birth`
- `dob`
- `current_credit_score`
- `call_requested`
- Company website/social fields
- Contact website/social fields
- Dropdown option mappings
- Note-only details
- Unverified property decisions

---

### 4.8 CRM Cleanup and Duplicates

Use:

```text
10 - HubSpot Duplicate Prevention and Cleanup SOP.md
01 - HubSpot CRM Ops Playbook.md
07 - HubSpot Connector Actions Playbook.md
09 - HubSpot Pipeline and Stage Rules.md
```

Best for:

- Duplicate contacts
- Duplicate companies
- Duplicate deals
- Stale deals
- Orphaned tasks
- Unassociated notes
- Speculative companies
- Pipeline cleanup
- Overdue tasks
- Giggle / BankBreezy cleanup

---

### 4.9 Thread Organization

Use:

```text
05 - HubSpot Thread Names and Starter Prompts.md
```

Best for:

- Starting a new focused thread
- Choosing the right thread type
- Avoiding mixed-purpose chats
- Keeping applicant, deal, email, and cleanup work separated

---

## 5. Recommended Operating Sequence by Workflow

### 5.1 Funding Applicant Intake Workflow

Use this source order:

```text
12 → 06 → 01 → 07 → 08 → 03 / 04 / 09 as needed
```

Meaning:

1. Parse applicant intake.
2. Map fields.
3. Apply core CRM rules.
4. Use connector safely.
5. Prepare proposed action payload.
6. Add tasks/emails/deal stages as needed.

---

### 5.2 Giggle / BankBreezy Workflow

Use this source order:

```text
02 → 12 → 06 → 03 → 04 → 11 → 07
```

Meaning:

1. Apply Giggle / BankBreezy SOP.
2. Parse the applicant.
3. Map verified fields.
4. Create follow-up cadence.
5. Draft any needed email.
6. Log Gmail context if relevant.
7. Execute HubSpot connector actions only after approval.

---

### 5.3 HubSpot Deal Workflow

Use this source order:

```text
09 → 08 → 07 → 01
```

Meaning:

1. Choose pipeline/stage.
2. Prepare record action plan/payload.
3. Use connector safely.
4. Apply global CRM rules.

---

### 5.4 Email + CRM Logging Workflow

Use this source order:

```text
04 → 11 → 03 → 07
```

Meaning:

1. Draft the email in the right tone.
2. Decide whether/how to log in HubSpot.
3. Create a task if needed.
4. Execute connector action only after approval.

---

### 5.5 Cleanup Workflow

Use this source order:

```text
10 → 07 → 01 → 09
```

Meaning:

1. Identify duplicate/stale/orphan/speculative issue.
2. Search and inspect through connector.
3. Apply global CRM rules.
4. Update deal pipeline/stage only if appropriate.

---

## 6. Conflict Resolution Rules

If two source docs appear to conflict, use these priority rules.

### 6.1 Safety Beats Convenience

If one doc says “execute” but another says “confirm first,” confirm first.

### 6.2 Verified Fields Beat Guesses

If a field is not verified in the mapping doc or connector property lookup, do not write to it.

Use a note.

### 6.3 Specific SOP Beats General Playbook

For Giggle / BankBreezy applicants, use the Giggle / BankBreezy SOP before the general playbook.

For deal stages, use the Pipeline and Stage Rules doc before generic deal advice.

### 6.4 Notes Preserve Ambiguity

When unsure, do not force data into a field.

Use a note and explain why.

### 6.5 Approval Beats Automation

Do not write to HubSpot without approval unless approval has been explicitly waived for the current chat.

---

## 7. Default Response Patterns

### 7.1 For New Applicant Intake

```markdown
I’ll parse the applicant intake first, then map verified HubSpot fields, search existing HubSpot records, and propose changes before writing anything.
```

### 7.2 For Deal Work

```markdown
I’ll check whether an existing deal already exists, then recommend the correct pipeline/stage and amount handling before proposing any update.
```

### 7.3 For Gmail Drafts

```markdown
I’ll draft the email in the right sending context and recommend whether the email should also trigger a HubSpot note or follow-up task.
```

### 7.4 For Cleanup

```markdown
I’ll search and review the records first, flag duplicates/stale/orphaned items, then propose cleanup actions with risk levels before changing anything.
```

---

## 8. Source Maintenance Rules

Update source files when:

- New HubSpot fields are verified
- New dropdown options are confirmed
- New pipelines/stages are added
- A funding-specific pipeline is created
- Giggle / BankBreezy routing rules change
- New email templates are added
- New task cadence patterns are created
- Connector capabilities change
- CRM cleanup patterns repeat often enough to become SOP

Do not bury new operational rules only in a chat.

If it matters more than once, it belongs in a source file.

---

## 9. Recommended Future Source Files

The current library is strong. Future files may include:

```text
14 - Partner Applicant Intake to HubSpot Mapping.md
15 - HubSpot Owner Assignment and Handoff Rules.md
16 - Funding Applicant Lifecycle Status SOP.md
17 - BankBreezy and Giggle Link Routing Reference.md
18 - HubSpot Reporting and Weekly Review SOP.md
19 - Wix Forms to HubSpot Intake Source Mapping.md
20 - Partner/Broker Profile CRM SOP.md
```

Recommended next source file after this index:

```text
14 - Partner Applicant Intake to HubSpot Mapping.md
```

Reason:

The current mapping files focus mostly on funding applicants. Partner applicants and broker profiles have different fields, notes, associations, and follow-up logic.

---

## 10. Operational Standard

This source index should help the assistant quickly answer:

- Which document applies?
- What workflow is this?
- What rules should govern the response?
- What should be searched first?
- What should be proposed before execution?
- What should be mapped to fields vs notes?
- What should trigger tasks or emails?
- What should not be touched?

The project source library is now the operating system.

This index is the map.

Use the map before driving the CRM truck through the wall.
