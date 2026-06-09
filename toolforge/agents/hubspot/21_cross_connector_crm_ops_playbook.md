# 21 - Cross-Connector CRM Ops Playbook

## Cross-Connector CRM Ops Playbook  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This playbook defines how ChatGPT should coordinate HubSpot CRM operations with other connected systems used by Moonshine Capital.

Use this document when a task touches more than one system, including:

- HubSpot
- Gmail
- Google Drive
- Google Contacts
- Google Calendar
- Notion
- Wix
- GitHub
- Vercel
- n8n
- AI agents / GPT actions / automations

The goal is to keep every system in its proper lane.

HubSpot is the CRM memory. Gmail is the conversation layer. Wix is the intake/site layer. Notion is the planning/knowledge layer. GitHub/Vercel are the product/build layer. Google Drive stores documents/assets. Google Calendar manages scheduled time.

When every tool tries to be the source of truth, the business becomes a clown car with API keys.

---

## 2. Source-of-Truth Rules

| System | Primary Role | Should Own |
|---|---|---|
| HubSpot | CRM source of truth | Contacts, companies, deals, notes, tasks, ownership, pipeline status |
| Gmail | Communication source | Email threads, replies, drafts, applicant/partner communication |
| Google Drive | Document/file source | PDFs, docs, screenshots, intake exports, assets, SOP files |
| Google Contacts | Identity reference | Personal/professional contact lookup, enrichment support |
| Google Calendar | Scheduling source | Calls, meetings, events, calendar invites |
| Notion | Knowledge/project workspace | SOPs, databases, content calendars, project plans, resource libraries |
| Wix | Website/intake/community/course source | Forms, membership, groups, courses, public pages, CMS |
| GitHub | Code/project issue source | Repos, issues, PRs, docs, product backlog |
| Vercel | Deployment/runtime source | Project deployments, preview/prod URLs, build status |
| n8n | Automation/orchestration source | Webhooks, routing, workflow execution, integration glue |

Rule:

> HubSpot owns relationship and revenue context. Other systems support or trigger it.

---

## 3. Cross-Connector Operating Principles

### 3.1 Search First in the Right System

Before acting, search the system that owns the relevant truth.

| Question | Search First |
|---|---|
| Does this contact/deal/company already exist? | HubSpot |
| What did the applicant say by email? | Gmail |
| Is there a supporting document/screenshot? | Google Drive / uploaded file |
| Is this person in personal contacts? | Google Contacts |
| Is there a call scheduled? | Google Calendar |
| What SOP/project doc governs this? | Project sources / Notion / Drive |
| Is this a website/form/course issue? | Wix |
| Is this a product/build request? | GitHub |
| Is this deployed or broken in production? | Vercel |
| Is this an automation workflow? | n8n |

### 3.2 Do Not Duplicate Sources of Truth

Do not store full copies of everything everywhere.

Use summaries and references.

Examples:

- Summarize Gmail thread in HubSpot note.
- Link/reference Drive document instead of pasting full sensitive content.
- Create GitHub issue for product build work and summarize in HubSpot if partner-facing.
- Create Calendar event for scheduled call and HubSpot task/note for CRM follow-up.

### 3.3 Use Human Approval for CRM Writes

When connector actions create/update HubSpot records:

1. Search first.
2. Propose changes.
3. Get approval.
4. Execute.
5. Return record links.

This applies even when another connector triggered the workflow.

---

## 4. HubSpot as Central CRM

HubSpot should store:

- Contact records
- Company records
- Deals
- Pipeline/stage status
- Funding applicant lifecycle status
- Partner applicant context
- Notes
- Follow-up tasks
- Ownership/hand-off context
- High-level summaries of external activity
- Associations between contacts/companies/deals/tasks/notes

HubSpot should not store:

- Full raw email threads unless necessary
- Full sensitive financial documents
- Large file assets
- Code/build instructions
- Long-form project plans better suited to Notion/GitHub
- Duplicate copies of Wix CMS data unless needed for CRM

---

## 5. Connector Routing Matrix

| Task Type | Primary Connector | Secondary Connector | HubSpot Action |
|---|---|---|---|
| Funding applicant email reply | Gmail | HubSpot | Search contact, log note, create task/deal if needed |
| Wix funding form submission | Wix / webhook | HubSpot | Create/update contact, note, deal, task |
| Applicant document review | Drive | HubSpot | Summarize doc context in note, create task |
| Schedule applicant call | Google Calendar | HubSpot | Create event + CRM task/note |
| Partner profile update | HubSpot | GitHub/Wix/Vercel/Drive | Note + task + external build action |
| Product/portal bug from partner | GitHub | Vercel/HubSpot | Issue in GitHub, note/task in HubSpot if partner-facing |
| Weekly CRM report | HubSpot | Gmail/Calendar if needed | Report + cleanup/task recommendations |
| Automation build | n8n | HubSpot/Gmail/Wix | Workflow spec, payload standards, logging |

---

## 6. Cross-Connector Workflow Pattern

Use this default pattern.

```markdown
## Cross-Connector Workflow

1. Identify the system of origin.
2. Identify the system of record.
3. Search the system of record.
4. Extract useful context from the origin system.
5. Decide whether HubSpot needs contact/company/deal/note/task updates.
6. Decide whether another system needs an action.
7. Propose actions grouped by system.
8. Get approval for write actions.
9. Execute approved actions.
10. Return links/results.
```

---

## 7. Proposed Cross-System Action Format

Use this when a task spans systems.

```markdown
## Proposed Cross-Connector Actions

| System | Action | Details | Reason | Approval Needed? |
|---|---|---|---|---|
| Gmail | Draft reply | [Subject / recipient] | Applicant follow-up | Yes if sending |
| HubSpot | Search contact/deal | [Email/name] | Avoid duplicates | No |
| HubSpot | Add note | [Summary] | Preserve CRM context | Yes |
| HubSpot | Create task | [Title/due date] | Next action | Yes |
| Google Calendar | Create event | [Date/time] | Scheduled call | Yes |
| GitHub | Create issue | [Repo/issue] | Product/build work | Yes |
| Vercel | Review deployment | [Project] | Debug/prod status | No/depends |
| Notion | Update database/page | [Page/db] | Project tracking | Yes |
| Wix | Update CMS/form/course | [Site/page] | Site workflow | Yes |
```

---

## 8. Sensitive Data Rules

Be careful with:

- DOB
- SSN
- EIN
- bank statements
- revenue screenshots
- personal credit details
- identity documents
- application screenshots
- funding offers/terms

Rules:

- Store sensitive raw files in secure file/document system, not long HubSpot notes.
- Summarize only the operationally necessary details in HubSpot.
- Do not paste full sensitive documents into CRM notes.
- Avoid exposing sensitive data in prompts, public docs, GitHub, or Vercel.
- Use note language that helps follow-up without oversharing.

---

## 9. Connector Failure Handling

If any connector fails:

1. Do not claim success.
2. Explain which system failed.
3. Explain what was attempted.
4. Preserve the safest partial result.
5. Recommend next step.

Example:

```markdown
The HubSpot update did not complete. Gmail draft was prepared, but the CRM note/task was not created because the HubSpot connector returned an error. Recommended next step: retry HubSpot search/update or manually paste the note into the contact record.
```

No fake victories. The machines already lie enough.

---

## 10. What Not To Do

Do not:

- Use Gmail as the CRM
- Use HubSpot as document storage
- Use Notion as the applicant record of truth
- Use GitHub for applicant/private financial data
- Use Vercel for CRM records
- Create duplicate records across systems without linking/context
- Send emails without explicit send instruction
- Create calendar events without approval
- Update HubSpot without search + approval
- Let automations bypass dedupe/approval rules
- Store sensitive applicant docs in public/project-facing systems

---

## 11. Operational Standard

Every cross-connector workflow should answer:

- Which system did this start in?
- Which system owns the truth?
- What needs to be searched first?
- What should be summarized into HubSpot?
- What should remain in the original system?
- What needs approval?
- What link/result should be returned?

The goal is not “use every connector.”

The goal is to make the business run cleaner because each connector does its actual job.
