type Width = "4xl" | "5xl" | "6xl" | "7xl";

type Props = {
  width?: Width;
  children: React.ReactNode;
};

const widthClass: Record<Width, string> = {
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

export default function PageShell({ width = "7xl", children }: Props) {
  return (
    <main id="main-content" className="min-h-screen bg-surface-3 pt-28 pb-20 text-ink sm:pt-36 sm:pb-28">
      <div className={`mx-auto ${widthClass[width]} px-6 sm:px-8`}>
        {children}
      </div>
    </main>
  );
}
