## Purpose

Landing is the mobile-first competition entry point that orients a distressed student in seconds and routes them to triage with one tap.

## ADDED Requirements

### Requirement: Landing entry and Start routing

The system SHALL render a mobile-first landing page at `/` with a hero, a single primary Start CTA navigating to `/triage`, and a persistent Get Help entry, all using Design System tokens.

#### Scenario: Student starts flow

- **WHEN** the student taps Start on `/`
- **THEN** the system navigates to `/triage` in ≤2s on mobile 4G with no login or form

#### Scenario: Help always reachable from landing

- **WHEN** the student taps Get Help on `/`
- **THEN** the system navigates to `/reset` helpline section from the landing page
