# Connector-Driven Deployment Verification

Use this file to verify deploy readiness through GitHub and Vercel connectors wherever possible.

## Canonical URL

Use the hardcoded canonical live URL:

```txt
https://core-tools.vercel.app
```

Do not introduce environment-variable canonical URL handling.

Required code targets:

```ts
metadataBase: new URL("https://core-tools.vercel.app")
```

```ts
const base = "https://core-tools.vercel.app";
```

## Verification Sources

| Connector | Purpose |
|---|---|
| GitHub | Verify repo files, scripts, static export config, and data files |
| Vercel | Verify latest deployment, build logs, and live route responses |

If a check cannot be performed through an available connector, mark it as **not connector-verifiable** and add automation later.

## GitHub Connector Checks

Verify these repo files exist and contain expected settings.

| File | Check |
|---|---|
| `package.json` | Includes `prebuild`, `build`, and `validate:data` scripts |
| `next.config.js` | Keeps `output: "export"` and `images: { unoptimized: true }` |
| `scripts/sync-public-tools.js` | Copies `data/tools.json` to `public/tools.json` |
| `scripts/validate-data.js` | Validates tools, collections, runners, and optional tag taxonomy |
| `data/tools.json` | Valid JSON array of tool objects |
| `data/collections.json` | Valid JSON array of collection objects |
| `data/tag-taxonomy.json` | Includes `allowedTags`; may include groups and deprecated mappings |
| `app/admin/collection-builder/page.tsx` | Imports and renders `CollectionBuilder` |
| `components/collection-builder.tsx` | Fetches `/tools.json` client-side and outputs collection JSON |

## Expected Package Scripts

`package.json` should include:

```json
{
  "prebuild": "node scripts/sync-public-tools.js",
  "build": "next build",
  "validate:data": "node scripts/validate-data.js"
}
```

`prebuild` should run automatically when the Vercel build runs `next build` through npm lifecycle behavior.

## Vercel Connector Checks

Use the Vercel connector to verify the latest deployment.

| Check | Expected |
|---|---|
| Latest deployment status | Ready / successful |
| Build logs | `prebuild` runs before `next build` |
| Build logs | `public/tools.json` generation message appears |
| Build logs | No TypeScript failure |
| Build logs | No static export failure |
| Homepage fetch | `https://core-tools.vercel.app` returns success |
| Tools fetch | `/tools` returns success |
| Collections fetch | `/collections` returns success |
| Admin fetch | `/admin` returns success |
| Collection Builder fetch | `/admin/collection-builder` returns success |
| Tools JSON fetch | `/tools.json` returns generated JSON |

## Route Fetch Targets

Use Vercel connector URL fetch checks for:

```txt
https://core-tools.vercel.app
https://core-tools.vercel.app/tools
https://core-tools.vercel.app/collections
https://core-tools.vercel.app/admin
https://core-tools.vercel.app/admin/collection-builder
https://core-tools.vercel.app/tools.json
```

## Not Connector-Verifiable Yet

These checks are not fully connector-verifiable unless GitHub Actions or another CI layer is added:

| Check | Automation to Add Later |
|---|---|
| Data validation on every push | GitHub Actions workflow running `npm run validate:data` |
| Build validation on every push | GitHub Actions workflow running the Vercel-equivalent build |
| Route response snapshots | Playwright or curl-based workflow against deployed URLs |
| JSON schema validation reports | CI artifact from `scripts/validate-data.js` |

## Failure Triage

| Symptom | Likely Cause | Connector Check | Fix |
|---|---|---|---|
| Deployment failed | Build or TypeScript error | Vercel build logs | Fix logged error and redeploy |
| `/tools.json` missing | `prebuild` did not run or script failed | Vercel build logs + GitHub script check | Verify `prebuild` and `scripts/sync-public-tools.js` |
| Collection Builder loads but no tools | `/tools.json` missing or unreadable | Vercel fetch `/tools.json` | Confirm generated JSON exists in deployment |
| Metadata still `example.com` | `app/layout.tsx` not updated | GitHub fetch `app/layout.tsx` | Set canonical `metadataBase` |
| Embed generator still uses env var | `lib/generators.ts` not updated | GitHub fetch `lib/generators.ts` | Hardcode canonical base |
| Validation script missing or not wired | Missing script or package command | GitHub fetch `package.json` and `scripts/validate-data.js` | Add `validate:data` and script file |

## Deploy-Ready Definition

A deployment is considered connector-verified when:

- GitHub connector confirms required files and scripts.
- Vercel connector confirms latest deployment is successful.
- Vercel build logs show generated `public/tools.json`.
- Vercel URL fetch checks pass for public, admin, and JSON routes.
- No connector-visible static export, TypeScript, or route failures remain.
