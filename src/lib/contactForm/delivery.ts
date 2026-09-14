import "server-only";

import { contactContent } from "@/content/contact.content";
import type { ContactValues } from "./validation";

/**
 * Contact form delivery. Everything is read from server-side environment
 * variables (never NEXT_PUBLIC_*), so no credential or recipient lives in
 * the repository or the client bundle.
 *
 *   CONTACT_DELIVERY_PROVIDER  "resend" | "mock"   (unset = form disabled)
 *   CONTACT_TO_EMAIL           recipient inbox            (resend)
 *   CONTACT_FROM_EMAIL         verified sender address    (resend)
 *   RESEND_API_KEY             Resend API key             (resend)
 *
 * "mock" accepts messages without sending anything, for local testing.
 * It is refused on Vercel production deployments.
 */

export interface ContactDelivery {
  send(values: ContactValues): Promise<void>;
}

const resendEndpoint = "https://api.resend.com/emails";

function env(name: string): string {
  return process.env[name]?.trim() ?? "";
}

function createResendDelivery(): ContactDelivery | null {
  const apiKey = env("RESEND_API_KEY");
  const to = env("CONTACT_TO_EMAIL");
  const from = env("CONTACT_FROM_EMAIL");

  if (!apiKey || !to || !from) {
    return null;
  }

  return {
    async send(values) {
      const response = await fetch(resendEndpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: values.email,
          subject: `${contactContent.form.deliverySubjectPrefix} ${values.subject}`,
          text: [
            `Name: ${values.name}`,
            `Email: ${values.email}`,
            `Subject: ${values.subject}`,
            "",
            values.message,
          ].join("\n"),
        }),
        signal: AbortSignal.timeout(10_000),
      });

      if (!response.ok) {
        throw new Error(`Resend responded with HTTP ${response.status}`);
      }
    },
  };
}

function createMockDelivery(): ContactDelivery | null {
  if (process.env.VERCEL_ENV === "production") {
    return null;
  }

  return {
    async send(values) {
      // Never log the submitted personal data.
      console.info(
        `[contact-form] mock delivery accepted a message (${values.message.length} characters). Nothing was sent.`,
      );
    },
  };
}

/** The configured delivery, or null when the form cannot deliver messages. */
export function getContactDelivery(): ContactDelivery | null {
  switch (env("CONTACT_DELIVERY_PROVIDER")) {
    case "resend":
      return createResendDelivery();
    case "mock":
      return createMockDelivery();
    default:
      return null;
  }
}
