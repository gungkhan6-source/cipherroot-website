import Link from "next/link";
import { uiContent } from "@/content/ui.content";
import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";
import { visibleProducts } from "@/lib/modules";
import { homeContent, type HomeContent } from "@/content/home.content";

type Props = {
  content?: HomeContent["downloadCta"];
};

export default function DownloadSection({ content = homeContent.downloadCta }: Props) {
  return (
    <Section id="download" surface="1">

        <SectionTitle
          badge={content.badge}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {visibleProducts.map((product) => (
            <div
              key={product.name}
              className="flex h-full flex-col rounded-3xl border border-line bg-card p-6 sm:p-8 lg:p-10"
            >

              <h3 className="text-2xl font-bold sm:text-3xl">
                {product.name}
              </h3>

              <p className="mt-5 flex-1 text-ink-muted">
                {product.tagline}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:mt-10 xl:flex-row">

                {product.playstore ? (
                  <a
                    href={product.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={uiContent.actions.storeLabel(product.name, product.button)}
                    className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-brand px-4 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-brand-hover xl:w-auto xl:text-base"
                  >
                    {product.button}
                  </a>
                ) : (
                  <>
                    <Link
                      href={product.href}
                      aria-label={uiContent.actions.learnMoreAbout(product.name)}
                      className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-brand px-4 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-brand-hover xl:w-auto xl:text-base"
                    >
                      {uiContent.actions.learnMore}
                    </Link>

                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="inline-flex w-full cursor-not-allowed items-center justify-center whitespace-nowrap rounded-xl border border-line-strong px-4 py-3 text-sm font-semibold text-ink-muted xl:w-auto xl:text-base"
                    >
                      {product.button}
                    </button>
                  </>
                )}

              </div>

            </div>
          ))}

        </div>

    </Section>
  );
}
