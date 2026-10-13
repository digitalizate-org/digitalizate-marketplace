---
id: "UX-131"
title: "Composition Over Configuration in Design Systems"
category: "Design Systems & Tokens"
subcategory: "Component Architecture"
score: 4
context: "Use when building complex design system components that need to be highly flexible and customizable without forking."
goals:
  - "Design a Consistent System at Scale"
tags:
  - "design-system"
wireframe: "https://files.catbox.moe/jvhh3w.jpg"
notion: "https://app.notion.com/p/Composition-Over-Configuration-in-Design-Systems-58da9aed5344830d8ba4015812939a0a"
---

## Why
Composition over configuration is a software engineering principle — canonized in the SOLID design principles and the influential "Gang of Four" Design Patterns (1994) — that holds that complex behaviors should be assembled from smaller, focused, independently useful parts rather than controlled through an ever-expanding set of configuration options within a monolithic component. Applied to design systems, this principle explains a fundamental architectural tension: a component built with many configuration props (variant, size, density, iconLeft, iconRight, hasAvatar, hasBadge, hasDropdown…) accumulates combinatorial complexity that makes it fragile, difficult to document, and prone to unexpected interactions between options. The number of possible states can grow exponentially with each new prop, making thorough testing effectively impossible.
Composition-based component architecture instead decomposes complex UI elements into a set of smaller, slot-based primitive components that can be assembled flexibly by consumers. Rather than a single Card component with 40 configuration options, a composition approach provides CardHeader, CardBody, CardFooter, and CardActions as individual composable units that can each accept children. This mirrors how HTML itself is structured — the browser renders complex layouts through nested composition of semantic elements, not through a single mega-element with hundreds of attributes. React's component model, Radix UI's primitive pattern, and Headless UI all operationalize this principle explicitly; design system teams adopting it find that they can accommodate 90% of product-specific variations without forking or patching core components, because consumers assemble what they need rather than requesting new configuration options.
For enterprise design systems serving multiple product teams, composition over configuration is directly relevant to long-term maintainability. Teams that build monolithic configurable components typically face an escalating support burden as each product team requests new props for their specific use case. Composition architectures shift that customization responsibility to consuming teams while keeping core primitives stable, creating a cleaner boundary between the design system's responsibility (primitive behaviors and design token enforcement) and the product team's responsibility (contextual assembly). Research on design system adoption at scale consistently identifies component API complexity as one of the top barriers to adoption — composition-based APIs are measurably easier to onboard onto than configuration-heavy ones.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Training time
- **Effectiveness**: Error rate, Task success rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track the time design and engineering teams spend configuring versus composing components, and measure the number of inconsistency-related bugs per release as a quality indicator. Monitor end-user error rates on screens built with composable components versus legacy configured components to assess downstream user experience impact.

## Sources
- [ITNEXT — SOLID Principles for Design Systems](https://itnext.io/improving-design-systems-with-solid-principles-part-i-separation-of-concerns-c14088ed09c3)
