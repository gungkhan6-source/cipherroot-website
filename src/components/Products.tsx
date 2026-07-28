import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function Products() {
  return (
    <Section id="products" surface="3">

        <SectionTitle
          badge="Products"
          title="Our Software Ecosystem"
          description="Privacy-focused applications, creative tools and indie games developed by CipherRoot Software."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((app) => (
            <ProductCard
              key={app.name}
              app={app}
            />
          ))}
        </div>

    </Section>
  );
}
