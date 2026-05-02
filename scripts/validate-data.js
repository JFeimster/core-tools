import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const rootDir = process.cwd();
const toolsPath = resolve(rootDir, "data/tools.json");
const collectionsPath = resolve(rootDir, "data/collections.json");
const tagTaxonomyPath = resolve(rootDir, "data/tag-taxonomy.json");

const SUPPORTED_INPUT_TYPES = new Set(["number", "text", "select"]);
const SUPPORTED_RUNNER_TYPES = new Set(["none", "formula"]);
const SUPPORTED_OUTPUT_FORMATS = new Set(["currency", "number", "text"]);
const FORMULA_ALLOWED_CHARS = /^[a-zA-Z0-9_+\-*/().\s]+$/;

const errors = [];
const warnings = [];

const tools = readJsonArray(toolsPath, "data/tools.json");
const collections = readJsonArray(collectionsPath, "data/collections.json");
const allowedTags = readAllowedTags(tagTaxonomyPath);

validateTools(tools, allowedTags);
validateCollections(collections, new Set(tools.map((tool) => tool.slug)), allowedTags);

if (warnings.length > 0) {
  console.warn("\nData warnings:");
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (errors.length > 0) {
  console.error("\nData validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Data validation passed: ${tools.length} tools, ${collections.length} collections.`
);

function readJsonArray(path, label) {
  try {
    const parsed = JSON.parse(readFileSync(path, "utf8"));

    if (!Array.isArray(parsed)) {
      errors.push(`${label} must contain an array.`);
      return [];
    }

    return parsed;
  } catch (error) {
    errors.push(`${label} could not be read or parsed: ${getErrorMessage(error)}`);
    return [];
  }
}

function readAllowedTags(path) {
  if (!existsSync(path)) return null;

  try {
    const parsed = JSON.parse(readFileSync(path, "utf8"));

    if (!Array.isArray(parsed?.allowedTags)) {
      warnings.push("data/tag-taxonomy.json exists but does not include allowedTags array.");
      return null;
    }

    return new Set(
      parsed.allowedTags
        .filter((tag) => typeof tag === "string")
        .map((tag) => tag.trim())
        .filter(Boolean)
    );
  } catch (error) {
    warnings.push(
      `data/tag-taxonomy.json could not be read or parsed: ${getErrorMessage(error)}`
    );
    return null;
  }
}

function validateTools(items, allowedTags) {
  const seenSlugs = new Set();

  items.forEach((tool, index) => {
    const ref = tool?.slug ? `tool "${tool.slug}"` : `tool at index ${index}`;

    requireString(tool, "slug", ref);
    requireString(tool, "brand", ref);
    requireString(tool, "name", ref);
    requireString(tool, "pain", ref);
    requireString(tool, "artifact", ref);
    requireString(tool, "logic", ref);
    requireString(tool, "ctaLabel", ref);
    requireString(tool, "ctaUrl", ref);

    if (typeof tool?.slug === "string") {
      if (seenSlugs.has(tool.slug)) errors.push(`Duplicate tool slug: ${tool.slug}`);
      seenSlugs.add(tool.slug);
    }

    if (!Array.isArray(tool?.tags) || tool.tags.length === 0) {
      errors.push(`${ref} must include at least one tag.`);
    } else {
      validateTags(tool.tags, allowedTags, ref);
    }

    if (!Array.isArray(tool?.inputs)) {
      errors.push(`${ref} inputs must be an array.`);
    } else {
      validateInputs(tool.inputs, ref);
    }

    validateRunner(tool?.runner, tool?.inputs ?? [], ref);

    if (tool?.ctaUrl === "https://YOUR_PRIMARY_CTA_LINK") {
      warnings.push(`${ref} still uses placeholder CTA URL.`);
    }
  });
}

function validateInputs(inputs, ref) {
  const keys = new Set();

  inputs.forEach((input, index) => {
    const inputRef = `${ref} input at index ${index}`;

    requireString(input, "key", inputRef);
    requireString(input, "label", inputRef);

    if (!SUPPORTED_INPUT_TYPES.has(input?.type)) {
      errors.push(`${inputRef} has unsupported type: ${input?.type}`);
    }

    if (typeof input?.key === "string") {
      if (keys.has(input.key)) errors.push(`${ref} has duplicate input key: ${input.key}`);
      keys.add(input.key);
    }

    if (input?.type === "select") {
      if (!Array.isArray(input.options) || input.options.length === 0) {
        errors.push(`${inputRef} select inputs must include options.`);
      }
    }
  });
}

function validateRunner(runner, inputs, ref) {
  const type = runner?.type ?? "none";

  if (!SUPPORTED_RUNNER_TYPES.has(type)) {
    errors.push(`${ref} has unsupported runner type: ${type}`);
    return;
  }

  if (type === "none") return;

  if (!Array.isArray(runner?.outputs) || runner.outputs.length === 0) {
    errors.push(`${ref} formula runner must include outputs.`);
    return;
  }

  const numericInputKeys = new Set(
    inputs
      .filter((input) => input?.type === "number" && typeof input?.key === "string")
      .map((input) => input.key)
  );

  runner.outputs.forEach((output, index) => {
    const outputRef = `${ref} runner output at index ${index}`;

    requireString(output, "key", outputRef);
    requireString(output, "label", outputRef);
    requireString(output, "expr", outputRef);

    if (output?.format && !SUPPORTED_OUTPUT_FORMATS.has(output.format)) {
      errors.push(`${outputRef} has unsupported format: ${output.format}`);
    }

    if (typeof output?.expr === "string") {
      validateFormulaExpression(output.expr, numericInputKeys, outputRef);
    }
  });
}

function validateFormulaExpression(expr, numericInputKeys, outputRef) {
  if (!FORMULA_ALLOWED_CHARS.test(expr)) {
    errors.push(`${outputRef} expr contains unsupported characters.`);
    return;
  }

  const identifiers = expr.match(/[a-zA-Z_][a-zA-Z0-9_]*/g) ?? [];

  for (const identifier of identifiers) {
    if (!numericInputKeys.has(identifier)) {
      errors.push(`${outputRef} references unknown numeric input: ${identifier}`);
    }
  }
}

function validateCollections(items, toolSlugs, allowedTags) {
  const seenSlugs = new Set();

  items.forEach((collection, index) => {
    const ref = collection?.slug
      ? `collection "${collection.slug}"`
      : `collection at index ${index}`;

    requireString(collection, "slug", ref);
    requireString(collection, "title", ref);
    requireString(collection, "oneLiner", ref);
    requireString(collection, "audience", ref);
    requireString(collection, "primaryCtaLabel", ref);
    requireString(collection, "primaryCtaUrl", ref);

    if (typeof collection?.slug === "string") {
      if (seenSlugs.has(collection.slug)) {
        errors.push(`Duplicate collection slug: ${collection.slug}`);
      }
      seenSlugs.add(collection.slug);
    }

    if (!Array.isArray(collection?.toolSlugs) || collection.toolSlugs.length === 0) {
      errors.push(`${ref} must include at least one toolSlug.`);
    } else {
      for (const slug of collection.toolSlugs) {
        if (!toolSlugs.has(slug)) errors.push(`${ref} references missing tool: ${slug}`);
      }
    }

    if (!Array.isArray(collection?.tags) || collection.tags.length === 0) {
      errors.push(`${ref} must include at least one tag.`);
    } else {
      validateTags(collection.tags, allowedTags, ref);
    }

    if (collection?.primaryCtaUrl === "https://YOUR_PRIMARY_CTA_LINK") {
      warnings.push(`${ref} still uses placeholder CTA URL.`);
    }
  });
}

function validateTags(tags, allowedTags, ref) {
  if (!allowedTags) return;

  for (const tag of tags) {
    if (typeof tag !== "string" || tag.trim() === "") {
      errors.push(`${ref} includes an invalid blank/non-string tag.`);
      continue;
    }

    if (!allowedTags.has(tag)) {
      warnings.push(`${ref} uses unknown tag: ${tag}`);
    }
  }
}

function requireString(object, key, ref) {
  if (typeof object?.[key] !== "string" || object[key].trim() === "") {
    errors.push(`${ref} missing required string: ${key}`);
  }
}

function getErrorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}
