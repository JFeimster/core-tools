# Changelog

All notable changes to Core Tool Directory should be documented here.

Format: newest first. Keep entries compact and focused on shipped repo changes.

## 2026-05-02

### Added

- Added GitHub Actions workflow `.github/workflows/validate-build.yml` for data validation and build checks.
- Added `PROJECT_STATE.md` as the compact repo state reference.
- Added `CHANGELOG.md`.
- Added `scripts/sync-public-tools.js` to generate `public/tools.json`.
- Added `prebuild` script to run the tools sync before builds.
- Added `components/collection-builder.tsx`.
- Added `/admin/collection-builder` route.
- Added Collection Builder link to `/admin`.
- Added `scripts/validate-data.js`.
- Added `validate:data` package script.
- Added optional tag taxonomy validation.
- Added grouped `data/tag-taxonomy.json`.
- Added `docs/schema-notes.md`.
- Added `docs/deployment-verification.md`.
- Added `docs/roadmap.md`.

### Changed

- White-labeled selected provider-prefixed tool slugs in `data/tools.json`.
- Updated matching `toolSlugs` in `data/collections.json` after slug rename.
- Replaced collection placeholder CTA URLs with approved external brand-level CTAs.
- Replaced tool placeholder CTA URLs with approved external brand-level CTAs.
- Updated `README.md` for current app state.
- Updated `app/layout.tsx` to use canonical `metadataBase`.
- Updated `lib/generators.ts` to use the hardcoded canonical embed base.
- Replaced the deployment-checklist concept with connector-driven deployment verification.

### Confirmed

- Production smoke test confirmed after Phase 3 cleanup.
- Manual GitHub Actions `Validate and Build` workflow run completed successfully.
- `npm run validate:data` passed in GitHub Actions.
- `npm run build` passed in GitHub Actions.
- Repo search shows no `YOUR_PRIMARY_CTA_LINK` placeholders.
- Repo search shows no `NEXT_PUBLIC_SITE_URL` references.
- Repo search shows no old target provider-prefixed slugs from the white-label rename set.
- App is static-export friendly via `output: "export"`.
- App uses Next.js 15.3.8 and React 19.
- App uses JSON-driven data with no database, no auth, and no server actions.
- Dynamic App Router routes use async `params` typing.
- Active admin routes include:
  - `/admin`
  - `/admin/tool-builder`
  - `/admin/collection-builder`

### Known Follow-Ups

- Clean pasted/generated tool labels.
- Normalize deprecated tags:
  - `cash-flow` → `cashflow`
  - `pre-qual` → `prequal`
- Tighten validator after cleanup if stricter data contracts are needed.
