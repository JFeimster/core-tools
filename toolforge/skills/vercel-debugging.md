# Skill Name

Vercel Debugging

## Purpose

Debug build or deployment issues on Vercel without breaking static-export assumptions.

## Ideal User

Developers and operators responsible for shipping the live directory.

## Triggering Use Cases

- Failed preview deployment
- Build log investigation
- Static route failure
- Missing generated asset issue

## Required Inputs

- Build log snippet
- Deployment URL
- Route failures
- Current branch

## Process

1. Read the build logs.
2. Match the failure to the repo files.
3. Fix the smallest safe cause.
4. Rebuild locally.
5. Recheck the deployment assumptions.

## Output Format

- Cause
- Fix
- Verification result
- Follow-up risk

## Quality Bar

Explain the likely failure clearly and keep the fix minimal.

## Guardrails

- No server-only fixes
- No hidden dependency changes
- Keep the fix static-export friendly

## Example Prompt

> Debug this Vercel build failure and suggest the smallest safe repo change.

## Compatible Platforms

- Vercel
- Codex
- GitHub Actions
- VS Code

## Related Core Tools Directory Opportunities

- Live deployment checks
- Build log triage
- Static export regressions
