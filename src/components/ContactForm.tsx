import { siteConfig } from "@/lib/siteConfig";
import { contactContent } from "@/content/contact.content";
import { getContactDelivery } from "@/lib/contactForm/delivery";
import ContactFormFields from "./ContactFormFields";

/**
 * Contact form. Render only when features.contactForm is on. Until a
 * delivery provider is configured on the server it stays the disabled
 * placeholder; only the public contact email is passed to the client.
 */
export default function ContactForm() {
  return (
    <ContactFormFields
      content={contactContent.form}
      email={siteConfig.email}
      enabled={getContactDelivery() !== null}
    />
  );
}
