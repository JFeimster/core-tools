# 20 - Partner Broker Profile CRM SOP

## Partner / Broker Profile CRM SOP  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This SOP defines how Moonshine Capital should manage partner and broker profile information in HubSpot.

Use this document for:

- Broker profile creation
- Partner directory setup
- Broker page updates
- Partner resource requests
- Profile feedback emails
- Broker onboarding tasks
- Public profile data collection
- Darwin-style partner profile workflows
- HubSpot notes/tasks tied to profile buildout

The goal is to keep partner profile operations organized without confusing them with funding applicant workflows.

Partner profile work is enablement, not underwriting.

---

## 2. Core Rule

A broker profile is not automatically:

- A funding deal
- A company record
- A product record
- A client applicant record

Default CRM objects:

- Contact
- Note
- Task
- Company only if real agency/entity exists

Do not create a deal unless Jason explicitly wants to track partner profile work as a deal or revenue opportunity.

---

## 3. Broker Profile Data Categories

Capture profile data in these categories.

```text
Identity
Contact and links
Agency/company context
Location/service area
Positioning
Target clients
Funding specialties
Proof/credibility
Media/assets
Tools/resources
Internal profile status
Next actions
```

---

## 4. Contact-Level Fields

Use verified contact fields when clean.

| Profile Data | HubSpot Destination |
|---|---|
| Full name | Contact `firstname` / `lastname` |
| Email | Contact `email` |
| Phone | Contact `phone` |
| Agency/brand text | Contact `company` |
| Personal/company website | Contact `website` if no company object |
| Personal LinkedIn | Contact `hs_linkedin_url` |
| Personal Facebook | Contact `facebook_profile` |

Use notes for everything else unless a verified field exists.

---

## 5. Company Handling

Create/update company only when:

- Broker has a real agency/business/entity
- Company name is provided
- Website/domain supports entity
- Relationship is clear

Company fields:

| Profile Data | HubSpot Company Field |
|---|---|
| Agency/company name | `name` |
| Website | `website` |
| Domain | `domain` |
| Phone | `phone` |
| State | `state` |
| Country | `country` |
| Facebook company page | `facebook_company_page` |
| LinkedIn company page | `linkedin_company_page` |
| Twitter/X handle | `twitterhandle` |

Do not create a company from personal brand vibes alone.

---

## 6. Broker Profile Note Template

Use this note for profile content.

```markdown
## Broker Profile Context Note

Broker/partner: [Full Name]  
Agency/business: [Name or “Not provided”]  
Profile status: [Requested / In progress / Preview sent / Approved / Published / Needs update]  
Public email: [Email]  
Phone: [Phone]  
Website: [Website]  
Booking link: [URL]  
LinkedIn: [URL]  
Facebook/Instagram/other: [URLs]  
Location/service area: [City, state, nationwide, etc.]

Profile content:
- Short bio: [Bio]
- Why choose this broker: [Positioning]
- Target client types: [Startups / ecommerce / contractors / real estate / SaaS / restaurants / trucking / other]
- Funding specialties: [Details]
- Proof/credibility: [Details]
- Tools/resources requested: [Details]
- Headshot/image status: [Received / missing / needs update]

Operational notes:
[Profile page status, requested changes, next build/update action.]

Next action:
[Create/update profile, request missing details, send preview link, add tools/resources, etc.]
```

---

## 7. Broker Profile Statuses

Use these note-based statuses until a verified field exists.

```text
Profile requested
Profile intake received
Missing profile details
Profile in progress
Profile preview sent
Profile feedback received
Profile approved
Profile published
Profile needs update
Profile paused
Profile inactive
```

Do not create custom status values in HubSpot fields unless they are verified.

---

## 8. Profile Task Templates

### 8.1 Review Broker Profile Intake

```text
Review broker profile — [Name] — profile intake received
```

Due:

```text
Next business day
```

Task notes:

```markdown
Review broker profile details submitted by partner. Confirm required items: bio, contact info, service area, target clients, funding specialties, links, booking link, and headshot.
```

### 8.2 Request Missing Profile Info

```text
Request profile info — [Name] — missing broker details
```

Task notes:

```markdown
Partner profile is missing required details. Request missing items before profile can be completed.
```

### 8.3 Send Profile Preview

```text
Send profile preview — [Name] — broker page review
```

Task notes:

```markdown
Send broker profile preview link and ask for edits, preferred use cases, tools/resources, and any links to include.
```

### 8.4 Update Broker Profile

```text
Update broker profile — [Name] — requested changes
```

Task notes:

```markdown
Apply requested profile changes and update HubSpot note with summary of changes completed.
```

### 8.5 Add Partner Resources

```text
Add partner resources — [Name] — profile tools section
```

Task notes:

```markdown
Add or update curated resources/tools for partner profile. Preserve requested resources in HubSpot note.
```

---

## 9. Required Profile Fields Checklist

Minimum useful broker profile:

```markdown
- [ ] Full name
- [ ] Email
- [ ] Phone or preferred contact method
- [ ] Short bio
- [ ] Website or relevant link
- [ ] LinkedIn or professional profile
- [ ] Service area
- [ ] Target client type
- [ ] Funding/service specialties
- [ ] Booking link or CTA preference
- [ ] Headshot/profile image
```

Optional but useful:

```markdown
- [ ] Agency/company name
- [ ] Instagram/Facebook/X links
- [ ] Proof/credibility
- [ ] Past funding/client examples
- [ ] Tools/resources requested
- [ ] Preferred landing page CTA
- [ ] Video intro
- [ ] Testimonials
```

---

## 10. Profile Feedback Email Summary

When partner provides feedback, log:

```markdown
## Broker Profile Feedback Note

Partner: [Name]  
Profile/page: [URL or “Not provided”]  
Feedback date: [Date]

Requested changes:
- [Change 1]
- [Change 2]

Requested links/resources:
- [Link/resource]

Operational impact:
[Update copy / add tools / change CTA / add image / update service area / etc.]

Next action:
[Task or follow-up.]
```

---

## 11. GitHub / Vercel / Wix Build Handoff

If profile work requires website/portal updates, do not bury the build request only in HubSpot.

Create or recommend external project action when relevant.

| Profile Need | Suggested System |
|---|---|
| Update HubSpot contact/profile notes | HubSpot |
| Draft feedback email | Gmail |
| Create/update broker page in repo | GitHub |
| Deploy profile page | Vercel |
| Update Wix broker page/CMS | Wix |
| Store profile assets/docs | Google Drive |
| Track content/profile status | Notion if applicable |

HubSpot should preserve CRM context.

GitHub/Vercel/Wix should handle build/deploy work.

---

## 12. Broker Profile Proposed Updates Format

```markdown
## Proposed Broker Profile CRM Updates

| Object | Action | Details | Reason |
|---|---|---|---|
| Contact | Create / Update / Existing | [Name/email/phone/links] | Partner/broker record |
| Company | Create / Skip / Update | [Agency/entity] | Only if real entity |
| Note | Add | Broker profile context | Preserve profile details |
| Task | Create | [Profile task] | Next action |
| Deal | Skip | Not a funding opportunity | Partner profile work |

Approve? [✅ Yes / ❌ No]
```

---

## 13. Common Mistakes to Avoid

Avoid:

- Treating broker profile work as a funding deal
- Creating company from broker’s personal name
- Losing profile feedback in Gmail only
- Storing profile bio in random fields
- Forgetting headshot/image status
- Forgetting requested tools/resources
- Mixing partner profile status with applicant funding status
- Forgetting to create task after partner feedback
- Keeping build/deploy tasks only in HubSpot when GitHub/Wix/Vercel should be used
- Using personal LinkedIn as company LinkedIn page

---

## 14. Operational Standard

Every broker profile record should make obvious:

- Who the partner is
- What profile/page is being created or updated
- What assets/details are available
- What is missing
- What status the profile is in
- What task happens next
- Whether this requires HubSpot, Gmail, GitHub, Vercel, Wix, Drive, or Notion work

Broker profile workflows are partner enablement.

Treat them like a mini product launch, not a random CRM note with a mustache.
