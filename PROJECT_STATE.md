# Project State

Last updated: 2026-05-02

## App

Core Tool Directory is a static-first Next.js App Router app for publishing business finance tools, embeds, landing drafts, brand pages, and curated collections.

- Live site: https://core-tools.vercel.app
- Repo: https://github.com/JFeimster/core-tools.git
- Stack: Next.js 15.3.8, React 19, TypeScript, TailwindCSS, Vercel
- Architecture: JSON-driven, static export, no database, no auth, no server actions

## Current Build Settings

`next.config.js`:

```js
output: "export",
images: { unoptimized: true }
```

`package.json` scripts:

```json
{
  "dev": "next dev",
  "prebuild": "node scripts/sync-public-tools.js",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "validate:data": "node scripts/validate-data.js"
}
```

## Canonical URL Rule

Use the hardcoded live URL everywhere:

```txt
https://core-tools.vercel.app
```

Do not introduce environment-variable canonical URL handling.

Confirmed code targets:

```ts
metadataBase: new URL("https://core-tools.vercel.app")
```

```ts
const base = "https://core-tools.vercel.app";
```

## Current Routes

| Route | Status | Notes |
|---|---:|---|
| `/` | Active | Home + featured directory |
| `/tools` | Active | Full searchable/filterable directory |
| `/tools/[slug]` | Active | Tool detail page |
| `/tools/[slug]/embed` | Active | Iframe-friendly embed view |
| `/brands` | Active | Brand index |
| `/brands/[brand]` | Active | Brand detail page |
| `/collections` | Active | Collection/playbook index |
| `/collections/[slug]` | Active | Collection detail page |
| `/admin` | Active | Admin utility index |
| `/admin/tool-builder` | Active | Tool JSON builder |
| `/admin/collection-builder` | Active | Collection JSON builder |
| `/tools.json` | Generated | Built from `data/tools.json` by prebuild |

## Current Data Sources

| File | Purpose |
|---|---|
| `data/tools.json` | Main tool source of truth |
| `data/collections.json` | Collection/playbook source of truth |
| `data/tag-taxonomy.json` | Optional tag taxonomy |
| `public/tools.json` | Generated client-readable tool data |

Do not hand-author `public/tools.json`.

## Current CTA State

Placeholder CTAs have been replaced in both primary data files.

| File | CTA State |
|---|---|
| `data/tools.json` | Uses approved external brand-level CTAs |
| `data/collections.json` | Uses approved external brand-level CTAs |

Approved brand-level CTA routing:

| Brand | CTA URL |
|---|---|
| DAC / Bank Breezy | `https://bankbreezy.com/funding/jason/` |
| Onramp Funds | `https://onrampfunds.partnerlinks.io/lbz9wzd0o1dv` |
| ROKFI | `https://rok.my.site.com/MyPartner/s/` |
| Payability | `https://fas.st/t/P7LZc7v7` |
| 8fig | `https://grow.8fig.co/lh7ictz6db3r` |

GoKapital tools use product/use-case specific shortlinks.

## White-Label Slug Cleanup

The selected provider-prefixed tool slugs were renamed to white-labeled slugs in `data/tools.json`, and matching collection `toolSlugs` were updated in `data/collections.json`.

Examples:

```txt
onramp-bezos-interest-calculator -> bezos-interest-calculator
onramp-stockout-bleed-auditor -> stockout-bleed-auditor
rokfi-payroll-panic-countdown-timer -> payroll-panic-countdown-timer
rokfi-bad-debt-consolidator -> bad-debt-consolidator
```

## Current Core Files

| File | Purpose |
|---|---|
| `lib/types.ts` | Tool + runner types |
| `lib/tools.ts` | Tool helpers |
| `lib/brands.ts` | Brand helpers |
| `lib/collections.ts` | Collection helpers |
| `lib/generators.ts` | Embed + landing draft generators |
| `lib/runner.ts` | Client-side formula runner |
| `scripts/sync-public-tools.js` | Syncs `data/tools.json` to `public/tools.json` |
| `scripts/validate-data.js` | Validates tools, collections, runners, and tags |
| `.github/workflows/validate-build.yml` | Runs data validation and build checks |

## Current Admin Tools

| Route | Component | Purpose |
|---|---|---|
| `/admin/tool-builder` | `ToolBuilder` | Generate tool JSON, embeds, and landing drafts |
| `/admin/collection-builder` | `CollectionBuilder` | Generate collection JSON from selected tools |

## Docs

| File | Purpose |
|---|---|
| `PROJECT_STATE.md` | Current repo state |
| `CHANGELOG.md` | Compact shipped-change log |
| `README.md` | Main repo overview |
| `docs/schema-notes.md` | JSON schema notes |
| `docs/deployment-verification.md` | Connector-driven deployment verification |
| `docs/roadmap.md` | Build roadmap |

`docs/deployment-verification.md` intentionally replaces the earlier `docs/deployment-checklist.md` concept.

## Dynamic Route Rule

Next.js 15 dynamic routes must use async params:

```ts
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
}
```

## Runner Scope

Runner types:

- `none`
- `formula`

Formula runner supports only:

```txt
+ - * / ( )
```

Complex logic, caps, scoring, dates, APIs, and text verdicts require runner code changes first.

## Current Validation State

- GitHub Actions workflow: `Validate and Build`
- Manual workflow run completed successfully on 2026-05-02.
- `npm run validate:data` passed.
- `npm run build` passed.
- Repo search confirmed no `YOUR_PRIMARY_CTA_LINK` placeholders.
- Repo search confirmed no `NEXT_PUBLIC_SITE_URL` references.
- Repo search confirmed no old target provider-prefixed slugs from the white-label rename set.

## Current Known Gaps

| Gap | Fix |
|---|---|
| Some generated tool labels are messy | Clean pasted transcript artifacts |
| Deprecated tags remain | Migrate `cash-flow` → `cashflow`, `pre-qual` → `prequal` |
| Data quality can be stricter later | Tighten validator after cleanup |
| Production smoke test still needed | Check key live tool, collection, embed, and admin routes |

## Completed Sequence

- Added `CHANGELOG.md`
- Added `scripts/sync-public-tools.js`
- Added `prebuild` script
- Added `components/collection-builder.tsx`
- Added `/admin/collection-builder`
- Updated `/admin`
- Added `scripts/validate-data.js`
- Added `validate:data` script
- Added optional tag taxonomy validation
- Added `data/tag-taxonomy.json`
- Added `docs/schema-notes.md`
- Added `docs/deployment-verification.md`
- Added `docs/roadmap.md`
- Updated `README.md`
- Updated `app/layout.tsx`
- Updated `lib/generators.ts`
- White-labeled selected provider-prefixed tool slugs
- Replaced collection CTA placeholders with approved external URLs
- Replaced tool CTA placeholders with approved external URLs
- Added `.github/workflows/validate-build.yml`
- Confirmed manual GitHub Actions validate/build success

## Operating Focus

Prioritize changes that improve:

1. Tool creation speed
2. Directory usefulness
3. Embed/share utility
4. Landing draft quality
5. Collection/playbook value
6. Deployment reliability
