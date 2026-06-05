# Source Tool Docs Summary

This is the compact source-of-truth summary for Core Tools docs and data flow.

## Source Of Truth

- `data/tools.json`: main tool catalog
- `data/collections.json`: curated collection and playbook catalog
- `data/tag-taxonomy.json`: optional tag taxonomy and deprecated-tag mapping
- `public/tools.json`: generated client-readable copy of `data/tools.json`
- `scripts/sync-public-tools.js`: generator for `public/tools.json`
- `scripts/validate-data.js`: validator for tools, collections, runners, and tags

## Data Models

### Tool records

Core tool fields:

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

### Collection records

Core collection fields:

- `slug`
- `title`
- `oneLiner`
- `audience`
- `primaryCtaLabel`
- `primaryCtaUrl`
- `toolSlugs`
- `tags`

## Tag Rules

- Unknown tags are warnings, not hard failures.
- The validator only reads `allowedTags` from `data/tag-taxonomy.json`.
- Deprecated tags should be migrated over time, not blocked immediately.
- Current cleanup targets include `cash-flow` and `pre-qual`.

## Runner Rules

- Supported runner types are `none` and `formula`.
- Formula runners may only use `+ - * / ( )`.
- Formula runners can reference only numeric input keys.
- Complex logic, conditionals, caps, date math, text verdicts, and API calls require runner code changes first.

## CTA Rules

- Placeholder CTAs should not remain in shipped data.
- `ctaUrl` and `primaryCtaUrl` should point to approved destinations.
- External partner CTAs should be reviewed for compliance and routing accuracy.

## Embed And Landing Behavior

- Tool data powers static tool pages, embeds, and landing-draft generation.
- `lib/generators.ts` is the embed and landing draft generation layer.
- `public/tools.json` exists so browser-side builder workflows can read tool data.

## Validation Workflow

1. Run `npm run validate:data`
2. Run `npm run build`
3. Review warnings before merging content changes
4. Keep generated artifacts out of version control

## Safe Editing Workflow

1. Edit `data/tools.json` or `data/collections.json` only for content changes.
2. Use the admin builders to generate JSON when possible.
3. Re-run validation after every batch.
4. Remove generated artifacts if a build recreates them.

## Do-Not-Hand-Author

- `public/tools.json`

## Known Constraints

- Static export only.
- No database.
- No auth.
- No server actions.
- No environment-based canonical URL handling.

## Next Recommended Docs

- `docs/project-knowledge-pack.md`
- `docs/tool-generation-workflow.md`
- `docs/data-quality-rules.md`
- `docs/live-site-smoke-test.md`
- `docs/known-issues.md`
