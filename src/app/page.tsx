import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
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
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PlotArmour Group",
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon.png`,
  description: siteConfig.description,
  knowsAbout: [
    "Venture Studio",
    "Technology Holding Company",
    "Workforce Infrastructure",
    "Manufacturing Software",
    "Enterprise Operations",
    "Talent Infrastructure",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "PlotArmour Portfolio Companies",
    itemListElement: [
      { "@type": "Offer", name: "Convoke", description: "Talent & Community Infrastructure" },
      { "@type": "Offer", name: "Keystone", description: "Enterprise Workforce Infrastructure" },
      { "@type": "Offer", name: "Verity", description: "Enterprise Operations Platform" },
      { "@type": "Offer", name: "VEDA", description: "Manufacturing Operations Platform" },
    ],
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
