# 11 - Gmail + HubSpot Logging SOP

## Gmail + HubSpot Logging SOP  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This SOP defines how to connect Gmail applicant communication with HubSpot CRM records for Moonshine Capital.

Use this document when handling:

- Funding applicant emails
- Partner applicant emails
- Giggle / BankBreezy follow-up emails
- Bank-link reminders
- Missing document requests
- Provider delay updates
- Applicant screenshots
- Gmail drafts
- Sent email summaries
- Email-thread-to-CRM logging
- Follow-up tasks triggered by email context

The goal is simple:

**Gmail is where the conversation happens. HubSpot is where the operational memory lives.**

If a meaningful applicant or partner conversation happens in Gmail, HubSpot should preserve the useful CRM context so the business can follow up cleanly later.

---

## 2. Core Rule

Do not let important applicant context live only in Gmail.

If an email affects:

- Applicant status
- Funding routing
- Next step
- Deal status
- Missing documents
- Bank-link status
- Provider/application delay
- Call request
- Follow-up timing
- Partner onboarding
- Profile/resource context

Then it should usually be summarized in HubSpot as a note and/or converted into a task.

Gmail is the inbox.

HubSpot is the cockpit.

Do not fly the plane from the glovebox.

---

## 3. Draft vs. Send Rule

When the user asks ChatGPT to:

- write an email
- draft an email
- prepare a response
- create a Gmail reply
- generate follow-up copy

Create a Gmail draft or draft text.

Do not send unless the user explicitly says to send.

Safe actions:

| User Request | Action |
|---|---|
| “Draft a reply” | Create draft text or Gmail draft |
| “Write an email” | Draft only unless send is explicit |
| “Prepare a response” | Draft only |
| “Send this email” | Send only after message is clear and recipient is known |
| “Create a draft in Gmail” | Create Gmail draft |
| “Reply to this thread” | Read thread first, then draft/send based on user instruction |

---

## 4. Search-First Rule Before HubSpot Logging

Before logging email context into HubSpot:

1. Search contact by email.
2. Search contact by phone if available.
3. Search contact by name if needed.
4. Search associated deals.
5. Search associated company only if real business/entity exists.
6. Review existing notes/tasks when relevant.

Do not create a new contact just because an email exists if the contact may already be in HubSpot.

---

## 5. When to Log a Gmail Email in HubSpot

Log a HubSpot note when an email contains meaningful CRM context.

### 5.1 Log Email Context When

Log a note if the email includes:

- New funding request
- Updated requested amount
- Funding purpose
- Bank account type
- Revenue details
- Lowest monthly revenue
- Time in business
- Credit score
- Call request
- Applicant stuck with another provider
- Wayflyer / BankBreezy / Giggle issue
- Screenshot explanation
- Missing documents
- Bank-link status
- Application started/completed
- Applicant no longer interested
- Applicant chose another provider
- Applicant needs follow-up
- Partner profile details
- Partner resource requests

### 5.2 Do Not Log Every Email

Do not create CRM noise for:

- “Thanks”
- “Okay”
- Duplicate replies with no new info
- Pure scheduling chatter already captured by task/calendar
- Casual comments unrelated to applicant/deal status
- Emails where no CRM-relevant action or context exists

If the email does not change what we know or what we need to do, it probably does not need a note.

---

## 6. Email Logging Decision Table

| Email Content | HubSpot Action |
|---|---|
| Applicant submits funding details | Add note; create/update contact/deal if needed |
| Applicant asks for call | Add note; create call/follow-up task |
| Applicant receives BankBreezy link | Add note; create next-day follow-up task |
| Applicant says link/email missing | Add note; draft/send direct link reply; create follow-up task |
| Applicant says bank not linked | Add note; create bank-link check task |
| Applicant provides screenshot | Add note summarizing screenshot context |
| Applicant delayed with another provider | Add note; consider alternative lane email/task |
| Applicant sends missing docs | Add note; update task/deal status if applicable |
| Applicant does not respond | Create 48-hour/final follow-up task |
| Partner sends profile info | Add partner profile note; update contact/company if clean |
| Partner requests resources | Add note; create resource follow-up task if needed |
| Email contains no new info | No HubSpot note needed |

---

## 7. Recommended HubSpot Email Note Format

Use this format when summarizing a meaningful Gmail email.

```markdown
## Gmail Email Summary Note

Email date: [Date]  
Sender: [Name / Email]  
Recipient: [Name / Email]  
Subject: [Subject line]  
Email type: [Funding applicant / Giggle follow-up / BankBreezy / Missing docs / Partner / Other]

Summary:
[Briefly summarize the email in plain language.]

CRM-relevant details:
- Requested funding amount: [Value or “Not provided”]
- Funding purpose: [Value or “Not provided”]
- Bank account type: [Personal / Business / Unknown]
- Monthly revenue: [Value or “Not provided”]
- Lowest monthly revenue: [Value or “Not provided”]
- Application/provider status: [Value]
- Bank link status: [Linked / Not linked / Unknown]
- Missing docs: [List or “None”]

Action taken:
[Drafted reply / Sent reply / Added note / Created task / Updated deal / No action]

Next action:
[Follow-up task or recommended next step.]

Compliance note:
No approval, funding amount, terms, or funding timeline guaranteed.
```

Keep notes concise. Do not paste entire email threads unless absolutely necessary.

---

## 8. Email Thread Summary Format

Use this when multiple emails need to be summarized into one CRM note.

```markdown
## Gmail Thread Summary Note

Thread subject: [Subject]  
Participants: [Names / Emails]  
Date range: [Start date] → [End date]

Summary:
[Summarize the thread in 3–7 bullets.]

Key applicant details:
- Applicant: [Name]
- Business: [Business or “Not provided”]
- Funding requested: [Value]
- Funding purpose: [Value]
- Provider/application issue: [Value]
- Bank account type: [Value]
- Revenue details: [Value]
- Current status: [Value]

Important timeline:
1. [Date] — [Event]
2. [Date] — [Event]
3. [Date] — [Event]

Action taken:
[What Jason/Moonshine sent or recommended.]

Next action:
[Task/follow-up/deal update needed.]
```

Use this for threads where the operational story matters.

---

## 9. Gmail Draft + HubSpot Note Workflow

When drafting an applicant email that should be logged:

1. Read/understand the email context.
2. Search HubSpot for the contact.
3. Search associated deal if funding-related.
4. Draft the email.
5. Recommend the HubSpot note.
6. Recommend follow-up task if needed.
7. Ask whether to create draft/log note/task, unless user has already instructed.

Recommended response format:

```markdown
## Draft Email

Subject: [Subject]

[Email body]

## Recommended HubSpot Logging

| Object | Action | Reason |
|---|---|---|
| Contact | Add note | Preserve email context |
| Deal | Add note if active funding opportunity exists | Preserve funding status |
| Task | Create follow-up task | Next action required |

Approve? [✅ Yes / ❌ No]
```

If user only asked for email copy, do not force HubSpot updates. Recommend them briefly.

---

## 10. Gmail Draft Tone Rules

Match the email sending context.

| Context | Tone |
|---|---|
| Wix/site-side acknowledgment | Operational, brand-safe, neutral |
| Personal Gmail follow-up | Direct, human, Jason-style when requested |
| Giggle / BankBreezy next step | Action-oriented, clear, no guarantees |
| Missing docs | Firm, concise, practical |
| No-response follow-up | Short, respectful urgency |
| Partner email | Collaborative, useful, confident |
| Compliance-sensitive update | Factual, careful, no hype |

Do not mix system tone with personal tone.

A Wix acknowledgment should not sound like a late-night Jason voice memo with a funding link taped to it.

---

## 11. Funding Applicant Email Logging Rules

For funding applicants, preserve:

- Original requested amount
- Mapped funding range if used
- Funding purpose
- Applicant urgency
- Bank account type
- Revenue / lowest monthly revenue
- Time in business
- Credit score band
- Whether call was requested
- Whether link was sent
- Whether application started
- Whether bank linked
- Missing docs
- Provider delays
- Next follow-up

Use structured HubSpot fields only when verified.

Use notes for nuance.

---

## 12. Giggle / BankBreezy Email Logging Rules

For Giggle / BankBreezy-related emails, always preserve:

- Whether BankBreezy dashboard link was sent
- Whether Giggle was recommended
- Whether applicant was advanced to Giggle Finance
- Bank account type
- Lowest monthly revenue
- Bank-link status
- Application/quote status
- Any provider delay
- Follow-up task created or needed

Recommended note:

```markdown
## Giggle / BankBreezy Gmail Follow-Up Note

Email context:
[Applicant emailed about funding / link issue / provider delay / screenshot / no response.]

Routing status:
- BankBreezy link sent: [Yes / No / Unknown]
- Giggle recommended: [Yes / No / Unknown]
- Advanced to Giggle Finance: [Yes / No / Unknown]
- Bank account type: [Personal / Business / Unknown]
- Bank linked: [Yes / No / Unknown]
- Lowest monthly revenue: [Value or Unknown]

Action taken:
[Drafted/sent reply with link, requested bank-link completion, asked for docs, etc.]

Next action:
[Create/check task.]
```

---

## 13. Missing Documents Email Workflow

When an applicant email indicates missing documents:

1. Search HubSpot contact.
2. Search active funding deal.
3. Add note listing missing items.
4. Draft missing docs email.
5. Create missing docs follow-up task.
6. Associate note/task to contact + deal.

Task title:

```text
Request docs — [Applicant Name] — [specific missing item]
```

Email note summary:

```markdown
Applicant needs to provide [missing items] before funding review can continue. Missing docs email drafted/sent. Follow-up task created.
```

---

## 14. No-Response Email Workflow

When applicant has not replied:

1. Check prior email/note/task history.
2. Determine whether this is first follow-up, 48-hour follow-up, or final check-in.
3. Draft the appropriate email.
4. Add note only if it matters operationally.
5. Create or update follow-up task.

Recommended cadence:

| Status | Action |
|---|---|
| Link sent yesterday | Next-day follow-up |
| No response after 48 hours | 48-hour follow-up |
| No response after multiple attempts | Final check-in |
| No response after final check-in | Consider close/nurture note |

Do not spam applicants endlessly. At some point, stop chasing ghosts and update the CRM.

---

## 15. Provider Delay Email Workflow

Use this when applicant is delayed or stuck with another provider/platform.

Examples:

- Wayflyer delay
- Bank application issue
- Dashboard problem
- Unknown underwriting delay
- Third-party account not associated with Moonshine Capital

Workflow:

1. Search applicant in HubSpot.
2. Add note summarizing provider delay.
3. Draft a direct but compliant alternative-lane email.
4. Include correct link if provided.
5. Create follow-up task to confirm applicant started alternative path.
6. Do not claim access to third-party accounts Moonshine Capital does not control.

Recommended note:

```markdown
Applicant reported delay/problem with [provider/platform]. Moonshine Capital does not have access to that third-party application/account. Recommended opening an alternative review lane via [BankBreezy/Giggle/other] to see what may be available. No approval or funding timeline guaranteed.
```

---

## 16. Screenshot Email Handling

If applicant sends a screenshot:

1. Summarize what the screenshot shows.
2. Do not over-interpret unclear details.
3. Preserve important context in note.
4. Mention if Moonshine Capital lacks access to that external account.
5. Create follow-up task if action is required.

Screenshot note format:

```markdown
## Applicant Screenshot Context

Applicant sent screenshot related to: [Provider/application/dashboard]

What screenshot appears to show:
[Plain-language description.]

Operational relevance:
[Why it matters.]

Access limitation:
Moonshine Capital does not have access to applicant’s third-party account/application unless separately authorized.

Next action:
[Recommended follow-up.]
```

Do not claim the screenshot proves something it does not clearly show.

---

## 17. Partner Email Logging Rules

For partner applicants or funding partners, log email context when it affects:

- Partner onboarding
- Broker profile page
- Partner resource requests
- Referral process
- Public profile details
- Commission/referral expectations
- Target audience/use cases
- Tools/resources requested
- Next onboarding task

Recommended partner note:

```markdown
## Partner Email Summary Note

Partner: [Name]  
Email: [Email]  
Business/Agency: [Name or “Not provided”]  
Email subject: [Subject]

Summary:
[What partner shared or requested.]

Profile/resource details:
- Website: [Value]
- Social links: [Value]
- Booking link: [Value]
- Target client type: [Value]
- Requested resources/tools: [Value]

Next action:
[Follow-up / update profile / add resources / schedule call.]
```

---

## 18. Gmail + HubSpot Task Triggers

Create a HubSpot task when an email creates a next action.

| Email Signal | Task Title |
|---|---|
| Applicant asked for call | `Call — [Applicant Name] — funding request follow-up` |
| Funding link sent | `Follow up — [Applicant Name] — confirm application started` |
| Bank link pending | `Check status — [Applicant Name] — confirm bank account linked` |
| Missing docs | `Request docs — [Applicant Name] — [missing item]` |
| No response | `48-hour follow-up — [Applicant Name] — no response after funding link` |
| Provider delay | `Follow up — [Applicant Name] — review alternative funding lane` |
| Underwriting pending | `Underwriting follow-up — [Applicant Name] — check funding review status` |
| Partner sent profile info | `Update partner profile — [Partner Name] — review submitted details` |

Associate tasks to:

- Contact always
- Deal if active funding opportunity exists
- Company only if valid company exists

---

## 19. HubSpot Email Activity vs. Note

If the connector supports logged email activity and the user asks to log the actual email, use email activity when appropriate.

Use a note when:

- Summarizing a Gmail thread
- Preserving routing context
- Capturing applicant-provided details
- Explaining why a CRM action was taken
- Email activity logging is unnecessary or unavailable

Use email activity when:

- Logging a specific one-to-one email communication matters
- The actual email communication should appear as an engagement
- The user explicitly asks to log the email

Default for operational clarity:

> Use notes for summaries and routing context. Use email activities for specific communication logs when explicitly needed.

---

## 20. Proposed Gmail + HubSpot Action Format

Use this format when email work should trigger CRM updates.

```markdown
## Proposed Gmail + HubSpot Actions

| Step | System | Action | Details | Reason |
|---:|---|---|---|---|
| 1 | Gmail | Draft email | [Subject / recipient] | Applicant follow-up |
| 2 | HubSpot | Search contact | [Email / phone] | Avoid duplicates |
| 3 | HubSpot | Add note | [Summary] | Preserve email context |
| 4 | HubSpot | Create task | [Title / due date] | Follow-up needed |
| 5 | HubSpot | Update deal | [Stage/status if needed] | Applicant status changed |

Approve? [✅ Yes / ❌ No]  
Want to skip confirmations for this chat? Just ask.
```

---

## 21. After-Action Summary Format

After creating a draft/logging notes/tasks, respond with:

```markdown
## Completed

| System | Result |
|---|---|
| Gmail | Draft created / Email sent / Draft text prepared |
| HubSpot Contact | Note added / Updated / No change |
| HubSpot Deal | Note added / Updated / No change |
| HubSpot Task | Created / Updated / Skipped |

## Links

- Gmail draft/thread: [Link if available]
- HubSpot contact: [Link]
- HubSpot deal: [Link]
- HubSpot task: [Link if available]

## Next Step

[Recommended next action.]
```

Do not claim something was logged or sent if it was only drafted.

---

## 22. What Not To Do

Do not:

- Send an email when user only asked for a draft
- Log every tiny email as a note
- Leave important applicant context only in Gmail
- Create HubSpot contact before searching
- Create company from email signature alone
- Create deal from vague email without funding intent
- Overwrite CRM fields based on ambiguous email content
- Ignore screenshots or attachments that affect applicant status
- Claim Moonshine Capital controls third-party provider accounts
- Guarantee approval, funding amount, terms, or timeline
- Create follow-up tasks without due dates or associations
- Paste full private email threads into notes when a summary is better

---

## 23. Operational Standard

Every important Gmail conversation should answer this in HubSpot:

- Who contacted us?
- What changed?
- What do they need?
- What did we send?
- What is the next action?
- Who or what record does it belong to?
- Is there an active funding opportunity?
- Is there a task to prevent the applicant from falling into the abyss?

Emails are conversations.

HubSpot is the memory.

If the conversation matters, leave a clean trail.
