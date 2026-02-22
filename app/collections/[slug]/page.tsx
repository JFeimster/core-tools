import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllCollectionSlugs, getCollectionBySlug, getCollectionStats, getToolsForCollection } from "@/lib/collections";
import { ToolCard } from "@/components/tool-card";

export function generateStaticParams() {
  return getAllCollectionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCollectionBySlug(slug);
  if (!c) return { title: "Collection Not Found" };

  return {
    title: `${c.title} • Collections • Core Tool Directory`,
    description: c.oneLiner,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const c = getCollectionBySlug(slug);
  if (!c) return notFound();

  const tools = getToolsForCollection(slug);
  const stats = getCollectionStats(slug);

  return (
    <div className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="text-xs uppercase font-black tracking-widest text-[color:var(--accent2)]">
              collection
            </div>
            <h1 className="mt-2 text-3xl md:text-5xl font-black uppercase">{c.title}</h1>
            <p className="mt-3 max-w-3xl text-sm text-[color:var(--muted)] font-sans">
              {c.oneLiner}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span key={t} className="brut-pill">{t}</span>
              ))}
            </div>
          </div>

          <div className="flex gap-2 flex-wrap justify-end">
            <Link className="brut-btn px-4 py-2 text-xs" href="/collections">← All collections</Link>
            <a className="brut-btn px-4 py-2 text-xs" href={c.primaryCtaUrl} target="_blank" rel="noreferrer">
              {c.primaryCtaLabel}
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3 font-sans text-sm">
          <div className="brut-border-soft p-4">
            <p className="text-xs uppercase font-black text-[color:var(--fg)]">Audience</p>
            <p className="mt-2 text-[color:var(--muted)]">{c.audience}</p>
          </div>
          <div className="brut-border-soft p-4">
            <p className="text-xs uppercase font-black text-[color:var(--fg)]">Tools</p>
            <p className="mt-2 text-[color:var(--muted)]">
              Total: <span className="text-[color:var(--fg)] font-black">{stats.toolsCount}</span> • Runnable:{" "}
              <span className="text-[color:var(--fg)] font-black">{stats.runnableCount}</span>
            </p>
          </div>
          <div className="brut-border-soft p-4">
            <p className="text-xs uppercase font-black text-[color:var(--fg)]">Brands</p>
            <p className="mt-2 text-[color:var(--muted)]">{stats.brands.join(", ")}</p>
          </div>
        </div>

        <hr className="brut-hr my-8" />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <ToolCard key={t.slug} tool={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
