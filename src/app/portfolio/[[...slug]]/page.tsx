import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/ui/PageShell";
import SectionTitle from "@/components/SectionTitle";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioItems } from "@/data/offerings";
import { pageMetadata } from "@/lib/metadata";
import { moduleVisibility } from "@/lib/modules";
import { portfolioPageContent } from "@/content/pages.content";
import { uiContent } from "@/content/ui.content";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

/**
 * /portfolio (listing) and /portfolio/[slug] (project) in one optional
 * catch-all route, like /services. While Portfolio is hidden no page is
 * generated, so both URLs stay a real 404 rather than a soft 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  if (!moduleVisibility.portfolio) {
    return [];
  }

  return [
    { slug: [] },
    ...portfolioItems.map((project) => ({ slug: [project.slug] })),
  ];
}

function findProject(slug?: string[]) {
  return slug?.length === 1
    ? portfolioItems.find((item) => item.slug === slug[0])
    : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return pageMetadata({
      title: portfolioPageContent.metaTitle,
      description: portfolioPageContent.metaDescription,
      path: "/portfolio",
    });
  }

  const project = findProject(slug);

  if (!project) {
    return {};
  }

  return pageMetadata({
    title: project.name,
    description: project.longDescription,
    path: project.href,
    image: project.image,
  });
}

const primaryLinkClass =
  "inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-brand px-6 py-4 font-semibold transition hover:bg-brand-hover sm:w-auto";

const secondaryLinkClass =
  "inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl border border-line-strong px-6 py-4 font-semibold transition hover:border-brand-mid sm:w-auto";

export default async function PortfolioPage({ params }: Props) {
  const { slug } = await params;

  if (!moduleVisibility.portfolio) {
    notFound();
  }

  if (!slug || slug.length === 0) {
    return (
      <PageShell>

        <SectionTitle
          as="h1"
          badge={portfolioPageContent.badge}
          title={portfolioPageContent.title}
          description={portfolioPageContent.description}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </div>

      </PageShell>
    );
  }

  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  // Only facts the project actually provides; empty rows are never rendered.
  const details = [
    { label: uiContent.details.client, value: project.client },
    { label: uiContent.details.completed, value: project.completionDate },
    { label: uiContent.details.technologies, value: project.tags?.join(", ") },
  ].filter((row) => row.value);

  return (
    <PageShell>

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-mid sm:text-sm sm:tracking-[0.35em]">
            {project.tagline}
          </p>

          <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {project.name}
          </h1>

          <p className="mt-8 max-w-3xl text-pretty text-lg leading-8 text-ink-muted sm:text-xl sm:leading-9">
            {project.longDescription}
          </p>

          {details.length > 0 && (
            <dl className="mt-8 space-y-4">
              {details.map((row) => (
                <div key={row.label}>
                  <dt className="text-sm font-semibold uppercase tracking-wider text-brand-light">
                    {row.label}
                  </dt>
                  <dd className="mt-1 leading-8 text-ink-muted">{row.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={uiContent.actions.viewProjectLabel(project.name)}
                className={primaryLinkClass}
              >
                {uiContent.actions.viewProject}
              </a>
            )}

            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={uiContent.actions.viewSourceLabel(project.name)}
                className={project.projectUrl ? secondaryLinkClass : primaryLinkClass}
              >
                {uiContent.actions.viewSource}
              </a>
            )}

            <Link href="/contact" className={secondaryLinkClass}>
              {uiContent.actions.contact}
            </Link>

          </div>

        </div>

        <div className="flex justify-center">
          <Image
            src={project.image}
            alt={project.name}
            width={576}
            height={576}
            sizes="(min-width: 640px) 288px, 224px"
            priority
            className="h-auto w-56 rounded-[40px] sm:w-72"
          />
        </div>

      </div>

    </PageShell>
  );
}
