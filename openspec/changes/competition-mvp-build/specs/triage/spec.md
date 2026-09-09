## Purpose

Triage lets a student self-identify one of three emotional states in one tap and carries that context forward without accounts or questionnaires.

## ADDED Requirements

### Requirement: Emotion selection and context forwarding

The system SHALL present exactly three emotion cards (executive-dysfunction, social-hangxiety, academic-imposter) at `/triage` and route the selection to `/breathe` while preserving the emotion for `/memes/[emotion]` and `/reset`.

#### Scenario: Select emotional state

- **WHEN** the student taps an emotion card on `/triage`
- **THEN** the system navigates to `/breathe` with that emotion preserved for downstream pages

#### Scenario: Invalid emotion is rejected

- **WHEN** the system receives an unknown emotion value
- **THEN** the system falls back to `/triage` instead of rendering meme or micro-step content
