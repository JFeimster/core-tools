# Make Multi-Step Router Playbook

## When To Use

Use this when a record needs to move through multiple decision points before it reaches the final destination.

## Required Inputs

- Source record
- Decision rules
- Branch destinations
- Stop condition
- Owner

## Optional Inputs

- Enrichment steps
- Retry logic
- Delay logic
- Audit logging

## Workflow Steps

1. Capture the source record.
2. Apply the first decision rule.
3. Enrich or normalize the data if needed.
4. Route to the correct branch.
5. Write the result back to the log or source app.

## Data Fields

- Record ID
- Route
- Decision reason
- Status
- Owner

## Automation Logic

- Branch only after the record has the minimum required fields.
- If the route is uncertain, send it to manual review.
- Log the reason for every branch decision.

## Outputs

- Routed record
- Decision log
- Follow-up task
- Manual review item if needed

## Validation Checks

- Branch rules match the spec
- Required fields are present
- Logging is written
- Fallback branch works

## Failure / Stop Conditions

- Missing record data
- Ambiguous route
- Destination failure
- Repeated branch errors

## Handoff Notes

- Keep the routing map visible.
- Do not bury the fallback branch.
