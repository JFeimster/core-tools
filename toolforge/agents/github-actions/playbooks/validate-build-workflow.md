# Validate and Build Workflow Playbook

## Purpose

Use this playbook to verify the repo in CI the same way it is verified locally.

## Steps

1. Check out the repo.
2. Set up Node.
3. Install dependencies.
4. Run `npm run validate:data`.
5. Run `npm run build`.
6. Capture logs and exit status.

## Guardrails

- Do not skip validation
- Do not ignore build output
- Keep the workflow static-export aware

## Inputs

- Repo ref
- Node version
- Validation and build commands

## Outputs

- Workflow status
- Validation logs
- Build logs

## Stop Conditions

- Validation failure
- Build failure
- Missing dependency install step
