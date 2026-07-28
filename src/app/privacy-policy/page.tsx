import { pageMetadata } from "@/lib/metadata";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How CipherRoot Software collects, uses and protects information, including cookies, advertising and third-party services.",
  path: "/privacy-policy",
});

/**
 * NOTE FOR MAINTAINERS
 * This document describes the site as it is actually operated today:
 * a static website with no accounts, no server-side database and no
 * analytics installed. The advertising and analytics sections are written
 * to remain accurate once those services are enabled. If a service is
 * removed or added, update the matching section and the "Last updated" date.
 * Have the final text reviewed by a qualified professional for your
 * jurisdiction before publication.
 */

const UPDATED = "2026-07-28";

const sections: LegalSection[] = [
  {
    title: "Introduction",
    paragraphs: [
      `CipherRoot Software ("we", "us" or "our") operates the website ${siteConfig.url} and develops privacy-focused Android applications, creative tools and indie games. This Privacy Policy explains what information is collected when you visit this website, how it is used, and the choices available to you.`,
      "We build privacy-first software, and we apply the same principle to this website: we collect as little information as possible and we do not sell personal data.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      "This website is a static site. It does not require registration, it does not host user accounts, and it does not operate a database of visitors. The information involved falls into three categories:",
    ],
    bullets: [
      "Information you provide voluntarily — if you contact us by email, we receive your email address and whatever you choose to write. We use it only to reply.",
      "Technical information — like any website, our hosting provider automatically records standard request data such as IP address, browser type, device type, referring page and time of request. This is used for delivery, security and abuse prevention.",
      "Cookie-based information — cookies may be set by third-party services such as advertising or analytics providers, as described in the sections below and in our Cookie Policy.",
    ],
  },
  {
    title: "How We Use Information",
    paragraphs: ["We use the limited information described above only to:"],
    bullets: [
      "Deliver the website and its content to your device",
      "Respond to messages you send us",
      "Maintain security, prevent abuse and diagnose technical problems",
      "Understand aggregate usage patterns so we can improve our content and products",
      "Display advertising, where advertising is active on the site",
    ],
  },
  {
    title: "Legal Basis and Data Sharing",
    paragraphs: [
      "Where applicable law requires a legal basis for processing, we rely on our legitimate interest in operating and securing this website, and on your consent for non-essential cookies.",
      "We do not sell, rent or trade personal information. Information is shared only with the service providers described in this policy, and only to the extent necessary for them to provide their service.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "Cookies are small text files stored on your device by your browser. This website does not set cookies for its own functionality. Cookies that may appear are set by third-party services such as advertising and analytics providers.",
      "You can control or delete cookies through your browser settings at any time. Blocking cookies does not prevent you from reading any part of this website. A detailed breakdown is available in our Cookie Policy.",
    ],
  },
  {
    title: "Google AdSense",
    paragraphs: [
      "This website is prepared to display advertising through Google AdSense. When advertising is active, the following applies:",
      "Google, as a third-party vendor, uses cookies to serve ads on this site. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and other sites on the Internet.",
      "You may opt out of personalised advertising by visiting Google Ads Settings at https://www.google.com/settings/ads. You may also opt out of third-party vendor cookies for personalised advertising at https://www.aboutads.info/choices.",
      "Third-party vendors and ad networks may also serve ads on this site and may use cookies to do so. We do not control the cookies set by these third parties.",
    ],
  },
  {
    title: "Google Analytics",
    paragraphs: [
      "This website does not currently run Google Analytics or any other analytics script. If analytics is introduced in the future, it will be used solely to understand aggregate traffic patterns — such as which articles are read and which devices are used — and never to identify individual visitors.",
      "Where analytics is active, IP anonymisation will be enabled and data retention will be kept to the minimum period that still allows us to improve the site. You may opt out using the Google Analytics Opt-out Browser Add-on at https://tools.google.com/dlpage/gaoptout.",
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "This website links to and relies on services operated by other companies. When you interact with them, their own privacy policies apply, not ours:",
    ],
    bullets: [
      "Google Play — distribution of our Android applications",
      "Google AdSense — advertising, where active",
      "GitHub, YouTube and Instagram — links to our public profiles",
      "Our hosting provider — delivery of this website and standard server logs",
      "Google Fonts — the Geist typeface is self-hosted at build time, so no request is made to Google's servers when you load a page",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "This website is served over HTTPS and is statically generated, which removes entire categories of risk: there is no database to breach, no login system to compromise and no user-submitted content stored on our servers.",
      "Email correspondence is stored in our email provider's systems. No method of transmission over the Internet is completely secure, and we cannot guarantee absolute security, but we take reasonable measures to protect the information we hold.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "This website and our products are not directed to children under the age of 13, and we do not knowingly collect personal information from children.",
      "If you believe a child has provided us with personal information, please contact us and we will delete it promptly.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: [
      "Depending on where you live, you may have the right to request access to the personal information we hold about you, ask for it to be corrected or deleted, object to or restrict its processing, withdraw consent you previously gave, and lodge a complaint with your local data protection authority.",
      `Because this site does not maintain user accounts, the only personal information we are likely to hold is email correspondence. To exercise any of these rights, write to ${siteConfig.email} and we will respond within a reasonable period.`,
    ],
  },
  {
    title: "International Visitors",
    paragraphs: [
      "This website is accessible worldwide. The service providers described above may process technical data in countries other than your own. By using this website you understand that such processing may occur.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, in the services we use, or in applicable law. The date at the top of this page always shows when it was last revised.",
      "Material changes will be reflected on this page. Continued use of the website after an update constitutes acceptance of the revised policy.",
    ],
  },
  {
    title: "Contact Information",
    paragraphs: [
      `If you have questions about this Privacy Policy or about how your information is handled, contact CipherRoot Software at ${siteConfig.email}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={UPDATED}
      intro="This policy explains what information is collected when you visit cipherrootsoftware.com, how it is used, who it is shared with, and the control you have over it."
      sections={sections}
    />
  );
}
