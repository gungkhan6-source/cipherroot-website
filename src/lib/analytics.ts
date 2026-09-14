import { siteConfig } from "@/config/site.config";

/**
 * Analytics identifiers from site config. They are public client-side IDs,
 * not secrets. Nothing loads while an ID is empty; a malformed ID fails the
 * build instead of being written into an inline script.
 *
 * NOT PRODUCTION-READY: disabled by default and not part of any package.
 * Do not set an ID until the Privacy and Cookie Policy are updated and a
 * consent mechanism exists where the law requires one (not built yet).
 */

function validatedId(
  value: string | undefined,
  pattern: RegExp,
  name: string,
): string | undefined {
  const id = value?.trim();

  if (!id) {
    return undefined;
  }

  if (!pattern.test(id)) {
    throw new Error(
      `siteConfig.integrations.${name} "${id}" is not a valid ID.`,
    );
  }

  return id;
}

// GA4 measurement ID, e.g. "G-XXXXXXXXXX".
export const googleAnalyticsId = validatedId(
  siteConfig.integrations.googleAnalyticsId,
  /^G-[A-Z0-9]{4,20}$/,
  "googleAnalyticsId",
);

// Google Tag Manager container ID, e.g. "GTM-XXXXXXX".
export const googleTagManagerId = validatedId(
  siteConfig.integrations.googleTagManagerId,
  /^GTM-[A-Z0-9]{4,20}$/,
  "googleTagManagerId",
);
