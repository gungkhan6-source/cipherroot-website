import { siteConfig } from "@/lib/siteConfig";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-card px-4 py-3 text-ink placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-60";

const labelClass = "block text-sm font-medium text-ink";

export default function ContactForm() {
  return (
    <form
      aria-describedby="contact-form-status"
      className="rounded-3xl border border-line bg-card p-6 sm:p-8"
    >
      <h2 className="text-xl font-semibold sm:text-2xl">
        Send a message
      </h2>

      <p id="contact-form-status" className="mt-3 text-sm text-ink-muted">
        Message sending is coming soon. Until then, please reach us
        directly at{" "}
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
            Name
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled
            placeholder="Your name"
            aria-describedby="contact-name-hint"
            className={fieldClass}
          />

          <p id="contact-name-hint" className="mt-2 text-xs text-zinc-500">
            How we should address you.
          </p>
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled
            placeholder="you@example.com"
            aria-describedby="contact-email-hint"
            className={fieldClass}
          />

          <p id="contact-email-hint" className="mt-2 text-xs text-zinc-500">
            We will only use this to reply to you.
          </p>
        </div>

      </div>

      <div className="mt-6">
        <label htmlFor="contact-subject" className={labelClass}>
          Subject
        </label>

        <input
          id="contact-subject"
          name="subject"
          type="text"
          autoComplete="off"
          required
          disabled
          placeholder="What is this about?"
          className={fieldClass}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>

        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          disabled
          placeholder="Tell us a little about your idea or question."
          aria-describedby="contact-message-hint"
          className={fieldClass}
        />

        <p id="contact-message-hint" className="mt-2 text-xs text-zinc-500">
          Required. Please include as much detail as you can.
        </p>
      </div>

      <button
        type="submit"
        disabled
        aria-disabled="true"
        aria-describedby="contact-form-status"
        className="mt-8 inline-flex w-full cursor-not-allowed items-center justify-center rounded-xl bg-zinc-800 px-6 py-3 font-semibold text-zinc-300 sm:w-auto"
      >
        Coming Soon
      </button>
    </form>
  );
}
