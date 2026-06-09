# Airtable Affiliate Pipeline Base Playbook

## When To Use

Use this when an affiliate or partner pipeline needs record tracking, stage visibility, and simple follow-up support.

## Required Inputs

- Partner type
- Pipeline stages
- Contact fields
- Follow-up rules
- Ownership rules

## Optional Inputs

- Commission notes
- Disclosure fields
- Reminder status
- Source labels

## Workflow Steps

1. Define the partner lifecycle.
2. Build the core record and stage fields.
3. Add the follow-up and disclosure fields.
4. Create the primary views.
5. Validate the base with one sample partner record.

## Data Fields

- Partner name
- Offer
- Stage
- Owner
- Referral source
- Next action

## Automation Logic

- Move records through stages without losing disclosure fields.
- Flag stale partners for follow-up.
- Keep the record model aligned to one partner workflow.

## Outputs

- Affiliate base
- Partner view
- Follow-up queue
- Stale partner view

## Validation Checks

- Partner stages are complete
- Follow-up fields are usable
- Views match the funnel
- Sample record saves cleanly

## Failure / Stop Conditions

- Conflicting field names
- Missing partner ownership
- Broken stage order
- Overcomplicated schema

## Handoff Notes

- Keep the base easy to maintain with low admin overhead.
- Add only the fields that support a real partner decision.
