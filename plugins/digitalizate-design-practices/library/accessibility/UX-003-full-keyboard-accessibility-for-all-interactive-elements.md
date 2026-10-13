---
id: "UX-003"
title: "Full Keyboard Accessibility for All Interactive Elements"
category: "Accessibility"
subcategory: "Keyboard navigation"
score: 5
context: "Apply to all interactive elements. Keyboard navigation is critical for users with motor impairments and is also the preferred method for many enterprise power users."
goals:
  - "Reduce Learning Curve for Complex Tools"
  - "Design for Accessibility & Inclusion"
tags:
  - "keyboard"
  - "navigation"
  - "accessibility"
wireframe: "https://files.catbox.moe/vfvyl9.jpg"
notion: "https://app.notion.com/p/Full-Keyboard-Accessibility-for-All-Interactive-Elements-86ca9aed53448351a801818e9876e326"
---

## Why
Keyboard navigation is critical for users with motor impairments and is the preferred method for many power users. Any interactive element inaccessible by keyboard is completely unusable for this population. Focus indicators must be visible, obvious, and never suppressed — replacing the default browser outline with a custom design is acceptable, but removing it entirely is not. Follow W3C/WCAG keyboard conventions: Tab, Shift+Tab, Enter, Escape, Arrow keys.

## How to implement
- Ensure all interactive elements are reachable via Tab key navigation.
- Never suppress the default focus outline — replace with a custom thick colored border if aesthetics require.
- Include a "Skip Navigation" link at the top of pages with extensive navigation menus.
- Test keyboard navigation end-to-end with a dedicated QA pass.
- Ensure modal dialogs trap keyboard focus inside while open and restore focus to trigger on close.
- For custom components (dropdowns, date pickers, data tables), implement full ARIA keyboard patterns.
- Use `aria-current="page"` on active nav items.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Completion time
- **Adoption & Retention**: New visitors from organic search, Returning visitors
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Conduct keyboard-only usability tests with both keyboard-reliant users (power users, users with motor disabilities) and average users, measuring task success rate and time on task across all interactive elements. Run an automated accessibility scan (e.g., axe) to track the number of keyboard-accessibility violations as a before/after metric.

## Sources
- [Nielsen Norman Group — Keyboard-Only Navigation for Improved Accessibility](https://www.nngroup.com/articles/keyboard-accessibility/)
- [Good UI — Keyboard Shortcuts](https://goodui.org/#40)
- [W3C WCAG 2.1](https://www.w3.org/TR/WCAG21/)
