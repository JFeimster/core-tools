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

## Current Known Gaps

| Gap | Fix |
|---|---|
| Placeholder CTA URLs remain | Replace before partner-ready launch |
| Some generated tool labels are messy | Clean pasted transcript artifacts |
| Deprecated tags remain | Migrate `cash-flow` → `cashflow`, `pre-qual` → `prequal` |
| Data quality can be stricter later | Tighten validator after cleanup |
| Connector verification can improve | Add GitHub Actions or route-fetch automation later |

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

## Operating Focus

Prioritize changes that improve:

1. Tool creation speed
2. Directory usefulness
3. Embed/share utility
4. Landing draft quality
5. Collection/playbook value
6. Deployment reliability
