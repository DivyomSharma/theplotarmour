export type NavItem = { href: string; label: string };

export type Company = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  mission: string;
  description: string;
  industries?: string[];
  status: "Building" | "Live" | "Planned";
  accentColor: string;
  accentBg: string;
  url?: string;
};

export type ResearchPaper = {
  id: string;
  date: string;
  title: string;
  description: string;
  readTime: string;
  slug: string;
  author: string;
};

export type Blueprint = {
  id: string;
  title: string;
  desc: string;
  components: string[];
  deployment: string;
};

export type WorkItem = {
  name: string;
  category: string;
  summary: string;
  state: "Live" | "In Development";
  href?: string;
  accent: string;
};

export const navItems: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/companies", label: "Companies" },
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/merchandise", label: "Merch" },
  { href: "/store", label: "Store" },
  { href: "/careers", label: "Careers" },
  { href: "/journal", label: "Journal" },
  { href: "/research", label: "Research" },
  { href: "/blueprints", label: "Blueprints" },
  { href: "/contact", label: "Contact" },
];

export const companies: Company[] = [
  {
    slug: "convoke",
    name: "Convoke",
    tagline: "Talent & Community Infrastructure",
    category: "Community & Opportunities",
    mission: "Helping students and professionals discover opportunities and collaborate.",
    description:
      "Convoke builds the infrastructural layers for talent ecosystems. It connects builders, developers, and practitioners to collaborative hubs and career pipelines without transactional friction.",
    industries: ["Talent Sourcing", "Professional Networks", "Community Management"],
    status: "Building",
    accentColor: "#ea580c",
    accentBg: "rgba(234, 88, 12, 0.08)",
  },
  {
    slug: "keystone",
    name: "Keystone",
    tagline: "Enterprise Workforce Infrastructure",
    category: "Workforce Infrastructure",
    mission: "Helping organizations hire, manage, and operate workforce at scale.",
    description:
      "Keystone is workforce engineering. We automate enterprise contract staffing, permanent placements, compliance audits, payroll processing, and operations for gig and distributed teams.",
    industries: ["Contract Staffing", "Payroll", "Compliance", "Gig Workforce"],
    status: "Building",
    accentColor: "#1d4ed8",
    accentBg: "rgba(29, 78, 216, 0.08)",
    url: "https://keystoneai.co",
  },
  {
    slug: "verity",
    name: "Verity",
    tagline: "Enterprise Operations Platform",
    category: "Enterprise Operations",
    mission: "The operating system for distributed service operations.",
    description:
      "Verity orchestrates operational workflows for highly complex, multi-site service businesses, bridging communication between dispatchers, field staff, and reporting metrics.",
    industries: ["Healthcare", "Logistics", "Professional Services", "Facility Operations"],
    status: "Building",
    accentColor: "#059669",
    accentBg: "rgba(5, 150, 105, 0.08)",
  },
  {
    slug: "veda",
    name: "VEDA",
    tagline: "Manufacturing Operations Platform",
    category: "Manufacturing Operations",
    mission: "Purpose-built operating system for modern manufacturers.",
    description:
      "VEDA connects planning boards, material inventory logs, dispatch lines, and machine telemetry feeds into a single factory-wide intelligence platform.",
    industries: ["Industrial Systems", "Automotive Assembly", "MSMEs"],
    status: "Building",
    accentColor: "#c2410c",
    accentBg: "rgba(194, 65, 12, 0.08)",
  },
  {
    slug: "studio",
    name: "PlotArmour Studio",
    tagline: "Innovation & Venture Building Engine",
    category: "Research & Venture Building",
    mission: "Researching, designing, and engineering the PlotArmour ecosystem.",
    description:
      "Studio operates as the internal venture lab. It maps industry operations, builds reusable technology stacks, and constructs initial product blueprints.",
    status: "Live",
    accentColor: "#7c3aed",
    accentBg: "rgba(124, 58, 237, 0.08)",
    url: "https://studio.theplotarmour.xyz",
  },
  {
    slug: "store",
    name: "PlotArmour Store",
    tagline: "Products & Merchandise",
    category: "Lifestyle & Merchandise",
    mission: "Creative drops, IP products, and lifestyle apparel expressing our values.",
    description:
      "The Store is our primary retail canvas. We release drops, design apparel collections, and showcase physical brand items directly to the community.",
    status: "Planned",
    accentColor: "#525252",
    accentBg: "rgba(82, 82, 82, 0.08)",
    url: "https://store.theplotarmour.xyz",
  },
];

export const researchPapers: ResearchPaper[] = [
  {
    id: "R-098",
    date: "July 2026",
    title: "Structural Inefficiencies in Gig-Workforce Orchestration",
    description: "An analysis of compliance friction, payroll settlement delays, and trust boundaries in high-density staffing markets.",
    readTime: "12 min read",
    slug: "gig-workforce-orchestration",
    author: "PlotArmour Research Group",
  },
  {
    id: "R-095",
    date: "June 2026",
    title: "The Industrial IoT Telemetry Bottleneck",
    description: "Documenting protocol discrepancies, telemetry parsing lags, and synchronization patterns inside mid-scale automotive manufacturing plants.",
    readTime: "15 min read",
    slug: "iiot-telemetry-bottleneck",
    author: "VEDA Engineering Core",
  },
  {
    id: "R-092",
    date: "May 2026",
    title: "Venture Architecture: Restructuring Legacy Enterprises",
    description: "Designing isolated operational frameworks that enable small builder cores to scale category-defining enterprise platforms.",
    readTime: "9 min read",
    slug: "venture-architecture-legacy-enterprises",
    author: "Venture Lab Core",
  },
];

export const blueprints: Blueprint[] = [
  {
    id: "BP-04",
    title: "Distributed Payroll & Compliance Ledger",
    desc: "A reference implementation for real-time compliance validation and multi-tier contractor payout execution.",
    components: ["Settlement Router", "Audit Logger", "Identity Mapping"],
    deployment: "Vercel Edge & Cloudflare Workers",
  },
  {
    id: "BP-03",
    title: "Factory Telemetry Sync Gateway",
    desc: "Low-latency message bus mapping MQTT/OPC UA device signals directly into operations databases.",
    components: ["Broker Gateway", "Queue Manager", "Parser Pipeline"],
    deployment: "AWS ECS & TimescaleDB",
  },
  {
    id: "BP-02",
    title: "Unified Identity & Sourcing Engine",
    desc: "A centralized tokenization schema linking candidate profiles to active hiring nodes without raw data leakage.",
    components: ["Profile Vault", "Verification Node", "Match Engine"],
    deployment: "Edge DB & Supabase Postgres",
  },
];

export const workItems: WorkItem[] = [
  {
    name: "Battalion",
    category: "Strategic Multiplayer",
    summary: "A tactical multiplayer experience focused on resource routing, negotiation, and territorial control.",
    state: "Live",
    href: "https://playbattalion.vercel.app",
    accent: "from-red-500/20 to-transparent",
  },
  {
    name: "Candor AI",
    category: "AI Social Platform",
    summary: "An AI-powered social platform analyzing compatibility and contexts to connect aligned individuals in real-time.",
    state: "Live",
    href: "https://becandor.vercel.app",
    accent: "from-sky-500/20 to-transparent",
  },
  {
    name: "CourtWise AI",
    category: "Legal Learning AI",
    summary: "An AI-driven legal learning platform simplifying case law and legal learning via structured analysis.",
    state: "Live",
    href: "https://courtwiseai.vercel.app",
    accent: "from-violet-500/20 to-transparent",
  },
  {
    name: "The Last Procession",
    category: "Multiplayer Horror",
    summary: "A multiplayer horror experience centered on psychological tension and cooperative survival.",
    state: "In Development",
    accent: "from-zinc-500/20 to-transparent",
  },
];

export const timeline = [
  { year: "2023", event: "Foundation", description: "PlotArmour established as an execution platform for brands and products." },
  { year: "2024", event: "Studio Core", description: "Internal venture lab formalised, designing initial product architectures." },
  { year: "2024", event: "Convoke Initiation", description: "Sourcing and community platform launched to bridge opportunity maps." },
  { year: "2025", event: "VEDA & Verity Platforms", description: "Dual-track development launched across manufacturing and services." },
  { year: "2025", event: "Keystone Integration", description: "Workforce operations platform launched for distributed teams." },
  { year: "2026+", event: "Independent Scale", description: "PlotArmour companies transition to autonomous scale, backed by Group R&D." },
];

export const cultureValues = [
  { title: "Systems Thinking", body: "We construct durable architectures, not temporary quick-fixes. Every solution is scale-tested." },
  { title: "Execution Velocity", body: "We document and validate via active shipping. We trust builders who build over planners who plan." },
  { title: "Long-Term Alignment", body: "Operational bedrock takes seasons to construct. We measure outcomes in years, not quarters." },
  { title: "Dense Teams", body: "We run focused groups of highly capable owners. Complexity is rejected in favor of high coordination." },
];

export const philosophy = [
  {
    statement: "We build systems.",
    explanation:
      "Not features, not campaigns. We architect the operational layer that makes industries run differently.",
  },
  {
    statement: "We build infrastructure.",
    explanation:
      "Our companies solve fundamental problems. Not nice-to-have tools — the bedrock that others build on top of.",
  },
  {
    statement: "We build companies.",
    explanation:
      "Each company owns its category. Independent leadership, brand, roadmap, and future. Connected by a shared philosophy of execution.",
  },
];
