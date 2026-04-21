import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import { AppExperience } from "@/components/app-experience";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Sora({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theplotarmour.xyz"),
  title: "PlotArmour",
  description:
    "PlotArmour builds brands, products, games, and merchandise systems.",
  openGraph: {
    title: "PlotArmour",
    description:
      "PlotArmour builds brands, products, games, and merchandise systems.",
    url: "https://theplotarmour.xyz",
    siteName: "PlotArmour",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body>
        <AppExperience>{children}</AppExperience>
      </body>
    </html>
  );
}
