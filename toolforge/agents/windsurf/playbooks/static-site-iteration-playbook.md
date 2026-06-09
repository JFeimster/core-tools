# Static Site Iteration Playbook

## When To Use

Use this playbook when a static page needs a small, reviewable improvement cycle.

## Inputs

- Page route
- Section goal
- Copy or content source
- Validation and build commands

## Steps

1. Inspect the current page structure.
2. Change only the section that needs improvement.
3. Keep the layout simple and export-safe.
4. Validate the data if JSON changed.
5. Build the app and review the generated routes.

## Outputs

- Updated section or page
- Validation result
- Build result
- Remaining polish notes

## Validation Checks

- The page still exports cleanly
- The edit matches the original route purpose
- No unrelated layout regressions appeared

## Failure / Stop Conditions

- The change requires runtime APIs
- The page depends on unsupported data flow
- The iteration is turning into a new feature

## Follow-Up Prompts

- "Turn this into a narrower section-only pass."
- "List the minimal cleanup items left after this iteration."
