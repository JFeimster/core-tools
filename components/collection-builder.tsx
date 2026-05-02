"use client";

import { useEffect, useMemo, useState } from "react";
import { CopyBox } from "@/components/copy-box";

type ToolLite = {
  slug: string;
  brand: string;
  name: string;
  oneLiner?: string;
  tags: string[];
  runner?: { type: string };
};

type CollectionDraft = {
  title: string;
  oneLiner: string;
  audience: string;
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  tags: string;
};

type CollectionOutput = {
  slug: string;
  title: string;
  oneLiner: string;
  audience: string;
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  toolSlugs: string[];
  tags: string[];
};

const LS_KEY = "collection_builder_draft_v1";

export function CollectionBuilder() {
  const [tools, setTools] = useState<ToolLite[]>([]);
  const [query, setQuery] = useState("");
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [draft, setDraft] = useState<CollectionDraft>({
    title: "",
    oneLiner: "",
    audience: "",
    primaryCtaLabel: "Run the playbook",
    primaryCtaUrl: "https://core-tools.vercel.app/tools",
    tags: "cashflow, playbook",
  });

  useEffect(() => {
    async function loadTools() {
      try {
        const res = await fetch("/tools.json");
        if (!res.ok) throw new Error("Could not load /tools.json");
        const data = (await res.json()) as ToolLite[];
        setTools(Array.isArray(data) ? data : []);
      } catch {
        setTools([]);
      }
    }

    loadTools();
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw);
      if (parsed?.draft) setDraft(parsed.draft);
      if (Array.isArray(parsed?.selectedSlugs)) setSelectedSlugs(parsed.selectedSlugs);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({ draft, selectedSlugs }));
    } catch {}
  }, [draft, selectedSlugs]);

  const slug = useMemo(() => slugify(draft.title || "new-collection"), [draft.title]);

  const loadedToolSlugs = useMemo(
    () => new Set(tools.map((tool) => tool.slug)),
    [tools]
  );

  const filteredTools = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tools;

    return tools.filter((tool) => {
      const haystack = [
        tool.slug,
        tool.brand,
        tool.name,
        tool.oneLiner ?? "",
        ...(tool.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [query, tools]);

  const selectedTools = useMemo(() => {
    const bySlug = new Map(tools.map((tool) => [tool.slug, tool]));
    return selectedSlugs.map((selectedSlug) => bySlug.get(selectedSlug) ?? null);
  }, [selectedSlugs, tools]);

  const collection: CollectionOutput = useMemo(
    () => ({
      slug,
      title: draft.title || "Collection Title",
      oneLiner: draft.oneLiner || "A focused playbook for one painful business outcome.",
      audience: draft.audience || "Business owners",
      primaryCtaLabel: draft.primaryCtaLabel || "Run the playbook",
      primaryCtaUrl: draft.primaryCtaUrl || "https://core-tools.vercel.app/tools",
      toolSlugs: selectedSlugs,
      tags: parseTags(draft.tags),
    }),
    [draft, selectedSlugs, slug]
  );

  const validation = useMemo(
    () => validateCollectionDraft(draft, selectedSlugs, loadedToolSlugs),
    [draft, selectedSlugs, loadedToolSlugs]
  );

  const jsonOut = useMemo(() => JSON.stringify(collection, null, 2), [collection]);

  function toggleSlug(toolSlug: string) {
    setSelectedSlugs((current) =>
      current.includes(toolSlug)
        ? current.filter((slug) => slug !== toolSlug)
        : [...current, toolSlug]
    );
  }

  function moveSelected(toolSlug: string, direction: "up" | "down") {
    setSelectedSlugs((current) => {
      const index = current.indexOf(toolSlug);
      if (index < 0) return current;

      const nextIndex = direction === "up" ? index - 1 : index + 1;
      if (nextIndex < 0 || nextIndex >= current.length) return current;

      const copy = [...current];
      [copy[index], copy[nextIndex]] = [copy[nextIndex], copy[index]];

      return copy;
    });
  }

  function downloadJson() {
    const blob = new Blob([jsonOut], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = `${slug}.collection.json`;
    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="brut-border brut-shadow bg-[color:var(--paper)] p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs uppercase font-black tracking-widest text-[color:var(--accent2)]">
              admin
            </div>
            <h1 className="mt-2 text-2xl md:text-3xl font-black uppercase">
              Collection Builder
            </h1>
            <p className="mt-2 text-sm font-sans text-[color:var(--muted)]">
              Pick tools → copy JSON → paste into{" "}
              <code className="px-1 py-0.5 brut-border-soft bg-black/30">
                data/collections.json
              </code>
              .
            </p>
          </div>

          <div className="text-xs font-sans text-[color:var(--muted)]">
            Slug: <span className="text-[color:var(--fg)] font-black">{slug}</span>
          </div>
        </div>

        <hr className="brut-hr my-6" />

        <div className="grid gap-3 md:grid-cols-2 font-sans text-sm">
          <Field
            label="Title"
            value={draft.title}
            onChange={(value) => setDraft((current) => ({ ...current, title: value }))}
          />
          <Field
            label="Audience"
            value={draft.audience}
            onChange={(value) => setDraft((current) => ({ ...current, audience: value }))}
          />
          <Field
            label="CTA Label"
            value={draft.primaryCtaLabel}
            onChange={(value) =>
              setDraft((current) => ({ ...current, primaryCtaLabel: value }))
            }
          />
          <Field
            label="CTA URL"
            value={draft.primaryCtaUrl}
            onChange={(value) =>
              setDraft((current) => ({ ...current, primaryCtaUrl: value }))
            }
          />

          <div className="md:col-span-2">
            <Field
              label="One-liner"
              value={draft.oneLiner}
              onChange={(value) =>
                setDraft((current) => ({ ...current, oneLiner: value }))
              }
            />
          </div>

          <div className="md:col-span-2">
            <Field
              label="Tags (comma-separated)"
              value={draft.tags}
              onChange={(value) => setDraft((current) => ({ ...current, tags: value }))}
            />
          </div>
        </div>

        <div className="mt-6 brut-border-soft p-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <div className="text-xs uppercase font-black tracking-widest">
                Select Tools
              </div>
              <p className="mt-1 text-xs font-sans text-[color:var(--muted)]">
                Source: /tools.json
              </p>
            </div>

            <div className="text-xs font-sans text-[color:var(--muted)]">
              Selected:{" "}
              <span className="text-[color:var(--fg)] font-black">
                {selectedSlugs.length}
              </span>
            </div>
          </div>

          <input
            className="mt-4 w-full brut-border bg-black/20 px-3 py-3 text-sm font-sans"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, brand, slug, tag..."
          />

          {tools.length === 0 ? (
            <div className="mt-4 brut-border bg-black/10 p-4 font-sans text-sm text-[color:var(--muted)]">
              No tools loaded. Run{" "}
              <code className="px-1 py-0.5 brut-border-soft bg-black/30">
                npm run prebuild
              </code>{" "}
              or{" "}
              <code className="px-1 py-0.5 brut-border-soft bg-black/30">
                npm run build
              </code>{" "}
              to generate <code>/public/tools.json</code>.
            </div>
          ) : (
            <div className="mt-4 max-h-[420px] overflow-auto grid gap-3 pr-1">
              {filteredTools.map((tool) => {
                const selected = selectedSlugs.includes(tool.slug);

                return (
                  <button
                    key={tool.slug}
                    className="brut-border bg-black/10 p-3 text-left font-sans text-sm"
                    type="button"
                    onClick={() => toggleSlug(tool.slug)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-black text-[color:var(--fg)]">
                          {tool.name}
                        </div>
                        <div className="mt-1 text-xs text-[color:var(--muted)]">
                          {tool.brand} · {tool.slug}
                        </div>
                      </div>

                      <span className="brut-pill">
                        {selected ? "selected" : "add"}
                      </span>
                    </div>

                    {tool.oneLiner ? (
                      <p className="mt-2 text-xs text-[color:var(--muted)]">
                        {tool.oneLiner}
                      </p>
                    ) : null}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="mt-6 brut-border-soft p-4">
          <div className="text-xs uppercase font-black tracking-widest">
            Selected Order
          </div>

          {selectedSlugs.length === 0 ? (
            <p className="mt-3 text-sm font-sans text-[color:var(--muted)]">
              No tools selected yet.
            </p>
          ) : (
            <div className="mt-4 grid gap-3">
              {selectedSlugs.map((selectedSlug, index) => {
                const tool = selectedTools[index];

                return (
                  <div key={selectedSlug} className="brut-border bg-black/10 p-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="font-sans text-sm">
                        <div className="font-black text-[color:var(--fg)]">
                          {index + 1}. {tool?.name ?? "Missing tool"}
                        </div>
                        <div className="mt-1 text-xs text-[color:var(--muted)]">
                          {selectedSlug}
                        </div>
                      </div>

                      <div className="flex gap-2 flex-wrap justify-end">
                        <button
                          className="brut-btn px-3 py-2 text-xs"
                          type="button"
                          onClick={() => moveSelected(selectedSlug, "up")}
                        >
                          ↑
                        </button>
                        <button
                          className="brut-btn px-3 py-2 text-xs"
                          type="button"
                          onClick={() => moveSelected(selectedSlug, "down")}
                        >
                          ↓
                        </button>
                        <button
                          className="brut-btn px-3 py-2 text-xs"
                          type="button"
                          onClick={() => toggleSlug(selectedSlug)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {!tool ? (
                      <div className="mt-3 text-xs font-sans" style={{ color: "var(--danger)" }}>
                        Missing tool: {selectedSlug}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="mt-6">
          {validation.ok ? (
            <div className="brut-border-soft p-4 font-sans text-sm text-[color:var(--muted)]">
              ✅ Collection JSON looks valid. Copy it into{" "}
              <code className="px-1 py-0.5 brut-border-soft bg-black/30">
                data/collections.json
              </code>
              .
            </div>
          ) : (
            <div className="brut-border-soft p-4 font-sans text-sm">
              <div
                className="text-xs uppercase font-black tracking-widest"
                style={{ color: "var(--danger)" }}
              >
                Missing / invalid
              </div>
              <ul className="mt-2 list-disc pl-5 text-[color:var(--muted)]">
                {validation.errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4 flex gap-2 flex-wrap">
            <button
              className="brut-btn px-4 py-3 text-xs"
              type="button"
              onClick={downloadJson}
            >
              Download JSON
            </button>
            <button
              className="brut-btn px-4 py-3 text-xs"
              type="button"
              onClick={() => {
                localStorage.removeItem(LS_KEY);
                location.reload();
              }}
            >
              Reset Draft
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <CopyBox title="Collection JSON" value={jsonOut} />
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="text-xs uppercase font-black tracking-widest">{label}</label>
      <input
        className="mt-2 w-full brut-border bg-black/20 px-3 py-3 text-sm"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

function parseTags(value: string) {
  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function validateCollectionDraft(
  draft: CollectionDraft,
  selectedSlugs: string[],
  loadedToolSlugs: Set<string>
): {
  ok: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!draft.title.trim()) errors.push("title");
  if (!draft.oneLiner.trim()) errors.push("oneLiner");
  if (!draft.audience.trim()) errors.push("audience");
  if (!draft.primaryCtaLabel.trim()) errors.push("primaryCtaLabel");
  if (!draft.primaryCtaUrl.trim()) errors.push("primaryCtaUrl");
  if (parseTags(draft.tags).length === 0) errors.push("tags");

  if (selectedSlugs.length === 0) {
    errors.push("toolSlugs");
  }

  for (const selectedSlug of selectedSlugs) {
    if (!loadedToolSlugs.has(selectedSlug)) {
      errors.push(`Missing tool: ${selectedSlug}`);
    }
  }

  return { ok: errors.length === 0, errors };
}
