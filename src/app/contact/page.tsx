import type { Metadata } from "next";
import { DetailPage } from "@/components/detail-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact PlotArmour to start a project across studio, merchandise, store, product, game, or brand systems.",
  path: "/contact",
  keywords: ["contact PlotArmour", "start a project", "brand systems contact"],
});

export default function ContactPage() {
  return (
    <DetailPage
      eyebrow="Contact"
      title="Route the brief into the right system."
      summary="Use the studio track for brands, software, and games. Use merchandise for production-led apparel. Use the store layer for consumer-facing fashion conversations."
      highlights={[
        "Brands, digital products, and game builds",
        "Bulk apparel, events, and communities",
        "Retail, fashion, and future drop conversations",
        "A parent-level conversation when the brief spans multiple tracks",
      ]}
      ctas={[
        { href: "/studio", label: "Studio Track" },
        { href: "/merchandise", label: "Merchandise Track" },
        { href: "/store", label: "Store Track" },
      ]}
    />
  );
}
