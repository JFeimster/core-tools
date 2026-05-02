# Schema Notes

Compact reference for the JSON data shapes powering Core Tool Directory.

## Source Files

| File | Purpose |
|---|---|
| `data/tools.json` | Main tool catalog |
| `data/collections.json` | Curated playbooks / collections |
| `data/tag-taxonomy.json` | Optional controlled tag list |
| `public/tools.json` | Generated client-readable copy of `data/tools.json` |

## Tool Schema

```ts
{
  slug: string;
  brand: string;
  name: string;
  oneLiner?: string;
  pain: string;
  artifact: string;
  inputs: ToolInput[];
  logic: string;
  ctaLabel: string;
  ctaUrl: string;
  tags: string[];
  runner?: ToolRunnerSpec;
}
```

## Tool Fields

| Field | Required | Notes |
|---|---:|---|
| `slug` | Yes | Unique, lowercase kebab-case |
| `brand` | Yes | Display brand / provider |
| `name` | Yes | Public tool name |
| `oneLiner` | No | Short benefit statement |
| `pain` | Yes | Problem the tool solves |
| `artifact` | Yes | Output/report/widget produced |
| `inputs` | Yes | User input fields |
| `logic` | Yes | Human-readable logic summary |
| `ctaLabel` | Yes | Button label |
| `ctaUrl` | Yes | Destination URL |
| `tags` | Yes | At least one tag |
| `runner` | No | Defaults conceptually to `none` |

## Input Schema

### Number/Text Input

```ts
{
  key: string;
  label: string;
  type: "number" | "text";
  placeholder?: string;
  defaultValue?: string;
}
```

### Select Input

```ts
{
  key: string;
  label: string;
  type: "select";
  options: { label: string; value: string }[];
  defaultValue?: string;
}
```

## Input Rules

- `key` must be unique within the tool.
- Use camelCase for `key`.
- Use `number` only for values used in formula runners.
- Use `select` only when options are known and stable.
- Keep labels human-readable; do not pack logic into labels.

## Runner Schema

### No Runner

```ts
{
  type: "none";
}
```

### Formula Runner

```ts
{
  type: "formula";
  outputs: {
    key: string;
    label: string;
    format?: "currency" | "number" | "text";
    expr: string;
    note?: string;
  }[];
}
```

## Formula Runner Rules

Supported expression characters/operators:

```txt
+ - * / ( )
```

Formula runners can reference only numeric input keys.

Good:

```txt
(advanceAmount * factorRate) / 90
```

Bad:

```txt
Math.max(totalPayroll - cashAvailable, 0)
```

Complex logic, conditionals, dates, scoring, caps, and text verdicts require runner code changes before use.

## Collection Schema

```ts
{
  slug: string;
  title: string;
  oneLiner: string;
  audience: string;
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  toolSlugs: string[];
  tags: string[];
}
```

## Collection Rules

- `slug` must be unique.
- `toolSlugs` must reference existing tool slugs.
- Tool order in `toolSlugs` controls display order.
- Collections should map to one clear outcome, not a junk drawer.
- Use collections for partner-ready playbooks, vertical flows, and campaign pages.

## Tag Taxonomy

`data/tag-taxonomy.json` supports:

```json
{
  "allowedTags": [],
  "groups": {},
  "deprecatedTags": {}
}
```

Validator behavior:

- `allowedTags` is the only required field the validator reads.
- Unknown tags create warnings, not errors.
- Missing taxonomy file does not fail validation.
- Deprecated tags stay temporarily allowed until data cleanup.

Current preferred cleanup:

| Deprecated | Preferred |
|---|---|
| `cash-flow` | `cashflow` |
| `pre-qual` | `prequal` |

## Generated Data

`public/tools.json` is generated from `data/tools.json`.

Do not hand-author it.

Run:

```bash
npm run prebuild
```

or:

```bash
npm run build
```

## Validation

Run:

```bash
npm run validate:data
```

The validator checks:

- Required tool fields
- Required collection fields
- Duplicate tool slugs
- Duplicate collection slugs
- Input key uniqueness
- Supported input types
- Formula output references
- Missing collection tool slugs
- Optional tag taxonomy warnings
- Placeholder CTA warnings
