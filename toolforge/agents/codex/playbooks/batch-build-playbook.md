# Batch Build Playbook

## Purpose

Use this playbook for feature batches that should be implemented, validated, committed, and handed off cleanly.

## Steps

1. Create a feature branch from `main`.
2. Inspect the relevant repo files.
3. Apply the batch changes.
4. Run `npm run validate:data`.
5. Run `npm run build`.
6. Clean generated artifacts.
7. Commit the batch.
8. Push the branch.
9. Create the PR.

## Guardrails

- Keep the batch narrowly scoped
- Do not edit unrelated files
- Do not switch to runtime features that break static export
- Do not hand-author generated files

## Inputs

- Batch objective
- Approved file list
- Validation commands
- Push target

## Outputs

- Commit SHA
- Branch name
- PR URL
- Validation and build results

## Validation Checks

- No JSON/schema errors
- No build errors
- No untracked generated artifacts

## Stop Conditions

- Any validation failure
- Any build failure
- Any merge conflict or schema mismatch
