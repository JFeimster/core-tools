# Static Site Build Playbook

## Purpose

Use this playbook for static-export-safe changes that should still pass local validation and production build checks.

## Inputs

- Files to inspect
- Static export settings
- Validation command
- Build command

## Steps

1. Inspect static-export assumptions first.
2. Confirm the change does not require server-side runtime features.
3. Update the approved files.
4. Validate the data layer if the batch touches JSON.
5. Build the app locally.
6. Clean generated artifacts.
7. Review the output and status.

## Guardrails

- Keep the app compatible with `output: "export"`.
- Do not introduce auth, database, or server actions.
- Do not leave generated files in the working tree.

## Outputs

- Build pass/fail
- Artifact cleanup status
- Review notes for the next step

## Validation Checks

- Validation command passes
- Build command passes
- Static routes still render

## Stop Conditions

- Any runtime-only dependency
- Any regression in export output
- Any mismatch between docs and current build behavior
