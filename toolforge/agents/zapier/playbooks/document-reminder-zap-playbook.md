# Zapier Document Reminder Zap Playbook

## When To Use

Use this when a deal or intake flow needs a reminder to request missing documents.

## Required Inputs

- Trigger event
- Missing document list
- Reminder channel
- Stop rule
- Owner

## Optional Inputs

- Reminder cadence
- Template message
- Escalation path
- Completion check

## Workflow Steps

1. Detect the missing document state.
2. Send the reminder to the contact or internal owner.
3. Wait for the next status check.
4. Stop once the docs are received.
5. Escalate if the reminder is ignored past the limit.

## Data Fields

- Contact name
- Requested documents
- Due date
- Reminder count
- Status

## Automation Logic

- Only send reminders when documents are still missing.
- Stop after the configured number of reminders.
- Escalate to human review if the status is stale.

## Outputs

- Reminder message
- Status update
- Escalation note
- Completion flag

## Validation Checks

- Missing-document list is current
- Reminder channel is valid
- Stop rule is configured
- Completion check works

## Failure / Stop Conditions

- No missing document state
- Invalid contact channel
- Reminder limit reached
- Completion already recorded

## Handoff Notes

- Keep the reminder copy short and polite.
- Avoid sending reminders after the workflow has been satisfied.
