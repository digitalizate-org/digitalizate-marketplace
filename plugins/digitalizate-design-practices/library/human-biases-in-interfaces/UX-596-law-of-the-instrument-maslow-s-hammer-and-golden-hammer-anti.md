---
id: "UX-596"
title: "Law of the Instrument (Maslow's Hammer / Golden Hammer Anti-Pattern)"
category: "Human Biases in Interfaces"
score: 4
context: "Mitigate: Build multi-methodology competency in design teams. Use a 'method selection matrix' that maps research questions to appropriate methods. Hire for methodological diversity. In tool selection, explicitly evaluate alternatives before defaulting. Leverage: Acknowledge that mastery of a tool makes its application faster and more reliable—the goal is not to eliminate expertise but to ensure tool selection precedes problem-solving rather than determining it."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Drive Conversion & Decision-Making"
wireframe: "https://files.catbox.moe/ym3tug.jpg"
notion: "https://app.notion.com/p/Law-of-the-Instrument-Maslow-s-Hammer-Golden-Hammer-Anti-Pattern-b6aa9aed5344838280d4016753325271"
---

## Why
The Law of the Instrument is the cognitive bias of over-relying on a familiar tool, skill, or methodology — perceiving every problem through the lens of one's preferred solution. Abraham Kaplan articulated it in 1964: "Give a small boy a hammer, and he will find that everything he encounters needs pounding." Abraham Maslow's version (1966) — "If the only tool you have is a hammer, everything looks like a nail" — became the more famous formulation. In software engineering, the anti-pattern manifests as the "golden hammer" (Riel, 1996): applying one architectural pattern or technology to all problems regardless of fit. In UX and design, it surfaces whenever a practitioner's dominant methodology becomes the default regardless of whether it is the most appropriate tool for the problem at hand.
The bias emerges from rational-seeming economics: familiar tools are faster to deploy, easier to justify to stakeholders, lower cognitive burden to execute, and can be positioned as organizational expertise. Teams rationalize the golden hammer through specialization rhetoric — "we're really good at A/B testing" or "our team does contextual inquiry" — while implicitly treating all research questions as A/B-test-shaped or contextual-inquiry-shaped. The result is methodological tunnel vision that produces predictable but systematically suboptimal solutions: the analytics team that diagnoses every UX problem through metrics without asking why; the qualitative researcher who applies contextual inquiry to a 5-second decision that would be better served by a quick test; the React engineer who builds a content-heavy blog as a Single-Page Application because React is what they know.
For design organizations, the Law of the Instrument is a silent quality-killer because it rarely produces visible failures. The tool usually kind of works — A/B tests give you some signal, contextual inquiry gives you some insight, React works for most things. The damage is opportunity cost: the deeper truth that would have been available through the right tool remains invisible, and the team never knows what it missed. Building methodological awareness — explicit tool-selection criteria, cross-training, and a culture that rewards choosing the right method over the familiar one — is both a research quality and a team capability investment.

## How to implement
- Before selecting a research method or design pattern, explicitly document the problem type, the question being asked, and at least two alternative methodological approaches before choosing — this separates problem definition from tool selection
- Maintain a team-accessible "methods library" that maps research and design questions to multiple appropriate approaches, with guidance on when each is most appropriate; make it easy to find the right tool before defaulting to the familiar one
- Cross-train design team members deliberately: have researchers shadow prototypers in usability sessions, have visual designers participate in user interviews, have engineers attend synthesis workshops — exposure to other methods reduces the hammer effect
- In design critiques, make tool selection an explicit discussion point: "Why this pattern? What alternatives were evaluated?" treats methodology as a decision, not a default
- Conduct annual "toolbox reviews": inventory which methods the team consistently reaches for, map them against the range of problems actually encountered, and identify systematic mismatches where familiar tools are being stretched to cover problems they don't fit well
- In frontend technology decisions, evaluate tools against specific project requirements — content-heaviness, SEO needs, team scale, performance requirements — rather than defaulting to team familiarity, and document the evaluation criteria explicitly

## Metrics
Understanding and designing for this bias can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Support tickets reduction
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Conduct design audits to identify where over-reliance on a single tool or pattern (e.g., tables for all data, modals for all interactions) creates poor fit for the actual task; measure task success rates and time-on-task before and after replacing the over-applied pattern with context-appropriate alternatives. Track support tickets related to the over-used pattern to quantify improvement.

## Sources
- [https://en.wikipedia.org/wiki/Law_of_the_instrument](https://en.wikipedia.org/wiki/Law_of_the_instrument)
- [https://thedecisionlab.com/biases/law-of-the-instrument](https://thedecisionlab.com/biases/law-of-the-instrument)
- [https://uxdesign.cc/when-all-you-have-is-a-hammer-4eda385b46b4](https://uxdesign.cc/when-all-you-have-is-a-hammer-4eda385b46b4)
