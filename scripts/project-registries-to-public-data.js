import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");

const date = new Date().toISOString().slice(0, 10);

const registryItems = [
  {
    name: "Burn Rate Runway Extender",
    slug: "rokfi-burn-rate-runway-extender",
    sequence: 1,
    persona: "Startup founder",
    description:
      "Estimate runway, net burn, and the point where funding review should start.",
    path: "/tools/rokfi-burn-rate-runway-extender/",
    url: "https://core-tools.vercel.app/tools/rokfi-burn-rate-runway-extender/",
    asset_type: "calculator",
    workflow_stage: "awareness",
    use_case: "Founder runway triage",
    categories: ["startup-funding", "emergency-funding"],
    bundle_candidates: ["startup-funding", "emergency-funding"],
    automation_level: "low",
    human_review_required: false,
    compliance_sensitivity: "medium",
    front_end_visibility: "public",
    status: "active",
    featured: true,
    collection: "startup-funding",
    primary_cta_label: "Review funding options",
    primary_cta_url: "https://bankbreezy.com/funding/jason/",
    secondary_cta_label: "Share embed",
    secondary_cta_url: "/tools/rokfi-burn-rate-runway-extender/embed",
    tags: ["startup", "runway", "burn"],
    related_assets: ["tools/rokfi-burn-rate-runway-extender/landing/index.html"],
    provider_visibility: "internal-only",
    source_registry: "funding-tools",
    artifact_root: "tools/rokfi-burn-rate-runway-extender/",
    artifacts: {
      landing: { path: "tools/rokfi-burn-rate-runway-extender/landing/index.html" },
      embed: { path: "tools/rokfi-burn-rate-runway-extender/embed/index.html" },
      readme: { path: "tools/rokfi-burn-rate-runway-extender/README.md" },
      config: { path: "tools/rokfi-burn-rate-runway-extender/tool.config.json" },
      assets: { path: "tools/rokfi-burn-rate-runway-extender/assets/" },
      exports: { path: "tools/rokfi-burn-rate-runway-extender/exports/" }
    },
    internal: {
      affiliate_partner: "internal",
      provider_routing: "burn-rate widget fallback",
      core_logic: "Estimate runway from cash, burn, and revenue."
    }
  },
  ...[
    ["invoice-float-bridge", "Invoice Float Bridge", "Accounts receivable holder", "Bridge a short delay between invoice issuance and payment arrival.", "invoice-funding", "cash-flow-bridges", "cash-flow-bridges", "invoice bridge"],
    ["payroll-gap-bridge", "Payroll Gap Bridge", "Payroll risk owner", "Cover payroll when cash lands after the due date.", "emergency-funding", "emergency-funding", "emergency-funding", "payroll bridge"],
    ["inventory-reorder-bridge", "Inventory Reorder Bridge", "Inventory buyer", "Estimate funding needed to restock before sell-through stalls.", "inventory-funding", "cash-flow-bridges", "cash-flow-bridges", "inventory reorder"],
    ["job-material-bridge", "Job Material Bridge", "Contractor", "Estimate the advance needed to buy materials before milestone billing.", "equipment-funding", "equipment-vehicle-funding", "equipment-vehicle-funding", "materials bridge"],
    ["repair-vs-replace-bridge", "Repair vs Replace Bridge", "Fleet owner", "Compare repair cash need versus replacement financing urgency.", "equipment-funding", "equipment-vehicle-funding", "equipment-vehicle-funding", "fleet bridge"],
    ["bad-credit-funding-bridge", "Bad Credit Funding Bridge", "Owner with credit friction", "Find a conservative path for owners with limited credit options.", "bad-credit-funding", "bad-credit-funding", "bad-credit-funding", "credit-bridge"],
    ["revenue-based-bridge", "Revenue Based Bridge", "Founder", "Estimate an advance sized for recurring revenue and payback tolerance.", "startup-funding", "startup-funding", "startup-funding", "revenue bridge"],
    ["merchant-cash-advance-compare", "MCA Compare", "Merchant owner", "Compare the daily bite of a merchant cash advance with safer alternatives.", "mca-funding", "bad-credit-funding", "bad-credit-funding", "mca"],
    ["tax-settlement-bridge", "Tax Settlement Bridge", "Taxpayer", "Estimate a short-term bridge for back taxes and installment pressure.", "tax-funding", "tax-funding", "tax-funding", "tax bridge"],
    ["irs-payment-plan-planner", "IRS Payment Plan Planner", "Taxpayer", "Plan a payment schedule before the IRS notice becomes a scramble.", "tax-funding", "tax-funding", "tax-funding", "tax plan"],
    ["startup-runway-planner", "Startup Runway Planner", "Founder", "Translate cash and burn into a simple runway planning estimate.", "startup-funding", "startup-funding", "startup-funding", "runway"],
    ["gig-income-stabilizer", "Gig Income Stabilizer", "Gig worker", "Smooth out income swings and estimate short-term funding needs.", "gig-income", "gig-worker-funding", "gig-worker-funding", "gig income"],
    ["rideshare-cash-bridge", "Rideshare Cash Bridge", "Driver", "Bridge the gap between rideshare payouts and weekly bills.", "gig-income", "gig-worker-funding", "gig-worker-funding", "rideshare"],
    ["creator-income-bridge", "Creator Income Bridge", "Creator", "Stabilize creator cash flow when sponsorships and payouts lag.", "gig-income", "gig-worker-funding", "gig-worker-funding", "creator"],
    ["affiliate-payout-accelerator", "Affiliate Payout Accelerator", "Affiliate operator", "Estimate the gap between earned commissions and cash timing.", "affiliate-funding", "affiliate-ops", "broker-affiliate-tools", "affiliate"],
    ["broker-book-closing-bridge", "Broker Book Closing Bridge", "Broker", "Estimate the funding gap between deal close and commission settlement.", "broker-funding", "broker-affiliate-tools", "broker-affiliate-tools", "broker"],
    ["real-estate-earnest-money-bridge", "Earnest Money Bridge", "Investor", "Estimate the liquidity required to secure a real estate deal quickly.", "real-estate-funding", "real-estate-funding", "real-estate-funding", "earnest money"],
    ["flip-renovation-bridge", "Flip Renovation Bridge", "Flipper", "Estimate bridge capital for renovation work before resale cash arrives.", "real-estate-funding", "real-estate-funding", "real-estate-funding", "renovation"],
    ["bridge-loan-readiness-check", "Bridge Loan Readiness Check", "Founder", "Check documents and risk flags before applying for a bridge loan.", "startup-funding", "funding-readiness", "funding-readiness", "readiness"],
    ["cashflow-reserve-planner", "Cashflow Reserve Planner", "Operator", "Size a reserve that reduces the chance of a short-term funding emergency.", "emergency-funding", "funding-readiness", "funding-readiness", "reserve"],
    ["commission-recovery-planner", "Commission Recovery Planner", "Sales operator", "Plan around delayed commissions and back-office settlement lag.", "commission-funding", "commission-tools", "commission-tools", "commission"],
    ["client-acquisition-bridge", "Client Acquisition Bridge", "Agency owner", "Estimate cash needed to bridge marketing spend before client payment lands.", "startup-funding", "startup-funding", "startup-funding", "acquisition"],
    ["merchant-stack-optimizer", "Merchant Stack Optimizer", "Business owner", "Compare common funding stack pressure against a simplified plan.", "bad-credit-funding", "bad-credit-funding", "bad-credit-funding", "stack"],
    ["equipment-acquisition-planner", "Equipment Acquisition Planner", "Operator", "Estimate equipment finance needs and timing for an urgent purchase.", "equipment-funding", "equipment-vehicle-funding", "equipment-vehicle-funding", "equipment"]
  ].map(([slug, name, persona, description, useCase, collection, category, tag]) => ({
    name,
    slug,
    sequence: 0,
    persona,
    description,
    path: `/tools/${slug}/`,
    url: `https://core-tools.vercel.app/tools/${slug}/`,
    asset_type: "calculator",
    workflow_stage: "consideration",
    use_case: useCase,
    categories: [collection, category],
    bundle_candidates: [collection, category],
    automation_level: "low",
    human_review_required: true,
    compliance_sensitivity: "medium",
    front_end_visibility: "public",
    status: "backlog",
    featured: false,
    collection,
    primary_cta_label: "Review options",
    primary_cta_url: "https://bankbreezy.com/funding/jason/",
    secondary_cta_label: "Open tool",
    secondary_cta_url: `/tools/${slug}/embed`,
    tags: [tag, "funding"],
    related_assets: [`tools/${slug}/landing/index.html`, `tools/${slug}/embed/index.html`],
    provider_visibility: "internal-only",
    source_registry: "funding-tools",
    artifact_root: `tools/${slug}/`,
    artifacts: {
      landing: { path: `tools/${slug}/landing/index.html` },
      embed: { path: `tools/${slug}/embed/index.html` },
      readme: { path: `tools/${slug}/README.md` },
      config: { path: `tools/${slug}/tool.config.json` },
      assets: { path: `tools/${slug}/assets/` },
      exports: { path: `tools/${slug}/exports/` }
    },
    internal: {
      affiliate_partner: "internal",
      provider_routing: "internal",
      core_logic: "safe public projection only"
    }
  }))
];

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function writeJson(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function publicTool(tool) {
  return {
    slug: tool.slug,
    brand: "Core Tools",
    name: tool.name,
    oneLiner: tool.description,
    pain: tool.description,
    artifact: tool.asset_type,
    inputs: [
      { key: "amount", label: "Amount", type: "number", defaultValue: "10000" }
    ],
    logic: "Public-safe summary only.",
    ctaLabel: tool.primary_cta_label,
    ctaUrl: tool.primary_cta_url,
    tags: tool.tags,
    runner: { type: "none" }
  };
}

function buildCollections(toolSlugs) {
  return [
    {
      slug: "funding-tools",
      title: "Funding Tools",
      oneLiner: "Core funding tools for public browsing and lead capture.",
      audience: "Business owners",
      primaryCtaLabel: "Open tools",
      primaryCtaUrl: "/tools",
      toolSlugs: toolSlugs.slice(0, 12),
      tags: ["funding", "tools"]
    },
    {
      slug: "cash-flow-bridges",
      title: "Cash Flow Bridges",
      oneLiner: "Tools for delaying the pain between work completed and cash received.",
      audience: "Operators under timing pressure",
      primaryCtaLabel: "See bridge tools",
      primaryCtaUrl: "/tools",
      toolSlugs: toolSlugs.filter((slug) => /bridge|float|runway|inventory|payroll|invoice/i.test(slug)),
      tags: ["cashflow", "bridge"]
    },
    {
      slug: "gig-worker-funding",
      title: "Gig Worker Funding",
      oneLiner: "Tools for income smoothing and short-term liquidity planning.",
      audience: "Gig workers and creators",
      primaryCtaLabel: "Open gig tools",
      primaryCtaUrl: "/tools",
      toolSlugs: toolSlugs.filter((slug) => /gig|rideshare|creator/i.test(slug)),
      tags: ["gig", "income"]
    },
    {
      slug: "broker-affiliate-tools",
      title: "Broker and Affiliate Tools",
      oneLiner: "Tools for commissions, partner timing, and deal flow.",
      audience: "Brokers and affiliates",
      primaryCtaLabel: "Open partner tools",
      primaryCtaUrl: "/tools",
      toolSlugs: toolSlugs.filter((slug) => /affiliate|broker|commission/i.test(slug)),
      tags: ["affiliate", "broker"]
    },
    {
      slug: "real-estate-funding",
      title: "Real Estate Funding",
      oneLiner: "Bridge tools for acquisition, earnest money, and renovation timing.",
      audience: "Investors and flippers",
      primaryCtaLabel: "Open real estate tools",
      primaryCtaUrl: "/tools",
      toolSlugs: toolSlugs.filter((slug) => /real-estate|flip|earnest/i.test(slug)),
      tags: ["real-estate", "bridge"]
    },
    {
      slug: "equipment-vehicle-funding",
      title: "Equipment and Vehicle Funding",
      oneLiner: "Tools for machinery, vehicles, and replacement timing.",
      audience: "Operators and fleet owners",
      primaryCtaLabel: "Open equipment tools",
      primaryCtaUrl: "/tools",
      toolSlugs: toolSlugs.filter((slug) => /equipment|repair|replace|job-material/i.test(slug)),
      tags: ["equipment", "vehicle"]
    },
    {
      slug: "tax-funding",
      title: "Tax Funding",
      oneLiner: "Planning tools for tax settlement pressure and payment schedules.",
      audience: "Taxpayers and business owners",
      primaryCtaLabel: "Open tax tools",
      primaryCtaUrl: "/tools",
      toolSlugs: toolSlugs.filter((slug) => /tax|irs/i.test(slug)),
      tags: ["tax", "planning"]
    },
    {
      slug: "startup-funding",
      title: "Startup Funding",
      oneLiner: "Founder-focused runway and bridge planning tools.",
      audience: "Startup founders",
      primaryCtaLabel: "Open startup tools",
      primaryCtaUrl: "/tools",
      toolSlugs: toolSlugs.filter((slug) => /startup|runway|revenue-based|client-acquisition|bridge-loan/i.test(slug)),
      tags: ["startup", "runway"]
    },
    {
      slug: "bad-credit-funding",
      title: "Bad Credit Funding",
      oneLiner: "Tools that handle credit friction with safer public-safe language.",
      audience: "Owners with credit constraints",
      primaryCtaLabel: "Open credit tools",
      primaryCtaUrl: "/tools",
      toolSlugs: toolSlugs.filter((slug) => /bad-credit|merchant-stack|mca/i.test(slug)),
      tags: ["credit", "funding"]
    },
    {
      slug: "funding-readiness",
      title: "Funding Readiness",
      oneLiner: "Readiness tools that help owners prepare before they apply.",
      audience: "Operators preparing a package",
      primaryCtaLabel: "Review readiness",
      primaryCtaUrl: "/tools",
      toolSlugs: toolSlugs.filter((slug) => /readiness|reserve|planner/i.test(slug)),
      tags: ["readiness", "planning"]
    },
    {
      slug: "commission-tools",
      title: "Commission Tools",
      oneLiner: "Tools for commission timing and recovery planning.",
      audience: "Sales teams and brokers",
      primaryCtaLabel: "Open commission tools",
      primaryCtaUrl: "/tools",
      toolSlugs: toolSlugs.filter((slug) => /commission|broker-book/i.test(slug)),
      tags: ["commission", "ops"]
    },
    {
      slug: "emergency-funding",
      title: "Emergency Funding",
      oneLiner: "Short-term triage tools for urgent cash timing problems.",
      audience: "Owners under time pressure",
      primaryCtaLabel: "Open emergency tools",
      primaryCtaUrl: "/tools",
      toolSlugs: toolSlugs.filter((slug) => /cashflow-reserve-planner|payroll-gap-bridge|invoice-float-bridge|runway/i.test(slug)),
      tags: ["emergency", "bridge"]
    }
  ].filter((collection) => collection.toolSlugs.length > 0);
}

function mergeCollections(existing, next) {
  const map = new Map(existing.map((collection) => [collection.slug, collection]));

  for (const collection of next) {
    map.set(collection.slug, collection);
  }

  return Array.from(map.values());
}

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function scaffoldToolArtifacts(slug, name) {
  const base = resolve(rootDir, "tools", slug);
  ensureDir(resolve(base, "landing"));
  ensureDir(resolve(base, "embed"));
  ensureDir(resolve(base, "assets"));
  ensureDir(resolve(base, "exports"));
  writeFileSync(
    resolve(base, "README.md"),
    `# ${name}\n\nPublic-safe tool scaffold generated from the funding registry.\n`,
    "utf8"
  );
  writeJson(resolve(base, "tool.config.json"), {
    slug,
    name,
    status: "scaffolded",
    artifactRoot: `tools/${slug}/`
  });
}

const toolsPath = resolve(rootDir, "data/tools.json");
const collectionsPath = resolve(rootDir, "data/collections.json");
const registryDir = resolve(rootDir, "registries");
const publicIndexPath = resolve(rootDir, "data/public-tool-index.json");

const existingTools = readJson(toolsPath);
const existingCollections = readJson(collectionsPath);
const existingSlugs = new Set(existingTools.map((tool) => tool.slug));

const projectedToolsBySlug = new Map(
  registryItems.map((item) => [item.slug, publicTool(item)])
);

const updatedExistingTools = existingTools.map((tool) => {
  const projectedTool = projectedToolsBySlug.get(tool.slug);

  if (!projectedTool) {
    return tool;
  }

  return {
    ...tool,
    ...projectedTool,
    slug: tool.slug,
  };
});

const newPublicTools = registryItems
  .filter((item) => !existingSlugs.has(item.slug))
  .map(publicTool);

const mergedTools = [...updatedExistingTools, ...newPublicTools];
const mergedCollections = mergeCollections(existingCollections, buildCollections(mergedTools.map((tool) => tool.slug)));

const registryPayload = {
  registry_name: "Funding Tools Registry",
  registry_slug: "funding-tools",
  version: "1.0.0",
  source_sheet: "registry/backlog import",
  purpose:
    "Internal planning registry for funding tools, routing, and per-tool artifact tracking.",
  privacy: "internal",
  public_projection_target: "data/tools.json",
  recommended_public_fields: [
    "slug",
    "brand",
    "name",
    "oneLiner",
    "pain",
    "artifact",
    "inputs",
    "logic",
    "ctaLabel",
    "ctaUrl",
    "tags",
    "runner"
  ],
  recommended_internal_fields: ["internal", "provider_visibility", "artifacts", "artifact_root"],
  status_workflow: ["backlog", "scaffolded", "review", "active", "deprecated"],
  items: registryItems
};

writeJson(resolve(registryDir, "funding-tools.registry.json"), registryPayload);

writeJson(
  resolve(registryDir, "registry-index.json"),
  {
    visibility: "internal",
    registries: [
      { file: "funding-tools.registry.json", purpose: "Funding tool backlog and routing." },
      { file: "affiliate-offers.registry.json", purpose: "Internal affiliate offer planning." },
      { file: "tool-artifacts.registry.json", purpose: "Per-tool static artifact inventory." },
      { file: "cta-routing.registry.json", purpose: "Reusable CTA destinations and labels." },
      { file: "compliance-rules.registry.json", purpose: "Risk and disclaimer mapping." },
      { file: "brands.registry.json", purpose: "Brand registry for internal organization." },
      { file: "collections.registry.json", purpose: "Collection planning and public bundles." },
      { file: "personas.registry.json", purpose: "Persona inventory derived from registry items." },
      { file: "content-clusters.registry.json", purpose: "Content cluster planning for expansion." },
      { file: "deployment-assets.registry.json", purpose: "Static artifact and export tracking." },
      { file: "playbooks.registry.json", purpose: "Workflow bundle and playbook mapping." },
      { file: "automation-tools.registry.json", purpose: "Future automation tool registry." },
      { file: "tool-status.registry.json", purpose: "Lifecycle status reference." },
      { file: "embed-targets.registry.json", purpose: "Embed-ready target inventory." },
      { file: "lead-magnets.registry.json", purpose: "Lead magnet planning." },
      { file: "downloadable-assets.registry.json", purpose: "Downloadable asset planning." },
      { file: "form-fields.registry.json", purpose: "Reusable form field inventory." },
      { file: "output-artifacts.registry.json", purpose: "Generated output artifact inventory." },
      { file: "risk-disclaimers.registry.json", purpose: "Risk disclaimer catalog." },
      { file: "tool-prompts.registry.json", purpose: "Prompt and copy starter inventory." },
      { file: "seo-metadata.registry.json", purpose: "SEO metadata planning." },
      { file: "funnel-routes.registry.json", purpose: "Funnel route planning." },
      { file: "provider-routing.registry.json", purpose: "Internal provider routing notes." },
      { file: "internal-notes.registry.json", purpose: "Private operating notes." },
      { file: "monetization.registry.json", purpose: "Monetization planning and tracking." },
      { file: "registry-schema.json", purpose: "Registry metadata schema." },
      { file: "tool-artifact-schema.json", purpose: "Tool artifact schema." },
      { file: "public-projection-map.json", purpose: "Internal-to-public field mapping." },
      { file: "collection-map.json", purpose: "Registry collection mapping." }
    ]
  }
);

writeJson(resolve(registryDir, "tool-artifacts.registry.json"), {
  visibility: "internal",
  items: registryItems.map((item) => ({
    slug: item.slug,
    artifact_root: item.artifact_root,
    artifacts: item.artifacts,
    status: item.status
  }))
});

writeJson(resolve(registryDir, "cta-routing.registry.json"), {
  visibility: "internal",
  routes: [
    { label: "Review options", url: "https://bankbreezy.com/funding/jason/" },
    { label: "Open tools", url: "/tools" },
    { label: "Share embed", url: "/tools/rokfi-burn-rate-runway-extender/embed" }
  ]
});

writeJson(resolve(registryDir, "compliance-rules.registry.json"), {
  visibility: "internal",
  rules: [
    { category: "funding", disclaimer: "Estimates only. Underwriting determines terms." },
    { category: "tax", disclaimer: "Not tax advice. Review with a qualified professional." }
  ]
});

writeJson(resolve(registryDir, "collections.registry.json"), {
  visibility: "internal",
  collections: mergedCollections.map((collection) => ({
    slug: collection.slug,
    title: collection.title,
    description: collection.oneLiner,
    toolCount: collection.toolSlugs.length
  }))
});

writeJson(resolve(registryDir, "personas.registry.json"), {
  visibility: "internal",
  personas: Array.from(new Set(registryItems.map((item) => item.persona))).sort()
});

writeJson(resolve(registryDir, "content-clusters.registry.json"), {
  visibility: "internal",
  clusters: [
    { slug: "funding-readiness", purpose: "Readiness content and lead magnets." },
    { slug: "cash-flow-bridges", purpose: "Runway and invoice timing content." }
  ]
});

writeJson(resolve(registryDir, "deployment-assets.registry.json"), {
  visibility: "internal",
  assets: registryItems.map((item) => item.artifact_root)
});

writeJson(resolve(registryDir, "playbooks.registry.json"), {
  visibility: "internal",
  playbooks: mergedCollections.map((collection) => ({
    slug: collection.slug,
    title: collection.title,
    toolSlugs: collection.toolSlugs
  }))
});

writeJson(resolve(registryDir, "automation-tools.registry.json"), {
  visibility: "internal",
  tools: []
});

writeJson(resolve(registryDir, "registry-schema.json"), {
  registry_name: "Registry Schema",
  visibility: "internal",
  fields: ["slug", "title", "description", "items", "visibility"]
});

writeJson(resolve(registryDir, "tool-artifact-schema.json"), {
  visibility: "internal",
  fields: ["artifact_root", "artifacts", "status"]
});

writeJson(resolve(registryDir, "public-projection-map.json"), {
  visibility: "internal",
  allow: ["slug", "brand", "name", "oneLiner", "pain", "artifact", "inputs", "logic", "ctaLabel", "ctaUrl", "tags", "runner"],
  block: ["internal", "affiliate_partner", "provider_routing", "commission_logic"]
});

writeJson(resolve(registryDir, "collection-map.json"), {
  visibility: "internal",
  map: mergedCollections.map((collection) => ({
    slug: collection.slug,
    toolSlugs: collection.toolSlugs
  }))
});

writeJson(resolve(registryDir, "affiliate-offers.registry.json"), {
  visibility: "internal",
  items: [
    {
      slug: "sample-offer",
      visibility: "internal",
      note: "Placeholder internal offer record."
    }
  ]
});

writeJson(resolve(registryDir, "brands.registry.json"), {
  visibility: "internal",
  brands: Array.from(new Set(existingTools.map((tool) => tool.brand))).sort()
});

writeJson(resolve(registryDir, "tool-status.registry.json"), {
  visibility: "internal",
  statuses: ["backlog", "scaffolded", "review", "active", "deprecated"]
});

writeJson(resolve(registryDir, "embed-targets.registry.json"), {
  visibility: "internal",
  targets: mergedTools.slice(0, 5).map((tool) => ({ slug: tool.slug, path: `/tools/${tool.slug}/embed` }))
});

writeJson(resolve(registryDir, "lead-magnets.registry.json"), {
  visibility: "internal",
  items: []
});

writeJson(resolve(registryDir, "downloadable-assets.registry.json"), {
  visibility: "internal",
  items: []
});

writeJson(resolve(registryDir, "form-fields.registry.json"), {
  visibility: "internal",
  items: []
});

writeJson(resolve(registryDir, "output-artifacts.registry.json"), {
  visibility: "internal",
  items: []
});

writeJson(resolve(registryDir, "risk-disclaimers.registry.json"), {
  visibility: "internal",
  items: []
});

writeJson(resolve(registryDir, "tool-prompts.registry.json"), {
  visibility: "internal",
  items: []
});

writeJson(resolve(registryDir, "seo-metadata.registry.json"), {
  visibility: "internal",
  items: []
});

writeJson(resolve(registryDir, "funnel-routes.registry.json"), {
  visibility: "internal",
  items: []
});

writeJson(resolve(registryDir, "provider-routing.registry.json"), {
  visibility: "internal",
  items: []
});

writeJson(resolve(registryDir, "internal-notes.registry.json"), {
  visibility: "internal",
  items: []
});

writeJson(resolve(registryDir, "monetization.registry.json"), {
  visibility: "internal",
  items: []
});

writeJson(publicIndexPath, mergedTools.map((tool) => ({
  slug: tool.slug,
  name: tool.name,
  oneLiner: tool.oneLiner,
  ctaLabel: tool.ctaLabel,
  ctaUrl: tool.ctaUrl,
  tags: tool.tags
})));

writeJson(toolsPath, mergedTools);
writeJson(collectionsPath, mergedCollections);

for (const item of registryItems) {
  scaffoldToolArtifacts(item.slug, item.name);
}

console.log(
  `Projected ${newPublicTools.length} tools into data/tools.json, ${mergedCollections.length} collections, and ${registryItems.length} artifact folders.`
);
