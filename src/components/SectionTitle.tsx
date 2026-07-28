type Props = {
  badge: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
};

export default function SectionTitle({
  badge,
  title,
  description,
  as: Heading = "h2",
}: Props) {
  return (
    <div className="mb-12 text-center sm:mb-16">

      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-mid sm:text-sm sm:tracking-[0.35em]">
        {badge}
      </p>

      <Heading className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </Heading>

      {description && (
        <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-8 text-ink-muted sm:mt-6 sm:text-lg">
          {description}
        </p>
      )}

    </div>
  );
}
