# Live Site Smoke Test

Manual QA checklist for the deployed Core Tools site.

Canonical live site:

- `https://core-tools.vercel.app`

## Smoke Test Checklist

### Home

- Open the homepage.
- Confirm the directory renders without obvious console-visible breakage.
- Confirm featured content and navigation are present.

### Tools Index

- Open `/tools`.
- Confirm tools load and the index is searchable or filterable.
- Confirm the page behaves like static content.

### Tool Detail Pages

- Open several `/tools/[slug]` pages.
- Confirm details render correctly.
- Confirm CTA buttons point to the expected destinations.

### Embed Pages

- Open several `/tools/[slug]/embed` pages.
- Confirm embed layout is stripped down and iframe-friendly.
- Confirm the page does not depend on backend services.

### Brands

- Open `/brands`.
- Open several `/brands/[brand]` pages.
- Confirm brand grouping and navigation work.

### Collections

- Open `/collections`.
- Open several `/collections/[slug]` pages.
- Confirm tool ordering and CTA content look correct.

### Admin

- Open `/admin`.
- Confirm the admin utility index loads.

### Tool Builder

- Open `/admin/tool-builder`.
- Confirm the builder loads and can produce valid tool JSON.

### Collection Builder

- Open `/admin/collection-builder`.
- Confirm the builder loads and can produce valid collection JSON.

### Tools JSON Behavior

- Open `/tools.json`.
- Confirm the response is valid JSON.
- Confirm it reflects the generated tool dataset rather than hand-authored content.

### CTA Behavior

- Confirm CTAs route to approved destinations.
- Confirm no placeholder CTA URLs remain on public pages.

### Static Export Assumptions

- Confirm public routes behave like static pages.
- Confirm no server-only features are required for the smoke test.
- Confirm the site still works with `output: "export"` assumptions.

## Failure Notes

- A missing `/tools.json` usually means the prebuild sync failed.
- A broken embed page usually means a content or generator regression.
- A broken admin builder usually means a generated-data workflow regression.
