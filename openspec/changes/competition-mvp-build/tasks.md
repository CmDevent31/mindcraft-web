## 1. Contracts + Foundation (Day 1)

- [ ] 1.1 [Together] Freeze 5-route map (`/`, `/triage`, `/breathe`, `/memes/[emotion]`, `/reset`) and verify all three owners can recite their routes without overlap
- [x] 1.2 [Alif] Create `lib/content.ts` schema (Emotion union, Meme, microStepsByEmotion, Helpline) and verify `tsc --noEmit` passes on import by all routes
- [X] 1.3 [Malky] Prove 1 R2 WebP loads via `next/image` on Vercel preview and verify <500ms on mobile 4G with correct alt text

## 2. Shell + Landing — Alif (Days 2–6)

- [x] 2.1 [Alif] Replace Geist with Onest+Nunito and port Design System tokens to `app/globals.css`, verify no raw hex/px remains via visual diff
- [ ] 2.2 [Alif] Build `app/layout.tsx` + bottom tab bar + persistent HelpButton + footer disclaimer, verify Help reaches `/reset` from every route on 360px viewport
- [ ] 2.3 [Alif] Build `/` landing hero + Start CTA to `/triage`, verify tap reaches `/triage` in ≤2s with ≥44×44px targets
- [ ] 2.4 [Alif] Deliver illustrations + validation copy bank in DS voice, verify copy is non-diagnostic and plain-language

## 3. Triage + Breathing + Micro-step — Jo (Days 2–6)

- [ ] 3.1 [Jo] Build `/triage` 3 emotion cards routing to `/breathe` with emotion preserved, verify invalid emotion falls back to `/triage`
- [ ] 3.2 [Jo] Build `/breathe` 4-7-8 visualizer with exact timing + Skip/Continue preserving emotion, verify stopwatch matches 4s/7s/8s phases
- [ ] 3.3 [Jo] Add reduced-motion + non-color phase cues on `/breathe`, verify with `prefers-reduced-motion: reduce` that text cues remain and animation collapses
- [ ] 3.4 [Jo] Author 3 static micro-steps (one per emotion) + build micro-step display on `/reset` reading from `lib/content.ts`, verify correct micro-step shows per emotion with no variation across visits

## 4. Meme Lab + Helpline — Malky (Days 2–6)

- [x] 4.1 [Malky] Author `data/memes.json` + helplines, verify JSON validates against `lib/content.ts` types
- [x] 4.2 [Malky] Optimize to WebP, upload to R2, add `remotePatterns` to `next.config.ts`, verify all URLs return 200 with public cache headers
- [x] 4.3 [Malky] Build `/memes/[emotion]` deck (one per viewport, Next/Continue, no canvas entry), verify emotion filtering + advance to `/reset` preserves emotion
- [x] 4.4 [Malky] Build `/reset` helpline list (`tel:`/`wa.me`) + disclaimer, verify each helpline opens correct target and disclaimer is visible without interaction

## 5. Integrate + Audit + Freeze + Deploy (Days 7–10)

- [ ] 5.1 [Together] Wire end-to-end Landing → Triage → Breathe → Meme → Reset with emotion preserved, verify full pass on real phone with throttled 4G
- [ ] 5.2 [Alif] FE audit: contrast, focus rings, targets, motion, performance, verify WCAG 2.1 AA checklist passes and triage→meme <2s
- [x] 5.3 [Malky] Set up Vercel deploy + preview pipeline in finalization, verify `npm run build` passes and preview URL loads all 5 routes on mobile
- [ ] 5.4 [Malky + Alif] Freeze code noon Day 10, Malky deploys prod, verify prod smoke test on phone; Alif delivers proposal + demo video, verify 90-sec panic-to-calm demo runs without errors
