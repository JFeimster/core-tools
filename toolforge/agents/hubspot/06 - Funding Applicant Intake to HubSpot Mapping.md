# 06 - Funding Applicant Intake to HubSpot Mapping

## Funding Applicant Intake → HubSpot Mapping  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document is the practical mapping reference for converting Moonshine Capital funding applicant intake data into clean HubSpot CRM records.

Use this guide when processing:

- Website funding applications
- Wix form submissions
- Gmail funding inquiries
- Giggle / BankBreezy applicant details
- Manual applicant notes
- Screenshots or forwarded application data
- Partner-referred funding applicants

The goal is to map applicant data into the right HubSpot place without creating duplicate records, forcing messy data into the wrong field, or turning the CRM into a haunted junk drawer with dropdown menus.

This document should be used alongside:

- `01 - HubSpot CRM Ops Playbook.md`
- `02 - Giggle BankBreezy Applicant SOP.md`
- `03 - HubSpot Task Templates.md`
- `04 - HubSpot Email Templates.md`
- `05 - HubSpot Thread Names and Starter Prompts.md`

---

## 2. Search-First Reminder

Before updating HubSpot, always search first.

Search order:

1. Contact by email
2. Contact by phone
3. Contact by full name
4. Company by business name, if provided
5. Existing deals associated with contact or company
6. Existing notes/tasks tied to the applicant

Do not create or update records blindly.

If a contact already exists, update only clean fields and add a note for context.

If a company is not clearly provided, do not create a company.

If a deal already exists for the same funding request, update or note the existing deal instead of creating a duplicate.

---

## 3. Structured Field vs. Notes Rule

Use structured HubSpot fields only when:

- The field exists
- The value cleanly maps to the field type
- The value matches a valid dropdown option when required
- The data is stable enough to belong in a property
- The information will help filtering, segmentation, reporting, or routing

Use notes when:

- The field does not exist
- The dropdown option is not verified
- The applicant’s wording is messy or nuanced
- The data is contextual rather than categorical
- The information explains routing logic
- The detail is important but not cleanly structured

Simple rule:

> Properties are for clean machine-readable data. Notes are for context, judgment, and weird human nonsense.

---

## 4. Verified HubSpot Contact Properties

The following funding applicant properties have been verified on the HubSpot **CONTACT** object.

| Intake Data | HubSpot Object | HubSpot Property | Property Type | Use |
|---|---|---|---|---|
| Funding requested | Contact | `funding_requested` | Enumeration | Use for applicant’s requested funding range |
| Funding purpose | Contact | `purpose` | Enumeration | Use for main purpose of funds |
| Date of birth | Contact | `date_of_birth` | String | Use when applicant provides DOB and format is clear |
| DOB | Contact | `dob` | Date | Use only when date formatting is clean and compatible |
| Current credit score | Contact | `current_credit_score` | Enumeration | Use for applicant’s credit score band |
| Call requested | Contact | `call_requested` | Enumeration | Use when applicant requested a call |
| Website URL | Contact | `website` | String | Contact/company website entered on contact record |
| Company name | Contact | `company` | String | Use as contact-level company text, not a substitute for company creation |
| Facebook profile | Contact | `facebook_profile` | String | Use for personal Facebook profile if provided |
| Facebook group | Contact | `facebook_group` | String | Use if intake/referral source identifies Facebook group |
| LinkedIn URL | Contact | `hs_linkedin_url` | String | Use for contact’s LinkedIn profile URL |
| LinkedIn / LinkedHub | Contact | `linkedin` | String | Use only if appropriate and clearly provided |

Important distinction:

- `company` on the contact is a text property.
- It is not the same as creating a HubSpot Company record.
- Do not create a Company object unless a real business/entity is clearly provided.

---

## 5. Verified HubSpot Company Properties

The following company website/social fields have been verified on the HubSpot **COMPANY** object.

Use these only when a real company/business/entity exists or should be created.

| Intake Data | HubSpot Object | HubSpot Property | Use |
|---|---|---|---|
| Business website | Company | `website` | Main website URL of company/organization |
| Company domain | Company | `domain` | Company domain name |
| Facebook company page | Company | `facebook_company_page` | Company Facebook page URL |
| LinkedIn company page | Company | `linkedin_company_page` | Company LinkedIn page URL |
| LinkedIn company handle | Company | `hs_linkedin_handle` | Company LinkedIn handle |
| LinkedIn bio | Company | `linkedinbio` | Company LinkedIn bio if provided |
| Twitter/X handle | Company | `twitterhandle` | Company Twitter/X handle if provided |
| EIN | Company | `ein` | Use if EIN is provided and company creation is justified |

Do not create a company only because a website, Facebook page, or LinkedIn profile is present.

Company creation still requires a real business/entity context.

---

## 6. Contact Field Mapping

Use this table for common funding applicant contact-level intake.

| Intake Field | HubSpot Object | HubSpot Property | Mapping Rule |
|---|---|---|---|
| First name | Contact | `firstname` | Use when name can be parsed cleanly |
| Last name | Contact | `lastname` | Use when name can be parsed cleanly |
| Full name | Contact | `firstname` / `lastname` | Split only when obvious; otherwise preserve full name in note |
| Email | Contact | `email` | Primary unique identifier |
| Phone | Contact | `phone` | Use if valid phone provided |
| Business name | Contact | `company` | Use as text field if company object is not created |
| Website | Contact | `website` | Use if applicant provided business/personal site |
| LinkedIn profile | Contact | `hs_linkedin_url` | Use for personal LinkedIn URL |
| Facebook profile | Contact | `facebook_profile` | Use for personal Facebook URL |
| Facebook group/referral | Contact | `facebook_group` | Use if intake identifies group source |
| Funding requested | Contact | `funding_requested` | Use only valid dropdown option |
| Funding purpose | Contact | `purpose` | Use only valid dropdown option |
| Date of birth | Contact | `date_of_birth` or `dob` | Use carefully; see DOB guidance below |
| Current credit score | Contact | `current_credit_score` | Use valid dropdown mapping |
| Call requested | Contact | `call_requested` | Use `true` for Yes, `false` for No |

---

## 7. Company Field Mapping

Only map to a Company record when a real company/business/entity is clearly provided.

| Intake Field | HubSpot Object | HubSpot Property | Mapping Rule |
|---|---|---|---|
| Legal business name | Company | `name` | Use if real business/entity provided |
| DBA / operating name | Company | `name` or note | Use only if clearly business name; preserve legal/DBA context in note |
| Business website | Company | `website` | Use if company exists or is created |
| Company domain | Company | `domain` | Use domain only when clearly tied to company |
| Facebook company page | Company | `facebook_company_page` | Use company page, not personal profile |
| LinkedIn company page | Company | `linkedin_company_page` | Use company page, not personal LinkedIn profile |
| LinkedIn handle | Company | `hs_linkedin_handle` | Use if provided |
| Twitter/X handle | Company | `twitterhandle` | Use if provided |
| EIN | Company | `ein` | Use if verified and appropriate |
| Business state | Company | `state` | Use if provided |
| Business country | Company | `country` | Use if provided |

Do not create a company from:

- Applicant personal name
- Vague trade description
- Gig worker category alone
- Social profile alone
- Personal email domain alone
- Funding request alone

---

## 8. Deal Field Mapping

Use deal fields only when there is a real funding opportunity.

| Intake Field | HubSpot Object | HubSpot Property | Mapping Rule |
|---|---|---|---|
| Funding opportunity name | Deal | `dealname` | Use applicant/business + funding request context |
| Specific requested amount | Deal | `amount` | Use numeric amount only when specific |
| Funding range | Deal | `amount` + note | Use lower bound only if intentionally chosen; preserve full range in note |
| Funding purpose | Deal | Description/note unless clean deal field exists | Do not duplicate poorly |
| Application status | Deal | `dealstage` | Use known pipeline/stage only |
| Funding lane | Deal note | Note unless clean structured field exists |
| Bank link status | Deal note/task | Use note/task unless verified property exists |
| Missing docs | Deal note/task | Use note/task |
| Provider/application delay | Deal note | Use note |

If no requested funding amount is provided, leave deal amount blank and note:

> Requested funding amount not provided in intake.

---

## 9. Verified Dropdown Option Mappings

Use exact HubSpot dropdown values.

### 9.1 `funding_requested`

HubSpot property:

```text
funding_requested
```

Verified options:

| Intake Value | HubSpot Value |
|---|---|
| `$0 - $25,000` | `Less than $25,000` |
| `Less than $25,000` | `Less than $25,000` |
| `$25,000 - $50,000` | `$25,000 - $50,000` |
| `$50,000 - $100,000` | `$50,000 - $100,000` |
| `$100,000 - $150,000` | `$100,000 - $150,000` |
| `$150,000 - $200,000` | `$150,000 - $200,000` |
| `$200,000 - $300,000` | `$200,000 - $300,000` |
| `$300,000 - $600,000` | `$300,000 - $600,000` |
| `$600,000 - $1,000,000` | `$600,000 - $1,000,000` |
| `$1,000,000 - $5,000,000` | `$1,000,000 - $5,000,000` |
| `$5M+` | `$5M+` |

If applicant provides a non-matching range, do not force it unless it clearly fits.

Examples:

| Applicant Says | Recommended Handling |
|---|---|
| `$10k` | `Less than $25,000` |
| `$25k` | Usually `$25,000 - $50,000`; preserve exact request in note |
| `$75k` | `$50,000 - $100,000` |
| `$500k` | `$300,000 - $600,000` |
| `As much as possible` | Do not map; preserve in note |
| `Not sure` | Do not map; preserve in note |
| `$25k-$75k` | Choose closest dropdown only if useful; preserve full range in note |

---

### 9.2 `current_credit_score`

HubSpot property:

```text
current_credit_score
```

Verified options:

| Intake Value | HubSpot Value |
|---|---|
| `300-579` | `599 or below` |
| `599 or below` | `599 or below` |
| `Below 600` | `599 or below` |
| `600-679` | `600 - 679` |
| `600 - 679` | `600 - 679` |
| `680+` | `680+` |
| `680 or higher` | `680+` |

If the applicant provides an exact score:

| Applicant Score | HubSpot Value |
|---:|---|
| 300–599 | `599 or below` |
| 600–679 | `600 - 679` |
| 680+ | `680+` |

If score is unknown or applicant says “not sure,” leave blank and preserve in note.

---

### 9.3 `call_requested`

HubSpot property:

```text
call_requested
```

Verified options:

| Intake Value | HubSpot Value |
|---|---|
| Yes | `true` |
| No | `false` |
| Requested call | `true` |
| Wants phone call | `true` |
| Email only | `false` |

If unclear, leave blank and log preference in note.

---

### 9.4 `purpose`

HubSpot property:

```text
purpose
```

Verified options:

| Intake Value | HubSpot Value |
|---|---|
| Startup / new business | `Startup Funding` |
| Working capital | `Working Capital/Business Expansion (withOUT real estate)` |
| Business expansion | `Working Capital/Business Expansion (withOUT real estate)` |
| Business expansion with property/real estate | `Working Capital/Business Expansion (with real estate)` |
| Buy existing business with real estate | `Purchasing Existing Business (with real estate)` |
| Buy existing business without real estate | `Purchasing Existing Business (withOUT real estate)` |
| Equipment | `Equipment` |
| Equipment purchase | `Equipment` |
| Debt consolidation | `Debt Consolidation` |
| Real estate purchase | `Real Estate Purchase` |
| Fix and flip / flipping | `Real Estate Flipping` |
| Personal loan | `Personal Loan Request` |
| Other | `Other` |

When purpose is unclear, select `Other` only if the applicant clearly provided a purpose that does not match another option.

If the purpose is vague or missing, leave blank and preserve the wording in a note.

---

## 10. Date of Birth Guidance

Two DOB-related properties are known:

| HubSpot Property | Type | Recommended Use |
|---|---|---|
| `date_of_birth` | String | Safer for raw applicant-provided DOB text |
| `dob` | Date | Use only when date format is clean and compatible |

Default rule:

- Use `date_of_birth` when copying applicant-provided DOB text.
- Use `dob` only when the format is unambiguous and HubSpot accepts it.
- If uncertain, leave structured DOB blank and preserve in note.

Do not guess birthdate formats.

Example issue:

```text
03/04/1985
```

Could mean March 4 or April 3 depending on context. For U.S. applicant workflows it usually means March 4, but do not transform unless confident.

---

## 11. Note-Only Fields

Use notes for these fields unless a verified matching HubSpot property exists.

| Intake Data | Recommended Destination |
|---|---|
| Lowest monthly revenue | Note |
| Average monthly revenue | Note unless verified structured field exists |
| Monthly deposit consistency | Note |
| Bank account type | Note unless verified structured field exists |
| Personal vs business bank account | Note |
| Time in business | Note unless verified structured field exists |
| Giggle routing recommendation | Note |
| BankBreezy routing recommendation | Note |
| Whether applicant advanced to Giggle Finance | Note |
| Whether BankBreezy dashboard link was sent | Note |
| Whether bank account was linked | Note/task |
| Provider/application delay | Note |
| Wayflyer / third-party issue | Note |
| Missing documents | Note/task |
| Screenshot context | Note |
| Applicant urgency | Note |
| Special circumstances | Note |
| User-entered free text | Note |
| AI routing judgment | Note |

Note format:

```markdown
## Funding Applicant Intake Mapping Note

Applicant: [Name]  
Email: [Email]  
Business: [Business Name or “Not provided”]  
Funding requested: [Original applicant value]  
Mapped funding_requested: [HubSpot dropdown value or “Not mapped”]  
Purpose: [Original applicant value]  
Mapped purpose: [HubSpot dropdown value or “Not mapped”]  
Credit score: [Original applicant value]  
Mapped current_credit_score: [HubSpot dropdown value or “Not mapped”]  
Call requested: [Yes / No / Unknown]  
Mapped call_requested: [true / false / Not mapped]

Additional intake context:
- Lowest monthly revenue: [Value]
- Bank account type: [Personal / Business / Unknown]
- Time in business: [Value]
- Provider/application issue: [Value]
- Routing context: [Giggle / BankBreezy / Parallel lane / Needs more info]

Operational action:
[What was created, updated, skipped, or recommended.]
```

---

## 12. Task-Trigger Fields

Create or recommend tasks when these intake signals are present.

| Intake Signal | Recommended Task |
|---|---|
| Call requested = Yes | Create call/follow-up task |
| Bank account not linked | Create bank-link check task |
| Missing documents | Create missing docs follow-up task |
| Applicant sent BankBreezy link | Create next-day follow-up task |
| Applicant sent Giggle link | Create next-day Giggle follow-up task |
| No response after link | Create 48-hour no-response task |
| Larger funding request | Create business funding parallel lane follow-up |
| Provider delay / stuck elsewhere | Create follow-up to open faster backup lane |
| Applicant requested urgent funding | Create same-day or next-business-day follow-up |
| Unclear business entity | Create note; do not create company without clarification |
| Unclear requested amount | Create follow-up task or note depending on urgency |

---

## 13. Standard Proposed HubSpot Update Format

Use this before creating/updating HubSpot records.

```markdown
## Proposed HubSpot Updates — Funding Applicant Intake

| Object | Action | Field / Detail | Current Value | New / Mapped Value | Notes |
|---|---|---|---|---|---|
| Contact | Create / Update | email | [Current] | [New] | Primary identifier |
| Contact | Create / Update | funding_requested | [Current] | [Mapped dropdown] | Based on intake value: [Original] |
| Contact | Create / Update | purpose | [Current] | [Mapped dropdown] | Based on intake value: [Original] |
| Contact | Create / Update | current_credit_score | [Current] | [Mapped dropdown] | Based on intake value: [Original] |
| Contact | Create / Update | call_requested | [Current] | true / false | Based on applicant preference |
| Company | Create / Skip / Update | name / website / domain | [Current] | [New] | Only if real company/entity exists |
| Deal | Create / Skip / Update | amount / pipeline / stage | [Current] | [New] | Only if real funding opportunity exists |
| Note | Add | Intake mapping note | n/a | Add note | Preserve original values and routing context |
| Task | Create / Skip | Follow-up action | n/a | [Task title] | Based on task-trigger fields |

## Mapping Logic

[Brief explanation of which fields were mapped, which were left blank, and why.]

Approve? [✅ Yes / ❌ No]
Want to skip confirmations for this chat? Just ask.
```

---

## 14. Example Mapping — Clean Applicant

### Raw Intake

```text
Name: Anthony Sanders
Email: anthony@example.com
Phone: 555-555-5555
Business Name: Sanders Logistics LLC
Website: https://sanderslogistics.com
Funding Requested: $0 - $25,000
Purpose: Working capital
Credit Score: 300-579
Date of Birth: 01/15/1982
Call Requested: Yes
Bank Account Type: Business
Lowest Monthly Revenue: $8,500
Time in Business: 14 months
```

### HubSpot Mapping

| Intake Field | HubSpot Object | HubSpot Field | Value |
|---|---|---|---|
| Anthony | Contact | `firstname` | Anthony |
| Sanders | Contact | `lastname` | Sanders |
| anthony@example.com | Contact | `email` | anthony@example.com |
| 555-555-5555 | Contact | `phone` | 555-555-5555 |
| Sanders Logistics LLC | Contact | `company` | Sanders Logistics LLC |
| Sanders Logistics LLC | Company | `name` | Sanders Logistics LLC |
| https://sanderslogistics.com | Company | `website` | https://sanderslogistics.com |
| $0 - $25,000 | Contact | `funding_requested` | Less than $25,000 |
| Working capital | Contact | `purpose` | Working Capital/Business Expansion (withOUT real estate) |
| 300-579 | Contact | `current_credit_score` | 599 or below |
| 01/15/1982 | Contact | `date_of_birth` | 01/15/1982 |
| Yes | Contact | `call_requested` | true |
| Business bank account | Note | n/a | Preserve in routing note |
| Lowest monthly revenue $8,500 | Note | n/a | Preserve in routing note |
| Time in business 14 months | Note | n/a | Preserve in routing note |

### Recommended Actions

```markdown
| Object | Action | Reason |
|---|---|---|
| Contact | Search first, then update/create | Applicant has email and phone |
| Company | Search first, then create/update if not duplicate | Real LLC and website provided |
| Deal | Create if funding opportunity is not already tracked | Applicant requested funding |
| Note | Add intake/routing note | Preserve bank type, revenue, time in business |
| Task | Create call/follow-up task | Applicant requested a call |
```

---

## 15. Example Mapping — Contact Only / No Company

### Raw Intake

```text
Name: Maria Lopez
Email: maria@example.com
Phone: 555-111-2222
Business Name: Not provided
Funding Requested: $25,000 - $50,000
Purpose: Equipment
Credit Score: 680+
Call Requested: No
Bank Account Type: Personal
Lowest Monthly Revenue: $4,200
```

### HubSpot Mapping

| Intake Field | HubSpot Object | HubSpot Field | Value |
|---|---|---|---|
| Maria | Contact | `firstname` | Maria |
| Lopez | Contact | `lastname` | Lopez |
| maria@example.com | Contact | `email` | maria@example.com |
| 555-111-2222 | Contact | `phone` | 555-111-2222 |
| $25,000 - $50,000 | Contact | `funding_requested` | $25,000 - $50,000 |
| Equipment | Contact | `purpose` | Equipment |
| 680+ | Contact | `current_credit_score` | 680+ |
| No | Contact | `call_requested` | false |
| Business name missing | Company | n/a | Do not create company |
| Personal bank account | Note | n/a | Preserve in routing note |
| Lowest monthly revenue $4,200 | Note | n/a | Preserve in routing note |

### Recommended Actions

```markdown
| Object | Action | Reason |
|---|---|---|
| Contact | Search first, then update/create | Applicant has email/phone |
| Company | Skip | No real company/entity provided |
| Deal | Create if funding opportunity should be tracked | Applicant requested funding |
| Note | Add routing note | Preserve personal bank and revenue details |
| Task | Create next-step follow-up if link sent | Funding workflow depends on next action |
```

---

## 16. Unverified Fields and Options

If a field or dropdown option has not been verified:

1. Do not guess.
2. Search HubSpot properties first.
3. If still unclear, store the detail in a note.
4. Mention that the field/option is unverified in the proposed update.
5. Ask for approval before any write action.

Use this language:

> I found the applicant detail, but I do not have a verified HubSpot field or dropdown option for it. I recommend preserving it in a note instead of forcing it into the wrong property.

Examples of data that should usually remain in notes until verified:

- Specific lender/provider names
- Giggle application status
- BankBreezy quote status
- Bank link status
- Lowest monthly revenue
- Time in business
- Funding urgency
- Industry nuance
- Applicant objection
- Screenshots
- Third-party platform delays

---

## 17. Common Mistakes to Avoid

Avoid these mistakes:

- Creating a company when only a person’s name was provided
- Treating contact `company` text as proof that a company record should exist
- Inventing deal amounts from vague requests
- Mapping `$0 - $25,000` literally instead of `Less than $25,000`
- Mapping `300-579` literally instead of `599 or below`
- Using `Other` for funding purpose when the correct category exists
- Using a personal Facebook profile as a company Facebook page
- Using a personal LinkedIn profile as a company LinkedIn page
- Overwriting existing fields without checking current values
- Ignoring existing contact/deal records
- Creating duplicate funding deals for the same request
- Storing nuanced routing logic only in fields and not in notes
- Failing to create a follow-up task when call_requested = Yes
- Failing to create follow-up tasks after sending funding links
- Guessing unverified property names

---

## 18. Default Mapping Workflow

Use this workflow every time.

```markdown
## Funding Applicant Mapping Workflow

1. Review full applicant intake.
2. Extract identity fields.
3. Extract funding fields.
4. Extract company/business fields.
5. Extract routing fields.
6. Search HubSpot by email.
7. Search HubSpot by phone.
8. Search HubSpot by name.
9. Search company by business name if real entity provided.
10. Search existing deals.
11. Map verified contact fields.
12. Map company fields only if company is justified.
13. Map deal fields only if funding opportunity is real.
14. Put messy/unverified details into a note.
15. Create task recommendations from trigger fields.
16. Propose exact updates in a table.
17. Wait for approval before writing to HubSpot.
```

---

## 19. Operational Standard

A properly mapped funding applicant record should make the following obvious:

- Who the applicant is
- How to contact them
- What funding range they requested
- What they need the funds for
- Whether they requested a call
- What credit score band they reported
- Whether a real company exists
- Whether a deal should be tracked
- What important context belongs in notes
- What follow-up task is needed next

The CRM should not require detective work, séance candles, or fourteen browser tabs to understand what happened.

Map clean fields cleanly. Put context in notes. Create tasks when action is required. Keep the machine sharp.
