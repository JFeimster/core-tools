# Project State

Last updated: 2026-06-08

## Current Architecture

- Next.js 15.3.8 App Router
- TypeScript
- Tailwind CSS
- Static export on Vercel
- JSON-driven public data
- Internal registries for routing, compliance, and artifact tracking

## Current Branch

- `feature/tool-registry-architecture-overhaul`

## Current Data Split

- `data/tools.json` is public-safe and generated from registry projections.
- `data/public-tool-index.json` mirrors the public projection for review and downstream use.
- `data/collections.json` is public-safe and collection-driven.
- `data/tag-taxonomy.json` controls warnings and canonical tag names.
- `registries/` contains internal planning, routing, compliance, and artifact intelligence.
- `tools/[slug]/` contains per-tool artifacts.

## Generated Files

- `public/tools.json`
- `data/public-tool-index.json`

## Validation

- `npm run validate:data`
- `npm run validate:registries`
- `npm run build`

## Migration Notes

- Burn Rate Runway Extender now lives under `tools/rokfi-burn-rate-runway-extender/`.
- Root `landing.html`, `embed.html`, and duplicate `landing/index.html` are legacy fallback surfaces.
- Public tags should stay canonical kebab-case in `data/` while deprecated aliases remain mapped in taxonomy.
