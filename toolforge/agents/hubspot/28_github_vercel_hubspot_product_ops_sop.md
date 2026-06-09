# 28 - GitHub Vercel and HubSpot Product Ops SOP

## GitHub + Vercel + HubSpot Product Ops SOP  
### Moonshine Capital HubSpot CRM Operations Source Document

---

## 1. Purpose

This SOP defines how HubSpot CRM work should connect to GitHub and Vercel product/build workflows for Moonshine Capital.

Use this document when CRM conversations create product or site work, including:

- Partner profile page changes
- Broker directory updates
- Portal bugs
- Tool/resource requests
- Applicant-facing landing pages
- Wix/Vercel/GitHub handoffs
- GitHub issues from CRM requests
- Vercel deployment review
- Build/deploy status that affects a partner/applicant

The goal is to keep CRM context in HubSpot while keeping code/build work in GitHub and deployment work in Vercel.

HubSpot is not your bug tracker.

GitHub is not your CRM.

Vercel is not your memory palace.

---

## 2. System Roles

| System | Owns |
|---|---|
| HubSpot | Partner/applicant relationship, notes, tasks, CRM follow-up |
| GitHub | Code, issues, PRs, project docs, build tasks |
| Vercel | Deployments, preview/prod URLs, runtime status |
| Wix | Website/CMS/forms/courses if site-side |
| Google Drive | Assets like headshots/logos/docs |
| Gmail | Partner/applicant communication |

---

## 3. When CRM Should Create Product Work

Create or recommend GitHub/Vercel/Wix product work when HubSpot context includes:

- Partner profile page needs to be created/updated
- Broker headshot/image issue
- Partner requested profile tools/resources
- Portal bug affects partner/applicant
- Funding tool needs update
- Landing page link broken
- Vercel deployment issue affects public/profile page
- Wix CMS/profile data needs syncing
- Partner directory entry needs build work

---

## 4. HubSpot Note vs GitHub Issue

| Need | System |
|---|---|
| Preserve partner request | HubSpot note |
| Assign partner follow-up | HubSpot task |
| Build/update page/code | GitHub issue |
| Track PR/code change | GitHub |
| Verify deployment | Vercel |
| Tell partner update is ready | Gmail + HubSpot note/task |

---

## 5. Product Handoff Workflow

```markdown
1. Capture CRM context in HubSpot note.
2. Decide if product/build work is required.
3. If yes, create/recommend GitHub issue.
4. Include clear acceptance criteria.
5. Link/reference HubSpot record if safe.
6. After PR/deploy, verify Vercel URL.
7. Update HubSpot note/task with outcome.
8. Draft partner/applicant email if needed.
```

---

## 6. GitHub Issue Template from HubSpot Context

```markdown
# [Feature/Bug] [Short title]

## Source
HubSpot / Partner request / Applicant-facing issue

## Related CRM Context
- Partner/applicant: [Name]
- HubSpot record: [Link if appropriate]
- Request date: [Date]

## Problem
[What needs to be fixed/built.]

## Requested Outcome
[What success looks like.]

## Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

## Assets / Links
- [Drive asset/link if appropriate]
- [Current page]
- [Target page]

## Notes
Do not include sensitive applicant financial data in GitHub.
```

---

## 7. Vercel Deployment Review Workflow

Use Vercel when:

- User asks whether production/preview is live
- Partner page is not loading
- Image/asset not displaying
- Deployment failed
- Build limit/rate limit matters
- Need preview/prod URL status

Workflow:

```markdown
1. Identify project/repo/page.
2. Review current URL/status.
3. Determine preview vs production.
4. Identify latest deployment if available.
5. Avoid unnecessary redeploys.
6. Preserve partner-facing impact in HubSpot if relevant.
7. Create GitHub issue if code/build fix needed.
```

---

## 8. HubSpot Task Templates for Product Handoff

### Partner Profile Build

```text
Create/update broker profile — [Partner Name] — profile page request
```

### Bug Follow-Up

```text
Follow up — [Partner Name] — confirm profile/page issue resolved
```

### Asset Update

```text
Update broker asset — [Partner Name] — add/replace image
```

### Partner Resource Request

```text
Add partner resources — [Partner Name] — profile tools section
```

---

## 9. HubSpot Note for Product Work

```markdown
## Product / Build Handoff Note

CRM source: [Partner/applicant/request]  
Related system: [GitHub / Vercel / Wix / Drive]  
Request type: [Profile update / bug / asset / tool / page]  
Current URL/repo/project: [Link]  
Requested change:
[Summary]

External action:
[GitHub issue / Vercel deploy / Wix update / Drive asset needed]

Next CRM action:
[Follow-up email/task.]
```

---

## 10. Sensitive Data Rules

Do not put in GitHub/Vercel:

- Applicant financial docs
- Bank statements
- DOB/SSN/EIN
- Funding offers/terms
- Private applicant emails
- Sensitive screenshots
- Personal financial data

Use generic references and HubSpot/Drive links only when safe.

---

## 11. Build Discipline Rules

When working with Vercel/GitHub:

- Avoid unnecessary deployments.
- Batch small changes.
- Prefer GitHub issues/PRs for code changes.
- Track partner-facing bugs cleanly.
- Confirm production vs preview.
- Do not burn deployments guessing.
- Document cause/fix when debugging repeats.

This matters because repeated build failures waste quota, time, and sanity.

---

## 12. What Not To Do

Do not:

- Track product bugs only in HubSpot
- Put applicant private data in GitHub issues
- Use Vercel comments as CRM notes
- Tell partner issue is fixed without verifying URL
- Create GitHub issue for pure CRM follow-up
- Create HubSpot deal for product/profile bug
- Forget to update HubSpot after build/deploy completes
- Deploy repeatedly without diagnosis

---

## 13. Operational Standard

Every CRM-triggered product request should have:

- HubSpot note preserving relationship context
- HubSpot task for partner/applicant follow-up
- GitHub issue for code/build work
- Vercel verification for deployment
- Gmail follow-up if partner/applicant needs update

Keep the relationship in HubSpot.

Keep the work in GitHub.

Keep the deployment truth in Vercel.
