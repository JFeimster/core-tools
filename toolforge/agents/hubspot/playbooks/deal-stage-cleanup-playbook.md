# HubSpot Deal Stage Cleanup Playbook

## When To Use

Use this when the pipeline has stale records, messy stage labels, or inconsistent ownership.

## Required Inputs

- Current pipeline stages
- Cleanup goal
- Ownership rules
- Stale record criteria
- Reporting needs

## Optional Inputs

- Migration notes
- Reminder rules
- Segment labels
- Audit fields

## Workflow Steps

1. Review the current stage map.
2. Identify duplicate or confusing stages.
3. Decide which records need stage movement.
4. Clean up ownership and stale items.
5. Validate the pipeline after the change.

## Data Fields

- Deal ID
- Stage
- Owner
- Last touch
- Next step
- Cleanup status

## Automation Logic

- Remove stage drift before touching reporting.
- Keep the cleanup plan visible to the team.
- Escalate unclear records to human review.

## Outputs

- Cleaned stage map
- Cleanup checklist
- Stale record list
- Owner fix list

## Validation Checks

- Stage labels are unique
- Records landed in the right stage
- Ownership is assigned
- Stale records are flagged correctly

## Failure / Stop Conditions

- Conflicting stage rules
- Missing ownership data
- Overly broad cleanup scope
- Repeated stage mismatches

## Handoff Notes

- Keep the cleanup batch small.
- Validate the pipeline before adding new automation.
