# Product Requirements Document
## Humor-Based Mental Health First-Aid Web
 
| | |
|---|---|
| **Status** | Draft v1.0 |
| **Owner** | Product Team |
| **Last Updated** | September 2026 |
| **Target Users** | Indonesian Gen Z university students |
 
---
 
## 1. Executive Summary
 
**Humor-Based Mental Health First-Aid Web** is an interactive, stigma-free digital tool that gives university students an instant emotional "first-aid kit" during moments of academic burnout, panic, and overthinking. Instead of static articles, the product uses evidence-informed **Coping Humor** and **Cognitive Defusion** techniques — delivered through a playful, meme-driven interface — to interrupt panic/freeze states in under a few minutes and gently guide students back toward focus and action.
 
The product is explicitly **not a replacement for therapy or crisis services**; it is a lightweight, always-available first responder that sits *before* formal counseling, lowering the barrier for students who avoid help-seeking due to stigma or the perceived rigidity of clinical processes.
 
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
| **Micro-Interventions** | Small, ~30-second actions that interrupt a freeze/shutdown state and gradually restore a sense of agency and focus. | The Micro-Step Generator and Box Breathing Visualizer on the landing page. |
 
*Note: These are supportive, evidence-informed coping techniques — not clinical treatment. Product copy and design should never imply diagnostic or therapeutic claims (see Section 9, Ethics & Safety).*
 
---
 
## 6. Scope: Pages & Features
 
### Page 1 — The Triage (Rapid Symptom Identification)
 
**Purpose:** Get the student to a relevant intervention in one tap, with zero forms or sign-up friction.
 
| Feature | Description |
|---|---|
| Interactive symptom cards | Three large, tappable cards, each representing a common student emotional state (Executive Dysfunction, Social Hangxiety, Academic Imposter), written in relatable, informal student language rather than clinical terms. |
| Instant routing | Selecting a card immediately routes the user to Page 2 (Meme Lab) pre-filtered for that emotional state — no intermediate loading screens or questionnaires. |
| No login required | The entire triage flow must be usable anonymously, with no account creation. |
 
**Acceptance Criteria**
- User can go from landing on Page 1 to seeing a relevant meme on Page 2 in ≤ 2 taps.
- Card copy is validated against target-user language (student slang, not clinical terms).
- Page 1 loads and is interactive in under 2 seconds on mobile.
---
 
### Page 2 — Meme Lab
 
**Purpose:** Deliver immediate coping-humor relief and cognitive defusion for the selected emotional state.
 
#### 6.2.1 Curated Meme Prescription — *Core / Primary Feature*
- System serves **3–5 curated memes** matched to the selected breakdown category.
- Each meme is paired with a short **validation message** (e.g., reassurance that the student is not alone in this experience).
- Memes are **manually curated by the team** — since the team is itself made up of students, curation relies on first-hand judgment of what actually resonates as funny/validating for Indonesian student audiences, rather than external licensing or formal testing.
- Meme images are **sourced manually as reference** (e.g. from Giphy, Imgflip, Instagram/Facebook posts, or other meme sources), saved as **WebP files**, and stored/served from **Cloudflare R2** object storage — not pulled live via API or embedded from the original platform. This keeps load times fast and avoids depending on a third-party service staying available.
**Acceptance Criteria**
- Meme sets are tagged by emotional category in the CMS/data layer so curation can scale without code changes.
- Each meme card displays: image, one-line validation message, and a "next" control to cycle through the set.
- All meme images are pre-optimized WebPs served from R2 so they render with no visible loading delay (see Section 10, Performance).
#### 6.2.2 "Meme Your Problem" — *Optional, Lower-Priority Feature*
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
 
### Page 3 — The Gentle Landing
 
**Purpose:** Down-regulate the nervous system after the humor intervention and hand the student a concrete next action, plus a safety net.
 
| Feature | Description |
|---|---|
| **Box Breathing Visualizer** | Guided 4-7-8 breathing pattern with a calming visual animation (e.g., expanding/contracting shape), designed to lower heart rate after the humor/laughter spike. |
| **Micro-Step Generator** | A button that generates a single, concrete 30-second action to break a stuck/freeze state (e.g., "Drink one sip of water," "Write one sentence of your title"). Should feel random/varied on repeat use to stay engaging. |
| **Helpline & Ethics Module** | A persistent, always-visible button linking to official crisis/mental-health helplines, plus a clear disclaimer that this site is a first-aid tool, not a substitute for therapy. |
 
**Acceptance Criteria**
- Breathing visualizer animation timing matches the 4-7-8 pattern (4s inhale, 7s hold, 8s exhale) precisely.
- Micro-Step Generator has a pool of ≥ 15 varied actions to avoid repetition fatigue.
- Helpline button is present on **every page of the site**, not just Page 3 (see Section 9).
---
 
## 7. User Stories
 
| User Story Title | User Story Description | Priority | Notes |
|---|---|---|---|
| Select emotional state | As a student, I can pick the card that matches how I'm feeling, so I get relevant help without explaining myself. | High | Page 1 |
| Anonymous access | As a student, I can use the site without creating an account, so I can get help right away. | High | Page 1 |
| View curated memes | As a student, I can see memes matched to what I'm going through, so I feel less alone. | High | Page 2 |
| Read validation message | As a student, I can read a short validation message with each meme, so I know my feelings are normal. | High | Page 2 |
| Meme your problem | As a student, I can turn my own problem into a meme, so it feels smaller and less overwhelming. | Low | Page 2 |
| Guided breathing | As a student, I can follow a guided breathing animation, so my heart rate settles after the humor moment. | High | Page 3 |
| Micro-step action | As a student, I can tap a button for one small 30-second action, so I can break out of feeling stuck. | High | Page 3 |
| Reach helpline | As a student, I can reach a helpline from any page, so I can get real crisis support if I need it. | High | Page 3 |
| Read disclaimer | As a student, I can read a clear disclaimer, so I understand this tool isn't a therapy replacement. | High | Page 3 |
| Jump to gentle landing | As a student, I can jump straight to breathing/helpline from anywhere on the site, so I can de-escalate immediately. | Medium | Cross-page |
 
---
 
## 8. Information Architecture / User Flow
 
```
Landing → Page 1 (Triage: pick emotional state)
              ↓
        Page 2 (Meme Lab: curated memes + validation)
              ↓ (optional)
        "Meme Your Problem" canvas
              ↓
        Page 3 (Gentle Landing: breathing + micro-step + helpline)
```
 
- The flow should also allow a student to jump directly to Page 3 (breathing/helpline) from anywhere on the site, for cases where they need de-escalation immediately rather than the full humor sequence.
- No forced linear flow — every page should be reachable via persistent navigation.
---
 
## 9. Ethics & Safety Requirements (Critical)
 
This product touches acute emotional states, so the following are **non-negotiable requirements**, not nice-to-haves:
 
1. **Persistent crisis access:** A visible "Get Help Now" / helpline button must appear on **every page**, not buried in a menu.
2. **Non-replacement disclaimer:** A clear, plain-language disclaimer must be shown (e.g., on first visit and in the footer) stating this tool is peer-style first aid, **not therapy, diagnosis, or a replacement for professional mental health care.**
3. **Helpline redundancy:** Rather than a single number, provide **multiple official Indonesian mental-health call centers**, so a user always has an alternative if one line is unreachable. Suggested set to confirm and include: **SEJIWA / Healing119 (119 ext. 8)**, **Halo Kemenkes (1500-567)**, and **LISA Suicide Prevention Helpline (WhatsApp +62 811-3855-472)** — plus any campus-specific counseling lines the team wants to add.
4. **No data misuse:** Personal stressor text typed into "Meme Your Problem" should not be logged, profiled, or used for any purpose beyond rendering the user's own meme in their own session.
5. **No performance/engagement metrics that reward distress:** Avoid designing success metrics (Section 11) that could incentivize keeping a student in a "panic" state longer for engagement's sake — the product's success is measured by fast relief and healthy hand-off, not time-on-site.
---
 
## 10. Non-Functional Requirements
 
| Category | Requirement |
|---|---|
| **Performance** | Triage → first meme should render in under 2 seconds on typical mobile 4G. Since memes are manually curated, all WebP images must be pre-optimized (compressed, correctly sized) and served from Cloudflare R2 so the user experiences **no visible loading wait** — target under 500ms per image, with no reliance on live third-party API calls or embeds at request time. |
| **Accessibility** | WCAG 2.1 AA baseline: readable contrast, captioned/alt-text for meme images, breathing visualizer usable without relying on color alone. |
| **Privacy** | Anonymous by default; no account or personal data required to access core flow. |
| **Device support** | Mobile-first responsive design (majority of student usage expected to be on phones), full desktop support. |
| **Content moderation** | Curated meme library must be reviewed to exclude content depicting self-harm, graphic material, or anything that could retraumatize a distressed user. |
 
---
 
## 11. Success Metrics
 
| Metric | What it tells us |
|---|---|
| Time from landing to first coping action (meme view or breathing start) | Speed of relief delivery |
| % of sessions that reach Page 3 (Gentle Landing) | Whether the humor phase successfully transitions users toward regulation |
| Helpline click-through rate | Whether the product is successfully normalizing the step toward professional help |
| Return usage rate (students coming back during a later stress spike) | Habit formation / perceived usefulness |
| "Meme Your Problem" completion rate | Engagement with the cognitive defusion feature specifically |
 
---
 
## 12. Technical Stack
 
| Layer | Choice |
|---|---|
| **Application framework** | Next.js, full-stack (frontend UI and backend/API logic in a single Next.js codebase) |
| **Meme image format** | WebP |
| **Meme image storage** | Cloudflare R2 (object storage) — curated meme images are uploaded to R2 and served directly from there, rather than embedded live from the original source |
 
This keeps the curated meme pipeline simple: an image is sourced once, saved as a WebP, uploaded to R2, and referenced directly by the Next.js frontend — supporting the no-wait loading requirement in Section 10.
 
---
 
*This PRD is a living document and should be revisited as user testing and technical feasibility findings come in.*