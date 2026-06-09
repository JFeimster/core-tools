# 08 - HubSpot Record Creation Payload Examples

## HubSpot Record Creation Payload Examples  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document provides practical examples for preparing HubSpot record creation and update actions for Moonshine Capital CRM operations.

Use this file when converting applicant, partner, or funding workflow details into proposed HubSpot connector actions.

This is not a replacement for searching HubSpot first.

This file exists to help ChatGPT prepare clean, predictable action plans for:

- Contacts
- Companies
- Deals
- Notes
- Tasks
- Associations

The purpose is to reduce guesswork, preserve CRM hygiene, and make proposed changes easy for Jason to review before anything is written to HubSpot.

---

## 2. Critical Rule: Search Before Payload

Before preparing any create/update payload or action plan:

1. Search existing contacts by email.
2. Search existing contacts by phone.
3. Search existing contacts by full name.
4. Search companies by business name/domain, if provided.
5. Search existing deals associated with the contact/company.
6. Search open tasks if creating follow-up tasks.
7. Search notes when prior context may exist.

Do not create a new object until duplicate risk has been reviewed.

A clean payload after a lazy search is still CRM graffiti.

---

## 3. Confirmation Required Before Write Actions

Before creating or updating HubSpot records, always show proposed changes and ask for approval.

Use this format:

```markdown
## Proposed HubSpot Changes

| Object Type | ID | Action | Property / Detail | Current Value | New Value | Reason |
|---|---:|---|---|---|---|---|
| Contact | New / Existing ID | Create / Update | email | n/a | applicant@example.com | Primary identifier |
| Company | New / Existing ID / Skipped | Create / Update / Skip | name | n/a | Example LLC | Real business provided |
| Deal | New / Existing ID / Skipped | Create / Update / Skip | amount | n/a | 25000 | Requested amount |
| Note | New | Create | intake note | n/a | [summary] | Preserve routing context |
| Task | New | Create | follow-up task | n/a | [title/date] | Follow-up needed |

Approve? [✅ Yes / ❌ No]  
Want to skip confirmations for this chat? Just ask.
```

Only execute after approval.

---

## 4. Object Type Names

Use these object type names consistently when planning connector actions.

| CRM Object | Object Type |
|---|---|
| Contact | `CONTACT` |
| Company | `COMPANY` |
| Deal | `DEAL` |
| Note | `NOTE` |
| Task | `TASK` |
| Email activity | `EMAIL` |
| Call activity | `CALL` |
| Meeting event | `MEETING_EVENT` |
| Ticket | `TICKET` |

Use write actions only for object types confirmed as writable in the connector context.

---

## 5. Contact Create Example

### Use Case

Create a contact when:

- Search found no duplicate contact
- Applicant is a real person
- Email and/or phone is provided
- User approves creation

### Proposed Change Table

```markdown
| Object Type | ID | Action | Property / Detail | Current Value | New Value | Reason |
|---|---:|---|---|---|---|---|
| Contact | New | Create | firstname | n/a | Anthony | Parsed from intake |
| Contact | New | Create | lastname | n/a | Sanders | Parsed from intake |
| Contact | New | Create | email | n/a | anthony@example.com | Primary identifier |
| Contact | New | Create | phone | n/a | 555-555-5555 | Applicant phone |
| Contact | New | Create | funding_requested | n/a | Less than $25,000 | Mapped from $0 - $25,000 |
| Contact | New | Create | purpose | n/a | Working Capital/Business Expansion (withOUT real estate) | Mapped from working capital |
| Contact | New | Create | current_credit_score | n/a | 599 or below | Mapped from 300-579 |
| Contact | New | Create | call_requested | n/a | true | Applicant requested call |
```

### Structured Properties Example

```json
{
  "objectType": "CONTACT",
  "properties": {
    "firstname": "Anthony",
    "lastname": "Sanders",
    "email": "anthony@example.com",
    "phone": "555-555-5555",
    "funding_requested": "Less than $25,000",
    "purpose": "Working Capital/Business Expansion (withOUT real estate)",
    "current_credit_score": "599 or below",
    "call_requested": "true"
  }
}
```

### Guardrails

Do not include unverified fields.

Do not map messy contextual fields such as bank account type, lowest monthly revenue, or Giggle routing into contact properties unless a verified field exists.

Use a note instead.

---

## 6. Contact Update Example

### Use Case

Update an existing contact when:

- Contact was found by email/phone
- New data is clean and verified
- Existing data is blank or outdated
- User approves update

### Proposed Change Table

```markdown
| Object Type | ID | Action | Property / Detail | Current Value | New Value | Reason |
|---|---:|---|---|---|---|---|
| Contact | 123456 | Update | phone | blank | 555-555-5555 | New applicant phone |
| Contact | 123456 | Update | funding_requested | blank | $25,000 - $50,000 | Applicant selected range |
| Contact | 123456 | Update | call_requested | false | true | Applicant requested call |
```

### Structured Properties Example

```json
{
  "objectType": "CONTACT",
  "objectId": 123456,
  "properties": {
    "phone": "555-555-5555",
    "funding_requested": "$25,000 - $50,000",
    "call_requested": "true"
  }
}
```

### Conflict Rule

If existing value conflicts with new intake:

```markdown
Existing HubSpot value differs from applicant intake. Recommend preserving the current structured field and adding the new intake detail in a note unless Jason approves overwriting the field.
```

---

## 7. Company Create Example

### Use Case

Create a company only when a real business/entity is clearly provided.

Appropriate signals:

- Legal business name
- DBA / operating name
- Business website
- EIN
- Business address
- Business bank account tied to business
- Established operating business

### Proposed Change Table

```markdown
| Object Type | ID | Action | Property / Detail | Current Value | New Value | Reason |
|---|---:|---|---|---|---|---|
| Company | New | Create | name | n/a | Flavor Concierge | Real operating business provided |
| Company | New | Create | website | n/a | https://www.flavorconcierge.food/ | Business website provided |
| Company | New | Create | phone | n/a | 770-713-5278 | Business phone provided |
| Company | New | Create | domain | n/a | flavorconcierge.food | Derived from business website |
```

### Structured Properties Example

```json
{
  "objectType": "COMPANY",
  "properties": {
    "name": "Flavor Concierge",
    "website": "https://www.flavorconcierge.food/",
    "phone": "770-713-5278",
    "domain": "flavorconcierge.food"
  }
}
```

### Guardrails

Do not create a company from:

- Person name only
- Personal social profile
- Personal email
- Vague gig work description
- Funding request alone

If company is skipped, say why.

```markdown
Company skipped: no clear business/entity was provided in the intake.
```

---

## 8. Company Update Example

### Use Case

Update an existing company with clean business data.

### Proposed Change Table

```markdown
| Object Type | ID | Action | Property / Detail | Current Value | New Value | Reason |
|---|---:|---|---|---|---|---|
| Company | 987654 | Update | website | blank | https://www.flavorconcierge.food/ | Verified business website |
| Company | 987654 | Update | phone | blank | 770-713-5278 | Business phone provided |
| Company | 987654 | Update | state | blank | GA | Business address in Atlanta, GA |
```

### Structured Properties Example

```json
{
  "objectType": "COMPANY",
  "objectId": 987654,
  "properties": {
    "website": "https://www.flavorconcierge.food/",
    "phone": "770-713-5278",
    "state": "GA"
  }
}
```

---

## 9. Deal Create Example

### Use Case

Create a deal when:

- Applicant requested funding
- Funding opportunity should be tracked
- No duplicate active deal exists
- Correct pipeline/stage is known or selected
- User approves creation

### Proposed Change Table

```markdown
| Object Type | ID | Action | Property / Detail | Current Value | New Value | Reason |
|---|---:|---|---|---|---|---|
| Deal | New | Create | dealname | n/a | Anthony Sanders - Funding Request | Clear applicant funding opportunity |
| Deal | New | Create | amount | n/a | 25000 | Lower bound of requested range |
| Deal | New | Create | pipeline | n/a | [Known Pipeline ID/Name] | Funding pipeline |
| Deal | New | Create | dealstage | n/a | [Known Stage ID/Name] | Based on actual status |
```

### Structured Properties Example

```json
{
  "objectType": "DEAL",
  "properties": {
    "dealname": "Anthony Sanders - Funding Request",
    "amount": "25000",
    "pipeline": "[Known Pipeline ID/Name]",
    "dealstage": "[Known Stage ID/Name]"
  }
}
```

### Deal Amount Guardrails

| Applicant Input | Deal Amount |
|---|---|
| `$25,000` | `25000` |
| `$25,000 - $50,000` | `25000` unless instructed otherwise |
| `Up to $100,000` | Leave blank or use conservative amount only if approved |
| `As much as possible` | Leave blank |
| Missing | Leave blank |

Always preserve original applicant amount/range in a note.

---

## 10. Deal Update Example

### Use Case

Update an existing deal when the funding status changes.

### Proposed Change Table

```markdown
| Object Type | ID | Action | Property / Detail | Current Value | New Value | Reason |
|---|---:|---|---|---|---|---|
| Deal | 456789 | Update | dealstage | Application Sent | Bank Link Pending | Applicant started but bank not linked |
| Deal | 456789 | Update | amount | blank | 50000 | Applicant requested specific amount |
```

### Structured Properties Example

```json
{
  "objectType": "DEAL",
  "objectId": 456789,
  "properties": {
    "dealstage": "[Known Stage ID/Name]",
    "amount": "50000"
  }
}
```

### Guardrail

Do not guess stage IDs or pipeline values.

If not verified, say:

```markdown
Pipeline/stage value not verified. Recommend searching pipeline/stage properties or leaving stage unchanged until confirmed.
```

---

## 11. Note Create Example

### Use Case

Create a note to preserve applicant intake, routing, and context.

Notes are ideal for:

- Lowest monthly revenue
- Bank account type
- Time in business
- Giggle / BankBreezy routing
- Provider delays
- Missing docs
- Decision to skip company
- Decision to create/skip deal
- Email summary
- Applicant screenshots/context

### Proposed Change Table

```markdown
| Object Type | ID | Action | Property / Detail | Current Value | New Value | Reason |
|---|---:|---|---|---|---|---|
| Note | New | Create | Intake / Routing Note | n/a | [note summary] | Preserve applicant context |
| Association | n/a | Associate | Contact | n/a | Contact ID 123456 | Applicant record |
| Association | n/a | Associate | Deal | n/a | Deal ID 456789 | Funding opportunity |
```

### Note Body Example

```markdown
## Funding Applicant Intake / Routing Note

Applicant: Anthony Sanders  
Email: anthony@example.com  
Phone: 555-555-5555  
Business: Not clearly provided  
Funding requested: $50,000  
Mapped funding_requested: $50,000 - $100,000  
Purpose: Working capital  
Mapped purpose: Working Capital/Business Expansion (withOUT real estate)  
Credit score: 300-579  
Mapped current_credit_score: 599 or below  
Call requested: Yes

Qualification details:
- Monthly revenue: [value]
- Lowest monthly revenue: [value]
- Bank account type: Business
- Time in business: [value]

Routing context:
Applicant appears appropriate for BankBreezy / same-day business funding review. Preserve as routing recommendation only.

Action taken:
BankBreezy dashboard link recommended/sent.

Next action:
Create next-day follow-up task to confirm application/quote started.

Compliance:
No approval, funding amount, terms, or funding timeline guaranteed.
```

### Structured Note Example

```json
{
  "objectType": "NOTE",
  "properties": {
    "hs_note_body": "## Funding Applicant Intake / Routing Note\n\nApplicant: Anthony Sanders\nEmail: anthony@example.com\n..."
  },
  "associations": [
    {
      "targetObjectType": "CONTACT",
      "targetObjectId": 123456
    },
    {
      "targetObjectType": "DEAL",
      "targetObjectId": 456789
    }
  ]
}
```

---

## 12. Task Create Example

### Use Case

Create a task when follow-up is required.

### Proposed Change Table

```markdown
| Object Type | ID | Action | Property / Detail | Current Value | New Value | Reason |
|---|---:|---|---|---|---|---|
| Task | New | Create | title | n/a | Follow up — Anthony Sanders — confirm BankBreezy quote started | Next-day funding follow-up |
| Task | New | Create | due date | n/a | [Next business day, US/Eastern] | Timely applicant follow-up |
| Task | New | Create | status | n/a | Open | Task not yet completed |
| Association | n/a | Associate | Contact | n/a | Contact ID 123456 | Applicant |
| Association | n/a | Associate | Deal | n/a | Deal ID 456789 | Funding opportunity |
```

### Task Notes Example

```markdown
Context:
Applicant was sent/recommended the BankBreezy dashboard for same-day business funding review.

Action needed:
Confirm whether applicant started the quote/application process. If not, send a short reminder and ask if they had any issue completing the next step.

Applicant status:
Funding link sent. Awaiting confirmation.

Routing context:
BankBreezy / same-day business funding review recommended based on applicant need and timing. No approval, amount, terms, or timeline guaranteed.

Important details:
- Requested amount: $50,000
- Bank account type: Business
- Lowest monthly revenue: [value]
- Link sent: https://bankbreezy.com/funding/jason

Next step after completion:
If applicant started application, create/check bank-link task. If not, send reminder or create 48-hour no-response task.
```

### Structured Task Example

```json
{
  "objectType": "TASK",
  "properties": {
    "hs_task_subject": "Follow up — Anthony Sanders — confirm BankBreezy quote started",
    "hs_task_body": "Context:\nApplicant was sent/recommended the BankBreezy dashboard...",
    "hs_task_status": "NOT_STARTED",
    "hs_task_priority": "HIGH",
    "hs_task_type": "TODO",
    "hs_timestamp": "[Due datetime in HubSpot-compatible format]"
  },
  "associations": [
    {
      "targetObjectType": "CONTACT",
      "targetObjectId": 123456
    },
    {
      "targetObjectType": "DEAL",
      "targetObjectId": 456789
    }
  ]
}
```

### Guardrail

Task property names/status values may need verification before execution.

If uncertain, use the proposed-change table and verify available task properties before write action.

---

## 13. Association Examples

### 13.1 Associate Contact to Company

Use when:

- Contact owns/operates/represents company
- Company is real
- Relationship is supported by intake

```json
{
  "updateRequest": {
    "objects": [
      {
        "objectType": "CONTACT",
        "objectId": 123456,
        "associations": [
          {
            "targetObjectType": "COMPANY",
            "targetObjectId": 987654
          }
        ]
      }
    ]
  }
}
```

### 13.2 Associate Contact to Deal

Use when:

- Contact submitted funding request
- Deal represents that applicant’s funding opportunity

```json
{
  "updateRequest": {
    "objects": [
      {
        "objectType": "CONTACT",
        "objectId": 123456,
        "associations": [
          {
            "targetObjectType": "DEAL",
            "targetObjectId": 456789
          }
        ]
      }
    ]
  }
}
```

### 13.3 Associate Deal to Company

Use when:

- Deal is tied to the business
- Company is valid and relevant

```json
{
  "updateRequest": {
    "objects": [
      {
        "objectType": "DEAL",
        "objectId": 456789,
        "associations": [
          {
            "targetObjectType": "COMPANY",
            "targetObjectId": 987654
          }
        ]
      }
    ]
  }
}
```

### Guardrail

Always confirm specific object IDs before creating associations.

Do not associate records just because names look similar.

---

## 14. Contact-Only Intake Example

### Scenario

Applicant has name, email, phone, funding request, and revenue details, but no real company/entity.

### Recommended Action Plan

```markdown
| Object Type | ID | Action | Detail | Reason |
|---|---:|---|---|---|
| Contact | New/Existing | Create/Update | Applicant identity + verified intake fields | Real person with funding request |
| Company | Skipped | Skip | No business/entity clearly provided | Avoid speculative company |
| Deal | New/Skipped | Create only if funding opportunity should be tracked | Funding request exists |
| Note | New | Create | Preserve revenue, bank account type, no-company rationale | Context does not fit fields |
| Task | New | Create if follow-up needed | Move applicant to next step |
```

### Note Language

```markdown
Company record not created because no clear business/entity was provided. Applicant may be operating as an individual/gig worker/sole proprietor, but no business name was confirmed in intake.
```

---

## 15. Contact + Company + Deal Example

### Scenario

Applicant provides full identity, real business name, business website, business phone, and funding request.

### Recommended Action Plan

```markdown
| Object Type | ID | Action | Detail | Reason |
|---|---:|---|---|---|
| Contact | New/Existing | Create/Update | Applicant identity | Applicant/decision-maker |
| Company | New/Existing | Create/Update | Business name, website, phone/domain | Real operating business provided |
| Deal | New/Existing | Create/Update | Funding request | Track opportunity |
| Associations | n/a | Create | Contact + Company + Deal | Preserve relationship context |
| Note | New | Create | Intake/routing summary | Preserve context |
| Task | New | Create | Next follow-up | Move workflow |
```

---

## 16. Giggle / BankBreezy Applicant Example

### Scenario

Applicant has personal bank account, $6,000 monthly revenue, no business bank account, and was routed from BankBreezy to Giggle.

### Recommended Action Plan

```markdown
| Object Type | ID | Action | Detail | Reason |
|---|---:|---|---|---|
| Contact | Existing/New | Update/Create | Identity + verified fields | Applicant record |
| Company | Create/Skip | Depends | Create only if real business/entity exists | Avoid speculative company |
| Deal | New/Existing | Create/Update | Funding request if active | Track funding opportunity |
| Note | New | Create | Personal bank, $6k revenue, Giggle routing | Preserve routing context |
| Task | New | Create | Follow up — confirm Giggle application started | Next action |
```

### Routing Note Language

```markdown
Applicant is generating approximately $6,000/month but is using a personal bank account. BankBreezy path appears less suitable based on banking setup, so applicant was routed toward Giggle Finance review. No approval, amount, terms, or funding timeline guaranteed.
```

---

## 17. Error Prevention Checklist

Before creating or updating records, verify:

```markdown
- [ ] HubSpot searched by email
- [ ] HubSpot searched by phone
- [ ] HubSpot searched by name
- [ ] Company searched if business/entity exists
- [ ] Existing deals reviewed
- [ ] Duplicate risk addressed
- [ ] Structured fields verified
- [ ] Dropdown options verified
- [ ] Deal amount not invented
- [ ] Company not speculative
- [ ] Note captures nuance/context
- [ ] Task has clear title and due timing
- [ ] Associations are correct
- [ ] User approved write action
```

---

## 18. Common Mistakes to Avoid

Avoid:

- Creating contact before searching
- Creating company from personal name
- Creating deal for vague inquiry
- Using unverified property names
- Using invalid dropdown options
- Guessing pipeline/stage values
- Inventing amount
- Forgetting to preserve original applicant values in notes
- Creating tasks without due dates
- Creating notes/tasks without associations
- Associating wrong company because of similar name
- Treating examples as executable payloads without verifying current HubSpot properties

---

## 19. Operational Standard

A good HubSpot payload/action plan should be:

- Search-backed
- Conservative
- Specific
- Easy to review
- Approval-gated
- Properly associated
- Honest about what is verified
- Clear about what is stored in fields vs notes

The goal is not to stuff every applicant detail into a property.

The goal is to create a CRM record that tells the truth, supports follow-up, and does not make future Jason want to fight a printer.
