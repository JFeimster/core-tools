import Link from "next/link";
import { getAllTools, getAllBrands } from "@/lib/tools";
import { ToolCard } from "@/components/tool-card";
import { DirectoryControls } from "@/components/directory-controls";

export default function HomePage() {
  const tools = getAllTools();
  const brands = getAllBrands();

  return (
    <div className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="brut-border brut-shadow2 bg-[color:var(--paper)] p-6 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="brut-pill" style={{ background: "var(--accent)", color: "#000", borderColor: "#000" }}>
                  directory
                </span>
                <span className="brut-pill" style={{ borderColor: "var(--accent2)", color: "var(--accent2)" }}>
                  zero-db
                </span>
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-tight">
                Core Tool Directory
              </h1>
              <p className="mt-3 max-w-2xl text-[color:var(--muted)] font-sans">
                Browse your tool specs, open a tool page, generate a landing page draft, and copy an iframe embed.
                Built for speed. No backend. Just ship.
              </p>
            </div>

            <div className="flex gap-3">
              <Link className="brut-btn px-4 py-3 text-sm" href="/tools">
                Browse Tools
              </Link>
              <a className="brut-btn px-4 py-3 text-sm" href="#how">
                How it Works
              </a>
            </div>
          </div>

          <hr className="brut-hr my-8" />

          <DirectoryControls brands={brands} initialTools={tools} />

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tools.slice(0, 9).map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-xs text-[color:var(--muted)] font-sans">
              Tip: add tools in <code className="px-1 py-0.5 brut-border-soft bg-black/30">/data/tools.json</code> and rebuild.
            </p>
            <Link className="brut-btn px-4 py-3 text-sm" href="/tools">
              View All Tools →
            </Link>
          </div>
        </div>

        <section id="how" className="mt-10 md:mt-14">
          <div className="brut-border bg-[color:var(--paper)] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-black uppercase">How this directory makes you faster</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3 font-sans text-sm text-[color:var(--muted)]">
              <div className="brut-border-soft p-4">
                <p className="font-black uppercase text-[color:var(--fg)]">1) One source of truth</p>
                <p className="mt-2">Every tool lives in JSON: pain, inputs, logic, artifact, CTA, tags.</p>
              </div>
              <div className="brut-border-soft p-4">
                <p className="font-black uppercase text-[color:var(--fg)]">2) Auto pages</p>
                <p className="mt-2">Static tool pages + embed routes generated from local data at build time.</p>
              </div>
              <div className="brut-border-soft p-4">
                <p className="font-black uppercase text-[color:var(--fg)]">3) Launch kit</p>
                <p className="mt-2">Landing page draft + embed code + a lightweight runner when a formula is provided.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
