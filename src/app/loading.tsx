export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-3 px-6 text-ink">
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center gap-6"
      >
        <div
          aria-hidden="true"
          className="h-10 w-10 animate-spin rounded-full border-2 border-line-strong border-t-brand"
        />

        <p className="text-sm text-ink-muted">Loading…</p>
      </div>
    </div>
  );
}
