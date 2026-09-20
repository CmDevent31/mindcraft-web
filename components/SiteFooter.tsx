import Link from "next/link";
import { HELPLINES, ROUTES } from "@/lib/content";

const EXPLORE_LINKS = [
  { label: "Home", href: ROUTES.landing },
  { label: "Check-in", href: ROUTES.triage },
  { label: "Breathe", href: ROUTES.breathe },
] as const;

/**
 * Site footer — full-width closing block: brand + illustration slot
 * left, Explore / Get help columns right, copyright + crisis line along
 * the bottom hairline. Every link points at a real route or helpline.
 * Static Server Component.
 */
export default function SiteFooter() {
  return (
    <footer className="bg-paper">
      <div
        className="relative mx-auto w-full overflow-hidden bg-white px-[var(--gutter)] py-[var(--sp-5)] md:py-[var(--sp-6)]"
      >
        <div className="relative flex flex-col gap-[var(--sp-5)] md:grid md:grid-cols-[1.5fr_1fr_1fr] md:gap-[var(--sp-6)]">
          <div className="flex flex-col gap-[var(--sp-3)]">
            <Link
              href={ROUTES.landing}
              className="font-head text-xl font-bold text-ink no-underline"
            >
              santuy.
            </Link>
            {/* Illustration slot: replace with next/image (fill +
                object-cover) once art is ready. */}
            <div
              role="img"
              aria-label="Footer illustration placeholder, recommended 800 by 600 pixels"
              className="flex min-h-28 w-full max-w-[320px] flex-col items-center justify-center gap-[var(--sp-1)] rounded-[var(--radius-input)] border-2 border-dashed border-ink/20 bg-paper p-[var(--sp-3)] text-center"
            >
              <p className="font-head text-sm font-bold text-ink">Illustration slot</p>
              <p className="text-xs leading-relaxed text-ink/70">
                Footer art goes here. Export at 800 x 600px.
              </p>
            </div>
          </div>
          <nav aria-label="Explore" className="flex flex-col gap-[var(--sp-3)]">
            <p className="font-head text-sm font-bold text-ink">Explore</p>
            {EXPLORE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="min-h-0 text-sm leading-relaxed text-ink/70 no-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Get help" className="flex flex-col gap-[var(--sp-3)]">
            <p className="font-head text-sm font-bold text-ink">Get help</p>
            {HELPLINES.map((line) => (
              <Link
                key={line.name}
                href={line.href}
                className="min-h-0 text-sm leading-relaxed text-ink/70 no-underline"
              >
                {line.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="relative mt-[var(--sp-5)] border-t border-ink/10 pt-[var(--sp-4)]">
          <p className="text-center text-xs text-ink/60">© 2026 santuy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
