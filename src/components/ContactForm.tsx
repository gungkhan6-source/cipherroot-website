import { siteConfig } from "@/lib/siteConfig";
import { contactContent } from "@/content/contact.content";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-card px-4 py-3 text-ink placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-60";

const labelClass = "block text-sm font-medium text-ink";

export default function ContactForm() {
  const form = contactContent.form;

  return (
    <form
      aria-describedby="contact-form-status"
      className="rounded-3xl border border-line bg-card p-6 sm:p-8"
    >
      <h2 className="text-xl font-semibold sm:text-2xl">
        {form.title}
      </h2>

      <p id="contact-form-status" className="mt-3 text-sm text-ink-muted">
        {form.notice}{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-brand-light transition hover:text-brand-mid"
        >
          {siteConfig.email}
        </a>
        .
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">

        <div>
          <label htmlFor="contact-name" className={labelClass}>
            {form.nameLabel}
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled
            placeholder={form.namePlaceholder}
            aria-describedby="contact-name-hint"
            className={fieldClass}
          />

          <p id="contact-name-hint" className="mt-2 text-xs text-zinc-500">
            {form.nameHint}
          </p>
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            {form.emailLabel}
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled
            placeholder={form.emailPlaceholder}
            aria-describedby="contact-email-hint"
            className={fieldClass}
          />

          <p id="contact-email-hint" className="mt-2 text-xs text-zinc-500">
            {form.emailHint}
          </p>
        </div>

      </div>

      <div className="mt-6">
        <label htmlFor="contact-subject" className={labelClass}>
          {form.subjectLabel}
        </label>

        <input
          id="contact-subject"
          name="subject"
          type="text"
          autoComplete="off"
          required
          disabled
          placeholder={form.subjectPlaceholder}
          className={fieldClass}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="contact-message" className={labelClass}>
          {form.messageLabel}
        </label>

        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          disabled
          placeholder={form.messagePlaceholder}
          aria-describedby="contact-message-hint"
          className={fieldClass}
        />

        <p id="contact-message-hint" className="mt-2 text-xs text-zinc-500">
          {form.messageHint}
        </p>
      </div>

      <button
        type="submit"
        disabled
        aria-disabled="true"
        aria-describedby="contact-form-status"
        className="mt-8 inline-flex w-full cursor-not-allowed items-center justify-center rounded-xl bg-zinc-800 px-6 py-3 font-semibold text-zinc-300 sm:w-auto"
      >
        {form.submitLabel}
      </button>
    </form>
  );
}
