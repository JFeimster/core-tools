# Tool Generation Workflow

Use this workflow when adding or editing a tool in Core Tools.

## Required Fields

Each tool record must include:

- `slug`
- `brand`
- `name`
- `pain`
- `artifact`
- `inputs`
- `logic`
- `ctaLabel`
- `ctaUrl`
- `tags`

## Optional Fields

- `oneLiner`
- `runner`

## Slug Rules

- Use lowercase kebab-case.
- Keep slugs unique across the tool catalog.
- Prefer descriptive, searchable slugs.
- Do not keep provider prefixes if the project has already white-labeled a tool.

## Tag Rules

- Every tool needs at least one tag.
- Check `data/tag-taxonomy.json` before inventing a new tag.
- Prefer tags that already exist in the taxonomy.
- Unknown tags are allowed for now, but they produce warnings.
- Clean up deprecated tags instead of adding more new variants.

## CTA Rules

- `ctaLabel` should be short and action-oriented.
- `ctaUrl` should be a real, reviewable destination.
- Avoid placeholder URLs in shipped data.
- If a tool is partner-facing, confirm the CTA aligns with the intended funnel.

## Input, Output, And Formula Rules

- Input keys must be unique within a tool.
- Supported input types are `number`, `text`, and `select`.
- Formula runners only support arithmetic expressions.
- Formula runners may reference only numeric input keys.
- Use `runner: { type: "none" }` when no calculation layer is needed.

## Embed And Landing Draft Behavior

- Tool JSON can drive the static tool page, embed page, and landing-draft copy.
- Keep logic summaries human readable.
- Keep output language short and reusable for marketing pages.

## Validation Steps

1. Run `npm run validate:data`
2. Fix hard errors first
3. Review warnings for taxonomy and CTA issues
4. Run `npm run build`
5. Remove regenerated artifacts if needed

## Common Mistakes

- Duplicate input keys
- Missing `tags`
- Placeholder CTA URLs
- Formula expressions that use unsupported characters
- Collection references to missing tool slugs
- Mixing content cleanup with runner logic changes

## When Runner Code Must Change First

Update runner code before adding:

- conditional logic
- caps or floors
- date math
- text classification
- API calls
- scoring that cannot be expressed with arithmetic

## Safe Editing Pattern

1. Update the tool record
2. Validate data
3. Build once
4. Confirm generated output still matches the intent
