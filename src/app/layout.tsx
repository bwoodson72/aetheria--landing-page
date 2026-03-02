import type { Metadata } from "next";
import SmoothScrollProvider from "@/components/smoothScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aetheria | Architectural Innovation",
    template: "%s | Aetheria",
  },
  description:
    "Aetheria designs living environments that bridge organic nature and industrial precision. Carbon-negative structures built for the cities of tomorrow.",
  keywords: [
    "architecture",
    "sustainable design",
    "biophilic architecture",
    "carbon negative buildings",
    "urban development",
    "green architecture",
  ],
  authors: [{ name: "Aetheria Studio" }],
  creator: "Aetheria Studio",
  metadataBase: new URL("https://aetheria-landing-page.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aetheria-landing-page.vercel.app",
    siteName: "Aetheria",
    title: "Aetheria | Architectural Innovation",
    description:
      "Aetheria designs living environments that bridge organic nature and industrial precision. Carbon-negative structures built for the cities of tomorrow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetheria | Architectural Innovation",
    description:
      "Aetheria designs living environments that bridge organic nature and industrial precision. Carbon-negative structures built for the cities of tomorrow.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
