import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBrandBySlug, getBrandIndex, getToolsByBrandSlug } from "@/lib/brands";
import { DirectoryControls } from "@/components/directory-controls";
import { getAllBrands } from "@/lib/tools";

export function generateStaticParams() {
  return getBrandIndex().map((b) => ({ brand: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand } = await params;

  const b = getBrandBySlug(brand);
  if (!b) return { title: "Brand Not Found" };

  return {
    title: `${b.brand} • Core Tool Directory`,
    description: `All tools for ${b.brand}.`,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand: brandSlug } = await params;

  const brand = getBrandBySlug(brandSlug);
  if (!brand) return notFound();

  const tools = getToolsByBrandSlug(brandSlug);
  const brands = getAllBrands();

  return (
    <div className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="text-xs uppercase font-black tracking-widest text-[color:var(--accent2)]">
              brand page
            </div>
            <h1 className="mt-2 text-3xl md:text-4xl font-black uppercase">{brand.brand}</h1>
            <p className="mt-2 text-sm text-[color:var(--muted)] font-sans">
              Tools: <span className="text-[color:var(--fg)] font-black">{tools.length}</span>
            </p>
          </div>

          <div className="flex gap-2">
            <Link className="brut-btn px-4 py-2 text-xs" href="/brands">
              ← All brands
            </Link>
            <Link className="brut-btn px-4 py-2 text-xs" href="/tools">
              All tools
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <DirectoryControls brands={brands} initialTools={tools} showResults />
        </div>
      </div>
    </div>
  );
}
