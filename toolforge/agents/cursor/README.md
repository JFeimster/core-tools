# Cursor Operating Guide

Use this pack for Cursor workflows that edit the codebase, validate refactors, and keep feature branches disciplined.

## Purpose

Cursor is a good fit for local code edits that need fast feedback, narrow scope, and a clean handoff into validation and commit.

## Best Use Cases

- Branch-based feature edits
- Refactor safety checks
- Bug fixes that need tests or build verification
- Static-site edits that must stay export-safe

## Repo Safety Rules

- Keep the diff small and focused.
- Validate data and build after the edit.
- Do not add runtime dependencies or backend requirements.
- Stop if the change wants a larger architectural move.

## Compatible Workflows

- [toolforge/skills/local-dev-troubleshooting.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/local-dev-troubleshooting.md)
- [toolforge/skills/repo-cleanup.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/repo-cleanup.md)
- [toolforge/skills/static-site-builder.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/static-site-builder.md)
- [toolforge/skills/deployment-qa.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/deployment-qa.md)

## Related Skills

- `local-dev-troubleshooting`
- `repo-cleanup`
- `static-site-builder`
- `deployment-qa`

## Example Prompts

- Build this feature branch with a minimal diff and validate it locally.
- Refactor this file without changing app behavior or export compatibility.
- Fix this bug and add the smallest test or validation check that proves it.
