import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-screen flex-col items-center justify-center bg-surface-3 px-6 text-center text-ink sm:px-8">

      <h1 className="text-6xl font-bold sm:text-7xl">
        404
      </h1>

      <p className="mt-6 text-ink-muted">
        The page you are looking for could not be found.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-xl bg-brand px-6 py-3 font-semibold transition hover:bg-brand-hover"
      >
        Back to Home
      </Link>

    </main>
  );
}
