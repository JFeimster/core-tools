# Artifact Review Playbook

## When To Use

Use this playbook when Claude needs to review docs, JSON, or generated artifacts for correctness.

## Inputs

- Artifact files
- Expected schema or purpose
- Source docs
- Known warnings

## Steps

1. Compare the artifact to the source docs.
2. Check for stale or invented content.
3. Separate hard defects from cleanup notes.
4. Verify the artifact still fits the repo's static workflow.
5. Summarize only the useful findings.

## Outputs

- Findings
- Risk notes
- Cleanup suggestions
- Review recommendation

## Validation Checks

- Every issue points to a source mismatch or schema issue
- Generated files are not treated like authored source
- The review stays focused on correctness

## Failure / Stop Conditions

- The artifact cannot be tied back to source files
- The review starts inventing new requirements
- The artifact needs implementation changes outside scope

## Follow-Up Prompts

- "Turn these findings into a short batch plan."
- "Separate hard failures from cleanup-only issues."
