# Google Sheets Funding Tracker Playbook

## When To Use

Use this when funding leads, applications, or document requests need a simple tracker with clear statuses.

## Required Inputs

- Tracking goal
- Stage list
- Ownership rules
- Reminder cadence
- Required columns

## Optional Inputs

- Deal type
- Due dates
- Reminder notes
- Source labels

## Workflow Steps

1. Define the tracker purpose.
2. Build the status and owner columns.
3. Add date and reminder fields.
4. Create a simple review or overdue view.
5. Validate the tracker with sample records.

## Data Fields

- Lead name
- Funding goal
- Stage
- Owner
- Due date
- Reminder status

## Automation Logic

- Mark overdue rows for follow-up.
- Keep the stage list short and stable.
- Use one consistent owner rule.

## Outputs

- Funding tracker sheet
- Overdue view
- Reminder queue
- Status summary

## Validation Checks

- Stage list is correct
- Ownership column is filled
- Due date logic works
- Overdue view is accurate

## Failure / Stop Conditions

- Too many stage variants
- Missing due dates
- Duplicate records
- Broken date logic

## Handoff Notes

- Keep the sheet easy to update in one pass.
- Document the expected update cadence.
