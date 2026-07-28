import { pageMetadata } from "@/lib/metadata";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { apps } from "@/data/products";
import PageShell from "@/components/ui/PageShell";

export const metadata = pageMetadata({
  title: "Applications",
  description:
    "Explore CipherRoot Android applications, including Gunner DNS and NovaRec Studio.",
  path: "/apps",
});


export default function AppsPage() {
  return (
    <PageShell>

        <SectionTitle
          as="h1"
          badge="Products"
          title="Applications"
          description="Explore CipherRoot Android Applications."
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
