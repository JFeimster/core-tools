# 17 - BankBreezy and Giggle Link Routing Reference

## BankBreezy and Giggle Link Routing Reference  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document defines how to handle BankBreezy and Giggle routing inside Moonshine Capital’s HubSpot, Gmail, and follow-up workflows.

Use this guide when deciding:

- Which funding link/context to send
- When BankBreezy dashboard language is appropriate
- When Giggle routing should be recommended
- How to log link-sent status
- How to create follow-up tasks after sending a link
- How to avoid approval/funding guarantee language
- How to preserve routing context in HubSpot

The goal is to move applicants into the right review path without overpromising or losing context.

---

## 2. Core Routing Rule

BankBreezy and Giggle routing should be treated as **review paths**, not approval decisions.

Acceptable:

```text
Based on what you shared, this appears worth reviewing through the BankBreezy dashboard.
```

Not acceptable:

```text
You qualify for same-day funding.
```

Do not guarantee:

- Approval
- Specific funding amount
- Specific terms
- Same-day funding
- Next-day funding
- Underwriting outcome

---

## 3. Known BankBreezy Dashboard Link

Default BankBreezy dashboard link when provided/approved:

```text
https://bankbreezy.com/funding/jason
```

Use only when the applicant should be routed to Jason’s BankBreezy dashboard.

Do not invent alternate links.

If a different link is provided for a specific partner/broker/campaign, use that exact link and preserve it in the note.

---

## 4. BankBreezy Routing Signals

BankBreezy may be appropriate when:

- Applicant has a business bank account
- Applicant has established business revenue
- Applicant requested larger business funding
- Applicant wants same-day business funding review
- Applicant is delayed with another provider
- Applicant needs a faster alternative lane
- Applicant has enough business activity to justify review
- Applicant is looking for working capital, expansion, equipment, or business funding

Use BankBreezy language when the goal is to get the applicant into a business funding dashboard/review path.

---

## 5. Giggle Routing Signals

Giggle may be appropriate when:

- Applicant uses a personal bank account
- Applicant has $3k+ monthly revenue/activity
- Applicant has 4+ months activity
- Applicant is self-employed, gig worker, contractor, or sole operator
- Applicant is not a clean fit for business-bank-account funding
- Applicant needs smaller/fast funding review
- BankBreezy path appears less suitable because of banking setup

Use Giggle language when the applicant’s profile appears better suited for micro/same-day style review based on activity and account setup.

---

## 6. Parallel Lane Routing Signals

Use a parallel lane when:

- Applicant requested a larger amount
- Applicant is stuck with another provider
- BankBreezy could review larger opportunity
- Giggle could be useful as a fast first step
- Applicant may need staged funding
- Applicant has urgent timing but incomplete fit for one lane

Parallel lane note language:

```markdown
Applicant may benefit from a parallel funding review approach. Giggle-style review may be useful for fast/smaller funding based on bank/revenue profile, while BankBreezy/business funding may remain relevant for larger funding review. No approval, amount, terms, or timeline guaranteed.
```

---

## 7. Link-Sent Logging Rules

Whenever a BankBreezy or Giggle-related link is sent, log it.

Required note details:

- Link sent
- Date sent
- Who sent it
- Why it was sent
- Applicant lifecycle status
- Follow-up task created
- Compliance/no-guarantee note

Recommended note:

```markdown
## Funding Link Sent Note

Applicant: [Name]  
Link type: [BankBreezy dashboard / Giggle / Other]  
Link sent: [URL]  
Date sent: [Date]  
Sent by: [Jason / Moonshine Capital / Other]

Routing reason:
[Explain why this path was recommended.]

Next action:
[Follow-up task title and due timing.]

Compliance:
Link was sent for review/application purposes only. No approval, funding amount, terms, or timeline guaranteed.
```

---

## 8. BankBreezy Email Language

Use this for applicants who should start with the BankBreezy dashboard.

```text
Given what you’re looking for and the timing, I’d suggest starting with the BankBreezy dashboard to see what may be available. It gives you a faster way to get your information reviewed instead of waiting around on a slower process.

You can start here:

https://bankbreezy.com/funding/jason

No approval, amount, terms, or timeline is guaranteed, but this gets the review moving.
```

---

## 9. Giggle Email Language

Use this for applicants routed toward Giggle-style review.

```text
Based on what you shared, the next step is to complete the funding review path that fits your current banking/revenue setup. Be sure to complete the application accurately and connect the correct bank account if prompted.

Once finished, reply back so I can track the next step.
```

If a specific Giggle link is not provided, do not invent one.

---

## 10. Provider Delay Language

Use when applicant is stuck with another provider/platform.

```text
Since you’re already running into delays with your current application, I’d recommend opening a backup review lane now. That does not mean abandoning the other option. It just means we stop letting one slow process control the whole board.
```

Add:

```text
No approval or specific funding timeline is guaranteed.
```

---

## 11. Task Rules After Link Sent

Create task immediately after sending/recommending a link.

| Link/Event | Task |
|---|---|
| BankBreezy dashboard sent | `Follow up — [Name] — confirm BankBreezy quote started` |
| Giggle routing sent | `Follow up — [Name] — confirm Giggle application started` |
| Applicant says no email/link received | `Follow up — [Name] — confirm direct funding link worked` |
| Applicant starts application | `Check status — [Name] — confirm bank account linked` |
| No response after link | `48-hour follow-up — [Name] — no response after funding link` |
| Larger request with fast need | `Follow up — [Name] — review parallel business funding options` |

Default due timing:

- Next business day after link sent
- Same day if applicant is urgent and active
- 48 hours for no-response follow-up

---

## 12. HubSpot Deal Stage Guidance

If a deal exists:

| Routing Event | Suggested Stage |
|---|---|
| BankBreezy link sent | Contract Sent |
| Giggle link sent | Contract Sent |
| Applicant appears eligible but no link sent | Qualified To Buy |
| Applicant started application | Decision Maker Bought-In |
| Bank link pending | Contract Sent or Decision Maker Bought-In + note |
| Underwriting pending | Decision Maker Bought-In |
| Funded | Closed Won |
| Declined/withdrawn | Closed Lost |

Always preserve the exact routing status in a note because current deal stages are generic.

---

## 13. Required Routing Details to Preserve

Always preserve:

- Funding requested
- Funding purpose
- Bank account type
- Monthly revenue
- Lowest monthly revenue
- Time in business
- Link sent
- Whether BankBreezy dashboard was sent
- Whether Giggle was recommended
- Whether applicant was advanced to Giggle Finance
- Whether bank account was linked
- Whether application was started
- Next follow-up task
- No-guarantee compliance note

---

## 14. Routing Decision Table

| Applicant Profile | Likely Routing | CRM Action |
|---|---|---|
| Personal bank + $3k+ monthly revenue | Giggle-style review | Note + Giggle follow-up task |
| Business bank + strong revenue | BankBreezy/business funding | Note + BankBreezy link/task |
| Larger request + provider delay | BankBreezy backup lane | Email + note + task |
| Personal bank + larger request | Parallel lane | Note both paths carefully |
| Missing bank/revenue details | Needs more info | Task/email for missing info |
| No clear funding request | Contact/note only | Do not create deal unless intent clear |

---

## 15. What Not To Do

Do not:

- Send a link without logging it
- Send unapproved/invented links
- Guarantee same-day funding
- Say applicant qualifies
- Treat link sent as approval
- Forget the follow-up task
- Use BankBreezy and Giggle interchangeably without context
- Create company if no real entity exists
- Create duplicate deals for each link/follow-up
- Bury bank account type in email only

---

## 16. Operational Standard

Every BankBreezy/Giggle routed applicant should make clear:

- Why this path was recommended
- Which link was sent
- When it was sent
- What applicant needs to do next
- What Moonshine Capital must follow up on
- What is not guaranteed

Routing should create motion, not confusion.
