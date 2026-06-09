# 16 - Funding Applicant Lifecycle Status SOP

## Funding Applicant Lifecycle Status SOP  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This SOP defines Moonshine Capital’s operational lifecycle statuses for funding applicants.

Use this guide when tracking applicant progress across HubSpot contacts, deals, notes, tasks, Gmail, BankBreezy, Giggle, and related follow-up workflows.

This document exists because the current verified HubSpot deal stages are generic sales stages, not perfect funding workflow stages. Until a dedicated funding pipeline or custom lifecycle property exists, use these statuses in notes, deal descriptions, task notes, and reporting.

The goal is to make every funding applicant’s status obvious without needing to read twelve emails, three screenshots, and a prayer candle.

---

## 2. Core Rule

Do not confuse:

- HubSpot lifecycle stage
- HubSpot deal stage
- Moonshine Capital applicant lifecycle status
- Provider underwriting status
- Email follow-up status

They are related, but not identical.

Use HubSpot deal stages for pipeline tracking.

Use this applicant lifecycle status system for operational clarity inside notes, tasks, and reports.

---

## 3. Standard Funding Applicant Lifecycle Statuses

Use these standard statuses.

```text
New Inquiry
Application Received
Intake Reviewed
Needs More Information
Funding Link Sent
BankBreezy Dashboard Sent
Giggle Routing Recommended
Giggle Application Started
Bank Link Pending
Bank Linked
Underwriting Pending
Missing Documents
Offer / Terms Presented
Funded
Declined
Applicant Withdrew
No Response
Nurture
Closed Lost
```

Do not invent new lifecycle labels unless needed. If a new status repeats often, update this source file.

---

## 4. Status Definitions

| Status | Definition | Typical CRM Action |
|---|---|---|
| New Inquiry | Applicant expressed funding interest but has not provided complete intake | Contact + note; maybe task |
| Application Received | Applicant submitted funding form/application | Contact + note; consider deal |
| Intake Reviewed | Intake has been reviewed and routing/context is understood | Note + task/deal decision |
| Needs More Information | Missing details prevent clean routing | Note + follow-up task/email |
| Funding Link Sent | Applicant was sent a funding application/review link | Note + next-day follow-up task |
| BankBreezy Dashboard Sent | Applicant was sent BankBreezy dashboard link | Note + BankBreezy follow-up task |
| Giggle Routing Recommended | Applicant appears better suited for Giggle-style review | Note + Giggle follow-up task |
| Giggle Application Started | Applicant started Giggle process | Note + bank/status check task |
| Bank Link Pending | Bank connection is required or not confirmed | Task to confirm bank link |
| Bank Linked | Applicant completed bank connection | Note + underwriting/status follow-up |
| Underwriting Pending | Provider/review process is underway | Status follow-up task |
| Missing Documents | Applicant must provide docs/info | Missing docs task/email |
| Offer / Terms Presented | Offer/terms were made available | Note + follow-up task |
| Funded | Applicant successfully funded | Update deal Closed Won if appropriate |
| Declined | Applicant declined by provider or not eligible | Note + Closed Lost if appropriate |
| Applicant Withdrew | Applicant chose not to proceed | Note + Closed Lost/Nurture |
| No Response | Applicant has not responded after follow-up | 48-hour/final follow-up task |
| Nurture | Not active now, may re-engage later | Note; avoid active deal clutter |
| Closed Lost | Opportunity is closed without funding | Deal Closed Lost + reason note |

---

## 5. Status vs. HubSpot Deal Stage Mapping

Use this mapping when deal stage updates are needed.

| Applicant Lifecycle Status | Suggested HubSpot Deal Stage | Stage Value | Notes |
|---|---|---|---|
| New Inquiry | Usually no deal yet | n/a | Contact + note only if intent unclear |
| Application Received | Qualified To Buy | `qualifiedtobuy` | If funding intent is clear |
| Intake Reviewed | Qualified To Buy | `qualifiedtobuy` | Use note for routing details |
| Needs More Information | Qualified To Buy | `qualifiedtobuy` | Create missing info task |
| Funding Link Sent | Contract Sent | `contractsent` | Closest stage for application/link sent |
| BankBreezy Dashboard Sent | Contract Sent | `contractsent` | Note true status |
| Giggle Routing Recommended | Qualified To Buy or Contract Sent | `qualifiedtobuy` / `contractsent` | Use `contractsent` if link sent |
| Giggle Application Started | Decision Maker Bought-In | `decisionmakerboughtin` | Applicant engaged |
| Bank Link Pending | Contract Sent or Decision Maker Bought-In | Depends | Note bank-link status |
| Bank Linked | Decision Maker Bought-In | `decisionmakerboughtin` | Active review |
| Underwriting Pending | Decision Maker Bought-In | `decisionmakerboughtin` | Active review |
| Missing Documents | Decision Maker Bought-In | `decisionmakerboughtin` | Do not close unless abandoned |
| Offer / Terms Presented | Contract Sent | `contractsent` | Offer/terms are pending |
| Funded | Closed Won | `closedwon` | Only when actually funded |
| Declined | Closed Lost | `closedlost` | Add reason note |
| Applicant Withdrew | Closed Lost | `closedlost` | Add reason note |
| No Response | Closed Lost or Nurture | `closedlost` if closing | Use after final follow-up |
| Nurture | Leave open or Closed Lost | Depends | Preserve status in note |
| Closed Lost | Closed Lost | `closedlost` | Add reason note |

---

## 6. Required Status Note Format

When assigning or updating applicant lifecycle status, use this note format.

```markdown
## Funding Applicant Lifecycle Status Update

Applicant: [Name]  
Deal: [Deal name or “No deal”]  
Previous status: [Status or “Unknown”]  
New status: [Status]  
Date updated: [Date]

Reason:
[Why status changed.]

Operational context:
- Funding requested: [Value]
- Link sent: [Yes / No / Which link]
- Bank account type: [Personal / Business / Unknown]
- Bank linked: [Yes / No / Unknown]
- Missing docs: [Yes / No / Details]
- Provider/application status: [Details]

Next action:
[Task/email/deal update needed.]

Compliance:
No approval, funding amount, terms, or timeline guaranteed.
```

---

## 7. Status Transition Rules

### 7.1 From New Inquiry

Move to:

- Application Received when form/application is submitted
- Needs More Information when key details are missing
- Nurture when interest is weak or premature

### 7.2 From Application Received

Move to:

- Intake Reviewed after CRM/operator review
- Needs More Information if critical info is missing
- Funding Link Sent if next-step link is sent
- BankBreezy Dashboard Sent if BankBreezy link is sent
- Giggle Routing Recommended if applicant fits Giggle lane

### 7.3 From Funding Link Sent / BankBreezy Dashboard Sent

Move to:

- Bank Link Pending if applicant started but bank not linked
- Underwriting Pending if application/review is active
- No Response if applicant does not reply
- Needs More Information if link/application issue occurs

### 7.4 From Giggle Routing Recommended

Move to:

- Giggle Application Started when applicant starts
- Bank Link Pending if bank connection is required
- No Response if applicant does not act
- Nurture if timing changes

### 7.5 From Underwriting Pending

Move to:

- Missing Documents if provider requests items
- Offer / Terms Presented if offer appears
- Funded if successfully funded
- Declined if provider declines
- No Response if applicant stops engaging

### 7.6 From No Response

Move to:

- Funding Link Sent if applicant re-engages
- Nurture if timing changed
- Closed Lost after final follow-up and no reply

---

## 8. Task Triggers by Status

| Status | Recommended Task |
|---|---|
| New Inquiry | Review intake / ask missing details |
| Application Received | Review intake and route applicant |
| Needs More Information | Request missing info |
| Funding Link Sent | Next-day funding link follow-up |
| BankBreezy Dashboard Sent | Confirm BankBreezy quote/application started |
| Giggle Routing Recommended | Confirm Giggle application started |
| Bank Link Pending | Confirm bank account linked |
| Bank Linked | Underwriting/status follow-up |
| Underwriting Pending | Check funding review status |
| Missing Documents | Request docs |
| Offer / Terms Presented | Follow up on offer/terms |
| No Response | 48-hour or final follow-up |
| Nurture | Periodic check-in only if useful |

---

## 9. Email Triggers by Status

| Status | Email Template Type |
|---|---|
| Application Received | Application received email |
| Needs More Information | Missing info / next-step email |
| Funding Link Sent | Funding next-step email |
| BankBreezy Dashboard Sent | BankBreezy alternative lane email |
| Giggle Routing Recommended | Giggle next-step email |
| Bank Link Pending | Bank connection reminder |
| Missing Documents | Missing docs follow-up |
| No Response | 48-hour no-response follow-up |
| Offer / Terms Presented | Offer/terms follow-up |
| Nurture | Soft check-in |

---

## 10. Reporting Fields to Preserve in Notes

For reporting and weekly review, preserve:

- Applicant name
- Funding requested
- Current applicant lifecycle status
- Deal stage
- Last action
- Next task
- Link sent status
- Bank link status
- Missing docs status
- Provider delay status
- Owner
- Last contacted date

---

## 11. Common Mistakes to Avoid

Avoid:

- Calling an applicant Funded before funding is complete
- Treating link sent as approval
- Treating bank linked as approval
- Treating underwriting pending as Closed Won
- Leaving stale applicants with no status
- Creating multiple status labels for the same thing
- Updating deal stage without note context
- Closing lost before final follow-up unless clearly declined/withdrawn
- Forgetting to create task after status change
- Using provider status as if it were Moonshine Capital’s decision

---

## 12. Operational Standard

Every active funding applicant should have:

- Current lifecycle status
- Recent note explaining context
- Next task if action is needed
- Correct deal stage if deal exists
- Clear no-guarantee language where applicable

The status should tell the team what is happening.

The note should tell the team why.

The task should tell the team what to do next.
