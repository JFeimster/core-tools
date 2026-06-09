# File 3: Task Template Doc

## HubSpot Task Templates  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document provides reusable HubSpot task templates for Moonshine Capital’s funding applicant, Giggle / BankBreezy, and follow-up workflows.

The goal is to make every task clear, actionable, properly associated, and useful to whoever opens the CRM next.

A good HubSpot task should answer four questions instantly:

1. Who needs follow-up?
2. Why are we following up?
3. What exactly needs to happen?
4. Which contact, deal, or company does this belong to?

No vague “follow up” nonsense. That is how CRMs become haunted houses with Wi-Fi. 👻

---

## 2. Core Task Rules

Every HubSpot task should include:

- Clear task title
- Specific due date or due timing
- Useful task notes
- Correct association to contact, deal, and/or company
- Status
- Follow-up context
- Next action guidance

Do not create tasks that are too vague to execute.

Bad task:

> Follow up

Good task:

> Follow up with Anthony Sanders — confirm BankBreezy quote started

---

## 3. Naming Conventions

Use consistent task naming so the CRM remains searchable and scannable.

### 3.1 Recommended Naming Formula

```text
[Action] — [Applicant Name] — [Specific Reason]
```

Examples:

```text
Follow up — Anthony Sanders — confirm BankBreezy quote started
```

```text
Check status — Maria Lopez — confirm bank account linked
```

```text
Request docs — James Carter — missing bank statements
```

```text
48-hour follow-up — Nina Patel — no response after funding link
```

---

## 4. Task Title Style Rules

Use task titles that are:

- Specific
- Human-readable
- Action-oriented
- Short enough to scan
- Clear about the funding context

Avoid titles like:

- Follow up
- Call client
- Check status
- Funding
- Need docs
- Applicant

Preferred verbs:

- Follow up
- Check status
- Confirm
- Request
- Review
- Send
- Call
- Email
- Update
- Verify

---

## 5. Due Date / Timing Conventions

Use practical timing based on applicant status and urgency.

| Situation | Recommended Due Timing |
|---|---|
| Funding link sent | Next business day |
| No response after link sent | 48 hours after first follow-up |
| Bank-link completion needed | Same day or next business day |
| Missing docs | Same day or next business day |
| Underwriting pending | 1–2 business days after submission |
| Larger funding request / parallel lane | 1–2 business days after initial routing |
| Applicant stalled for more than 3 days | Final check-in or nurture task |
| Partner applicant follow-up | 1–3 business days depending on urgency |

When in doubt, use the next business day for hot funding applicants.

Money has momentum. If the applicant is motivated today, do not schedule follow-up for the heat death of the universe.

---

## 6. Status Usage

Use task status consistently.

Recommended status logic:

| Status | Use When |
|---|---|
| Not Started / Open | Task has been created but not completed |
| In Progress | Follow-up has started but still needs another action |
| Completed | The task action was fully handled |
| Deferred / Rescheduled | Timing changed because applicant/provider needs more time |
| Canceled | Task no longer applies |

If HubSpot only supports simple open/completed task status in the active workspace, use:

- Open for incomplete tasks
- Completed only when the task has actually been handled

Do not mark a task completed just because an email was drafted. Mark it completed after the actual follow-up action is done or after the user confirms completion.

---

## 7. Association Rules

Every task should be associated to the correct CRM records.

### 7.1 Contact Only

Associate to contact only when:

- No deal exists yet
- Funding intent is unclear
- Applicant needs basic follow-up
- Business entity is missing or unclear
- The task relates to relationship management, not a specific funding file

Example:

> Contact-only task for applicant who submitted name/email but did not provide enough funding details to justify a deal.

---

### 7.2 Contact + Deal

Associate to contact + deal when:

- A funding opportunity exists
- Applicant was sent a funding link
- Applicant is in Giggle / BankBreezy workflow
- Applicant needs docs, underwriting follow-up, or bank-link completion
- The task relates to moving a deal forward

This is the default association for active funding applicants.

---

### 7.3 Contact + Company + Deal

Associate to contact + company + deal when:

- A valid company exists
- The funding request is tied to that business
- The company is not speculative
- The contact is clearly associated with the company

Do not create or associate a company just to make the CRM look more complete.

Clean CRM beats fake completeness every day.

---

### 7.4 Deal Only

Avoid deal-only task association unless there is a specific reason.

Most applicant tasks should include at least the contact.

A deal without the person attached is like a treasure map with no island.

---

## 8. Reusable Task Note Format

Use this structure inside HubSpot task notes.

```markdown
Context:
[Brief summary of why this task exists.]

Action needed:
[Specific action to take.]

Applicant status:
[Application started / link sent / no response / bank not linked / docs missing / underwriting pending / etc.]

Routing context:
[Giggle / BankBreezy / business funding lane / parallel lane / unknown.]

Important details:
- Requested amount: [Amount or “Not provided”]
- Bank account type: [Personal / Business / Unknown]
- Lowest monthly revenue: [Amount or “Not provided”]
- Link sent: [Yes / No / Which link]

Next step after completion:
[What should happen after this task is handled.]
```

---

# 9. Reusable Task Templates

---

## Template 1 — Next-Day Giggle Follow-Up

### Use Case

Use this when an applicant has been routed toward Giggle, same-day funding, or a BankBreezy dashboard step and should be checked the next business day.

### Task Title

```text
Follow up — [Applicant Name] — confirm Giggle / BankBreezy application started
```

Alternative:

```text
Next-day follow-up — [Applicant Name] — funding link sent
```

### Due Timing

```text
Next business day after link/application step is sent
```

### Status

```text
Open / Not Started
```

### Recommended Associations

| Record Type | Associate? | Notes |
|---|---:|---|
| Contact | Yes | Always associate to applicant contact |
| Deal | Yes, if deal exists | Use when funding opportunity is active |
| Company | Only if valid company exists | Do not create company just for this task |

### Task Notes

```markdown
Context:
Applicant was routed toward Giggle / BankBreezy funding review and needs next-day follow-up.

Action needed:
Confirm whether applicant started the application or quote process. If not, encourage them to complete the next step while the funding need is still active.

Applicant status:
Funding link/application step sent. Awaiting confirmation of start/completion.

Routing context:
Applicant appears to be a potential Giggle / BankBreezy candidate based on available intake details. No approval, funding amount, terms, or timeline guaranteed.

Important details:
- Requested amount: [Amount or “Not provided”]
- Bank account type: [Personal / Business / Unknown]
- Lowest monthly revenue: [Amount or “Not provided”]
- Link sent: [BankBreezy dashboard / Giggle / Other]

Next step after completion:
If applicant started application, create/check bank-link task. If applicant has not started, send reminder or personal follow-up email.
```

---

## Template 2 — 48-Hour No-Response Follow-Up

### Use Case

Use this when an applicant has not responded within 48 hours after receiving a funding link, application step, or personal follow-up.

### Task Title

```text
48-hour follow-up — [Applicant Name] — no response after funding link
```

Alternative:

```text
Follow up — [Applicant Name] — no response after BankBreezy link
```

### Due Timing

```text
48 hours after first link or follow-up email
```

### Status

```text
Open / Not Started
```

### Recommended Associations

| Record Type | Associate? | Notes |
|---|---:|---|
| Contact | Yes | Always associate to applicant contact |
| Deal | Yes, if funding opportunity exists | Recommended for active funding requests |
| Company | Only if valid company exists | Associate only when business entity is clear |

### Task Notes

```markdown
Context:
Applicant has not responded after receiving funding next-step instructions or application link.

Action needed:
Send a short follow-up asking whether they still want to move forward and whether they had trouble with the application or bank connection step.

Applicant status:
No response after initial funding link/follow-up.

Routing context:
Funding opportunity may still be active, but applicant has not confirmed progress. Keep language helpful and urgency-based without sounding desperate.

Important details:
- Requested amount: [Amount or “Not provided”]
- Bank account type: [Personal / Business / Unknown]
- Lowest monthly revenue: [Amount or “Not provided”]
- Link sent: [BankBreezy dashboard / Giggle / Other]

Next step after completion:
If applicant replies, update note and create appropriate next task. If no response after this follow-up, consider final check-in or nurture status.
```

---

## Template 3 — Check If Bank Linked

### Use Case

Use this when the applicant has started an application or quote process and the next critical step is confirming whether they linked their bank account.

### Task Title

```text
Check status — [Applicant Name] — confirm bank account linked
```

Alternative:

```text
Bank-link check — [Applicant Name] — application status
```

### Due Timing

```text
Same day or next business day after application start
```

Use same day for urgent applicants or same-day funding requests.

### Status

```text
Open / Not Started
```

### Recommended Associations

| Record Type | Associate? | Notes |
|---|---:|---|
| Contact | Yes | Required |
| Deal | Yes | Recommended because this is funding-file-specific |
| Company | Only if valid company exists | Associate if company is part of funding file |

### Task Notes

```markdown
Context:
Applicant may have started the funding application or quote process. Need to confirm whether bank account has been linked, since this may be required before review can continue.

Action needed:
Check with applicant or available provider/dashboard context to confirm whether bank connection is complete. If not complete, send reminder and offer help if they are stuck.

Applicant status:
Application/quote started or expected. Bank-link status unknown.

Routing context:
Bank-link completion is a key next step for Giggle / BankBreezy review. No approval or timeline guaranteed.

Important details:
- Requested amount: [Amount or “Not provided”]
- Bank account type: [Personal / Business / Unknown]
- Lowest monthly revenue: [Amount or “Not provided”]
- Link sent: [BankBreezy dashboard / Giggle / Other]

Next step after completion:
If bank is linked, update note and create underwriting/status follow-up task. If bank is not linked, send bank-link completion reminder.
```

---

## Template 4 — Underwriting Update Follow-Up

### Use Case

Use this when an applicant has completed the application or bank-link step and is waiting for review, underwriting, offer status, or provider update.

### Task Title

```text
Underwriting follow-up — [Applicant Name] — check funding review status
```

Alternative:

```text
Check status — [Applicant Name] — underwriting pending
```

### Due Timing

```text
1–2 business days after application/bank-link completion
```

For urgent same-day funding cases, check sooner if the provider workflow supports it.

### Status

```text
Open / Not Started
```

### Recommended Associations

| Record Type | Associate? | Notes |
|---|---:|---|
| Contact | Yes | Required |
| Deal | Yes | Required for active funding review |
| Company | Only if valid company exists | Associate if company is valid and relevant |

### Task Notes

```markdown
Context:
Applicant appears to have completed the application and/or bank-link step. Funding review or underwriting status needs to be checked.

Action needed:
Check available status and follow up with applicant if there is an update, missing step, or next action required.

Applicant status:
Underwriting/review pending.

Routing context:
Applicant is in active funding review. Preserve provider/application status without promising approval, amount, terms, or timeline.

Important details:
- Requested amount: [Amount or “Not provided”]
- Bank account type: [Personal / Business / Unknown]
- Lowest monthly revenue: [Amount or “Not provided”]
- Application started: [Yes / No / Unknown]
- Bank linked: [Yes / No / Unknown]

Next step after completion:
If status is available, update HubSpot note and deal stage if appropriate. If docs or additional action are needed, create missing-docs or applicant-action task.
```

---

## Template 5 — Missing Docs Follow-Up

### Use Case

Use this when the applicant needs to provide documents, screenshots, bank statements, ID, business documentation, or other required information.

### Task Title

```text
Request docs — [Applicant Name] — [specific missing item]
```

Examples:

```text
Request docs — Anthony Sanders — missing bank statements
```

```text
Request docs — Maria Lopez — missing ID verification
```

```text
Request docs — James Carter — missing business bank screenshots
```

### Due Timing

```text
Same day or next business day
```

Use same-day due timing if the applicant is actively trying to move quickly.

### Status

```text
Open / Not Started
```

### Recommended Associations

| Record Type | Associate? | Notes |
|---|---:|---|
| Contact | Yes | Required |
| Deal | Yes, if funding opportunity exists | Strongly recommended |
| Company | Only if valid company exists | Use if docs are business-related |

### Task Notes

```markdown
Context:
Applicant is missing required documentation or supporting information needed to continue funding review.

Action needed:
Request the missing item(s) from applicant and explain that review may be delayed until received.

Missing items:
- [Document/item 1]
- [Document/item 2]
- [Document/item 3]

Applicant status:
Application/funding review cannot move forward cleanly until missing information is provided.

Routing context:
Docs are needed for funding review. Do not guarantee approval or funding timeline.

Important details:
- Requested amount: [Amount or “Not provided”]
- Bank account type: [Personal / Business / Unknown]
- Lowest monthly revenue: [Amount or “Not provided”]

Next step after completion:
If applicant sends documents, add note to HubSpot and update deal/task status. If no response, create 48-hour no-response follow-up.
```

---

## Template 6 — Business Funding Parallel Lane Follow-Up

### Use Case

Use this when the applicant may benefit from more than one funding path.

Common scenarios:

- Applicant requested a larger amount
- Giggle may be useful for fast initial funding but not the entire need
- BankBreezy / larger business funding lane should remain active
- Applicant is delayed with another provider
- Applicant needs a faster alternative while preserving larger funding options

### Task Title

```text
Follow up — [Applicant Name] — review parallel business funding options
```

Alternative:

```text
Parallel funding follow-up — [Applicant Name] — Giggle + BankBreezy lane
```

### Due Timing

```text
1–2 business days after initial routing or funding link
```

### Status

```text
Open / Not Started
```

### Recommended Associations

| Record Type | Associate? | Notes |
|---|---:|---|
| Contact | Yes | Required |
| Deal | Yes | Recommended for active funding opportunity |
| Company | Only if valid company exists | Use when company is clearly provided |

### Task Notes

```markdown
Context:
Applicant may need a parallel funding strategy. Giggle / same-day option may help with fast access, while BankBreezy or larger business funding may better match the full requested amount.

Action needed:
Follow up with applicant to confirm whether they started the fast funding step and whether they still want to explore larger business funding options.

Applicant status:
Applicant has been routed toward one funding step, but full need may require an additional/parallel lane.

Routing context:
Use directional language. Position Giggle/fast funding as an initial review option and BankBreezy/business funding as a potential broader lane if applicable. Do not guarantee approval, amount, terms, or timing.

Important details:
- Requested amount: [Amount or “Not provided”]
- Bank account type: [Personal / Business / Unknown]
- Lowest monthly revenue: [Amount or “Not provided”]
- Current provider delay: [Yes / No / Details]
- Link sent: [BankBreezy dashboard / Giggle / Other]

Next step after completion:
If applicant wants larger funding review, update deal note and create underwriting/application task. If applicant only wants fast funding, continue Giggle / BankBreezy dashboard follow-up sequence.
```

---

# 10. Optional Additional Task Templates

---

## Template 7 — Application Received Review Task

### Use Case

Use when an application has been received but has not yet been reviewed or routed.

### Task Title

```text
Review intake — [Applicant Name] — route funding application
```

### Due Timing

```text
Same day or next business day
```

### Recommended Associations

- Contact
- Deal, if already created
- Company, only if valid business exists

### Task Notes

```markdown
Context:
New funding application received and needs review for routing.

Action needed:
Review intake details, search existing HubSpot records, determine whether applicant fits Giggle, BankBreezy, another funding lane, or needs more information.

Review items:
- Requested amount
- Funding purpose
- Time in business
- Monthly revenue
- Lowest monthly revenue
- Bank account type
- Business name/entity status
- Existing provider/application issues

Next step after completion:
Add routing note, create/update deal if appropriate, and create follow-up task.
```

---

## Template 8 — Final Check-In / Nurture Transition

### Use Case

Use when applicant has not responded after multiple follow-ups and should either receive one final check-in or be moved into nurture.

### Task Title

```text
Final check-in — [Applicant Name] — funding follow-up inactive
```

### Due Timing

```text
3–5 business days after 48-hour no-response follow-up
```

### Recommended Associations

- Contact
- Deal, if one exists

### Task Notes

```markdown
Context:
Applicant has not responded after prior funding follow-up attempts.

Action needed:
Send one final check-in asking whether they still want to move forward. If no response, update CRM status or note as inactive/nurture depending on available pipeline logic.

Applicant status:
No response after multiple follow-up attempts.

Next step after completion:
If applicant replies, re-open active follow-up. If no reply, update note and consider moving deal/contact to nurture or inactive status.
```

---

# 11. Recommended Task Sequence Logic

Use this sequence for Giggle / BankBreezy-routed applicants.

## 11.1 Standard Active Applicant Sequence

```text
Day 0: Applicant receives funding link / next step
Day 1: Next-day Giggle / BankBreezy follow-up
Day 2: Check if application started or bank linked
Day 3: 48-hour no-response follow-up, if no reply
Day 4–5: Underwriting/status follow-up, if application started
Day 5–7: Final check-in or nurture transition, if inactive
```

---

## 11.2 Larger Funding / Parallel Lane Sequence

```text
Day 0: Applicant receives fast funding link + larger funding context
Day 1: Confirm application/quote started
Day 2: Check bank-link status
Day 2–3: Review parallel business funding options
Day 3–4: Underwriting/status follow-up
Day 5+: Missing docs, final check-in, or nurture transition depending on applicant response
```

---

## 11.3 No-Response Sequence

```text
Day 0: Send funding link or next-step email
Day 1: Next-day follow-up
Day 3: 48-hour no-response follow-up
Day 5–7: Final check-in
After final check-in: mark inactive/nurture if no response, depending on available CRM fields/stages
```

---

# 12. Proposed Task Creation Table

Use this format before creating multiple tasks in HubSpot.

```markdown
## Proposed HubSpot Tasks

| Task | Due Timing | Notes Summary | Associations |
|---|---|---|---|
| Follow up — [Name] — confirm Giggle / BankBreezy application started | Next business day | Confirm whether applicant started application/quote process | Contact + Deal |
| 48-hour follow-up — [Name] — no response after funding link | 48 hours after first follow-up | Check whether applicant still wants to proceed | Contact + Deal |
| Check status — [Name] — confirm bank account linked | Same day / next business day after application start | Confirm bank-link completion | Contact + Deal |

Approve? [✅ Yes / ❌ No]
```

---

# 13. Task Quality Checklist

Before creating a task, confirm:

```markdown
- [ ] Task title is specific
- [ ] Task has clear due timing
- [ ] Task notes explain what to do
- [ ] Task is associated to contact
- [ ] Task is associated to deal if funding opportunity exists
- [ ] Task is associated to company only if valid company exists
- [ ] Task does not duplicate an existing open task
- [ ] Task preserves Giggle / BankBreezy context when relevant
- [ ] Task avoids approval/funding guarantees
- [ ] Task tells the next operator what happens after completion
```

---

# 14. Common Task Mistakes to Avoid

Avoid these mistakes:

- Creating vague tasks like “follow up”
- Creating duplicate follow-up tasks
- Leaving tasks unassociated
- Associating tasks to speculative companies
- Creating deal-related tasks without associating the deal
- Forgetting to include bank-link status
- Forgetting requested amount or revenue context
- Marking tasks complete before action is actually handled
- Creating tasks with no due date
- Using task notes that repeat the title but add no context
- Overcomplicating a task when a short clear note would work

---

# 15. Operational Standard

Every HubSpot task should be clear enough that another operator can open it and immediately know:

- Why the task exists
- Who it belongs to
- What has already happened
- What action is required
- What should happen next

The task is not just a reminder.

It is the next domino in the funding workflow.

Set it up so the next person can knock it down cleanly. ⚡

---

**Reply APPROVED to continue to the next file.**
