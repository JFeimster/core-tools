import { CollectionBuilder } from "@/components/collection-builder";

export const metadata = {
  title: "Collection Builder • Core Tool Directory",
  description: "Generate collection JSON fast."
};

export default function CollectionBuilderPage() {
  return (
    <div className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <CollectionBuilder />
      </div>
    </div>
  );
}
