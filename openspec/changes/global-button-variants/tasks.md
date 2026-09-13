## 1. Shared button base

- [x] 1.1 Add `.btn` base class to `app/globals.css` (full width, 46px, pill radius, 14px/700 heading font, tactile shadow + press transition, all tokenized) and verify `tsc --noEmit` + `npm run build` pass
- [x] 1.2 Add disabled + focus-visible handling to `.btn` (reusing `--disabled-*` tokens and the global focus ring) and verify Tab reaches the button with a visible ring and disabled buttons ignore clicks

## 2. Variants

- [x] 2.1 Add `.btn-primary` (filled `--blue`, white bold label, `--blue-dark` border + shadow) and verify side-by-side against Secondary that Primary dominates while shapes match
- [x] 2.2 Add `.btn-secondary` (light surface, `--orange-dark` label, token-mixed hairline border + shadow) and verify it reads tappable but subordinate to Primary

## 3. States + audit

- [x] 3.1 Implement hover + active/pressed physics for both variants (downward shift, collapsing shadow) and verify press feel matches across variants on a real phone
- [x] 3.2 Adopt the classes on one route (e.g. triage cards' CTAs) and verify no visual regression plus WCAG 2.1 AA focus/target/contrast checks pass
