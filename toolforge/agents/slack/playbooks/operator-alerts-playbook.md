# Slack Operator Alerts Playbook

## When To Use

Use this when a workflow needs a Slack alert for errors, stale records, or handoff events.

## Required Inputs

- Trigger event
- Alert channel
- Message content
- Owner
- Stop rule

## Optional Inputs

- Severity level
- Escalation path
- Link target
- Quiet hours

## Workflow Steps

1. Detect the event that needs attention.
2. Decide whether the alert is high, medium, or low urgency.
3. Send the alert to the correct channel.
4. Include the owner and next action.
5. Stop or escalate based on response rules.

## Data Fields

- Event type
- Severity
- Owner
- Channel
- Link
- Status

## Automation Logic

- Only alert for the events defined in the spec.
- Escalate if the event remains unresolved.
- Keep the channel volume low and useful.

## Outputs

- Slack alert
- Owner mention
- Status note
- Escalation item

## Validation Checks

- Trigger is correct
- Channel exists
- Message is readable
- Escalation path is valid

## Failure / Stop Conditions

- Missing channel
- Invalid owner
- Alert loop detected
- Repeated delivery failure

## Handoff Notes

- Keep the alert short.
- Include the next action in the message body.
