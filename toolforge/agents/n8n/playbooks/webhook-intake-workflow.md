# n8n Webhook Intake Workflow

## When To Use

Use this when you need a lightweight intake flow that receives a webhook, validates the payload, and routes the record to the right next step.

## Required Inputs

- Trigger source
- Payload fields
- Routing rules
- Target destination
- Fallback contact path

## Optional Inputs

- Validation rules
- Deduplication rules
- Status labels
- Audit notes

## Workflow Steps

1. Receive the webhook payload.
2. Validate required fields and format.
3. Check for duplicates or missing data.
4. Route the record to the correct branch.
5. Send a status update to the owning team.

## Data Fields

- Lead or request ID
- Name
- Email or phone
- Source
- Status
- Owner

## Automation Logic

- If required fields are missing, stop and flag the record.
- If the record is complete, route by source or intent.
- If routing fails, move to a human review branch.

## Outputs

- Clean intake record
- Routing decision
- Follow-up task
- Error flag if needed

## Validation Checks

- Required fields present
- Duplicate record check passed
- Destination exists
- Status update sent

## Failure / Stop Conditions

- Missing required payload fields
- Invalid email or phone format
- Unknown destination
- Repeated routing failures

## Handoff Notes

- Keep the downstream handoff simple.
- Preserve a manual review step for exceptions.
