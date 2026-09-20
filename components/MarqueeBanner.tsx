/**
 * MarqueeBanner — running tagline strip, santuy landing only.
 * Headspace-style infinite scroll: brand taglines + four-point star
 * separators (no eyes). DS colors only: --yellow band, white text,
 * --blue star. Jumbo styling (validated via /prototype/banner):
 * text-2xl, 28px stars, roomy padding/gap, slow 40s loop.
 * Server Component, zero JS. Duplicates are aria-hidden;
 * screen readers get one static summary. Motion collapses via the global
 * prefers-reduced-motion rule.
 */

const ITEMS = [
  "rough day? get unstuck",
  "breathe first",
  "laugh a little",
  "one tiny step",
  "you are not alone",
  "santuy first aid",
] as const;

function Star() {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0 text-blue"
    >
      <path d="M12 0c.9 6.6 4.4 10.1 12 12-7.6 1.9-11.1 5.4-12 12-.9-6.6-4.4-10.1-12-12C7.6 10.1 11.1 6.6 12 0Z" />
    </svg>
  );
}

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex items-center gap-[var(--sp-6)] pr-[var(--sp-6)]">
      {ITEMS.map((text) => (
        <span key={text} className="flex items-center gap-[var(--sp-6)]">
          <span className="whitespace-nowrap font-head text-2xl font-semibold lowercase tracking-tight text-white">
            {text}
          </span>
          <Star />
        </span>
      ))}
    </div>
  );
}

export default function MarqueeBanner() {
  return (
    <section aria-label="santuy reminders running banner" className="mt-[var(--sp-6)] overflow-hidden py-[var(--sp-5)]" style={{ backgroundColor: "var(--yellow)" }}>
      <p className="sr-only">{ITEMS.join(" · ")}</p>
      <div className="marquee-track flex w-max items-center" aria-hidden="true">
        <Row />
        <Row hidden />
        <Row hidden />
        <Row hidden />
      </div>
    </section>
  );
}
