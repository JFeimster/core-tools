# GoHighLevel Agency Funnel Playbook

## When To Use

Use this when an agency funnel needs a clear sequence for lead capture, follow-up, and owner handoff.

## Required Inputs

- Funnel goal
- Offer
- Entry point
- Follow-up channels
- Owner rules

## Optional Inputs

- Nurture cadence
- Tag rules
- Escalation path
- Completion criteria

## Workflow Steps

1. Define the funnel goal and audience.
2. Map the entry point and first action.
3. Set the follow-up sequence.
4. Add the owner and escalation rules.
5. Validate the funnel with a sample lead.

## Data Fields

- Lead name
- Source
- Stage
- Owner
- Channel
- Next action

## Automation Logic

- Route by the current funnel stage.
- Stop after the configured number of touches.
- Escalate stale leads for human review.

## Outputs

- Funnel sequence
- Owner queue
- Status update
- Escalation note

## Validation Checks

- Funnel stages are clear
- Stop rules are configured
- Owner assignment works
- Sample lead moves correctly

## Failure / Stop Conditions

- Missing source data
- Conflicting stage logic
- Delivery failure
- Repeated follow-up errors

## Handoff Notes

- Keep the funnel simple enough to maintain manually if needed.
- Preserve opt-out handling where messaging is involved.
