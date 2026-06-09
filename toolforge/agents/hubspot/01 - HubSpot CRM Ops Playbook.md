# you asked

# master sequencing prompt

You are helping me build the source documents for my ChatGPT project called **HubSpot CRM Ops**.

Your job is to create the following files **one at a time** in sequence. Do **not** generate all files at once.

## Required sequence

1. HubSpot CRM Ops Playbook
2. Giggle / BankBreezy Applicant SOP
3. Task Template doc
4. Email Template doc
5. Recommended thread names + starter prompts

## Execution rules

* Create **only one file per reply**
* After generating each file, **stop**
* Wait for me to explicitly reply with **APPROVED** before proceeding to the next file
* Do not skip ahead
* Do not bundle multiple files together
* Do not ask unnecessary setup questions unless absolutely required
* Each file should be written as a polished source document I can copy/paste directly into the project
* Keep each file organized, practical, and execution-focused
* Write for real operational use inside a HubSpot + Gmail workflow for Moonshine Capital
* Prefer structured sections, clean headings, bullets where useful, and copy-paste-ready formatting

## Project context

This project manages HubSpot CRM operations for Moonshine Capital, including:

* contacts
* companies
* deals
* notes
* tasks
* associations
* Gmail drafts

Primary use cases include:

* funding applicants
* partner applicants
* Giggle / BankBreezy routing
* follow-up workflows
* pipeline management

## Core operating logic

* Always search HubSpot first before creating or updating anything
* Avoid duplicates
* Prefer structured HubSpot fields when there is a strong clean match
* If a field does not cleanly exist, store the detail in notes instead of forcing bad schema choices
* Do not create a company unless a real company/business/entity was actually provided or clearly supported by the intake
* Propose exact changes clearly when appropriate before execution
* When creating deals, use the most appropriate existing pipeline and stage based on the applicant’s actual status
* If no requested funding amount is provided, do not invent one
* Use deal descriptions or notes for context that does not belong in structured amount fields
* Tasks should include a clear title, due timing, useful notes, and proper associations
* For Giggle / BankBreezy applicants, preserve routing context clearly
* Log important qualification details like lowest monthly revenue, bank account type, and whether the applicant was advanced to Giggle Finance
* Wix/site-side acknowledgment emails should sound operational and brand-safe
* Personal Gmail follow-ups should sound direct, human, and Jason-style when requested

## File-specific requirements

### File 1 — HubSpot CRM Ops Playbook

Create a master operations playbook covering:

* mission/purpose
* operating rules
* search-first workflow
* duplicate prevention
* contact/company/deal/note/task creation logic
* association rules
* deal amount handling
* company creation rules
* structured field vs note logic
* email drafting rules
* thread hygiene rules
* best practices for HubSpot connector work

### File 2 — Giggle / BankBreezy Applicant SOP

Create a practical SOP covering:

* intake review workflow
* when to create contact only vs contact + company
* when to create a deal
* when to log notes
* how to log Giggle routing details
* how to treat bank account name type and revenue details
* follow-up recommendations
* common pitfalls
* example workflow from submission to follow-up

### File 3 — Task Template doc

Create a reusable task template document covering:

* naming conventions
* due date/timing conventions
* status usage
* association rules
* reusable task templates for:

  * next-day Giggle follow-up
  * 48-hour no-response follow-up
  * check if bank linked
  * underwriting update follow-up
  * missing docs follow-up
  * business funding parallel lane follow-up

### File 4 — Email Template doc

Create a reusable email template document covering:

* Wix/system-side acknowledgment emails
* personal Gmail follow-ups
* Giggle next-step email
* application received email
* business-funding alternative lane email
* site membership/group access email
* no-Giggle-email follow-up
* 48-hour no-response follow-up
* tone guidance for brand-safe vs Jason-style messaging

### File 5 — Recommended thread names + starter prompts

Create a document containing recommended thread names and starter prompts for:

* HubSpot | New Contact Intake + Notes
* HubSpot | Deals + Associations
* HubSpot | Tasks + Follow-Up Cadence
* HubSpot | Gmail Drafts for Applicants
* HubSpot | Pipeline Cleanup + Reporting
* HubSpot | Giggle / BankBreezy Applicants

For each thread:

* provide the thread name
* explain its purpose briefly
* provide a starter prompt I can paste into a new chat

## Output format

For each file:

* start with the file title
* then provide the complete source document
* end with: **Reply APPROVED to continue to the next file.**

Begin with **File 1: HubSpot CRM Ops Playbook** only.

---

# chatgpt response

# File 1: HubSpot CRM Ops Playbook

## HubSpot CRM Ops Playbook  
### Moonshine Capital CRM Operations Source Document

---

## 1. Mission / Purpose

The purpose of the **HubSpot CRM Ops** project is to manage Moonshine Capital’s CRM activity with precision, speed, and clean operational judgment.

This project supports real business workflows involving:

- Funding applicants
- Partner applicants
- Giggle / BankBreezy routing
- Deal tracking
- Contact and company management
- Follow-up tasks
- Notes and qualification logs
- Gmail draft preparation
- Pipeline cleanup and reporting

The goal is simple:

**Keep HubSpot clean, useful, and actionable — not bloated with duplicate records, fake companies, bad fields, or half-baked follow-up tasks.**

HubSpot should function as Moonshine Capital’s operational command center for applicant management, funding workflows, partner coordination, and follow-up discipline.

No CRM swamp. No mystery records. No “what the hell is this deal attached to?” archaeology. 🧨

---

## 2. Core Operating Principles

Use these principles in every HubSpot CRM Ops workflow.

### 2.1 Search First, Always

Before creating or updating anything, search HubSpot first.

Search before creating:

- Contacts
- Companies
- Deals
- Tasks
- Notes
- Associations

The goal is to avoid duplicates and preserve existing CRM history.

Search priority:

1. Email address
2. Phone number
3. Full name
4. Business name
5. Existing deal records
6. Existing notes or tasks tied to the applicant

If the user provides an email address, that is the strongest unique identifier for a contact.

---

### 2.2 Avoid Duplicate Records

Do not create a new contact, company, or deal until existing records have been reviewed.

Before creating a record, check whether:

- The contact already exists
- The company already exists
- A deal already exists for the same funding request
- A previous note already contains relevant intake details
- An open task already exists for the same follow-up action

If a possible duplicate exists, propose the safest option:

- Update the existing record
- Add a note to the existing record
- Create a new deal only if the current funding request is clearly separate
- Avoid creating a company unless the business entity is clearly provided

---

### 2.3 Use Structured Fields Only When They Cleanly Fit

Prefer structured HubSpot fields when there is a strong, clean match.

Examples of good structured field usage:

- First name
- Last name
- Email
- Phone
- Company name
- Website
- Deal amount
- Deal stage
- Pipeline
- Lead status
- Lifecycle stage
- Funding amount requested, if an appropriate custom field exists
- Revenue, if an appropriate custom field exists
- Business bank account type, if an appropriate custom field exists

Do **not** force information into the wrong field just because HubSpot has a box available.

If the data does not cleanly map to an existing field, store it in a note.

HubSpot fields should be clean. Notes can carry nuance.

---

### 2.4 Use Notes for Context, Judgment, and Routing Details

Use notes for information that is important but does not belong cleanly in a structured field.

Good note content includes:

- Applicant qualification context
- Routing logic
- Giggle / BankBreezy recommendation
- Bank account type details
- Lowest monthly revenue
- Funding urgency
- Applicant objections
- Missing documents
- Known delays with another lender/platform
- Screenshots or user-provided explanations
- Follow-up summary
- Why a specific pipeline or deal stage was selected

Notes should be concise, dated, and operationally useful.

Bad note:

> Applicant wants funding.

Good note:

> Applicant requested funding and appears to be a potential Giggle / BankBreezy candidate. Intake indicates business bank account, 4+ months in business, and monthly revenue above $3k. Routing context preserved for same-day funding follow-up. No approval guarantee provided.

---

## 3. Search-First Workflow

Use this workflow before creating or modifying HubSpot records.

### Step 1: Identify Available Applicant Data

Extract and review:

- Full name
- Email
- Phone
- Business name
- Website
- Requested funding amount
- Monthly revenue
- Lowest monthly revenue
- Time in business
- Bank account type
- Industry
- Funding purpose
- Source of lead
- Applicant status
- Prior email history
- Any known provider/application issue

---

### Step 2: Search HubSpot

Search in this order:

1. Contact by email
2. Contact by phone
3. Contact by full name
4. Company by business name, if provided
5. Deals by contact, company, or business name
6. Existing notes/tasks related to the current request

Do not rely on name alone if email or phone is available.

Names lie. Emails usually snitch. 🕵️

---

### Step 3: Decide Whether to Create, Update, or Note

After searching, decide:

| Situation | Recommended Action |
|---|---|
| Contact exists and request is related | Update/contact note/task as needed |
| Contact exists but new funding request | Add new note and consider new deal |
| Contact does not exist | Create contact |
| Company is clearly provided and does not exist | Consider creating company |
| No real business/entity provided | Do not create company |
| Deal already exists for same request | Update existing deal or add note |
| New request is materially different | Create a new deal if appropriate |
| Information does not fit fields | Add a note |

---

## 4. Contact Creation Logic

Create a contact when there is a real person with enough identifying information.

Minimum useful contact data:

- Name and email  
or
- Name and phone  
or
- Email alone, if no name is available

Preferred contact fields:

- First name
- Last name
- Email
- Phone
- Lead source
- Lifecycle stage
- Lead status
- Associated company, if appropriate
- Relevant custom fields, only if cleanly matched

Do not create a fake or placeholder contact unless the operational need is strong and clearly stated.

---

## 5. Company Creation Logic

Do not create a company just because a person applied for funding.

Create a company only when a real business or entity is clearly provided.

Company creation may be appropriate when the intake includes:

- Business legal name
- DBA / operating name
- Business website
- Business email domain
- EIN-related context
- Business address
- Clearly stated company/entity
- Existing business bank account
- Established operating business

Do **not** create a company when:

- Only the applicant’s personal name is provided
- The business name is vague or missing
- The applicant is a gig worker without a provided business entity
- The company would be speculative
- The intake does not clearly support a business record

When uncertain, create or update the contact and log the business details in a note.

---

## 6. Deal Creation Logic

Create a deal when there is a real funding opportunity that should be tracked through a pipeline.

A deal may be appropriate when:

- Applicant requested funding
- Funding amount is provided
- Applicant appears eligible for a funding lane
- Follow-up or underwriting activity is needed
- Applicant has been routed to Giggle, BankBreezy, DAC, or another funding path
- Applicant has begun or completed an application
- The opportunity has revenue potential for Moonshine Capital

Do not create a deal if:

- The person only asked a vague question
- No funding intent is clear
- The applicant is only joining a group/course/community
- The record is a partner applicant, not a funding applicant
- The user specifically asks for contact-only intake

---

## 7. Deal Pipeline and Stage Selection

Use the most appropriate existing pipeline and stage based on the applicant’s actual status.

Do not guess wildly. Do not invent a stage.

When selecting a stage, consider:

- Has the applicant only submitted an inquiry?
- Has the applicant completed an application?
- Has the applicant been sent a link?
- Has the applicant linked their bank?
- Is underwriting pending?
- Is the applicant waiting on documents?
- Has the file been closed, funded, rejected, or withdrawn?
- Is this a Giggle-routed applicant?
- Is this a BankBreezy / business funding candidate?

If unsure which pipeline or stage exists, search or ask for the available pipeline/stage options before making changes.

---

## 8. Deal Amount Handling

HubSpot deal amount is a single numeric value.

Do not invent an amount.

### 8.1 If the Applicant Provides a Specific Amount

Use that amount in the deal amount field if appropriate.

Example:

> Requested funding: $25,000

HubSpot deal amount:

> 25000

---

### 8.2 If the Applicant Provides a Range

Use one number intentionally and preserve the full range in a note or description.

Preferred logic:

| Applicant Range | Suggested Deal Amount |
|---|---|
| $10k–$20k | Use lower bound unless user directs otherwise |
| $25k–$50k | Use lower bound or midpoint if user prefers forecasting |
| “Up to $100k” | Do not use $100k unless clearly requested |
| “As much as possible” | Leave amount blank and log context in note |

Default approach:

**Use the lower bound for conservative pipeline hygiene unless instructed otherwise.**

Then note:

> Applicant requested $25k–$50k. Deal amount set conservatively at $25k. Full range preserved in note.

---

### 8.3 If No Amount Is Provided

Do not populate the deal amount.

Instead, log:

> Requested funding amount not provided in intake.

No fantasy numbers. We are not running a vibes-based lending circus. 🎪

---

## 9. Notes Logic

Use notes to preserve operational context.

Create a note when:

- Intake details need to be captured
- Routing logic should be documented
- Applicant provided nuance that does not fit fields
- Email history needs summarizing
- Applicant was sent a funding link
- Applicant was routed to Giggle / BankBreezy
- Applicant has missing documents
- Applicant has application delays with another provider
- A follow-up task was created
- A decision was made not to create a company or deal

---

### 9.1 Recommended Note Format

Use this structure:

```markdown
## Intake / Routing Note

Applicant: [Name]  
Email: [Email]  
Phone: [Phone]  
Business: [Business Name, if provided]  
Funding request: [Amount or “Not provided”]  
Revenue: [Revenue details]  
Lowest monthly revenue: [Lowest monthly revenue]  
Bank account type: [Personal / Business / Unknown]  
Time in business: [Details]  
Funding purpose: [Purpose]  
Source: [Website / Wix / Gmail / Manual / Other]

Routing context:
[Explain Giggle / BankBreezy / business funding logic.]

Operational note:
[Summarize what was done, what was sent, and what needs to happen next.]

Next action:
[Follow-up task or recommended next step.]
```

---

## 10. Task Creation Logic

Tasks should be practical, specific, and tied to real follow-up.

Every task should include:

- Clear title
- Due date/time
- Status
- Useful notes
- Correct associations
- Context for what to do next

Bad task title:

> Follow up

Good task title:

> Follow up with Anthony Sanders — confirm BankBreezy quote started

---

### 10.1 Task Association Rules

Associate tasks to:

| Situation | Recommended Association |
|---|---|
| Basic applicant follow-up | Contact |
| Funding opportunity exists | Contact + Deal |
| Business entity clearly exists | Contact + Company + Deal, when relevant |
| Giggle-routed applicant with deal | Contact + Deal |
| Partner applicant | Contact, and company only if partner entity exists |
| Missing docs tied to funding file | Contact + Deal |
| General relationship follow-up | Contact only |

Do not leave important tasks floating unattached.

A task without association is a sticky note dropped into a hurricane.

---

## 11. Association Rules

Use associations to preserve relationship context.

### 11.1 Contact to Company

Associate when:

- Applicant owns, operates, or represents the company
- Business name/entity is clearly provided
- Company already exists and relationship is clear

Do not associate based on guesswork.

---

### 11.2 Contact to Deal

Associate when:

- The contact is the applicant or decision-maker
- The contact submitted the funding request
- The contact is responsible for completing next steps

---

### 11.3 Company to Deal

Associate when:

- Funding request is tied to a real business
- Company already exists or was properly created
- The business entity is the funding subject

---

### 11.4 Notes and Tasks

Notes and tasks should be associated with all relevant records:

- Contact
- Deal
- Company, if clearly applicable

When in doubt, associate at least to the contact.

---

## 12. Giggle / BankBreezy Routing Context

For Giggle / BankBreezy applicants, preserve routing context clearly.

Important details to log:

- Whether applicant has a personal or business bank account
- Lowest monthly revenue
- Average monthly revenue
- Time in business
- Whether applicant appears eligible for Giggle
- Whether applicant appears eligible for BankBreezy / larger business funding
- Whether applicant was advanced to Giggle Finance
- Whether applicant was sent the BankBreezy dashboard link
- Whether bank linking is complete
- Whether applicant is waiting on underwriting
- Whether applicant is stuck with another platform/provider

Use directional language only.

Do not guarantee approval.

Acceptable:

> Applicant appears to be a potential same-day funding candidate based on provided revenue and business activity. Sent BankBreezy dashboard link for instant quote.

Not acceptable:

> Applicant qualifies for guaranteed same-day funding.

---

## 13. Gmail Drafting Rules

This project may create Gmail drafts for applicant and partner follow-up.

Use drafts when the user asks to prepare, write, or create an email.

Send only when the user explicitly asks to send.

---

### 13.1 Wix / Site-Side Acknowledgment Emails

These should sound:

- Operational
- Brand-safe
- Clear
- Professional
- Helpful
- Not overly personal
- Not aggressive
- Not too “Jason-style”

Use for:

- Application received
- Course enrollment
- Group/member access
- Form submission acknowledgment
- System-style updates

Tone example:

> Thanks for submitting your funding request. We received your information and will review it to determine the best next step. If additional details are needed, we’ll follow up directly.

---

### 13.2 Personal Gmail Follow-Ups

These may sound more:

- Direct
- Human
- Warm
- Strategic
- Motivational
- Jason-style, when requested

Use for:

- Funding follow-ups
- Giggle / BankBreezy next steps
- Delayed applicant nudges
- Partner outreach
- High-touch applicant handling

Tone example:

> Given the amount you’re looking for and the delays you’re running into elsewhere, I’d rather not see you keep burning time waiting on a process that may or may not move. I’d suggest starting with the same-day business funding dashboard, seeing what comes back instantly, and then we can decide the next move from there.

---

## 14. Email Drafting Guardrails

Do not:

- Guarantee approval
- Promise funding by a certain time
- Claim credit score improvement
- Misrepresent lender/provider access
- Imply Moonshine Capital controls third-party underwriting
- Overstate certainty
- Use fake urgency
- Bash other platforms recklessly

Do:

- Be direct
- Preserve compliance-safe language
- Encourage next action
- Explain why the next step makes sense
- Use the correct link when provided
- Match the sender context
- Draft clearly enough that the user can send with minimal edits

---

## 15. Thread Hygiene Rules

Keep HubSpot CRM Ops threads focused.

Recommended thread types:

- New contact intake + notes
- Deals + associations
- Tasks + follow-up cadence
- Gmail drafts for applicants
- Pipeline cleanup + reporting
- Giggle / BankBreezy applicants

Avoid turning one thread into a CRM junk drawer.

When a thread starts drifting into a new job type, recommend starting a new focused thread.

Examples:

| Current Thread | New Request | Recommendation |
|---|---|---|
| Gmail draft thread | Create deal and tasks | Start or move to Deals + Associations |
| Task cadence thread | Write public website copy | Start separate content thread |
| Pipeline cleanup | Draft personal applicant email | Use Gmail Drafts thread |
| Giggle applicant intake | Build SOP document | Use documentation thread |

---

## 16. Best Practices for HubSpot Connector Work

When using HubSpot connector tools or CRM actions, follow these rules.

### 16.1 Before Creating Records

Always search first.

Search relevant objects:

- Contacts
- Companies
- Deals
- Tasks
- Notes

Look for duplicates, prior context, and existing associations.

---

### 16.2 Before Updating Records

Review the current record first when possible.

Confirm:

- Existing field values
- Existing associations
- Open deals
- Existing tasks
- Recent notes
- Existing lifecycle/lead status

Avoid overwriting useful data without reason.

---

### 16.3 Before Creating Deals

Confirm:

- Contact exists or should be created
- Company exists or should not be created
- Funding opportunity is real
- Requested amount is known or should be blank
- Pipeline/stage logic is appropriate
- Routing context is preserved

---

### 16.4 Before Creating Tasks

Confirm:

- Who the task belongs to
- What the task is for
- When it is due
- Whether it belongs to contact only or contact + deal
- Whether duplicate tasks already exist

---

### 16.5 Before Creating Notes

Confirm:

- What record the note belongs on
- Whether it should also be associated to a deal/company
- Whether the note is summarizing a decision, intake, routing action, or follow-up
- Whether any sensitive or irrelevant details should be omitted

---

## 17. Recommended Change Proposal Format

When changes are material, propose them clearly before execution.

Use this format:

```markdown
## Proposed HubSpot Updates

| Object | Action | Details |
|---|---|---|
| Contact | Create / Update | [Name, email, phone, lead source] |
| Company | Create / Skip / Update | [Business name and reason] |
| Deal | Create / Update / Skip | [Pipeline, stage, amount, rationale] |
| Note | Add | [Summary of note content] |
| Task | Create | [Title, due timing, associations] |

## Logic

[Brief explanation of why these actions make sense.]

Reply APPROVED and I’ll execute these HubSpot updates.
```

This prevents accidental CRM vandalism. We are building a machine, not finger-painting in a database.

---

## 18. Common Mistakes to Avoid

Avoid these CRM mistakes:

- Creating duplicate contacts
- Creating companies from personal names
- Inventing funding amounts
- Forcing messy data into structured fields
- Leaving tasks unassociated
- Creating deals without real funding intent
- Using the wrong pipeline or stage
- Failing to preserve Giggle / BankBreezy routing details
- Writing vague notes
- Sending emails when the user only asked for drafts
- Mixing system-side email tone with personal Gmail tone
- Guaranteeing funding outcomes
- Burying critical qualification details in the wrong place

---

## 19. Practical Workflow Summary

Use this default operating sequence:

1. Review the applicant/request data
2. Search HubSpot first
3. Identify existing contact/company/deal/task records
4. Decide whether to create or update records
5. Use structured fields only when clean
6. Use notes for nuance and routing context
7. Create or update deal only when funding opportunity is real
8. Preserve requested funding amount accurately
9. Associate records properly
10. Create useful follow-up tasks
11. Draft Gmail responses only when requested
12. Keep the thread focused

---

## 20. CRM Philosophy

Moonshine Capital’s HubSpot should answer these questions fast:

- Who is this person?
- What do they want?
- Are they a funding applicant, partner applicant, or something else?
- What have we already sent them?
- What funding lane do they appear to fit?
- What is the next action?
- Who owns the follow-up?
- Is there a real deal here?
- What context would future Jason need to avoid sounding like he has CRM amnesia?

The CRM is not just a database.

It is the operational memory of the business.

Treat it like a weapon system, not a junk drawer. ⚔️

---

**Reply APPROVED to continue to the next file.**