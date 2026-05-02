# Changelog

All notable changes to Core Tool Directory should be documented here.

Format: newest first. Keep entries compact and focused on shipped repo changes.

## 2026-05-02

### Added

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

- Updated `README.md` for current app state.
- Updated `app/layout.tsx` to use canonical `metadataBase`.
- Updated `lib/generators.ts` to use the hardcoded canonical embed base.
- Replaced the deployment-checklist concept with connector-driven deployment verification.

### Confirmed

- App is static-export friendly via `output: "export"`.
- App uses Next.js 15.3.8 and React 19.
- App uses JSON-driven data with no database, no auth, and no server actions.
- Dynamic App Router routes use async `params` typing.
- Active admin routes include:
  - `/admin`
  - `/admin/tool-builder`
  - `/admin/collection-builder`

### Known Follow-Ups

- Replace placeholder CTA URLs before partner-ready launch.
- Clean pasted/generated tool labels.
- Normalize deprecated tags:
  - `cash-flow` → `cashflow`
  - `pre-qual` → `prequal`
- Add connector-verifiable automation later for validation, build checks, and route fetch checks.
