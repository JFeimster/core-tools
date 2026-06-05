# Skill Name

Static Site Builder

## Purpose

Plan and produce static-export-safe site changes without introducing runtime dependencies.

## Ideal User

Founders, consultants, and indie builders shipping lightweight directory sites.

## Triggering Use Cases

- New static route
- Layout or navigation update
- Export-safe content expansion
- Static page QA

## Required Inputs

- Route list
- Content sources
- Build command
- Export constraints

## Process

1. Inspect the current route and data model.
2. Make export-safe edits only.
3. Validate data if JSON changes.
4. Build locally.
5. Check the output routes.

## Output Format

- Changed files
- Route impact summary
- Validation result
- Build result

## Quality Bar

The app should remain deployable as a static export.

## Guardrails

- No server actions
- No database
- No auth layer
- No runtime API dependency

## Example Prompt

> Build this static page change without breaking export compatibility and report the route impact.

## Compatible Platforms

- Codex
- VS Code
- GitHub Actions
- Vercel

## Related Core Tools Directory Opportunities

- Tool pages
- Collection pages
- Landing drafts
- Embed pages
