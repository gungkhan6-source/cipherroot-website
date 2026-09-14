export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Questions shown in the homepage FAQ section. Add only real questions and
 * answers; while this list is empty the section does not render.
 * CipherRoot has none yet.
 */
export const faqItems: FaqItem[] = [];
