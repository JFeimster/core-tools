# Airtable Lightweight CRM Base Playbook

## When To Use

Use this when a small team needs a structured CRM base with clear records, stages, and owner fields.

## Required Inputs

- CRM goal
- Core tables
- Required fields
- Stage list
- Ownership rules

## Optional Inputs

- Views
- Linked records
- Tags
- Reminder fields

## Workflow Steps

1. Define the workflow and the record types.
2. Create the core tables and fields.
3. Add the stage and owner fields.
4. Build the primary views.
5. Validate the base with sample records.

## Data Fields

- Contact name
- Company
- Stage
- Owner
- Source
- Next step

## Automation Logic

- Use linked records only where they help the workflow.
- Keep the stage model small and stable.
- Add reminders or flags when the record gets stale.

## Outputs

- CRM base
- Key views
- Follow-up queue
- Stale record view

## Validation Checks

- Tables are necessary and minimal
- Fields are named clearly
- Views match the workflow
- Sample records behave correctly

## Failure / Stop Conditions

- Overlinked schema
- Too many fields
- Confusing stage model
- Unclear ownership

## Handoff Notes

- Keep the base easy to explain to the next operator.
- Avoid building a schema that requires custom maintenance docs just to use it.
