# Usability Heuristics (3)

## UX-334 — Match Between System and the Real World
- Score 5 · Usability Heuristics / Language and mental model alignment
- Tags: cognitive-load
- Goals: Present & Defend Design Decisions; Reduce Learning Curve for Complex Tools
- Use when: Apply when writing UI labels, status messages, menu items, error text, and any user-facing copy — especially in enterprise tools where internal system terminology diverges from user vocabulary.

**Why.** Interfaces must speak users' language: words, phrases, and concepts familiar to them rather than internal jargon, database field names, or engineering abbreviations. Following real-world conventions creates natural mapping so the design is learnable without documentation. In enterprise software, product teams often default to system architecture terms that end-users never encounter in their actual work context. Validate all copy with the intended user role, not with product managers or engineers.

**Do.**
- Audit all navigation labels, table column headers, form field labels, and error messages with a representative end-user, not internal stakeholders.
- Replace technical codes, system-internal acronyms, and data model names with plain-language equivalents.
- Use natural mappings for controls (sliders moving right = increasing value).
- Establish a user-facing vocabulary glossary and enforce it across all copy.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Training time; Satisfaction & Perception: Ease-of-use score, SUS score; How to measure: Conduct heuristic evaluations and moderated usability tests to identify terminology mismatch violations, then retest after correction to measure changes in task success rate and time-on-task.

Sources: [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
Wireframe: https://files.catbox.moe/jqo1w3.jpg
File: library/usability-heuristics/UX-334-match-between-system-and-the-real-world.md

## UX-335 — User Control and Freedom — Undo Over Confirmation
- Score 5 · Usability Heuristics / Error recovery and reversibility
- Tags: error-handling
- Goals: Present & Defend Design Decisions; Build Trust & Reduce User Anxiety
- Use when: Apply for any destructive or hard-to-reverse action: deleting records, navigating away from unsaved work, bulk operations, archiving, sending communications.

**Why.** Users frequently trigger actions by mistake, especially in power-user workflows. Rather than interrupting actions with "Are you sure?" confirmation dialogs — which create friction for expert users who repeat actions often — prefer allowing the action to proceed and offering immediate undo. Undo respects the user's intent while providing recovery; confirmations treat users as incapable of knowing what they want. Reserve confirmation dialogs for truly irreversible, high-consequence operations where undo is architecturally impossible (permanent data purge, account deletion).

**Do.**
- Implement soft-delete with a toast ("Row deleted — Undo") persisting for 5–8 seconds before committing to the database.
- Support Ctrl+Z / Cmd+Z Undo and Ctrl+Y / Cmd+Shift+Z Redo for all meaningful editing actions.
- For bulk operations, include an undo option in the confirmation toast covering all affected records.
- Show a clearly labeled Cancel button or back navigation in all workflows, never hidden or de-emphasized.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Error counts; Engagement & Usage: Feature usage, Abandonment rate; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: A/B test undo-enabled flows versus confirmation-dialog flows; measure task completion time, abandonment rate, and post-task confidence scores to determine whether undo reduces friction while maintaining safety.

Sources: [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) · [Good UI — Undo Instead of Confirmation Dialogs](https://goodui.org/#8) · [Reddit — How I implemented an Undo/Redo system in a large complex visual application](https://www.reddit.com/r/SoftwareEngineering/comments/1lgbjr1/how_i_implemented_an_undoredo_system_in_a_large/)
Wireframe: https://files.catbox.moe/9iogn5.jpg
File: library/usability-heuristics/UX-335-user-control-and-freedom-undo-over-confirmation.md

## UX-336 — Map Between System and Real World — Natural Mapping for Controls
- Score 4 · Usability Heuristics / Natural mapping and interface metaphors
- Goals: Build Trust & Reduce User Anxiety; Present & Defend Design Decisions; Reduce Learning Curve for Complex Tools
- Use when: Apply specifically to control mapping — sliders, toggles, directional buttons — where the physical relationship between control and outcome must match user expectations.

**Why.** Natural mapping — a concept introduced by Donald Norman in The Design of Everyday Things (1988) and grounded in ecological psychology's direct perception theory — refers to the spatial or operational relationship between a control and the outcome it produces. A control is naturally mapped when the direction of operation corresponds intuitively to the direction of effect: moving a slider right increases the value it controls, moving a pan control up shifts the audio or camera upward, moving a volume knob clockwise increases loudness.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Training time; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Conduct usability tests with think-aloud protocol to identify natural-mapping violations, then measure error rate and time-on-task before and after applying natural controls; monitor support tickets for control-related confusion.

Sources: [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) · [Laws of UX — Jakob's Law](https://lawsofux.com/jakobs-law/)
Wireframe: https://files.catbox.moe/8r7tqm.jpg
File: library/usability-heuristics/UX-336-map-between-system-and-real-world-natural-mapping-for-contro.md
