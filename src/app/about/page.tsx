import { DetailPage } from "@/components/detail-page";

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
