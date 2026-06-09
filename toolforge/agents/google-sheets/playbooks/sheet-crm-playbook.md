# Google Sheets CRM Playbook

## When To Use

Use this when a simple spreadsheet is the best place to track contacts, pipeline status, or follow-up tasks.

## Required Inputs

- Sheet goal
- Core columns
- Status values
- Ownership rules
- Update cadence

## Optional Inputs

- Filters
- Validation rules
- Notes tab
- Reporting views

## Workflow Steps

1. Define the workflow the sheet supports.
2. Choose the minimum useful columns.
3. Set the status values and owner fields.
4. Add basic filters or views.
5. Validate the sheet with one sample row.

## Data Fields

- Contact name
- Source
- Stage
- Owner
- Next step
- Last update

## Automation Logic

- Use simple validation for status and owner fields.
- Keep the sheet as the source of truth for the workflow.
- Flag stale rows for review.

## Outputs

- Clean tracking sheet
- Status view
- Follow-up queue
- Summary view

## Validation Checks

- Required columns are present
- Status list is complete
- Owner field is usable
- Sample row behaves as expected

## Failure / Stop Conditions

- Too many columns
- Missing owner logic
- Inconsistent status labels
- Broken filters or formulas

## Handoff Notes

- Keep the sheet readable to non-technical users.
- Document any formula logic directly in the tab.
