# Skill Name

Data Validation

## Purpose

Check JSON and content data for schema safety before build or release.

## Ideal User

Developers, builders, and AI automation operators working on structured content.

## Triggering Use Cases

- Schema review
- JSON cleanup
- Tool or collection QA
- Pre-build checks

## Required Inputs

- Target files
- Expected schema
- Known warnings
- Validation command

## Process

1. Inspect the target data.
2. Check required fields and types.
3. Confirm references and tags.
4. Run validation.
5. Review warnings separately from errors.

## Output Format

- Errors
- Warnings
- Cleanup notes
- Next action

## Quality Bar

Clear separation between hard failures and cleanup items.

## Guardrails

- Do not silently ignore warnings
- Do not change data just to hide a warning
- Keep validation rules explicit

## Example Prompt

> Validate these JSON files against the repo rules and separate hard errors from cleanup warnings.

## Compatible Platforms

- Codex
- GitHub Actions
- VS Code
- Notion

## Related Core Tools Directory Opportunities

- Tool and collection validation
- Tag taxonomy hygiene
- Release readiness checks
