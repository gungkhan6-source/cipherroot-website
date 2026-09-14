import { siteConfig } from "@/config/site.config";

/**
 * Contact links derived from site config. No component should build these
 * itself. Pure and free of server-only imports, so client components can use
 * it too.
 */

// wa.me expects the international number as digits only: no "+", spaces or
// local leading zero. E.164 numbers have at most 15 digits.
function internationalDigits(value?: string): string | undefined {
  const digits = value?.replace(/\D/g, "");

  return digits && /^[1-9]\d{7,14}$/.test(digits) ? digits : undefined;
}

const whatsappNumber = internationalDigits(siteConfig.whatsapp);

export const whatsappUrl = whatsappNumber
  ? `https://wa.me/${whatsappNumber}`
  : undefined;

const { address } = siteConfig;

// "street, postalCode city, country" — only the parts that are filled in.
export const formattedAddress =
  [
    address?.street,
    [address?.postalCode, address?.city].filter(Boolean).join(" "),
    address?.country,
  ]
    .filter(Boolean)
    .join(", ") || undefined;

// An explicit Maps link wins; otherwise a Google Maps search for the address
// (documented Maps URLs format, no API key, no coordinates).
export const mapsUrl =
  address?.googleMapsUrl ??
  (formattedAddress
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formattedAddress)}`
    : undefined);
