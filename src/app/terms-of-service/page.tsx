import { pageMetadata } from "@/lib/metadata";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply when you use the CipherRoot Software website, applications and games.",
  path: "/terms-of-service",
});

/**
 * NOTE FOR MAINTAINERS
 * Section 9 (Governing Law) must name the jurisdiction in which CipherRoot
 * Software actually operates before this page goes live. Have the final text
 * reviewed by a qualified professional.
 */

const UPDATED = "2026-07-28";

const sections: LegalSection[] = [
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
      "This website and our products are provided on an \u201cas is\u201d and \u201cas available\u201d basis, without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose and non-infringement.",
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
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated={UPDATED}
      intro="These terms apply to the CipherRoot Software website and to the applications, games and tools we publish. Please read them before using our services."
      sections={sections}
    />
  );
}
