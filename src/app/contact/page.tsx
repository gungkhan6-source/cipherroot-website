import { pageMetadata } from "@/lib/metadata";
import PageShell from "@/components/ui/PageShell";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";
import { featuresConfig } from "@/config/features.config";
import { contactContent } from "@/content/contact.content";
import { uiContent } from "@/content/ui.content";
import { appointmentUrl, formattedAddress, mapsUrl, whatsappUrl } from "@/lib/contact";
import { moduleVisibility } from "@/lib/modules";

export const metadata = pageMetadata({
  title: contactContent.title,
  description: contactContent.metaDescription,
  path: "/contact",
});


export default function ContactPage() {
  return (
    <PageShell width="4xl">

      <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {contactContent.title}
      </h1>

      <p className="mt-8 text-ink-muted">
        {contactContent.description}
      </p>

      {featuresConfig.contactForm && (
        <div className="mt-12 sm:mt-16">
          <ContactForm />
        </div>
      )}

      <div className="mt-12 space-y-8 sm:mt-16">

        <div>
          <h2 className="text-xl font-semibold">
            {contactContent.directChannels.emailTitle}
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
            {contactContent.directChannels.githubTitle}
          </h2>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={uiContent.accessibility.newTab(contactContent.directChannels.githubTitle)}
            className="mt-2 inline-block text-brand-light transition hover:text-brand-mid"
          >
            {contactContent.directChannels.githubLabel}
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            {contactContent.directChannels.youtubeTitle}
          </h2>

          <a
            href={siteConfig.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={uiContent.accessibility.newTab(contactContent.directChannels.youtubeTitle)}
            className="mt-2 inline-block text-brand-light transition hover:text-brand-mid"
          >
            {contactContent.directChannels.youtubeLabel}
          </a>
        </div>

        {moduleVisibility.whatsapp && (
          <div>
            <h2 className="text-xl font-semibold">
              {contactContent.directChannels.whatsappTitle}
            </h2>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={uiContent.accessibility.newTab(contactContent.directChannels.whatsappLabel)}
              className="mt-2 inline-block text-brand-light transition hover:text-brand-mid"
            >
              {contactContent.directChannels.whatsappLabel}
            </a>
          </div>
        )}

        {moduleVisibility.appointment && (
          <div>
            <h2 className="text-xl font-semibold">
              {contactContent.directChannels.appointmentTitle}
            </h2>

            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={uiContent.accessibility.newTab(contactContent.directChannels.appointmentLabel)}
              className="mt-2 inline-block text-brand-light transition hover:text-brand-mid"
            >
              {contactContent.directChannels.appointmentLabel}
            </a>
          </div>
        )}

        {moduleVisibility.maps && (
          <div>
            <h2 className="text-xl font-semibold">
              {contactContent.directChannels.addressTitle}
            </h2>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={uiContent.accessibility.newTab(`${formattedAddress ?? contactContent.directChannels.addressTitle} ${contactContent.directChannels.mapsSuffix}`)}
              className="mt-2 inline-block text-brand-light transition hover:text-brand-mid"
            >
              {formattedAddress ?? contactContent.directChannels.addressTitle}
            </a>
          </div>
        )}

      </div>

    </PageShell>
  );
}
