---
id: "UX-644"
title: "Design - Token Architecture"
category: "Design Systems & Tokens"
subcategory: "Tokens & theming"
score: 5
context: "Use when standardizing values across design tools and code."
goals:
  - "Design a Consistent System at Scale"
  - "Improve Readability & Visual Clarity"
tags:
  - "design-system"
notion: "https://app.notion.com/p/Design-Token-Architecture-530a9aed53448302ae8a812df29fa848"
---

## Core practice
Represent recurring values as named tokens instead of scattering raw hex values, pixel values, or font sizes through Figma files and codebases. A token system creates a shared vocabulary, supports theming and platform delivery, and makes a system-wide change safe to reason about.
The most important naming rule: name a value by **purpose**, not by its current appearance. 'color.text.default' can safely map to a different primitive in dark mode; 'blue-600' cannot communicate intent by itself.

## Recommended model
Use a three-level architecture:
1. **Primitive tokens** — raw scales with no product meaning.
  - '[color.blue](http://color.blue/).600 = #2563EB'
  - 'space.4 = 16px'
  - 'font.size.300 = 16px'
1. **Semantic tokens** — intent-level aliases used by products.
  - 'color.action.primary.default → [color.blue](http://color.blue/).600'
  - 'color.text.default → color.neutral.900'
  - 'space.control.inline → space.3'
1. **Component tokens** — component-scoped aliases used only when the component has a justified rule.
  - 'button.primary.background.default → color.action.primary.default'
  - 'button.primary.background.hover → color.action.primary.hover'
Use component tokens sparingly. If several components need the same meaning, promote it to a semantic token rather than duplicating it.

## Worked example: light and dark mode
Instead of hardcoding '#FFFFFF' in a card and '#111827' in its text, design and code reference:
- 'color.surface.default'
- 'color.text.default'
- 'color.border.subtle'
**Light mode**
- 'color.surface.default → neutral.0'
- 'color.text.default → neutral.900'
**Dark mode**
- 'color.surface.default → neutral.900'
- 'color.text.default → neutral.50'
The Card component does not change. Only the token mappings do, making the theme change reliable and testable.

## How to implement
1. Audit raw values and group them into meaningful scales.
1. Define semantic roles for surfaces, text, borders, actions, feedback, and focus.
1. Build token modes for themes, density, brands, or platform needs only where there is a genuine use case.
1. Export the same canonical token source to design variables and implementation formats.
1. Version changes, document breaking impact, and provide a deprecation/migration path.

## Quality checks
- No raw colour, spacing, type, or radius values appear in component implementation unless documented as an approved exception.
- Names describe intent, state, and role—not only colour or visual shape.
- Every interactive token family specifies default, hover, focus, pressed, disabled, and selected behaviour when applicable.
- Contrast and focus-indicator requirements are tested in every supported mode.
- A token change has an owner, review, version, and downstream impact record.
- A component does not introduce a private token when an existing semantic token expresses the same meaning.
