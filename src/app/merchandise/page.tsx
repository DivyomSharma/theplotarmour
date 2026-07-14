import type { Metadata } from "next";
import { DetailPage } from "@/components/detail-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Merchandise Systems",
  description:
    "Explore PlotArmour merchandise production pipelines, bulk apparel solutions, and community design systems.",
  path: "/merchandise",
  keywords: ["merchandise", "bulk apparel", "event merchandise", "community merchandise"],
});

export default function MerchandisePage() {
  return (
    <DetailPage
      eyebrow="Merchandise"
      title="Bulk apparel, event systems, and community production."
      summary="The merchandise vertical is built to supply scale apparel for distributed teams, events, and active communities with high-control execution."
      liveUrl="https://merch.theplotarmour.xyz"
      highlights={[
        "Apparel systems designed to perform at scale",
        "Community and event merchandise coordination",
        "Streamlined operational routing from concept to shipping",
        "Unified brand styling optimized for print and embroidery",
      ]}
      ctas={[
        { href: "/contact", label: "Discuss Production" },
        { href: "/store", label: "Visit Store Layer" },
      ]}
    />
  );
}
