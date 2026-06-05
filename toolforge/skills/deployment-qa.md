# Skill Name

Deployment QA

## Purpose

Verify that a Core Tools change still deploys and behaves correctly on the live site.

## Ideal User

Developers, operators, and reviewers responsible for shipping safe static sites.

## Triggering Use Cases

- Post-build QA
- Preview deployment review
- Live route checks
- Static export verification

## Required Inputs

- Deployment URL
- Route list
- Build logs
- Known risks

## Process

1. Confirm the deployment target.
2. Check build logs.
3. Smoke-test the public routes.
4. Verify generated JSON behavior.
5. Record any regressions.

## Output Format

- Deployment status
- Route status
- Build notes
- Risk notes

## Quality Bar

Nothing hidden should be required to use the public site.

## Guardrails

- Keep static export assumptions intact
- Do not ignore route failures
- Do not skip the generated JSON check

## Example Prompt

> Run deployment QA on this Core Tools change and report route health, build signals, and any static-export risks.

## Compatible Platforms

- Vercel
- Codex
- GitHub Actions
- VS Code

## Related Core Tools Directory Opportunities

- Live directory releases
- Embed route checks
- Static export deployments
