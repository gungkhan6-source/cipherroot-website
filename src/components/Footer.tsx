import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import NewsletterForm from "./NewsletterForm";

const columns = [
  { id: "footer-products", title: "Products", links: siteConfig.footer.products },
  { id: "footer-company", title: "Company", links: siteConfig.footer.company },
  { id: "footer-resources", title: "Resources", links: siteConfig.footer.resources },
];

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

          <div className="lg:justify-self-end">
            <NewsletterForm />
          </div>

        </div>

        {/* Link columns */}

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-12 lg:grid-cols-5 lg:gap-8">

          {columns.map((column) => (
            <nav key={column.id} aria-labelledby={column.id}>

              <h3 id={column.id} className="mb-5 text-lg font-semibold">
                {column.title}
              </h3>

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

            <h3 id="footer-contact" className="mb-5 text-lg font-semibold">
              Contact
            </h3>

            <ul className="space-y-3 text-ink-muted">

              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 transition hover:text-ink"
                >
                  <span aria-hidden="true">📧</span>
                  Email
                </a>
              </li>

              {externalSocials.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.name} (opens in a new tab)`}
                    className="transition hover:text-ink"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

            </ul>

          </nav>

          <nav aria-labelledby="footer-legal">

            <h3 id="footer-legal" className="mb-5 text-lg font-semibold">
              Legal
            </h3>

            <ul className="space-y-3 text-ink-muted">
              {siteConfig.footer.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </nav>

        </div>

        <div className="mt-14 border-t border-line pt-8 text-center text-sm text-zinc-500 sm:mt-16 sm:text-base">
          © {year} {siteConfig.name}. All rights reserved.
        </div>

      </div>

    </footer>
  );
}
