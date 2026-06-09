# 09 - HubSpot Pipeline and Stage Rules

## HubSpot Pipeline and Stage Rules  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document defines practical rules for creating, updating, and managing HubSpot deals for Moonshine Capital.

Use this source when deciding:

- Whether a funding request should become a deal
- Which HubSpot pipeline should be used
- Which deal stage best matches applicant status
- When to update a deal stage
- When to leave a deal unchanged
- How to handle unclear pipeline/stage situations
- How to avoid duplicate deals
- How to preserve context in notes instead of abusing deal fields

The goal is to keep Moonshine Capital’s pipeline useful, honest, and operationally actionable.

A pipeline should show real opportunity movement — not a decorative graveyard of random inquiries wearing “deal” costumes.

---

## 2. Verified HubSpot Deal Properties

The following deal properties have been verified.

| Property | Label | Type | Use |
|---|---|---|---|
| `pipeline` | Pipeline | Enumeration | Determines which pipeline the deal belongs to |
| `dealstage` | Deal Stage | Enumeration | Tracks current status/stage of the deal |
| `dealname` | Deal Name | String | Human-readable deal title |
| `amount` | Amount | Number | Single numeric deal amount |
| `closedate` | Close Date | Datetime | Expected/actual close date |
| `description` | Deal Description | String | Deal context and summary |
| `dealtype` | Deal Type | Enumeration | New Business or Existing Business |

---

## 3. Verified Pipeline Options

The following pipeline options have been verified in HubSpot.

| Pipeline Label | Pipeline Value |
|---|---|
| Sales Pipeline | `default` |
| Ecommerce Pipeline | `75e28846-ad0d-4be2-a027-5e1da6590b98` |

Default guidance:

- Use **Sales Pipeline** for general funding applicants unless a more specific verified funding pipeline exists later.
- Use **Ecommerce Pipeline** only when the deal clearly belongs to ecommerce checkout/order-style tracking or a known ecommerce-specific workflow.
- Do not use Ecommerce Pipeline just because the applicant sells online unless the workflow intentionally belongs there.

If a future funding-specific pipeline is created, update this document with the exact pipeline label and value.

---

## 4. Verified Deal Stage Options

The following deal stage options have been verified.

| Stage Label | Stage Value | General Meaning |
|---|---|---|
| Checkout Abandoned | `checkout_abandoned` | Ecommerce checkout/order workflow |
| Checkout Pending | `checkout_pending` | Ecommerce checkout/order workflow |
| Checkout Completed | `checkout_completed` | Ecommerce checkout/order workflow |
| Processed | `processed` | Ecommerce/order processed |
| Shipped | `shipped` | Ecommerce/order shipped |
| Cancelled | `cancelled` | Ecommerce/order cancelled |
| Appointment Scheduled | `appointmentscheduled` | Sales follow-up/call scheduled |
| Qualified To Buy | `qualifiedtobuy` | Lead appears qualified / active opportunity |
| Presentation Scheduled | `presentationscheduled` | Presentation/demo/review scheduled |
| Decision Maker Bought-In | `decisionmakerboughtin` | Strong interest / decision-maker engaged |
| Contract Sent | `contractsent` | Agreement/contract/application package sent |
| Closed Won | `closedwon` | Funded/closed successfully |
| Closed Lost | `closedlost` | Lost, declined, withdrawn, or not moving forward |

Important: HubSpot returned these stage options globally for the dealstage property. Before writing to a stage, ensure the selected stage is valid for the selected pipeline.

---

## 5. Deal Creation Rule

Create a deal only when there is a real funding opportunity that should be tracked.

A deal is appropriate when:

- Applicant clearly requested funding
- Funding amount or funding need is clear
- Applicant was sent a BankBreezy, Giggle, DAC, or funding application link
- Applicant started or completed an application
- Applicant needs bank-link follow-up
- Applicant needs underwriting/document follow-up
- Applicant has a provider delay and needs an alternative lane
- Applicant is a serious funding lead with revenue/qualification details

Do not create a deal when:

- Inquiry is vague
- No funding intent is clear
- Applicant only joined a course, group, or membership
- Applicant is only a partner applicant
- No real opportunity exists yet
- User explicitly asks for contact-only handling

If uncertain, create/update the contact and add a note. Do not force a deal just to make the pipeline look busy.

---

## 6. Default Pipeline Selection Logic

### 6.1 Sales Pipeline — Default Funding Workflow

Use:

```text
pipeline = default
```

For:

- General business funding applicants
- Giggle-routed applicants
- BankBreezy applicants
- DAC / funding partner applications
- Same-day funding candidates
- Manual funding opportunities
- Funding applicants with follow-up tasks
- Applicants delayed with another provider

This is the safest default unless a more specific verified funding pipeline exists.

### 6.2 Ecommerce Pipeline — Use Sparingly

Use:

```text
pipeline = 75e28846-ad0d-4be2-a027-5e1da6590b98
```

Only when:

- Deal is tied to ecommerce checkout/order pipeline logic
- The user explicitly says to use Ecommerce Pipeline
- Existing deal already lives there and should remain there
- The workflow is clearly ecommerce-order-oriented rather than funding-opportunity-oriented

Do not use the Ecommerce Pipeline merely because:

- Applicant owns an ecommerce business
- Applicant sells online
- Applicant is an Amazon/TikTok/Shopify seller
- Funding request is for ecommerce inventory

For ecommerce funding applicants, default to Sales Pipeline unless otherwise instructed.

---

## 7. Stage Selection Logic for Funding Applicants

Because the current verified stage set appears mostly default-sales oriented, use the closest practical match and preserve the true funding context in notes.

| Applicant Status | Recommended Stage | Stage Value | Notes |
|---|---|---|---|
| Applicant submitted funding request but no contact made yet | Qualified To Buy | `qualifiedtobuy` | Use if applicant appears real and funding intent is clear |
| Applicant requested a call / call scheduled | Appointment Scheduled | `appointmentscheduled` | Use when call/appointment is actually scheduled or requested and being acted on |
| Funding strategy/review call scheduled | Appointment Scheduled | `appointmentscheduled` | Preserve call purpose in note |
| Applicant sent funding link/application step | Contract Sent | `contractsent` | Closest available stage for “next-step/application sent” |
| Applicant started application but bank link pending | Contract Sent | `contractsent` | Add note/task: bank-link pending |
| Applicant completed application / awaiting review | Decision Maker Bought-In | `decisionmakerboughtin` | Use if engaged and pending review; note underwriting status |
| Underwriting pending / active review | Decision Maker Bought-In | `decisionmakerboughtin` | Add underwriting note/task |
| Missing documents | Decision Maker Bought-In | `decisionmakerboughtin` | Do not mark lost unless abandoned/declined |
| Offer/terms sent but not accepted | Contract Sent | `contractsent` | If formal offer/agreement sent |
| Applicant funded / deal closed successfully | Closed Won | `closedwon` | Use only when funded/closed |
| Applicant declined / not eligible / withdrawn | Closed Lost | `closedlost` | Add reason in note |
| Applicant ghosted after follow-ups | Closed Lost or leave active + nurture note | `closedlost` if closing out | Use judgment; note no-response history |
| Duplicate deal found | Do not create new stage | n/a | Update existing deal or add note |
| Inquiry unclear / no real opportunity | Do not create deal | n/a | Contact + note only |

Important: These are practical mappings, not perfect underwriting stages. Use notes/tasks to preserve the exact funding status.

---

## 8. Suggested Funding Status Language in Notes

Because current pipeline stages are not custom funding stages, always use notes to preserve actual funding workflow status.

Recommended note status labels:

```text
Funding request received
Funding link sent
BankBreezy dashboard sent
Giggle routing recommended
Giggle application started
Bank link pending
Bank linked
Underwriting pending
Missing documents
Offer/terms pending
Funded
Declined
Applicant withdrew
No response / nurture
Closed lost
```

Example note:

```markdown
## Deal Stage Context

HubSpot stage set to `Contract Sent` because applicant was sent the BankBreezy dashboard link. True operational status: BankBreezy dashboard sent; waiting for applicant to start quote/application and link bank if prompted. No approval, amount, terms, or timeline guaranteed.
```

---

## 9. Deal Amount Rules

HubSpot deal amount is a single numeric field.

Do not invent an amount.

| Applicant Input | Deal Amount Handling |
|---|---|
| Specific amount, e.g. `$50,000` | Use `50000` |
| Range, e.g. `$25,000 - $50,000` | Use lower bound `25000` unless instructed otherwise |
| “Up to $100,000” | Leave blank unless user approves using a specific amount |
| “As much as possible” | Leave blank |
| No amount | Leave blank |

Always preserve the original amount/range in a note or deal description.

Example:

```markdown
Applicant requested $25,000 - $50,000. Deal amount set conservatively at $25,000 for CRM tracking. Full requested range preserved in note.
```

---

## 10. Deal Name Conventions

Use clear, searchable deal names.

Recommended format:

```text
[Applicant Name] - Funding Request
```

or, when business is known:

```text
[Business Name] - [Applicant Name] - Funding Request
```

Examples:

```text
Anthony Sanders - Funding Request
Flavor Concierge - Carlia Jones - Funding Request
Maria Lopez - Giggle Funding Request
Sanders Logistics LLC - Anthony Sanders - BankBreezy Funding Request
```

Avoid vague names:

```text
Funding
Loan
Deal
New Applicant
Business Funding
```

A deal name should tell future Jason who this is and why it exists without making him play CRM charades.

---

## 11. Deal Description Rules

Use `description` for high-level deal context when useful.

Good deal description:

```markdown
Applicant requested business funding through Moonshine Capital. Intake indicates $50,000 requested for working capital. BankBreezy dashboard link sent. Applicant should be followed up with to confirm application started and bank linked if prompted. Full routing details preserved in note.
```

Do not overload description with every intake field if a note is more appropriate.

Use notes for:

- Full intake details
- Bank account type
- Lowest monthly revenue
- Provider delays
- Giggle / BankBreezy routing logic
- Email history
- Missing documents
- Follow-up plan

---

## 12. Stage Update Rules

Update a deal stage only when the applicant status materially changes.

Stage update triggers:

| Trigger | Possible Stage Update |
|---|---|
| Funding request reviewed and real opportunity confirmed | Qualified To Buy |
| Call scheduled/request being actioned | Appointment Scheduled |
| Funding link/application sent | Contract Sent |
| Applicant actively engaged / application underway | Decision Maker Bought-In |
| Offer/agreement sent | Contract Sent |
| Funded | Closed Won |
| Declined/withdrawn/not moving forward | Closed Lost |

Do not update stage for every tiny interaction.

Examples that usually require a note/task, not a stage change:

- Applicant asked a question
- Applicant said they will check later
- Applicant has not responded yet
- Applicant has not linked bank yet
- Applicant sent a screenshot
- Applicant needs reminder

---

## 13. Closed Won Rules

Use `closedwon` only when:

- Funding was completed
- Deal was funded
- Revenue event/commission-worthy close occurred
- User confirms the deal should be marked won

Do not use Closed Won for:

- Application submitted
- Offer sent
- Applicant says they are interested
- Bank account linked
- Underwriting pending
- “Looks promising”

Promising is not paid. Do not let optimism cosplay as revenue.

---

## 14. Closed Lost Rules

Use `closedlost` when:

- Applicant was declined
- Applicant withdrew
- Applicant became unresponsive after final follow-up
- Applicant chose another provider
- Applicant does not meet minimum criteria
- File was closed
- User confirms closing out the deal

Always add a note explaining why.

Closed Lost note example:

```markdown
## Closed Lost Reason

Deal marked Closed Lost because applicant did not respond after next-day, 48-hour, and final follow-up attempts. No confirmation that application was started or bank linked. Applicant can be re-opened/nurtured if they reply later.
```

Do not delete deals just because they are lost. Closed/lost history is useful.

---

## 15. Duplicate Deal Prevention

Before creating a deal, search for:

- Contact-associated deals
- Company-associated deals
- Deals with applicant name
- Deals with company name
- Active deals in Sales Pipeline
- Recently created deals for same applicant/request

If duplicate risk exists, recommend:

| Situation | Action |
|---|---|
| Existing deal same request | Update existing deal / add note |
| Existing deal older and inactive | Add note or create new deal only if request is materially new |
| Existing deal for different funding request | Create new deal and note distinction |
| Unclear duplicate | Ask user or propose safest option |

Duplicate rule:

> One active funding request should usually equal one active deal.

Do not create a new deal for every email, form submission, or follow-up.

---

## 16. Pipeline / Stage Proposal Format

Use this format before creating or updating deals.

```markdown
## Proposed Deal Pipeline / Stage Update

| Item | Recommendation | Reason |
|---|---|---|
| Pipeline | Sales Pipeline (`default`) | General funding applicant workflow |
| Stage | Contract Sent (`contractsent`) | Applicant was sent funding dashboard/application link |
| Deal Amount | 25000 | Lower bound of applicant’s $25k-$50k range |
| Deal Name | Anthony Sanders - Funding Request | Searchable applicant funding deal |
| Description | [summary] | Preserve high-level funding context |
| Note | Add routing note | Preserve actual operational status |
| Task | Create next-day follow-up | Confirm application/quote started |

Approve? [✅ Yes / ❌ No]  
Want to skip confirmations for this chat? Just ask.
```

---

## 17. Example: New BankBreezy Applicant

### Intake

```text
Applicant: Anthony Sanders
Requested amount: $50,000
Purpose: Working capital
Status: Delayed with another provider
Next step: BankBreezy dashboard link sent
```

### Recommended Deal Handling

| Deal Element | Value |
|---|---|
| Pipeline | Sales Pipeline (`default`) |
| Stage | Contract Sent (`contractsent`) |
| Deal Name | Anthony Sanders - Funding Request |
| Amount | 50000 |
| Note | BankBreezy dashboard sent; waiting for applicant to start quote/application |
| Task | Follow up next business day — confirm BankBreezy quote started |

Rationale:

Use `contractsent` as closest available stage because the applicant was sent a formal next-step funding dashboard/application link.

---

## 18. Example: Giggle-Routed Applicant

### Intake

```text
Applicant: Carlia Jones
Business: Flavor Concierge
Monthly revenue: $6,000
Bank account type: Personal
Routing: BankBreezy pivoted to Giggle Finance
```

### Recommended Deal Handling

| Deal Element | Value |
|---|---|
| Pipeline | Sales Pipeline (`default`) |
| Stage | Qualified To Buy (`qualifiedtobuy`) or Contract Sent (`contractsent`) depending on whether link/application sent |
| Deal Name | Flavor Concierge - Carlia Jones - Giggle Funding Request |
| Amount | Leave blank unless requested amount provided |
| Note | Personal bank account + $6,000 revenue; routed toward Giggle Finance |
| Task | Follow up — confirm Giggle application started |

Rationale:

If no actual application link has been sent yet, use `qualifiedtobuy` to show a real but early funding opportunity. If Giggle/BankBreezy link was sent, use `contractsent`.

---

## 19. Example: Applicant Requested Call Only

### Intake

```text
Applicant requested a call but did not provide clear funding amount.
```

### Recommended Deal Handling

| Deal Element | Recommendation |
|---|---|
| Pipeline | Sales Pipeline only if funding opportunity is real |
| Stage | Appointment Scheduled if call is scheduled |
| Amount | Leave blank |
| Deal | Create only if funding need is clear |
| Task | Create call follow-up task |
| Note | Preserve unclear funding amount |

Rationale:

A call request alone is not always a deal. Create a task first if funding intent is not clear.

---

## 20. Unknown Pipeline / Stage Handling

If pipeline or stage is unclear:

1. Do not guess.
2. Search/get deal properties.
3. Review available options.
4. Recommend the closest safe mapping.
5. Preserve exact operational status in note.
6. Ask for approval before updating.

Use this language:

```markdown
The exact funding-specific stage is not available in the current verified stage list. I recommend using [Stage] as the closest HubSpot stage and preserving the true funding status in a note.
```

---

## 21. Future Improvement Recommendation

Current verified stages are usable but not ideal for funding operations.

Recommended future custom funding pipeline stages:

```text
New Funding Request
Application Link Sent
Application Started
Bank Link Pending
Bank Linked
Underwriting Pending
Missing Docs
Offer Presented
Funded / Closed Won
Declined / Closed Lost
No Response / Nurture
```

If Moonshine Capital creates a dedicated funding pipeline later, this document should be updated with the exact pipeline ID and stage values.

That future pipeline would reduce the current need to translate funding workflows into generic sales stages.

---

## 22. Common Mistakes to Avoid

Avoid:

- Creating a deal before searching existing deals
- Using Ecommerce Pipeline just because applicant is an ecommerce seller
- Inventing deal stage values
- Guessing pipeline IDs
- Marking underwriting pending as Closed Won
- Marking no-response as Closed Lost too early
- Creating duplicate active deals for one funding request
- Putting routing nuance only in stage and not notes
- Using deal amount for range without noting original range
- Creating deals for vague inquiries
- Forgetting to associate contact to deal
- Forgetting to associate company to deal when valid company exists
- Leaving a deal stage unchanged when the applicant has clearly advanced

---

## 23. Operational Standard

A good HubSpot deal should make these things obvious:

- Who the applicant is
- What business/entity is involved, if any
- What funding was requested
- What stage the opportunity is in
- What true funding workflow status exists behind the generic stage
- What was sent to the applicant
- What needs to happen next
- Whether the deal is active, won, lost, or stalled

The stage is the scoreboard.

The note is the game film.

Use both.
