import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type Props = {
  product: Product;
};

/**
 * Detail view for a single offering (app, game, tool, SaaS…).
 * Shared by every offering detail route so they render identically.
 */
export default function OfferingDetail({ product }: Props) {
  const available = product.status === "Available";

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

      <div>

        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
            available
              ? "bg-success/15 text-green-400"
              : "bg-warning/15 text-yellow-400"
          }`}
        >
          <span aria-hidden="true">●</span>
          {product.status}
        </span>

        <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {product.name}
        </h1>

        <p className="mt-8 max-w-3xl text-pretty text-lg leading-8 text-ink-muted sm:text-xl sm:leading-9">
          {product.longDescription}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          {product.playstore ? (
            <a
              href={product.playstore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${product.name} on ${product.button} (opens in a new tab)`}
              className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-brand px-6 py-4 font-semibold transition hover:bg-brand-hover sm:w-auto"
            >
              {product.button}
            </a>
          ) : (
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex w-full cursor-not-allowed items-center justify-center whitespace-nowrap rounded-xl bg-zinc-800 px-6 py-4 font-semibold text-zinc-300 sm:w-auto"
            >
              {product.button}
            </button>
          )}

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl border border-line-strong px-6 py-4 font-semibold transition hover:border-brand-mid sm:w-auto"
          >
            Contact
          </Link>

        </div>

        {product.developmentVideo && (
          <a
            href={product.developmentVideo.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch devlog: ${product.developmentVideo.title} (opens in a new tab)`}
            className="group mt-10 flex max-w-xl items-center gap-4 rounded-2xl border border-line bg-card p-4 transition hover:border-brand sm:p-5"
          >
            <span
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-light transition group-hover:bg-brand group-hover:text-ink"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.1-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
              </svg>
            </span>

            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-brand-mid">
                Watch Devlog
              </span>
              <span className="mt-1 block text-pretty font-semibold text-ink">
                {product.developmentVideo.title}
              </span>
            </span>
          </a>
        )}

      </div>

      <div className="flex justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={576}
          height={576}
          sizes="(min-width: 640px) 288px, 224px"
          priority
          className="h-auto w-56 rounded-[40px] sm:w-72"
        />
      </div>

    </div>
  );
}
