# Roadmap

Compact build plan for Core Tool Directory. Prioritize shippable static features before adding backend complexity.

## Product Direction

Core Tool Directory should become a fast operating console for turning business finance ideas into:

- tool JSON
- static tool pages
- iframe embeds
- landing draft copy
- curated collections
- partner-ready playbooks
- validation-safe data files

## Priority Rules

Rank work by whether it improves:

1. Tool creation speed
2. Directory usefulness
3. Embed/share utility
4. Landing draft quality
5. Collection/playbook value
6. Deployment reliability
7. Lead capture and attribution

## Phase 1 — Stability

| Item | Status | Notes |
|---|---:|---|
| Project state doc | Done | `PROJECT_STATE.md` |
| Changelog | Done | `CHANGELOG.md` |
| Public tools sync | Done | `scripts/sync-public-tools.js` |
| Prebuild script | Done | `package.json` |
| Collection Builder component | Done | `components/collection-builder.tsx` |
| Collection Builder route | Done | `/admin/collection-builder` |
| Admin link | Done | `/admin` links to builder |
| Data validator | Done | `scripts/validate-data.js` |
| Tag taxonomy | Done | `data/tag-taxonomy.json` |
| Schema notes | Done | `docs/schema-notes.md` |
| Deployment verification doc | Done | `docs/deployment-verification.md` |

## Phase 2 — Immediate Fixes

| Item | File | Goal |
|---|---|---|
| Update README | `README.md` | Match current app reality |
| Fix metadata base | `app/layout.tsx` | Use canonical live URL |
| Fix embed base | `lib/generators.ts` | Hardcode canonical live URL |
| Refresh project state | `PROJECT_STATE.md` | Mark completed files accurately |
| Refresh changelog | `CHANGELOG.md` | Add latest completed docs/scripts |

## Phase 3 — Data Quality

| Item | Goal |
|---|---|
| Replace placeholder CTAs | Make tools/collections partner-ready |
| Normalize deprecated tags | Move `cash-flow` → `cashflow`, `pre-qual` → `prequal` |
| Clean generated tool labels | Fix pasted transcript artifacts in tool inputs |
| Add stronger schema rules | Tighten validator after data cleanup |
| Add collection quality pass | Ensure every collection has useful tool order and CTA |

## Phase 4 — Directory UX

| Item | Goal |
|---|---|
| Tag index pages | Browse by tag/use case |
| Collection filtering | Filter playbooks by audience/tag |
| Better empty states | Make builder failures easier to fix |
| Featured collections | Improve homepage navigation |
| Tool quality badges | Flag runnable, embed-ready, and CTA-ready tools |

## Phase 5 — Partner Utility

| Item | Goal |
|---|---|
| Partner embed guide | Explain iframe usage |
| Share links | Add copyable links for tools and collections |
| Landing draft improvements | Better campaign-ready sections |
| Collection landing drafts | Generate playbook landing copy |
| Partner-ready CTA sets | Standardize apply/info/book-call destinations |

## Phase 6 — Attribution and Capture

| Item | Goal |
|---|---|
| Tracked outbound links | Add `/go/[slug]` or static-safe equivalent |
| UTM builder | Generate campaign URLs |
| Lead capture pattern | Add static-friendly lead handoff options |
| Webhook handoff docs | Document n8n/Tally/HubSpot options |
| Analytics plan | Define useful events without overbuilding |

## Backlog

| Idea | Keep Static? | Notes |
|---|---:|---|
| Project data snapshot | Yes | Useful for project knowledge / exports |
| Tool import helper | Yes | Convert pasted ideas into JSON faster |
| Collection templates | Yes | Starter playbooks by audience |
| Embed preview gallery | Yes | Quick QA for iframe views |
| GitHub Actions validation | Yes | Make validation connector-verifiable |
| Route fetch workflow | Yes | Automate deployed URL checks |
| Database | No | Only revisit if static JSON becomes limiting |
| Auth | No | Only revisit if admin access becomes a real risk |

## Current North Star

Ship useful finance tools faster than competitors can schedule a kickoff call.
