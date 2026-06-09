# Changelog

## 2026-06-08

### Added

- Added `registries/` as the internal planning and routing layer.
- Added registry projection, validation, and tool-artifact scaffold scripts.
- Added public-safe `data/public-tool-index.json`.
- Added `docs/static-artifact-architecture.md`.
- Added `docs/registry-architecture.md`.
- Added `docs/registry-schema-notes.md`.
- Added `docs/tool-artifact-workflow.md`.
- Added `docs/funding-tools-promotion-workflow.md`.
- Added `docs/legacy-static-artifacts.md`.
- Added `docs/data-quality-rules.md`.
- Added `docs/funding-tools-promotion-workflow.md`.

### Changed

- Promoted a safe batch of funding tools into `data/tools.json`.
- Added collections for funding and readiness workflows.
- Introduced per-tool artifact folders under `tools/[slug]/`.
- Deprecated root-level static HTML surfaces in favor of per-tool artifact structure.
- Normalized public tags toward canonical kebab-case while keeping deprecated aliases mapped for transition safety.
- Updated `README.md`, `PROJECT_STATE.md`, and `project-data-snapshot.json` for the new architecture.
