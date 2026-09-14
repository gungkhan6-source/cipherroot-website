import { pageMetadata } from "@/lib/metadata";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { apps } from "@/data/products";
import PageShell from "@/components/ui/PageShell";
import { appsPageContent } from "@/content/pages.content";

export const metadata = pageMetadata({
  title: appsPageContent.metaTitle,
  description: appsPageContent.metaDescription,
  path: "/apps",
});


export default function AppsPage() {
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
