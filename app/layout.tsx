import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://italyaerials.com";

const R2_BASE = "https://pub-043427812e354c88bd7de61078b56cf3.r2.dev";
const OG_IMAGE = `${R2_BASE}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Italy Aerials — Aerial Cinematography Across Italy",
    template: "%s | Italy Aerials",
  },
  description:
    "Aerial drone photography and cinematography across Italy for premium commercial productions, advertising agencies and institutional clients. ENAC certified.",
  keywords: [
    "aerial filming Italy",
    "aerial cinematography Rome",
    "drone filming Italy",
    "drone service Rome",
    "aerial photography Tuscany",
    "drone commercial production Italy",
    "aerial filming restricted sites Italy",
  ],
  authors: [{ name: "Italy Aerials" }],
  creator: "Italy Aerials",
  publisher: "Italy Aerials",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/logo-icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo-icon.svg" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Italy Aerials",
    title: "Italy Aerials — Aerial Cinematography Across Italy",
    description:
      "Drone photography and video for premium commercial productions, advertising campaigns and institutional clients in Italy.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Italy Aerials — Aerial Cinematography Across Italy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Italy Aerials — Aerial Cinematography Across Italy",
    description:
      "Aerial drone photography and video for premium productions across Italy. ENAC certified.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Italy Aerials",
  description:
    "Aerial drone photography and cinematography across Italy for premium commercial productions, advertising agencies and institutional clients.",
  url: SITE_URL,
  email: "fly@italyaerials.com",
  image: OG_IMAGE,
  areaServed: { "@type": "Country", name: "Italy" },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IT",
    addressLocality: "Rome",
  },
  serviceType: [
    "Aerial Photography",
    "Aerial Cinematography",
    "Drone Filming",
    "Real Estate Aerial",
    "Event Aerial Coverage",
  ],
  sameAs: [
    "https://italylocations.com",
    "https://italycreatives.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-dm-sans)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
