# 14 - Partner Applicant Intake to HubSpot Mapping

## Partner Applicant Intake → HubSpot Mapping  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document defines how to parse and map **partner applicants**, **affiliate applicants**, **loan broker applicants**, **referral partners**, and **broker profile contacts** into HubSpot for Moonshine Capital.

Use this guide when processing:

- Moonshine Capital partner applications
- Funding partner / broker applications
- Affiliate partner inquiries
- Referral partner requests
- Broker profile submissions
- Partner directory/profile updates
- Partner onboarding conversations
- Darwin-style broker profile setup requests
- Partner resource/tool requests

The goal is to keep partner records distinct from funding applicant records.

A person applying to become a partner is not automatically a funding applicant. A person applying for funding is not automatically a partner. Mixing those up is how the CRM starts hallucinating commissions in the pantry.

---

## 2. Core Rule

Always search HubSpot first before creating or updating partner records.

Search order:

1. Contact by email
2. Contact by phone
3. Contact by full name
4. Company/agency by business name, if provided
5. Existing notes/tasks
6. Existing deals only if there is a real revenue opportunity that should be tracked

Do not create duplicate contacts, fake companies, or unnecessary deals.

---

## 3. Partner Applicant vs. Funding Applicant

Classify the person before mapping fields.

| Intake Type | Description | Primary CRM Handling |
|---|---|---|
| Funding applicant | Wants capital/funding | Contact + possible company + possible deal |
| Partner applicant | Wants to refer clients, become broker/affiliate, or join agency | Contact + note + onboarding task |
| Broker profile applicant | Wants public/profile/directory setup | Contact + profile note + task |
| Referral source | Sends leads but may not be formal partner | Contact + note |
| Vendor/platform partner | Business/service provider relationship | Contact + company if real entity |
| Mixed intent | Wants funding and partnership | Treat as two workflows; separate notes/tasks/deals if needed |

If mixed intent exists, preserve both contexts clearly in notes.

Do not create a funding deal unless there is an actual funding request.

---

## 4. Verified HubSpot Contact Fields for Partner Intake

The following contact fields have been verified and may be used when values are clean.

| Intake Data | HubSpot Object | HubSpot Property | Type | Use |
|---|---|---|---|---|
| First name | Contact | `firstname` | String | Partner/contact first name |
| Last name | Contact | `lastname` | String | Partner/contact last name |
| Email | Contact | `email` | String | Primary identifier |
| Phone | Contact | `phone` | String | Primary phone number |
| Company/agency name text | Contact | `company` | String | Contact-level company text; not a company object |
| Website | Contact | `website` | String | Contact’s company/agency website |
| LinkedIn URL | Contact | `hs_linkedin_url` | String | Personal LinkedIn profile URL |
| LinkedIn / LinkedHub | Contact | `linkedin` | String | Use only when appropriate |
| Facebook profile | Contact | `facebook_profile` | String | Personal Facebook profile URL |
| Promoter/partner status | Contact | `partnerstatus` | String | Use cautiously; string field, not verified dropdown |

Important:

- `partnerstatus` exists as a string field labeled **Promoter Status**.
- Because it is a string field, avoid inventing a controlled vocabulary unless Jason defines one.
- If status language is not standardized, preserve partner status in a note.

---

## 5. Verified HubSpot Company Fields for Partner Intake

Use company fields only when a real business, agency, or entity is provided.

| Intake Data | HubSpot Object | HubSpot Property | Use |
|---|---|---|---|
| Company/agency legal name | Company | `name` | Real company/agency name |
| Company website | Company | `website` | Main website URL |
| Company domain | Company | `domain` | Company domain |
| Business phone | Company | `phone` | Company phone |
| State/region | Company | `state` | Company state/region |
| Country | Company | `country` | Company country |
| EIN | Company | `ein` | Use only when relevant/verified |
| Facebook company page | Company | `facebook_company_page` | Company page, not personal profile |
| LinkedIn company page | Company | `linkedin_company_page` | Company page, not personal profile |
| LinkedIn handle | Company | `hs_linkedin_handle` | Company LinkedIn handle |
| LinkedIn bio | Company | `linkedinbio` | Company LinkedIn bio |
| Twitter/X handle | Company | `twitterhandle` | Company Twitter/X handle |
| Twitter/X bio | Company | `twitterbio` | Company Twitter/X bio |

Do not create a company record just because the partner has a personal brand or social profile.

---

## 6. Contact Field Mapping

| Partner Intake Field | HubSpot Object | HubSpot Property | Mapping Rule |
|---|---|---|---|
| Full name | Contact | `firstname` / `lastname` | Split only when obvious |
| Email | Contact | `email` | Primary search/create identifier |
| Phone | Contact | `phone` | Normalize if clear |
| Agency/business name | Contact | `company` | Use as text if company object is not justified |
| Personal website | Contact | `website` | Use if this represents partner’s main site |
| Business website | Contact or Company | `website` | Use contact field if no company; company field if valid company exists |
| Personal LinkedIn | Contact | `hs_linkedin_url` | Use for personal profile |
| Facebook profile | Contact | `facebook_profile` | Use for personal profile |
| Partner status | Contact | `partnerstatus` | Use only if value is clean/standardized |
| Target client type | Note | n/a | Preserve in partner profile/onboarding note |
| Funding experience | Note | n/a | Preserve in note |
| Referral strategy | Note | n/a | Preserve in note |
| Desired tools/resources | Note/task | n/a | Note + task if action needed |
| Broker profile bio | Note | n/a | Preserve in broker profile note |
| Booking link | Note or contact website if appropriate | n/a | Use note unless verified dedicated field exists |

---

## 7. Company Creation Rules for Partners

Create a company only when the partner provides a real agency/business/entity.

### 7.1 Company Creation Is Appropriate When

The intake includes:

- Agency name
- Business legal name
- DBA / operating name
- Business website/domain
- EIN or business registration context
- Business address
- Business phone
- A team/company the partner represents
- A clear business entity behind the partner relationship

### 7.2 Do Not Create Company When

Do not create a company when the intake only includes:

- Person’s name
- Personal brand with no entity
- Personal LinkedIn
- Personal Facebook profile
- Generic phrase like “loan broker”
- “self-employed”
- “affiliate”
- “referral partner”
- No business name
- A profile page request with no agency/entity

When in doubt:

- Create/update contact
- Store business/brand context in a note
- Do not create company

---

## 8. Deal Creation Rules for Partner Applicants

Do not create a funding deal for a partner applicant unless there is a real funding opportunity.

Partner applicants usually need:

- Contact
- Note
- Task
- Optional company if valid entity exists

A partner deal may be appropriate only if Moonshine Capital intentionally tracks partner onboarding or partner revenue opportunities as deals.

If no partner pipeline/stage is verified, do not create a deal by default.

| Scenario | Deal? | Recommended Action |
|---|---:|---|
| Person applies to become funding partner | Usually no | Contact + note + onboarding task |
| Person submits broker profile details | No | Contact + profile note + task |
| Partner sends a client funding lead | Client may need deal | Create deal for client, not partner |
| Partner has revenue/share agreement to track | Maybe | Ask/propose before creating partner deal |
| Partner also asks for funding | Yes, separate funding deal may be appropriate | Treat funding request separately |

Keep partner relationship management separate from client funding pipeline unless Jason explicitly wants partner deals.

---

## 9. Partner Note-Only Fields

Use notes for partner context unless verified structured fields exist.

| Intake Data | Recommended Destination |
|---|---|
| Partner motivation | Note |
| Why they want to join | Note |
| Funding/broker experience | Note |
| Sales experience | Note |
| Network/audience | Note |
| Target clients | Note |
| Industries served | Note |
| Preferred funding products | Note |
| Commission questions | Note |
| Referral strategy | Note |
| Content/social audience | Note |
| Broker bio | Note |
| Headshot/photo status | Note/task |
| Booking link | Note |
| Public profile preferences | Note |
| Tools/resources requested | Note/task |
| Onboarding status | Note/task |
| Training/course completion | Note unless verified field exists |
| Certification/badge status | Note unless verified field exists |

Partner context is usually nuanced. Notes are safer than forcing the wrong field.

---

## 10. Partner Task Triggers

Create or recommend tasks when partner intake creates a next action.

| Partner Signal | Recommended Task |
|---|---|
| New partner application received | `Review partner applicant — [Name] — onboarding fit` |
| Partner requested call | `Call — [Name] — partner onboarding discussion` |
| Partner profile details submitted | `Review broker profile — [Name] — profile setup` |
| Missing profile details | `Request profile info — [Name] — missing broker details` |
| Partner wants tools/resources | `Send partner resources — [Name] — requested tools` |
| Partner needs course/training | `Follow up — [Name] — partner training next step` |
| Partner referred first lead | `Review referral — [Partner Name] — first lead submitted` |
| Partner profile page needs update | `Update broker profile — [Name] — requested changes` |
| Partner inactive after application | `48-hour follow-up — [Name] — partner application no response` |

Default association:

- Contact always
- Company only if valid company exists
- Deal only if a real partner deal/revenue opportunity exists and Jason approves

---

## 11. Recommended Partner Intake Note Format

Use this note for partner applicants.

```markdown
## Partner Applicant Intake Note

Partner applicant: [Full Name]  
Email: [Email]  
Phone: [Phone]  
Agency/business: [Name or “Not provided”]  
Website: [Website or “Not provided”]  
LinkedIn: [URL or “Not provided”]  
Facebook/profile links: [Links or “Not provided”]  
Source: [Website / Wix / Gmail / Referral / Manual / Other]  
Submission date: [Date]

Partner context:
- Partner type: [Affiliate / broker / referral partner / vendor / unknown]
- Funding/broker experience: [Details]
- Sales/referral experience: [Details]
- Target clients/audience: [Details]
- Industries served: [Details]
- Desired tools/resources: [Details]
- Onboarding/training needs: [Details]

CRM handling:
- Contact action: [Create / update / existing]
- Company action: [Create / skip / update + reason]
- Deal action: [Usually skip unless approved]
- Task needed: [Yes / No + task title]

Next action:
[Recommended follow-up.]
```

---

## 12. Recommended Broker Profile Note Format

Use this for broker directory/profile details.

```markdown
## Broker Profile Context Note

Broker/partner: [Full Name]  
Agency/business: [Name or “Not provided”]  
Public email: [Email]  
Phone: [Phone]  
Website: [Website]  
Booking link: [URL]  
LinkedIn: [URL]  
Instagram/Facebook/other: [URLs]  
Location/service area: [City, state, nationwide, etc.]

Profile content:
- Short bio: [Bio]
- Why choose this broker: [Positioning]
- Target client type: [Startups / ecommerce / contractors / real estate / SaaS / restaurants / trucking / other]
- Funding specialties: [Details]
- Proof/credibility: [Details]
- Tools/resources requested: [Details]
- Profile image/headshot status: [Received / missing / needs update]

Operational notes:
[Profile page status, requested changes, next build/update action.]

Next action:
[Create/update profile, request missing details, send preview link, etc.]
```

---

## 13. Example Mapping — Partner Applicant With No Company

### Raw Intake

```text
Name: Darwin Hanneman
Email: darwin@example.com
Phone: 555-555-1212
Agency: Not provided
LinkedIn: https://linkedin.com/in/darwin-example
Goal: Become a funding partner and refer business owners
Audience: Equipment finance and small business owners
Requested: Broker profile page and partner resources
```

### Recommended HubSpot Handling

| Object | Action | Reason |
|---|---|---|
| Contact | Search first, then update/create | Real partner applicant |
| Company | Skip | No agency/business entity provided |
| Deal | Skip by default | Partner onboarding is not a funding deal |
| Note | Add partner intake/profile context | Preserve audience, goals, requested resources |
| Task | Create broker profile/resource follow-up | Next operational action |

### Mapping

| Intake Field | HubSpot Destination |
|---|---|
| First/last name | Contact `firstname` / `lastname` |
| Email | Contact `email` |
| Phone | Contact `phone` |
| LinkedIn | Contact `hs_linkedin_url` |
| Audience | Note |
| Partner goal | Note |
| Profile/resource request | Note + task |

---

## 14. Example Mapping — Partner With Agency

### Raw Intake

```text
Name: Maria Lopez
Email: maria@example.com
Phone: 555-111-2222
Agency: ML Funding Partners LLC
Website: https://mlfundingpartners.com
LinkedIn Company Page: https://linkedin.com/company/ml-funding-partners
Target Clients: Restaurants and contractors
Experience: Merchant cash advance referrals and business credit consulting
```

### Recommended HubSpot Handling

| Object | Action | Reason |
|---|---|---|
| Contact | Search first, then update/create | Partner applicant |
| Company | Search first, then create/update if no duplicate | Real LLC + website provided |
| Deal | Skip unless partner pipeline exists and Jason approves | Not a funding applicant |
| Note | Add partner onboarding note | Preserve experience and target clients |
| Task | Create onboarding follow-up | Partner needs next step |

### Mapping

| Intake Field | HubSpot Destination |
|---|---|
| Name | Contact `firstname` / `lastname` |
| Email | Contact `email` |
| Phone | Contact `phone` |
| Agency name | Company `name` + Contact `company` |
| Website | Company `website` |
| Domain | Company `domain` if clean |
| LinkedIn company page | Company `linkedin_company_page` |
| Target clients | Note |
| Experience | Note |

---

## 15. Partner Proposed Updates Format

Use this before creating/updating HubSpot.

```markdown
## Proposed HubSpot Updates — Partner Applicant

| Object | Action | Field / Detail | Current Value | New Value | Reason |
|---|---|---|---|---|---|
| Contact | Create / Update / Existing | email | [Current] | [New] | Primary identifier |
| Contact | Create / Update | phone | [Current] | [New] | Partner contact info |
| Contact | Create / Update | hs_linkedin_url | [Current] | [New] | Personal LinkedIn profile |
| Company | Create / Skip / Update | name / website / domain | [Current] | [New] | Only if real agency/entity exists |
| Deal | Skip / Create only if approved | Partner onboarding | n/a | n/a | Not a funding deal by default |
| Note | Add | Partner intake note | n/a | [Summary] | Preserve partner context |
| Task | Create / Skip | Follow-up task | n/a | [Task title] | Next action |

## Logic

[Explain why contact/company/deal/note/task actions are recommended.]

Approve? [✅ Yes / ❌ No]  
Want to skip confirmations for this chat? Just ask.
```

---

## 16. Partner Onboarding Status Guidance

Because no verified controlled partner-status field/options have been established, use notes/tasks for status until a proper property is created.

Recommended note-based statuses:

```text
Partner applicant received
Partner fit review needed
Onboarding call requested
Onboarding call scheduled
Approved partner
Active partner
Training/course sent
Training/course completed
Broker profile requested
Broker profile in progress
Broker profile preview sent
Partner resources sent
First lead submitted
Inactive / no response
Not a fit
```

If using `partnerstatus`, only write values Jason has approved as a standard vocabulary.

---

## 17. Recommended Future Partner Fields

Consider creating verified HubSpot custom fields later.

Potential contact fields:

```text
partner_type
partner_status
partner_source
broker_profile_status
partner_training_status
partner_primary_audience
partner_funding_specialties
partner_resource_needs
partner_booking_link
partner_profile_url
first_lead_submitted
```

Potential company fields:

```text
partner_agency_type
partner_agency_status
partner_agency_website
partner_agency_service_area
```

Do not use these as real fields until they are created and verified.

---

## 18. Common Mistakes to Avoid

Avoid:

- Treating partner applicants as funding applicants
- Creating funding deals for partner applications
- Creating companies from personal names
- Using personal LinkedIn as company LinkedIn page
- Using personal Facebook as company Facebook page
- Overwriting contact website with unrelated links
- Storing broker profile bio in random fields
- Forgetting partner resource requests
- Forgetting onboarding tasks
- Creating partner company records with no real entity
- Failing to distinguish partner’s clients from the partner
- Creating a deal for the referred lead under the partner instead of the client

---

## 19. Operational Standard

A properly mapped partner applicant record should make it obvious:

- Who the partner is
- How to contact them
- Whether they represent a real company/agency
- What kind of partner they want to be
- Who their audience is
- What experience they have
- What resources/tools/profile assets they need
- What follow-up task should happen next
- Whether they are separate from any funding applicant/client record

Partner records should support recruiting, onboarding, enablement, and referral tracking.

They should not pollute the funding applicant pipeline.

Keep partner ops clean so the agency can scale without needing an exorcist and a spreadsheet shovel.
