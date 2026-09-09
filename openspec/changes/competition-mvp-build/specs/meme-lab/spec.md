## Purpose

Meme Lab delivers fast coping-humor relief through curated per-emotion meme decks served from Cloudflare R2 with validation copy, and explicitly excludes any meme-creation canvas.

## ADDED Requirements

### Requirement: Curated per-emotion meme deck

The system SHALL serve 3–5 curated WebP memes per emotion at `/memes/[emotion]`, each with a one-line validation message, alt text, and Next/Continue controls, loading each image with no visible wait on mobile 4G.

#### Scenario: View emotion-matched memes

- **WHEN** the student opens `/memes/executive-dysfunction` (or another valid emotion)
- **THEN** the system shows only memes tagged for that emotion with validation text and a Next control

#### Scenario: Advance to close

- **WHEN** the student finishes or taps Continue on the meme deck
- **THEN** the system navigates to `/reset` with emotion preserved

## REMOVED Requirements

### Requirement: Meme Your Problem canvas

**Reason**: Full cut for 10-day competition scope — canvas editor, text input, download/share, and per-session privacy logic removed; curated deck is the only meme capability.
**Migration**: No migration; `/memes/[emotion]` links directly to `/reset` with no canvas entry point, and PRD §6.3.2 is deleted during apply.
