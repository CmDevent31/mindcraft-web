## Why

10 days left for a competition, 3 builders (Alif / Jo / Malky), blank Next.js starter. We need the full user flow — Landing → Triage → Breathing → Meme → Micro-Step + Helpline — built in parallel with zero file collisions and zero backend. This change freezes scope, routes, and ownership so all three can ship without blocking each other.

## What Changes

- **Adds 5-route IA (Option 1)**: `/` landing, `/triage`, `/breathe`, `/memes/[emotion]`, `/reset` — one owner per route, end-to-end.
- **BREAKING / scope cut — removes "Meme Your Problem" canvas** (was PRD §6.3.2): no canvas editor, no text input, no download/share, no canvas privacy logic. Meme Lab is curated deck only. PRD renewal (`§5, §6.3.2, §7, §8, §9.4, §11` + flow diagram) is tracked as a task in this change, applied during implementation — not in planning.
- **Simplifies Micro-Step**: static one micro-step per emotional state (3 total, deterministic) instead of a ≥15-item random generator pool.
- **Assigns ownership**: Alif = `/` + shell tokens + illustrations + proposal/video/demo + FE audit; Jo = `/triage` + `/breathe`; Malky = `/memes/[emotion]` + `/reset` + `lib/content.ts` + `memes.json` + R2 + deploy.
- **Adds shared contracts**: `lib/content.ts` schema (Emotion, Meme, microStep per emotion, helplines), Design System tokens in `globals.css`, persistent `HelpButton` + bottom tab bar (mobile-first).
- **Adds R2 + deploy pipeline**: WebP-only curated memes in Cloudflare R2 via `next/image` `remotePatterns`; Vercel preview + freeze-day flow.

## Capabilities

### New Capabilities

- `landing`: landing page at `/` — hero, Start CTA to `/triage`, persistent help, mobile-first entry.
- `triage`: symptom-card selection at `/triage` for 3 emotional states, routing with emotion context.
- `breathing`: guided 4-7-8 breathing at `/breathe` with skip, reduced-motion support.
- `meme-lab`: curated meme deck at `/memes/[emotion]` backed by `memes.json` + R2 WebPs, validation messages.
- `micro-step-helpline`: static per-emotion micro-step + helpline list + disclaimer at `/reset`, plus persistent help everywhere.
- `app-shell`: global shell — layout, Design System tokens, nav (bottom tab bar mobile / inline desktop), HelpButton, footer disclaimer, mobile-first + AA baseline.

### Modified Capabilities

- None (greenfield; `openspec/specs/` is empty).

## Impact

- Affected code: `app/` routes (`page.tsx`, `triage/`, `breathe/`, `memes/[emotion]/`, `reset/`), `app/layout.tsx`, `app/globals.css`, `components/HelpButton.tsx`, `lib/content.ts`, `data/memes.json`, `next.config.ts` (`remotePatterns`), `public/` illustrations.
- Dependencies: Cloudflare R2 bucket + public URLs, Vercel deploy, `Onest` + `Nunito` fonts (replace Geist), no DB/auth/analytics.
- Systems: `.context/PRD.md` must be renewed during apply to remove canvas references and record static micro-step + 5-route IA (tracked in tasks, not edited here).
