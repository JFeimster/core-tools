import { slugify } from "@/lib/slug";
import { getAllTools } from "@/lib/tools";

export function getBrandIndex() {
  const tools = getAllTools();
  const map = new Map<string, { brand: string; slug: string; count: number }>();

  for (const t of tools) {
    const slug = slugify(t.brand);
    const cur = map.get(slug);
    if (cur) map.set(slug, { ...cur, count: cur.count + 1 });
    else map.set(slug, { brand: t.brand, slug, count: 1 });
  }

  return Array.from(map.values()).sort((a, b) => a.brand.localeCompare(b.brand));
}

export function getBrandBySlug(brandSlug: string) {
  const idx = getBrandIndex();
  return idx.find((b) => b.slug === brandSlug) ?? null;
}

export function getToolsByBrandSlug(brandSlug: string) {
  const tools = getAllTools();
  const brand = getBrandBySlug(brandSlug);
  if (!brand) return [];
  return tools.filter((t) => slugify(t.brand) === brandSlug);
}
