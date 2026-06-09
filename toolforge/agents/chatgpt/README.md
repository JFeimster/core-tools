# ChatGPT Operating Guide

Use this pack for ChatGPT workflows that turn Core Tools repo knowledge into usable specs, prompt packs, and safe build instructions.

## Purpose

ChatGPT is best for converting repo context into structured instructions: custom GPT specs, project knowledge packs, and action-design notes that stay compatible with the repo's static-export model.

## Best Use Cases

- Drafting a Custom GPT spec for a ToolForge workflow
- Refreshing project knowledge from the current repo state
- Auditing instruction sets for unsupported runtime assumptions
- Converting docs into copy/paste prompt assets

## Repo Safety Rules

- Keep Core Tools static-export safe.
- Do not add server actions, auth, database, or API dependencies to the app.
- Use repo docs and snapshots as source material, not guesses.
- Stop if the task requires runtime behavior that the repo does not support.

## Compatible Workflows

- [toolforge/skills/tool-spec-writer.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/tool-spec-writer.md)
- [toolforge/skills/project-knowledge-sync.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/project-knowledge-sync.md)
- [toolforge/skills/data-validation.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/data-validation.md)
- [toolforge/skills/deployment-qa.md](/C:/Users/jason/Documents/GitHub/core-tools/toolforge/skills/deployment-qa.md)

## Related Skills

- `tool-spec-writer`
- `project-knowledge-sync`
- `data-validation`
- `deployment-qa`

## Example Prompts

- Draft a Custom GPT spec for the AI Platform Build Pack using only repo-safe sources.
- Refresh the project knowledge pack from the latest ToolForge docs and snapshot files.
- Audit this GPT instruction set for unsupported runtime assumptions and missing guardrails.
