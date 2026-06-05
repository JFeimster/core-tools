# Repo Cleanup Playbook

## Purpose

Use this playbook for safe maintenance work that reduces repo noise without changing application behavior.

## Inputs

- Current git status
- Current branch
- Validation commands
- Build command

## Steps

1. Confirm the working tree is clean or understand the dirty files.
2. Inspect the files that are part of the cleanup batch.
3. Make only the approved edits.
4. Run `npm run validate:data`.
5. Run `npm run build`.
6. Remove generated artifacts if build creates them.
7. Recheck git status.

## Guardrails

- Do not edit app logic unless the batch explicitly calls for it.
- Do not hand-author generated files.
- Do not push before review.
- Keep the change set limited to the batch.

## Outputs

- Clean or intentionally dirty working tree
- Validation result
- Build result
- Short review summary

## Validation Checks

- No unexpected files
- No broken JSON
- No generated artifacts left tracked

## Stop Conditions

- New warnings that were not part of the plan
- Build failure
- Mismatched file scope
