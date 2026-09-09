## Purpose

Breathing down-regulates the student before humor with a precise guided 4-7-8 exercise that is always skippable and safe for motion sensitivity.

## ADDED Requirements

### Requirement: Guided 4-7-8 breathing with skip

The system SHALL render a guided breathing visualizer at `/breathe` matching 4s inhale, 7s hold, 8s exhale, with a one-tap Skip and Continue that preserve emotion context to the meme page.

#### Scenario: Complete one breathing cycle

- **WHEN** the student stays on `/breathe` for one full 4-7-8 cycle
- **THEN** the system shows a Continue action to `/memes/[emotion]` with emotion preserved

#### Scenario: Skip breathing immediately

- **WHEN** the student taps Skip on `/breathe`
- **THEN** the system navigates to `/memes/[emotion]` immediately without requiring the cycle

### Requirement: Reduced-motion and non-color safety

The system SHALL honor `prefers-reduced-motion` on `/breathe` and SHALL NOT convey breathing phase by color alone.

#### Scenario: Reduced motion enabled

- **WHEN** the student has `prefers-reduced-motion: reduce` on `/breathe`
- **THEN** the system collapses ambient animation while keeping text phase cues and timing intact
