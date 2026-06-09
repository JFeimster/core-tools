# 19 - Wix Forms to HubSpot Intake Source Mapping

## Wix Forms → HubSpot Intake Source Mapping  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document defines how Moonshine Capital Wix form submissions should map into HubSpot CRM workflows.

Use this guide when processing or designing automations for:

- Wix funding application forms
- Wix partner application forms
- Wix course enrollment forms
- Wix group/membership forms
- Broker profile forms
- Contact forms
- Wix AI/chat lead capture
- Wix site-side acknowledgment emails
- Wix form → HubSpot → Gmail follow-up workflows

The goal is to prevent every Wix form submission from becoming the same kind of HubSpot record.

Different forms have different operational intent. Treat them accordingly.

---

## 2. Core Rule

Every Wix form submission should be classified before HubSpot action.

Classify as:

```text
Funding Applicant
Partner Applicant
Broker Profile Submission
Course / Group / Membership
General Contact Inquiry
Tool / Resource Request
Unknown / Needs Review
```

Do not automatically create deals for every Wix form.

Do not automatically create companies unless a real business/entity is provided.

---

## 3. Search-First Workflow

Before creating/updating HubSpot from Wix:

1. Search contact by email.
2. Search contact by phone.
3. Search contact by full name.
4. Search company by business/entity name if provided.
5. Search active deals if funding intent exists.
6. Search tasks/notes if repeated submission.

Then propose changes.

---

## 4. Wix Funding Form Mapping

Funding forms may create:

- Contact
- Company, if real business/entity provided
- Deal, if funding opportunity is real
- Note
- Follow-up task
- Gmail draft or Wix acknowledgment email

### Funding Field Mapping

| Wix Field | HubSpot Destination |
|---|---|
| First name | Contact `firstname` |
| Last name | Contact `lastname` |
| Full name | Contact `firstname` / `lastname` if clear |
| Email | Contact `email` |
| Phone | Contact `phone` |
| Business name | Contact `company`; Company `name` only if real entity |
| Website | Contact/Company `website` depending company decision |
| Funding requested | Contact `funding_requested`; Deal amount if specific |
| Purpose | Contact `purpose` |
| Credit score | Contact `current_credit_score` |
| DOB | Contact `date_of_birth` or `dob` carefully |
| Call requested | Contact `call_requested` |
| Monthly revenue | Note |
| Lowest monthly revenue | Note |
| Bank account type | Note |
| Time in business | Note |
| Funding urgency | Note/task |
| Uploaded docs/screenshots | Note/reference; handle sensitive data carefully |

---

## 5. Wix Partner Application Mapping

Partner forms usually create:

- Contact
- Company only if real agency/business provided
- Partner intake note
- Onboarding task
- Partner email draft

They usually do **not** create funding deals.

| Wix Field | HubSpot Destination |
|---|---|
| Name | Contact name fields |
| Email | Contact `email` |
| Phone | Contact `phone` |
| Agency/business name | Contact `company`; Company only if valid entity |
| Website | Contact/Company website |
| LinkedIn | Contact `hs_linkedin_url` if personal |
| Facebook profile | Contact `facebook_profile` |
| Target clients | Note |
| Funding/broker experience | Note |
| Referral strategy | Note |
| Desired resources | Note/task |
| Training interest | Note/task |
| Call requested | Task |

---

## 6. Broker Profile Form Mapping

Broker profile forms should create/update:

- Contact
- Company if valid agency/entity exists
- Broker profile note
- Profile update/build task
- Possible GitHub/Vercel/Wix task later if profile page must be built

| Wix Profile Field | HubSpot Destination |
|---|---|
| Full name | Contact |
| Public email | Contact email or note if different |
| Phone | Contact |
| Agency/brand | Contact company or Company object if valid |
| Headshot | Note/reference; do not embed unless workflow supports it |
| Short bio | Broker profile note |
| Why choose you | Broker profile note |
| Website | Contact/Company website |
| LinkedIn | Contact LinkedIn or Company LinkedIn depending type |
| Booking link | Note unless verified field exists |
| Service area | Note |
| Target client types | Note |
| Funding specialties | Note |
| Proof/credibility | Note |
| Tools/resources requested | Note/task |

---

## 7. Course / Group / Membership Form Mapping

Course/group/membership forms usually create:

- Contact
- Note
- Access/support task if needed
- Email acknowledgment

They usually do **not** create:

- Funding deal
- Company
- Funding applicant lifecycle status

| Wix Field | HubSpot Destination |
|---|---|
| Name | Contact |
| Email | Contact |
| Course/group selected | Note |
| Membership status | Note unless verified field |
| Access issue | Task |
| Partner/funding interest | Note; route if explicit |
| Payment/order details | Do not force into deal unless revenue tracking workflow exists |

---

## 8. General Contact Form Mapping

General contact forms should be triaged.

| Inquiry Type | CRM Action |
|---|---|
| Funding question | Route to funding applicant workflow |
| Partner question | Route to partner workflow |
| Website support | Contact + note/task |
| Course/group support | Contact + note/task |
| Vendor pitch | Contact/company only if useful |
| Unknown | Contact + note; no deal |

---

## 9. Wix AI / Chat Lead Capture

If Wix AI/chat captures leads:

- Extract identity
- Classify intent
- Search HubSpot
- Add note
- Create task if human follow-up needed
- Do not create deals from vague chatbot interest

Chat note format:

```markdown
## Wix Chat Lead Note

Source: Wix Chat / AI Agent  
Visitor: [Name / Email / Unknown]  
Intent: [Funding / Partner / Support / Unknown]  
Summary: [Conversation summary]  
Recommended next action: [Task/email/none]
```

---

## 10. Site-Side Acknowledgment Email Rules

Wix/site-side acknowledgment emails should be:

- Operational
- Brand-safe
- Clear
- Short
- No guarantees
- Not overly Jason-style

Use for:

- Form received
- Application received
- Partner application received
- Course/group access
- Missing next step

Do not use aggressive personal follow-up language in automated Wix emails.

---

## 11. Form Classification Table

| Wix Form Type | Contact | Company | Deal | Note | Task | Email |
|---|---:|---:|---:|---:|---:|---:|
| Funding application | Yes | If valid entity | If real opportunity | Yes | Usually | Yes |
| Partner application | Yes | If valid agency | Usually no | Yes | Usually | Yes |
| Broker profile | Yes | If valid agency | No | Yes | Yes | Maybe |
| Course enrollment | Yes | Usually no | No | Yes | If needed | Yes |
| Group access | Yes | No | No | Yes | If issue | Yes |
| Contact form | Yes | Depends | Depends | Yes | Depends | Maybe |
| Chat lead | Yes if enough info | Depends | Rarely | Yes | Usually | Maybe |

---

## 12. Proposed Wix → HubSpot Update Format

```markdown
## Proposed Wix Form → HubSpot Updates

| Object | Action | Details | Reason |
|---|---|---|---|
| Contact | Create / Update / Existing | [Name, email, phone] | Form submitter |
| Company | Create / Skip / Update | [Business name/site] | Only if valid entity |
| Deal | Create / Skip / Update | [Amount/stage] | Only if funding opportunity exists |
| Note | Add | [Form summary] | Preserve source/context |
| Task | Create / Skip | [Follow-up] | Next action |
| Email | Draft / Send / Skip | [Template] | Acknowledgment/follow-up |

Approve? [✅ Yes / ❌ No]
```

---

## 13. Source Attribution

Always preserve source:

```text
Wix funding form
Wix partner form
Wix broker profile form
Wix course enrollment
Wix group access
Wix contact form
Wix chat / AI agent
```

If the exact form is unknown, note:

```text
Source appears to be Wix/site-side intake, exact form unknown.
```

---

## 14. Automation Guidance

For future automation:

- Use webhook payloads with form type
- Normalize fields before HubSpot
- Dedupe by email/phone
- Branch by form classification
- Create note every time
- Create deal only for funding opportunities
- Create company only for real entities
- Create task when action is needed
- Send site-side acknowledgment email if appropriate

Never let a raw Wix webhook blindly create a deal.

That is how automation becomes a caffeinated raccoon with CRM admin access.

---

## 15. What Not To Do

Do not:

- Treat all Wix forms as funding applications
- Create companies from every business-name field
- Create deals from course/group signups
- Send Jason-style emails from site-side automations
- Ignore Wix source/form name
- Overwrite HubSpot fields without search/review
- Lose original form values
- Skip follow-up tasks for hot applicants
- Store sensitive documents carelessly

---

## 16. Operational Standard

Every Wix submission should answer:

- What form/source did this come from?
- What does the person want?
- Is this funding, partner, profile, course, support, or unknown?
- What record already exists?
- What should be created/updated?
- What belongs in a note?
- What task/email is needed next?

Classify first. Map second. Execute third.
