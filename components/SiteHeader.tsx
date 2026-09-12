"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/lib/content";
import HelpButton from "./HelpButton";

/**
 * Site header — all viewports. Brand left; desktop (md+) carries inline
 * nav links plus the persistent Get Help button (DS §9.3). On mobile the
 * bottom tab bar handles navigation; the header stays minimal.
 */
export default function SiteHeader() {
  const pathname = usePathname();

  const linkClass = (active: boolean) =>
    `inline-flex min-h-11 items-center px-[var(--sp-3)] text-base font-semibold no-underline ${
      active ? "text-ink underline underline-offset-4" : "text-blue-dark"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-paper">
      <div className="mx-auto flex w-full max-w-[var(--content-max)] items-center justify-between gap-[var(--sp-4)] px-[var(--gutter)] py-[var(--sp-3)]">
        <Link
          href={ROUTES.landing}
          aria-current={pathname === ROUTES.landing ? "page" : undefined}
          className="font-head text-xl font-bold text-ink no-underline"
        >
          santuy.
        </Link>

        <div className="hidden items-center gap-[var(--sp-2)] md:flex">
          <nav aria-label="Primary" className="flex items-center">
            <Link
              href={ROUTES.landing}
              aria-current={pathname === ROUTES.landing ? "page" : undefined}
              className={linkClass(pathname === ROUTES.landing)}
            >
              Home
            </Link>
            <Link
              href={ROUTES.triage}
              aria-current={pathname === ROUTES.triage ? "page" : undefined}
              className={linkClass(pathname === ROUTES.triage)}
            >
              Check-in
            </Link>
          </nav>
          <HelpButton />
        </div>
      </div>
    </header>
  );
}
