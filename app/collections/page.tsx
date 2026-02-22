import Link from "next/link";
import { getAllCollections } from "@/lib/collections";

export const metadata = {
  title: "Collections • Core Tool Directory",
  description: "Playbooks: curated tool stacks for specific outcomes."
};

export default function CollectionsPage() {
  const collections = getAllCollections();

  return (
    <div className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-black uppercase">Collections</h1>
            <p className="mt-2 text-sm text-[color:var(--muted)] font-sans">
              Curated playbooks. One outcome. The shortest path to “done.”
            </p>
          </div>
          <Link className="brut-btn px-4 py-2 text-xs" href="/tools">
            Browse all tools →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((c) => (
            <Link key={c.slug} href={`/collections/${c.slug}`} className="group">
              <div className="brut-border bg-[color:var(--paper)] p-5 brut-shadow transition-transform group-hover:-translate-y-0.5">
                <div className="text-xs uppercase font-black tracking-widest text-[color:var(--accent2)]">
                  playbook
                </div>
                <h3 className="mt-2 text-lg font-black uppercase leading-tight">{c.title}</h3>
                <p className="mt-3 text-sm font-sans text-[color:var(--muted)]">{c.oneLiner}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.slice(0, 4).map((t) => (
                    <span key={t} className="brut-pill">{t}</span>
                  ))}
                </div>

                <div className="mt-4 brut-border-soft p-3 text-xs font-sans text-[color:var(--muted)]">
                  Audience: <span className="text-[color:var(--fg)]">{c.audience}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
