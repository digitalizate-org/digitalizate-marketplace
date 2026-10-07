---
id: "UX-437"
title: "Dark Mode vs. Light Mode: Default to Light for Readability"
category: "Reading Psychology"
subcategory: "Contrast and Readability"
score: 3
context: "Critical design decision for any application used for extended reading periods (documentation, publishing, note-taking, code editing). Dark mode demand has grown significantly since 2019 with OS-level support. Always a user preference, never a forced aesthetic choice."
goals:
  - "Improve Readability & Visual Clarity"
tags:
  - "accessibility"
  - "cognitive-load"
  - "reading-psychology"
  - "typography"
wireframe: "https://files.catbox.moe/d63rv0.jpg"
notion: "https://app.notion.com/p/Dark-Mode-vs-Light-Mode-Default-to-Light-for-Readability-825a9aed53448369bbc50187089b02f5"
---

## Why
Multiple empirical studies (Piepenbrock et al., 2013; Dobres et al., 2017) demonstrate that positive contrast polarity — dark text on a light background — produces superior visual performance for most users: faster reading speeds, fewer errors, and better acuity. The mechanism is that a lighter background contracts the pupil, reducing spherical aberrations and increasing depth of field. However, dark mode is preferred by users with certain vision impairments (cataracts, low vision) and may reduce long-term myopia risk with extended reading. The evidence-based recommendation from NNGroup is: default to light mode, offer dark mode as a user preference.

## How to implement
- Default all new interfaces to light mode (dark text on light background) as the primary experience
- Implement a dark mode toggle tied to the OS-level preference via CSS prefers-color-scheme media query, ensuring dark mode activates automatically for users who prefer it system-wide
- For dark mode, use off-white text (#E8E8E8) on dark-gray backgrounds (#1A1A1A to #2D2D2D) rather than pure white on pure black — extreme contrast can cause halos for some users
- Increase font weight slightly in dark mode: lighter fonts that look fine on white backgrounds can appear thin and hard to read on dark backgrounds
- Never use pure black (#000000) text on pure white (#FFFFFF) — use #1A1A1A on #FAFAFA to reduce glare while maintaining high contrast
- Ensure dark mode maintains WCAG 4.5:1 contrast for body text and 3:1 for large text and UI components
- Accommodate user accessibility preferences by offering three modes where feasible: light, dark, and high-contrast

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Satisfaction rating
**How to measure**: Conduct reading speed and comprehension tests under light versus dark mode for text-heavy interfaces; run preference studies and measure task accuracy to determine whether defaulting to light mode improves readability outcomes for the target content type.
  - Default all new interfaces to light mode (dark text on light background) as the primary experience
  - Implement a dark mode toggle tied to the OS-level preference via CSS prefers-color-scheme media query, ensuring dark mode activates automatically for users who prefer it system-wide
  - For dark mode, use off-white text (#E8E8E8) on dark-gray backgrounds (#1A1A1A to #2D2D2D) rather than pure white on pure black — extreme contrast can cause halos for some users
  - Increase font weight slightly in dark mode: lighter fonts that look fine on white backgrounds can appear thin and hard to read on dark backgrounds
  - Never use pure black (#000000) text on pure white (#FFFFFF) — use #1A1A1A on #FAFAFA to reduce glare while maintaining high contrast
  - Ensure dark mode maintains WCAG 4.5:1 contrast for body text and 3:1 for large text and UI components
  - Accommodate user accessibility preferences by offering three modes where feasible: light, dark, and high-contrast

## Sources
- [Nielsen Norman Group — Dark Mode vs. Light Mode: Which Is Better?](https://www.nngroup.com/articles/dark-mode/)
- [WebAIM — Fonts and Contrast Guidelines](https://webaim.org/techniques/fonts/)
