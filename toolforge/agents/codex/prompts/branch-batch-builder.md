# Prompt: Branch Batch Builder

Create a feature branch for the approved batch, inspect only the relevant files, implement the change set, validate locally, clean generated artifacts, commit the batch, push the branch, and prepare a PR for review. Keep the batch tightly scoped and do not add runtime features that conflict with Core Tools static export.

## Output Requirements

- Branch name
- Commit SHA
- PR URL
- Validation result
- Build result

## Stop Condition

Stop if the batch scope is unclear or the schema does not support the requested change.
