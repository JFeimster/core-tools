# Local Dev Workflow

## Purpose

Use this playbook to open the repo locally, inspect the current state, and make controlled edits in the editor.

## Steps

1. Open the repo root in the editor.
2. Check the current branch and working tree.
3. Inspect the target files.
4. Edit only the approved scope.
5. Run validation and build from the terminal.
6. Clean generated artifacts.
7. Review the final diff.

## Guardrails

- Keep the repo static-export safe
- Do not hand-edit generated outputs
- Keep the diff limited to the intended batch

## Inputs

- Repo root
- Branch name
- File list
- Validation command

## Outputs

- Saved file changes
- Validation result
- Build result

## Stop Conditions

- Unexpected file churn
- Validation failure
- Build failure
