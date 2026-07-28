type Surface = "0" | "1" | "2" | "3";

type Spacing = "default" | "compact";

type Props = {
  id?: string;
  surface: Surface;
  spacing?: Spacing;
  children: React.ReactNode;
};

const surfaceClass: Record<Surface, string> = {
  "0": "bg-surface-0",
  "1": "bg-surface-1",
  "2": "bg-surface-2",
  "3": "bg-surface-3",
};

const spacingClass: Record<Spacing, string> = {
  default: "py-20 sm:py-28",
  compact: "py-16 sm:py-24",
};

export default function Section({
  id,
  surface,
  spacing = "default",
  children,
}: Props) {
  return (
    <section
      id={id}
      className={`${surfaceClass[surface]} ${spacingClass[spacing]} text-ink`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {children}
      </div>
    </section>
  );
}
