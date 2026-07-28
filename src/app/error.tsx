"use client";

import Link from "next/link";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-surface-3 px-6 text-center text-ink sm:px-8">

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Something went wrong
      </h1>

      <p className="mt-6 max-w-md text-pretty text-ink-muted">
        An unexpected error occurred while loading this page.
        You can try again or return to the homepage.
      </p>

      {error.digest && (
        <p className="mt-4 text-sm text-zinc-500">
          Reference: {error.digest}
        </p>
      )}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <button
          type="button"
          onClick={reset}
          className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3 font-semibold transition hover:bg-brand-hover sm:w-auto"
        >
          Try again
        </button>

        <Link
          href="/"
          className="inline-flex w-full items-center justify-center rounded-xl border border-line-strong px-6 py-3 font-semibold transition hover:border-brand-mid sm:w-auto"
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}
