# Local Validation Playbook

## Purpose

Use this playbook when the goal is to verify a repo change locally before any GitHub or Vercel action.

## Steps

1. Check the current branch and working tree.
2. Inspect the files in scope.
3. Run the relevant repo validation.
4. Run the build.
5. Clean generated artifacts.
6. Recheck git status.

## Guardrails

- Keep edits local until validation is clean
- Do not push before the results are reviewed
- Do not ignore warnings without recording them

## Inputs

- Current repo state
- Validation command
- Build command

## Outputs

- Pass/fail status
- Warnings summary
- Final git status

## Stop Conditions

- Build failure
- Data validation failure
- Any unexpected file churn
