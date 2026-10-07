---
id: "UX-421"
title: "Chunking: Break Content into Scannable, Meaningful Units"
category: "Reading Psychology"
subcategory: "Cognitive Processing"
score: 5
context: "Universal best practice for all web content: forms, articles, dashboards, product pages, documentation, error messages, and onboarding. Most impactful when the target audience includes users in a hurry or users with varying literacy levels."
goals:
  - "Reduce Cognitive Load"
  - "Improve Readability & Visual Clarity"
tags:
  - "accessibility"
  - "cognitive-load"
  - "content-design"
  - "reading-psychology"
wireframe: "https://files.catbox.moe/zclui6.jpg"
notion: "https://app.notion.com/p/Chunking-Break-Content-into-Scannable-Meaningful-Units-a5ca9aed534483768dc6815fe115e41a"
---

## Why
Cognitive psychology research by George Miller and subsequent UX research by Nielsen Norman Group establishes that the brain processes information by grouping it into 'chunks' — meaningful units that reduce the working memory load required to parse content. On the web, chunking transforms intimidating walls of text into visually discrete, processable units. Short paragraphs (2–4 sentences), clear subheadings, and bulleted lists signal the boundaries between chunks. Unchunked content is not just harder to read — it signals cognitive effort, causing users to abandon the page before starting.

## How to implement
- Keep body paragraphs to 2–4 sentences maximum; one idea per paragraph
- Use bulleted or numbered lists for any content with 3 or more parallel items (benefits, steps, features)
- Group related form fields visually and label each group with a section heading
- Separate content sections with visible whitespace (24–48px between sections minimum) rather than just a thin rule
- In data tables, use alternating row colors or grouped row sections to chunk related rows
- Apply chunking to phone numbers, credit card numbers, dates, and codes: format as (555) 123-4567 not 5551234567
- Test readability: if a paragraph could be split and both halves make sense independently, split it

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Completion time
- **Effectiveness**: Completion rate, Task success rate
- **Engagement & Usage**: Scroll depth, Abandonment rate
**How to measure**: Compare reading comprehension accuracy and time-to-find-information between chunked and unchunked content variants in a usability test. Track scroll depth and session duration in analytics to verify that chunked layouts sustain engagement without increasing abandonment.

## Sources
- [Nielsen Norman Group — How Chunking Helps Content Processing](https://www.nngroup.com/articles/chunking/)
- [LogRocket — Miller's Law in UX Design](https://blog.logrocket.com/ux-design/millers-law-ux-design/)
- [UX Myths — Myth 23: Choices Should Be Limited to 7+/-2](https://uxmyths.com/post/931925744/myth-23-choices-should-always-be-limited-to-seven)
