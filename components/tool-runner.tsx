"use client";

import { useMemo, useState } from "react";
import type { Tool } from "@/lib/types";
import { runTool } from "@/lib/runner";

export function ToolRunner({ tool }: { tool: Tool }) {
  const initial = useMemo(() => {
    const o: Record<string, string> = {};
    tool.inputs.forEach((i) => {
      o[i.key] = i.defaultValue ?? "";
    });
    return o;
  }, [tool.inputs]);

  const [vals, setVals] = useState<Record<string, string>>(initial);

  const result = useMemo(() => {
    try {
      return runTool(tool, vals);
    } catch (e) {
      return { ok: false as const, error: (e as Error).message };
    }
  }, [tool, vals]);

  return (
    <div className="font-sans">
      <div className="grid gap-3 md:grid-cols-2">
        {tool.inputs.map((i) => (
          <div key={i.key}>
            <label className="text-xs uppercase font-black tracking-widest">{i.label}</label>
            {i.type === "select" ? (
              <select
                className="mt-2 w-full brut-border bg-black/20 px-3 py-3 text-sm"
                value={vals[i.key] ?? ""}
                onChange={(e) => setVals((p) => ({ ...p, [i.key]: e.target.value }))}
              >
                {(i.options ?? []).map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            ) : (
              <input
                className="mt-2 w-full brut-border bg-black/20 px-3 py-3 text-sm"
                type={i.type === "number" ? "number" : "text"}
                inputMode={i.type === "number" ? "decimal" : undefined}
                value={vals[i.key] ?? ""}
                onChange={(e) => setVals((p) => ({ ...p, [i.key]: e.target.value }))}
                placeholder={i.placeholder ?? ""}
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 brut-border bg-black/20 p-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="text-xs uppercase font-black tracking-widest">Output</div>
            <div className="mt-1 text-[color:var(--muted)] text-sm">
              Shareable artifact: <span className="text-[color:var(--fg)] font-black">{tool.artifact}</span>
            </div>
          </div>

          <a className="brut-btn px-4 py-3 text-xs" href={tool.ctaUrl} target="_blank" rel="noreferrer">
            {tool.ctaLabel}
          </a>
        </div>

        {result.ok ? (
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {result.outputs.map((o) => (
              <div key={o.key} className="brut-border-soft p-4">
                <div className="text-xs uppercase font-black tracking-widest">{o.label}</div>
                <div className="mt-2 text-xl font-black">
                  {o.format === "currency" ? formatCurrency(o.value) : o.value}
                </div>
                {o.note ? <div className="mt-2 text-sm text-[color:var(--muted)]">{o.note}</div> : null}
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 brut-border-soft p-4">
            <div className="text-xs uppercase font-black tracking-widest" style={{ color: "var(--danger)" }}>
              Runner error
            </div>
            <div className="mt-2 text-sm text-[color:var(--muted)]">{result.error}</div>
          </div>
        )}
      </div>

      <p className="mt-4 text-xs text-[color:var(--muted)]">
        Runner is client-side only. No data leaves the page.
      </p>
    </div>
  );
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}
