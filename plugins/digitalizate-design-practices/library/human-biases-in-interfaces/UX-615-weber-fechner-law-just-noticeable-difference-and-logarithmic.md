---
id: "UX-615"
title: "Weber-Fechner Law (Just Noticeable Difference / Logarithmic Perception Law)"
category: "Human Biases in Interfaces"
score: 4
context: "Essential for performance engineering, animation design, audio/volume controls, progress indicators, pricing, and any quantitative interface element where perceived change matters. The 20% threshold is the primary design rule derived from this law."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Drive Conversion & Decision-Making"
wireframe: "https://files.catbox.moe/8eaapc.jpg"
notion: "https://app.notion.com/p/Weber-Fechner-Law-Just-Noticeable-Difference-Logarithmic-Perception-Law-77aa9aed534483dc8118014108d3ed05"
---

## Why
The Weber-Fechner Law is one of the foundational principles of psychophysics, combining Ernst Heinrich Weber's 1834 discovery that the minimum detectable change in any stimulus is proportional to the current stimulus magnitude (ΔI/I = k), and Gustav Fechner's 1860 extension that perceived magnitude scales logarithmically with physical magnitude (S = k log I). In plain terms: to be noticed, a change must represent a constant *proportion* of the existing level — not an absolute amount. Doubling a whisper to two whispers is clearly perceptible; doubling a shout to two shouts is not. From this, the practical "20% rule" emerges: a performance improvement must reduce duration by at least ~20% of the current load time to register as meaningfully faster to users.
For interface designers, the law reframes how resources should be allocated across performance, animation, typography, progress feedback, and pricing. A page loading in 10 seconds improved to 8 seconds (20% reduction) will be perceived as faster. The same engineering effort applied to a 2-second page reduced to 1.6 seconds (also 20%) will be perceived — but the same 400ms saved off a 1-second page (40% reduction) is far more salient. Understanding where your product currently sits on the logarithmic curve determines where optimization effort produces perceptible user return.
The law applies across virtually every quantitative dimension of interface design. Volume sliders that use linear scaling produce uneven apparent volume steps because human auditory perception is logarithmic. Font size hierarchies that use identical point increments fail to create visual distinction at larger sizes. Price reductions that are expressed as absolute dollar amounts rather than percentages can be invisible at high price points. Progress bars that advance linearly feel slower late in the process because late increments cross smaller proportional thresholds. Every interface element governed by magnitude or quantity is subject to Weber-Fechner dynamics.

## How to implement
- Apply the 20% rule as the minimum investment threshold for performance improvements: only pursue speed optimizations that reduce load time by ≥20% of the current duration — improvements below this will be invisible to users regardless of engineering cost
- Use logarithmic scales for all continuous controls where human perception is non-linear: audio volume sliders, image brightness adjusters, map zoom levels, and font size selectors — linear scales in these contexts create the illusion of uneven response
- Express price reductions as percentages and validate them against the JND threshold for the relevant price tier: "$10 off a $20 item" (50%) is highly salient; "$10 off a $500 item" (2%) is functionally invisible to perceived value
- Design progress indicators with non-linear feedback curves: front-load visible progress in early stages (where proportional gains are largest relative to current position) to create motivating momentum, and avoid displays that make late-stage increments feel stagnant
- For animation timing refinements, establish a practical threshold: changes below ~50–100ms total duration shift are below the perceptible threshold for most users — optimize elsewhere rather than pursuing sub-threshold animation polish
- In competitive performance benchmarking, focus investment on thresholds that are *perceptibly* different to users, not merely statistically different in controlled lab measurements
- Establish font size ratios between heading levels of at least 1.25x (Major Third scale) to ensure typographic hierarchy is visually distinct — increments below this ratio are often imperceptible in context

## Metrics
Understanding and designing for this bias can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Conduct usability tests on slider controls, font size adjustments, or audio/visual calibration interfaces, measuring whether users perceive proportional versus logarithmic change scales as more intuitive and make fewer errors. Track error rates in data-entry interfaces where numerical input ranges do not align with users' perceptual expectations of proportional differences.

## Sources
- [https://acoustics.mit.edu/faculty/makris/rspa.2022.0626.pdf](https://acoustics.mit.edu/faculty/makris/rspa.2022.0626.pdf)
- [https://www.sitepoint.com/the-perception-of-performance/](https://www.sitepoint.com/the-perception-of-performance/)
