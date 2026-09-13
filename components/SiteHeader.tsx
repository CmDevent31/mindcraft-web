"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/lib/content";
import HelpButton from "./HelpButton";

/**
 * Site header — all viewports. Brand left, persistent Get Help right
 * (DS §9.3). No nav links: the landing flow carries users forward.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  // Navbar follows the content width: landing (/) is wide (1080px),
  // every other route uses the DS constant (760px).
  const maxWidth = pathname === ROUTES.landing ? "max-w-[1080px]" : "max-w-[var(--content-max)]";

  return (
    <header className="sticky top-0 z-40 bg-paper">
      <div className={`mx-auto flex w-full ${maxWidth} items-center justify-between gap-[var(--sp-4)] px-[var(--gutter)] py-[var(--sp-3)]`}>
        <Link
          href={ROUTES.landing}
          aria-current={pathname === ROUTES.landing ? "page" : undefined}
          className="font-head text-xl font-bold text-ink no-underline"
        >
          santuy.
        </Link>

        <HelpButton />
      </div>
    </header>
  );
}
