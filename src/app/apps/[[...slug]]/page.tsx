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
import { ImmersiveAppsHero } from "@/integrations/immersive";

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
    // Immersive hero: it holds the page title (h1), the list gets an h2.
    if (moduleVisibility.immersiveApps) {
      return (
        <main id="main-content" className="bg-surface-3 text-ink">

          <ImmersiveAppsHero />

          <section
            id="apps-list"
            aria-labelledby="apps-list-title"
            className="mx-auto max-w-7xl scroll-mt-20 px-6 pt-20 pb-20 sm:px-8 sm:pt-28 sm:pb-28"
          >

            <h2
              id="apps-list-title"
              className="mb-12 text-center text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:mb-16 sm:text-4xl md:text-5xl"
            >
              {appsPageContent.listTitle}
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {apps.map((app) => (
                <ProductCard
                  key={app.slug}
                  app={app}
                />
              ))}
            </div>

          </section>

        </main>
      );
    }

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
