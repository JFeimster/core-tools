# ToolForge Agents

This directory contains platform-specific instructions for agent workflows that touch Core Tools.

## Purpose

The files here define how different agent environments should operate against this repo without breaking static-export assumptions or data validation.

## Use Cases

- Choosing the right operating style for a given platform
- Standardizing prompts, templates, and playbooks
- Keeping role, inputs, outputs, and stop conditions explicit
- Making future handoffs to agents consistent

## When To Use It

Use the platform folder that matches the environment you are working in. If the environment is mixed, read the shared ToolForge README first and then the platform-specific instructions.

## How It Fits Core Tools

- Keeps agent actions aligned with repo constraints
- Supports repo maintenance without drifting into app logic changes
- Makes build and validation expectations explicit
- Gives future utility-expansion batches a reusable operating base

## Platform Index

- ChatGPT: custom GPT specs, project knowledge packs, and action design notes
- Claude: long-context repo reviews, setup briefs, and artifact review
- Cursor: branch editing, refactor safety, and test-backed fixes
- Windsurf: cascade iteration, static section work, and UI polish
- n8n: webhook intake, CRM follow-up, and funding lead routing
- Zapier: lead capture, reminder zaps, and lightweight handoffs
- Make: multi-step routers and structured automation scenarios
- Google Sheets: funding trackers, intake logs, and status sheets
- Airtable: lightweight CRM bases and partner pipeline records
- HubSpot: funding pipeline setup and deal-stage cleanup
- GoHighLevel: funnel follow-up and SMS campaigns
- Slack: operator alerts and team handoffs
- Discord: community onboarding and affiliate ops
- Codex: batch-based repo automation
- Jules: bounded repo tasks and review-ready outputs
- VS Code: local editor-driven implementation work
- GitHub Actions: CI validation and build checks
- Vercel: deployment QA and static-export checks
- Notion: project knowledge sync and research handoff

## Notion Notes

- Notion now includes client intake dashboard and affiliate resource hub playbooks, plus a database schema template and a dashboard prompt.
