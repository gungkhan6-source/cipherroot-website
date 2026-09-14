import Script from "next/script";
import { googleAnalyticsId, googleTagManagerId } from "@/lib/analytics";

/**
 * Google Analytics 4 and/or Google Tag Manager, loaded after hydration.
 * Renders nothing unless an ID is configured. When GTM already sends GA4
 * data, configure only GTM to avoid counting page views twice.
 * Not production-ready yet: see src/lib/analytics.ts before enabling.
 */
export default function AnalyticsScripts() {
  return (
    <>
      {googleTagManagerId && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${googleTagManagerId}');`}
        </Script>
      )}

      {googleAnalyticsId && (
        <>
          <Script
            id="google-analytics-loader"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${googleAnalyticsId}');`}
          </Script>
        </>
      )}
    </>
  );
}

/** GTM fallback for visitors without JavaScript; place first inside <body>. */
export function GoogleTagManagerNoscript() {
  if (!googleTagManagerId) {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
