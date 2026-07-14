import type { Metadata } from "next";
import { DetailPage } from "@/components/detail-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Store",
  description:
    "Explore the PlotArmour Store for consumer drops, lifestyle apparel, and intellectual property items.",
  path: "/store",
  keywords: ["store", "fashion", "consumer products", "drops", "in-house labels"],
});

export default function StorePage() {
  return (
    <DetailPage
      eyebrow="Store"
      title="Consumer lifestyle products and design drops."
      summary="The Store serves as the direct creative canvas for PlotArmour, dropping collections and collectibles reflecting our core design language."
      liveUrl="https://store.theplotarmour.xyz"
      highlights={[
        "Limited apparel collections and physical releases",
        "Direct-to-consumer digital and retail pathways",
        "A retail interface structured around high graphic control",
        "Expansion layers for physical IP assets",
      ]}
      ctas={[
        { href: "/work", label: "Selected Work" },
        { href: "/contact", label: "Strategic Inquiries" },
      ]}
    />
  );
}
