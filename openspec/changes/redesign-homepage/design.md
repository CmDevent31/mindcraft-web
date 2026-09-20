## Context

See proposal.md Why for motivation. Current state:
- `app/page.tsx` holds `Features` (plain `<ol>` with left border), `Issues` (flat white cards + single CTA), `Closing` (yellow-light panel) — all static Server Components.
- `components/SiteHeader.tsx` is a sticky full-width rectangular bar (`bg-paper`, no rounding/shadow); width switches 1080px on `/` vs `content-max` elsewhere.
- `components/SiteFooter.tsx` is a plain white block with disclaimer + two links, capped at `content-max`.
- Constraints: DS tokens in `app/globals.css` are the source of truth (no raw hex/px outside `:root`); `.btn .btn-primary` tactile system must be reused untouched; `lib/content.ts` copy/routes unchanged; mobile `TabBar` (fixed bottom, `z-50`, md:hidden) must not collide; FAQ `<details>` motion pattern stays the reference for reduced-motion.

## Goals / Non-Goals

**Goals:**
- Give the five areas (four-steps, ready-when-you-are, stress cards, pill navbar, footer) a cohesive card/pill language on top of existing tokens.
- Keep all changes in `app/page.tsx`, `SiteHeader`, `SiteFooter`, plus token-referencing classes in `globals.css`.
- Preserve copy, order, routes, heading hierarchy, and CTA behavior exactly.

**Non-Goals:**
- No copy changes, no new routes, no new emotions/helplines, no TabBar/Hero/Demo/FAQ/Marquee changes.
- No new dependencies, no token value changes, no dark mode, no per-button CSS overrides.
- No entrance/scroll animations beyond what reduced-motion already collapses.

## Decisions

**1. Section-local markup + one shared card idiom (over a new component library).**
Keep edits inside the existing section functions in `app/page.tsx`; style steps/cards with Tailwind token classes (`bg-white`, `rounded-[var(--radius-card)]`, `boxShadow: 0 4px 14px rgba(...)` idiom already used in Issues, or token spacing). Add numbered step markers (1–4) via CSS counter or static numerals — static numerals preferred for screen-reader simplicity.
Alternative considered: extract shared `SectionCard` components — rejected, unnecessary indirection for a one-page restyle; keeps diff reviewable.

**2. Floating pill navbar via wrapper, not header restyle.**
Keep `<header class="sticky top-0 z-40">` as the positioning layer; turn the inner container into the pill (`rounded-[var(--radius-pill)] bg-white shadow + border`, with `mt-[var(--sp-3)] mx-[var(--gutter)]`). Approach preserves the existing max-width switch (1080px vs content-max) and `HelpButton` untouched. Add `scroll-margin-top` to anchored sections (`#demo #issues #features #faq`) so the taller floating pill never covers headings.
Alternative considered: `border-radius: 999px` on the header itself — rejected, full-bleed sticky bar cannot look detached.

**3. Footer as a rounded container card.**
Mirror the pill language at lower emphasis: inner wrapper becomes `rounded-[var(--radius-card)]` block with subtle background/border, still capped at content width; disclaimer + nav markup unchanged. Keeps footer distinct from `bg-paper` without introducing new colors.
Alternative considered: full-bleed colored footer — rejected, clashes with Closing panel and Marquee band.

**4. Responsive: stack → grid with existing breakpoints only.**
Four-steps: `grid gap md:grid-cols-2 xl:grid-cols-4`; Issues: keep `md:grid-cols-2` with first-card span idiom or unify to equal cards; Closing: unchanged stack, richer padding/shadow. No new breakpoints; verify at 360px and 1080px+.
Alternative considered: horizontal scroll-snap carousels — rejected, harms readability and keyboard access.

**5. Accessibility carried over, not reinvented.**
No heading-level changes; CTA links keep `.btn .btn-primary`; focus-visible inherits the global 3px blue ring; any decorative numerals/stars are `aria-hidden`; sections stay static so `prefers-reduced-motion` is trivially satisfied.

## Risks / Trade-offs

- [Pill navbar overlaps anchored headings on jump links] → Mitigation: add `scroll-mt` to anchored sections; verify `#demo/#issues/#features/#faq` jumps.
- [Pill shadow/border looks heavy on small screens] → Mitigation: reduce horizontal margins and shadow on mobile; verify at 360px.
- [Step numerals read as extra list content by screen readers] → Mitigation: mark numerals `aria-hidden`, keep `<ol>` semantics for order.
- [Scope creep into Hero/Demo/FAQ] → Mitigation: tasks explicitly exclude those components; reviewer checks diff touches only the five areas.

## Migration Plan

- Single static deploy, no data migration. Visual-only change; rollback is revert of the three files + CSS.
- Verify: `npm run build`, manual pass on `/` at mobile + desktop, keyboard tab through CTAs, `prefers-reduced-motion` check, anchor jumps, TabBar clearance.

## Open Questions

- None. Visual polish values (exact shadow depth, numeral style) are implementation detail within token bounds and do not change specs or tasks.
