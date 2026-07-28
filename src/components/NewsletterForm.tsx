export default function NewsletterForm() {
  return (
    <form
      aria-describedby="newsletter-status"
      className="mt-8 max-w-md lg:mt-0"
    >
      <h3 className="text-lg font-semibold text-ink">
        Stay updated
      </h3>

      <p id="newsletter-status" className="mt-3 text-sm text-ink-muted">
        Subscribing is coming soon. The form is not active yet.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">

        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>

          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled
            placeholder="Your email address"
            aria-describedby="newsletter-status"
            className="w-full rounded-xl border border-line bg-card px-4 py-3 text-ink placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        <button
          type="submit"
          disabled
          aria-disabled="true"
          aria-describedby="newsletter-status"
          className="inline-flex cursor-not-allowed items-center justify-center whitespace-nowrap rounded-xl bg-zinc-800 px-6 py-3 font-semibold text-zinc-300"
        >
          Coming Soon
        </button>

      </div>
    </form>
  );
}
