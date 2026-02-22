"use client";

import { useEffect, useMemo, useState } from "react";
import type { Tool, ToolInput, ToolRunnerSpec } from "@/lib/types";
import { CopyBox } from "@/components/copy-box";
import { buildEmbedSnippet, buildLandingPageDraft } from "@/lib/generators";

type Draft = {
  brand: string;
  name: string;
  oneLiner: string;
  pain: string;
  artifact: string;
  ctaLabel: string;
  ctaUrl: string;
  tags: string; // comma separated
};

const LS_KEY = "tool_builder_draft_v1";

export function ToolBuilder() {
  const [draft, setDraft] = useState<Draft>({
    brand: "",
    name: "",
    oneLiner: "",
    pain: "",
    artifact: "",
    ctaLabel: "",
    ctaUrl: "",
    tags: "calculator, cashflow",
  });

  const [inputs, setInputs] = useState<ToolInput[]>([
    { key: "amount", label: "Amount ($)", type: "number", defaultValue: "10000" },
  ]);

  const [runnerEnabled, setRunnerEnabled] = useState(false);
  const [runnerOutputs, setRunnerOutputs] = useState<
    { key: string; label: string; format?: "currency" | "number" | "text"; expr: string; note?: string }[]
  >([{ key: "result", label: "Result", format: "currency", expr: "amount * 0.1" }]);

  // load/save
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed?.draft) setDraft(parsed.draft);
      if (parsed?.inputs) setInputs(parsed.inputs);
      if (typeof parsed?.runnerEnabled === "boolean") setRunnerEnabled(parsed.runnerEnabled);
      if (parsed?.runnerOutputs) setRunnerOutputs(parsed.runnerOutputs);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({ draft, inputs, runnerEnabled, runnerOutputs }));
    } catch {}
  }, [draft, inputs, runnerEnabled, runnerOutputs]);

  const slug = useMemo(() => slugify(draft.name || "new-tool"), [draft.name]);

  const tool: Tool = useMemo(() => {
    const tags = draft.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const runner: ToolRunnerSpec | undefined = runnerEnabled
      ? { type: "formula", outputs: runnerOutputs.map((o) => ({ ...o })) }
      : { type: "none" };

    return {
      slug,
      brand: draft.brand || "Brand",
      name: draft.name || "Tool Name",
      oneLiner: draft.oneLiner || undefined,
      pain: draft.pain || "Describe the pain solved.",
      artifact: draft.artifact || "Artifact (PDF / report / embed / etc.)",
      inputs,
      logic: runnerEnabled ? "Formula runner enabled." : "Describe the black-box logic here.",
      ctaLabel: draft.ctaLabel || "Primary CTA",
      ctaUrl: draft.ctaUrl || "https://YOUR_PRIMARY_CTA_LINK",
      tags,
      runner,
    };
  }, [draft, inputs, runnerEnabled, runnerOutputs, slug]);

  const validation = useMemo(() => validateTool(tool), [tool]);

  const jsonOut = useMemo(() => JSON.stringify(tool, null, 2), [tool]);
  const embed = useMemo(() => buildEmbedSnippet(tool), [tool]);
  const landing = useMemo(() => buildLandingPageDraft(tool), [tool]);

  function addInput(kind: "number" | "text" | "select") {
    const k = `field${inputs.length + 1}`;
    if (kind === "select") {
      setInputs((p) => [
        ...p,
        { key: k, label: `Field ${inputs.length + 1}`, type: "select", options: [{ label: "Option A", value: "a" }] },
      ]);
    } else {
      setInputs((p) => [...p, { key: k, label: `Field ${inputs.length + 1}`, type: kind }]);
    }
  }

  function removeInput(idx: number) {
    setInputs((p) => p.filter((_, i) => i !== idx));
  }

  function downloadJson() {
    const blob = new Blob([jsonOut], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slug}.tool.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="brut-border brut-shadow bg-[color:var(--paper)] p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs uppercase font-black tracking-widest text-[color:var(--accent2)]">admin</div>
            <h1 className="mt-2 text-2xl md:text-3xl font-black uppercase">Tool Builder</h1>
            <p className="mt-2 text-sm font-sans text-[color:var(--muted)]">
              Fill fields → copy JSON → paste into <code className="px-1 py-0.5 brut-border-soft bg-black/30">data/tools.json</code>.
            </p>
          </div>
          <div className="text-xs font-sans text-[color:var(--muted)]">
            Slug: <span className="text-[color:var(--fg)] font-black">{slug}</span>
          </div>
        </div>

        <hr className="brut-hr my-6" />

        <div className="grid gap-3 md:grid-cols-2 font-sans text-sm">
          <Field label="Brand" value={draft.brand} onChange={(v) => setDraft((p) => ({ ...p, brand: v }))} />
          <Field label="Tool Name" value={draft.name} onChange={(v) => setDraft((p) => ({ ...p, name: v }))} />
          <Field label="One-liner" value={draft.oneLiner} onChange={(v) => setDraft((p) => ({ ...p, oneLiner: v }))} />
          <Field label="Artifact" value={draft.artifact} onChange={(v) => setDraft((p) => ({ ...p, artifact: v }))} />
          <Field label="CTA Label" value={draft.ctaLabel} onChange={(v) => setDraft((p) => ({ ...p, ctaLabel: v }))} />
          <Field label="CTA URL" value={draft.ctaUrl} onChange={(v) => setDraft((p) => ({ ...p, ctaUrl: v }))} />
          <div className="md:col-span-2">
            <label className="text-xs uppercase font-black tracking-widest">Pain Solved</label>
            <textarea
              className="mt-2 w-full brut-border bg-black/20 px-3 py-3 text-sm min-h-[90px]"
              value={draft.pain}
              onChange={(e) => setDraft((p) => ({ ...p, pain: e.target.value }))}
              placeholder="What hurts? Who hurts? Why now?"
            />
          </div>
          <div className="md:col-span-2">
            <Field
              label="Tags (comma-separated)"
              value={draft.tags}
              onChange={(v) => setDraft((p) => ({ ...p, tags: v }))}
            />
          </div>
        </div>

        <div className="mt-6 brut-border-soft p-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="text-xs uppercase font-black tracking-widest">Inputs</div>
            <div className="flex gap-2 flex-wrap">
              <button className="brut-btn px-3 py-2 text-xs" onClick={() => addInput("number")} type="button">+ Number</button>
              <button className="brut-btn px-3 py-2 text-xs" onClick={() => addInput("text")} type="button">+ Text</button>
              <button className="brut-btn px-3 py-2 text-xs" onClick={() => addInput("select")} type="button">+ Select</button>
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            {inputs.map((inp, idx) => (
              <div key={idx} className="brut-border bg-black/10 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs uppercase font-black tracking-widest">{inp.type}</div>
                  <button className="brut-btn px-3 py-2 text-xs" onClick={() => removeInput(idx)} type="button">
                    Remove
                  </button>
                </div>

                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  <MiniField
                    label="key"
                    value={inp.key}
                    onChange={(v) => setInputs((p) => p.map((x, i) => (i === idx ? { ...x, key: v } as any : x)))}
                  />
                  <MiniField
                    label="label"
                    value={inp.label}
                    onChange={(v) => setInputs((p) => p.map((x, i) => (i === idx ? { ...x, label: v } as any : x)))}
                  />

                  {inp.type !== "select" ? (
                    <MiniField
                      label="default"
                      value={(inp as any).defaultValue ?? ""}
                      onChange={(v) => setInputs((p) => p.map((x, i) => (i === idx ? ({ ...x, defaultValue: v } as any) : x)))}
                    />
                  ) : (
                    <MiniField
                      label="options (label:value, comma)"
                      value={(inp as any).options?.map((o: any) => `${o.label}:${o.value}`).join(", ") ?? ""}
                      onChange={(v) => {
                        const options = v
                          .split(",")
                          .map((s) => s.trim())
                          .filter(Boolean)
                          .map((pair) => {
                            const [label, value] = pair.split(":").map((x) => x.trim());
                            return { label: label || value, value: value || label };
                          });
                        setInputs((p) => p.map((x, i) => (i === idx ? ({ ...x, options } as any) : x)));
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 brut-border-soft p-4">
          <label className="inline-flex items-center gap-2 font-sans text-sm">
            <input type="checkbox" checked={runnerEnabled} onChange={(e) => setRunnerEnabled(e.target.checked)} />
            Enable formula runner (basic + - * / only)
          </label>

          {runnerEnabled ? (
            <div className="mt-4 grid gap-3">
              {runnerOutputs.map((o, idx) => (
                <div key={idx} className="brut-border bg-black/10 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs uppercase font-black tracking-widest">Output {idx + 1}</div>
                    <button
                      className="brut-btn px-3 py-2 text-xs"
                      type="button"
                      onClick={() => setRunnerOutputs((p) => p.filter((_, i) => i !== idx))}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-3 grid gap-3 md:grid-cols-4">
                    <MiniField
                      label="key"
                      value={o.key}
                      onChange={(v) => setRunnerOutputs((p) => p.map((x, i) => (i === idx ? { ...x, key: v } : x)))}
                    />
                    <MiniField
                      label="label"
                      value={o.label}
                      onChange={(v) => setRunnerOutputs((p) => p.map((x, i) => (i === idx ? { ...x, label: v } : x)))}
                    />
                    <MiniField
                      label="format"
                      value={o.format ?? "currency"}
                      onChange={(v) =>
                        setRunnerOutputs((p) =>
                          p.map((x, i) => (i === idx ? { ...x, format: v as any } : x))
                        )
                      }
                    />
                    <MiniField
                      label="expr"
                      value={o.expr}
                      onChange={(v) => setRunnerOutputs((p) => p.map((x, i) => (i === idx ? { ...x, expr: v } : x)))}
                    />
                  </div>
                </div>
              ))}

              <button
                className="brut-btn px-3 py-2 text-xs"
                type="button"
                onClick={() => setRunnerOutputs((p) => [...p, { key: `out${p.length + 1}`, label: `Output ${p.length + 1}`, format: "currency", expr: "amount * 0.1" }])}
              >
                + Add output
              </button>
            </div>
          ) : null}
        </div>

        <div className="mt-6">
          {validation.ok ? (
            <div className="brut-border-soft p-4 font-sans text-sm text-[color:var(--muted)]">
              ✅ JSON looks valid. Copy it and paste into <code className="px-1 py-0.5 brut-border-soft bg-black/30">data/tools.json</code>.
            </div>
          ) : (
            <div className="brut-border-soft p-4 font-sans text-sm">
              <div className="text-xs uppercase font-black tracking-widest" style={{ color: "var(--danger)" }}>
                Missing / invalid
              </div>
              <ul className="mt-2 list-disc pl-5 text-[color:var(--muted)]">
                {validation.errors.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
          )}

          <div className="mt-4 flex gap-2 flex-wrap">
            <button className="brut-btn px-4 py-3 text-xs" type="button" onClick={downloadJson}>
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
        <CopyBox title="Tool JSON" value={jsonOut} />
        <CopyBox title="Embed snippet" value={embed} />
        <CopyBox title="Landing draft (Markdown)" value={landing} />
      </div>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-xs uppercase font-black tracking-widest">{label}</label>
      <input
        className="mt-2 w-full brut-border bg-black/20 px-3 py-3 text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function MiniField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-[10px] uppercase font-black tracking-widest text-[color:var(--muted)]">{label}</label>
      <input className="mt-1 w-full brut-border bg-black/20 px-2 py-2 text-xs" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function validateTool(t: Tool): { ok: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!t.slug) errors.push("slug");
  if (!t.brand) errors.push("brand");
  if (!t.name) errors.push("name");
  if (!t.pain) errors.push("pain");
  if (!t.artifact) errors.push("artifact");
  if (!t.ctaLabel) errors.push("ctaLabel");
  if (!t.ctaUrl) errors.push("ctaUrl");
  if (!Array.isArray(t.tags) || t.tags.length === 0) errors.push("tags");
  if (!Array.isArray(t.inputs) || t.inputs.length === 0) errors.push("inputs");

  // Validate keys are unique
  const keys = t.inputs.map((i) => i.key);
  const uniq = new Set(keys);
  if (uniq.size !== keys.length) errors.push("input keys must be unique");

  return { ok: errors.length === 0, errors };
}
