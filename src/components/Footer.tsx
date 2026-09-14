import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { navigationConfig } from "@/config/navigation.config";
import { featuresConfig } from "@/config/features.config";
import NewsletterForm from "./NewsletterForm";
import { uiContent } from "@/content/ui.content";

export default function Footer() {
  const year = new Date().getFullYear();
  const externalSocials = siteConfig.socials.filter((item) => item.external);

  return (
    <footer className="border-t border-line bg-surface-0 py-16 text-ink sm:py-20">

      <div className="mx-auto max-w-7xl px-6 sm:px-8">

        {/* Brand + newsletter */}

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">

          <div>
            <p className="text-xl font-bold sm:text-2xl">
              {siteConfig.name}
            </p>

            <p className="mt-5 max-w-md leading-8 text-ink-muted">
              {siteConfig.footer.tagline}
            </p>
          </div>

          {featuresConfig.newsletter && (
            <div className="lg:justify-self-end">
              <NewsletterForm />
            </div>
          )}

        </div>

        {/* Link columns */}

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-12 lg:grid-cols-5 lg:gap-8">

          {navigationConfig.footerColumns.map((column) => (
            <nav key={column.id} aria-labelledby={column.id}>

              <h2 id={column.id} className="mb-5 text-lg font-semibold">
                {column.title}
              </h2>

              <ul className="space-y-3 text-ink-muted">
                {column.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

            </nav>
          ))}

          <nav aria-labelledby="footer-contact">

            <h2 id="footer-contact" className="mb-5 text-lg font-semibold">
              {uiContent.footer.contactTitle}
            </h2>

            <ul className="space-y-3 text-ink-muted">

              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 transition hover:text-ink"
                >
                  <span aria-hidden="true">📧</span>
                  {uiContent.footer.emailLabel}
                </a>
              </li>

              {externalSocials.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={uiContent.accessibility.newTab(item.name)}
                    className="transition hover:text-ink"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

            </ul>

          </nav>

          <nav aria-labelledby="footer-legal">

            <h2 id="footer-legal" className="mb-5 text-lg font-semibold">
              {uiContent.footer.legalTitle}
            </h2>

            <ul className="space-y-3 text-ink-muted">
              {navigationConfig.footerLegal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </nav>

        </div>

        <div className="mt-14 border-t border-line pt-8 text-center text-sm text-ink-subtle sm:mt-16 sm:text-base">
          © {year} {siteConfig.name}. {uiContent.footer.rightsReserved}
        </div>

      </div>

    </footer>
  );
}
