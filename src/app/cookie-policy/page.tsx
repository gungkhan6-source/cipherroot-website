import { pageMetadata } from "@/lib/metadata";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "Which cookies may be used on cipherrootsoftware.com, what they do, and how to control them.",
  path: "/cookie-policy",
});

/**
 * NOTE FOR MAINTAINERS
 * This page reflects the current state: the site sets no first-party cookies.
 * When AdSense or analytics is enabled, move the matching section from
 * conditional wording to present tense and update the "Last updated" date.
 */

const UPDATED = "2026-07-28";

const sections: LegalSection[] = [
  {
    title: "What Cookies Are",
    paragraphs: [
      "Cookies are small text files that a website asks your browser to store on your device. They are widely used to make websites work, to remember preferences, to measure traffic and to serve advertising.",
      "Similar technologies — such as local storage, pixels and device identifiers — work in comparable ways. Where this policy says \u201ccookies\u201d, it covers those technologies too.",
    ],
  },
  {
    title: "Essential Cookies",
    paragraphs: [
      "Essential cookies are required for a website to function — for example to keep you signed in or to remember items in a shopping basket.",
      "This website does not set any essential cookies. It is a static site with no accounts, no sign-in and no shopping features, so nothing needs to be remembered between page loads.",
    ],
  },
  {
    title: "Analytics Cookies",
    paragraphs: [
      "Analytics cookies help a site owner understand how visitors use a website — which pages are read, how long visits last and which devices are used. This data is aggregated and is not used to identify individuals.",
      "This website does not currently run any analytics service. If analytics is introduced, this section will be updated and the provider will be named here before the service is enabled.",
    ],
  },
  {
    title: "Advertising Cookies",
    paragraphs: [
      "Advertising cookies are used by ad networks to select which advertisements to show, to limit how often you see the same advertisement, and to measure the effectiveness of advertising campaigns.",
      "Where advertising is active on this website, these cookies are set by the advertising network, not by CipherRoot Software. We do not have access to their contents.",
    ],
  },
  {
    title: "Google AdSense Cookies",
    paragraphs: [
      "This website is prepared to display advertising through Google AdSense. When advertising is active:",
      "Google, as a third-party vendor, uses cookies to serve ads on this site. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and other sites on the Internet.",
      "You can opt out of personalised advertising in Google Ads Settings at https://www.google.com/settings/ads. If you prefer to opt out of a wider set of vendors at once, visit https://www.aboutads.info/choices or https://www.youronlinechoices.eu for European users.",
    ],
  },
  {
    title: "Third-Party Cookies",
    paragraphs: [
      "Some cookies on this website may be set by companies other than CipherRoot Software. These may include advertising networks and, in future, analytics providers. Each of these companies operates under its own privacy and cookie policy.",
      "Links to external platforms — Google Play, GitHub, YouTube and Instagram — do not set cookies until you follow them. Once you leave this website, the destination site's own policies apply.",
      "The Geist typeface used on this website is self-hosted, so loading a page makes no request to Google Fonts and sets no cookie from that source.",
    ],
  },
  {
    title: "Managing Cookies",
    paragraphs: [
      "You are in control of cookies. Every major browser lets you view stored cookies, delete them, block them from specific sites, or block all third-party cookies. These settings are usually found under Privacy or Security in your browser preferences.",
      "Blocking cookies will not prevent you from reading any part of this website — no content is hidden behind a cookie. If advertising is active, blocking advertising cookies may result in less relevant advertisements rather than fewer advertisements.",
      "Many browsers also offer a private or incognito mode, which discards cookies when the window is closed.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We will update this page whenever the cookies used on this website change — for example if an analytics or advertising service is enabled or removed. The date at the top of this page shows when it was last revised.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      `If you have questions about how cookies are used on this website, contact us at ${siteConfig.email}.`,
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated={UPDATED}
      intro="This page explains which cookies may be used on cipherrootsoftware.com, what each type does, and how you can control them."
      sections={sections}
    />
  );
}
