## Purpose

The close page converts relief into action with one static per-emotion micro-step plus a redundant helpline safety net and disclaimer.

## ADDED Requirements

### Requirement: Static per-emotion micro-step

The system SHALL display exactly one static 30-second micro-step per emotion at `/reset` (3 total, deterministic, no random pool, no generator button).

#### Scenario: View matched micro-step

- **WHEN** the student opens `/reset` with emotion `academic-imposter`
- **THEN** the system shows the single micro-step assigned to `academic-imposter` with no variation across visits

### Requirement: Helpline redundancy and disclaimer

The system SHALL list multiple official Indonesian helplines (SEJIWA/119 ext 8, Halo Kemenkes 1500-567, LISA WA) plus disclaimer copy stating the tool is first-aid, not therapy or diagnosis.

#### Scenario: Reach crisis support

- **WHEN** the student taps any helpline entry on `/reset`
- **THEN** the system opens the correct `tel:`/`https://wa.me/` target for that helpline

#### Scenario: Disclaimer visible

- **WHEN** the student opens `/reset`
- **THEN** the system shows plain-language non-replacement disclaimer text without requiring interaction
