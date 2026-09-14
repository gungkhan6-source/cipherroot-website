import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";
import ProductCard from "./ProductCard";
import { visibleProducts } from "@/lib/modules";
import { homeContent, type HomeContent } from "@/content/home.content";

type Props = {
  content?: HomeContent["offerings"];
};

export default function Products({ content = homeContent.offerings }: Props) {
  return (
    <Section id="products" surface="3">

        <SectionTitle
          badge={content.badge}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((app) => (
            <ProductCard
              key={app.name}
              app={app}
            />
          ))}
        </div>

    </Section>
  );
}
