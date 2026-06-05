# Data Quality Rules

Plain-English validation policy for the Core Tools data files.

## Hard Errors

The validator fails the build for:

- missing required tool fields
- missing required collection fields
- duplicate tool slugs
- duplicate collection slugs
- duplicate input keys
- unsupported input types
- invalid formula output references
- missing collection tool slugs
- malformed JSON arrays where arrays are expected

## Warnings

The validator warns for:

- unknown tags
- placeholder CTA URLs
- missing or malformed taxonomy metadata that prevents tag checking

## Duplicate Slugs

- Tool slugs must be unique.
- Collection slugs must be unique.
- Slug collisions should be fixed before any release work continues.

## Missing Fields

- Tool records need the core required fields in `data/tools.json`.
- Collection records need the core required fields in `data/collections.json`.
- Missing required content should be treated as a real data defect.

## Input Key Uniqueness

- Input keys must be unique within a tool.
- Duplicate keys make formulas and UI binding unreliable.

## Supported Input Types

Only these input types are supported:

- `number`
- `text`
- `select`

## Formula Reference Rules

- Formula expressions may only use arithmetic operators.
- Formula expressions may reference only numeric input keys.
- Unsupported functions or symbols must be removed or handled in code first.

## Collection ToolSlugs

- Every `toolSlugs` entry must point to an existing tool.
- Collection order follows the order of `toolSlugs`.
- Missing tool references should be treated as data defects.

## Tag Taxonomy Warnings

- Unknown tags are non-blocking today.
- Tag taxonomy exists to reduce drift over time.
- Deprecated tags should be normalized as a separate cleanup step.

## Placeholder CTA Warnings

- Placeholder CTA URLs should be replaced before partner use.
- Placeholder CTAs are a warning rather than an error right now.

## Future Hardening Recommendations

- Tighten taxonomy coverage after the current cleanup queue is reduced.
- Convert recurring warnings into hard errors only after the data has been normalized.
- Add a stricter review gate for partner-facing CTAs when the content pipeline stabilizes.
