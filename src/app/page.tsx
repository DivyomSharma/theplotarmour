import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import { companies } from "@/lib/site-data";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: ["/banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/banner.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PlotArmour Group",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo-mark.png`,
  description: siteConfig.description,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "PlotArmour Portfolio Companies",
    itemListElement: companies.map((c) => ({
      "@type": "Offer",
      name: c.name,
      description: c.tagline,
    })),
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomePage />
    </>
  );
}
