# 15 - HubSpot Owner Assignment and Handoff Rules

## HubSpot Owner Assignment and Handoff Rules  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This document defines how to assign HubSpot records, tasks, and follow-up ownership for Moonshine Capital CRM operations.

Use this guide when deciding:

- Who should own a contact
- Who should own a company
- Who should own a deal
- Who should own a task
- When to assign records to Jason
- When to assign records to Moonshine Capital
- When to assign records to another active owner
- When not to change owner
- How to handle handoffs
- How to avoid overwriting ownership accidentally

Owner assignment matters because HubSpot tasks and records are only useful when the right person is responsible for the next action.

A CRM with no owner is just a haunted spreadsheet wearing a sales hat.

---

## 2. Verified HubSpot Owner Context

The following HubSpot owner records were visible when this document was created.

| Owner Name | Owner ID | Active? | Notes |
|---|---:|---:|---|
| Jason Feimster | `41487226` | No | Inactive duplicate/old owner record |
| CAPITOL Accelerator | `41489431` | No | Inactive |
| Jason Feimster | `41491296` | Yes | Active owner; tied to current user context |
| Veronica Rose | `92049433` | No | Inactive |
| William Tewelow | `488641689` | Yes | Active owner |
| Zara Amrani | `497356034` | Yes | Active owner |
| Jason Feimster | `570134282` | Yes | Active owner; verify use before assignment |
| Moonshine Capital | `570141013` | Yes | Active owner / brand or shared owner context |

Important:

- There is more than one active Jason Feimster owner ID.
- Do not assume which Jason owner ID should be used without checking context.
- The active owner tied to current connector user context is `41491296`.
- Use `search_owners` if ownership assignment is unclear.

---

## 3. Core Owner Assignment Rule

Before assigning or changing owner:

1. Search the record.
2. Review current owner.
3. Determine whether ownership should change.
4. Verify the intended owner ID.
5. Propose the owner change in a table.
6. Get approval before writing.

Do not change ownership just because a new task is being created.

Do not overwrite current owner unless there is a clear operational reason.

---

## 4. Default Ownership Logic

### 4.1 Default Owner for Most CRM Ops

Use Jason Feimster as default owner when:

- Jason is personally handling the applicant
- Applicant came through Jason’s link
- Applicant requires personal follow-up
- Applicant needs Gmail reply from Jason
- Funding request is high-touch
- Partner/broker relationship is Jason-led
- No other owner is clearly assigned

Default active Jason owner to consider:

```text
Jason Feimster — ownerId 41491296
```

Verify before writing if there is ambiguity.

---

### 4.2 Moonshine Capital as Owner

Use Moonshine Capital as owner when:

- Record belongs to general brand/inbound workflow
- No individual owner is assigned yet
- Site-side/system-side follow-up is needed
- Record should stay in general operations queue
- Applicant is early-stage and not yet personally handled by Jason
- Workflow is automated or pending triage

Owner:

```text
Moonshine Capital — ownerId 570141013
```

Use this as a queue-style owner only if Jason wants brand-level ownership.

---

### 4.3 William Tewelow / Zara Amrani

Use William or Zara only when:

- User explicitly says to assign to them
- Existing record ownership or notes indicate they own the relationship
- Task is clearly theirs
- A handoff has been approved
- Project/team context supports the assignment

Known active owner IDs:

```text
William Tewelow — ownerId 488641689
Zara Amrani — ownerId 497356034
```

Do not assign applicants to them by guesswork.

---

## 5. Object-Level Owner Rules

### 5.1 Contact Owner

Assign or update contact owner when:

- A specific person is responsible for follow-up
- Applicant was personally routed to Jason/team member
- Partner relationship is assigned
- Record is currently unassigned and should be owned
- User approves owner update

Do not change contact owner when:

- Existing owner appears intentional
- Contact belongs to another operator
- Ownership context is unclear
- Only a note/task is being added

Recommended default:

| Situation | Suggested Owner |
|---|---|
| Jason personal applicant | Jason Feimster |
| General website funding lead | Moonshine Capital or Jason, depending workflow |
| Partner applicant Jason is recruiting | Jason Feimster |
| General partner application queue | Moonshine Capital |
| Known William-led relationship | William Tewelow |
| Known Zara-led relationship | Zara Amrani |

---

### 5.2 Company Owner

Company owner should usually match the main relationship owner.

Assign/update company owner when:

- Company is real and valid
- Company is tied to an applicant/partner relationship
- Company is unassigned
- Ownership is needed for follow-up/reporting
- User approves change

Do not assign company owner if:

- Company is speculative
- Company should not have been created
- Company relationship is unclear
- Only contact-level business text exists

If company is questionable, review under duplicate/company cleanup SOP before assigning.

---

### 5.3 Deal Owner

Deal owner matters for funding opportunity tracking.

Assign/update deal owner when:

- A real funding opportunity exists
- The owner is responsible for moving the funding file
- Applicant follow-up belongs to a specific person
- Deal is unassigned or wrongly assigned
- User approves change

Default deal owner:

| Deal Type | Suggested Owner |
|---|---|
| Jason-sourced funding applicant | Jason Feimster |
| BankBreezy/Giggle applicant from Jason link | Jason Feimster |
| General inbound funding lead | Moonshine Capital or Jason |
| Partner-referred client | Usually Jason unless partner/team owner is defined |
| Team member-led opportunity | Assigned team member |

Do not create a deal owner change without checking existing deal owner and notes.

---

### 5.4 Task Owner

Task owner should be the person expected to complete the action.

Assign task owner based on action type.

| Task Type | Suggested Owner |
|---|---|
| Personal Gmail follow-up | Jason Feimster |
| Funding applicant call | Jason Feimster unless delegated |
| Bank-link check | Jason or assigned ops owner |
| Missing docs follow-up | Jason or assigned ops owner |
| Partner onboarding call | Jason unless delegated |
| Broker profile update | Owner responsible for profile/project work |
| General queue follow-up | Moonshine Capital |

If task owner is not specified, default to the current record owner when known.

If no record owner is known, default to Jason or Moonshine Capital depending workflow.

---

## 6. Handoff Rules

A handoff occurs when responsibility moves from one owner to another.

Use handoff notes when:

- Contact owner changes
- Deal owner changes
- Task is reassigned
- Partner relationship is transferred
- Funding applicant is delegated
- Follow-up responsibility moves from general queue to individual owner

### Handoff Note Format

```markdown
## Ownership Handoff Note

Record: [Contact / Company / Deal / Task]  
Previous owner: [Name / ID / Unknown]  
New owner: [Name / ID]  
Handoff reason: [Why ownership is changing]  
Effective date: [Date]  
Next action: [What new owner should do]

Context:
[Brief summary of applicant/partner status and relevant CRM history.]
```

Do not silently change owner on important records.

Silent handoffs are how follow-up dies in a ditch.

---

## 7. Owner Assignment Proposal Format

Before changing owner, use this table.

```markdown
## Proposed Owner Assignment / Handoff

| Object | Record | Current Owner | Proposed Owner | Owner ID | Reason |
|---|---|---|---|---:|---|
| Contact | [Name / ID] | [Current] | [Proposed] | [ID] | [Reason] |
| Company | [Name / ID] | [Current] | [Proposed] | [ID] | [Reason] |
| Deal | [Deal / ID] | [Current] | [Proposed] | [ID] | [Reason] |
| Task | [Task / ID] | [Current] | [Proposed] | [ID] | [Reason] |

Approve? [✅ Yes / ❌ No]  
Want to skip confirmations for this chat? Just ask.
```

If current owner is unknown, say so.

Do not invent a current owner.

---

## 8. Owner Assignment With New Records

When creating new records, recommend owner assignment only if useful.

### Contact Creation

Include owner when:

- User has specified an owner
- Source clearly belongs to Jason or Moonshine Capital
- Workflow requires assigned follow-up

If uncertain, create without owner or propose assignment rather than guessing.

### Deal Creation

Deal owner should usually be assigned if the opportunity is active.

Recommended default for current workflows:

```text
Jason Feimster — ownerId 41491296
```

But verify if user has another preference.

### Task Creation

Task owner should almost always be assigned or tied to the responsible user.

Default:

- Jason for personal/funding follow-ups
- Moonshine Capital for general queue tasks
- Specific active owner when user names them

---

## 9. Multiple Jason Owner IDs Rule

Because HubSpot has multiple active Jason Feimster owner IDs, use caution.

Known active Jason IDs:

```text
41491296
570134282
```

Default to `41491296` when the owner should match the current connector user context.

Use `570134282` only when:

- Existing records use it consistently
- User specifically identifies that owner
- HubSpot data indicates it is the intended owner for that workflow

If uncertain, ask or propose:

```markdown
There are two active Jason Feimster owner IDs. I recommend using `41491296` because it matches the current connector user context, unless you want me to use `570134282`.
```

---

## 10. Owner Fields and Verification

Likely owner property:

```text
hubspot_owner_id
```

Before writing owner changes, verify the property exists for the target object when necessary.

Use owner IDs exactly.

Do not use owner names as property values.

Example:

```json
{
  "hubspot_owner_id": "41491296"
}
```

---

## 11. Assignment Rules by Workflow

### 11.1 Funding Applicant

| Scenario | Owner Recommendation |
|---|---|
| Jason personally responding | Jason Feimster |
| Applicant came from Jason BankBreezy link | Jason Feimster |
| Applicant from general website form | Moonshine Capital or Jason |
| Applicant needs immediate human follow-up | Jason Feimster |
| Applicant is unqualified/nurture | Keep current owner or Moonshine Capital |

### 11.2 Giggle / BankBreezy Applicant

| Scenario | Owner Recommendation |
|---|---|
| Applicant routed from Jason workflow | Jason Feimster |
| Bank-link follow-up needed | Jason or assigned ops owner |
| No response sequence | Same as deal/contact owner |
| General queue before triage | Moonshine Capital |

### 11.3 Partner Applicant

| Scenario | Owner Recommendation |
|---|---|
| Partner relationship is Jason-led | Jason Feimster |
| General partner application queue | Moonshine Capital |
| Partner profile/build task | Assign to responsible project owner |
| Partner handed to another team member | Assigned team member after approval |

### 11.4 Broker Profile

| Scenario | Owner Recommendation |
|---|---|
| Profile feedback email | Jason Feimster |
| Profile build/update task | Responsible project owner |
| Profile resource request | Jason or Moonshine Capital |
| Technical portal issue | Project/build owner if defined |

---

## 12. Task Handoff Examples

### Example 1 — Applicant Call Requested

```markdown
Task: Call — Maria Lopez — funding request follow-up  
Owner: Jason Feimster (`41491296`)  
Reason: Applicant requested a call and funding follow-up is Jason-led.
```

### Example 2 — Partner Profile Update

```markdown
Task: Update broker profile — Darwin Hanneman — requested changes  
Owner: Jason Feimster or assigned project owner  
Reason: Profile update relates to partner enablement and broker directory workflow.
```

### Example 3 — General Website Applicant Queue

```markdown
Task: Review intake — New funding applicant — route application  
Owner: Moonshine Capital (`570141013`)  
Reason: General inbound lead pending triage.
```

---

## 13. What Not To Do

Do not:

- Assign records without searching first
- Change owner without reviewing current owner
- Assume inactive owners should be used
- Use owner names instead of IDs
- Ignore multiple active Jason owner IDs
- Change company owner for speculative companies
- Assign tasks to someone who is not responsible for action
- Reassign deals without handoff note
- Use Moonshine Capital owner when personal follow-up is required
- Use Jason owner when record belongs in a general queue
- Treat partner referrals and client funding deals as the same ownership workflow

---

## 14. Owner Assignment Checklist

Before assigning or changing owner:

```markdown
- [ ] Record searched/reviewed
- [ ] Current owner identified
- [ ] Intended owner verified
- [ ] Owner ID confirmed
- [ ] Workflow owner logic applied
- [ ] User approval obtained
- [ ] Handoff note prepared if ownership changes
- [ ] Associated task/deal/contact ownership considered
- [ ] No inactive owner selected
- [ ] Multiple Jason owner ID issue considered
```

---

## 15. Operational Standard

Owner assignment should make the next action obvious.

A good owner assignment answers:

- Who is responsible?
- Why are they responsible?
- What record does this apply to?
- What action should happen next?
- Was responsibility transferred cleanly?

Bad ownership creates silence.

Good ownership creates motion.

Assign the owner like follow-up revenue depends on it — because it probably does.
