# 23 - Google Drive to HubSpot Document Handling SOP

## Google Drive → HubSpot Document Handling SOP  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This SOP defines how to use Google Drive documents, PDFs, screenshots, exports, and assets in HubSpot CRM workflows.

Use this document when handling:

- Funding applicant documents
- Screenshots from applicants
- Wix form exports
- PDFs
- Bank statements or financial documents
- Partner profile assets
- Broker headshots
- SOP/source files
- Google Docs/Sheets related to CRM operations
- Uploaded files that need CRM summarization

The goal is to use Drive as the file/document source while keeping HubSpot clean and secure.

Google Drive stores the files. HubSpot stores the operational summary.

Do not turn HubSpot into a file cabinet with anxiety.

---

## 2. Source-of-Truth Rule

| System | Owns |
|---|---|
| Google Drive | Source files, documents, PDFs, screenshots, exports, assets |
| HubSpot | CRM summary, next action, record relationship |
| Gmail | Original email context if file arrived by email |
| Notion | SOP/project planning if file is operational/knowledge content |

Do not paste full documents into HubSpot notes unless the document is short and non-sensitive.

---

## 3. Document Review Workflow

```markdown
1. Identify file/source.
2. Determine file type and sensitivity.
3. Extract relevant CRM context.
4. Search HubSpot contact/company/deal.
5. Summarize only necessary details in HubSpot note.
6. Create task if action is required.
7. Reference Drive file/link if appropriate and safe.
8. Do not duplicate sensitive raw content.
```

---

## 4. File Classification

Classify Drive files as:

```text
Funding applicant document
Bank/revenue document
Identity document
Application screenshot
Provider screenshot
Wix form export
Partner profile asset
Broker headshot
Contract/agreement
Internal SOP/source file
Unknown / needs review
```

File classification determines how much should be summarized into HubSpot.

---

## 5. Sensitive Document Rules

Treat these as sensitive:

- Bank statements
- IDs
- DOB/SSN/EIN documents
- Credit reports
- Tax returns
- Revenue screenshots
- Funding offers/terms
- Application screenshots
- Personal financial details

Rules:

- Do not paste raw sensitive content into HubSpot notes.
- Summarize only operational facts needed for follow-up.
- Avoid storing unnecessary PII in notes.
- Reference file location only if access is controlled.
- Do not copy sensitive docs into GitHub, Vercel, public Notion, or public Wix.

---

## 6. HubSpot Note Template for Drive Documents

```markdown
## Google Drive Document Summary Note

Document type: [Funding doc / bank statement / screenshot / partner asset / SOP / other]  
File/source: [Drive filename or link if appropriate]  
Applicant/partner: [Name]  
Related deal/company: [Deal/company if applicable]  
Review date: [Date]

Operational summary:
[Summarize only relevant CRM details.]

Key details:
- Funding requested: [Value or n/a]
- Revenue/bank context: [High-level summary only]
- Missing/complete items: [Details]
- Provider/application status: [Details]
- Profile asset status: [For partner/broker assets]

Recommended action:
[Task/email/deal update needed.]

Sensitivity note:
Raw sensitive document content should remain in controlled file storage, not copied into HubSpot.
```

---

## 7. Applicant Document Handling

For applicant documents:

| Document Type | HubSpot Handling |
|---|---|
| Bank statement | Note high-level status only; avoid raw data |
| ID | Note received/missing only |
| Revenue screenshot | Summarize relevant revenue context carefully |
| Provider screenshot | Summarize visible issue/status |
| Application PDF | Summarize intake/status |
| Missing docs list | Create missing docs task |

Example:

```markdown
Applicant provided bank/revenue documentation. Document appears relevant for funding review. Do not paste raw statement details into HubSpot. Next action: confirm provider/application requirement and follow up if additional items are needed.
```

---

## 8. Partner / Broker Asset Handling

For broker profile assets:

| Asset | HubSpot Handling |
|---|---|
| Headshot | Note received/missing; store in Drive/Wix/GitHub as appropriate |
| Bio doc | Summarize/profile note |
| Logo | Note asset received; store in Drive |
| Profile links | Map contact/company fields if verified |
| Resource list | Note + task |
| Testimonials | Note/profile context |

Broker asset note:

```markdown
## Broker Profile Asset Note

Partner: [Name]  
Assets received:
- Headshot: [Yes/No]
- Bio: [Yes/No]
- Logo: [Yes/No]
- Links/resources: [List]

Next action:
[Update profile / request missing assets / send preview.]
```

---

## 9. Wix Form Export Handling

For Wix form exports stored in Drive:

1. Identify form type.
2. Parse applicant/partner data.
3. Search HubSpot.
4. Map fields using relevant mapping doc.
5. Add note with source attribution.
6. Create task/deal only if appropriate.

Source note:

```markdown
Source: Google Drive file containing Wix form export. Parsed and mapped according to Wix Forms → HubSpot Intake Source Mapping SOP.
```

---

## 10. Drive Link Usage in HubSpot

Only include Drive links in HubSpot notes when:

- Access is controlled
- Link is useful for operations
- Link does not expose sensitive data broadly
- The user approves or workflow supports it

If unsure, mention filename/reference without link.

Example:

```markdown
Supporting file exists in Google Drive: [filename]. Link not pasted into HubSpot due to sensitive applicant information.
```

---

## 11. Task Triggers from Drive Files

| Drive/File Signal | Recommended Task |
|---|---|
| Applicant sent docs | `Review docs — [Name] — funding file received` |
| Missing docs identified | `Request docs — [Name] — [missing item]` |
| Screenshot shows provider delay | `Follow up — [Name] — review provider delay` |
| Broker headshot received | `Update broker profile — [Name] — add headshot` |
| Broker bio received | `Update broker profile — [Name] — add profile bio` |
| Wix export received | `Review intake export — [Source] — map to HubSpot` |

---

## 12. What Not To Do

Do not:

- Store raw sensitive documents in HubSpot notes
- Share Drive links publicly
- Put applicant financial docs in GitHub/Vercel
- Treat file presence as proof of approval
- Over-interpret screenshots
- Create company/deal before HubSpot search
- Forget to create missing-docs task
- Lose source file reference when context matters

---

## 13. Operational Standard

Drive should answer: where is the file?

HubSpot should answer: what does it mean for the relationship, deal, task, or next action?

Keep files in Drive. Keep CRM memory in HubSpot.
