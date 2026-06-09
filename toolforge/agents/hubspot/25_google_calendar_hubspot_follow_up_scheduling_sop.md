# 25 - Google Calendar and HubSpot Follow-Up Scheduling SOP

## Google Calendar + HubSpot Follow-Up Scheduling SOP  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This SOP defines how to coordinate Google Calendar events with HubSpot CRM tasks, notes, and applicant/partner follow-up.

Use this document when scheduling or tracking:

- Funding applicant calls
- Partner onboarding calls
- Broker profile review calls
- Funding strategy sessions
- Follow-up reminders
- Post-call CRM notes
- No-show follow-ups
- Calendar-to-HubSpot updates

The goal is to separate scheduled time from CRM action tracking.

Google Calendar tells you when the meeting happens.

HubSpot tells you why it matters and what happens next.

---

## 2. Calendar vs HubSpot Task Rule

| Need | Use |
|---|---|
| Scheduled call/meeting at a specific time | Google Calendar |
| To-do/follow-up action | HubSpot Task |
| Call summary/context | HubSpot Note |
| Applicant/deal status | HubSpot Deal/Note |
| Meeting invite/attendees | Google Calendar |
| Next action after meeting | HubSpot Task |

Do not use calendar events as CRM notes.

Do not use HubSpot tasks as actual calendar appointments unless no calendar event is needed.

---

## 3. Scheduling Workflow

```markdown
1. Identify meeting purpose.
2. Search HubSpot contact/deal/partner.
3. Confirm attendee email(s).
4. Check calendar availability if needed.
5. Create calendar event only after approval.
6. Add/update HubSpot note with scheduled call context.
7. Create HubSpot task for prep or post-call follow-up if needed.
```

---

## 4. Meeting Types

| Meeting Type | Calendar Event? | HubSpot Task? | HubSpot Note? |
|---|---:|---:|---:|
| Funding applicant call | Yes | Yes, if prep/follow-up needed | Yes |
| Partner onboarding call | Yes | Yes | Yes |
| Broker profile review | Yes | Yes | Yes |
| Bank-link reminder | Usually no | Yes | Maybe |
| Missing docs reminder | Usually no | Yes | Maybe |
| Internal CRM review | Maybe | Maybe | Optional |
| Weekly reporting review | Optional recurring event | Task/report note | Yes if action items |

---

## 5. Calendar Event Creation Rules

Create calendar event only when:

- Date/time is known
- Attendee email is known
- User has asked to schedule/create event
- Purpose is clear
- Timezone is known or defaults to US/Eastern

Default timezone:

```text
US/Eastern
```

Include:

- Clear title
- Start/end time
- Attendees
- Description
- Location or Google Meet if needed
- Related HubSpot context in description if appropriate

---

## 6. Calendar Event Title Conventions

Use clear titles.

Examples:

```text
Funding Review Call — Anthony Sanders
Partner Onboarding Call — Darwin Hanneman
Broker Profile Review — Maria Lopez
Moonshine Capital Weekly CRM Review
```

Avoid:

```text
Call
Meeting
Follow up
Funding
Jason / Client
```

---

## 7. HubSpot Note for Scheduled Call

```markdown
## Scheduled Call Note

Call type: [Funding review / Partner onboarding / Broker profile / Other]  
Scheduled date/time: [Date/time + timezone]  
Calendar attendees: [Names/emails]  
Related deal/company: [If applicable]

Purpose:
[Why this call is scheduled.]

Preparation notes:
[What should be reviewed before call.]

Next action:
[Pre-call task or post-call follow-up.]
```

---

## 8. Post-Call HubSpot Note Template

```markdown
## Call Summary Note

Call date/time: [Date/time]  
Call type: [Funding / Partner / Broker profile / Other]  
Participants: [Names]

Summary:
- [Key point 1]
- [Key point 2]
- [Key point 3]

Decisions / outcomes:
- [Outcome]

Next actions:
- [Task/action]
- [Owner]
- [Due date]

Applicant/partner status:
[Status update if applicable.]
```

---

## 9. No-Show Workflow

If applicant/partner misses scheduled call:

1. Add no-show note.
2. Draft no-show follow-up email if needed.
3. Create reschedule task.
4. Do not mark deal lost immediately unless pattern/history supports it.

No-show note:

```markdown
## No-Show Call Note

Scheduled call: [Date/time]  
Participant: [Name]  
Status: No-show / did not attend  
Next action: Send reschedule follow-up and create follow-up task.
```

Task:

```text
Follow up — [Name] — reschedule missed call
```

---

## 10. Post-Meeting Task Triggers

| Outcome | Task |
|---|---|
| Applicant needs to complete application | `Follow up — [Name] — confirm application completed` |
| Applicant needs bank link | `Check status — [Name] — confirm bank account linked` |
| Applicant needs docs | `Request docs — [Name] — missing items` |
| Partner needs resources | `Send partner resources — [Name] — onboarding follow-up` |
| Broker profile needs update | `Update broker profile — [Name] — post-call changes` |
| Follow-up call needed | Calendar event + HubSpot task |

---

## 11. What Not To Do

Do not:

- Create calendar events without approval
- Schedule without attendee email/time
- Put sensitive financial details in calendar descriptions
- Treat calendar event as complete CRM documentation
- Forget post-call HubSpot note
- Forget task after call if action is needed
- Use calendar event for basic to-do reminders that belong in HubSpot

---

## 12. Operational Standard

Every scheduled meeting should have:

- Calendar event for time/place
- HubSpot note for CRM context
- HubSpot task for next action, if needed

Meetings that do not create next actions are just expensive conversations with notifications.
