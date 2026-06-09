# GoHighLevel SMS Follow-Up Campaign Playbook

## When To Use

Use this when a lead or partner needs a short SMS sequence that nudges action without becoming spam.

## Required Inputs

- Audience
- Campaign goal
- Message sequence
- Stop rule
- Owner

## Optional Inputs

- Time delay
- Personalization fields
- Escalation path
- Reply handling

## Workflow Steps

1. Define the campaign goal.
2. Write the SMS sequence.
3. Set the delay and stop rules.
4. Add the reply handling path.
5. Test the sequence with a sample contact.

## Data Fields

- Contact name
- Phone
- Stage
- Last touch
- Next touch
- Reply status

## Automation Logic

- Stop when the contact replies or converts.
- Keep the sequence short.
- Escalate when the contact needs human attention.

## Outputs

- SMS sequence
- Reply queue
- Stop flag
- Escalation note

## Validation Checks

- Phone field is present
- Stop rule works
- Reply handling works
- Sample contact receives the expected path

## Failure / Stop Conditions

- Missing phone number
- Opt-out or stop request
- Delivery failure
- Repeated message error

## Handoff Notes

- Keep the tone direct and respectful.
- Avoid writing more touches than the funnel needs.
