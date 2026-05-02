# Changelog

All notable changes to Core Tool Directory should be documented here.

Format: newest first. Keep entries compact and focused on shipped repo changes.

## 2026-05-02

### Added

- Added `PROJECT_STATE.md` as the compact repo state reference.
- Added canonical live site rule: use `https://core-tools.vercel.app`.
- Added documented next-file sequence for ToolForge OS buildout.

### Confirmed

- App is static-export friendly via `output: "export"`.
- App uses Next.js 15.3.8 and React 19.
- App uses JSON-driven data with no database, no auth, and no server actions.
- Dynamic App Router routes use async `params` typing.
- Active public routes include:
  - `/`
  - `/tools`
  - `/tools/[slug]`
  - `/tools/[slug]/embed`
  - `/brands`
  - `/brands/[brand]`
  - `/collections`
  - `/collections/[slug]`
- Active admin routes include:
  - `/admin`
  - `/admin/tool-builder`

### Known Gaps

- `app/layout.tsx` still needs canonical `metadataBase`.
- `lib/generators.ts` still needs hardcoded canonical embed base.
- `public/tools.json` should be generated from `data/tools.json`.
- Collection Builder files are not yet added.
- Data validation script is not yet added.
- Placeholder CTA URLs remain in collection data.
- README needs a current-state refresh.

## Planned Next

1. Add `scripts/sync-public-tools.js`.
2. Update `package.json` with `prebuild`.
3. Add Collection Builder component and route.
4. Add data validation.
5. Add tag taxonomy.
6. Add compact docs for schema notes, deployment, and roadmap.
7. Update README.
8. Apply canonical URL fixes to `app/layout.tsx` and `lib/generators.ts`.
