# 35 - HubSpot API and OAuth Reference for AI Agents

## HubSpot API + OAuth Reference for AI Agents  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This reference defines how future AI agents, GPT actions, n8n workflows, or custom apps should interact with HubSpot for Moonshine Capital.

Use this document when planning:

- Custom GPT Actions
- AI agent tools
- n8n HTTP workflows
- HubSpot private app integrations
- OAuth apps
- CRM automation APIs
- Middleware between ChatGPT and HubSpot

This is a planning reference, not a reason to bypass approval gates.

API access is power. Power without guardrails is just a chainsaw with a login screen.

---

## 2. Integration Options

### 2.1 HubSpot Connector in ChatGPT

Best for:

- Interactive CRM search
- Proposal/review
- Human-approved record actions
- Notes/tasks/deals
- Low-code CRM operations

### 2.2 HubSpot Private App

Best for:

- Internal n8n automation
- Server-side workflows
- Controlled scopes
- Moonshine-owned automations

### 2.3 OAuth App

Best for:

- Multi-account SaaS/product
- Public-facing app
- Other users connecting their HubSpot accounts
- Scalable commercial integration

Default for Moonshine internal ops:

```text
Private app or existing connector
```

Use OAuth when building external/user-facing product.

---

## 3. Recommended HubSpot Objects

Writable in current connector context:

```text
CONTACT
COMPANY
DEAL
NOTE
TASK
EMAIL
CALL
MEETING_EVENT
TICKET
PRODUCT
LINE_ITEM
```

Read-only/not writable in current connector context:

```text
QUOTE
INVOICE
SUBSCRIPTION
ORDER
CART
OBJECT_LIST
```

Do not design write actions for unavailable objects unless API/app permissions are separately confirmed.

---

## 4. Common API Capabilities Needed

AI/n8n workflows typically need:

- Search contacts
- Create/update contacts
- Search companies
- Create/update companies
- Search deals
- Create/update deals
- Create notes
- Create tasks
- Create associations
- Search owners
- Fetch properties
- Validate dropdown options

---

## 5. Required Scopes / Permissions

Actual scopes depend on app type, but expect needs around:

```text
crm.objects.contacts.read
crm.objects.contacts.write
crm.objects.companies.read
crm.objects.companies.write
crm.objects.deals.read
crm.objects.deals.write
crm.objects.notes.read
crm.objects.notes.write
crm.objects.tasks.read
crm.objects.tasks.write
crm.objects.owners.read
crm.schemas.contacts.read
crm.schemas.companies.read
crm.schemas.deals.read
```

Only request scopes needed.

Do not over-permission apps because “maybe later.”

That is how future-you inherits a security raccoon.

---

## 6. Search-First API Pattern

All AI/API workflows must search first.

```text
Search contact by email
→ Search by phone
→ Search by name
→ Search company by domain/name if valid
→ Search associated deals
→ Decide create/update/skip
```

Never create blindly.

---

## 7. Approval Gates for AI Agents

AI agents may auto-read/search.

AI agents may propose.

AI agents should require approval for:

- Create/update contact
- Create/update company
- Create/update deal
- Create associations
- Send email
- Close won/lost
- Owner changes
- Merge/delete

Automation can create notes/tasks under strict rules if approved by workflow design.

---

## 8. Property Validation

Before writing:

- Confirm property exists.
- Confirm data type.
- Confirm dropdown values.
- Use notes if property missing/unverified.
- Do not guess internal names.

Use property fetch/search in tools or API before field writes.

---

## 9. Association Rules

Associations should be created only when relationship is clear.

Allowed common associations:

- Contact ↔ Company
- Contact ↔ Deal
- Company ↔ Deal
- Note ↔ Contact/Deal/Company
- Task ↔ Contact/Deal/Company

Do not associate based on name similarity alone.

---

## 10. Error Handling

API workflows must handle:

- 400 invalid property/value
- 401 unauthorized
- 403 missing scope
- 404 record not found
- 409 duplicate/conflict
- 429 rate limit
- 5xx HubSpot/system error

Do not retry unsafe writes blindly.

---

## 11. Security Rules

Do not expose:

- Private app tokens
- OAuth client secret
- Refresh tokens
- n8n credentials
- HubSpot account IDs in public code if avoidable
- Sensitive applicant data in logs

Store secrets in:

- n8n credentials
- environment variables
- secure server config
- platform secret manager

Never hardcode secrets in GPT instructions, GitHub, or prompt files.

---

## 12. GPT Action Design Guardrails

GPT Actions should:

- Separate read/search from write actions
- Return proposed changes before write
- Include confirmation flag
- Validate object type
- Validate required fields
- Limit batch size
- Log actions
- Avoid sensitive payloads when possible

---

## 13. What Not To Do

Do not:

- Build an agent that writes to HubSpot without search
- Use OAuth when private app is enough
- Over-scope app permissions
- Store tokens in Markdown/source files
- Guess property names
- Hardcode pipeline/stage values without verification
- Auto-create companies/deals from vague input
- Send personal emails without approval

---

## 14. Operational Standard

A good HubSpot AI/API integration is:

- Permission-minimized
- Search-first
- Property-aware
- Approval-gated
- Logged
- Error-safe
- Sensitive-data-conscious
- Easy to disable

The API should make the CRM sharper, not faster at becoming landfill.
