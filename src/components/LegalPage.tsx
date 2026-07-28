import PageShell from "@/components/ui/PageShell";
import { formatDate } from "@/lib/markdown";

export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type Props = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  children?: React.ReactNode;
};

/**
 * Shared layout for Privacy Policy, Terms of Service and Cookie Policy.
 * Keeps heading hierarchy and spacing identical across all legal pages.
 */
export default function LegalPage({
  title,
  updated,
  intro,
  sections,
  children,
}: Props) {
  return (
    <PageShell width="4xl">

      <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h1>

      <p className="mt-6 text-sm text-zinc-400">
        Last updated: <time dateTime={updated}>{formatDate(updated)}</time>
      </p>

      <p className="mt-8 text-pretty text-lg leading-9 text-ink-muted">
        {intro}
      </p>

      <div className="mt-12 space-y-10">
        {sections.map((section, index) => (
          <section key={section.title}>

            <h2 className="text-xl font-semibold sm:text-2xl">
              {index + 1}. {section.title}
            </h2>

            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 text-pretty leading-8 text-ink-muted"
              >
                {paragraph}
              </p>
            ))}

            {section.bullets && (
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-ink-muted marker:text-brand-mid">
                {section.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 40)}>{bullet}</li>
                ))}
              </ul>
            )}

          </section>
        ))}
      </div>

      {children}

    </PageShell>
  );
}
