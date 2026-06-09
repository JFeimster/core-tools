# you asked

APPROVED (continue to the next file). Create the file in markdown format.

---

# chatgpt response

Approved. I’m creating **File 2 only** as a clean Markdown source doc, with the SOP focused on real Giggle / BankBreezy intake, routing, HubSpot logging, and follow-up execution.

Created **File 2** in Markdown format:

[Download File 2 — Giggle BankBreezy Applicant SOP.md](sandbox:/mnt/data/02%20-%20Giggle%20BankBreezy%20Applicant%20SOP.md)

# File 2: Giggle / BankBreezy Applicant SOP

## Giggle / BankBreezy Applicant SOP  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This SOP defines how to process, review, log, and follow up with applicants who may fit a **Giggle Finance**, **BankBreezy**, or parallel business funding lane inside Moonshine Capital’s HubSpot CRM workflow.

The goal is to preserve clean applicant context, avoid duplicate CRM records, and create a practical follow-up path that helps the applicant move forward without turning HubSpot into a crime scene with custom fields wearing fake mustaches.

This SOP applies to applicants coming from:

- Moonshine Capital website forms
- Wix forms
- Gmail inquiries
- BankBreezy dashboard links
- Giggle routing workflows
- DAC / funding partner referrals
- Manual intake notes
- Follow-up conversations

---

## 2. Core Rule

Always search HubSpot first before creating or updating anything.

Search before creating:

- Contact
- Company
- Deal
- Note
- Task
- Association

Primary search order:

1. Email address
2. Phone number
3. Full name
4. Business name
5. Existing deals
6. Existing notes or tasks

Do not create duplicate records just because a new form submission came in.

---

## 3. Intake Review Workflow

When a new applicant comes in, review the full intake before touching HubSpot.

### 3.1 Capture Applicant Identity

Extract:

- Full name
- Email
- Phone
- Business name, if provided
- Business website, if provided
- Location, if provided
- Lead source
- Submission date

### 3.2 Capture Funding Request Details

Extract:

- Requested funding amount
- Funding purpose
- Desired timeline
- Business type / industry
- Time in business
- Monthly revenue
- Lowest monthly revenue
- Average deposit activity, if provided
- Bank account type
- Current lender/platform issue, if applicable
- Documents submitted or missing

### 3.3 Capture Routing Details

Determine whether the applicant appears to fit:

- Giggle-style same-day / micro-funding lane
- BankBreezy / larger business funding lane
- Parallel lane where Giggle is tried first while BankBreezy or other funding options remain available
- Not enough information yet
- Not currently fundable based on available intake

Use directional language only.

Do not guarantee approval, terms, funding amount, or funding speed.

---

## 4. Routing Logic Overview

Use this as practical routing guidance, not as a hard approval rule.

| Applicant Profile | Recommended Lane |
|---|---|
| Personal bank account, 4+ months activity, $3k+ monthly revenue | Giggle / same-day funding review |
| Business bank account, 4+ months activity, $3k+ monthly revenue but under larger funding threshold | Giggle first, then review parallel options |
| Business bank account, stronger revenue, larger funding request | BankBreezy / business funding lane |
| Larger funding request but applicant is delayed elsewhere | Send BankBreezy dashboard link and preserve context |
| Missing bank/revenue details | Create contact/note and follow up for missing info |
| No funding amount or unclear intent | Contact only unless there is clear funding opportunity |

Important: Routing should be logged as an operational recommendation, not a final underwriting decision.

---

## 5. Contact Only vs. Contact + Company

### 5.1 Create or Update Contact Only When

Use contact-only handling when:

- Applicant provides personal name and email but no clear business entity
- Applicant is a gig worker or sole proprietor without a business name
- Business name is missing, vague, or speculative
- Applicant has not clearly provided a real company/entity
- Funding request is early-stage or incomplete
- You only need to preserve intake and follow up

Example:

> Applicant submitted a funding inquiry with name, email, phone, and revenue details but no clear business name. Create/update contact and add routing note. Do not create company.

---

### 5.2 Create or Update Contact + Company When

Create or update a company only when a real business/entity is clearly provided.

Company creation may be appropriate if intake includes:

- Legal business name
- DBA / operating name
- Business website
- Business email domain
- EIN-related context
- Business address
- Business bank account tied to named entity
- Established business operations

Do not create a company from a personal name.

---

## 6. When to Create a Deal

Create a deal when there is a real funding opportunity that should be tracked.

A deal is appropriate when:

- Applicant clearly requested funding
- Funding amount is provided or funding need is obvious
- Applicant appears eligible for a Giggle / BankBreezy lane
- Applicant has started an application
- Applicant was sent a funding dashboard link
- Follow-up is needed to move the funding process forward
- Underwriting, docs, or bank linking needs to be tracked

Do not create a deal when:

- The inquiry is vague
- There is no clear funding intent
- The person only joined a group/course/community
- The applicant is only asking a general question
- The request is for partner onboarding, not funding

---

## 7. Deal Amount Handling

HubSpot deal amount is a single numeric field.

Do not invent an amount.

### 7.1 Specific Amount Provided

If the applicant requests a specific amount, use it when creating the deal.

Example:

> Applicant requested $25,000.

Deal amount:

```text
25000
```

### 7.2 Range Provided

If the applicant provides a range, use the lower bound unless instructed otherwise.

Example:

> Applicant requested $25,000–$50,000.

Deal amount:

```text
25000
```

Then log in the note:

> Applicant requested $25k–$50k. Deal amount set conservatively at $25k for CRM tracking. Full range preserved in note.

### 7.3 No Amount Provided

If no funding amount is provided, leave deal amount blank.

Log:

> Requested funding amount not provided in intake.

Do not make up a number because the pipeline looks lonely.

---

## 8. When to Log Notes

Log a note whenever the intake contains important context, routing details, or follow-up logic.

Create a note when:

- Applicant submitted a funding request
- Giggle / BankBreezy routing decision was made
- Applicant has a personal vs. business bank account
- Lowest monthly revenue was provided
- Applicant was sent the BankBreezy dashboard link
- Applicant was advanced toward Giggle Finance
- Applicant has not linked bank account yet
- Applicant is delayed with another funding provider
- Applicant is missing documents
- Applicant needs follow-up
- A deal was created or intentionally not created
- A company was skipped because no business entity was provided

---

## 9. Required Giggle / BankBreezy Note Details

For Giggle / BankBreezy applicants, preserve the following details when available:

- Applicant name
- Email
- Phone
- Business name, if provided
- Requested funding amount
- Monthly revenue
- Lowest monthly revenue
- Time in business
- Bank account type: personal, business, or unknown
- Whether applicant appears suited for Giggle
- Whether applicant appears suited for BankBreezy / larger funding
- Whether applicant was sent a link
- Which link was sent
- Whether applicant was advanced to Giggle Finance
- Whether bank account was linked
- Whether follow-up task was created
- Any third-party platform delays
- Next recommended action

---

## 10. Recommended Note Template

Use this note format for Giggle / BankBreezy applicants.

```markdown
## Giggle / BankBreezy Intake + Routing Note

Applicant: [Full Name]  
Email: [Email]  
Phone: [Phone]  
Business: [Business Name or “Not provided”]  
Lead source: [Wix / Website / Gmail / Referral / Manual / Other]  
Submission date: [Date]

Funding request:
- Requested amount: [Amount or “Not provided”]
- Funding purpose: [Purpose or “Not provided”]
- Desired timing: [Timing or “Not provided”]

Qualification details:
- Time in business: [Details]
- Monthly revenue: [Details]
- Lowest monthly revenue: [Details]
- Bank account type: [Personal / Business / Unknown]
- Current application/provider issue: [Details or “None provided”]

Routing context:
[Explain whether applicant appears better suited for Giggle, BankBreezy, both, or needs more information. Use directional language only.]

Action taken:
[Summarize what was sent, logged, created, or updated.]

Next action:
[Describe next task/follow-up needed.]

Compliance note:
No approval, funding amount, terms, or funding timeline guaranteed. Applicant directed to complete appropriate funding review/application step.
```

---

## 11. Bank Account Type Handling

Bank account type matters for routing context.

Log it clearly.

| Bank Account Type | CRM Handling |
|---|---|
| Personal bank account | Log in note; may fit Giggle-style review depending on activity/revenue |
| Business bank account | Log in note; may support Giggle or BankBreezy routing depending on revenue/funding request |
| Unknown | Log as unknown and create follow-up task if needed |
| Mixed / unclear | Preserve the applicant’s exact wording in note |

Do not convert unclear bank account information into a structured value unless the field clearly supports it.

If no clean HubSpot field exists, use the note.

---

## 12. Revenue Detail Handling

Revenue details are important for routing and should be preserved accurately.

Capture:

- Average monthly revenue
- Lowest monthly revenue
- Deposit consistency
- Recent revenue trend
- Applicant-provided range
- Revenue source, if relevant

If a clean structured revenue field exists, use it.

If not, log revenue details in the note.

Do not round aggressively or inflate revenue.

---

## 13. Follow-Up Recommendations

Use a practical follow-up sequence for Giggle / BankBreezy applicants.

### 13.1 Next-Day Giggle Follow-Up

Use when:

- Applicant was sent Giggle / BankBreezy link
- Applicant was routed toward same-day funding
- Applicant needs to complete application or quote process

Recommended task:

> Follow up — confirm Giggle / BankBreezy application started

Due:

> Next business day

Association:

> Contact + Deal, if deal exists. Contact only if no deal exists.

---

### 13.2 48-Hour No-Response Follow-Up

Use when:

- Applicant has not responded
- Applicant has not completed next step
- No application/bank link confirmation has been received

Recommended task:

> 48-hour follow-up — no response after funding link

Due:

> 48 hours after initial link/follow-up

Association:

> Contact + Deal when funding opportunity exists

---

### 13.3 Check If Bank Linked

Use when:

- Applicant started application
- Applicant may be stuck at bank connection step
- Funding provider requires bank link before review

Recommended task:

> Check status — confirm bank account linked

Due:

> Same day or next business day after application start, depending on urgency

Association:

> Contact + Deal

---

### 13.4 Business Funding Parallel Lane Follow-Up

Use when:

- Applicant requested a larger amount
- Giggle may be useful as first step but not complete solution
- BankBreezy / business funding review should remain active
- Applicant is delayed elsewhere and needs a faster alternative

Recommended task:

> Follow up — review parallel business funding options

Due:

> 1–2 business days after initial application step

Association:

> Contact + Deal

---

## 14. Example Workflow: Submission to Follow-Up

### Scenario

Applicant submits a website funding request.

Details:

- Name: Anthony Sanders
- Email: provided
- Phone: provided
- Business name: not clearly provided
- Requested amount: $50,000
- Monthly revenue: provided
- Bank account type: business bank account
- Issue: delayed with another provider/application
- Recommended next step: BankBreezy dashboard for same-day business funding quote

### Step 1: Search HubSpot

Search:

1. Email
2. Phone
3. Full name
4. Existing deals
5. Existing notes/tasks

### Step 2: Contact Decision

If contact exists:

- Update only clean fields if needed
- Add note
- Create follow-up task

If contact does not exist:

- Create contact with available name/email/phone
- Do not create company unless real business name/entity was provided

### Step 3: Company Decision

If no business name is clearly provided:

- Do not create company
- Log business/entity status in note

Note language:

> No clear business entity provided in intake. Company record not created.

### Step 4: Deal Decision

If applicant requested $50,000 and funding intent is clear:

- Create or update deal
- Use amount: 50000
- Select the best existing funding pipeline/stage based on actual status
- Associate deal to contact
- Associate to company only if company exists and is valid

### Step 5: Add Routing Note

Log:

- Requested amount
- Revenue
- Bank account type
- Third-party delay
- Recommended BankBreezy dashboard next step
- Compliance-safe routing language
- Follow-up plan

### Step 6: Create Follow-Up Tasks

Recommended tasks:

1. Next-day follow-up — confirm BankBreezy quote started
2. 48-hour no-response follow-up
3. Check if bank linked, if applicant starts application

### Step 7: Draft Email If Requested

If user asks for a Gmail follow-up:

- Draft personal Gmail-style message
- Be direct, human, and strategic
- Include provided funding link
- Do not guarantee approval or funding timeline
- Position BankBreezy as a faster next step, not a guaranteed outcome

---

## 15. Common Pitfalls

Avoid these mistakes:

- Creating duplicate contacts from repeated website submissions
- Creating a company from a personal name
- Inventing a funding amount
- Guaranteeing same-day approval
- Confusing routing recommendation with underwriting decision
- Failing to log bank account type
- Failing to log lowest monthly revenue
- Failing to note whether Giggle was recommended or started
- Forgetting to associate notes/tasks to the deal
- Creating vague tasks like “follow up”
- Sending emails when the user only asked for drafts
- Overwriting structured CRM fields with messy intake data
- Treating BankBreezy and Giggle as the same thing without preserving the exact routing context

---

## 16. Recommended Proposed-Changes Format

Before creating or updating HubSpot records, propose changes when appropriate.

```markdown
## Proposed HubSpot Updates — Giggle / BankBreezy Applicant

| Object | Action | Details |
|---|---|---|
| Contact | Create / Update | [Name, email, phone, lead source] |
| Company | Create / Skip / Update | [Business name and reason] |
| Deal | Create / Update / Skip | [Pipeline, stage, amount, rationale] |
| Note | Add | [Giggle / BankBreezy routing summary] |
| Task | Create | [Task title, due timing, associations] |

## Routing Logic

[Brief explanation of why applicant fits Giggle, BankBreezy, both, or needs more information.]

## Compliance Guardrail

No approval, amount, terms, or funding timeline guaranteed. Applicant is being routed for review based on provided intake details.

Reply APPROVED and I’ll execute these HubSpot updates.
```

---

## 17. Default Execution Checklist

Use this checklist for every Giggle / BankBreezy applicant.

```markdown
## Giggle / BankBreezy Applicant Checklist

- [ ] Review full intake
- [ ] Extract applicant identity details
- [ ] Extract funding request details
- [ ] Extract revenue details
- [ ] Extract lowest monthly revenue
- [ ] Extract bank account type
- [ ] Search HubSpot by email
- [ ] Search HubSpot by phone
- [ ] Search HubSpot by name
- [ ] Search existing deals
- [ ] Decide contact create/update
- [ ] Decide company create/skip/update
- [ ] Decide deal create/update/skip
- [ ] Preserve routing context in note
- [ ] Log whether Giggle / BankBreezy was recommended
- [ ] Log whether applicant was advanced to Giggle Finance, if applicable
- [ ] Log whether BankBreezy dashboard link was sent, if applicable
- [ ] Create next-day follow-up task
- [ ] Create 48-hour no-response task if needed
- [ ] Create bank-link check task if applicable
- [ ] Draft Gmail follow-up only if requested
```

---

## 18. Operational Standard

Every Giggle / BankBreezy applicant record should make the following clear:

- Who the applicant is
- What they requested
- Whether they have a business entity
- What revenue details they provided
- What bank account type they have
- Which funding lane was recommended
- What action was taken
- What follow-up is due next
- Which records are associated
- What not to promise

The entire workflow should be clean enough that another operator could open HubSpot tomorrow and know exactly what happened without calling in a priest, a detective, and three unpaid interns.

---

**Reply APPROVED to continue to the next file.**