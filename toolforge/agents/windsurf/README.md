# Windsurf Operating Guide

Use this pack for Windsurf workflows that iterate on static-site sections, layout polish, and small site improvements.

## Purpose

Windsurf is useful when a page or section needs fast, iterative refinement while staying inside the repo's static-export and JSON-driven constraints.

## Best Use Cases

- Iterating on a static page section
- Running a polish pass on the UI
- Turning a rough layout into a shippable page
- Reviewing a change against the current static site flow

## Repo Safety Rules

- Keep edits static-export safe.
- Do not introduce runtime APIs or backend dependencies.
- Validate data when JSON changes.
- Stop if the task needs a larger app redesign.

## Compatible Workflows

- [toolforge/skills/static-site-builder.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/static-site-builder.md)
- [toolforge/skills/landing-page-generator.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/landing-page-generator.md)
- [toolforge/skills/deployment-qa.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/deployment-qa.md)
- [toolforge/skills/repo-cleanup.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/repo-cleanup.md)

## Related Skills

- `static-site-builder`
- `landing-page-generator`
- `deployment-qa`
- `repo-cleanup`

## Example Prompts

- Iterate on this static site section without changing the route model.
- Polish this page so it ships cleanly as a static export.
- Review this UI pass for clarity, spacing, and export safety.
