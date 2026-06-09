# Zapier Lead Capture to CRM Playbook

## When To Use

Use this when a form, landing page, or partner referral needs to create or update a CRM record automatically.

## Required Inputs

- Trigger source
- CRM destination
- Required fields
- Owner rules
- Duplicate handling

## Optional Inputs

- Tagging rules
- Source mapping
- Notification rules
- Human review branch

## Workflow Steps

1. Capture the submission.
2. Map incoming fields to CRM fields.
3. Check for duplicates.
4. Create or update the CRM record.
5. Notify the owner or queue the next task.

## Data Fields

- Name
- Email
- Phone
- Source
- Campaign
- Owner

## Automation Logic

- If the record already exists, update it rather than duplicating it.
- If required fields are missing, stop and flag the record.
- If the destination fails, send the item to manual review.

## Outputs

- CRM record
- Owner notification
- Source tag
- Error note if needed

## Validation Checks

- Field map is complete
- Destination is reachable
- Duplicate logic is correct
- Notification step succeeded

## Failure / Stop Conditions

- Missing required fields
- Invalid CRM field mapping
- Duplicate contact conflict
- Delivery failure

## Handoff Notes

- Keep the source map visible in the spec.
- Preserve a manual fallback for edge cases.
