import type { Metadata } from "next";

export const siteConfig = {
  name: "PlotArmour",
  url: "https://theplotarmour.xyz",
  lastModified: "2026-07-14",
  description:
    "PlotArmour is an editorial technology ecosystem and venture studio building independent infrastructure companies across workforce, manufacturing, operations, and community.",
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
  { path: "/studio", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/merchandise", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/store", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/work", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/careers", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/journal", priority: 0.75, changeFrequency: "weekly" as const },
  { path: "/research", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/blueprints", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/team", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/intern", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/experiments", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/media", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/press", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/resources", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/community", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/partners", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/brand", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/design-system", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/docs", priority: 0.8, changeFrequency: "weekly" as const },
];
