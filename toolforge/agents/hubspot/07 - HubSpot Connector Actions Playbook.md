# 07 - HubSpot Connector Actions Playbook

## HubSpot Connector Actions Playbook  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document explains how ChatGPT should safely use the HubSpot connector for Moonshine Capital CRM operations.

This is the execution layer for the HubSpot CRM Ops project.

Use this file when the user asks ChatGPT to:

- Search HubSpot records
- Review existing contacts, companies, deals, notes, tasks, or activities
- Create or update contacts
- Create or update companies
- Create or update deals
- Create notes
- Create tasks
- Create associations between records
- Review CRM data before making decisions
- Prepare proposed changes for approval
- Execute approved HubSpot updates

The goal is simple:

**Search first, propose clearly, get approval, execute cleanly, and provide useful record links.**

No CRM vandalism. No duplicate farms. No “I thought this was probably the right field” nonsense.

---

## 2. Confirmed Connector Context

The HubSpot connector is available for Moonshine Capital CRM operations.

Known account context:

| Item | Value |
|---|---|
| Account timezone | US/Eastern |
| Account currency | USD |
| User / owner | Jason Feimster |
| Primary user email | jasonfeimster@gmail.com |

Use **US/Eastern** for task due timing unless the user provides a different timezone.

---

## 3. Confirmed Object Availability

The connector can read and write several HubSpot CRM object types.

### 3.1 Read + Write Available

These object types can be read and written through the connector:

| Object Type | Read | Write | Use |
|---|---:|---:|---|
| Contact | Yes | Yes | Funding applicants, partners, lead records |
| Company | Yes | Yes | Real business/entity records |
| Deal | Yes | Yes | Funding opportunities and pipeline tracking |
| Note | Yes | Yes | Intake context, routing logic, summaries |
| Task | Yes | Yes | Follow-up reminders and workflow execution |
| Email | Yes | Yes | Logged one-to-one email activities |
| Call | Yes | Yes | Logged call activity |
| Meeting Event | Yes | Yes | Meetings and scheduled discussions |
| Ticket | Yes | Yes | Support-style workflows if needed |
| Product | Yes | Yes | Product catalog use cases |
| Line Item | Yes | Yes | Transaction/product line item use cases |

### 3.2 Read Only / Not Writable

These object types may be readable but are not writable through the current connector context:

| Object Type | Read | Write | Guidance |
|---|---:|---:|---|
| Quote | Yes | No | Review only; do not attempt to create/update |
| Invoice | Yes | No | Review only; do not attempt to create/update |
| Subscription | Yes | No | Review only; do not attempt to create/update |
| Cart | Yes | No | Review only |
| Order | Yes | No | Review only |
| Object List / Segment | Yes | No | Review/search only |

Do not attempt write actions on objects that are not writable.

---

## 4. Available Connector Tools

Use the HubSpot connector tools according to their purpose.

| Connector Function | Purpose | Use When |
|---|---|---|
| `get_user_details` | Confirm account/user permissions and object availability | Always before HubSpot operations in a new session |
| `search_crm_objects` | Search actual CRM records | Find contacts, companies, deals, tasks, notes, etc. |
| `get_crm_objects` | Fetch detailed CRM objects by known IDs | Inspect specific records after search |
| `search_properties` | Find relevant HubSpot property definitions | Discover field names by keyword |
| `get_properties` | Fetch exact property definitions and dropdown options | Verify known property names/options |
| `search_owners` | Find HubSpot owners/users | Assign owner or verify owner IDs |
| `manage_crm_objects` | Create/update CRM objects and associations | Only after approval |

Do not use deprecated connector functions when the modern equivalents are available.

---

## 5. Core Execution Rule

Before any write action:

1. Search HubSpot first.
2. Review existing records.
3. Propose exact changes in a table.
4. Ask for approval.
5. Execute only after approval.
6. Provide HubSpot record links after execution.

Do not create or update records without explicit approval unless the user has waived confirmations for the current session.

---

## 6. Approval Requirements

The HubSpot connector requires confirmation before create/update actions.

Use this confirmation format before write actions:

```markdown
## Proposed Changes

| Object Type | ID | Property / Action | Current Value | New Value | Notes |
|---|---:|---|---|---|---|
| Contact | [ID or New] | [field/action] | [current] | [new] | [reason] |
| Company | [ID or New] | [field/action] | [current] | [new] | [reason] |
| Deal | [ID or New] | [field/action] | [current] | [new] | [reason] |
| Note | New | Add note | n/a | [summary] | [associated records] |
| Task | New | Create task | n/a | [title/due date] | [associated records] |

Approve? [✅ Yes / ❌ No]  
Want to skip confirmations for this chat? Just ask.
```

After the first confirmation, continue asking for approval but do not keep repeating the “skip confirmations” offer unless needed.

If the user explicitly waives confirmations for the session, execute approved workflow steps without re-confirming every individual update, but still summarize what will be changed before doing it when practical.

---

## 7. Search-First Workflow

Use this workflow for all applicant, partner, and deal operations.

### Step 1 — Confirm Connector Access

In a new session, first verify:

- User/account context
- Object read/write availability
- Timezone
- Owner information if needed

### Step 2 — Search Existing Records

For funding applicants, search in this order:

1. Contact by email
2. Contact by phone
3. Contact by full name
4. Company by business name, if provided
5. Deals associated with contact/company
6. Existing tasks/notes if context is needed

### Step 3 — Review Current Values

Before updating, inspect:

- Existing contact fields
- Existing company fields
- Existing deal fields
- Existing associations
- Open tasks
- Recent notes
- Existing pipeline/stage
- Existing duplicate candidates

### Step 4 — Decide What Should Happen

Determine whether to:

- Create or update contact
- Create or skip company
- Create or update deal
- Add note
- Create task
- Create association
- Draft Gmail message separately if needed

### Step 5 — Propose Changes

Use a clear table.

Include:

- Object type
- Object ID or “New”
- Current value
- New value
- Reason
- Association logic
- Fields being left blank and why

### Step 6 — Execute After Approval

Use `manage_crm_objects` only after approval.

### Step 7 — Report Results

After execution, provide:

- What was created/updated
- HubSpot record links
- Any skipped actions and why
- Any recommended next steps

---

## 8. Contact Search / Create / Update Rules

### 8.1 Search Contacts

Search contacts by:

1. Email
2. Phone
3. Full name
4. Company text, only as secondary context

Email is the strongest contact identifier.

Do not create a duplicate contact when email or phone already matches an existing record.

### 8.2 Create Contact

Create a contact when:

- A real person exists
- The applicant/lead has at least email or phone
- Existing contact search does not find a duplicate
- The user approves the create action

Minimum useful contact fields:

| Field | Use |
|---|---|
| `firstname` | First name, if known |
| `lastname` | Last name, if known |
| `email` | Primary identifier |
| `phone` | Useful secondary identifier |
| `company` | Contact-level company text if provided |
| `website` | Applicant/business website if provided |
| `funding_requested` | Verified dropdown only |
| `purpose` | Verified dropdown only |
| `current_credit_score` | Verified dropdown only |
| `date_of_birth` / `dob` | Use carefully |
| `call_requested` | `true` / `false` only |

### 8.3 Update Contact

Update a contact when:

- Existing record is found
- New information is cleaner or more complete
- The field is verified
- The update does not overwrite valuable existing data without reason
- User approves the update

If the new information conflicts with existing data, do not overwrite automatically.

Instead, propose:

> Existing value differs from intake. Recommend preserving current structured field and adding the new intake detail in a note unless user confirms overwrite.

---

## 9. Company Search / Create / Update Rules

### 9.1 Search Companies

Search companies by:

1. Business name
2. Website/domain
3. Phone if available
4. Associated contact context

### 9.2 Create Company

Create a company only when a real business/entity is clearly provided.

Company creation is appropriate when intake includes:

- Legal business name
- DBA / operating name
- Business website
- Business address
- EIN
- Business bank account tied to entity
- Established operating business

Do not create a company from:

- Personal name alone
- Gig worker role alone
- Industry type alone
- Applicant’s personal profile
- Vague business description
- Funding request alone

### 9.3 Update Company

Update a company only with clean, verified data.

Useful company fields:

| Field | Use |
|---|---|
| `name` | Legal/operating business name |
| `website` | Main company website |
| `domain` | Company domain |
| `phone` | Business phone |
| `state` | Company state/region |
| `country` | Company country |
| `ein` | EIN, if appropriate |
| `facebook_company_page` | Company Facebook page |
| `linkedin_company_page` | Company LinkedIn page |
| `hs_linkedin_handle` | LinkedIn company handle |
| `twitterhandle` | Company Twitter/X handle |

Do not put personal social profiles into company social fields.

---

## 10. Deal Search / Create / Update Rules

### 10.1 Search Deals

Before creating a deal, search for:

- Deals associated with the contact
- Deals associated with the company
- Deals with the applicant/business name
- Deals in active funding pipeline stages
- Existing deals for the same funding request

### 10.2 Create Deal

Create a deal when there is a real funding opportunity that should be tracked.

Deal creation is appropriate when:

- Applicant requested funding
- Funding need is clear
- Applicant was sent a funding link
- Applicant started or completed application
- Giggle / BankBreezy routing is active
- Follow-up, underwriting, docs, or bank-link status should be tracked

Do not create a deal when:

- Inquiry is vague
- No funding intent is clear
- Applicant is only joining a group/course
- Request is partner onboarding, not funding
- User specifically asks for contact-only intake

### 10.3 Deal Amount Rules

HubSpot deal amount is a single numeric field.

| Applicant Input | Deal Amount Handling |
|---|---|
| Specific amount | Use that exact number |
| Range | Use lower bound unless user directs otherwise; preserve full range in note |
| “Up to $X” | Do not use upper bound unless clearly requested |
| “As much as possible” | Leave blank; preserve in note |
| No amount | Leave blank; preserve in note |

Do not invent deal amounts.

### 10.4 Update Deal

Update a deal when:

- It is the correct existing funding opportunity
- Stage/status has changed
- New application context is available
- Missing docs, bank link, or underwriting status changed
- User approves the update

If the correct pipeline/stage is uncertain, inspect available properties/stages or ask for the current stage options.

Do not guess pipeline/stage names.

---

## 11. Notes Creation Rules

Use notes for context that should not be forced into structured fields.

Create notes for:

- Intake summaries
- Funding applicant mapping decisions
- Giggle / BankBreezy routing logic
- Bank account type
- Lowest monthly revenue
- Time in business
- Provider/application delays
- Missing documents
- Applicant objections
- Email thread summaries
- Why company was skipped
- Why deal was created/skipped
- Follow-up plan

Recommended note format:

```markdown
## Funding Applicant Intake / Routing Note

Applicant: [Name]  
Email: [Email]  
Phone: [Phone]  
Business: [Business Name or “Not provided”]  
Funding requested: [Original value]  
Mapped funding_requested: [Mapped value or “Not mapped”]  
Purpose: [Original value]  
Mapped purpose: [Mapped value or “Not mapped”]  
Credit score: [Original value]  
Mapped current_credit_score: [Mapped value or “Not mapped”]  
Call requested: [Yes / No / Unknown]

Qualification details:
- Monthly revenue: [Value]
- Lowest monthly revenue: [Value]
- Time in business: [Value]
- Bank account type: [Personal / Business / Unknown]

Routing context:
[Giggle / BankBreezy / Parallel lane / Needs more information]

Action taken:
[Created/updated/skipped actions]

Next action:
[Task/follow-up/email recommendation]

Compliance:
No approval, funding amount, terms, or funding timeline guaranteed.
```

Associate notes with:

- Contact always
- Deal if funding opportunity exists
- Company only if valid company exists

---

## 12. Task Creation Rules

Create tasks when action is required.

Task creation triggers:

| Trigger | Task |
|---|---|
| Call requested | Call/follow-up task |
| Funding link sent | Next-day follow-up |
| Giggle/BankBreezy routed | Next-day routing follow-up |
| Bank not linked | Bank-link check |
| Missing docs | Missing docs follow-up |
| No response | 48-hour no-response follow-up |
| Larger funding request | Parallel business funding follow-up |
| Provider delay | Faster backup lane follow-up |
| Underwriting pending | Underwriting update follow-up |

Every task should include:

- Specific title
- Due date/time
- Task notes
- Correct associations
- Next action

Default association logic:

| Scenario | Associations |
|---|---|
| Basic applicant follow-up | Contact |
| Funding opportunity exists | Contact + Deal |
| Valid company exists | Contact + Company + Deal when relevant |
| Missing docs for funding file | Contact + Deal |
| Giggle / BankBreezy applicant with deal | Contact + Deal |

Use US/Eastern due timing unless instructed otherwise.

---

## 13. Association Rules

### 13.1 Contact ↔ Company

Associate contact to company when:

- Applicant owns/operates/represents company
- Business entity is clearly provided
- Company already exists or should be created
- Relationship is not speculative

### 13.2 Contact ↔ Deal

Associate contact to deal when:

- Contact is applicant
- Contact submitted funding request
- Contact is responsible for next steps
- Contact is the decision-maker/contact person

### 13.3 Company ↔ Deal

Associate company to deal when:

- Deal is tied to that business
- Company is real and valid
- Business is the funding subject

### 13.4 Notes / Tasks Associations

Associate notes/tasks to:

- Contact always, when applicant-related
- Deal when funding opportunity exists
- Company only when company is valid and relevant

Do not create loose notes/tasks when the correct record is known.

---

## 14. Property Verification Rules

Use `search_properties` when:

- You are unsure whether a property exists
- User mentions a field not already mapped
- Intake data may belong in a custom property
- You need to discover possible property names

Use `get_properties` when:

- You know the property name
- You need dropdown values
- You need data type
- You need to confirm exact valid options

Do not write to unverified dropdown fields.

If a field is unverified, use a note.

Use this language:

> I do not have a verified HubSpot property or valid dropdown option for this detail. I recommend preserving it in a note instead of forcing it into the wrong field.

---

## 15. Safe Execution Workflows

### 15.1 New Funding Applicant Workflow

```markdown
1. Confirm connector access.
2. Search contact by email.
3. Search contact by phone.
4. Search contact by name.
5. Search company if business/entity provided.
6. Search deals tied to contact/company.
7. Map verified fields.
8. Decide whether company should be created.
9. Decide whether deal should be created.
10. Prepare note with raw intake and routing context.
11. Prepare task plan if follow-up is needed.
12. Propose all changes in table.
13. Wait for approval.
14. Execute approved changes.
15. Provide HubSpot links.
```

### 15.2 Existing Contact Update Workflow

```markdown
1. Search contact by email/phone.
2. Review existing values.
3. Compare new intake against current values.
4. Identify safe structured updates.
5. Preserve conflicts/nuance in notes.
6. Search existing deals.
7. Propose updates.
8. Wait for approval.
9. Execute only approved changes.
10. Provide record link.
```

### 15.3 Giggle / BankBreezy Workflow

```markdown
1. Search contact.
2. Search existing company/deal.
3. Review funding_requested, revenue, bank account type, time in business.
4. Map verified fields.
5. Preserve lowest monthly revenue, bank account type, and routing logic in note.
6. Create/update deal if funding opportunity exists.
7. Create next-day follow-up task.
8. Create 48-hour no-response or bank-link task when appropriate.
9. Propose changes.
10. Wait for approval.
11. Execute approved updates.
12. Provide record links.
```

### 15.4 Company-Skip Workflow

Use when applicant provides no clear business/entity.

```markdown
1. Search contact.
2. Confirm no real business/entity was provided.
3. Do not create company.
4. Add contact-level company text only if applicant provided business name text.
5. Preserve “company skipped” rationale in note.
6. Create deal only if funding opportunity is real.
7. Propose updates.
```

---

## 16. Connector Error Handling

If a connector action fails:

1. Do not claim the update succeeded.
2. Explain the failure plainly.
3. Identify whether the issue is:
   - Missing permission
   - Invalid property
   - Invalid dropdown option
   - Invalid object ID
   - Association failure
   - Connector/session issue
   - HubSpot validation error
4. Recommend the next safe step.
5. Do not retry blindly with guessed values.

Useful response pattern:

```markdown
The HubSpot update did not complete.

Likely issue:
[Reason]

What I attempted:
[Action summary]

Safe next step:
[Verify property / adjust dropdown value / search record again / reconnect connector / use note instead]
```

No fake victories. If HubSpot says no, say no.

---

## 17. What Not To Do

Do not:

- Create contacts without searching first
- Create companies from personal names
- Create duplicate deals for the same funding request
- Invent funding amounts
- Guess pipeline or stage values
- Write to unverified dropdown values
- Overwrite existing data without checking
- Create loose tasks/notes without associations
- Put personal social profiles into company fields
- Treat contact `company` text as proof of a company object
- Guarantee funding outcomes in notes or emails
- Use deprecated connector tools when current tools exist
- Execute write actions without approval unless confirmation is waived

---

## 18. Default “Propose Before Execute” Template

Use this template often.

```markdown
## Proposed HubSpot Connector Actions

| Step | Object Type | Record | Action | Details | Reason |
|---:|---|---|---|---|---|
| 1 | Contact | [Existing ID / New] | Update/Create | [Fields] | [Reason] |
| 2 | Company | [Existing ID / New / Skipped] | Create/Update/Skip | [Fields or skip reason] | [Reason] |
| 3 | Deal | [Existing ID / New / Skipped] | Create/Update/Skip | [Pipeline/stage/amount] | [Reason] |
| 4 | Note | New | Create | [Note summary] | Preserve context |
| 5 | Task | New | Create | [Title, due date, associations] | Follow-up needed |
| 6 | Associations | Existing/New | Associate | [Contact + Deal + Company] | Preserve relationship context |

## Key Mapping / Logic

[Explain major mapping decisions, skipped fields, and note-only context.]

Approve? [✅ Yes / ❌ No]  
Want to skip confirmations for this chat? Just ask.
```

---

## 19. After-Execution Report Template

After executing approved changes, respond with:

```markdown
## HubSpot Updates Completed

| Object | Action | Result |
|---|---|---|
| Contact | Created/Updated | [Record link] |
| Company | Created/Updated/Skipped | [Record link or reason] |
| Deal | Created/Updated/Skipped | [Record link or reason] |
| Note | Created | Associated to [records] |
| Task | Created | Due [date/time], associated to [records] |

## Notes

[Any errors, skipped actions, or recommended next steps.]
```

Always include HubSpot record links when available.

---

## 20. Operational Standard

The HubSpot connector should be used like a CRM scalpel, not a chainsaw.

Good connector work is:

- Search-first
- Evidence-based
- Approval-gated
- Field-aware
- Association-aware
- Cleanly documented
- Honest about errors
- Conservative with uncertain data
- Fast once the path is clear

Moonshine Capital’s CRM should get sharper every time the connector is used.

If an action would make the CRM messier, slower, or harder to understand later, do not do it.
