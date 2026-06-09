import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const rootDir = process.cwd();
const registryDir = resolve(rootDir, "registries");

const requiredFiles = [
  "registry-index.json",
  "funding-tools.registry.json",
  "tool-artifacts.registry.json",
  "cta-routing.registry.json",
  "compliance-rules.registry.json",
  "brands.registry.json",
  "collections.registry.json",
  "personas.registry.json",
  "content-clusters.registry.json",
  "deployment-assets.registry.json",
  "playbooks.registry.json",
  "automation-tools.registry.json",
  "registry-schema.json",
  "tool-artifact-schema.json",
  "public-projection-map.json",
  "collection-map.json"
];

let failures = 0;

for (const file of requiredFiles) {
  try {
    const parsed = JSON.parse(readFileSync(resolve(registryDir, file), "utf8"));
    if (!parsed) throw new Error("empty JSON");
  } catch (error) {
    failures += 1;
    console.error(`Registry validation failed for ${file}: ${error instanceof Error ? error.message : error}`);
  }
}

if (failures > 0) process.exit(1);

console.log(`Registry validation passed for ${requiredFiles.length} files.`);
