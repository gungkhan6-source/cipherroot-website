import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";

const values = [
  {
    icon: "🔒",
    title: "Privacy First",
    description:
      "We build software that respects user privacy without unnecessary data collection.",
  },
  {
    icon: "⚡",
    title: "High Performance",
    description:
      "Lightweight architecture optimized for speed, battery life and stability.",
  },
  {
    icon: "🚀",
    title: "Future Ready",
    description:
      "We continuously improve our ecosystem with modern technologies and creative ideas.",
  },
];

export default function WhyCipherRoot() {
  return (
    <Section id="about" surface="0">

      <SectionTitle
        badge="Why CipherRoot"
        title="Built Around Privacy, Performance & Innovation"
        description="Every CipherRoot product is designed with long-term reliability, security and user experience in mind."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-3xl border border-line bg-card p-6 sm:p-8 lg:p-10"
          >
            <div aria-hidden="true" className="text-4xl sm:text-5xl">
              {value.icon}
            </div>

            <h3 className="mt-6 text-xl font-bold sm:text-2xl">
              {value.title}
            </h3>

            <p className="mt-5 text-base leading-8 text-ink-muted">
              {value.description}
            </p>
          </div>
        ))}
      </div>

    </Section>
  );
}
