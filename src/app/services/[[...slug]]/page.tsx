import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/ui/PageShell";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/offerings";
import { pageMetadata } from "@/lib/metadata";
import { moduleVisibility } from "@/lib/modules";
import { servicesPageContent } from "@/content/pages.content";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

/**
 * /services (listing) and /services/[slug] (detail) in one optional catch-all
 * route. Only the paths returned by generateStaticParams exist, so while the
 * Services module is hidden neither page is generated and both URLs are a real
 * 404 — not a prerendered "not found" page served with status 200.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  if (!moduleVisibility.services) {
    return [];
  }

  return [
    { slug: [] },
    ...services.map((service) => ({ slug: [service.slug] })),
  ];
}

function findService(slug?: string[]) {
  return slug?.length === 1
    ? services.find((item) => item.slug === slug[0])
    : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return pageMetadata({
      title: servicesPageContent.metaTitle,
      description: servicesPageContent.metaDescription,
      path: "/services",
    });
  }

  const service = findService(slug);

  if (!service) {
    return {};
  }

  return pageMetadata({
    title: service.name,
    description: service.longDescription,
    path: service.href,
    image: service.image,
  });
}

export default async function ServicesPage({ params }: Props) {
  const { slug } = await params;

  if (!moduleVisibility.services) {
    notFound();
  }

  if (!slug || slug.length === 0) {
    return (
      <PageShell>

        <SectionTitle
          as="h1"
          badge={servicesPageContent.badge}
          title={servicesPageContent.title}
          description={servicesPageContent.description}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

      </PageShell>
    );
  }

  const service = findService(slug);

  if (!service) {
    notFound();
  }

  return (
    <PageShell>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-mid sm:text-sm sm:tracking-[0.35em]">
              {service.tagline}
            </p>

            <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {service.name}
            </h1>

            <p className="mt-8 max-w-3xl text-pretty text-lg leading-8 text-ink-muted sm:text-xl sm:leading-9">
              {service.longDescription}
            </p>

            {service.features && service.features.length > 0 && (
              <ul className="mt-8 list-disc space-y-2 pl-6 text-pretty leading-8 text-ink-muted">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            )}

            {service.deliverables && service.deliverables.length > 0 && (
              <ul className="mt-6 list-disc space-y-2 pl-6 text-pretty leading-8 text-ink-muted">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            )}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-brand px-6 py-4 font-semibold transition hover:bg-brand-hover sm:w-auto"
              >
                {service.ctaText ?? "Contact"}
              </Link>
            </div>

          </div>

          <div className="flex justify-center">
            <Image
              src={service.image}
              alt={service.name}
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
