import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { apps } from "@/data/products";
import PageShell from "@/components/ui/PageShell";
import OfferingDetail from "@/components/OfferingDetail";
import { softwareApplicationJsonLd } from "@/lib/jsonLd";
import { pageMetadata } from "@/lib/metadata";
import { moduleVisibility } from "@/lib/modules";

type Props = {
  params: Promise<{ slug: string }>;
};

// Only the slugs returned by generateStaticParams exist.
// Anything else must be a real 404, not a soft 404.
export const dynamicParams = false;

export function generateStaticParams() {
  if (!moduleVisibility.apps) {
    return [];
  }

  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = apps.find((app) => app.slug === slug);

  if (!product) {
    return {};
  }

  return pageMetadata({
    title: product.name,
    description: product.longDescription,
    path: product.href,
    image: product.image,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  const product = apps.find((app) => app.slug === slug);

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
