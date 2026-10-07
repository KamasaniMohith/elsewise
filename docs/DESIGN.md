# ELSEWISE Design System

This document establishes the visual and interaction design system for ELSEWISE. All future coding agents must adhere to these guidelines.

## 1. Design Philosophy
- Dark, quiet, minimal, editorial visual language
- Cognitive/knowledge-oriented, not gamified
- Generous whitespace and calm visual hierarchy

## 2. Typography
- Major headings: editorial serif (`font-display`)
- UI text: clean sans-serif (`font-sans`)
- Heading hierarchy: clear, consistent
- Labels/supporting text: uppercase, muted, small (see `SectionLabel`)

## 3. Color System
- Core: `--elsewise-bg`, `--elsewise-surface`, `--elsewise-surface-elevated`, `--elsewise-text`, `--elsewise-border`
- Accents:
  - Challenge: `--elsewise-challenge` (lime/green)
  - Discover: `--elsewise-discover` (peach/orange)
  - Reset: `--elsewise-reset` (aqua/teal)
- Light editorial/paper: `--elsewise-paper`, `--elsewise-paper-text`
- Use accents for primary actions and experience identity only

## 4. Surfaces and Cards
- Rounded (`rounded-2xl`), bordered (`border-border`)
- Elevated: `bg-surface-elevated`
- Spacing: generous padding/margin
- Avoid excessive shadows

## 5. Navigation
- Desktop: sidebar (`Sidebar`), vertical nav (`Navigation`)
- Mobile: header (`MobileHeader`), bottom nav (`MobileNavigation`)
- Active/inactive: color and subtle indicators

## 6. Buttons and Interaction
- Primary: experience-specific accent (`Button` variants)
- Secondary: bordered, transparent
- States: hover, focus, disabled (opacity, brightness)
- Accessible targets (min height, clear contrast)

## 7. Responsive Behavior
- Mobile-first layout
- Desktop: sidebar navigation
- Mobile: bottom navigation
- Content: max width, centered (`Container`)

## 8. Experience Identity
- Challenge: lime/green accent
- Discover: peach/orange accent
- Reset: aqua/teal accent

## 9. UX Principles
- Short, focused experiences
- Low cognitive friction
- No manipulative engagement
- Clear hierarchy
- Accessible and consistent components

## 10. Implementation Guidance
- Use existing design tokens from `globals.css`
- Prefer reusable components (`Button`, `Card`, etc.)
- Do not introduce arbitrary colors if a token exists
- Do not change visual direction without approval
- Do not add new UI libraries without approval
