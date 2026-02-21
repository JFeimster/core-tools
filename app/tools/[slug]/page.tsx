import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllToolSlugs, getToolBySlug } from "@/lib/tools";
import { ToolTabs } from "@/components/tool-tabs";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Tool Not Found" };

  return {
    title: `${tool.name} • Core Tool Directory`,
    description: tool.oneLiner ?? tool.pain,
    openGraph: {
      title: tool.name,
      description: tool.oneLiner ?? tool.pain,
      type: "website",
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tool = getToolBySlug(slug);
  if (!tool) return notFound();

  return (
    <div className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Link href="/tools" className="brut-btn px-4 py-2 text-xs">
            ← Back to Tools
          </Link>
          <div className="flex gap-2 flex-wrap justify-end">
            <span className="brut-pill" style={{ borderColor: "var(--accent2)", color: "var(--accent2)" }}>
              {tool.brand}
            </span>
            {tool.tags.slice(0, 3).map((t) => (
              <span key={t} className="brut-pill">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 brut-border brut-shadow bg-[color:var(--paper)] p-6 md:p-8">
          <h1 className="text-2xl md:text-4xl font-black uppercase">{tool.name}</h1>
          <p className="mt-3 font-sans text-[color:var(--muted)] max-w-3xl">{tool.oneLiner ?? tool.pain}</p>

          <div className="mt-5 grid gap-3 md:grid-cols-3 font-sans text-sm">
            <div className="brut-border-soft p-4">
              <p className="text-xs uppercase font-black text-[color:var(--fg)]">Pain solved</p>
              <p className="mt-2 text-[color:var(--muted)]">{tool.pain}</p>
            </div>
            <div className="brut-border-soft p-4">
              <p className="text-xs uppercase font-black text-[color:var(--fg)]">Shareable artifact</p>
              <p className="mt-2 text-[color:var(--muted)]">{tool.artifact}</p>
            </div>
            <div className="brut-border-soft p-4">
              <p className="text-xs uppercase font-black text-[color:var(--fg)]">Primary CTA</p>
              <p className="mt-2 text-[color:var(--muted)]">{tool.ctaLabel}</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3 flex-wrap">
            <a className="brut-btn px-4 py-3 text-sm" href={tool.ctaUrl} target="_blank" rel="noreferrer">
              {tool.ctaLabel}
            </a>
            <a className="brut-btn px-4 py-3 text-sm" href={`/tools/${tool.slug}/embed`}>
              Open Embed View
            </a>
          </div>

          <hr className="brut-hr my-8" />

          <ToolTabs tool={tool} />
        </div>
      </div>
    </div>
  );
}
