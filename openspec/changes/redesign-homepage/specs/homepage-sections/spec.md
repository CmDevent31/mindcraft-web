## Purpose

Defines the visual and structural contract for the three redesigned homepage content sections so copy, order, and CTAs stay intact while the presentation becomes distinct, responsive, and accessible.

## ADDED Requirements

### Requirement: Four-steps section presents four distinct steps

The system SHALL render the "Four small steps, one calmer you" section as four visually distinct step items in the fixed order Check in → Breathe → Laugh → Act, each showing its title and body copy, using design-system tokens only.

#### Scenario: Visitor reads all four steps in order

- **WHEN** a visitor scrolls to the four-steps section on desktop or mobile
- **THEN** all four steps are visible in order with title and body text legible and no overlap

#### Scenario: Step content is unchanged

- **WHEN** the section renders
- **THEN** the four titles and bodies match the existing STEPS copy verbatim and in order

### Requirement: Four-steps layout is responsive

The system SHALL lay out the four steps as a multi-column arrangement on desktop (md breakpoint and up) and a single-column stack on mobile, with consistent spacing from the section-rhythm and spacing tokens.

#### Scenario: Mobile stacks steps vertically

- **WHEN** the viewport is below the md breakpoint
- **THEN** the steps stack in a single column with uniform gaps

#### Scenario: Desktop spreads steps across columns

- **WHEN** the viewport is at md breakpoint or wider
- **THEN** the steps arrange in multiple columns or a grid with aligned headings

### Requirement: Stress-shows-up section presents emotion cards

The system SHALL render the "Stress shows up in familiar ways" section with one card per entry in `EMOTIONS` (three cards), each showing its `EMOTION_META` title and tagline, plus one Start check-in link to `/triage`.

#### Scenario: All three emotions are shown

- **WHEN** the section renders
- **THEN** three cards appear, each with the correct title and tagline from `EMOTION_META`, and the check-in CTA links to `/triage`

#### Scenario: Cards remain tappable targets on mobile

- **WHEN** viewed on a 360px-wide mobile viewport
- **THEN** cards stack without horizontal scrolling and text does not clip

### Requirement: Ready-when-you-are section presents a distinct CTA panel

The system SHALL render the "Ready when you are" closing section as a visually distinct panel (contrasting background, card radius) containing the headline, supporting copy, and one Start check-in link to `/triage` styled with the existing primary button system.

#### Scenario: Closing CTA navigates to check-in

- **WHEN** a visitor activates the closing section CTA
- **THEN** the app navigates to `/triage` and the button retains the primary button appearance and tactile states

#### Scenario: Closing panel is distinguishable from page background

- **WHEN** the closing section renders
- **THEN** the panel has a contrasting background and card radius separating it from the surrounding paper background

### Requirement: Homepage sections meet accessibility baseline

The system SHALL preserve section heading hierarchy (h2 per section, h3 per step/card), keep color contrast AA for text, maintain visible focus indicators on CTAs, and honor `prefers-reduced-motion` (no non-essential animation in these sections).

#### Scenario: Keyboard user tabs through section CTAs

- **WHEN** a keyboard user tabs through the Issues and Closing CTAs
- **THEN** each CTA shows a visible focus indicator and activates with Enter/Space

#### Scenario: Reduced-motion user sees static sections

- **WHEN** `prefers-reduced-motion: reduce` is set
- **THEN** the three sections render statically with no looping or entrance motion
