import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
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

const adsenseClient = siteConfig.integrations.googleAdSenseId;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  ...(adsenseClient
    ? {
        other: {
          "google-adsense-account": adsenseClient,
        },
      }
    : {}),

  keywords: siteConfig.keywords,

  verification: siteConfig.verification,

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },

  icons: {
    apple: siteConfig.favicon,
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

/**
 * CSS Variable Bridge:
 * Maps theme colors defined in site.config.ts into runtime CSS variables
 * that match Tailwind CSS v4 design tokens.
 */
const themeVariables = `
  :root {
    --color-brand: ${siteConfig.theme.colors.brand};
    --color-brand-hover: ${siteConfig.theme.colors.brandHover};
    --color-brand-mid: ${siteConfig.theme.colors.brandMid};
    --color-brand-light: ${siteConfig.theme.colors.brandLight};
    --color-accent: ${siteConfig.theme.colors.accent};
    --color-accent-soft: ${siteConfig.theme.colors.accentSoft};
    --color-surface-0: ${siteConfig.theme.colors.surface0};
    --color-surface-1: ${siteConfig.theme.colors.surface1};
    --color-surface-2: ${siteConfig.theme.colors.surface2};
    --color-surface-3: ${siteConfig.theme.colors.surface3};
    --color-card: ${siteConfig.theme.colors.card};
  }
`;

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
      <head>
        <style
          id="theme-bridge"
          dangerouslySetInnerHTML={{ __html: themeVariables }}
        />
      </head>
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

        {adsenseClient && (
          <Script
            id="google-adsense"
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          />
        )}

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
