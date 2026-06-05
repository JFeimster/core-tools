# Repo Maintenance SOP

Safe maintenance procedure for the Core Tools repo.

## Branching

- Use `main` for the current stabilization workflow unless the user requests a branch.
- If a branch is needed, use a `codex/` prefix by default.

## Clean Workspace Check

1. Run `git status --short`
2. Confirm only the intended files are dirty
3. Remove generated artifacts before commit when needed

## Install Behavior

- Run `npm install` only when dependencies or lockfile state require it.
- Expect local installs to create `node_modules/`, which should remain untracked.

## Validation Flow

1. Run `npm run validate:data`
2. Run `npm run build`
3. Review warnings before moving to commit

## Generated Artifact Cleanup

After a build or prebuild, clean local artifacts if needed:

- `.next/`
- `out/`
- `public/tools.json`

Keep `public/tools.json` untracked and generated only.

## Commit Format

- Use short imperative messages.
- Prefer one topic per commit.
- Keep documentation batches separate from data batches when practical.

## Push And Deployment Caution

- Do not push until validation is complete and the user approves.
- Do not assume a local build guarantees deployment success.
- Verify static-export compatibility before changing routes or build behavior.

## Rollback Notes

- Revert only the files in the current batch if something goes wrong.
- Do not use hard resets unless explicitly requested.
- Preserve unrelated user changes.

## Static Export Constraints

- Keep the app compatible with `output: "export"`.
- Avoid introducing backend-only dependencies or runtime assumptions.

## Do-Not-Hand-Author

- `public/tools.json`

## Maintenance Checklist

- Keep docs aligned with actual repo state.
- Keep generated files ignored.
- Keep validation warnings documented.
- Refresh project knowledge when routes, scripts, or data rules change.
