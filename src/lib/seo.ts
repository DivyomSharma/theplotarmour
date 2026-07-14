import type { Metadata } from "next";

export const siteConfig = {
  name: "PlotArmour",
  url: "https://theplotarmour.xyz",
  lastModified: "2026-07-14",
  description:
    "PlotArmour is a venture studio and technology holding company building independent infrastructure businesses across workforce, manufacturing, operations, and talent.",
  locale: "en_US",
  keywords: [
    "PlotArmour",
    "venture studio",
    "technology holding company",
    "infrastructure companies",
    "enterprise software India",
    "manufacturing software",
    "workforce infrastructure",
    "operations platform",
    "talent infrastructure",
    "Indian technology group",
    "Convoke",
    "Keystone",
    "Verity",
    "VEDA",
  ],
};

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({ title, description, path, keywords = [] }: MetadataInput): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();
  const fullTitle = path === "/" ? siteConfig.name : `${title} — ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: { canonical },
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
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/companies", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/studio", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/journal", priority: 0.75, changeFrequency: "weekly" as const },
  { path: "/careers", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];
