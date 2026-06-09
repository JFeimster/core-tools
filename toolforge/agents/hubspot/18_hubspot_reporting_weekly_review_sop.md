# 18 - HubSpot Reporting and Weekly Review SOP

## HubSpot Reporting and Weekly Review SOP  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This SOP defines how to run recurring HubSpot CRM reviews for Moonshine Capital.

Use this document for:

- Weekly CRM review
- Funding applicant status review
- Giggle / BankBreezy follow-up review
- Overdue task review
- Stale deal review
- Duplicate cleanup review
- Partner applicant review
- Pipeline health summaries
- No-response applicant review
- Missing notes/associations review

The goal is to keep the CRM clean, actionable, and revenue-oriented.

If the CRM cannot tell you who needs attention this week, it is not a CRM. It is a digital attic.

---

## 2. Recommended Weekly Review Cadence

Run a CRM review once per week.

Recommended timing:

```text
Monday morning or Friday afternoon, US/Eastern
```

Monday review is best for action planning.

Friday review is best for cleanup and closing loops.

---

## 3. Weekly Review Sections

A complete weekly review should include:

1. New funding applicants
2. Giggle / BankBreezy applicants
3. Deals needing action
4. Overdue tasks
5. Stale deals
6. Missing docs / bank-link pending
7. No-response applicants
8. Partner applicants
9. Duplicate/speculative records
10. Reporting summary and next actions

---

## 4. Review Metrics

Track these metrics when possible.

| Metric | Meaning |
|---|---|
| New contacts created | New applicant/partner records |
| New funding applicants | Contacts/deals with funding intent |
| New deals created | Funding opportunities added |
| Active deals | Deals not closed won/lost |
| Closed won deals | Funded/closed successfully |
| Closed lost deals | Declined/withdrawn/no response |
| Overdue tasks | Tasks past due |
| Upcoming tasks | Tasks due this week |
| Bank-link pending | Applicants stuck at bank connection |
| Missing docs | Applicants needing documents |
| No-response applicants | Applicants after follow-up attempts |
| Partner applicants pending | Partners needing onboarding/review |
| Duplicate risks | Possible duplicate contacts/companies/deals |

---

## 5. Funding Applicant Review

Review each active funding applicant for:

- Current lifecycle status
- Last activity
- Next task
- Funding requested
- Deal amount
- Bank account type
- Revenue / lowest monthly revenue
- Link sent status
- Bank linked status
- Missing docs
- Deal stage
- Owner
- Notes quality

### Funding Applicant Review Table

```markdown
## Funding Applicant Review

| Applicant | Deal | Status | Amount | Last Activity | Next Task | Issue | Recommended Action |
|---|---|---|---:|---|---|---|---|
| [Name] | [Deal] | [Status] | [Amount] | [Date] | [Task] | [Issue] | [Action] |
```

---

## 6. Giggle / BankBreezy Review

Review applicants routed to Giggle/BankBreezy.

Check:

- BankBreezy dashboard sent?
- Giggle recommended?
- Advanced to Giggle Finance?
- Bank linked?
- Personal/business bank?
- Lowest monthly revenue logged?
- Follow-up task exists?
- No-response sequence started/completed?

### Giggle / BankBreezy Review Table

```markdown
## Giggle / BankBreezy Review

| Applicant | Route | Link Sent | Bank Linked | Lowest Revenue | Last Follow-Up | Next Action |
|---|---|---|---|---:|---|---|
| [Name] | [Giggle/BankBreezy] | [Yes/No] | [Yes/No/Unknown] | [Value] | [Date] | [Action] |
```

---

## 7. Overdue Task Review

Review overdue tasks by:

- Due date
- Task owner
- Associated contact/deal
- Task title
- Task notes
- Whether action is still relevant

### Overdue Task Table

```markdown
## Overdue Tasks

| Task | Owner | Due Date | Associated Record | Issue | Recommended Action |
|---|---|---|---|---|---|
| [Task] | [Owner] | [Date] | [Contact/Deal] | [Issue] | [Action] |
```

Recommended actions:

| Condition | Action |
|---|---|
| Still relevant | Reschedule/update notes |
| Already completed | Mark complete |
| Duplicate task | Close duplicate |
| No longer relevant | Cancel/complete with note |
| No association | Reassociate or review |
| Applicant inactive | Final follow-up or close/nurture |

---

## 8. Stale Deal Review

A stale deal has no meaningful recent progress.

Stale signals:

- No recent notes
- No upcoming task
- Overdue task
- Bank link not completed
- Missing docs unresolved
- Applicant no response
- Stage unchanged too long
- No owner or unclear next action

### Stale Deal Table

```markdown
## Stale Deals

| Deal | Stage | Amount | Last Activity | Open Task? | Stale Reason | Recommended Action |
|---|---|---:|---|---|---|---|
| [Deal] | [Stage] | [Amount] | [Date] | [Yes/No] | [Reason] | [Action] |
```

---

## 9. No-Response Applicant Review

Review applicants who have not replied.

Classify:

| Status | Recommended Action |
|---|---|
| First no-response | 48-hour follow-up |
| Second no-response | Final check-in |
| Final follow-up ignored | Closed Lost or Nurture |
| Replied after delay | Reopen active follow-up |
| No link sent yet | Send next-step email |

No-response note:

```markdown
Applicant has not responded after [number] follow-up attempts. Recommended action: [48-hour follow-up / final check-in / close lost / nurture].
```

---

## 10. Partner Applicant Review

Review partner applicants for:

- New applications
- Onboarding calls requested
- Profile details missing
- Partner resources needed
- Training/course sent
- Broker profile status
- First lead submitted
- Inactive/no-response partner applicants

### Partner Review Table

```markdown
## Partner Applicant Review

| Partner | Status | Company/Agency | Last Activity | Missing Items | Next Action |
|---|---|---|---|---|---|
| [Name] | [Status] | [Company] | [Date] | [Items] | [Action] |
```

---

## 11. Duplicate / Cleanup Review

Review for:

- Duplicate contacts
- Duplicate companies
- Duplicate deals
- Speculative companies
- Orphaned deals
- Orphaned tasks
- Notes lacking associations
- Deals with missing contacts
- Companies created from personal names

### Cleanup Table

```markdown
## CRM Cleanup Issues

| Priority | Issue Type | Record(s) | Problem | Recommended Action | Risk |
|---:|---|---|---|---|---|
| 1 | Duplicate Contact | [IDs] | Same email | Merge/review | High |
```

---

## 12. Weekly Summary Format

Use this format for a weekly report.

```markdown
# Moonshine Capital HubSpot Weekly Review

Review period: [Date range]  
Reviewer: [Name]  
Timezone: US/Eastern

## Executive Summary

- New funding applicants:
- New partner applicants:
- Active funding deals:
- Deals needing action:
- Overdue tasks:
- Bank-link pending:
- Missing docs:
- No-response applicants:
- Cleanup issues:

## Top Priorities This Week

1. [Priority]
2. [Priority]
3. [Priority]

## Applicant Action Queue

| Applicant | Status | Next Action | Owner | Due |
|---|---|---|---|---|

## Partner Action Queue

| Partner | Status | Next Action | Owner | Due |
|---|---|---|---|---|

## Cleanup Queue

| Issue | Record | Recommended Action | Risk |
|---|---|---|---|

## Recommended HubSpot Actions

[Proposed updates requiring approval.]
```

---

## 13. Approval Rules

For weekly review:

- Reporting does not require approval.
- Searching/reading records does not require approval.
- Creating/updating records requires approval.
- Closing deals requires approval.
- Merging records requires explicit approval.
- Deleting/canceling records requires explicit approval.
- Reassigning owners requires approval.

Use proposed update tables before changes.

---

## 14. What Not To Do

Do not:

- Mark old tasks complete without confirming action happened
- Close deals just because they are old
- Merge duplicates based only on name
- Ignore missing notes/associations
- Report on tiny sample sizes as complete review
- Create tasks with vague titles
- Skip Giggle/BankBreezy routing details
- Treat weekly review as a data dump instead of action plan

---

## 15. Operational Standard

A weekly review should end with:

- Clear action queue
- Clear cleanup queue
- Clear owner/responsibility
- Clear applicant statuses
- Clear partner statuses
- No mystery next steps

The report should tell Jason where the money, mess, and momentum are.
