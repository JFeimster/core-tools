import Link from "next/link";
import type { Tool } from "@/lib/types";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link href={`/tools/${tool.slug}`} className="group">
      <div className="brut-border bg-[color:var(--paper)] p-5 brut-shadow transition-transform group-hover:-translate-y-0.5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs uppercase font-black tracking-widest text-[color:var(--accent2)]">
              {tool.brand}
            </div>
            <h3 className="mt-2 text-lg font-black uppercase leading-tight">{tool.name}</h3>
          </div>
          {tool.runner?.type ? (
            <span className="brut-pill" style={{ background: "var(--accent)", color: "#000", borderColor: "#000" }}>
              runnable
            </span>
          ) : (
            <span className="brut-pill">spec</span>
          )}
        </div>

        <p className="mt-3 text-sm font-sans text-[color:var(--muted)] line-clamp-3">
          {tool.oneLiner ?? tool.pain}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tool.tags.slice(0, 4).map((t) => (
            <span key={t} className="brut-pill">{t}</span>
          ))}
        </div>

        <div className="mt-5 text-xs font-sans text-[color:var(--muted)]">
          Artifact: <span className="text-[color:var(--fg)] font-black">{tool.artifact}</span>
        </div>
      </div>
    </Link>
  );
}
