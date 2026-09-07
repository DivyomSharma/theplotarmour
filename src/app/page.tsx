import type { Metadata } from "next";
import { LegacyPage } from "@/components/legacy/legacy-page";
import { NEW_HOME_URL, legacyVentures } from "@/lib/legacy-ventures";

const title = "PlotArmour — New Home";
const description =
  "PlotArmour has moved to plotarmour.in. Explore the companies, products, brands and creative properties within the PlotArmour ecosystem.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: NEW_HOME_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: NEW_HOME_URL,
    siteName: "PlotArmour",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PlotArmour",
  url: NEW_HOME_URL,
  logo: `${NEW_HOME_URL}/icon.png`,
  description,
  sameAs: legacyVentures.map((v) => v.url),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LegacyPage />
    </>
  );
}
