# Data Quality Rules

- Keep public app data in `data/`.
- Keep internal routing and backlog logic in `registries/`.
- Keep per-tool static artifacts in `tools/[slug]/`.
- Do not hand-author generated files.
- Do not leak internal affiliate/provider fields into public data.
- Resolve unknown tags by expanding `data/tag-taxonomy.json` first.
- Treat tag renames in `data/tools.json` as a separate cleanup batch from taxonomy expansion.
- Normalize higher-frequency tags before edge-case tags.
- Validate before build.
