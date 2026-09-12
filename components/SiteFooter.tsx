import Link from "next/link";
import { DISCLAIMER, ROUTES } from "@/lib/content";

/**
 * Site footer — disclaimer visible on every route without interaction
 * (peer-style first aid framing, never diagnosis).
 */
export default function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex w-full max-w-[var(--content-max)] flex-col gap-[var(--sp-3)] px-[var(--gutter)] py-[var(--sp-5)]">
        <p className="text-sm leading-relaxed text-ink">{DISCLAIMER}</p>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-[var(--sp-4)]">
          <Link
            href={ROUTES.landing}
            className="text-sm font-semibold text-blue-dark no-underline"
          >
            Home
          </Link>
          <Link
            href={ROUTES.triage}
            className="text-sm font-semibold text-blue-dark no-underline"
          >
            Check-in
          </Link>
        </nav>
      </div>
    </footer>
  );
}
