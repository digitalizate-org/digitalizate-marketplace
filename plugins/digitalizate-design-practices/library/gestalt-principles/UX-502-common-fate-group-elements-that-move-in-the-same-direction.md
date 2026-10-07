---
id: "UX-502"
title: "Common Fate: Group Elements That Move in the Same Direction"
category: "Gestalt Principles"
subcategory: "Common Fate"
score: 5
context: "Dropdown menus, filter-driven dashboards, carousels, drag-and-drop interfaces, animated list views"
goals:
  - "Design Effective Feedback & Error States"
  - "Simplify a Cluttered Interface"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "gestalt-principles"
  - "navigation"
  - "dashboard"
  - "data-heavy"
  - "animation"
  - "desktop"
wireframe: "https://files.catbox.moe/jjrfkh.jpg"
notion: "https://app.notion.com/p/Common-Fate-Group-Elements-That-Move-in-the-Same-Direction-3a8a9aed534483d49027017f616a642a"
---

## Why
The Law of Common Fate is the motion extension of Gestalt grouping: elements moving in the same direction and speed are perceived as belonging to the same group. The NNGroup Gestalt course identifies Common Fate as the most powerful grouping cue available in animated interfaces — it can override proximity, similarity, and even Common Region. In web applications, Common Fate governs dropdown expansion (all menu items expand in the same direction at the same speed), filter responses (all filtered charts update simultaneously), carousel navigation (all slides move together in the same direction), and drag-and-drop multi-select (all selected items travel as a unit with the dragged element). Because animation is a scarce resource in terms of user attention, Common Fate animations carry unusually high perceptual weight and should be reserved for genuine grouping communication.

## How to implement
- Animate all items in an expanding group (dropdown, accordion) with identical duration, easing, and direction
- In multi-panel dashboards, update all filter-bound charts simultaneously — sequential updates break Common Fate and suggest independent data
- For list entry animations, use staggered delays of 15–25ms to create a 'wave' that reads as one flowing group entering
- Ensure multi-select drag shows all selected items moving as a ghost stack beneath the dragged item
- Keep all UI animation durations under 300ms to avoid perceptible wait and vestibular risk
- Wrap all motion in @media (prefers-reduced-motion: no-preference) and substitute opacity fades in the reduced-motion path

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score
**How to measure**: Conduct usability tests with group-identification tasks to measure accuracy and time-to-correct-association for elements using common fate versus static grouping; collect ease-of-use ratings as a measure of perceived intuitiveness.

## Sources
- [NNGroup – Gestalt Principles Course by Tanner Kohler](https://www.nngroup.com/courses/gestalt-principles/)
- [UIUXDesigning — Gestalt Common Fate](https://uiuxdesigning.com/gestalt-common-fate/)
- [Gestalt Principles — Common Fate](https://www.gestaltprinciples.com/principles/common-fate)
