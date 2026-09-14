import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";
import { faqItems } from "@/data/faq";
import { homeContent, type HomeContent } from "@/content/home.content";

type Props = {
  content?: HomeContent["faq"];
};

/**
 * Homepage FAQ. Native <details> disclosure: keyboard accessible and needs no
 * client-side JavaScript. Render only when the FAQ module is visible.
 */
export default function FaqSection({ content = homeContent.faq }: Props) {
  return (
    <Section id="faq" surface="3">

      <SectionTitle
        badge={content.badge}
        title={content.title}
        description={content.description}
      />

      <div className="mx-auto max-w-4xl space-y-4">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-line bg-card p-6 transition hover:border-brand sm:p-8"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-ink sm:text-xl">
              {item.question}
              <span
                aria-hidden="true"
                className="shrink-0 text-2xl leading-none text-brand-mid transition group-open:rotate-45"
              >
                +
              </span>
            </summary>

            <p className="mt-5 text-pretty leading-8 text-ink-muted">
              {item.answer}
            </p>
          </details>
        ))}
      </div>

    </Section>
  );
}
