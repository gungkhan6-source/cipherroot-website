"use server";

import { featuresConfig } from "@/config/features.config";
import { getContactDelivery } from "./delivery";
import {
  honeypotField,
  readContactValues,
  validateContactValues,
  type ContactFormState,
} from "./validation";

/**
 * Contact form submission. Server Actions are reachable by direct POST, so
 * every guard lives here rather than in the UI: feature flag, delivery
 * configuration, honeypot and full validation. The recipient comes only
 * from server-side configuration; the payload cannot choose it.
 */
export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  if (!featuresConfig.contactForm) {
    return { status: "unavailable" };
  }

  const values = readContactValues(formData);
  const delivery = getContactDelivery();

  if (!delivery) {
    return { status: "unavailable", values };
  }

  // Bots that fill the hidden field get a normal-looking success, and nothing is sent.
  const honeypot = formData.get(honeypotField);

  if (typeof honeypot === "string" && honeypot !== "") {
    return { status: "success" };
  }

  const fieldErrors = validateContactValues(values);

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "invalid", values, fieldErrors };
  }

  try {
    await delivery.send(values);
  } catch (error) {
    console.error(
      "[contact-form] delivery failed:",
      error instanceof Error ? error.message : "unknown error",
    );
    return { status: "error", values };
  }

  return { status: "success" };
}
