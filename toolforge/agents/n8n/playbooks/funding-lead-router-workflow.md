# n8n Funding Lead Router Workflow

## When To Use

Use this when funding leads need to be sorted into intake, nurture, or partner referral paths automatically.

## Required Inputs

- Lead source
- Funding goal
- Deal size range
- Qualification rules
- Routing destinations

## Optional Inputs

- Risk flags
- State or region
- Product preference
- Contact urgency

## Workflow Steps

1. Capture the lead.
2. Check the minimum qualifying fields.
3. Score the lead against routing rules.
4. Send the lead to the correct destination.
5. Log the decision and the next action.

## Data Fields

- Lead name
- Email
- Phone
- Source
- Funding goal
- Deal size
- Route

## Automation Logic

- If the lead is incomplete, send it to nurture or review.
- If the lead matches a defined route, assign the correct owner.
- If the route is uncertain, send it to human review.

## Outputs

- Routed lead record
- Follow-up task
- Status note
- Exception flag if needed

## Validation Checks

- Required fields present
- Route exists
- Owner or destination is valid
- Status write succeeded

## Failure / Stop Conditions

- Missing minimum fields
- Conflicting routing rules
- Invalid destination
- Repeated failed routing

## Handoff Notes

- Keep the routing rules visible in the spec.
- Preserve a manual review branch for edge cases.
