# Tool Artifact Workflow

To add a new tool:

1. Create `tools/[slug]/`.
2. Add `README.md`.
3. Add `tool.config.json`.
4. Add landing and embed artifact folders when the tool needs standalone static surfaces.
5. Add `assets/` for supporting files.
6. Add `exports/` for generated outputs.

Use the registry as the internal source of truth, then project a public-safe record into `data/tools.json`.

