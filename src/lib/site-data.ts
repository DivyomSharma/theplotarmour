export type NavItem = {
  href: string;
  label: string;
};

export type Vertical = {
  href: string;
  label: string;
  eyebrow: string;
  summary: string;
  liveUrl: string;
  accent: string;
};

export type WorkItem = {
  href?: string;
  name: string;
  category: string;
  summary: string;
  accent: string;
  state: string;
};

export type SystemNode = {
  title: string;
  summary: string;
};

export const navItems: NavItem[] = [
  { href: "/studio", label: "Studio" },
  { href: "/merchandise", label: "Merchandise" },
  { href: "/store", label: "Store" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const verticals: Vertical[] = [
  {
    href: "/studio",
    label: "Studio",
    eyebrow: "Brand / Product / Technology / Games",
    summary:
      "Brands, software, game systems, and digital products shaped with the precision of a build partner, not a content factory.",
    liveUrl: "https://studio.theplotarmour.xyz",
    accent:
      "from-cyan-400/20 via-slate-300/10 to-transparent",
  },
  {
    href: "/merchandise",
    label: "Merchandise",
    eyebrow: "Bulk Apparel / Events / Communities",
    summary:
      "Production-minded merchandise for teams, events, and communities that need quality, scale, and clean execution.",
    liveUrl: "https://merch.theplotarmour.xyz",
    accent:
      "from-orange-400/25 via-amber-200/10 to-transparent",
  },
  {
    href: "/store",
    label: "Store",
    eyebrow: "Fashion / Drops / In-House Brands",
    summary:
      "Consumer-facing labels, seasonal drops, and retail experiments designed to carry the PlotArmour point of view into culture.",
    liveUrl: "https://store.theplotarmour.xyz",
    accent:
      "from-fuchsia-400/18 via-rose-200/10 to-transparent",
  },
];

export const systemNodes: SystemNode[] = [
  {
    title: "Creators",
    summary: "Original IP, media, drops, and audience-facing narratives.",
  },
  {
    title: "Brands",
    summary: "Identity, storytelling, and execution shaped into durable systems.",
  },
  {
    title: "Communities",
    summary: "Merchandise, events, and experiences built to hold culture together.",
  },
  {
    title: "Startups",
    summary: "Products, platforms, and tools developed with in-house speed and control.",
  },
];

export const pipelineStages = [
  "Design",
  "Development",
  "Production",
  "Distribution",
];

export const workItems: WorkItem[] = [
  {
    name: "The Last Procession",
    category: "Multiplayer Horror",
    summary:
      "A multiplayer horror experience centered on psychological tension, cooperative survival, and immersive storytelling within a dark, evolving world.",
    accent:
      "from-zinc-500/20 via-red-500/10 to-transparent",
    state: "In Development",
  },
  {
    name: "Shadow Chase",
    category: "Asymmetric Strategy",
    summary:
      "An asymmetric multiplayer strategy game built around pursuit, evasion, and deduction, where players track, deceive, and outmaneuver each other across a dynamic map.",
    accent:
      "from-slate-500/18 via-cyan-400/10 to-transparent",
    state: "In Development",
  },
  {
    href: "https://playbattalion.vercel.app",
    name: "Battalion",
    category: "Strategic Multiplayer",
    summary:
      "A strategic multiplayer experience focused on resource management, negotiation, and territorial control, emphasizing tactical decision-making and player interaction.",
    accent:
      "from-red-500/20 via-orange-300/10 to-transparent",
    state: "Live",
  },
  {
    href: "https://becandor.vercel.app",
    name: "Candor AI",
    category: "AI Social Platform",
    summary:
      "An AI-powered social platform that analyzes personality, behavior, and context to connect users with highly compatible and aligned individuals in real time.",
    accent:
      "from-sky-500/20 via-cyan-300/10 to-transparent",
    state: "Live",
  },
  {
    href: "https://courtwiseai.vercel.app",
    name: "CourtWise AI",
    category: "Legal Learning AI",
    summary:
      "An AI-driven legal learning platform that simplifies complex case law, provides structured insights, and enhances understanding through intelligent analysis.",
    accent:
      "from-violet-500/18 via-indigo-300/10 to-transparent",
    state: "Live",
  },
];

export const philosophy = [
  "We build systems that scale.",
  "We design with intent.",
  "We execute with precision.",
];
