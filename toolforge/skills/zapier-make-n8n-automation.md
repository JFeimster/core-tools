# Skill Name

Zapier, Make, and n8n Automation

## Purpose

Map an automation workflow into steps, triggers, actions, and safe handoff notes.

## Ideal User

Operators who automate intake, routing, reminders, or content handoffs.

## Triggering Use Cases

- Automation map
- Trigger/action design
- Handoff routing
- Lightweight workflow automation

## Required Inputs

- Trigger
- Action list
- Source and destination apps
- Error risk

## Optional Inputs

- Human fallback
- Timing rules
- Data checks

## Process

1. Define the trigger event.
2. Map the smallest useful action chain.
3. Add human fallback points.
4. Note any validation or retry needs.
5. Keep the build small enough to test.

## Output Format

- Automation map
- Trigger/action list
- Error handling notes
- Handoff notes

## Quality Bar

Practical, testable, and safe to hand to an automation builder.

## Guardrails

- Do not skip validation
- Do not automate unsafe approvals
- Keep the workflow bounded

## Compliance / Risk Notes

- If the automation touches sensitive records, add a review step before live use.

## Example Prompt

> Map this workflow into a safe Zapier, Make, or n8n automation with a human fallback.

## Compatible Platforms

- Codex
- ChatGPT
- Notion
- VS Code

## Related Core Tools Directory Opportunities

- Automation ops packs
- Intake routing tools
- Human-in-the-loop workflows

## Suggested CTA or Artifact

- Automation map
