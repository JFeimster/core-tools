# Skill Name

Local Dev Troubleshooting

## Purpose

Diagnose local repo issues quickly without changing the app architecture.

## Ideal User

Developers, founders, and indie builders working directly in the repo.

## Triggering Use Cases

- Local build failure
- Validation failure
- Route failure
- Editor confusion

## Required Inputs

- Error output
- Branch
- Working tree state
- Recent edits

## Process

1. Inspect the error.
2. Check the branch and working tree.
3. Identify the smallest likely cause.
4. Validate the fix locally.
5. Recheck generated artifacts.

## Output Format

- Likely cause
- Fix suggestion
- Verification command

## Quality Bar

Fast, narrow, and reproducible.

## Guardrails

- Do not mask the root cause
- Do not over-edit the repo
- Do not introduce runtime dependencies

## Example Prompt

> Diagnose this local build issue in Core Tools and suggest the smallest safe fix.

## Compatible Platforms

- VS Code
- Codex
- Jules
- ChatGPT-style agents

## Related Core Tools Directory Opportunities

- Local repo debugging
- Build triage
- Static export troubleshooting
