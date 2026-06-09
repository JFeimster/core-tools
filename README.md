# Core Tool Directory

Static-first Next.js App Router directory for business finance tools, collections, embeds, and per-tool artifact folders.

## Data Layout

- `data/` is public-safe app data.
- `registries/` is internal planning, routing, and artifact intelligence.
- `tools/` is the per-tool artifact root.
- `public/tools.json` is generated from `data/tools.json` and should not be hand-authored.

## Common Commands

```bash
npm run validate:data
npm run validate:registries
npm run project:registries
npm run build
```

## Route Surface

- `/`
- `/tools`
- `/tools/[slug]`
- `/tools/[slug]/embed`
- `/brands`
- `/collections`
- `/admin`

## Architecture Notes

- Public tool data is sanitized before projection.
- Internal registry fields stay in `registries/`.
- Public tags are normalized to canonical kebab-case first; deprecated aliases stay mapped until the public data is fully migrated.
- Per-tool artifacts should live under `tools/[slug]/`.
- Legacy root HTML files are deprecated migration surfaces.
