import { pageMetadata } from "@/lib/metadata";
import PageShell from "@/components/ui/PageShell";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply when you use the CipherRoot Software website and applications.",
  path: "/terms-of-service",
});

/**
 * DRAFT TEMPLATE — not legal advice.
 * This document is a generic starting point and must be reviewed and
 * customised (jurisdiction, company details, effective date) before the
 * site goes live.
 */

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing this website or using any CipherRoot Software application, you agree to these Terms of Service. If you do not agree, please do not use our website or applications.",
  },
  {
    title: "2. Use of Our Services",
    body: "You may use our website and applications for lawful purposes only. You agree not to misuse the services, attempt to gain unauthorised access, interfere with normal operation, or use them in any way that could damage or impair the services for others.",
  },
  {
    title: "3. Intellectual Property",
    body: "All content on this website, including software, source code, text, graphics, logos and product names, is the property of CipherRoot Software unless stated otherwise. You may not copy, redistribute or create derivative works without prior written permission.",
  },
  {
    title: "4. Applications and Updates",
    body: "Our applications are distributed through third-party platforms such as Google Play. Use of those applications may also be subject to the terms of the distributing platform. We may release updates, change features, or discontinue an application at any time.",
  },
  {
    title: "5. Third-Party Links and Services",
    body: "Our website links to third-party services such as Google Play, GitHub, YouTube and Instagram. We are not responsible for the content, policies or practices of those services.",
  },
  {
    title: "6. Disclaimer of Warranties",
    body: "Our website and applications are provided on an \u201cas is\u201d and \u201cas available\u201d basis, without warranties of any kind, either express or implied. We do not warrant that the services will be uninterrupted, error-free or free of harmful components.",
  },
  {
    title: "7. Limitation of Liability",
    body: "To the maximum extent permitted by applicable law, CipherRoot Software shall not be liable for any indirect, incidental, special or consequential damages arising from your use of, or inability to use, our website or applications.",
  },
  {
    title: "8. Privacy",
    body: "Your use of our services is also governed by our Privacy Policy, which explains what information we collect and how it is handled.",
  },
  {
    title: "9. Changes to These Terms",
    body: "We may update these Terms of Service from time to time. Continued use of our website or applications after changes take effect constitutes acceptance of the updated terms.",
  },
  {
    title: "10. Governing Law",
    body: "These terms are governed by the laws of the jurisdiction in which CipherRoot Software operates, without regard to conflict of law principles.",
  },
];

export default function TermsOfServicePage() {
  return (
    <PageShell width="5xl">

      <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Terms of Service
      </h1>

      <p className="mt-8 text-lg leading-9 text-ink-muted">
        These terms apply to the CipherRoot Software website and to the
        applications and games we publish.
      </p>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold sm:text-2xl">
              {section.title}
            </h2>

            <p className="mt-4 leading-8 text-ink-muted">
              {section.body}
            </p>
          </section>
        ))}

        <section>
          <h2 className="text-xl font-semibold sm:text-2xl">
            11. Contact
          </h2>

          <p className="mt-4 leading-8 text-ink-muted">
            Questions about these terms can be sent to{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-brand-light transition hover:text-brand-mid"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>

    </PageShell>
  );
}
