import type { Metadata } from "next";
import { DetailPage } from "@/components/detail-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Store",
  description:
    "Browse the PlotArmour store layer for consumer fashion, in-house labels, drops, and culture-facing retail experiments.",
  path: "/store",
  keywords: ["store", "fashion", "consumer products", "drops", "in-house labels"],
});

export default function StorePage() {
  return (
    <DetailPage
      eyebrow="Store"
      title="Consumer fashion and in-house drops."
      summary="The store layer carries PlotArmour into culture through product, presentation, and a sharper retail point of view."
      liveUrl="https://store.theplotarmour.xyz"
      highlights={[
        "In-house labels and limited releases",
        "Product storytelling tuned for drops",
        "Fashion-led presentation without excess clutter",
        "A direct consumer channel for future brand expansion",
      ]}
      ctas={[
        { href: "/work", label: "View Related Work" },
        { href: "/contact", label: "Partner with PlotArmour" },
      ]}
    />
  );
}
