import { DetailPage } from "@/components/detail-page";

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
