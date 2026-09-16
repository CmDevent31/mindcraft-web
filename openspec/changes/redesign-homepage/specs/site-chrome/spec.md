## Purpose

Defines the visual and structural contract for the global site chrome redesign so the navbar becomes a floating circular pill and the footer reads as finished, while brand, help access, and navigation stay intact on every route.

## ADDED Requirements

### Requirement: Navbar renders as a floating circular pill

The system SHALL render the site header as a floating pill (fully rounded `radius-pill` shape, detached from viewport edges with top/side margins) that stays sticky at the top, contains the brand link and `HelpButton`, and uses design-system tokens only.

#### Scenario: Navbar appears detached on landing

- **WHEN** a visitor loads any route on desktop or mobile
- **THEN** the navbar appears as a rounded pill with visible page background on all sides, containing the "santuy." brand left and Get Help right

#### Scenario: Navbar stays visible on scroll

- **WHEN** the visitor scrolls down the page
- **THEN** the pill navbar remains pinned near the top without covering section headings (anchor offsets preserved)

### Requirement: Navbar preserves brand and help behavior

The system SHALL keep the brand link navigating to `/` (with `aria-current="page"` on landing), keep `HelpButton` as the persistent crisis action, keep the 44px touch-target floor, and keep the landing-vs-inner content widths (1080px on `/`, content-max elsewhere).

#### Scenario: Brand and help work from any route

- **WHEN** a visitor on `/triage` activates the brand link and then the Get Help control
- **THEN** the brand navigates to `/` and Get Help opens the existing help/reset destination as before

### Requirement: Footer presents refreshed closing block

The system SHALL render the footer with the existing `DISCLAIMER` text verbatim and the Home (`/`) and Check-in (`/triage`) nav links, in a visually finished treatment distinct from the page background, using design-system tokens only.

#### Scenario: Footer disclaimer and links are always visible

- **WHEN** a visitor reaches the bottom of any route without interaction
- **THEN** the disclaimer paragraph and both footer links are visible, and each link navigates to its route

### Requirement: Site chrome is responsive and accessible

The system SHALL keep the pill navbar and footer usable at 360px mobile width (no horizontal scroll, no overlap with the mobile TabBar), preserve AA text contrast, maintain visible focus indicators, and honor `prefers-reduced-motion`.

#### Scenario: Mobile navbar clears the tab bar

- **WHEN** viewed on a 360px-wide mobile viewport with the bottom TabBar visible
- **THEN** the pill navbar and footer do not overlap the TabBar and all controls remain tappable

#### Scenario: Keyboard user reaches brand, help, and footer links

- **WHEN** a keyboard user tabs through header and footer
- **THEN** brand, Get Help, Home, and Check-in each show a visible focus indicator and activate with Enter/Space
