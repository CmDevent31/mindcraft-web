## Why

Route pages (triage, breathe, meme deck, reset) each hand-style their own CTA buttons, so the product has no single coherent button system — interaction feel, radius, and state handling drift per page. A shared Primary/Secondary pair built once on design-system tokens gives every route the same tactile, AA-compliant control with color as the only variant axis.

## What Changes

- **Adds a shared button system**: Primary (filled, strong) + Secondary (light, subtle) variants with identical structure, dimensions, typography, and tactile press interaction.
- **Adds five consistent states per variant**: default, hover, active/pressed, focus-visible, disabled.
- **Token-first styling**: all color, type, radius, and motion values resolve to existing `app/globals.css` tokens — no new token namespace, no hardcoded hex.
- No breaking changes; existing pages keep working and can adopt the shared classes incrementally.

## Capabilities

### New Capabilities

- `buttons`: shared Primary/Secondary button variants — structure, color treatment per variant, five interaction states, tactile press behavior, disabled handling, all on existing design-system tokens.

### Modified Capabilities

- None (greenfield capability; `openspec/specs/` is empty).

## Impact

- Affected code: `app/globals.css` (shared button classes), route pages adopting the classes (`app/triage/page.tsx`, `app/breathe/page.tsx`, `app/memes/[emotion]/MemeDeck.tsx`, `app/reset/page.tsx`), `components/HelpButton.tsx` + `components/TabBar.tsx` (potential future alignment, out of scope for this change).
- Dependencies: existing DS tokens in `app/globals.css` (`--orange`, `--blue`, `--white`, `--ink`, `--paper`, `--blue-dark`, `--radius-pill`, `--font-head`, `--font-body`, `--dur-fast`, `--ease`); no new packages, no backend.
- Note: the request references token names from another system (`--buttons`, `--font-family-base`, `--color-text-secondary`, `--color-border`); this change maps those intents onto this repo's actual tokens (recorded in design.md) rather than introducing a parallel namespace.
