## Context

Blank Next.js 16 App Router starter (see `app/page.tsx`, `app/layout.tsx`, `app/globals.css`); `openspec/specs/` empty; source of truth is `.context/PRD.md` v1.1 + `.context/design_system.md` v1.0. See proposal.md Why. Constraints: 10 days, no backend/DB/auth, mobile-first 360–390px, R2 WebPs <500ms, AA. No handoff restrictions per user — ownership is by route, contracts are advisory.

## Goals / Non-Goals

**Goals:**

- 5-route flow with one owner per route and a single shared content schema.
- Curated-only Meme Lab fully owned by Malky (JSON → UI → R2).
- Static per-emotion micro-step (deterministic, no random pool).
- Competition-ready mobile demo + Vercel deploy.

**Non-Goals:**

- Meme-creation canvas (full cut, no placeholder), accounts, analytics, CMS/admin, offline PWA, i18n beyond shipped copy.

## Decisions

- **Route split Option 1**: `/` (Alif) separate from `/triage` (Jo) — avoids both editing `app/page.tsx`; landing is thin hero → `/triage`.
  - Alternative considered: single `/` with hero + cards — rejected (same-file collision Alif/Jo).
- **Content as static TS + JSON**: `lib/content.ts` types + `data/memes.json` (memes, `microStepsByEmotion: Record<Emotion,string>`, `helplines`) imported directly, no API routes.
  - Alternative: Next API + R2 proxy — rejected (no secrets, no dynamic behavior, adds latency).
- **Emotion via URL, not state**: `/memes/[emotion]`, `/reset?emotion=` or path param validated against union type; invalid → redirect `/triage`.
  - Alternative: React context/store — rejected (deep-link/demo breaks, harder to share).
- **R2 direct + `next/image`**: public R2 URLs + `remotePatterns` in `next.config.ts`, `priority` on first meme, WebP-only, explicit `alt`.
  - Alternative: `public/` bundled memes — rejected (bloats deploy, slower).
- **Breathing timer**: CSS ring + JS phase timer (4-7-8s) with text phase label, `prefers-reduced-motion` collapses to stepped text; skip always visible.
- **Fonts/tokens**: replace Geist with `Onest` (head) + `Nunito` (body) via `next/font`, tokens as `:root` CSS vars; `HelpButton` + bottom tab bar shared component.

## Risks / Trade-offs

- [Risk] R2 CORS / `remotePatterns` misconfig breaks images on deploy → Mitigation: Malky proves 1 R2 image on preview Day 1, Alif audits on real phone.
- [Risk] Geist→Onest/Nunito swap causes layout shift → Mitigation: Alif does token pass Day 2, freeze type scale after.
- [Risk] Static micro-step feels thin to judges → Mitigation: copy quality per emotion (Alif audits tone), deterministic is a feature for demo reliability.
- [Risk] Helpline number error (crisis safety) → Mitigation: copy from PRD §9 verbatim, Alif + Malky double-check `tel:`/`wa.me` links Day 8.
- [Risk] No handoff locks means schema drift (`lib/content.ts` edited by 2 people) → Mitigation: convention only — Malky writes, others read; review on PR.

## Migration Plan

- Greenfield, no migration. Deploy: Malky sets R2 + Vercel env/URLs, `next build` gate, preview → freeze noon Day 10 → prod deploy → rehearse. Rollback: previous Vercel deployment.

## Open Questions

- None blocking; curation picks (9–12 memes + alt-text + validation lines) resolved in Day 7 jam without changing specs/tasks.
