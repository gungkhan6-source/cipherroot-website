import Section from "./ui/Section";
import { homeContent, type HomeContent } from "@/content/home.content";

type Props = {
  stats?: HomeContent["stats"];
};

export default function Stats({ stats = homeContent.stats }: Props) {
  return (
    <Section surface="1" spacing="compact">

        <dl className="grid grid-cols-2 gap-4 text-center sm:gap-6 md:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col-reverse rounded-2xl border border-transparent px-2 py-6 transition-colors sm:px-4 duration-300 hover:border-line hover:bg-white/[0.03]"
            >
              <dt className="mt-3 text-sm text-ink-muted transition-colors duration-300 group-hover:text-ink sm:text-base">
                {stat.label}
              </dt>

              <dd className="flex h-10 items-center justify-center text-3xl font-bold leading-none text-brand-mid transition-colors duration-300 group-hover:text-brand-light sm:h-12 sm:text-4xl md:h-14 md:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}

        </dl>

    </Section>
  );
}
