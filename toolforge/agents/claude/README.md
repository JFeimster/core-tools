# Claude Operating Guide

Use this pack for Claude workflows that need long-context repo review, artifact critique, and structured project setup.

## Purpose

Claude is strongest when the task needs extended context, careful reading, and a clean summary of repo state, docs, and generated artifacts.

## Best Use Cases

- Setting up a Claude project around the current repo
- Reviewing docs or generated artifacts for drift
- Synthesizing long repo context into a short handoff
- Turning source docs into a practical project brief

## Repo Safety Rules

- Keep the work static-export safe.
- Use source files and snapshots, not memory alone.
- Do not introduce runtime APIs, auth, or database requirements.
- Stop if the brief depends on unsupported behavior.

## Compatible Workflows

- [toolforge/skills/project-knowledge-sync.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/project-knowledge-sync.md)
- [toolforge/skills/repo-cleanup.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/repo-cleanup.md)
- [toolforge/skills/data-validation.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/data-validation.md)
- [toolforge/skills/github-pr-review.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/github-pr-review.md)

## Related Skills

- `project-knowledge-sync`
- `repo-cleanup`
- `data-validation`
- `github-pr-review`

## Example Prompts

- Build a Claude project brief from the current Core Tools docs and snapshot.
- Review these docs for stale references and conflicting guidance.
- Synthesize the repo's current state into a compact handoff for the next batch.
