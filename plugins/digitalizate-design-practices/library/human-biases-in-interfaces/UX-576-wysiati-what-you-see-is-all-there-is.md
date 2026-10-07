---
id: "UX-576"
title: "WYSIATI — What You See Is All There Is"
category: "Human Biases in Interfaces"
score: 5
context: "Leverage: Design 'above the fold' content and default views with extreme intentionality—the visible content IS the product for most users most of the time. Use progressive revelation: start with curated, coherent information and layer in complexity. Mitigate: Provide context about what is NOT shown (pagination indicators, filter state displays, 'out of 847 results' counters) to combat false completeness. In data products, design default views that include critical counter-metrics (not just success metrics) to prevent one-sided story construction."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Drive Conversion & Decision-Making"
wireframe: "https://files.catbox.moe/ur51u0.jpg"
notion: "https://app.notion.com/p/WYSIATI-What-You-See-Is-All-There-Is-5b2a9aed534483f0aa86812ebda7e461"
---

## Why
WYSIATI — 'What You See Is All There Is' — is Daniel Kahneman's term for a fundamental operating rule of System 1 thinking described in his 2011 work 'Thinking, Fast and Slow.' The principle captures how the mind constructs the most coherent, confident narrative possible from whatever information is currently available, without accounting for the information it does not have. Critically, the quality of the narrative — its internal consistency and emotional coherence — matters far more to System 1 than its completeness. This creates a striking cognitive artifact: people with less information are often more confident in their judgments than those with more, because their simpler story faces no disconfirming complexity.
The consequence for interface design is far-reaching. Whatever is visible on a screen at any given moment constitutes cognitive reality for the majority of users in that moment. Search results on page one are perceived as the full set of relevant results — the existence of page two is a fact that must be actively communicated or it will be ignored. Dashboard metrics visible in the default view define reality for decision-makers — off-screen metrics that would complicate or contradict the visible story are functionally invisible to System 1 processing. Empty states that display no content are interpreted as 'nothing exists here,' not 'you haven't searched yet' — a devastating design failure in products whose value depends on user-generated content.
For designers, WYSIATI reframes information architecture as cognitive architecture. The deliberate curation of what appears in default views, above-the-fold placements, and initial search results is not merely an aesthetic or structural decision — it is a decision about what users will believe to be true. The responsible design practice involves two parallel obligations: first, curating visible content with extreme intentionality so the default story is accurate and valuable; second, providing honest context about what is not shown — pagination indicators, result counts, filter state labels, and absence explanations — so users can evaluate the completeness of what they are seeing.

## How to implement
- Design default dashboard and report views to include both positive and counter-metrics—never let users see only success indicators
- Always show 'X of Y results' in search and filter UIs so users know the scope of what they're not seeing
- In empty states, communicate explicitly what CAN be found here and how to surface it—don't allow an empty container to mean 'nothing exists'
- Design 'invisible information' callouts: 'You haven't set a goal yet—here's why that matters' rather than leaving absence unremarked
- Audit every default view: if a user spent 90 seconds on this view and nothing else, what story would they walk away with? Is that the right story?
- In user research, rotate which information participants see first to avoid WYSIATI contaminating study conclusions

## Metrics
Understanding and designing for this bias can positively influence the following UX metrics:
- **Effectiveness**: Error rate, Task success rate
- **Engagement & Usage**: Feature usage, Abandonment rate
- **Satisfaction & Perception**: Confidence rating, Ease-of-use score, CSAT
**How to measure**: Conduct usability tests measuring decision quality and error rates when users must act on incomplete information — assess whether progressive disclosure or additional context cues reduce errors. Track support tickets and user complaints tied to decisions made without sufficient information, and survey users on confidence levels before and after adding contextual data to key decision screens.

## Sources
- [https://moulay.webflow.io/post/ux-design-lessons-from-thinking-fast-and-slow](https://moulay.webflow.io/post/ux-design-lessons-from-thinking-fast-and-slow)
- [https://www.reddit.com/r/UXDesign/comments/vgj088/how_has_the_book_thinking_fast_and_slow/](https://www.reddit.com/r/UXDesign/comments/vgj088/how_has_the_book_thinking_fast_and_slow/)
