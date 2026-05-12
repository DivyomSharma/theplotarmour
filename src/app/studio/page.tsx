import type { Metadata } from "next";
import { DetailPage } from "@/components/detail-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Studio",
  description:
    "Explore the PlotArmour studio for brand systems, product development, game systems, and high-control digital execution.",
  path: "/studio",
  keywords: ["studio", "brand design", "product development", "game systems"],
});

export default function StudioPage() {
  return (
    <DetailPage
      eyebrow="Studio"
      title="Brands, products, games, and systems."
      summary="The studio layer is where PlotArmour turns sharp positioning into software, interactive builds, and high-control product systems."
      liveUrl="https://studio.theplotarmour.xyz"
      highlights={[
        "Identity systems with long-range structure",
        "Product design and software direction",
        "Interactive experiences and game-world builds",
        "Execution rhythms built for shipping, not pitching",
      ]}
      ctas={[
        { href: "/work", label: "Selected Work" },
        { href: "/contact", label: "Start a Project" },
      ]}
    />
  );
}
