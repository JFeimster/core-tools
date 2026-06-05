# Skill Name

Project Knowledge Sync

## Purpose

Keep project knowledge and repo state aligned for future agent sessions.

## Ideal User

AI automation operators, founders, and maintainers who revisit the repo often.

## Triggering Use Cases

- Update project memory
- Capture repo state after a batch
- Refresh next-file guidance
- Prevent stale context drift

## Required Inputs

- Current repo state
- Recent commits
- Docs and data summary
- Next-step intent

## Process

1. Read the current repo summary files.
2. Identify changed behavior or structure.
3. Update the knowledge snapshot.
4. Note gaps and next steps.
5. Keep the summary compact.

## Output Format

- Updated knowledge note
- Known gaps
- Next actions

## Quality Bar

Accurate, current, and concise.

## Guardrails

- Do not invent state
- Do not overwrite repo docs
- Keep the summary portable

## Example Prompt

> Sync project knowledge for Core Tools and call out any stale assumptions or next-step files.

## Compatible Platforms

- Notion
- Codex
- Jules
- ChatGPT-style agents

## Related Core Tools Directory Opportunities

- Project-data snapshots
- Docs refresh batches
- Handoff notes
