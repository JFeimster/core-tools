import { ToolBuilder } from "@/components/tool-builder";

export const metadata = {
  title: "Tool Builder • Core Tool Directory",
  description: "Generate tool JSON fast."
};

export default function ToolBuilderPage() {
  return (
    <div className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <ToolBuilder />
      </div>
    </div>
  );
}
