# 24 - Google Contacts and HubSpot Identity Resolution SOP

## Google Contacts + HubSpot Identity Resolution SOP  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This SOP defines how to use Google Contacts alongside HubSpot when resolving identities for applicants, partners, brokers, and business contacts.

Use this document when:

- A person is known personally but not found in HubSpot
- Email/phone details differ between systems
- A Gmail sender needs to be matched to a HubSpot contact
- A partner/applicant has incomplete details
- Contact deduplication requires outside context
- Google Contacts may have phone/email/company info
- HubSpot needs a clean CRM record created or updated

The goal is to use Google Contacts as identity support, not as the CRM source of truth.

HubSpot owns CRM status. Google Contacts helps identify the human.

---

## 2. Source-of-Truth Rule

| System | Role |
|---|---|
| HubSpot | CRM source of truth for applicants, partners, deals, tasks, notes |
| Google Contacts | Personal/professional address book and identity reference |
| Gmail | Communication evidence |
| Google Calendar | Scheduled meeting context |

Use Google Contacts to supplement HubSpot, not replace it.

---

## 3. Identity Resolution Workflow

```markdown
1. Start with the user-provided name/email/phone.
2. Search HubSpot by email.
3. Search HubSpot by phone.
4. Search HubSpot by name.
5. If HubSpot is incomplete/unclear, search Google Contacts.
6. Compare email, phone, name, company, notes/context.
7. Decide whether the Google Contact matches the HubSpot record.
8. Propose HubSpot update if useful.
9. Get approval before writing to HubSpot.
```

---

## 4. Matching Confidence Levels

### High Confidence

Use when:

- Same email
- Same phone
- Same email + name
- Same phone + name
- Same Gmail thread/contact context

Recommended action:

- Update existing HubSpot contact if needed.
- Add note if context matters.

### Medium Confidence

Use when:

- Same name + same company
- Same name + similar email domain
- Same phone but name variation
- Known personal context supports match

Recommended action:

- Propose match and ask before update.

### Low Confidence

Use when:

- Same name only
- Similar business only
- Shared city/network only
- Incomplete phone/email

Recommended action:

- Do not update/merge.
- Preserve uncertainty in note or ask for confirmation.

---

## 5. Google Contacts Data Handling

Useful Google Contacts fields:

- Name
- Email
- Phone
- Company
- Job title
- Address
- Website
- Notes
- Social/profile links if available

Use only relevant fields in HubSpot.

Do not copy personal notes into HubSpot unless operationally appropriate.

---

## 6. HubSpot Update Rules from Google Contacts

Update HubSpot only when:

- The identity match is high confidence
- The data is clean and useful
- The field exists
- Existing HubSpot value is blank or clearly outdated
- User approves update

Do not overwrite HubSpot fields from Google Contacts if:

- HubSpot has newer CRM context
- Values conflict
- Match confidence is medium/low
- The Google Contact data looks personal/outdated
- The field is not relevant to CRM operations

---

## 7. Contact Update Proposal Format

```markdown
## Proposed Identity Resolution Update

| Field | HubSpot Current | Google Contacts Value | Recommendation | Reason |
|---|---|---|---|---|
| Email | [current] | [value] | Update / leave | [reason] |
| Phone | [current] | [value] | Update / leave | [reason] |
| Company | [current] | [value] | Update / note only | [reason] |

Match confidence: High / Medium / Low

Approve HubSpot update? [✅ Yes / ❌ No]
```

---

## 8. Duplicate Prevention Use Case

When a new applicant email arrives:

1. Search HubSpot.
2. If not found, search Google Contacts.
3. If Google Contact found, use it to avoid duplicate/incorrect creation.
4. Create HubSpot contact only after confirming no HubSpot duplicate.
5. Add note if Google Contacts context helped identify the applicant.

---

## 9. Personal vs Business Boundary

Be careful with personal contacts.

Do not automatically copy:

- Personal addresses
- Private notes
- Personal relationship context
- Family details
- Irrelevant phone numbers
- Sensitive details

Only move data into HubSpot when it helps legitimate CRM operations.

---

## 10. What Not To Do

Do not:

- Treat Google Contacts as the CRM
- Merge HubSpot contacts based on Google Contacts alone
- Overwrite HubSpot email/phone without approval
- Create companies from contact company text alone
- Copy private personal notes into HubSpot
- Assume same name equals same person
- Update business records from stale personal contact data

---

## 11. Operational Standard

Google Contacts should help answer:

- Is this the same person?
- Do we have a missing email/phone?
- Is there enough confidence to update HubSpot?
- Should we ask before acting?

When identity is uncertain, preserve uncertainty.

Do not let the address book drive the CRM truck.
