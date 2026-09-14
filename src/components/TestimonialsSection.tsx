import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";
import { testimonialItems } from "@/data/testimonials";
import { homeContent, type HomeContent } from "@/content/home.content";

type Props = {
  content?: HomeContent["testimonials"];
};

/** Homepage testimonials. Render only when the Testimonials module is visible. */
export default function TestimonialsSection({
  content = homeContent.testimonials,
}: Props) {
  return (
    <Section id="testimonials" surface="2">

      <SectionTitle
        badge={content.badge}
        title={content.title}
        description={content.description}
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonialItems.map((item) => (
          <figure
            key={`${item.name}-${item.quote}`}
            className="flex h-full flex-col rounded-3xl border border-line bg-card p-6 sm:p-8 lg:p-10"
          >
            <blockquote className="flex-1 text-pretty text-lg leading-8 text-ink">
              “{item.quote}”
            </blockquote>

            <figcaption className="mt-8 border-t border-line pt-6">
              <span className="block font-semibold text-ink">{item.name}</span>

              {(item.role || item.company) && (
                <span className="mt-1 block text-sm text-ink-muted">
                  {[item.role, item.company].filter(Boolean).join(", ")}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

    </Section>
  );
}
