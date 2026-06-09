# Funding Tools Promotion Workflow

Funding tools begin in `registries/funding-tools.registry.json`.

Promotion flow:

1. Validate the registry record.
2. Project public-safe fields into `data/tools.json`.
3. Update `data/collections.json` with matching collection slugs.
4. Scaffold per-tool artifact folders under `tools/[slug]/`.
5. Validate and build.

Internal registry fields stay internal. Public data should never expose provider routing or affiliate logic.

