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
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## Canonical URL Rule

Use the hardcoded live URL everywhere:

```txt
https://core-tools.vercel.app
```

Do not introduce environment-variable canonical URL handling.

Required fixes:

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
| `/admin/collection-builder` | Missing | Planned next admin utility |

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

Current dynamic routes already follow this pattern for:

- `app/tools/[slug]/page.tsx`
- `app/brands/[brand]/page.tsx`
- `app/collections/[slug]/page.tsx`

## Current Data Sources

| File | Purpose |
|---|---|
| `data/tools.json` | Main tool source of truth |
| `data/collections.json` | Collection/playbook source of truth |
| `lib/types.ts` | Tool + runner types |
| `lib/tools.ts` | Tool helpers |
| `lib/brands.ts` | Brand helpers |
| `lib/collections.ts` | Collection helpers |
| `lib/generators.ts` | Embed + landing draft generators |
| `lib/runner.ts` | Client-side formula runner |

## Current Tool Schema

Tools are JSON objects with:

- `slug`
- `brand`
- `name`
- `oneLiner`
- `pain`
- `artifact`
- `inputs`
- `logic`
- `ctaLabel`
- `ctaUrl`
- `tags`
- `runner`

Runner types:

- `none`
- `formula`

Formula runner supports only:

```txt
+ - * / ( )
```

## Current Collection Schema

Collections use:

```ts
{
  slug: string;
  title: string;
  oneLiner: string;
  audience: string;
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  toolSlugs: string[];
  tags: string[];
}
```

## Current Components

- `components/copy-box.tsx`
- `components/directory-controls.tsx`
- `components/site-header.tsx`
- `components/site-footer.tsx`
- `components/tool-card.tsx`
- `components/tool-runner.tsx`
- `components/tool-tabs.tsx`
- `components/tool-builder.tsx`

## Known Gaps

| Gap | Fix |
|---|---|
| `metadataBase` uses example domain | Change to `https://core-tools.vercel.app` |
| Embed generator uses env fallback logic | Hardcode `const base = "https://core-tools.vercel.app";` |
| `public/tools.json` missing | Add sync script from `data/tools.json` |
| Collection Builder missing | Add component + admin route |
| Data validation missing | Add validation script |
| Placeholder CTA URLs remain | Replace before partner-ready launch |
| README is behind current app | Update after state/changelog/docs are added |

## Recommended Next File Sequence

1. `CHANGELOG.md`
2. `scripts/sync-public-tools.js`
3. `package.json` update to add `prebuild`
4. `components/collection-builder.tsx`
5. `app/admin/collection-builder/page.tsx`
6. `app/admin/page.tsx` update
7. `scripts/validate-data.js`
8. `data/tag-taxonomy.json`
9. `docs/schema-notes.md`
10. `docs/deployment-checklist.md`
11. `docs/roadmap.md`
12. `README.md` update
13. `app/layout.tsx` update
14. `lib/generators.ts` update

## Build Check

Run before deploy:

```bash
npm run build
```

After validation script exists:

```bash
npm run validate:data
npm run build
```

## Operating Focus

Prioritize changes that improve:

1. Tool creation speed
2. Directory usefulness
3. Embed/share utility
4. Landing draft quality
5. Collection/playbook value
6. Deployment reliability
