# Project Knowledge Pack Playbook

## When To Use

Use this playbook when ChatGPT needs a compact project knowledge pack for Core Tools.

## Inputs

- Current branch
- Snapshot file
- README and roadmap docs
- Any new batch docs
- Files to exclude

## Steps

1. Read the repo summary files first.
2. Collect only the source-backed facts.
3. Group the facts by state, workflow, and next actions.
4. Exclude generated outputs and transient build files.
5. Write a short update that future threads can trust.

## Outputs

- Project knowledge summary
- Source file list
- Excluded files list
- Next-file recommendations

## Validation Checks

- Every fact maps to a file or commit
- No generated artifacts are listed as source
- The pack stays short enough to skim quickly

## Failure / Stop Conditions

- The snapshot conflicts with the docs
- The branch state is unclear
- The pack starts repeating the repo docs verbatim

## Follow-Up Prompts

- "Refresh this knowledge pack after the next batch."
- "Trim this pack to only the files a new thread needs."
