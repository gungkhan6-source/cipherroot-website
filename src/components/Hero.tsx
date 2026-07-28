import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-surface-0 px-6 pt-28 pb-20 text-ink sm:px-8">

      {/* Background Glow — primary (blue) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-brand-hover)_0%,transparent_55%)] opacity-20"
      ></div>

      {/* Background Glow — secondary accent (purple) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,var(--color-accent)_0%,transparent_60%)] opacity-25"
      ></div>

      <div className="relative mx-auto max-w-5xl text-center">

        <span className="inline-flex items-center rounded-full border border-brand/40 bg-brand/10 px-5 py-2 text-sm font-medium text-brand-light backdrop-blur-sm">
          Welcome to CipherRoot Software
        </span>

        <h1 className="mt-8 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Building Secure Software For The Future
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-pretty text-lg leading-8 text-ink-muted sm:text-xl sm:leading-9">
          We build privacy-focused applications, modern Android tools,
          indie games and technical solutions designed for performance,
          security and simplicity.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/apps"
            className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-8 py-4 sm:w-auto font-semibold text-ink shadow-lg shadow-brand/20 transition-all duration-300 hover:scale-105 hover:bg-brand-hover"
          >
            Explore Products
          </Link>

          <Link
            href="/blog"
            className="inline-flex w-full items-center justify-center rounded-xl border border-line-strong bg-white/5 px-8 py-4 sm:w-auto font-semibold text-ink backdrop-blur-sm transition-all duration-300 hover:border-brand hover:bg-white/10"
          >
            Read Our Blog
          </Link>

        </div>

      </div>

    </section>
  );
}
