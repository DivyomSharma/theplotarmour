import type { Metadata } from "next";
import { DetailPage } from "@/components/detail-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn how PlotArmour operates as a multi-vertical system across identity, products, games, merchandise, and culture-facing commerce.",
  path: "/about",
  keywords: ["about PlotArmour", "multi-vertical company", "brand and product systems"],
});

export default function AboutPage() {
  return (
    <DetailPage
      eyebrow="About"
      title="A multi-vertical company built around systems."
      summary="PlotArmour operates across identity, products, games, merchandise, and culture-facing commerce. The parent site exists to make that structure legible without over-explaining it."
      highlights={[
        "Parent-level positioning instead of service-list marketing",
        "A structure built to direct people into the right vertical",
        "Visual proof over long operational copy",
        "A tone built on clarity, confidence, and control",
      ]}
      ctas={[
        { href: "/studio", label: "Explore Studio" },
        { href: "/contact", label: "Contact PlotArmour" },
      ]}
    />
  );
}
