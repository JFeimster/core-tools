"use client";

import { useMemo, useState } from "react";
import type { Tool } from "@/lib/types";
import { ToolRunner } from "@/components/tool-runner";
import { CopyBox } from "@/components/copy-box";
import { buildEmbedSnippet, buildLandingPageDraft } from "@/lib/generators";

type TabKey = "overview" | "runner" | "landing" | "embed";

export function ToolTabs({ tool }: { tool: Tool }) {
  const [tab, setTab] = useState<TabKey>("overview");

  const embed = useMemo(() => buildEmbedSnippet(tool), [tool]);
  const landing = useMemo(() => buildLandingPageDraft(tool), [tool]);

  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        <TabButton active={tab === "overview"} onClick={() => setTab("overview")}>Overview</TabButton>
        <TabButton active={tab === "runner"} onClick={() => setTab("runner")}>Run Tool</TabButton>
        <TabButton active={tab === "landing"} onClick={() => setTab("landing")}>Landing Draft</TabButton>
        <TabButton active={tab === "embed"} onClick={() => setTab("embed")}>Embed</TabButton>
      </div>

      <div className="mt-5">
        {tab === "overview" && (
          <div className="grid gap-4 md:grid-cols-2 font-sans">
            <div className="brut-border-soft p-5">
              <p className="text-xs uppercase font-black tracking-widest">Inputs</p>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
                {tool.inputs.length ? tool.inputs.map((i) => (
                  <li key={i.key}>
                    <span className="font-black text-[color:var(--fg)]">{i.label}</span>
                    <span className="ml-2 opacity-70">({i.type})</span>
                  </li>
                )) : (
                  <li>No inputs listed yet. Add them in <code className="px-1 py-0.5 brut-border-soft bg-black/30">/data/tools.json</code>.</li>
                )}
              </ul>
            </div>

            <div className="brut-border-soft p-5">
              <p className="text-xs uppercase font-black tracking-widest">Logic</p>
              <pre className="mt-3 whitespace-pre-wrap text-sm text-[color:var(--muted)]">{tool.logic}</pre>
            </div>
          </div>
        )}

        {tab === "runner" && (
          <div className="brut-border-soft p-5">
            {tool.runner?.type ? (
              <ToolRunner tool={tool} />
            ) : (
              <div className="font-sans text-sm text-[color:var(--muted)]">
                This tool is currently a spec-only entry (no runner configured).
                Add <code className="px-1 py-0.5 brut-border-soft bg-black/30">runner</code> to enable a calculator.
              </div>
            )}
          </div>
        )}

        {tab === "landing" && (
          <div className="grid gap-4">
            <div className="brut-border-soft p-5 font-sans text-sm text-[color:var(--muted)]">
              This is a draft factory. Copy, tweak headline + proof, then ship the microsite.
            </div>
            <CopyBox title="Landing page draft (Markdown)" value={landing} />
          </div>
        )}

        {tab === "embed" && (
          <div className="grid gap-4">
            <CopyBox title="Iframe embed snippet" value={embed} />
            <div className="brut-border-soft p-5 font-sans text-sm text-[color:var(--muted)]">
              Tip: if you’re embedding on a partner site, add UTM params to the CTA URL in <code className="px-1 py-0.5 brut-border-soft bg-black/30">/data/tools.json</code>.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className="brut-btn px-3 py-2 text-xs"
      onClick={onClick}
      style={active ? { background: "var(--accent)", color: "#000", borderColor: "#000" } : undefined}
      type="button"
    >
      {children}
    </button>
  );
}
