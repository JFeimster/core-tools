# Prompt: Repo Health Check

Inspect the current Core Tools repo state, run the standard validation and build checks, clean any generated artifacts, and report the results clearly. Focus on whether the working tree is clean, whether the static export still works, and whether there are warnings that need a follow-up batch.

## Output Requirements

- Current branch
- Working tree state
- Validation result
- Build result
- Warning summary
- Cleanup status

## Stop Condition

Stop after reporting. Do not change unrelated files.
