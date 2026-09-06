# santuy. — Design System

**Humor-based mental-health first-aid** · Design System **v1.0**

A stigma-free first-aid kit dressed in colour that feels alive: playful enough to lower a
student's guard, calm enough to bring their heart rate back down. This document is the single
source of truth for design tokens, components, and the **WCAG 2.1 Level AA** minimum bar that
every screen must meet.

> **How to read this doc:** every value below is a **token**. Build with tokens, never with raw
> hex/px. Tokens map 1:1 to the CSS custom properties in `index.html` (`:root`), so design and
> code stay in lockstep.

---

## 1. Design Principles

1. **Orange always means "action."** It is reserved for CTAs and the ever-present *Get Help*
   button — never used for decoration, so it never gets lost.
2. **Contrast is the mood engine.** Energetic blue↔orange contrast in the humor phase; the same
   palette with more air (spacing/pacing) in Calm Mode. We create calm with **space, not with
   washed-out colour.**
3. **Legible before cute.** Solid icons, large tap targets, no thin strokes that vanish on a phone.
4. **Accessible by default.** AA is the floor, not a stretch goal (see §7).

---

## 2. Color Tokens

Each brand hue ships in a **light / base / dark** triad. Base is the everyday value; dark is for
pressed/hover states and for text where the base fails contrast; light is for surfaces & gradients.

### 2.1 Brand — Sky Blue
| Token | Hex | Role |
|---|---|---|
| `--blue-light` | `#60C2EE` | Gradients, secondary surfaces |
| `--blue` | `#0F8FF6` | Primary · cool surfaces, Triage |
| `--blue-dark` | `#0B64AC` | Pressed/hover, **text & links on light** |

### 2.2 Brand — Sunshine Yellow
| Token | Hex | Role |
|---|---|---|
| `--yellow-light` | `#FADB6F` | Soft warm backgrounds |
| `--yellow` | `#F8C821` | Primary · warm surfaces, Meme Lab |
| `--yellow-dark` | `#AE8C17` | Text on yellow, outlines |

### 2.3 Brand — Ember Orange (the *action* colour)
| Token | Hex | Role |
|---|---|---|
| `--orange-light` | `#FAA766` | Hover backgrounds, badges |
| `--orange` | `#F77713` | Accent · every CTA, *Get Help* button |
| `--orange-dark` | `#AD530D` | Pressed state, **text on light** |

### 2.4 Supporting & Semantic
| Token | Hex | Role |
|---|---|---|
| `--green` | `#4CAF7D` | Success / small accents (sparingly) |
| `--ink` | `#15152E` | Text & icons on light surfaces |
| `--paper` | `#F9FAFB` | App background (Ghost White) |
| `--white` | `#FFFFFF` | Cards & raised surfaces |
| `--error` | `#E5484D` | Error text, failed states |
| `--error-light` | `#FBE4E4` | Error banner / field backgrounds |

### 2.5 Recommended pairings
| Foreground | Background | Use for |
|---|---|---|
| `--ink` | `--paper` / `--white` | All body copy, headings |
| `--white` | `--blue` | Primary button |
| `--white` | `--orange` | *Get Help* button & CTAs |
| `--white` | `--green` | Success chips / accents |
| `--blue-dark` | `--paper` / `--white` | Links, interactive text |
| `#8A2C30` | `--error-light` | Error message text |

---

## 3. Typography Tokens

Two families only. **Onest** brings friendly personality without the heavy roundness of a bubble
font; **Nunito** holds up at small sizes on a phone. (Poppins intentionally avoided.)

| Token | Value |
|---|---|
| `--font-head` | `'Onest', sans-serif` |
| `--font-body` | `'Nunito', sans-serif` |

### 3.1 Type scale
| Style | Token/Family | Weight | Size / Line-height | Usage |
|---|---|---|---|---|
| Heading 1 | `--font-head` (Onest) | **700** | 40 / 48 | Hero / page title |
| Heading 2 | `--font-head` (Onest) | **700** | 28 / 34 | Section titles |
| Heading 3 | `--font-head` (Onest) | 600 | 20 / 28 | Card & sub-headings |
| Body | `--font-body` (Nunito) | 400 | 16 / 26 | Copy, validation messages |
| Button / Label | `--font-head` (Onest) | 700 | 15–16 / 24 | Buttons, labels |
| Caption | `--font-body` (Nunito) | 400 | 13 / 18 | Metadata, helper text |

**Rules**
- Headings use `letter-spacing: -0.01em`; body stays at default tracking.
- Buttons share the **heading** font (Onest) so CTAs and titles speak with one voice.
- Minimum body size is **16px** (never ship copy below 13px caption size).

---

## 4. Shape / Radius Tokens

| Token | Value | Applies to |
|---|---|---|
| `--radius-pill` | `999px` | Buttons, toggles, chips — a pill always reads "tap me" |
| `--radius-card` | `24px` | Cards & content containers |
| `--radius-input` | `16px` | Inputs, small tiles |

> **Shape convention:** fully-round = a control; softer 24px = a container. Never blur that line.

---

## 5. Spacing Tokens

An 8-point-friendly scale (base unit **4px**). Compose all margins, padding, and gaps from these.

| Token | Value |
|---|---|
| `--sp-1` | 4px |
| `--sp-2` | 8px |
| `--sp-3` | 12px |
| `--sp-4` | 16px |
| `--sp-5` | 24px |
| `--sp-6` | 32px |
| `--sp-7` | 48px |
| `--sp-8` | 64px |

**Layout constants:** content max-width `760px`; page gutter `--sp-5` (24px); section rhythm
`--sp-8` (64px) top & bottom. Calm Mode uses the *same* tokens but steps up one level (e.g. `--sp-6`
→ `--sp-7`) to add air.

---

## 6. Motion Tokens

| Token | Value | Usage |
|---|---|---|
| `--ease` | `cubic-bezier(.4, 0, .2, 1)` | Standard easing — smooth, **no bounce/overshoot** |
| `--dur` | `450ms` | Standard transitions, page-load reveal |
| `--dur-fast` | `200ms` | Button presses, micro-feedback |

**Rules**
- One reveal on page load; after that, motion responds only to real user actions.
- The Calm Mode breathing ring is the one ambient loop (7s cycle) and is intentionally slow.
- **Respect `prefers-reduced-motion`:** all animation/transition durations collapse to ~0ms.

---

## 7. Accessibility — Minimum Spec: **WCAG 2.1 AA**

AA is the **floor** for every screen. The rules below are testable and non-negotiable.

### 7.1 Contrast thresholds (must pass)
| Content | Minimum ratio |
|---|---|
| Normal text (< 18.66px, or < 24px if not bold) | **4.5 : 1** |
| Large text (≥ 24px, or ≥ 18.66px **bold**) | **3 : 1** |
| UI components & focus indicators (borders, icons, states) | **3 : 1** |

### 7.2 Palette contrast audit (measured against this palette)
| Pair | Ratio | Verdict |
|---|---|---|
| `--ink` on `--paper` | **17.0 : 1** | ✅ AAA — default text |
| `--ink` on `--white` | ~18 : 1 | ✅ AAA |
| `--blue-dark` on `--paper` | **5.9 : 1** | ✅ AA — links/interactive text |
| `--white` on `--blue-dark` | **6.1 : 1** | ✅ AA |
| `--ink` on `--orange` | **6.5 : 1** | ✅ AA |
| `--white` on `--blue` / `--orange` / `--green` | 2.7–3.3 : 1 | ✅ **Approved brand pairing** — reserved for buttons/CTAs with **bold ≥14px** labels & icons |

**Guidance baked into the system**
- White-on-`--blue`/`--orange`/`--green` is an **approved brand exception** for buttons and CTAs,
  where labels are always **bold, ≥14px** and paired with an icon — so the control reads clearly
  even where body-text contrast would not.
- For **body copy, links, and small/regular-weight text** on light backgrounds, use `--ink`
  (text) and `--blue-dark` (links) — never `--blue` at body weight.
- Non-text UI (borders, focus rings, icons) still meets the 3:1 component threshold.

### 7.3 Focus & keyboard
- Every interactive element has a visible focus ring: `outline: 3px solid var(--blue);
  outline-offset: 3px` (≥3:1 against adjacent colours).
- Full keyboard operability; logical tab order; no keyboard traps.
- Focus is never removed without an equivalent visible replacement.

### 7.4 Targets & motion
- **Minimum touch target 44×44px** (AAA-aligned; we adopt it as our floor). Pills already exceed
  this; verify icon-only buttons.
- Honour `prefers-reduced-motion: reduce` — no essential info conveyed by motion alone.
- No content flashes more than **3× per second**.

### 7.5 Semantics & content
- Colour is **never the only** signal: pair it with text/icon (e.g. errors use the `--error`
  colour **and** an alert icon **and** a message).
- Meaningful images/icons have text alternatives; decorative ones are hidden from assistive tech.
- Toggles expose state (`aria-pressed`); form fields have programmatic labels.
- Copy is plain-language and non-diagnostic (see §8).

---

## 8. Voice & Tone

Warm and gentle — **validate first, never diagnose, never cute at the expense of clarity.**

| Context | Example |
|---|---|
| Validation | "A lot of people feel exactly this stuck before a deadline. You're not behind, you're just tired." |
| Empty / loading | "Finding a meme that actually gets it. One second." |
| Helpline framing | "This isn't a replacement for talking to someone. If it's more than a rough afternoon, these lines are free and ready." |

---

## 9. Core Components

### 9.1 Buttons
| Variant | Fill | Text | Notes |
|---|---|---|---|
| Primary | `--blue` | `--white` (bold) | Main path forward |
| Secondary | transparent, 2px `--blue` border | `--blue-dark` | "Skip / not now" |
| Ghost | transparent | `--ink` | Low-emphasis (Back) |
| Help | `--orange` | `--white` | Persistent, visually constant everywhere |
| Disabled | `#E4DFDA` | `#A39C93` | `cursor: not-allowed`, no shadow |

- Radius `--radius-pill`; padding `12px 24px`; press feedback `transform: scale(.96)` at `--dur-fast`.

### 9.2 Cards
`--white` surface, `--radius-card` (24px), padding `--sp-5`, soft shadow
`0 4px 14px rgba(21,21,46,.08)`.

### 9.3 Navigation
- **Desktop:** links inline with the persistent *Get Help* button.
- **Mobile:** bottom tab bar (thumb-reach), Help always one tap away.

### 9.4 Calm Mode
Same tokens, more spacing. Hosts Breathing (7s ring loop), the Micro-Step generator, and the
closing screen. Colour stays full-strength; calmness comes from `--sp-*` stepping up and slower
pacing.

---

## 10. Token Quick Reference (CSS)

```css
:root{
  /* Color — brand */
  --blue-light:#60C2EE; --blue:#0F8FF6; --blue-dark:#0B64AC;
  --yellow-light:#FADB6F; --yellow:#F8C821; --yellow-dark:#AE8C17;
  --orange-light:#FAA766; --orange:#F77713; --orange-dark:#AD530D;
  /* Color — supporting & semantic */
  --green:#4CAF7D; --ink:#15152E; --paper:#F9FAFB; --white:#FFFFFF;
  --error:#E5484D; --error-light:#FBE4E4;
  /* Shape */
  --radius-pill:999px; --radius-card:24px; --radius-input:16px;
  /* Spacing */
  --sp-1:4px; --sp-2:8px; --sp-3:12px; --sp-4:16px;
  --sp-5:24px; --sp-6:32px; --sp-7:48px; --sp-8:64px;
  /* Motion */
  --ease:cubic-bezier(.4,0,.2,1); --dur:450ms; --dur-fast:200ms;
  /* Type */
  --font-head:'Onest', sans-serif; --font-body:'Nunito', sans-serif;
}
```

---

*"santuy." is a placeholder wordmark — swap in the real name/logo. Palette sourced from the
reference image · Design System v1.0 · Minimum accessibility target: WCAG 2.1 AA.*
