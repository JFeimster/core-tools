# Codebase Editing Playbook

## When To Use

Use this playbook for normal Cursor editing sessions that need a small, reviewable change set.

## Inputs

- Objective
- Branch name
- File list
- Validation commands
- Risk boundaries

## Steps

1. Inspect the branch and current working tree.
2. Open only the files in scope.
3. Make the smallest safe edit.
4. Validate data if JSON changed.
5. Build the app.
6. Clean generated artifacts.

## Outputs

- Edited files
- Validation result
- Build result
- Review notes

## Validation Checks

- The diff matches the objective
- No unrelated files changed
- The build still exports cleanly

## Failure / Stop Conditions

- The edit needs a larger refactor than planned
- The diff starts growing across unrelated files
- Validation or build fails

## Follow-Up Prompts

- "Trim the diff to the smallest safe patch."
- "Document the remaining follow-up work before the next edit."
