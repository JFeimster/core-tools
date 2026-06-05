# Static Export Deploy Check

## Purpose

Use this playbook to confirm that a deployment is compatible with the Core Tools static-export model.

## Steps

1. Verify the branch or preview deployment target.
2. Check the build logs for prebuild and build success.
3. Confirm generated `public/tools.json` exists during build.
4. Smoke-test the live routes.
5. Record any route or asset failures.

## Guardrails

- Keep the check aligned to static export
- Do not require server runtime logs
- Do not treat generated assets as hand-authored

## Inputs

- Deployment URL
- Build logs
- Route list

## Outputs

- Deployment status
- Route health summary
- Generated asset check result

## Stop Conditions

- Build failure
- Missing generated JSON
- Broken live route
