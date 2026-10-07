---
id: "UX-096"
title: "Design for the Perpetual Intermediate"
category: "Design Process & Methodology"
subcategory: "User Skill Calibration"
score: 5
context: "Use when deciding how much assistance to provide by default, when balancing feature discoverability against information density, and when calibrating onboarding depth."
goals:
  - "Present & Defend Design Decisions"
tags:
  - "onboarding"
wireframe: "https://files.catbox.moe/e5h3rk.jpg"
notion: "https://app.notion.com/p/Design-for-the-Perpetual-Intermediate-2e3a9aed5344838fa35901b823dec3a1"
---

## Why
Most users are perpetual intermediates — they've moved past the beginner phase but never reach true expert status, remaining at this level indefinitely. Design primarily for this majority: users who know what they want to do but need help with infrequent or unfamiliar paths. Designing exclusively for beginners creates infantilizing interfaces; designing exclusively for experts creates steep learning curves. Progressive disclosure serves perpetual intermediates by hiding advanced features without removing them, and by surfacing guidance only when needed rather than as a constant overlay.

## How to implement
- Identify the perpetual intermediate version of each primary persona.
- Design the default interface for this persona.
- Add beginner affordances (tooltips, guided flows) as non-intrusive optional layers.
- Surface expert features through progressive disclosure, keyboard shortcuts, and contextual access — never hidden, but not dominant.
- Test with users after two weeks of use to verify the intermediate experience, not just the first-time experience.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Long-term task success rate, Intermediate user retention
- **Efficiency**: Time on task at 2-week mark, Feature adoption rate
- **Satisfaction**: Long-term user satisfaction, Perceived product depth
**How to measure**: Test usability at first use AND at the 2-week mark to capture intermediate experience; measure feature adoption rates over time; track tooltip/guide dismissal rates as indicator of user skill progression.

## Sources
- [About Face 4th Ed., Ch. 3 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
