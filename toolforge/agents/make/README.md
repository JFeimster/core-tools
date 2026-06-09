# Make Operating Guide

Use this pack for Make scenarios that need multi-step routing, branching, or more complex handoff logic than a single Zap.

## Purpose

Make is best for scenarios that combine branching, routing, and structured handoffs while still staying clear enough to review quickly.

## Best Use Cases

- Multi-step routers
- Automation scenarios with branches
- Record enrichment and handoff flows
- Cross-app workflow orchestration

## Target Users

- Automation operators
- Funding brokers
- Affiliate managers
- Service teams with structured ops

## Repo Safety Rules

- Keep the scenario bounded to one business outcome.
- Do not add runtime assumptions the repo cannot support.
- Keep the output tied to a concrete artifact.
- Prefer simple, reviewable branches over clever logic.

## Related Skills

- `zapier-make-n8n-automation`
- `crm-cleanup`
- `pipeline-follow-up`
- `notion-dashboard-builder`

## Example Prompts

- Build a Make scenario for a multi-step router that sends records to different follow-up paths.
- Create a Make playbook for a funding intake scenario with a human fallback branch.
- Draft a Make scenario spec that keeps the branching simple and reviewable.
