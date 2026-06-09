# 22 - Gmail to HubSpot Connector Workflow SOP

## Gmail → HubSpot Connector Workflow SOP  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This SOP defines how to process Gmail conversations into clean HubSpot CRM actions.

Use this document when handling:

- Funding applicant emails
- Applicant replies
- Partner applicant emails
- BankBreezy / Giggle follow-ups
- Missing document replies
- Provider delay screenshots
- No-response follow-ups
- Gmail drafts and replies
- Email thread summaries
- Gmail-triggered HubSpot notes/tasks/deals

The goal is to prevent important applicant or partner context from living only in Gmail.

Gmail is where the smoke signal appears. HubSpot is where the operation remembers what the smoke meant.

---

## 2. Core Rule

Read the relevant Gmail context before drafting or logging.

Then search HubSpot before creating/updating CRM records.

Default workflow:

```markdown
1. Read Gmail email/thread.
2. Extract sender, recipient, subject, date, body summary, attachments/screenshots.
3. Classify the email.
4. Search HubSpot by sender email.
5. Search HubSpot by phone/name if needed.
6. Search existing deals/tasks/notes.
7. Draft reply if requested.
8. Recommend HubSpot note/task/deal updates.
9. Get approval before HubSpot writes or sending email.
```

---

## 3. Email Classification

Classify each email as one of:

```text
Funding applicant inquiry
Funding applicant reply
BankBreezy follow-up
Giggle follow-up
Bank-link issue
Missing docs
Provider delay / third-party issue
No-response follow-up
Partner applicant
Broker profile update
Course/group/member support
General inquiry
Unknown / needs review
```

Classification determines CRM handling.

Do not create a funding deal from a partner email unless a real funding request exists.

---

## 4. Gmail Extraction Checklist

Extract:

```markdown
- Sender name
- Sender email
- Recipient(s)
- Subject
- Date
- Thread context
- Applicant name if different from sender
- Business/entity name if provided
- Phone number
- Funding requested
- Purpose
- Revenue details
- Lowest monthly revenue
- Bank account type
- Time in business
- Provider/application issue
- Screenshot/attachment context
- Requested next action
```

---

## 5. HubSpot Search Rules

Search HubSpot in this order:

1. Contact by sender email
2. Contact by applicant email if different
3. Contact by phone
4. Contact by full name
5. Company by business name/domain
6. Deals associated with contact/company
7. Open tasks tied to contact/deal
8. Recent notes if context matters

Do not create a contact from Gmail until duplicate risk is checked.

---

## 6. Gmail Draft Rules

Draft unless the user explicitly says send.

| User Says | Action |
|---|---|
| “Draft a reply” | Draft only |
| “Write a response” | Draft only |
| “Prepare email” | Draft only |
| “Create Gmail draft” | Create draft |
| “Send it” | Send only if recipient/body are clear |
| “Reply to this thread” | Read thread first; draft/send per instruction |

---

## 7. HubSpot Logging Rules

Log a HubSpot note when Gmail contains meaningful CRM context.

Log if email includes:

- New funding details
- Updated amount/purpose/revenue
- Bank-link status
- Missing docs
- Application started/completed
- BankBreezy/Giggle link issue
- Provider delay
- Screenshot context
- Applicant decision
- Partner profile details
- Onboarding next step

Do not log every “thanks” or duplicate one-liner.

---

## 8. Email Thread Summary Note Template

```markdown
## Gmail Thread Summary Note

Thread subject: [Subject]  
Participants: [Names / Emails]  
Date range: [Start date] → [End date]  
Email type: [Funding / Partner / BankBreezy / Giggle / Missing docs / Other]

Summary:
- [Key point 1]
- [Key point 2]
- [Key point 3]

CRM-relevant details:
- Applicant: [Name]
- Business: [Business or “Not provided”]
- Funding requested: [Value]
- Purpose: [Value]
- Bank account type: [Personal / Business / Unknown]
- Revenue: [Value]
- Lowest monthly revenue: [Value]
- Application/provider issue: [Value]
- Bank-link status: [Linked / Pending / Unknown]

Action taken:
[Drafted reply / Sent reply / Recommended link / Requested docs / etc.]

Next action:
[Task/follow-up/deal update needed.]

Compliance:
No approval, amount, terms, or timeline guaranteed.
```

---

## 9. Gmail → HubSpot Task Triggers

| Gmail Signal | HubSpot Task |
|---|---|
| Applicant asks for call | `Call — [Name] — funding request follow-up` |
| Funding link sent | `Follow up — [Name] — confirm application started` |
| BankBreezy link sent | `Follow up — [Name] — confirm BankBreezy quote started` |
| Giggle routed | `Follow up — [Name] — confirm Giggle application started` |
| Bank not linked | `Check status — [Name] — confirm bank account linked` |
| Missing docs | `Request docs — [Name] — [missing item]` |
| No reply after link | `48-hour follow-up — [Name] — no response after funding link` |
| Provider delay | `Follow up — [Name] — review alternative funding lane` |
| Partner profile info sent | `Update broker profile — [Name] — review submitted details` |

---

## 10. Gmail + HubSpot Proposed Action Format

```markdown
## Proposed Gmail → HubSpot Actions

| Step | System | Action | Details | Reason |
|---:|---|---|---|---|
| 1 | Gmail | Draft reply | [Subject/recipient] | Applicant response |
| 2 | HubSpot | Search contact | [Email] | Avoid duplicates |
| 3 | HubSpot | Add note | [Summary] | Preserve email context |
| 4 | HubSpot | Create task | [Title/due] | Follow-up needed |
| 5 | HubSpot | Update/create deal | [If applicable] | Track funding opportunity |

Approve? [✅ Yes / ❌ No]
```

---

## 11. Provider Delay Handling

If applicant reports being delayed by another provider/platform:

- Acknowledge delay.
- Do not claim access to third-party application.
- Recommend alternate review lane if appropriate.
- Log provider issue in HubSpot.
- Create follow-up task.

Note language:

```markdown
Applicant reported delay/problem with [provider]. Moonshine Capital does not have access to that third-party application/account. Recommended opening alternate review lane via [link/path] to see what may be available. No approval or timeline guaranteed.
```

---

## 12. Screenshot / Attachment Handling

When an email includes screenshot/attachment:

1. Summarize what is visible.
2. Do not over-interpret.
3. Preserve operational relevance.
4. Avoid storing sensitive details unnecessarily.
5. Create task if action required.

Screenshot note:

```markdown
## Gmail Screenshot Context

Applicant sent screenshot related to [provider/application]. It appears to show [brief description]. Operational relevance: [why it matters]. Next action: [task/follow-up].
```

---

## 13. What Not To Do

Do not:

- Send email without explicit send instruction
- Create HubSpot record without search
- Paste full sensitive email threads into HubSpot notes
- Treat Gmail sender as applicant if email is forwarded without checking
- Create company from email signature alone
- Create deal from vague inquiry
- Ignore attachments/screenshots that affect applicant status
- Forget follow-up task after sending funding link
- Guarantee outcomes in email or notes

---

## 14. Operational Standard

Every Gmail-to-HubSpot workflow should leave behind:

- A clean applicant/partner summary
- Correct HubSpot association
- Next action task when needed
- Draft or sent email status
- No-guarantee language when funding-related

The inbox should create motion, not memory loss.
