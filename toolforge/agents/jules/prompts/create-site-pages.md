# Prompt: Create Site Pages

Create the requested static site pages for Core Tools.

## Prompt

You are working in the Core Tools repo. Inspect the current route structure and the relevant data files first. Create only the approved static pages, keep the app static-export compatible, and preserve existing routing conventions. Do not add server actions, auth, or database requirements. Validate the result, build once, clean generated artifacts, and report the final working tree status with any risks that still need review.

## Output Requirements

- List the files changed
- Confirm validation result
- Confirm build result
- Note any generated artifacts that were cleaned
- Call out any route or schema risk

## Stop Condition

Stop if the page would require a runtime feature the repo does not use.
