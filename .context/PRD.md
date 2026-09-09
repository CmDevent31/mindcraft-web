# Product Requirements Document
## Humor-Based Mental Health First-Aid Web
 
| | |
|---|---|
| **Status** | Draft v1.1 |
| **Owner** | Product Team |
| **Last Updated** | September 2026 |
| **Target Users** | Indonesian Gen Z university students |
| **Related Docs** | See `.context/design_system.md` — single source of truth for all UI (tokens, components, WCAG 2.1 AA, voice & tone) |
| **Platform Principle** | **Mobile-first web** — design, build, and test for mobile first, then enhance for desktop |

> **Design-System Linkage:** Every UI requirement in this PRD **MUST** be implemented with tokens and components from `.context/design_system.md` (santuy. Design System v1.0). No raw hex/px, no off-system fonts, colors, radii, or motion. If PRD and Design System conflict on UI, the Design System wins on visual details; PRD wins on flow/scope.
 
---
 
## 1. Executive Summary
 
**Humor-Based Mental Health First-Aid Web** is an interactive, stigma-free digital tool that gives university students an instant emotional "first-aid kit" during moments of academic burnout, panic, and overthinking. Instead of static articles, the product uses evidence-informed **Coping Humor** and **Cognitive Defusion** techniques — delivered through a playful, meme-driven interface — to interrupt panic/freeze states in under a few minutes and gently guide students back toward focus and action.
 
The product is explicitly **not a replacement for therapy or crisis services**; it is a lightweight, always-available first responder that sits *before* formal counseling, lowering the barrier for students who avoid help-seeking due to stigma or the perceived rigidity of clinical processes.

**How to use this PRD with the Design System:** this document defines *what* to build and *in what order* (flow: Triage → Breathing Exercise → Meme → Micro-Step + Helpline). `.context/design_system.md` defines *how it looks, feels, and behaves* — color tokens (`--blue` / `--yellow` / `--orange` / `--ink` / `--paper`), type (`Onest` headings + `Nunito` body), shape (`--radius-pill` / `--radius-card`), spacing (`--sp-*`, 760px max-width, 24px gutter), motion (`--ease`, `--dur`), components (buttons, cards, bottom tab bar, Calm Mode), WCAG 2.1 AA, and voice & tone. All screens are **mobile-first**: primary layout, tap targets (≥44×44px), bottom tab bar navigation, and performance budgets assume a phone on mobile 4G first.
 
---
 
## 2. Problem Statement
 
- Gen Z university students frequently experience **academic paralysis, overthinking, and disproportionate stress** tied to coursework and social pressure.
- Many avoid formal counseling services due to **stigma**, cost, waiting times, or because the process **feels clinical and intimidating**.
- Existing digital mental-health resources are typically **static content** (articles, PDFs, infographics) that require effort to consume and offer **no real-time intervention** during an actual panic or freeze episode — i.e., help arrives too late or in the wrong format for the moment the student is in.
- There is a gap for a tool that meets students **in the acute moment** (the 2–5 minutes of panic/freeze) with something fast, low-effort, and non-clinical.
---
 
## 3. Goals & Objectives
 
| Goal | Description |
|---|---|
| **Reduce time-to-relief** | Give a student a usable coping action within 60 seconds of landing on the site. |
| **Lower the stigma barrier** | Present mental health support in a tone that feels casual, funny, and safe rather than clinical. |
| **Bridge to professional help** | Normalize and surface official helplines/counseling as a next step, not a replacement. |
| **Enable self-expression as coping** | Let students externalize their specific stressor (via the meme generator) rather than ruminate on it internally. |
| **Build a repeatable habit** | Make the tool something a student returns to during future stress spikes (not a one-time visit). |
 
### Non-Goals
- This product does **not** diagnose, treat, or provide clinical therapy.
- This product does **not** replace crisis intervention services for students in acute danger.
---
 
## 4. Target Users
 
**Primary persona: "The Overwhelmed Undergrad"**
- University student in Indonesia (typically 18–24)
- Currently facing a deadline, exam, or social stressor triggering acute stress
- Emotionally activated *right now* — low patience for long-form content or sign-up flows
- Digitally native, meme-literate, responds well to humor and informal language
- Hesitant to seek formal counseling due to stigma, unfamiliarity with the process, or fear of being judged
### Named Emotional States (Triage Categories)
1. **Executive Dysfunction** – "Tasks are piling up but my brain is blank."
2. **Social Hangxiety** – Post-social-interaction regret and anxious replaying.
3. **Academic Imposter** – Feeling like the biggest failure in the room.
---
 
## 5. Scientific & Theoretical Foundation
 
| Mechanism | Description | Product Application |
|---|---|---|
| **Coping Humor** | A psychological coping mechanism associated with reduced cortisol and acute stress response when stress is reframed through healthy humor. | Curated meme prescriptions matched to emotional state; humor-forward visual language throughout. |
| **Cognitive Defusion (CBT)** | A technique for creating distance between the self and a negative thought, so the thought is seen as "just a thought" rather than an objective threat. | The "Meme Your Problem" feature turns a personal stressor into an external, absurd meme object — reducing its perceived threat/size. |
| **Micro-Interventions** | Small, ~30-second actions that interrupt a freeze/shutdown state and gradually restore a sense of agency and focus. | Breathing Exercise immediately after Triage (down-regulate first) + Micro-Step Generator at the end (re-activate). |
 
*Note: These are supportive, evidence-informed coping techniques — not clinical treatment. Product copy and design should never imply diagnostic or therapeutic claims (see Section 9, Ethics & Safety).*
 
---
 
## 6. Scope: Pages & Features

> **App flow (v1.1): Triage → Breathing Exercise → Meme → Micro-Step + Helpline.**
> Rationale: de-escalate the body first (breathing) so humor lands better, then close with one tiny action + safety net. All pages implement `.context/design_system.md` tokens/components and are **mobile-first** (single-column ≤760px, 24px gutter, bottom tab bar, ≥44×44px targets).

### Page 1 — The Triage (Rapid Symptom Identification)

**Purpose:** Get the student to a relevant intervention in one tap, with zero forms or sign-up friction.

| Feature | Description | Design-System mapping |
|---|---|---|
| Interactive symptom cards | Three large, tappable cards, each representing a common student emotional state (Executive Dysfunction, Social Hangxiety, Academic Imposter), written in relatable, informal student language rather than clinical terms. Mobile-first: stacked vertically, full-width, thumb-reachable. | Cards: `--white`, `--radius-card`, `--sp-5`, soft shadow; Headings `Onest 20/28`; body `Nunito 16/26`; Triage accent `--blue` |
| Instant routing | Selecting a card immediately routes the user to Page 2 (Breathing Exercise) carrying the emotional-state context forward to Page 3 (Meme Lab) — no intermediate loading screens or questionnaires. | Primary button: `--blue` fill / `--white` bold text, `--radius-pill`; press `scale(.96)` at `--dur-fast` |
| No login required | The entire triage flow must be usable anonymously, with no account creation. | — |

**Acceptance Criteria**
- User can go from landing on Page 1 to starting breathing on Page 2 in ≤ 2 taps.
- Card copy is validated against target-user language (student slang, not clinical terms) and uses Design System voice & tone (§8: validate first, never diagnose).
- Page 1 loads and is interactive in under 2 seconds on mobile.
- Uses only Design System tokens; focus ring `3px solid var(--blue)` + `3px offset`; targets ≥44×44px.
---

### Page 2 — Breathing Exercise (Down-Regulate First)

**Purpose:** Lower heart rate / interrupt panic *before* humor, so the meme phase meets a calmer nervous system. This page moved up from the old Gentle Landing — it is now Step 2, not Step 3.

| Feature | Description | Design-System mapping |
|---|---|---|
| **Box Breathing Visualizer** | Guided 4-7-8 breathing pattern with a calming visual animation (e.g., expanding/contracting shape). Calm Mode: same palette, more air (spacing steps up one level, e.g. `--sp-6` → `--sp-7`). | Calm Mode (§9.4); breathing ring 7s loop; `--ease` + `--dur`; honor `prefers-reduced-motion` (collapse to ~0ms, no info by motion alone) |
| Skip / continue | Explicit "Skip to memes" (Secondary) + auto-continue "See memes that get it" (Primary) after 1 cycle. Never trap the user in breathing. | Secondary: transparent, 2px `--blue` border / `--blue-dark` text; Primary: `--blue` / `--white` |
| Persistent help | Helpline button visible here and on every page. | Help: `--orange` / `--white`, persistent, visually constant |

**Acceptance Criteria**
- Breathing visualizer animation timing matches the 4-7-8 pattern (4s inhale, 7s hold, 8s exhale) precisely.
- One-tap skip always available; state context (Page 1 selection) preserved to Page 3.
- Passes WCAG 2.1 AA: usable without color alone, visible focus, reduced-motion supported.
---

### Page 3 — Meme Lab

**Purpose:** Deliver coping-humor relief and cognitive defusion *after* the student has de-escalated slightly via breathing.
 
#### 6.3.1 Curated Meme Prescription — *Core / Primary Feature*
- System serves **3–5 curated memes** matched to the selected breakdown category.
- Each meme is paired with a short **validation message** (e.g., reassurance that the student is not alone in this experience).
- Memes are **manually curated by the team** — since the team is itself made up of students, curation relies on first-hand judgment of what actually resonates as funny/validating for Indonesian student audiences, rather than external licensing or formal testing.
- Meme images are **sourced manually as reference** (e.g. from Giphy, Imgflip, Instagram/Facebook posts, or other meme sources), saved as **WebP files**, and stored/served from **Cloudflare R2** object storage — not pulled live via API or embedded from the original platform. This keeps load times fast and avoids depending on a third-party service staying available.
- Mobile-first UI: swipeable / tappable card deck, one meme per viewport, large Next CTA in thumb zone; validation copy in Design System voice & tone.
**Acceptance Criteria**
- Meme sets are tagged by emotional category in the CMS/data layer so curation can scale without code changes.
- Each meme card displays: image, one-line validation message, and a "next" control to cycle through the set.
- All meme images are pre-optimized WebPs served from R2 so they render with no visible loading delay (see Section 10, Performance).
- Meme Lab uses Design System surfaces: `--yellow` / `--yellow-light` warm surfaces, `--white` cards (`--radius-card`), `Onest` headings + `Nunito` body, alt-text for every image (WCAG AA).
#### 6.3.2 "Meme Your Problem" — *Optional, Lower-Priority Feature*
- HTML5 Canvas-based interactive feature.
- User types their specific personal stressor into a classic meme template.
- Purpose: visually externalize and "shrink" an overblown personal problem via humor (cognitive defusion in action).
- Accessed via an explicit button from the Meme Lab — never auto-triggered, since typing out a personal stressor is a higher-effort, opt-in action.
- Scoped as a simple, **one-time, single-use** meme-making action (no saved history, no persistent state) — deprioritized relative to the core curated meme flow, so it does not require content-moderation logic for v1.
**Acceptance Criteria**
- Canvas renders and is editable on both desktop and mobile touch input.
- User-entered text is **not stored or transmitted** beyond the local session unless the user explicitly chooses to save/share the image (privacy-by-default).
- Generated meme can be downloaded or shared directly from the canvas.
---
 
### Page 4 — Micro-Step + Helpline (Gentle Close)

**Purpose:** Hand the student a concrete next action after humor, plus a safety net. Breathing already happened on Page 2 — this page does not repeat it, it closes the loop.

| Feature | Description | Design-System mapping |
|---|---|---|
| **Micro-Step Generator** | A button that generates a single, concrete 30-second action to break a stuck/freeze state (e.g., "Drink one sip of water," "Write one sentence of your title"). Should feel random/varied on repeat use to stay engaging. Mobile-first: single CTA above the fold, result in a `--white` card. | Primary CTA `--orange` (action colour) / `--white` bold; card `--radius-card` + `--sp-5` |
| **Helpline & Ethics Module** | A persistent, always-visible button linking to official crisis/mental-health helplines, plus a clear disclaimer that this site is a first-aid tool, not a substitute for therapy. Full helpline list + redundancy lives here; compact *Get Help* button lives everywhere. | Help button `--orange` / `--white` constant everywhere; disclaimer in `Nunito 16/26`, `--ink` on `--paper`/`--white`; helpline framing per Design System §8 |

**Acceptance Criteria**
- Micro-Step Generator has a pool of ≥ 15 varied actions to avoid repetition fatigue.
- Helpline button is present on **every page of the site**, not just Page 4 (see Section 9). On mobile it is in the bottom tab bar, always one tap away (Design System §9.3).
- Closing screen uses Calm Mode spacing (step up `--sp-*` one level for air); no bounce/overshoot motion (`--ease`).
---
 
## 7. User Stories
 
| User Story Title | User Story Description | Priority | Notes |
|---|---|---|---|
| Select emotional state | As a student, I can pick the card that matches how I'm feeling, so I get relevant help without explaining myself. | High | Page 1 — Triage |
| Anonymous access | As a student, I can use the site without creating an account, so I can get help right away. | High | Page 1 |
| Guided breathing first | As a student, I can follow a guided breathing animation right after triage, so my heart rate settles before humor. | High | Page 2 — Breathing (mobile-first, skippable, reduced-motion safe) |
| View curated memes | As a student, I can see memes matched to what I'm going through, so I feel less alone. | High | Page 3 — Meme Lab |
| Read validation message | As a student, I can read a short validation message with each meme, so I know my feelings are normal. | High | Page 3 |
| Meme your problem | As a student, I can turn my own problem into a meme, so it feels smaller and less overwhelming. | Low | Page 3 |
| Micro-step action | As a student, I can tap a button for one small 30-second action, so I can break out of feeling stuck. | High | Page 4 — Micro-Step |
| Reach helpline | As a student, I can reach a helpline from any page, so I can get real crisis support if I need it. | High | Page 4 + persistent on all pages |
| Read disclaimer | As a student, I can read a clear disclaimer, so I understand this tool isn't a therapy replacement. | High | Page 4 + footer |
| Jump to breathing / helpline | As a student, I can jump straight to breathing/helpline from anywhere on the site, so I can de-escalate immediately. | Medium | Cross-page (bottom tab bar on mobile) |
 
---
 
## 8. Information Architecture / User Flow

```
Landing → Page 1 (Triage: pick emotional state)
              ↓
        Page 2 (Breathing Exercise: 4-7-8 down-regulate, skippable)
              ↓
        Page 3 (Meme Lab: curated memes + validation)
              ↓ (optional)
        "Meme Your Problem" canvas
              ↓
        Page 4 (Micro-Step + Helpline: one tiny action + safety net)
```

- Breathing comes **before** memes (new order): calm the body first so humor lands. Skip is always one tap — never force breathing.
- Helpline (`--orange` *Get Help*) is persistent on **all pages**: bottom tab bar on mobile (thumb-reach, Design System §9.3), inline + button on desktop.
- No forced linear flow — every page reachable via persistent navigation; user can jump directly to Page 2 (breathing) or Page 4 (micro-step + helpline) from anywhere for immediate de-escalation.
---
 
## 9. Ethics & Safety Requirements (Critical)
 
This product touches acute emotional states, so the following are **non-negotiable requirements**, not nice-to-haves:
 
1. **Persistent crisis access:** A visible "Get Help Now" / helpline button must appear on **every page**, not buried in a menu. Implementation per Design System §9.1 + §9.3: `--orange` fill / `--white` bold text, `--radius-pill`, persistent + visually constant; mobile = bottom tab bar (thumb-reach, ≥44×44px), desktop = inline + button.
2. **Non-replacement disclaimer:** A clear, plain-language disclaimer must be shown (e.g., on first visit and in the footer) stating this tool is peer-style first aid, **not therapy, diagnosis, or a replacement for professional mental health care.** Copy follows Design System §8 voice & tone (validate first, never diagnose) and §7.5 plain-language rule, set in `Nunito 16/26`, `--ink` on `--paper`/`--white`.
3. **Helpline redundancy:** Rather than a single number, provide **multiple official Indonesian mental-health call centers**, so a user always has an alternative if one line is unreachable. Suggested set to confirm and include: **SEJIWA / Healing119 (119 ext. 8)**, **Halo Kemenkes (1500-567)**, and **LISA Suicide Prevention Helpline (WhatsApp +62 811-3855-472)** — plus any campus-specific counseling lines the team wants to add.
4. **No data misuse:** Personal stressor text typed into "Meme Your Problem" should not be logged, profiled, or used for any purpose beyond rendering the user's own meme in their own session.
5. **No performance/engagement metrics that reward distress:** Avoid designing success metrics (Section 11) that could incentivize keeping a student in a "panic" state longer for engagement's sake — the product's success is measured by fast relief and healthy hand-off, not time-on-site.
---
 
## 10. Non-Functional Requirements
 
| Category | Requirement |
|---|---|
| **Performance** | Triage → breathing start in ≤2 taps / <2s; Triage → first meme in under 2 seconds on typical mobile 4G. Since memes are manually curated, all WebP images must be pre-optimized (compressed, correctly sized) and served from Cloudflare R2 so the user experiences **no visible loading wait** — target under 500ms per image, with no reliance on live third-party API calls or embeds at request time. |
| **Accessibility** | WCAG 2.1 AA minimum per `.context/design_system.md` §7 (non-negotiable): contrast thresholds (4.5:1 text / 3:1 large + UI), visible focus `3px solid var(--blue)`, ≥44×44px targets, `prefers-reduced-motion` support, alt-text for meme images, breathing visualizer usable without color alone, color never the only signal. |
| **Privacy** | Anonymous by default; no account or personal data required to access core flow. |
| **Device support — Mobile-first web** | **Mobile-first, not mobile-compatible.** Design at 360–390px first, single column, content max-width `760px`, page gutter `--sp-5` (24px), section rhythm `--sp-8`. Bottom tab bar nav + persistent *Get Help* on mobile (Design System §9.3); inline nav on desktop as progressive enhancement. Touch-first: all CTAs `--radius-pill`, ≥44×44px, `Onest` bold 15–16px labels. Test on real phones / throttled 4G before desktop. Full desktop support via same tokens (no separate visual language). |
| **Design-System compliance** | All UI built from `.context/design_system.md` tokens only: `--blue`/`--yellow`/`--orange` triads + `--ink`/`--paper`/`--white`, `Onest` + `Nunito`, `--radius-pill`/`--radius-card`/`--radius-input`, `--sp-1`–`--sp-8`, `--ease`/`--dur`/`--dur-fast`. Orange reserved for action/CTAs only. Calm Mode = same tokens + stepped-up spacing. |
| **Content moderation** | Curated meme library must be reviewed to exclude content depicting self-harm, graphic material, or anything that could retraumatize a distressed user. |
 
---
 
## 11. Success Metrics
 
| Metric | What it tells us |
|---|---|
| Time from landing to first coping action (breathing start or meme view) | Speed of relief delivery (target: breathing ≤2 taps, meme <2s) |
| % of sessions Triage → Breathing → Meme (flow adherence) | Whether calm-first ordering works |
| % of sessions that reach Page 4 (Micro-Step + Helpline) | Whether humor successfully transitions users toward action + safety net |
| Helpline click-through rate | Whether the product is successfully normalizing the step toward professional help |
| Return usage rate (students coming back during a later stress spike) | Habit formation / perceived usefulness |
| "Meme Your Problem" completion rate | Engagement with the cognitive defusion feature specifically |
 
---
 
## 12. Technical Stack
 
| Layer | Choice |
|---|---|
| **Application framework** | Next.js, full-stack (frontend UI and backend/API logic in a single Next.js codebase) |
| **UI source of truth** | `.context/design_system.md` (santuy. v1.0) — all screens mobile-first, tokens → CSS custom properties in `:root`, components per §9 (buttons/cards/nav/Calm Mode) |
| **Meme image format** | WebP |
| **Meme image storage** | Cloudflare R2 (object storage) — curated meme images are uploaded to R2 and served directly from there, rather than embedded live from the original source |
 
This keeps the curated meme pipeline simple: an image is sourced once, saved as a WebP, uploaded to R2, and referenced directly by the Next.js frontend — supporting the no-wait loading requirement in Section 10.
 
---
 
*This PRD is a living document and should be revisited as user testing and technical feasibility findings come in.*