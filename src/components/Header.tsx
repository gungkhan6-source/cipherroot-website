"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site.config";
import { uiContent } from "@/content/ui.content";
import type { NavigationConfig } from "@/config/navigation.config";

type Props = {
  nav: NavigationConfig["headerNav"];
  cta?: NavigationConfig["headerCta"];
};

export default function Header({ nav, cta }: Props) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setOpen(false);

  // Escape closes the open mobile menu and returns focus to its toggle, so
  // keyboard focus is never left on a link that has just been removed.
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-line bg-surface-0/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-6 sm:px-8">

        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-3"
        >

          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            priority
            className="h-10 w-10 shrink-0 sm:h-14 sm:w-14"
          />

          <span className="truncate text-base font-bold text-ink sm:text-lg lg:text-xl">
            {siteConfig.name}
          </span>

        </Link>

        <nav aria-label={uiContent.accessibility.mainNavigation} className="hidden items-center gap-8 lg:flex">

          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-300 transition hover:text-brand-light"
            >
              {item.title}
            </Link>
          ))}

        </nav>

        <div className="flex items-center gap-3">

          {cta && (
            <Link
              href={cta.href}
              className="hidden rounded-xl bg-brand px-5 py-3 font-semibold text-ink transition hover:bg-brand-hover lg:inline-flex"
            >
              {cta.label}
            </Link>
          )}

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            // The menu is only rendered while open, so it is only referenced then.
            aria-controls={open ? "mobile-navigation" : undefined}
            aria-label={open ? uiContent.accessibility.closeMenu : uiContent.accessibility.openMenu}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line text-zinc-300 transition hover:border-brand-mid hover:text-brand-light sm:h-11 sm:w-11 lg:hidden"
          >
            {open ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-5 w-5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-5 w-5"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>

        </div>

      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-surface-0/95 backdrop-blur-xl lg:hidden"
        >

          <nav aria-label={uiContent.accessibility.mobileNavigation} className="mx-auto flex max-w-7xl flex-col px-6 py-6 sm:px-8">

            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-2 py-3 text-lg text-zinc-300 transition hover:bg-card hover:text-brand-light"
              >
                {item.title}
              </Link>
            ))}

            {cta && (
              <Link
                href={cta.href}
                onClick={closeMenu}
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-brand px-5 py-3 font-semibold text-ink transition hover:bg-brand-hover"
              >
                {cta.label}
              </Link>
            )}

          </nav>

        </div>
      )}

    </header>
  );
}
