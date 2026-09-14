import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/ui/PageShell";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import OfferingDetail from "@/components/OfferingDetail";
import { apps } from "@/data/products";
import { softwareApplicationJsonLd } from "@/lib/jsonLd";
import { pageMetadata } from "@/lib/metadata";
import { moduleVisibility } from "@/lib/modules";
import { appsPageContent } from "@/content/pages.content";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

/**
 * /apps (listing) and /apps/[slug] (app) in one optional catch-all route,
 * like /services. While Apps is hidden or empty no page is generated, so
 * both URLs are a real 404 rather than a soft 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  if (!moduleVisibility.apps) {
    return [];
  }

  return [{ slug: [] }, ...apps.map((app) => ({ slug: [app.slug] }))];
}

function findApp(slug?: string[]) {
  return slug?.length === 1
    ? apps.find((app) => app.slug === slug[0])
    : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return pageMetadata({
      title: appsPageContent.metaTitle,
      description: appsPageContent.metaDescription,
      path: "/apps",
    });
  }

  const product = findApp(slug);

  if (!product) {
    return {};
  }

  return pageMetadata({
    title: product.name,
    description: product.seo?.description ?? product.longDescription,
    path: product.href,
    image: product.seo?.image ?? product.image,
  });
}

export default async function AppsPage({ params }: Props) {
  const { slug } = await params;

  if (!moduleVisibility.apps) {
    notFound();
  }

  if (!slug || slug.length === 0) {
    return (
      <PageShell>

        <SectionTitle
          as="h1"
          badge={appsPageContent.badge}
          title={appsPageContent.title}
          description={appsPageContent.description}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <ProductCard
              key={app.slug}
              app={app}
            />
          ))}
        </div>

      </PageShell>
    );
  }

  const product = findApp(slug);

  if (!product) {
    notFound();
  }

  return (
    <PageShell>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd(product)),
        }}
      />

      <OfferingDetail product={product} />

    </PageShell>
  );
}
