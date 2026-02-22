import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="px-4 py-4">
      <div className="mx-auto max-w-6xl flex items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center gap-3">
          <div className="brut-border bg-[color:var(--paper)] px-3 py-2 brut-shadow">
            <span className="text-xs font-black uppercase tracking-widest">Core</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-black uppercase tracking-tight">Tool Directory</div>
            <div className="text-xs font-sans text-[color:var(--muted)]">Landing pages • embeds • runners</div>
          </div>
        </Link>

        <nav className="flex items-center gap-2">
          <Link className="brut-btn px-3 py-2 text-xs" href="/tools">Tools</Link>
          <Link className="brut-btn px-3 py-2 text-xs" href="/brands">Brands</Link>
          <Link className="brut-btn px-3 py-2 text-xs" href="/collections">Collections</Link>
          <a className="brut-btn px-3 py-2 text-xs" href="https://vercel.com/new" target="_blank" rel="noreferrer">
            Deploy
          </a>
        </nav>
      </div>
    </header>
  );
}
