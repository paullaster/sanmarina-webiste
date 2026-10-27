import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SkipLink } from "@/components/SkipLink";
import { siteConfig } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const title = "SM Solar & Electrical | Solar & Engineering Company Kenya";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#004126" },
    { media: "(prefers-color-scheme: dark)", color: "#004126" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.longDescription,
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "BusinessAndIndustrial",
  keywords: [...siteConfig.keywords],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    languages: {
      "en-KE": "/",
      en: "/",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    countryName: "Kenya",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.shortName} — solar company and engineering contractor in Kenya`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.shortName} — solar company and engineering contractor in Kenya`,
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.shortName,
    statusBarStyle: "default",
  },
  other: {
    "geo.region": "KE-30",
    "geo.placename": "Kisumu",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    "content-language": "en-KE",
    "revisit-after": "7 days",
    rating: "general",
    distribution: "global",
    "og:email": siteConfig.email,
    "og:phone_number": siteConfig.phoneDisplay,
    "og:locality": siteConfig.address.addressLocality,
    "og:region": siteConfig.address.addressRegion,
    "og:country-name": "Kenya",
    "og:street-address": siteConfig.address.streetAddress,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-KE"
      className={`${manrope.variable} ${sora.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <SkipLink />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
