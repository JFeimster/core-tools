# 10 - HubSpot Duplicate Prevention and Cleanup SOP

## HubSpot Duplicate Prevention and Cleanup SOP  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This SOP defines how to prevent, identify, review, and clean up duplicate or messy HubSpot CRM records for Moonshine Capital.

Use this document when working on:

- Duplicate contacts
- Duplicate companies
- Duplicate deals
- Orphaned deals
- Unassociated notes/tasks
- Fake or speculative company records
- Stale funding applicants
- Overdue tasks
- Pipeline cleanup
- Giggle / BankBreezy applicant cleanup
- CRM hygiene reports

The goal is to keep HubSpot accurate, searchable, and operationally useful.

A messy CRM is not “data.” It is a junk drawer with revenue hiding under expired batteries.

---

## 2. Core Cleanup Rule

Do not delete, overwrite, merge, or modify CRM records blindly.

Before cleanup:

1. Search relevant records.
2. Review current values.
3. Check associations.
4. Check existing notes/tasks/deals.
5. Identify the safest cleanup action.
6. Propose exact changes.
7. Get approval before write actions.

If a cleanup action could destroy useful history, do not execute it without explicit approval.

---

## 3. Duplicate Prevention Rules

Preventing duplicates is better than cleaning them up later.

Before creating any record:

| Object | Search First By |
|---|---|
| Contact | Email, phone, full name |
| Company | Business name, website, domain |
| Deal | Contact, company, applicant name, business name, active funding request |
| Task | Contact/deal open tasks, same title/reason |
| Note | Existing recent notes on same topic |

Default duplicate rule:

> One real person should usually have one contact record.  
> One real business/entity should usually have one company record.  
> One active funding request should usually have one active deal.

---

## 4. Contact Duplicate Detection

### 4.1 Strong Duplicate Signals

These are strong signs of duplicate contacts:

- Same email address
- Same phone number
- Same full name + same business
- Same full name + same mailing/location context
- Same person with slight name variation
- Same person created from multiple website submissions
- Same person has multiple funding applicant records

### 4.2 Weak Duplicate Signals

These need review before acting:

- Same first and last name only
- Same company name but different email
- Similar phone number formatting
- Similar email username on different domains
- Same social profile
- Same applicant notes but no matching email/phone

Do not merge or overwrite based on weak signals alone.

### 4.3 Contact Duplicate Review Table

Use this table before recommending cleanup.

```markdown
## Possible Duplicate Contacts

| Candidate | Contact ID | Email | Phone | Company Text | Associated Deals | Last Activity | Recommendation |
|---|---:|---|---|---|---:|---|---|
| Primary | [ID] | [email] | [phone] | [company] | [count] | [date] | Keep as main |
| Duplicate? | [ID] | [email] | [phone] | [company] | [count] | [date] | Review / merge / update / leave alone |
```

### 4.4 Preferred Contact Cleanup Actions

| Situation | Recommended Action |
|---|---|
| Same email on two records | Recommend merge or consolidate |
| Same phone, missing email on one | Update existing primary; avoid new duplicate |
| Same name only | Do not merge without more evidence |
| One record has more history | Keep history-rich record as primary |
| One record is empty/accidental | Recommend merge/delete only with approval |
| Conflicting values | Preserve both in note; ask before overwriting |

---

## 5. Company Duplicate Detection

### 5.1 Strong Duplicate Signals

These are strong signs of duplicate companies:

- Same company domain
- Same website URL
- Same legal business name
- Same EIN
- Same business name + same phone/address
- Same company associated to same contact/deal

### 5.2 Weak Duplicate Signals

These require caution:

- Similar business names
- Same city/state only
- Same industry only
- Similar website text
- Personal name used as company name
- Contact-level `company` text matching an actual company

### 5.3 Speculative Company Detection

A company may be fake/speculative if:

- Company name is a person’s name
- Company was created from a contact name
- Company has no website, domain, EIN, address, or business context
- Company appears to be a gig worker category rather than an entity
- Company exists only because a form field had “business name” blank or unknown
- Company has no useful associations besides the applicant
- Notes indicate business/entity was not clearly provided

Examples of bad/speculative company names:

```text
Anthony Sanders
Self Employed
N/A
Unknown
Gig Worker
Uber Driver
Not Provided
Need Funding
Business Owner
```

### 5.4 Company Cleanup Rules

| Situation | Recommended Action |
|---|---|
| Real duplicate company | Recommend merge/consolidation |
| Company is a person’s name | Review; likely remove association or mark for cleanup |
| Company has no real business data | Do not create new associations; propose cleanup |
| Contact-level company text exists only | Do not create company automatically |
| Valid business exists but fields are incomplete | Update company with verified data |
| Personal social links on company record | Move/preserve in contact note if needed |

Do not delete company records automatically. Propose cleanup.

---

## 6. Deal Duplicate Detection

### 6.1 Strong Duplicate Signals

These suggest duplicate deals:

- Same contact
- Same business/company
- Same funding request amount/range
- Same application source
- Same date or close submission window
- Same pipeline/stage
- Same BankBreezy/Giggle routing context
- Same applicant follow-up tasks
- Same notes copied across records

### 6.2 Weak Duplicate Signals

Use caution when:

- Same contact has multiple funding requests months apart
- Applicant requested a new funding amount
- Old deal was closed/lost and new request is active
- Different funding product/lane is being tracked separately
- One deal is partner-related and another is applicant-related

### 6.3 Deal Duplicate Review Table

```markdown
## Possible Duplicate Deals

| Deal | Deal ID | Pipeline | Stage | Amount | Contact | Company | Created | Last Activity | Recommendation |
|---|---:|---|---|---:|---|---|---|---|---|
| Deal A | [ID] | [pipeline] | [stage] | [amount] | [contact] | [company] | [date] | [date] | Keep / update |
| Deal B | [ID] | [pipeline] | [stage] | [amount] | [contact] | [company] | [date] | [date] | Duplicate? |
```

### 6.4 Deal Cleanup Rules

| Situation | Recommended Action |
|---|---|
| Same active funding request | Update one deal; close/archive duplicate only with approval |
| Old closed/lost deal + new request | Create/keep new deal; note prior history |
| Separate funding lanes active | Keep separate only if operationally useful |
| Duplicate deal with no notes/tasks | Recommend closing or merging context into main deal |
| Deal has no contact association | Associate correct contact or flag orphaned |
| Deal has speculative company association | Remove/revise association only with approval |

One active applicant request should not spawn five deals like CRM gremlins after midnight.

---

## 7. Orphaned Record Cleanup

### 7.1 Orphaned Deals

A deal is orphaned when:

- No contact is associated
- No company is associated and no contact exists
- Deal name is vague
- Deal has no useful notes
- Deal has no clear applicant/request context

Recommended actions:

1. Search by deal name.
2. Search associated contacts/companies if any.
3. Search notes/tasks.
4. Identify likely applicant.
5. Propose association or cleanup.

Do not delete an orphaned deal without approval.

### 7.2 Orphaned Tasks

A task is orphaned when:

- No contact/deal/company association exists
- Title is vague
- Notes do not explain what to do
- Due date exists but no record context exists

Recommended actions:

| Situation | Action |
|---|---|
| Correct contact/deal can be identified | Associate task properly |
| Task duplicates another open task | Recommend closing duplicate |
| Task is vague but useful | Rewrite/update task notes |
| Task is obsolete | Recommend completion/cancellation |
| Task cannot be understood | Ask before deleting/canceling |

### 7.3 Orphaned Notes

A note is orphaned or weak when:

- It is not associated with the relevant contact/deal/company
- It lacks applicant identity
- It references “client” with no name
- It contains routing details but no deal association
- It summarizes an email but is not connected to the contact

Recommended action:

- Associate to correct contact/deal/company if identifiable
- Add a clarifying note if needed
- Do not rewrite historical notes unless necessary

---

## 8. Stale Deal Cleanup

A stale deal is a funding opportunity with no meaningful recent movement.

### 8.1 Stale Deal Signals

- No recent notes
- No upcoming tasks
- Overdue follow-up tasks
- Applicant has not responded after multiple follow-ups
- Deal stuck in same stage for too long
- Bank link never completed
- Missing docs never provided
- Provider/application status unknown
- Deal has no clear next action

### 8.2 Stale Deal Review Table

```markdown
## Stale Deal Review

| Deal | Stage | Amount | Last Activity | Open Tasks | Issue | Recommended Action |
|---|---|---:|---|---:|---|---|
| [Deal Name] | [Stage] | [Amount] | [Date] | [Count] | No response | Final check-in or close lost |
```

### 8.3 Recommended Actions

| Stale Condition | Recommended Action |
|---|---|
| No response after first follow-up | Create/send 48-hour follow-up |
| No response after multiple follow-ups | Final check-in task/email |
| Final follow-up ignored | Mark Closed Lost or nurture, with note |
| Bank not linked | Bank-link check/reminder |
| Missing docs | Missing docs follow-up |
| Underwriting pending too long | Underwriting status check |
| Deal lacks context | Add cleanup note summarizing known facts |

---

## 9. Overdue Task Cleanup

### 9.1 Overdue Task Review

Review overdue tasks by:

- Task title
- Due date
- Associated contact/deal/company
- Task notes
- Applicant status
- Whether task is still relevant

### 9.2 Overdue Task Actions

| Task Condition | Recommended Action |
|---|---|
| Still relevant | Reschedule and update notes |
| Already handled | Mark completed |
| Duplicate exists | Complete/cancel duplicate |
| Applicant inactive | Final check-in or close/nurture |
| No context | Search associations; rewrite or cancel with approval |
| Wrong association | Reassociate if clear |

Do not mark tasks complete just because they are old.

Old does not mean done. Sometimes it just means the CRM has been quietly judging everyone.

---

## 10. Giggle / BankBreezy Cleanup Rules

For Giggle / BankBreezy applicant cleanup, confirm whether records preserve:

- Funding requested
- Bank account type
- Lowest monthly revenue
- Monthly revenue
- Time in business
- Whether BankBreezy dashboard was sent
- Whether Giggle routing was recommended
- Whether applicant was advanced to Giggle Finance
- Whether bank account was linked
- Whether follow-up task exists
- Whether no-response sequence was completed

### 10.1 Missing Routing Context

If a Giggle / BankBreezy record lacks routing context, add a note if enough information exists.

Recommended note:

```markdown
## Giggle / BankBreezy Cleanup Note

Record reviewed for routing context. Existing CRM data suggests applicant was part of Giggle / BankBreezy workflow, but prior notes did not clearly preserve bank account type, lowest monthly revenue, or routing status.

Known details:
- Funding requested: [Value]
- Bank account type: [Value or Unknown]
- Lowest monthly revenue: [Value or Unknown]
- Link sent: [Value or Unknown]
- Bank linked: [Value or Unknown]

Recommended next action:
[Follow-up task / status check / no-response closeout / leave unchanged]
```

### 10.2 Giggle / BankBreezy Cleanup Issues

| Issue | Recommended Action |
|---|---|
| Link sent but no follow-up task | Create next-day or status follow-up task |
| Bank-link status unknown | Create bank-link check task |
| Applicant never responded | Create 48-hour or final follow-up |
| Routing not documented | Add routing cleanup note |
| Duplicate Giggle deal exists | Consolidate to main active deal |
| Company created without real entity | Review company cleanup |

---

## 11. Fake / Speculative Company Cleanup

When reviewing questionable company records, ask:

1. Is this a real business/entity?
2. Is there a business website/domain?
3. Is there an EIN, address, or operating name?
4. Is this just the applicant’s personal name?
5. Is the company associated with a deal that really belongs to it?
6. Would removing the company association make the CRM cleaner?
7. Should business context be stored as contact text/note instead?

### 11.1 Company Cleanup Proposal Format

```markdown
## Speculative Company Review

| Company | Company ID | Reason Flagged | Associated Records | Recommendation |
|---|---:|---|---|---|
| [Company Name] | [ID] | Appears to be personal name | Contact + deal | Remove association / merge / leave / needs review |
```

### 11.2 Recommended Cleanup Note

```markdown
## Company Cleanup Note

Company record reviewed because it appears speculative or may have been created from applicant/person data rather than a confirmed business entity.

Recommendation:
[Keep / merge / remove association / no action]

Reason:
[Brief explanation]

No changes should be made without approval.
```

---

## 12. Cleanup Report Format

Use this format for broader CRM cleanup reviews.

```markdown
## HubSpot Cleanup Report

| Priority | Issue Type | Record(s) | Problem | Recommended Action |
|---:|---|---|---|---|
| 1 | Duplicate Contact | [Name / IDs] | Same email/phone | Merge or consolidate after approval |
| 2 | Duplicate Deal | [Deal names / IDs] | Same applicant/request | Keep primary, close/update duplicate |
| 3 | Speculative Company | [Company / ID] | Person name used as company | Review/remove association |
| 4 | Orphaned Task | [Task / ID] | No association | Reassociate or cancel |
| 5 | Stale Deal | [Deal / ID] | No recent activity | Final follow-up or close lost |
```

Include:

- Total records reviewed
- Highest-risk cleanup issues
- Recommended priority order
- Actions requiring approval
- Actions that should not be taken yet

---

## 13. Proposed Cleanup Action Format

Before executing cleanup, use this table.

```markdown
## Proposed HubSpot Cleanup Actions

| Object Type | ID | Current State | Proposed Action | Reason | Risk |
|---|---:|---|---|---|---|
| Contact | [ID] | Duplicate candidate | Merge/update/leave | Same email | Medium |
| Company | [ID] | Speculative company | Remove association / review | Person name as company | Medium |
| Deal | [ID] | Duplicate active deal | Close duplicate / add note | Same funding request | High |
| Task | [ID] | Overdue duplicate | Complete/cancel/reschedule | Already handled | Low |
| Note | [ID] | Poor association | Associate to deal/contact | Context belongs there | Low |

Approve? [✅ Yes / ❌ No]  
Want to skip confirmations for this chat? Just ask.
```

---

## 14. Cleanup Action Risk Levels

Use risk levels to protect CRM history.

| Risk Level | Meaning | Examples |
|---|---|---|
| Low | Easy to reverse or low-impact | Add note, create task, reschedule task |
| Medium | Changes relationships or record clarity | Update fields, associate records, remove wrong association |
| High | Could lose/misrepresent history | Merge records, close deals, delete/cancel records |

Default approach:

- Low risk: propose and execute after approval.
- Medium risk: explain reasoning clearly before approval.
- High risk: require explicit approval and preserve context in note.

---

## 15. What Not To Do

Do not:

- Merge contacts based on name only
- Delete companies because they look messy
- Close deals without reviewing notes/tasks
- Mark overdue tasks complete without confirming action happened
- Remove associations without checking record history
- Create new records during cleanup unless needed
- Treat old records as useless
- Overwrite conflicting data without approval
- Clean up CRM records based only on vibes
- Ignore Giggle / BankBreezy routing context

---

## 16. Default Cleanup Workflow

Use this process:

```markdown
## Default HubSpot Cleanup Workflow

1. Define cleanup target.
2. Search relevant records.
3. Review associations.
4. Review notes/tasks/deals.
5. Identify duplicate/stale/orphaned/speculative issues.
6. Classify issue risk level.
7. Recommend action.
8. Propose exact cleanup changes.
9. Wait for approval.
10. Execute approved cleanup only.
11. Add cleanup note when context matters.
12. Provide record links and summary.
```

---

## 17. Operational Standard

Good CRM cleanup should make HubSpot:

- Easier to search
- Easier to trust
- Easier to follow up from
- Easier to report from
- Less duplicate-prone
- More useful for funding workflows

Bad cleanup destroys history or hides uncertainty.

The job is not to make HubSpot look clean.

The job is to make HubSpot tell the truth.
