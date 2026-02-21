import toolsData from "@/data/tools.json";
import type { Tool } from "@/lib/types";

const TOOLS = toolsData as Tool[];

export function getAllTools() {
  return [...TOOLS].sort((a, b) => a.name.localeCompare(b.name));
}

export function getAllToolSlugs() {
  return TOOLS.map((t) => t.slug);
}

export function getToolBySlug(slug: string) {
  return TOOLS.find((t) => t.slug === slug) ?? null;
}

export function getAllBrands() {
  const s = new Set<string>();
  TOOLS.forEach((t) => s.add(t.brand));
  return Array.from(s).sort((a, b) => a.localeCompare(b));
}
