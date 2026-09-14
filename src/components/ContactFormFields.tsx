"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/lib/contactForm/actions";
import {
  contactLimits,
  honeypotField,
  initialContactFormState,
  type ContactField,
} from "@/lib/contactForm/validation";
import type { ContactContent } from "@/content/contact.content";

type Props = {
  content: ContactContent["form"];
  email: string;
  /** False renders the disabled placeholder; no submission is possible. */
  enabled: boolean;
};

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-card px-4 py-3 text-ink placeholder:text-ink-subtle disabled:cursor-not-allowed disabled:opacity-60";

const labelClass = "block text-sm font-medium text-ink";

export default function ContactFormFields({ content: form, email, enabled }: Props) {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactFormState,
  );

  const values = "values" in state ? state.values : undefined;
  const fieldErrors = state.status === "invalid" ? state.fieldErrors : {};

  const statusMessage = {
    idle: null,
    success: form.successMessage,
    invalid: form.invalidMessage,
    error: form.errorMessage,
    unavailable: form.unavailableMessage,
  }[state.status];

  const describedBy = (field: ContactField, hintId?: string) =>
    [hintId, fieldErrors[field] && `contact-${field}-error`]
      .filter(Boolean)
      .join(" ") || undefined;

  const fieldError = (field: ContactField) =>
    fieldErrors[field] && (
      <p id={`contact-${field}-error`} className="mt-2 text-xs text-red-400">
        {form.fieldErrors[fieldErrors[field]]}
      </p>
    );

  return (
    <form
      action={enabled ? formAction : undefined}
      aria-describedby="contact-form-status"
      className="rounded-3xl border border-line bg-card p-6 sm:p-8"
    >
      <h2 className="text-xl font-semibold sm:text-2xl">
        {form.title}
      </h2>

      <p id="contact-form-status" className="mt-3 text-sm text-ink-muted">
        {enabled ? form.activeNotice : form.notice}{" "}
        <a
          href={`mailto:${email}`}
          className="text-brand-light transition hover:text-brand-mid"
        >
          {email}
        </a>
        .
      </p>

      {enabled && (
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="contact-website">{form.honeypotLabel}</label>
          <input
            id="contact-website"
            name={honeypotField}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>
      )}

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
            disabled={!enabled}
            maxLength={enabled ? contactLimits.nameMax : undefined}
            defaultValue={values?.name}
            placeholder={form.namePlaceholder}
            aria-invalid={fieldErrors.name ? true : undefined}
            aria-describedby={describedBy("name", "contact-name-hint")}
            className={fieldClass}
          />

          <p id="contact-name-hint" className="mt-2 text-xs text-ink-subtle">
            {form.nameHint}
          </p>

          {fieldError("name")}
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
            disabled={!enabled}
            maxLength={enabled ? contactLimits.emailMax : undefined}
            defaultValue={values?.email}
            placeholder={form.emailPlaceholder}
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={describedBy("email", "contact-email-hint")}
            className={fieldClass}
          />

          <p id="contact-email-hint" className="mt-2 text-xs text-ink-subtle">
            {form.emailHint}
          </p>

          {fieldError("email")}
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
          disabled={!enabled}
          maxLength={enabled ? contactLimits.subjectMax : undefined}
          defaultValue={values?.subject}
          placeholder={form.subjectPlaceholder}
          aria-invalid={fieldErrors.subject ? true : undefined}
          aria-describedby={describedBy("subject")}
          className={fieldClass}
        />

        {fieldError("subject")}
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
          disabled={!enabled}
          minLength={enabled ? contactLimits.messageMin : undefined}
          maxLength={enabled ? contactLimits.messageMax : undefined}
          defaultValue={values?.message}
          placeholder={form.messagePlaceholder}
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={describedBy("message", "contact-message-hint")}
          className={fieldClass}
        />

        <p id="contact-message-hint" className="mt-2 text-xs text-ink-subtle">
          {form.messageHint}
        </p>

        {fieldError("message")}
      </div>

      {enabled ? (
        <>
          <button
            type="submit"
            disabled={pending}
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3 font-semibold text-ink transition hover:bg-brand-hover disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            {pending ? form.sendingLabel : form.sendLabel}
          </button>

          <p
            role="status"
            aria-live="polite"
            className={`mt-4 text-sm ${state.status === "success" ? "text-brand-light" : "text-red-400"}`}
          >
            {statusMessage}
          </p>
        </>
      ) : (
        <button
          type="submit"
          disabled
          aria-disabled="true"
          aria-describedby="contact-form-status"
          className="mt-8 inline-flex w-full cursor-not-allowed items-center justify-center rounded-xl bg-zinc-800 px-6 py-3 font-semibold text-zinc-300 sm:w-auto"
        >
          {form.submitLabel}
        </button>
      )}
    </form>
  );
}
