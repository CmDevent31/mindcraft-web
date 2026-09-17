## 1. Four-steps section redesign

- [x] 1.1 Restyle Features section as numbered card/stepper grid (stack on mobile, multi-column on md+) with aria-hidden numerals, preserving STEPS copy and order, and verify all four steps render in order with no overlap at 360px and 1080px widths
- [x] 1.2 Verify four-steps heading hierarchy (h2 section, h3 per step) and CTA-free section keyboard behavior intact via tab-through check

## 2. Stress-shows-up section redesign

- [ ] 2.1 Refresh Issues emotion cards visual treatment (spacing, card finish, equal hierarchy) driven by EMOTION_META with check-in CTA to /triage preserved, and verify three cards plus CTA render with correct copy
- [ ] 2.2 Verify stress cards stack without horizontal scroll or clipped text at 360px mobile width

## 3. Ready-when-you-are section redesign

- [ ] 3.1 Enrich Closing CTA panel treatment (contrasting background, card radius, padding/shadow) preserving headline, copy, and .btn .btn-primary link to /triage, and verify panel is visually distinct and CTA navigates to /triage

## 4. Circular pill navbar

- [x] 4.1 Convert SiteHeader inner container to floating rounded-pill (radius-pill, top/side margins, white surface with border/shadow) keeping sticky positioning, brand link, HelpButton, and width switch, and verify pill appears detached with page background visible on all sides on every route
- [x] 4.2 Add scroll-margin to anchored sections (#demo #issues #features #faq) and verify anchor jumps do not hide headings under the pill navbar

## 5. Footer redesign

- [x] 5.1 Restyle SiteFooter inner wrapper as finished rounded card block preserving DISCLAIMER verbatim and Home/Check-in links, and verify disclaimer plus both links are visible and navigate correctly on every route

## 6. Verification

- [ ] 6.1 Run npm run build and verify it succeeds with no type or lint errors
- [ ] 6.2 Verify responsive and accessibility pass: no overlap with mobile TabBar at 360px, visible focus on all CTAs/header/footer links via keyboard tab, AA contrast intact, and prefers-reduced-motion renders sections statically
