# Project Setup Playbook

## When To Use

Use this playbook when a Claude project needs a clean starting brief for Core Tools.

## Inputs

- Repo snapshot
- Current docs
- Branch or commit context
- Goals for the project
- Excluded files

## Steps

1. Read the snapshot and the current docs first.
2. Capture the repo's purpose and current state.
3. List the files that matter most for this project.
4. Note the constraints that keep the repo static-safe.
5. Prepare a short setup brief that can be reused.

## Outputs

- Claude project brief
- Source file list
- Constraint summary
- Suggested follow-up prompt

## Validation Checks

- The brief is source-backed
- The brief is short enough to scan
- No generated artifact is listed as a source

## Failure / Stop Conditions

- The repo state conflicts across source files
- The setup brief becomes a long essay
- The project needs unsupported runtime behavior

## Follow-Up Prompts

- "Trim this brief to the five files a new thread needs."
- "Add any missing repo constraints without expanding the scope."
