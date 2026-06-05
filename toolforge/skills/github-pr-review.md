# Skill Name

GitHub PR Review

## Purpose

Review a pull request for scope, risk, and repo-fit before merge.

## Ideal User

Maintainers, reviewers, and AI agents supporting PR triage.

## Triggering Use Cases

- PR review
- Diff inspection
- Risk assessment
- Merge readiness check

## Required Inputs

- PR diff
- Validation output
- Build output
- Target branch

## Process

1. Read the change set.
2. Check for unintended scope.
3. Verify validation and build signals.
4. Call out risks and missing tests.
5. Recommend approve, revise, or block.

## Output Format

- Findings
- Risk summary
- Recommendation

## Quality Bar

Clear, prioritized, and specific to the change.

## Guardrails

- Focus on real risk, not style preference
- Flag scope creep
- Do not ignore build or validation failures

## Example Prompt

> Review this Core Tools PR for bugs, scope creep, and validation gaps before merge.

## Compatible Platforms

- GitHub
- Codex
- Jules
- GitHub Actions

## Related Core Tools Directory Opportunities

- ToolForge PRs
- Docs batches
- Data cleanup batches
