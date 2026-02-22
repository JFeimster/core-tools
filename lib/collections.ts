import collections from "@/data/collections.json";
import type { Tool } from "@/lib/types";
import { getAllTools, getToolBySlug } from "@/lib/tools";

export type Collection = {
  slug: string;
  title: string;
  oneLiner: string;
  audience: string;
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  toolSlugs: string[];
  tags: string[];
};

const COLLECTIONS = collections as Collection[];

export function getAllCollections() {
  return [...COLLECTIONS].sort((a, b) => a.title.localeCompare(b.title));
}

export function getAllCollectionSlugs() {
  return COLLECTIONS.map((c) => c.slug);
}

export function getCollectionBySlug(slug: string) {
  return COLLECTIONS.find((c) => c.slug === slug) ?? null;
}

export function getToolsForCollection(slug: string): Tool[] {
  const c = getCollectionBySlug(slug);
  if (!c) return [];
  return c.toolSlugs
    .map((s) => getToolBySlug(s))
    .filter(Boolean) as Tool[];
}

export function getCollectionStats(slug: string) {
  const tools = getToolsForCollection(slug);
  const runnable = tools.filter((t) => t.runner?.type && t.runner.type !== "none").length;
  const brands = Array.from(new Set(tools.map((t) => t.brand))).sort((a, b) => a.localeCompare(b));
  const tags = Array.from(new Set(tools.flatMap((t) => t.tags))).sort((a, b) => a.localeCompare(b));
  return { toolsCount: tools.length, runnableCount: runnable, brands, tags };
}
