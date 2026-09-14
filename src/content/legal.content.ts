import { siteConfig } from "@/config/site.config";

export interface LegalSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalPageContent {
  title: string;
  metaDescription: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

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
export const privacyPolicyContent: LegalPageContent = {
  title: "Privacy Policy",
  metaDescription:
    "How CipherRoot Software collects, uses and protects information, including cookies, advertising and third-party services.",
  updated: "2026-07-28",
  intro:
    "This policy explains what information is collected when you visit cipherrootsoftware.com, how it is used, who it is shared with, and the control you have over it.",
  sections: [
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
  ],
};

/**
 * NOTE FOR MAINTAINERS
 * Section 9 (Governing Law) must name the jurisdiction in which CipherRoot
 * Software actually operates before this page goes live. Have the final text
 * reviewed by a qualified professional.
 */
export const termsOfServiceContent: LegalPageContent = {
  title: "Terms of Service",
  metaDescription:
    "The terms that apply when you use the CipherRoot Software website, applications and games.",
  updated: "2026-07-28",
  intro:
    "These terms apply to the CipherRoot Software website and to the applications, games and tools we publish. Please read them before using our services.",
  sections: [
    {
      title: "Acceptance of Terms",
      paragraphs: [
        `By accessing ${siteConfig.url} or using any application, game or tool published by CipherRoot Software, you agree to these Terms of Service and to our Privacy Policy and Cookie Policy.`,
        "If you do not agree with any part of these terms, please do not use this website or our products.",
      ],
    },
    {
      title: "Website Usage",
      paragraphs: [
        "You may browse, read and share the content of this website for lawful, personal and non-commercial purposes. In using this website you agree not to:",
      ],
      bullets: [
        "Attempt to gain unauthorised access to any part of the website, its servers or connected systems",
        "Interfere with the normal operation of the website or degrade it for other users",
        "Use automated systems to scrape, copy or republish substantial parts of the content without permission",
        "Use the website in any way that violates applicable law or the rights of others",
      ],
    },
    {
      title: "Intellectual Property",
      paragraphs: [
        "All material on this website — including software, source code, articles, graphics, logos, product names and design — is owned by CipherRoot Software or used with permission, and is protected by copyright and other intellectual property laws.",
        "You may quote short excerpts of our articles with clear attribution and a link back to the original page. You may not reproduce, redistribute or create derivative works from our content or software without prior written permission.",
      ],
    },
    {
      title: "Software and Products",
      paragraphs: [
        "Our applications and games are distributed through third-party platforms, primarily Google Play. Your use of those applications is also subject to the terms of the distributing platform and to any licence presented within the application itself.",
        "We may add, change, suspend or discontinue any feature or product at any time, and we may release updates that modify how a product behaves. Availability of a product on this website is not a guarantee that it will remain available.",
        "Product information on this website is provided for general reference. Features described for products marked as upcoming may change before release.",
      ],
    },
    {
      title: "Advertising",
      paragraphs: [
        "This website may display advertising supplied by third-party networks such as Google AdSense. We do not control and are not responsible for the content of advertisements, and the appearance of an advertisement does not imply endorsement.",
        "Any dealings you have with an advertiser are solely between you and that advertiser.",
      ],
    },
    {
      title: "Disclaimer",
      paragraphs: [
        "This website and our products are provided on an “as is” and “as available” basis, without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose and non-infringement.",
        "Technical articles published on this website are provided for informational purposes only. They do not constitute professional advice, and we do not warrant that the information is complete, current or suitable for any particular use.",
        "We do not warrant that the website will be uninterrupted, timely, secure or error-free.",
      ],
    },
    {
      title: "Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by applicable law, CipherRoot Software shall not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of data, profits or business, arising out of or in connection with your use of, or inability to use, this website or our products.",
        "Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited.",
      ],
    },
    {
      title: "External Links",
      paragraphs: [
        "This website contains links to external sites and services, including Google Play, GitHub, YouTube and Instagram. These links are provided for convenience only.",
        "We have no control over the content, privacy practices or availability of external sites, and we accept no responsibility for them. Visiting a linked site is at your own risk and subject to that site's own terms.",
      ],
    },
    {
      title: "Changes to These Terms",
      paragraphs: [
        "We may revise these Terms of Service from time to time. The date at the top of this page shows when they were last updated.",
        "Continued use of the website or our products after a revision takes effect constitutes acceptance of the updated terms.",
      ],
    },
    {
      title: "Governing Law",
      paragraphs: [
        "These terms are governed by and construed in accordance with the laws of the jurisdiction in which CipherRoot Software operates, without regard to conflict of law principles. Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the competent courts of that jurisdiction.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        `Questions about these Terms of Service can be sent to ${siteConfig.email}.`,
      ],
    },
  ],
};

/**
 * NOTE FOR MAINTAINERS
 * This page reflects the current state: the site sets no first-party cookies.
 * When AdSense or analytics is enabled, move the matching section from
 * conditional wording to present tense and update the "Last updated" date.
 */
export const cookiePolicyContent: LegalPageContent = {
  title: "Cookie Policy",
  metaDescription:
    "Which cookies may be used on cipherrootsoftware.com, what they do, and how to control them.",
  updated: "2026-07-28",
  intro:
    "This page explains which cookies may be used on cipherrootsoftware.com, what each type does, and how you can control them.",
  sections: [
    {
      title: "What Cookies Are",
      paragraphs: [
        "Cookies are small text files that a website asks your browser to store on your device. They are widely used to make websites work, to remember preferences, to measure traffic and to serve advertising.",
        "Similar technologies — such as local storage, pixels and device identifiers — work in comparable ways. Where this policy says “cookies”, it covers those technologies too.",
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
  ],
};
