## Purpose

App shell provides the shared mobile-first foundation — tokens, layout, navigation, and persistent help — so all five routes look and behave as one product.

## ADDED Requirements

### Requirement: Design System shell and navigation

The system SHALL implement all routes with `.context/design_system.md` tokens only (no raw hex/px), single-column ≤760px layout with 24px gutter, bottom tab bar on mobile and inline nav on desktop, and WCAG 2.1 AA (focus ring, ≥44×44px targets, contrast).

#### Scenario: Navigate across flow on mobile

- **WHEN** the student uses the bottom tab bar on a 360–390px viewport
- **THEN** the system reaches every route (`/`, `/triage`, `/breathe`, `/memes/[emotion]`, `/reset`) with Help one tap away

### Requirement: Persistent Get Help

The system SHALL show a visually constant `--orange` Get Help entry on every route linking to `/reset` helplines.

#### Scenario: Jump to help from anywhere

- **WHEN** the student taps Get Help on any route
- **THEN** the system navigates to `/reset` helpline content
