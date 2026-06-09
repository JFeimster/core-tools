# n8n Operating Guide

Use this pack for n8n workflows that route leads, reminders, and follow-up logic without adding backend code.

## Purpose

n8n is best for multi-step automation that needs routing, branching, and lightweight human fallback inside a static-first repo workflow.

## Best Use Cases

- Funding lead intake routing
- CRM follow-up sequences
- Document reminder automations
- Webhook-driven handoffs

## Target Users

- Funding brokers
- Operators
- Automation builders
- Founders running simple lead ops

## Repo Safety Rules

- Keep the automation spec copy/paste usable.
- Do not assume server actions, auth, or database access.
- Keep every workflow bounded with a clear stop condition.
- Prefer local file references, docs, and collection routes when you need a CTA.

## Related Skills

- `zapier-make-n8n-automation`
- `crm-cleanup`
- `pipeline-follow-up`
- `funding-application-qa`
- `client-intake-workflow`

## Example Prompts

- Build an n8n funding lead router that sends qualified leads to the right follow-up path.
- Create an n8n CRM follow-up workflow with a human fallback for failed matches.
- Draft an n8n webhook intake spec that collects the minimum data needed for a funding handoff.
