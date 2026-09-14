import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "@/types/catalog";

type Props = {
  project: PortfolioItem;
};

/** Card for a portfolio project. Same card styling as ServiceCard, plus tags. */
export default function PortfolioCard({ project }: Props) {
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-line bg-card/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-brand hover:shadow-2xl hover:shadow-brand/20 sm:p-8 lg:p-10">

      <div className="flex items-center justify-center">
        <Image
          src={project.image}
          alt={project.name}
          width={160}
          height={160}
          sizes="(min-width: 640px) 128px, 96px"
          className="h-24 w-24 rounded-3xl object-contain transition duration-300 group-hover:scale-105 sm:h-32 sm:w-32"
        />
      </div>

      <h2 className="mt-6 text-center text-2xl font-bold text-ink sm:mt-8 sm:text-3xl">
        {project.name}
      </h2>

      <p className="mt-6 flex-1 text-center text-base leading-8 text-ink-muted">
        {project.description}
      </p>

      {project.tags && project.tags.length > 0 && (
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:mt-10 xl:flex-row xl:justify-center">
        <Link
          href={project.href}
          aria-label={`Learn more about ${project.name}`}
          className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl border border-line-strong px-4 py-3 text-sm font-medium text-ink transition hover:border-brand hover:text-brand-light xl:w-auto xl:text-base"
        >
          Learn More
        </Link>
      </div>

    </div>
  );
}
