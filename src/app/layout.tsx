import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Google AdSense publisher ID — used by both the verification meta tag
// and the ad script below.
const ADSENSE_CLIENT = "ca-pub-9981866376896465";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  other: {
    "google-adsense-account": ADSENSE_CLIENT,
  },

  keywords: [
    "CipherRoot Software",
    "Android",
    "Gunner DNS",
    "NovaRec",
    "Retro Pixel Football",
    "Privacy",
    "Security",
    "Indie Games",
  ],

  authors: [
    {
      name: "CipherRoot Software",
    },
  ],

  creator: "CipherRoot Software",

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },

  // favicon.ico is picked up automatically from src/app.
  icons: {
    apple: "/logo/favicon.png",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-brand focus:px-5 focus:py-3 focus:font-semibold focus:text-ink"
        >
          Skip to main content
        </a>

        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
