import Link from "next/link";

export const metadata = {
  title: "Admin • Core Tool Directory",
};

export default function AdminPage() {
  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-black uppercase">Admin</h1>
        <p className="mt-2 text-sm font-sans text-[color:var(--muted)]">
          Internal utilities. No auth. Keep private.
        </p>

        <div className="mt-6 grid gap-4">
          <Link className="brut-btn px-4 py-3 text-sm" href="/admin/tool-builder">
            Tool Builder →
          </Link>
        </div>
      </div>
    </div>
  );
}
