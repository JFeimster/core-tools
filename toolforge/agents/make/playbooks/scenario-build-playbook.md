# Make Scenario Build Playbook

## When To Use

Use this when a workflow needs multiple steps, routers, and well-defined fallbacks in one scenario.

## Required Inputs

- Scenario goal
- Trigger source
- Branch rules
- Target apps
- Fallback path

## Optional Inputs

- Error handling
- Rate limits
- Delay steps
- Logging notes

## Workflow Steps

1. Define the single scenario goal.
2. Map the trigger and the first data transform.
3. Add routing branches.
4. Add the fallback and logging steps.
5. Validate the scenario with one sample payload.

## Data Fields

- Record ID
- Source
- Status
- Branch
- Owner
- Timestamp

## Automation Logic

- Route by the minimum fields required for the decision.
- Stop the branch if data is missing or invalid.
- Keep a fallback route for manual review.

## Outputs

- Routed record
- Scenario log
- Fallback task
- Branch result

## Validation Checks

- Trigger fires correctly
- Branches are mutually exclusive
- Fallback path exists
- Output is written to the right place

## Failure / Stop Conditions

- Missing required trigger data
- Branch logic conflicts
- Destination app fails
- Repeated scenario errors

## Handoff Notes

- Keep the scenario readable for the next operator.
- Avoid over-nesting routers unless the workflow truly needs it.
