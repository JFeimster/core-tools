# Static Artifact Architecture

Core Tools uses `tools/[slug]/` as the per-tool artifact root.

Each tool should eventually own:

- `README.md`
- `tool.config.json`
- `landing/index.html`
- `landing/styles.css`
- `landing/script.js`
- `embed/index.html`
- `embed/styles.css`
- `embed/script.js`
- `assets/`
- `exports/`

Root-level `landing.html`, `embed.html`, and duplicate `landing/index.html` are legacy surfaces. They should only remain as temporary fallbacks during migration.

The Burn Rate Runway Extender now uses `tools/rokfi-burn-rate-runway-extender/` as the artifact home.

