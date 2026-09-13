## Purpose

Gives every route one coherent Primary/Secondary button system with identical structure and tactile interaction, so color alone distinguishes variant and intent.

## ADDED Requirements

### Requirement: Shared button structure and tactile interaction

The system SHALL render Primary and Secondary buttons with identical structure — full width, 46px height, pill radius, bold 14px label, centered content — and identical tactile behavior: subtle bottom shadow at rest, shifting downward with reduced shadow while pressed, over a short responsive transition.

#### Scenario: Pressed button feels physical

- **WHEN** the student presses either variant
- **THEN** the button moves slightly downward and its bottom shadow shrinks, returning on release

### Requirement: Primary color treatment

The system SHALL render the Primary variant with a filled `--blue` treatment — strong background, contrasting white bold label, `--blue-dark` border and shadow — using existing design-system tokens only.

#### Scenario: Primary reads as the main action

- **WHEN** Primary and Secondary appear together
- **THEN** the Primary button is visually dominant while sharing the Secondary button's shape and size

### Requirement: Secondary color treatment

The system SHALL render the Secondary variant with a light, low-emphasis treatment — subtle background, secondary accent label, soft border, faint raised shadow — using existing design-system tokens only.

#### Scenario: Secondary reads as the quiet alternative

- **WHEN** Primary and Secondary appear together
- **THEN** the Secondary button is clearly tappable but visually subordinate to Primary

### Requirement: Five consistent states per variant

The system SHALL implement default, hover, active/pressed, focus-visible, and disabled states for both variants, with a visible focus indicator, non-color state cues, and a disabled state that is perceivably inert and never color-alone.

#### Scenario: Keyboard user tabs to a button

- **WHEN** either variant receives keyboard focus
- **THEN** a clearly visible focus indicator appears

#### Scenario: Disabled button cannot act

- **WHEN** either variant is disabled
- **THEN** it does not respond to pointer or keyboard activation and looks perceivably inert
