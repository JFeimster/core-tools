# Known Issues

Current non-blocking issues and cleanup queue for Core Tools.

## Issue List

| Severity | Area | Issue | Recommended Fix | Blocks Deploy |
|---|---|---|---|---|
| Medium | Data quality | Unknown tag warnings still appear during `validate:data` | Expand taxonomy coverage first, then normalize `data/tools.json` tags later | No |
| Medium | Data quality | Some generated tool labels may still contain pasted transcript artifacts | Clean labels in the source data | No |
| Medium | CTA hygiene | Some CTA URLs may need final partner review | Replace or confirm destinations | No |
| Low | Generated artifacts | Build output can recreate `.next/`, `out/`, and `public/tools.json` | Keep them ignored and clean them after local builds when needed | No |
| Low | Static export | App must stay compatible with `output: "export"` | Avoid backend-only features | No |
| Low | Runner capability | Formula runner is arithmetic-only | Extend runner code if more logic is needed | No |
| Low | Schema hardening | Validator warnings are not yet all hard failures | Tighten policy after the data is cleaned up | No |

## Cleanup Queue

- Continue taxonomy coverage for high-frequency tags before touching `data/tools.json`.
- Normalize remaining deprecated tags in `data/tools.json` after coverage is in place.
- Clean any lingering label artifacts in source data.
- Review all externally routed CTAs.
- Decide when warnings should become hard errors.

## Notes

- `data/tools.json` has not been changed in this batch.
- None of the items above are currently deployment blockers.
- Keep this list short and current instead of turning it into a backlog dump.
