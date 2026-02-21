export function SiteFooter() {
  return (
    <footer className="px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="brut-border-soft bg-black/20 p-6 font-sans text-sm text-[color:var(--muted)]">
          <p className="font-black uppercase text-[color:var(--fg)]">Notes</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>All content is repo-local JSON. No DB. No auth. No server actions.</li>
            <li>Embeds are iframe-friendly routes: <code className="px-1 py-0.5 brut-border-soft bg-black/30">/tools/&lt;slug&gt;/embed</code></li>
            <li>Landing page generator is a draft factory (copy/paste into your microsite stack).</li>
          </ul>
        </div>
        <p className="mt-6 text-xs text-[color:var(--muted)] font-sans">
          © {new Date().getFullYear()} Core Tool Directory — built for brutal speed.
        </p>
      </div>
    </footer>
  );
}
