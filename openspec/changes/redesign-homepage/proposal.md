## Why

The current homepage sections (four-steps timeline, stress cards, closing CTA) and site chrome (rectangular sticky header, minimal footer) read as wireframe-level: flat cards, a plain left-border step list, and a boxy navbar that blends into content. A cohesive visual refresh raises trust and completion toward check-in without changing the flow.

## What Changes

- Redesign **Four small steps** section (`Features` in `app/page.tsx`): card/stepper visual treatment replacing the plain left-border list, preserving the 4 STEPS copy and order.
- Redesign **Ready when you are** section (`Closing` in `app/page.tsx`): richer CTA panel treatment, preserving headline, copy, and Start check-in link to `/triage`.
- Redesign **Stress shows up in familiar ways** section (`Issues` in `app/page.tsx`): card grid refresh, preserving the 3 emotion cards driven by `EMOTION_META` and the check-in CTA.
- Make the **navbar circular / pill**: convert `SiteHeader` from a full-width rectangular bar into a floating circular-pill navbar (rounded, detached from viewport edges), preserving brand link and `HelpButton`.
- Redesign **footer** (`SiteFooter`): refreshed visual treatment, preserving disclaimer text and Home / Check-in nav.

## Capabilities

### New Capabilities
- `homepage-sections`: Visual and structural requirements for the three homepage content sections (four-steps, stress-shows-up, ready-when-you-are) — layout, hierarchy, responsive behavior, accessibility.
- `site-chrome`: Visual and structural requirements for the global navbar (floating circular pill) and footer redesign — shape, placement, responsive behavior, accessibility.

### Modified Capabilities
- None. Existing `buttons` spec and routing/content contracts (`lib/content.ts`) are unchanged; CTAs keep using `.btn .btn-primary`.

## Impact

- Affected code: `app/page.tsx` (Features, Issues, Closing sections), `components/SiteHeader.tsx`, `components/SiteFooter.tsx`, `app/globals.css` (only DS tokens / new component classes, no token value changes).
- No API, data, routing, or dependency changes. `EMOTIONS`, `EMOTION_META`, `ROUTES`, `DISCLAIMER` content unchanged.
- Mobile `TabBar` unchanged; navbar pill must not collide with it (z-index, safe-area).
