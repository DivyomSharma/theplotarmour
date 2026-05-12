import type { Metadata } from "next";

export const siteConfig = {
  name: "PlotArmour",
  url: "https://theplotarmour.xyz",
  description:
    "PlotArmour builds brands, products, games, and merchandise systems through a unified pipeline spanning design, development, production, and distribution.",
  locale: "en_US",
  keywords: [
    "PlotArmour",
    "brand systems",
    "product design",
    "game development",
    "merchandise production",
    "consumer fashion",
    "creative technology",
    "interactive experiences",
    "AI products",
    "design and development studio",
  ],
};

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: MetadataInput): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();
  const fullTitle = path === "/" ? `${siteConfig.name} | ${title}` : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const indexedPages = [
  {
    path: "",
    priority: 1,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/studio",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/merchandise",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/store",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/work",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/about",
    priority: 0.6,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/contact",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
];
