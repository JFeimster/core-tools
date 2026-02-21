import { getAllTools, getAllBrands } from "@/lib/tools";
import { DirectoryControls } from "@/components/directory-controls";

export const metadata = {
  title: "Tools • Core Tool Directory",
  description: "Browse all tools. Filter by brand, tags, or search."
};

export default function ToolsIndexPage() {
  const tools = getAllTools();
  const brands = getAllBrands();

  return (
    <div className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-black uppercase">Tools</h1>
            <p className="mt-2 text-sm text-[color:var(--muted)] font-sans">
              Filter hard. Click a tool. Generate a landing page. Copy the embed. Ship.
            </p>
          </div>
          <div className="brut-border-soft px-3 py-2 text-xs font-sans text-[color:var(--muted)]">
            Total: <span className="text-[color:var(--fg)] font-black">{tools.length}</span>
          </div>
        </div>

        <div className="mt-6">
          <DirectoryControls brands={brands} initialTools={tools} showResults />
        </div>
      </div>
    </div>
  );
}
