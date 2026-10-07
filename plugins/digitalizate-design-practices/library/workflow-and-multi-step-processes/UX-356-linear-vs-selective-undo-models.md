---
id: "UX-356"
title: "Linear vs. Selective Undo Models"
category: "Workflow & Multi-Step Processes"
subcategory: "Undo/Redo Architecture"
score: 2
context: "Default to linear undo for most applications. Consider selective undo only in specialized collaborative or multi-workspace environments where strict linear ordering breaks user expectations."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Build Trust & Reduce User Anxiety"
tags:
  - "error-handling"
wireframe: "https://files.catbox.moe/h05trx.jpg"
notion: "https://app.notion.com/p/Linear-vs-Selective-Undo-Models-b1fa9aed5344834ba92d014b36094920"
---

## Why
Undo is one of the most powerful safety nets in any user interface, allowing users to explore, experiment, and correct mistakes without fear of permanent consequences. The linear undo model — universally familiar from decades of desktop software — operates on a strict last-in, first-out (LIFO) stack: each press of Ctrl+Z reverses the most recent action, regardless of what it was or which object was affected. This predictability is its greatest strength; users build reliable mental models of how undo behaves and trust it implicitly. Research by Nielsen Norman Group confirms that the ability to undo is among the most critical factors in user confidence and willingness to engage deeply with an application.
Selective undo, by contrast, allows users to reverse a specific past action without reversing all subsequent operations — a technically powerful but cognitively demanding capability. It is most valuable in complex collaborative editing environments (such as multi-user document editors or canvas-based design tools) where reverting the entire action stack would undo collaborators' work. However, selective undo introduces significant interaction complexity: users must visualize and navigate a branching history model, and unexpected side effects of out-of-order reversals can leave the application in states that feel arbitrary or inconsistent. Studies on undo models in collaborative systems indicate that selective undo is rarely used even when available, suggesting its cognitive overhead outweighs its perceived benefits for most user populations.
For the vast majority of enterprise and web applications, linear undo is the correct default: it aligns with established user expectations, requires no learning overhead, and provides meaningful error recovery for the most common mistake patterns. The design decision should focus less on which undo model to use and more on ensuring the undo stack is deep enough (50–100 operations), clearly communicates what action will be reversed (e.g., "Undo Delete Contact"), and persists appropriately through navigation events. Confirm-before-action dialogs should be used as a complement to undo for irreversible operations that fall outside the undo scope, such as permanently deleting records or sending communications.

## How to implement
- Implement linear undo (Ctrl+Z / Cmd+Z) for all actions by default; this is the expected standard behavior users have from decades of desktop software experience.
- Maintain a visible undo history trail where practical (e.g., "Undo 'Delete item'") so users understand what they're undoing.
- For collaborative environments where multiple users edit simultaneously, consider selective undo to prevent one user's undo from reverting another's work.
- Always pair undo with redo (Ctrl+Y / Cmd+Shift+Z) and ensure the undo stack persists through accidental page refreshes where technically feasible.
- For irreversible actions (permanent delete, send email), use confirmation dialogs instead of relying on undo.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Error counts
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Conduct task-based usability tests where participants must recover from errors, measuring recovery time and error rate under linear versus selective undo models. Track support tickets related to accidental data loss to measure real-world impact over time.

## Category Cross-Reference
| Category | Primary Sources |
| --- | --- |
| Accessibility | Nielsen Norman Group, W3C / WCAG, [eleken.co](http://eleken.co/) |
| Cognitive Psychology | [r-5.org](http://r-5.org/), Laws of UX, Nielsen Norman Group |
| Component Patterns | Component Gallery, Nielsen Norman Group, [fall14se.wordpress.com](http://fall14se.wordpress.com/) |
| Dashboard Design | Smashing Magazine, Nielsen Norman Group, [pencilandpaper.io](http://pencilandpaper.io/) |
| Data Display & Tables | [pencilandpaper.io](http://pencilandpaper.io/), Nielsen Norman Group, [uxpatterns.dev](http://uxpatterns.dev/) |
| Design Process & Methodology | Boxes and Arrows, [fall14se.wordpress.com](http://fall14se.wordpress.com/), UX Magazine |
| Design Systems & Tokens | Good UI, [designsystems.com](http://designsystems.com/), Nielsen Norman Group |
| Desktop-Specific Patterns | [fall14se.wordpress.com](http://fall14se.wordpress.com/), Nielsen Norman Group, [youtube.com](http://youtube.com/) |
| Enterprise & B2B Patterns | [aspirity.com](http://aspirity.com/), UX Magazine, Nielsen Norman Group |
| Feedback & Error Handling | Nielsen Norman Group, IBM Carbon Design System, [eleken.co](http://eleken.co/) |
| Forms & Input | Nielsen Norman Group, Good UI, Laws of UX |
| Interaction Patterns | Good UI, [fall14se.wordpress.com](http://fall14se.wordpress.com/), Nielsen Norman Group |
| Layout & Visual Hierarchy | Good UI, Laws of UX, Nielsen Norman Group |
| Loading & Performance Perception | [blog.logrocket.com](http://blog.logrocket.com/), Nielsen Norman Group, Component Gallery |
| Navigation & Information Architecture | Smashing Magazine, Nielsen Norman Group, [merveilleux.design](http://merveilleux.design/) |
| Onboarding & Empty States | Nielsen Norman Group, [eleken.co](http://eleken.co/), [formbricks.com](http://formbricks.com/) |
| Product Strategy | [productplan.com](http://productplan.com/), [basecamp.com](http://basecamp.com/), Laws of UX |
| Search Filter & Sort | Nielsen Norman Group, Good UI, [fall14se.wordpress.com](http://fall14se.wordpress.com/) |
| Usability Heuristics | Nielsen Norman Group, Good UI, [reddit.com](http://reddit.com/) |
| Workflow & Multi-Step Processes | [eleken.co](http://eleken.co/), Nielsen Norman Group, [andrewcoyle.com](http://andrewcoyle.com/) |

## Sources
- [Reddit — How I implemented an Undo/Redo system in a large complex visual application](https://www.reddit.com/r/SoftwareEngineering/comments/1lgbjr1/how_i_implemented_an_undoredo_system_in_a_large/)
