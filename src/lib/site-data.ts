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

export const navItems: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/companies", label: "Companies" },
  { href: "/studio", label: "Studio" },
  { href: "/journal", label: "Journal" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const companies: Company[] = [
  {
    slug: "convoke",
    name: "Convoke",
    tagline: "Talent & Community Infrastructure",
    category: "Talent Infrastructure",
    mission: "Helping people discover opportunities, communities, and each other.",
    description:
      "Convoke is building the infrastructure layer for talent and community. Students, professionals, organizations, and communities use Convoke to discover opportunities, collaborate, and grow together.",
    industries: ["Education", "Professional Networking", "Community Platforms", "Career Development"],
    status: "Building",
    accentColor: "#ea580c",
    accentBg: "rgba(234, 88, 12, 0.08)",
  },
  {
    slug: "keystone",
    name: "Keystone",
    tagline: "Enterprise Workforce Infrastructure",
    category: "Workforce Infrastructure",
    mission: "Helping organizations hire, manage, and operate workforce at every scale.",
    description:
      "Keystone is the enterprise workforce infrastructure platform. It serves organizations that need to acquire, manage, and operate talent across contract staffing, permanent hiring, payroll, compliance, and managed workforce at scale.",
    industries: [
      "Contract Staffing",
      "Permanent Hiring",
      "Executive Search",
      "Payroll & Compliance",
      "Facility Management",
      "Gig Workforce",
      "Apprenticeships",
    ],
    status: "Building",
    accentColor: "#1d4ed8",
    accentBg: "rgba(29, 78, 216, 0.08)",
    url: "https://keystoneai.co",
  },
  {
    slug: "verity",
    name: "Verity",
    tagline: "Enterprise Operations Platform",
    category: "Operations Software",
    mission: "The operating system for service businesses.",
    description:
      "Verity brings clarity to every order, process, person, and proof in real time. It is purpose-built for service industries that run on operational complexity and need a single source of truth across their entire operation.",
    industries: [
      "Healthcare",
      "Construction",
      "Legal",
      "Consulting",
      "Education",
      "Retail Operations",
      "Hospitality",
      "Financial Services",
      "Real Estate",
      "Logistics",
    ],
    status: "Building",
    accentColor: "#059669",
    accentBg: "rgba(5, 150, 105, 0.08)",
  },
  {
    slug: "veda",
    name: "VEDA",
    tagline: "Manufacturing Operations Platform",
    category: "Manufacturing Software",
    mission: "Purpose-built operating system for manufacturers.",
    description:
      "VEDA is the factory operating system. Built from the ground up for manufacturers, it connects production, quality, inventory, planning, dispatch, and shop floor operations into a single intelligent platform.",
    industries: [
      "Automotive",
      "Garments",
      "Furniture",
      "Industrial Manufacturing",
      "MSMEs",
      "Large Manufacturers",
      "Food & Beverage",
    ],
    status: "Building",
    accentColor: "#c2410c",
    accentBg: "rgba(194, 65, 12, 0.08)",
  },
  {
    slug: "studio",
    name: "PlotArmour Studio",
    tagline: "Internal Innovation Studio",
    category: "Execution Engine",
    mission: "The execution engine behind every PlotArmour company.",
    description:
      "Studio is the internal capability that brings every PlotArmour company to life. It is not an agency. It is the team that handles brand, design, engineering, AI, product, research, growth, and media for the portfolio.",
    status: "Live",
    accentColor: "#7c3aed",
    accentBg: "rgba(124, 58, 237, 0.08)",
    url: "https://studio.theplotarmour.xyz",
  },
  {
    slug: "store",
    name: "PlotArmour Store",
    tagline: "Lifestyle & IP Brand",
    category: "Lifestyle Brand",
    mission: "The consumer and lifestyle arm of the PlotArmour group.",
    description:
      "The Store is where PlotArmour's creative identity meets culture. Merchandise, apparel, collectibles, books, and community products — all carrying the PlotArmour point of view.",
    status: "Planned",
    accentColor: "#525252",
    accentBg: "rgba(82, 82, 82, 0.08)",
    url: "https://store.theplotarmour.xyz",
  },
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

export const timeline = [
  { year: "2023", event: "Foundation", description: "PlotArmour established as an execution platform for brands and products." },
  { year: "2024", event: "Studio", description: "PlotArmour Studio formalised as the internal innovation and execution engine." },
  { year: "2024", event: "Convoke", description: "Talent and community infrastructure company initiated." },
  { year: "2025", event: "VEDA", description: "Manufacturing operations platform development begins." },
  { year: "2025", event: "Verity", description: "Enterprise operations platform for service industries initiated." },
  { year: "2025", event: "Keystone", description: "Enterprise workforce infrastructure platform launched." },
  { year: "2026+", event: "Expansion", description: "New independent infrastructure companies across underpenetrated industries." },
];

export const cultureValues = [
  { title: "Builders over followers.", body: "We are not here to copy what is trending. We build what should exist." },
  { title: "Long-term thinking.", body: "Infrastructure takes years. We are comfortable with that. Short-term noise does not move us." },
  { title: "Execution over noise.", body: "We ship. We iterate. We do not talk about what we are going to build. We build it." },
  { title: "Systems over shortcuts.", body: "Every solution we build is designed to scale, not to patch. We think in systems." },
];
