# Prompt Chain

Reusable Codex and ChatGPT prompt protocol for this repository.

## Operating Rules

### Inspect First

Always inspect the repo state before editing. Prefer:

- `README.md`
- `PROJECT_STATE.md`
- `CHANGELOG.md`
- `project-data-snapshot.json`
- the relevant source or data files

### Batch Mode

When the user asks for a batch, group related file work into one pass, then validate once.

### One-File Mode

When the user asks for a single file, do only that file and stop after validation and review.

### Review Before Commit

Do not commit until the batch is validated and reviewed.

## Connector-Friendly Actions

When a connector is available, prefer a direct action path such as:

- inspect repo files
- verify build logs
- check the deployed site
- confirm the latest commit or workflow result

If a connector is unavailable, fall back to local git and shell commands.

## Manual Git Fallback

Use local git commands for:

- status checks
- diffs
- validation
- staging
- committing

Avoid destructive git commands unless explicitly requested.

## Prompt Templates

### Docs Batch

> Inspect the current repo docs and create the requested documentation batch only. Validate once, then stop for review before committing.

### Data Batch

> Inspect the current data sources and validation rules first. Make only the requested data-safe edits, validate once, and stop for review before committing.

### Validation Pass

> Run the repo validation commands once, report the results plainly, and stop if anything needs review before commit.

### Feature Work

> Inspect the relevant source files first, implement the smallest safe change, validate, then report what changed and what still needs review.

## Commit Gate

Only commit when:

- the changed file set is expected
- validation passes
- generated artifacts are accounted for
- the user has approved the batch or file

## Best Practice

Keep the prompt chain short, explicit, and anchored to the repo's current state rather than to stale memory.
