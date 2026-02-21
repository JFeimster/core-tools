"use client";

import { useMemo, useState } from "react";
import type { Tool } from "@/lib/types";
import { ToolCard } from "@/components/tool-card";

export function DirectoryControls({
  brands,
  initialTools,
  showResults = false
}: {
  brands: string[];
  initialTools: Tool[];
  showResults?: boolean;
}) {
  const [q, setQ] = useState("");
  const [brand, setBrand] = useState<string>("all");
  const [tag, setTag] = useState<string>("all");
  const [onlyRunnable, setOnlyRunnable] = useState(false);

  const allTags = useMemo(() => {
    const s = new Set<string>();
    initialTools.forEach((t) => t.tags.forEach((x) => s.add(x)));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [initialTools]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return initialTools.filter((t) => {
      if (onlyRunnable && !t.runner?.type) return false;
      if (brand !== "all" && t.brand !== brand) return false;
      if (tag !== "all" && !t.tags.includes(tag)) return false;
      if (!query) return true;
      const hay = [
        t.name,
        t.brand,
        t.oneLiner ?? "",
        t.pain,
        t.artifact,
        t.ctaLabel,
        ...t.tags
      ].join(" ").toLowerCase();
      return hay.includes(query);
    });
  }, [q, brand, tag, onlyRunnable, initialTools]);

  return (
    <div>
      <div className="grid gap-3 md:grid-cols-4">
        <div className="md:col-span-2">
          <label className="text-xs uppercase font-black tracking-widest">Search</label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder='Try "payroll", "embed", "amazon", "MCA"...'
            className="mt-2 w-full brut-border bg-black/20 px-3 py-3 font-sans text-sm"
          />
        </div>

        <div>
          <label className="text-xs uppercase font-black tracking-widest">Brand</label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="mt-2 w-full brut-border bg-black/20 px-3 py-3 font-sans text-sm"
          >
            <option value="all">All</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs uppercase font-black tracking-widest">Tag</label>
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="mt-2 w-full brut-border bg-black/20 px-3 py-3 font-sans text-sm"
          >
            <option value="all">All</option>
            {allTags.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3 flex-wrap">
        <label className="inline-flex items-center gap-2 brut-border-soft px-3 py-2 font-sans text-sm">
          <input
            type="checkbox"
            checked={onlyRunnable}
            onChange={(e) => setOnlyRunnable(e.target.checked)}
          />
          Only runnable tools
        </label>

        <div className="brut-border-soft px-3 py-2 text-xs font-sans text-[color:var(--muted)]">
          Results: <span className="text-[color:var(--fg)] font-black">{filtered.length}</span>
        </div>
      </div>

      {showResults ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <ToolCard key={t.slug} tool={t} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
