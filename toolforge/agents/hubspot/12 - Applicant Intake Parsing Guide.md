# 12 - Applicant Intake Parsing Guide

## Applicant Intake Parsing Guide  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This guide defines how to parse messy applicant intake into clean, HubSpot-ready CRM data for Moonshine Capital.

Use this document when processing:

- Wix funding forms
- Website funding applications
- Gmail inquiries
- Forwarded emails
- Screenshots
- BankBreezy / Giggle applicant details
- Partner-referred applicants
- Manual intake notes
- Voice/text summaries from Jason

The goal is to extract useful applicant data, classify it correctly, map verified fields where possible, and preserve nuance in notes.

This guide is the translation layer between real-world applicant chaos and clean CRM operations.

---

## 2. Core Parsing Principle

Do not treat raw intake as ready-to-write CRM data.

Raw intake must be:

1. Extracted
2. Normalized
3. Classified
4. Mapped
5. Checked against HubSpot
6. Proposed for approval
7. Written only after approval

Applicant intake is often incomplete, emotional, vague, typo-riddled, or written while someone is financially on fire.

Parse first. Then act.

---

## 3. Default Parsing Workflow

Use this workflow every time.

```markdown
## Applicant Intake Parsing Workflow

1. Identify applicant identity details.
2. Identify contact details.
3. Identify business/entity details.
4. Identify funding request details.
5. Identify qualification details.
6. Identify routing signals.
7. Identify missing information.
8. Identify task triggers.
9. Map verified fields.
10. Preserve unverified/contextual fields in notes.
11. Search HubSpot before creating/updating records.
12. Propose exact HubSpot updates.
13. Wait for approval before writing to HubSpot.
```

---

## 4. Identity Fields to Extract

Extract the applicant’s identity first.

| Raw Intake Item | Parsed Field | Notes |
|---|---|---|
| Full name | Applicant full name | Preserve exactly if parsing is uncertain |
| First name | First name | Use if obvious |
| Last name | Last name | Use if obvious |
| Email | Email | Primary identifier |
| Phone | Phone | Normalize if possible |
| Preferred contact method | Contact preference | Note if no structured field |
| Call requested | `call_requested` | Map Yes/No when clear |
| Submission source | Lead/source context | Preserve in note unless verified field exists |
| Submission date | Intake date | Preserve in note |

### Name Parsing Rules

Split names only when obvious.

Examples:

| Raw Name | First Name | Last Name |
|---|---|---|
| Anthony Sanders | Anthony | Sanders |
| Maria Lopez | Maria | Lopez |
| J. Smith | J. | Smith |
| Dr. James Carter Jr. | James | Carter Jr. or preserve full name in note |

If name is ambiguous, do not over-parse.

Preserve full name in a note.

---

## 5. Contact Detail Normalization

### 5.1 Email

Use email as the strongest contact identifier.

Normalize:

- Trim spaces
- Use lowercase unless case has operational meaning
- Remove obvious mailto formatting

Examples:

| Raw | Normalized |
|---|---|
| ` Anthony@Example.com ` | `anthony@example.com` |
| `mailto:jason@example.com` | `jason@example.com` |

Do not invent missing emails.

### 5.2 Phone

Normalize phone numbers only when the value is clear.

Examples:

| Raw | Normalized |
|---|---|
| `(555) 555-5555` | `555-555-5555` |
| `5555555555` | `555-555-5555` |
| `+1 555 555 5555` | `+1 555-555-5555` |

If phone is incomplete, preserve raw value in note and do not force into phone field.

---

## 6. Business / Company Parsing

Identify whether a real business/entity exists.

### 6.1 Business Entity Signals

A company may be valid if intake includes:

- Legal business name
- DBA / operating name
- LLC / Inc / Corp / Co / Company / PLLC
- Business website
- EIN
- Business address
- Business bank account tied to the entity
- Business phone
- Branded email domain
- Clear statement that applicant owns/operates the business

### 6.2 Do Not Create Company When

Do not create a HubSpot company when the intake only includes:

- Applicant personal name
- “Self-employed”
- “Uber driver”
- “Gig worker”
- “Contractor”
- “N/A”
- “Not provided”
- A personal Facebook/LinkedIn profile
- A personal email address
- A vague business idea
- A funding request

### 6.3 Company Parsing Output

For every applicant, classify company handling as one of:

| Classification | Meaning | Recommended Action |
|---|---|---|
| Valid company provided | Real business/entity appears clear | Search company, then create/update if approved |
| Company text only | Business name text exists but entity uncertain | Store on contact/company text field and note |
| No company provided | No real entity provided | Do not create company |
| Speculative company risk | Intake suggests company may be fake/person name | Do not create; preserve in note |
| Existing company likely | Business name/domain matches HubSpot record | Review before update/association |

---

## 7. Funding Request Parsing

Extract requested funding amount carefully.

### 7.1 Specific Amount

If applicant provides a specific amount:

```text
$50,000
```

Parse as:

```text
Specific requested amount: 50000
```

Use for deal amount if a deal is created.

### 7.2 Funding Range

If applicant provides a range:

```text
$25,000 - $50,000
```

Parse as:

```text
Funding range: $25,000 - $50,000
Suggested deal amount: 25000 unless instructed otherwise
```

Preserve full range in a note.

### 7.3 Vague Amount

Examples:

```text
As much as possible
Whatever I qualify for
Need working capital
Need help ASAP
```

Parse as:

```text
Requested amount: Not provided / vague
Deal amount: Leave blank
Note: Preserve applicant wording
```

Do not invent deal amount.

### 7.4 Funding Requested Dropdown Mapping

If using contact property `funding_requested`, map only to verified options.

| Raw Intake | HubSpot `funding_requested` |
|---|---|
| `$0 - $25,000` | `Less than $25,000` |
| `$25,000 - $50,000` | `$25,000 - $50,000` |
| `$50,000 - $100,000` | `$50,000 - $100,000` |
| `$100,000 - $150,000` | `$100,000 - $150,000` |
| `$150,000 - $200,000` | `$150,000 - $200,000` |
| `$200,000 - $300,000` | `$200,000 - $300,000` |
| `$300,000 - $600,000` | `$300,000 - $600,000` |
| `$600,000 - $1,000,000` | `$600,000 - $1,000,000` |
| `$1,000,000 - $5,000,000` | `$1,000,000 - $5,000,000` |
| `$5M+` | `$5M+` |

---

## 8. Funding Purpose Parsing

Map applicant purpose to verified `purpose` dropdown when clean.

| Applicant Wording | HubSpot `purpose` |
|---|---|
| Startup / starting business | `Startup Funding` |
| Working capital | `Working Capital/Business Expansion (withOUT real estate)` |
| Expansion without property | `Working Capital/Business Expansion (withOUT real estate)` |
| Expansion with property / real estate | `Working Capital/Business Expansion (with real estate)` |
| Buy business with property | `Purchasing Existing Business (with real estate)` |
| Buy business without property | `Purchasing Existing Business (withOUT real estate)` |
| Equipment | `Equipment` |
| Debt consolidation | `Debt Consolidation` |
| Real estate purchase | `Real Estate Purchase` |
| Fix and flip | `Real Estate Flipping` |
| Personal loan | `Personal Loan Request` |
| Other clear non-matching purpose | `Other` |

If purpose is unclear, leave blank and preserve exact wording in note.

---

## 9. Credit Score Parsing

Map credit score to verified `current_credit_score` options.

| Applicant Input | HubSpot Value |
|---|---|
| `300-579` | `599 or below` |
| Exact score under 600 | `599 or below` |
| `600-679` | `600 - 679` |
| Exact score 600–679 | `600 - 679` |
| `680+` | `680+` |
| Exact score 680+ | `680+` |

If applicant says:

```text
Not sure
Unknown
Bad
Good
Fair
```

Do not guess unless there is a clear dropdown-equivalent.

Preserve in note.

---

## 10. DOB Parsing

Known DOB-related fields:

| Field | Type | Guidance |
|---|---|---|
| `date_of_birth` | String | Safer for raw applicant-provided DOB |
| `dob` | Date | Use only when date is clean and compatible |

Default:

- If DOB is provided as raw text, use `date_of_birth`.
- Use `dob` only when date format is unambiguous.
- If date could be interpreted multiple ways, preserve in note.

Do not invent or reformat uncertain DOBs.

---

## 11. Revenue Parsing

Extract:

- Average monthly revenue
- Lowest monthly revenue
- Revenue range
- Deposit consistency
- Recent trend
- Source of revenue
- Whether deposits are in personal or business bank

Unless a verified structured field exists, preserve revenue details in notes.

### Revenue Normalization

| Raw | Parsed |
|---|---|
| `$5k/mo` | `$5,000/month` |
| `around 10k monthly` | `Approximately $10,000/month` |
| `lowest month was 3200` | `Lowest monthly revenue: $3,200` |
| `3-5k` | `$3,000 - $5,000/month` |

Do not inflate or round aggressively.

---

## 12. Bank Account Type Parsing

Classify bank account type as:

- Personal
- Business
- Unknown
- Mixed / unclear

Examples:

| Raw Intake | Parsed |
|---|---|
| “personal checking” | Personal |
| “business checking” | Business |
| “LLC bank account” | Business |
| “my bank account” | Unknown |
| “both” | Mixed / unclear |

Preserve bank account type in notes unless a verified structured field exists.

Bank account type is especially important for Giggle / BankBreezy routing.

---

## 13. Time in Business Parsing

Extract time in business as provided.

Examples:

| Raw | Parsed |
|---|---|
| `4 months` | 4 months |
| `1 year` | 12 months |
| `Since 2022` | Since 2022 |
| `Just started` | Startup / newly started |
| `Not launched yet` | Pre-revenue / startup |

Use notes unless verified structured field exists.

---

## 14. Routing Signal Parsing

Identify funding routing clues.

### 14.1 Giggle Signals

Possible Giggle/same-day funding signals:

- Personal bank account
- 4+ months account/business activity
- $3k+ monthly revenue
- Smaller requested amount
- Needs fast funding
- Gig worker / self-employed
- BankBreezy not best fit due to bank setup

### 14.2 BankBreezy Signals

Possible BankBreezy/business funding signals:

- Business bank account
- Established business
- Stronger revenue
- Larger funding request
- Needs same-day business funding quote
- Applicant delayed elsewhere
- Wants dashboard/instant quote

### 14.3 Parallel Lane Signals

Use parallel lane when:

- Applicant wants larger amount but may need fast smaller funding first
- Applicant is delayed with another provider
- Giggle may be helpful but not enough for full request
- Business funding lane should remain open

Do not present routing as approval.

Use language like:

```text
Applicant appears worth routing toward [lane] for review based on intake. No approval, amount, terms, or timeline guaranteed.
```

---

## 15. Missing Information Detection

Flag missing information that matters.

| Missing Item | Why It Matters | Action |
|---|---|---|
| Email | Contact creation/search | Ask for email or use phone/name search |
| Phone | Follow-up/call | Preserve missing; use email if available |
| Business name | Company decision | Do not create company |
| Funding amount | Deal amount | Leave deal amount blank |
| Purpose | Routing | Ask or leave blank |
| Revenue | Funding fit | Create follow-up question/task |
| Lowest monthly revenue | Giggle/BankBreezy routing | Ask if needed |
| Bank account type | Routing | Ask if needed |
| Time in business | Qualification | Ask if needed |
| Bank link status | Application progress | Create bank-link task |
| Missing docs | Underwriting progress | Create missing docs task |

---

## 16. Task Trigger Parsing

Create/recommend tasks based on applicant signals.

| Parsed Signal | Recommended Task |
|---|---|
| Call requested | `Call — [Applicant Name] — funding request follow-up` |
| Funding link sent | `Follow up — [Applicant Name] — confirm application started` |
| Bank link pending | `Check status — [Applicant Name] — confirm bank account linked` |
| Missing docs | `Request docs — [Applicant Name] — [specific missing item]` |
| No response after link | `48-hour follow-up — [Applicant Name] — no response after funding link` |
| Provider delay | `Follow up — [Applicant Name] — review alternative funding lane` |
| Larger request + fast need | `Follow up — [Applicant Name] — review parallel business funding options` |
| Underwriting pending | `Underwriting follow-up — [Applicant Name] — check funding review status` |

---

## 17. Standard Parsed Intake Output

Use this format after reviewing raw intake.

```markdown
## Parsed Funding Applicant Intake

### Applicant Identity
- Full name:
- First name:
- Last name:
- Email:
- Phone:
- Preferred contact method:
- Call requested:

### Business / Company
- Business name:
- Website:
- Entity confidence: Valid company / Company text only / No company / Speculative risk
- Company creation recommendation:

### Funding Request
- Requested amount:
- Requested range:
- Suggested deal amount:
- Funding purpose:
- Mapped funding_requested:
- Mapped purpose:

### Qualification Details
- Credit score:
- Mapped current_credit_score:
- DOB:
- Monthly revenue:
- Lowest monthly revenue:
- Time in business:
- Bank account type:

### Routing Signals
- Suggested lane: Giggle / BankBreezy / Parallel / Needs more info
- Routing rationale:
- Compliance note: No approval, amount, terms, or timeline guaranteed.

### Missing Information
- [List missing items]

### Recommended HubSpot Actions
| Object | Action | Reason |
|---|---|---|
| Contact | Create / Update / Search first | |
| Company | Create / Skip / Search first | |
| Deal | Create / Update / Skip | |
| Note | Add | |
| Task | Create / Skip | |
```

---

## 18. Example: Messy Email Intake

### Raw Message

```text
Hey Jason, I need like 50k if possible. I do catering and private chef stuff.
Been doing it a little over a year. Revenue is about 8-12k a month but slowest month was probably 4k.
I use my personal bank right now. Credit is around 620. Can you call me?
```

### Parsed Output

```markdown
## Parsed Funding Applicant Intake

### Applicant Identity
- Full name: Not provided
- Email: Use sender email
- Phone: Not provided
- Call requested: Yes → `call_requested = true`

### Business / Company
- Business name: Not provided
- Entity confidence: No company
- Company creation recommendation: Skip company

### Funding Request
- Requested amount: Approximately $50,000
- Suggested deal amount: 50000
- Funding purpose: Not clearly stated; likely working capital, but do not map unless confirmed
- Mapped funding_requested: $50,000 - $100,000
- Mapped purpose: Not mapped

### Qualification Details
- Credit score: Around 620 → `600 - 679`
- Monthly revenue: Approximately $8,000 - $12,000/month
- Lowest monthly revenue: Approximately $4,000
- Time in business: A little over 1 year
- Bank account type: Personal

### Routing Signals
- Suggested lane: Giggle first / parallel review possible
- Routing rationale: Personal bank + $3k+ revenue suggests Giggle-style review may be relevant. Requested amount is larger, so preserve parallel funding context.
- Compliance note: No approval, amount, terms, or timeline guaranteed.

### Missing Information
- Full legal name
- Phone number
- Business/entity name if any
- Funding purpose confirmation

### Recommended HubSpot Actions
| Object | Action | Reason |
|---|---|---|
| Contact | Search by sender email, then update/create | Email exists from Gmail |
| Company | Skip | No company/entity provided |
| Deal | Create if funding opportunity should be tracked | Funding request is clear |
| Note | Add | Preserve revenue, personal bank, time in business, routing context |
| Task | Create | Call requested + funding follow-up needed |
```

---

## 19. Example: Website Form Intake

### Raw Intake

```text
Name: Maria Lopez
Email: maria@example.com
Phone: 555-111-2222
Business Name: ML Beauty Studio LLC
Website: https://mlbeautystudio.com
Funding Requested: $0 - $25,000
Purpose: Equipment
Credit Score: 300-579
Call Requested: No
Time in Business: 8 months
Bank Account Type: Business
Lowest Monthly Revenue: $3,900
```

### Parsed Mapping

```markdown
## Parsed Funding Applicant Intake

### Applicant Identity
- Full name: Maria Lopez
- First name: Maria
- Last name: Lopez
- Email: maria@example.com
- Phone: 555-111-2222
- Call requested: No → `call_requested = false`

### Business / Company
- Business name: ML Beauty Studio LLC
- Website: https://mlbeautystudio.com
- Entity confidence: Valid company
- Company creation recommendation: Search first, then create/update if no duplicate

### Funding Request
- Requested amount: $0 - $25,000
- Suggested deal amount: Leave blank or use specific amount only if clarified
- Mapped funding_requested: Less than $25,000
- Funding purpose: Equipment
- Mapped purpose: Equipment

### Qualification Details
- Credit score: 300-579 → `599 or below`
- Time in business: 8 months
- Bank account type: Business
- Lowest monthly revenue: $3,900

### Routing Signals
- Suggested lane: Giggle / BankBreezy review depending on exact link/workflow
- Routing rationale: Business account + revenue above $3k + 8 months activity suggests review path may be viable.
- Compliance note: No approval, amount, terms, or timeline guaranteed.

### Recommended HubSpot Actions
| Object | Action | Reason |
|---|---|---|
| Contact | Search first, then create/update | Applicant identity provided |
| Company | Search first, then create/update | Real LLC + website provided |
| Deal | Create if no duplicate active funding deal | Applicant requested funding |
| Note | Add | Preserve lowest revenue, bank account type, routing logic |
| Task | Create if follow-up needed | Application/funding next step |
```

---

## 20. Applicant Intake Quality Checklist

Before proposing HubSpot updates, confirm:

```markdown
- [ ] Applicant name extracted
- [ ] Email extracted or noted missing
- [ ] Phone extracted or noted missing
- [ ] Business/entity status classified
- [ ] Company creation decision made
- [ ] Funding amount parsed
- [ ] Deal amount rule applied
- [ ] Funding requested dropdown mapped if possible
- [ ] Purpose mapped if possible
- [ ] Credit score mapped if possible
- [ ] DOB handled carefully
- [ ] Revenue details extracted
- [ ] Lowest monthly revenue extracted
- [ ] Bank account type classified
- [ ] Time in business extracted
- [ ] Routing signals identified
- [ ] Missing information flagged
- [ ] Task triggers identified
- [ ] Note-only details preserved
- [ ] HubSpot search required before write actions
```

---

## 21. Common Parsing Mistakes to Avoid

Avoid:

- Treating every business description as a company
- Creating a company from a personal name
- Mapping vague amount to deal amount
- Selecting `Other` when a better purpose exists
- Mapping credit score without enough info
- Guessing DOB format
- Ignoring lowest monthly revenue
- Ignoring personal vs business bank account
- Confusing routing recommendation with approval
- Creating tasks without clear trigger
- Failing to identify missing info
- Losing applicant’s original wording
- Overwriting HubSpot fields before search/review
- Treating screenshots as proof beyond what they clearly show

---

## 22. Operational Standard

A properly parsed applicant intake should make the next CRM step obvious.

The parser should answer:

- Who is this person?
- How do we contact them?
- Is there a real business?
- Should a company be created?
- What funding do they want?
- What can be mapped cleanly?
- What belongs in a note?
- What is missing?
- What follow-up is needed?
- Which funding lane appears worth reviewing?

Good parsing prevents bad CRM.

Bad parsing turns HubSpot into a digital swamp with invoices floating in it.
