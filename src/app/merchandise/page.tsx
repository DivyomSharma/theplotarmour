import { DetailPage } from "@/components/detail-page";

export default function MerchandisePage() {
  return (
    <DetailPage
      eyebrow="Merchandise"
      title="Bulk apparel, event systems, community production."
      summary="The merchandise vertical is built for teams and communities that need quality apparel production with cleaner coordination and less noise."
      liveUrl="https://merch.theplotarmour.xyz"
      highlights={[
        "Bulk apparel built for consistency at scale",
        "Event and community merchandise programs",
        "Production-minded coordination from brief to delivery",
        "A visual standard that still respects operations",
      ]}
      ctas={[
        { href: "/contact", label: "Discuss Merchandise" },
        { href: "/store", label: "Visit Store Layer" },
      ]}
    />
  );
}
