## Context

See proposal.md (Why). Current state: route pages hand-style their own CTA links/buttons; `components/HelpButton.tsx` + `components/TabBar.tsx` already establish an orange-filled precedent. Source of truth is `.context/design_system.md` v1.0 + `app/globals.css` tokens. The request references a foreign token namespace (`--buttons`, `--font-family-base`, `--color-text-secondary`, `--color-border`); those tokens do not exist here, so this design maps each intent onto the repo's actual tokens. See specs/buttons/spec.md for behavior requirements.

## Goals / Non-Goals

**Goals:**

- One tactile button system (Primary + Secondary) as additive global CSS classes any page can adopt without refactors.
- Zero new color/type tokens; every value traces to an existing token.

**Non-Goals:**

- Restyling `HelpButton`/tab bar or migrating existing pages to the new classes (follow-up change).
- Icon slots, sizes beyond the single 46px height, loading spinners.
- Migrating `HelpButton` to `.btn-primary`, ever: crisis help keeps `--orange` as the sole exception per the DS action-color rule ("Orange always means action").

## Decisions

- **Form: plain CSS classes in `app/globals.css` `@layer components`** (`.btn` base + `.btn-primary` / `.btn-secondary` modifiers, usable on `<button>` and `<a>`).
  - Alternative considered: React `<Button>` component — rejected (classes cover links + buttons with no prop API; pages already style `Link`s as buttons).
- **Token mapping** (request intent → repo token):
  | Intent | Repo token |
  |---|---|
  | Pill radius (`--buttons: 100px`) | `--radius-pill` |
  | Button typeface | `--font-head` (DS: buttons share the heading font) |
  | Primary fill / border / shadow | `--blue` / `--blue-dark` / `0 4px var(--blue-dark)` |
  | Primary label | `--white`, bold (DS §7.2 approved brand pairing for bold ≥14px buttons; DS §9.1 Primary row) |
  | Secondary surface | `--white` (reads light against the `--paper` app background) |
  | Secondary label (`#da5000` burnt orange) | `--orange-dark` (repo's orange-for-text-on-light) |
  | Secondary border (`#143c3f1f` hairline) | `1px solid color-mix(in srgb, var(--orange-dark) 16%, transparent)` — token-derived, no new token |
  | Secondary shadow (`#e3e8e8`) | `0 3px color-mix(in srgb, var(--ink) 10%, transparent)` — token-derived |
  | Motion | `--dur-fast` + `--ease` |
  | Disabled | `--disabled-bg` / `--disabled-fg` + `cursor: not-allowed` (tokens already exist) |
- **Pressed physics**: `transform: translateY(2px)` + shadow collapses to `0 1px` (Primary: `var(--blue-dark)`; Secondary: transparent/mix), same `--dur-fast` transition both variants.
- **Focus**: no per-button override — the global `:focus-visible` 3px `--blue` ring in `globals.css` already satisfies DS §7.3.
- **Fixed 46px height** kept as specified (explicit requirement; clears the 44px floor). Radius/height are control dimensions, not composed spacing — the no-raw-px rule applies to colors and composed spacing, which stay tokenized.

## Risks / Trade-offs

- [Risk] `--white` on `--blue` is a brand-exception pairing (relies on bold ≥14px + DS §7.2 approval, not the 4.5:1 body rule) → Mitigation: keep labels bold 14px minimum, never use the pairing for body copy; FE audit (5.2) re-checks on device.
- [Risk] `color-mix` unsupported on very old browsers → Mitigation: acceptable for a competition mobile demo (all modern mobile browsers support it); border/shadow degrade to none, layout intact.
- [Risk] Existing hand-styled buttons diverge until adopted → Mitigation: additive-only change, nothing breaks; adoption is a later change.

## Migration Plan

Additive CSS only — deploy with any release, rollback by deleting the classes. No data, no API, no flag.
