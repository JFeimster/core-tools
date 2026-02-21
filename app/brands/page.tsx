import Link from "next/link";
import { getBrandIndex } from "@/lib/brands";

export const metadata = {
  title: "Brands • Core Tool Directory",
  description: "Browse tools by brand."
};

export default function BrandsPage() {
  const brands = getBrandIndex();

  return (
    <div className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-black uppercase">Brands</h1>
            <p className="mt-2 text-sm text-[color:var(--muted)] font-sans">
              Pick a brand. See every tool. No hunting through docs.
            </p>
          </div>
          <Link className="brut-btn px-4 py-2 text-xs" href="/tools">Browse all tools →</Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <Link key={b.slug} href={`/brands/${b.slug}`} className="group">
              <div className="brut-border bg-[color:var(--paper)] p-5 brut-shadow transition-transform group-hover:-translate-y-0.5">
                <div className="text-xs uppercase font-black tracking-widest text-[color:var(--accent2)]">
                  brand
                </div>
                <h3 className="mt-2 text-lg font-black uppercase leading-tight">{b.brand}</h3>
                <p className="mt-3 text-sm font-sans text-[color:var(--muted)]">
                  Tools: <span className="text-[color:var(--fg)] font-black">{b.count}</span>
                </p>
                <div className="mt-4 brut-border-soft p-3 text-xs font-sans text-[color:var(--muted)]">
                  URL: <span className="text-[color:var(--fg)]">{`/brands/${b.slug}`}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
