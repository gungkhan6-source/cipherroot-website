import { pageMetadata } from "@/lib/metadata";
import PageShell from "@/components/ui/PageShell";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with CipherRoot Software by email, GitHub or YouTube.",
  path: "/contact",
});


export default function ContactPage() {
  return (
    <PageShell width="4xl">

      <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Contact
      </h1>

      <p className="mt-8 text-ink-muted">
        Feel free to contact CipherRoot Software.
      </p>

      <div className="mt-12 sm:mt-16">
        <ContactForm />
      </div>

      <div className="mt-12 space-y-8 sm:mt-16">

        <div>
          <h2 className="text-xl font-semibold">
            Email
          </h2>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 inline-block text-brand-light transition hover:text-brand-mid"
          >
            {siteConfig.email}
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            GitHub
          </h2>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
            className="mt-2 inline-block text-brand-light transition hover:text-brand-mid"
          >
            github.com/gungkhan6-source
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            YouTube
          </h2>

          <a
            href={siteConfig.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube (opens in a new tab)"
            className="mt-2 inline-block text-brand-light transition hover:text-brand-mid"
          >
            @CipherRootSoftware
          </a>
        </div>

      </div>

    </PageShell>
  );
}
