# Skill Name

Repo Cleanup

## Purpose

Remove repo noise, align docs, and keep the working tree clean without changing app behavior.

## Ideal User

Indie builders, consultants, and AI automation operators maintaining a live repo.

## Triggering Use Cases

- Remove generated artifacts
- Tidy docs after a batch
- Verify the tree before commit
- Restore local repo hygiene

## Required Inputs

- Current branch
- Dirty file list
- Validation commands
- Cleanup scope

## Process

1. Inspect the repo state.
2. Remove only generated or approved noise.
3. Validate the repo.
4. Build the app.
5. Recheck the working tree.

## Output Format

- Files cleaned
- Validation result
- Build result
- Final git status

## Quality Bar

No unexpected file churn and no hidden behavior changes.

## Guardrails

- Do not edit app logic unless requested.
- Do not hand-author generated files.
- Do not push before review.

## Example Prompt

> Clean up the repo, validate once, build once, and report the final working tree.

## Compatible Platforms

- Codex
- Jules
- VS Code
- GitHub Actions
- GitHub Copilot-style agents

## Related Core Tools Directory Opportunities

- Repo maintenance batches
- Generated artifact cleanup
- Documentation refreshes
