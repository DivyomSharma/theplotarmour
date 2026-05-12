import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import { workItems } from "@/lib/site-data";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "PlotArmour | Brands, Products, Games, and Merchandise Systems",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PlotArmour | Brands, Products, Games, and Merchandise Systems",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlotArmour | Brands, Products, Games, and Merchandise Systems",
    description: siteConfig.description,
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    description: siteConfig.description,
    knowsAbout: [
      "Brand systems",
      "Product development",
      "Game development",
      "Merchandise systems",
      "Fashion and consumer products",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "PlotArmour - Main Site",
    url: siteConfig.url,
    description: siteConfig.description,
    about: workItems.map((item) => item.name),
  },
];

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
