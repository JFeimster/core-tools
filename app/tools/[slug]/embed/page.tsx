import { notFound } from "next/navigation";
import { getAllToolSlugs, getToolBySlug } from "@/lib/tools";
import { ToolRunner } from "@/components/tool-runner";

export function generateStaticParams() {
  return getAllToolSlugs().map((slug) => ({ slug }));
}

export const metadata = {
  title: "Embed • Core Tool Directory",
  description: "Embeddable view of a tool runner."
};

export default function ToolEmbedPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) return notFound();

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)] p-4">
      <div className="mx-auto max-w-xl">
        <div className="brut-border brut-shadow bg-[color:var(--paper)] p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xs uppercase font-black tracking-widest text-[color:var(--accent2)]">
                {tool.brand}
              </div>
              <h1 className="mt-1 text-lg font-black uppercase">{tool.name}</h1>
              <p className="mt-1 text-xs font-sans text-[color:var(--muted)]">
                {tool.oneLiner ?? tool.pain}
              </p>
            </div>
            <span className="brut-pill" style={{ background: "var(--accent)", color: "#000", borderColor: "#000" }}>
              embed
            </span>
          </div>

          <div className="mt-4">
            <ToolRunner tool={tool} />
          </div>

          <p className="mt-4 text-[10px] font-sans text-[color:var(--muted)]">
            This embed is static + client-side only. No data is stored.
          </p>
        </div>
      </div>
    </div>
  );
}
