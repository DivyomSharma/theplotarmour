import type { MetadataRoute } from "next";
import { indexedPages, siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexedPages.map((page) => ({
    url: new URL(page.path, siteConfig.url).toString(),
    lastModified: siteConfig.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
