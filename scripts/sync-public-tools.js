import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");

const sourcePath = resolve(rootDir, "data/tools.json");
const outputPath = resolve(rootDir, "public/tools.json");

function readTools() {
  const raw = readFileSync(sourcePath, "utf8");
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed)) {
    throw new Error("data/tools.json must contain an array of tool objects.");
  }

  return parsed;
}

function syncPublicTools() {
  const tools = readTools();
  const output = `${JSON.stringify(tools, null, 2)}\n`;

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, output, "utf8");

  console.log(`Synced ${tools.length} tools to public/tools.json`);
}

try {
  syncPublicTools();
} catch (error) {
  console.error("Failed to sync public/tools.json");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
