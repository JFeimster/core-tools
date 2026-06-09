# Refactor Safety Playbook

## When To Use

Use this playbook when a refactor could improve the code but might accidentally change behavior.

## Inputs

- File(s) to refactor
- Risky behavior to preserve
- Validation commands
- Test or build coverage

## Steps

1. Identify the behavior that must not change.
2. Refactor one unit at a time.
3. Validate after each meaningful change.
4. Compare the new behavior to the original intent.
5. Stop if the refactor spreads beyond the plan.

## Outputs

- Refactored code
- Risk notes
- Validation result
- Follow-up items

## Validation Checks

- Public behavior is unchanged
- Static export is still valid
- The refactor remains understandable

## Failure / Stop Conditions

- The refactor needs architecture changes
- Behavior is no longer easy to prove
- Validation fails after the change

## Follow-Up Prompts

- "List the behavior that must remain unchanged."
- "Split the refactor into a smaller batch."
