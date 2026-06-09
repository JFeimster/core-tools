# Registry Architecture

`data/` contains app-consumed public-safe data.

- `data/tools.json` is the public tool list consumed by the app.
- `data/collections.json` is the public collection list consumed by the app.
- `data/tag-taxonomy.json` is the tag control file.
- `data/public-tool-index.json` is a lightweight public projection.

`registries/` contains internal planning, routing, and artifact intelligence.

- Internal registry files may include provider routing, affiliate notes, and compliance logic.
- These files are not public app data.
- Public projections must sanitize or block internal fields before anything reaches `data/tools.json`.

