import type { Tool } from "@/lib/types";

export function buildEmbedSnippet(tool: Tool) {
  // For static export, base URL should be your deployed domain.
  // Replace YOUR_DOMAIN after deploy (or set a canonical in your own docs).
  const src = `https://YOUR_DOMAIN/tools/${tool.slug}/embed`;
  return [
    `<!-- ${tool.name} embed -->`,
    `<iframe`,
    `  src="${src}"`,
    `  width="100%"`,
    `  height="720"`,
    `  style="border:0; background:#0b0b0b;"`,
    `  loading="lazy"`,
    `  referrerpolicy="no-referrer-when-downgrade"`,
    `></iframe>`
  ].join("\n");
}

export function buildLandingPageDraft(tool: Tool) {
  const bullets = tool.inputs.slice(0, 4).map((i) => `- **${i.label}**`).join("\n") || `- **Fast input → fast output**`;

  return [
    `# ${tool.name}`,
    ``,
    `**Brand:** ${tool.brand}`,
    ``,
    `## The problem`,
    `${tool.pain}`,
    ``,
    `## The 60-second fix`,
    `${tool.oneLiner ?? "Run the inputs. Get the answer. Generate a shareable artifact."}`,
    ``,
    `## What you enter`,
    bullets,
    ``,
    `## The output`,
    `**Artifact:** ${tool.artifact}`,
    ``,
    `## The CTA`,
    `**${tool.ctaLabel}** → ${tool.ctaUrl}`,
    ``,
    `---`,
    ``,
    `## Embed this tool`,
    `Paste this iframe on any partner page:`,
    ``,
    "```html",
    buildEmbedSnippet(tool),
    "```",
    ``,
    `---`,
    ``,
    `## Neo-brutal section copy (drop-in)`,
    `**Headline:** Stop guessing. Run the numbers.`,
    `**Subhead:** If the math says you’re bleeding, you fix it now — not after the next denial.`,
    `**Proof hook:** Artifact delivered in under 60 seconds: ${tool.artifact}.`,
    ``,
    `**Disclaimer:** Estimates only. Terms depend on underwriting / eligibility.`
  ].join("\n");
}
