export interface TestimonialItem {
  quote: string;
  name: string;
  role?: string;
  company?: string;
}

/**
 * Testimonials shown on the homepage. Only genuine, attributable quotes that
 * the person agreed to publish; while this list is empty the section does not
 * render. CipherRoot has none yet.
 */
export const testimonialItems: TestimonialItem[] = [];
