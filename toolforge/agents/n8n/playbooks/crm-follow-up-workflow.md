# n8n CRM Follow-Up Workflow

## When To Use

Use this when a CRM needs a structured follow-up sequence based on stage, age, or status changes.

## Required Inputs

- CRM stage map
- Follow-up cadence
- Contact fields
- Owner rules
- Stop conditions

## Optional Inputs

- Objection notes
- Trigger events
- SMS or email channel
- Re-engagement window

## Workflow Steps

1. Detect the stage or status change.
2. Determine whether the contact is eligible for follow-up.
3. Choose the correct message or task branch.
4. Send the follow-up or create the next task.
5. Log the result back to the CRM.

## Data Fields

- Contact name
- Contact method
- Pipeline stage
- Last touch date
- Next follow-up date
- Owner

## Automation Logic

- Only send follow-up if the contact meets the stage rules.
- Stop after the configured number of touches.
- Escalate to a human when the status is unclear.

## Outputs

- Follow-up action
- CRM log entry
- Task or message record
- Escalation note if needed

## Validation Checks

- Stage mapping is valid
- Contact method exists
- Follow-up count is within bounds
- Log write succeeded

## Failure / Stop Conditions

- Missing contact record
- Invalid stage
- Delivery failure
- Duplicate follow-up already sent

## Handoff Notes

- Keep the final touch respectful and bounded.
- Preserve a clear opt-out or stop rule.
