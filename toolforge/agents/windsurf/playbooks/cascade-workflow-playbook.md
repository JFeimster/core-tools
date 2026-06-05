# Cascade Workflow Playbook

## When To Use

Use this playbook when Windsurf's cascade-style iteration can help turn a rough idea into a tighter page or section.

## Inputs

- Page or section target
- Desired outcome
- Existing content sources
- Validation commands
- Visual constraints

## Steps

1. Inspect the current page or section.
2. Make one focused improvement at a time.
3. Check the layout after each iteration.
4. Validate when data or routing changes.
5. Stop once the page is clearly better and still export-safe.

## Outputs

- Refined section or page
- Validation result
- UI notes
- Remaining polish items

## Validation Checks

- The section still matches the route model
- The page remains static-export safe
- The iteration improved clarity instead of adding clutter

## Failure / Stop Conditions

- The iteration needs backend logic
- The page starts to rely on unsupported client state
- The polish pass becomes a redesign

## Follow-Up Prompts

- "Refine just the hero and first supporting section."
- "Trim the page back to the minimum useful version."
