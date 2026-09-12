import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";
import { homeContent, type HomeContent } from "@/content/home.content";

type Props = {
  content?: HomeContent["whyUs"];
};

export default function WhyUs({ content = homeContent.whyUs }: Props) {
  return (
    <Section id="about" surface="0">

      <SectionTitle
        badge={content.badge}
        title={content.title}
        description={content.description}
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {content.values.map((value) => (
          <div
            key={value.title}
            className="rounded-3xl border border-line bg-card p-6 sm:p-8 lg:p-10"
          >
            <div aria-hidden="true" className="text-4xl sm:text-5xl">
              {value.icon}
            </div>

            <h3 className="mt-6 text-xl font-bold sm:text-2xl">
              {value.title}
            </h3>

            <p className="mt-5 text-base leading-8 text-ink-muted">
              {value.description}
            </p>
          </div>
        ))}
      </div>

    </Section>
  );
}
