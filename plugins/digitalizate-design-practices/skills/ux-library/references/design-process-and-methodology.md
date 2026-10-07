# Design Process & Methodology (36)

## UX-092 — Conduct Deep User Research with End-Users, Not Just Executives
- Score 5 · Design Process & Methodology / Enterprise user research methodology
- Tags: search, enterprise
- Goals: Present & Defend Design Decisions; Reduce Learning Curve for Complex Tools
- Use when: Apply to any enterprise product research activity — usability testing, requirements gathering, feedback collection. Executives are buyers; employees are users.

**Why.** In enterprise software, executives are the buyers but employees are the users. Executives have a bird's-eye view of processes — they don't know how operations look from inside the tools. Collecting feedback only from decision-makers produces designs that satisfy purchase criteria but fail day-to-day usability needs. The people who experience the UI's friction daily are the users — their input is irreplaceable and cannot be approximated by executive summaries.

**Do.**
- Define user roles and core users before designing (analyst, manager, coordinator, administrator).
- Interview employees directly about their tasks, pain points, and workarounds.
- Conduct observations in the actual work environment to capture real workflows.
- Run usability tests with actual end-users performing real tasks, not executives reviewing mockups.
- Iterate designs based on end-user feedback before executive review.
- Use role-based personas grounded in field research, not assumed user archetypes.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Error counts; Satisfaction & Perception: CSAT, NPS, Ease-of-use score; How to measure: Compare usability test success rates on products designed with end-user research vs. executive-only input. Track support ticket volume as a proxy for unmet real-user needs after design changes.

Sources: [UX Magazine — Enterprise UX: The Value of Usability](https://uxmag.com/articles/enterprise-ux-the-value-of-usability-for-enterprise-software)
Wireframe: https://files.catbox.moe/fbzn4x.jpg
Notion: https://app.notion.com/p/Conduct-Deep-User-Research-with-End-Users-Not-Just-Executives-602a9aed534483c7a0dc01dd36820b89

## UX-093 — The Three Lenses of Human-Centered Design
- Score 5 · Design Process & Methodology / Design Evaluation Framework
- Goals: Present & Defend Design Decisions
- Use when: Use at every major product or feature decision gate, especially when evaluating competing solution directions or validating whether to build something.

**Why.** IDEO's HCD framework evaluates every solution through three overlapping lenses: Desirability (what do humans want?), Feasibility (what is technically and organizationally possible?), and Viability (what can sustain as a business?). Breakthrough solutions sit at the intersection of all three. Most product failures occur when teams optimize for one lens at the expense of others — building technically feasible solutions nobody wants, or desirable features the business cannot sustain. For enterprise software, viability often includes organizational adoption feasibility, not just commercial return.

**Do.**
- Frame every design review with three explicit questions stated aloud: "Do users genuinely want this? Can we actually build it? Does it make business sense?" Create a visible Venn diagram artifact at project kickoffs.
- Flag any solution that satisfies only one or two lenses as a risk requiring resolution before commitment.

**Measure.** Effectiveness: Task success rate, Completion rate; Satisfaction & Perception: NPS, CSAT; Adoption & Retention: Account creation rate, Returning visitors; Revenue: Conversion rate, Customer Lifetime Value (CLV); How to measure: Assess whether features designed through all three lenses (desirability, feasibility, viability) show better retention and conversion rates than features optimized for only one dimension. Use NPS and CSAT surveys at 30/60/90 days post-launch to capture sustained satisfaction.

Sources: [IDEO Design Thinking](https://www.ideo.com/)
Wireframe: https://files.catbox.moe/6jb7vk.jpg
Notion: https://app.notion.com/p/The-Three-Lenses-of-Human-Centered-Design-b32a9aed534482a898e301bfc714a534

## UX-094 — Goal-Directed Design — Design for Goals, Not Tasks
- Score 5 · Design Process & Methodology / Design Philosophy
- Goals: Present & Defend Design Decisions
- Use when: Use at the foundation of every product design initiative, and when evaluating whether a feature serves users or merely exposes internal system implementation.

**Why.** Design products to help users achieve their personal and professional goals (end conditions and motivations) rather than merely to complete tasks (activities and procedures). Goals are stable over time; tasks evolve as technology changes. A goal is "process invoices without errors"; a task is "click the Approve button." Designing for goals produces interfaces that remain relevant as workflows evolve, while designing for tasks produces UIs that become outdated as processes change. For complex enterprise software, this distinction prevents the perpetual feature-chasing that comes from optimizing for task completion rather than user success.

**Do.**
- For each primary persona, define their Experience Goals (feel competent, in control), End Goals (accomplish the work outcome), and Life Goals (professional identity and aspiration).
- Evaluate every design decision against whether it serves these goals or merely exposes system internals.
- When writing requirements, use goal-language ("user can confidently finalize the monthly close") rather than task-language ("user can click Submit on the close screen").

**Measure.** Effectiveness: Task success rate, Completion rate; Satisfaction & Perception: CSAT, NPS, Ease-of-use score; Adoption & Retention: Returning visitors, Renewed subscriptions; How to measure: Use post-task surveys to assess whether users feel the product helped them achieve their broader goals, not just individual tasks. Compare NPS scores for products designed around explicit user goals vs. those designed around feature checklists, using retrospective design audits.

Sources: [About Face 4th Ed., Ch. 1 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
Wireframe: https://files.catbox.moe/yc97xo.jpg
Notion: https://app.notion.com/p/Goal-Directed-Design-Design-for-Goals-Not-Tasks-73fa9aed53448229947c01e448502926

## UX-095 — Personas — Archetypal User Models Built from Research
- Score 5 · Design Process & Methodology / User Research Synthesis
- Tags: search, cognitive-load
- Goals: Present & Defend Design Decisions; Reduce Learning Curve for Complex Tools
- Use when: Use before any design work begins, when teams disagree about user priorities, and as the primary design decision filter throughout a project lifecycle.

**Why.** Create 1–3 primary personas representing archetypal users based on qualitative research, with explicit goals, behaviors, aptitudes, environments, and pain points. Personas prevent designing for yourself, resist feature accumulation by keeping design focused on real needs, and provide a shared language for cross-functional decision-making. For enterprise software, effective personas must capture the specific role context, domain vocabulary, and workflow environment of users — not just demographic information. A weak persona is a name with a stock photo; a strong persona is a decision tool that can answer "would Sarah use this?"

**Do.**
- Build personas from qualitative research (contextual interviews, observation).
- Each primary persona needs: name, role, key goals (all three types), specific workflow context, domain expertise level, key pain points, and a representative verbatim quote.
- Validate all persona claims against actual research data.
- Post personas visibly in team workspace and reference them explicitly in design reviews and feature debates.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Training time, Time saved per task; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track how often design decisions reference persona data throughout the project; measure alignment between designed features and stated user needs by conducting post-launch usability tests with users matching persona archetypes and comparing success rates.; Build personas from qualitative research (contextual interviews…

Sources: [About Face 4th Ed., Ch. 3–4 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf) · [IDEO Design Thinking](https://www.ideo.com/)
Wireframe: https://files.catbox.moe/qbkq53.jpg
Notion: https://app.notion.com/p/Personas-Archetypal-User-Models-Built-from-Research-c6ba9aed534482848cf7014ab15c7fdb

## UX-096 — Design for the Perpetual Intermediate
- Score 5 · Design Process & Methodology / User Skill Calibration
- Tags: onboarding
- Goals: Present & Defend Design Decisions
- Use when: Use when deciding how much assistance to provide by default, when balancing feature discoverability against information density, and when calibrating onboarding depth.

**Why.** Most users are perpetual intermediates — they've moved past the beginner phase but never reach true expert status, remaining at this level indefinitely. Design primarily for this majority: users who know what they want to do but need help with infrequent or unfamiliar paths. Designing exclusively for beginners creates infantilizing interfaces; designing exclusively for experts creates steep learning curves. Progressive disclosure serves perpetual intermediates by hiding advanced features without removing them, and by surfacing guidance only when needed rather than as a constant overlay.

**Do.**
- Identify the perpetual intermediate version of each primary persona.
- Design the default interface for this persona.
- Add beginner affordances (tooltips, guided flows) as non-intrusive optional layers.
- Surface expert features through progressive disclosure, keyboard shortcuts, and contextual access — never hidden, but not dominant.
- Test with users after two weeks of use to verify the intermediate experience, not just the first-time experience.

**Measure.** Effectiveness: Long-term task success rate, Intermediate user retention; Efficiency: Time on task at 2-week mark, Feature adoption rate; Satisfaction: Long-term user satisfaction, Perceived product depth; How to measure: Test usability at first use AND at the 2-week mark to capture intermediate experience; measure feature adoption rates over time; track tooltip/guide dismissal rates as indicator of user skill progression.

Sources: [About Face 4th Ed., Ch. 3 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
Wireframe: https://files.catbox.moe/e5h3rk.jpg
Notion: https://app.notion.com/p/Design-for-the-Perpetual-Intermediate-2e3a9aed5344838fa35901b823dec3a1

## UX-097 — Double Diamond Design Process
- Score 5 · Design Process & Methodology / Design Frameworks
- Goals: Present & Defend Design Decisions
- Use when: Use for new feature development, product redesigns, and any time the team is tempted to jump directly to solutions without validating the problem.

**Why.** The Double Diamond structures design work into two phases, each containing a divergent phase followed by a convergent phase. Diamond 1 (Problem Space): Discover (explore widely to understand the problem) → Define (converge on the specific problem to solve). Diamond 2 (Solution Space): Develop (generate many possible solutions) → Deliver (implement the best solution). This structure prevents the most common design failure mode: jumping to solutions before the problem is fully understood, resulting in well-executed solutions to the wrong problem.

**Do.**
- Allocate explicit time for each phase and resist the temptation to compress Discover/Define.
- Use user research (interviews, contextual observation) in the Discover phase.
- Define a clear, written problem statement agreed by all stakeholders before entering the Develop phase.
- Use prototyping and testing in the Develop phase before committing to Deliver.
- If research in Discover contradicts the assumed problem, restart the Define phase — this is correct behavior, not wasted time.

**Measure.** Effectiveness: Task success rate, Completion rate; Satisfaction & Perception: NPS, CSAT; Adoption & Retention: Account creation rate, Returning visitors; How to measure: Compare product outcomes (task success rate, NPS) for initiatives that went through a full double-diamond process versus expedited projects. Use retrospective surveys to assess whether thorough discovery phases reduce post-launch redesign cycles and improve satisfaction scores.

Sources: [Amoeboids — Double Diamond Design Process](https://amoeboids.com/blog/double-diamond-design-process/)
Wireframe: https://files.catbox.moe/bw9t5j.jpg
Notion: https://app.notion.com/p/Double-Diamond-Design-Process-590a9aed534482c0a0d601dd9dee63d2

## UX-098 — Nielsen's 10 Usability Heuristics — Evaluation Framework
- Score 5 · Design Process & Methodology / Expert Evaluation Methods
- Tags: enterprise
- Goals: Present & Defend Design Decisions; Reduce Learning Curve for Complex Tools
- Use when: Use before user testing to clear obvious issues, before major launches, after significant redesigns, and for competitive analysis.

**Why.** Jakob Nielsen's 10 usability heuristics are the most widely used framework for expert usability review. A heuristic evaluation by 3–5 experts spending 1–2 hours each can identify 75–90% of major usability issues at a fraction of the cost of formal user testing, making it ideal for early-stage or resource-constrained projects. The 10 heuristics: (1) Visibility of system status, (2) Match between system and real world, (3) User control and freedom, (4) Consistency and standards, (5) Error prevention, (6) Recognition rather than recall, (7) Flexibility and efficiency of use, (8) Aesthetic and minimalist design, (9) Help users recognize, diagnose, and recover from errors, (10) Help and documentation.

**Do.**
- Assign 3–5 evaluators.
- Each independently evaluates the interface against all 10 heuristics and rates severity 0–4 (0=not a problem, 4=usability catastrophe).
- Consolidate findings and deduplicate.
- Prioritize Severity 3+ issues for immediate action.
- For enterprise applications, weight Heuristics 5 (Error Prevention) and 9 (Error Recovery) more heavily given the high cost of errors in consequential workflows.
- Use as a pre-screening before formal user testing, not as a replacement for it.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: SUS score, Ease-of-use score; How to measure: Use heuristic evaluation findings to prioritize fixes, then validate improvements through usability testing measuring task success rate and SUS score before and after remediation; track support ticket volume as a longitudinal indicator.

Sources: [CleverX — Nielsen's 10 Heuristics](https://cleverx.com/blog/heuristic-evaluation-10-nielsen-principles-explained)
Wireframe: https://files.catbox.moe/v8fc7q.jpg
Notion: https://app.notion.com/p/Nielsen-s-10-Usability-Heuristics-Evaluation-Framework-0ffa9aed534482948a6a8143ded5df57

## UX-099 — Usability Testing Methodology
- Score 5 · Design Process & Methodology / User Testing
- Tags: search
- Goals: Present & Defend Design Decisions; Reduce Learning Curve for Complex Tools
- Use when: Use before launching major new features, when significant redesign decisions are being made, and when the team disagrees about a design decision.

**Why.** Moderated usability testing — watching real users complete realistic tasks with a prototype or live product — identifies problems that heuristic evaluation misses, including domain-specific workflow issues, mental model mismatches, and context-of-use problems. As few as 5 participants in a homogeneous user group reveals approximately 85% of critical usability issues, making this a high-ROI research method. The think-aloud protocol — asking users to narrate their thoughts and actions — provides rich qualitative data that reveals the why behind observed behavior.

**Do.**
- Define 3–5 tasks representing the most critical user journeys.
- Recruit 5–8 participants matching your actual user profile (role, domain expertise, typical workflow context).
- Use think-aloud protocol: "Please narrate what you're thinking as you work." Take detailed notes on hesitations, errors, backtracking, and confusion points.
- Analyze for themes across participants, not isolated incidents.
- Follow heuristic evaluation with usability testing — they are complementary, not substitutes.

**Measure.** Effectiveness: Task success rate, Completion rate, Error rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: Ease-of-use score, SUS score, CSAT; How to measure: Establish a pre-launch usability test benchmark (task success rate, time on task, SUS score) and track improvements across iterative test rounds. Compare pre- and post-redesign support ticket volume to confirm that usability testing directly reduces user errors and help requests in production.

Sources: [CleverX — Nielsen's Heuristics and Usability Testing](https://cleverx.com/blog/heuristic-evaluation-10-nielsen-principles-explained)
Wireframe: https://files.catbox.moe/0r8kkg.jpg
Notion: https://app.notion.com/p/Usability-Testing-Methodology-724a9aed534483be9f3e011bceb4df34

## UX-100 — Contextual Inquiry — User Research in Real Environments
- Score 5 · Design Process & Methodology / User Research Methods
- Tags: search, forms
- Goals: Present & Defend Design Decisions; Reduce Learning Curve for Complex Tools
- Use when: Use at the start of any new feature or product initiative and when designing for specialized roles where work context strongly influences tool design.

**Why.** Conduct user research in context — at the user's workstation, in their actual workflow environment — rather than in sterile conference rooms. Contextual inquiry blends traditional interview questions with real-time task observation, allowing researchers to follow up immediately on behaviors they witness. This is the highest-yield research method for enterprise software because it captures both explicit needs and the tacit knowledge workers have built up over time — workarounds, reference materials, parallel tools, and interruption patterns invisible in interview-only research.

**Do.**
- Recruit 6–10 users per key persona.
- Use a semi-structured guide with open-ended questions.
- Ask users to narrate their actions while performing real tasks (not demo tasks — real in-progress work).
- Record with consent.
- Look for reference materials on their desk, other applications open simultaneously, and workarounds to your product.
- Debrief within 24 hours while observations are fresh.
- Include "Fly on the Wall" observation periods where you observe without asking questions.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Training time; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Run moderated usability tests before and after design iterations informed by contextual inquiry to measure task success and time-on-task improvements. Track support ticket volume as a downstream indicator of real-environment usability gaps.

Sources: [IDEO HCD Toolkit](https://ideal.umd.edu/assets/pdfs/2015_fuge_jmd_hcd_methods.pdf)
Wireframe: https://files.catbox.moe/e207p2.jpg
Notion: https://app.notion.com/p/Contextual-Inquiry-User-Research-in-Real-Environments-1a1a9aed534482f0b31b81d3a7ba8ac2

## UX-101 — Customer Journey Mapping for End-to-End Workflow Design
- Score 5 · Design Process & Methodology / Research Synthesis
- Tags: search, mobile, workflow, ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Use when designing multi-step workflows, when users report frustration but can't pinpoint where, and when planning a product-wide redesign.

**Why.** Map the complete sequence of user interactions, emotional states, and touchpoints across an end-to-end workflow. Journey maps reveal pain points and missed opportunities invisible when examining individual screens in isolation. For enterprise/B2B tools, journey maps must include pre-application work (gathering data, consulting colleagues), in-application workflows, and post-application actions (reporting, handoffs), because value frequently breaks down at these boundary conditions rather than within the application itself.

**Do.**
- Map workflow stages across the horizontal axis, user actions/thoughts/feelings along the vertical.
- Capture: what the user does, what they think, what they feel, and what system touchpoints they interact with at each stage.
- Highlight "moments of truth" — steps where failure causes maximum user harm or frustration.
- Identify pain points at workflow boundaries (entering the tool, leaving the tool, handoffs to other people) which are often the highest-value improvement opportunities.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: NPS, CSAT, Ease-of-use score; How to measure: Baseline CSAT and task completion rates at each mapped touchpoint, then re-measure after workflow redesign informed by the journey map; track support ticket volume to validate reduction in pain-point-driven contacts.

Sources: [IDEO Design Thinking](https://www.ama.org/marketing-news/the-5-phases-of-design-thinking/)
Wireframe: https://files.catbox.moe/3xal8a.jpg
Notion: https://app.notion.com/p/Customer-Journey-Mapping-for-End-to-End-Workflow-Design-827a9aed534482a1a23301adb4ff632c

## UX-102 — Prototype Fidelity Matching the Question
- Score 5 · Design Process & Methodology / Prototyping Methods
- Goals: Present & Defend Design Decisions
- Use when: Use at every prototyping decision point and when scoping prototype investment during sprint planning.

**Why.** Match prototype fidelity to the specific question being tested. Early prototypes should be rough, rapid, and "right enough" — lower fidelity means less time per iteration and more learning per hour. As questions get answered and designs mature, increase fidelity incrementally. Using high-fidelity prototypes to test conceptual questions wastes resources and biases users toward visual details (color choices, typography) rather than structural feedback (does this workflow make sense?). The goal is maximum learning per unit of prototype investment.

**Do.**
- Before building any prototype, explicitly state: "The question this prototype answers is [X]." For conceptual questions (does this workflow make sense?), use paper sketches or low-fi wireframes.
- For flow questions (can users complete this task?), use interactive wireframes.
- For trust/quality questions (does this feel professional?), use high-fidelity mocks.
- Never add fidelity beyond what the question demands.
- Test each prototype with users before advancing to higher fidelity.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time saved per task, Error rate reduction; Satisfaction: Perceived design quality, Learnability; How to measure: Track prototype iteration cycles and time-per-iteration; measure user feedback quality (structural vs. visual comments ratio); count rework hours attributable to late-stage redesigns caught by appropriate fidelity testing.

Sources: [IDEO Prototyping Principles](https://www.ideo.com/journal/7-principles-to-guide-your-prototyping)
Wireframe: https://files.catbox.moe/m43jh5.jpg
Notion: https://app.notion.com/p/Prototype-Fidelity-Matching-the-Question-d31a9aed5344820d87fa017fdca723b4

## UX-103 — Show Don't Tell — Living Documentation
- Score 5 · Design Process & Methodology / Design Communication
- Goals: Present & Defend Design Decisions
- Use when: Use at every design-to-engineering handoff, when presenting design decisions to stakeholders, and when documenting design rationale.

**Why.** Make design intent visible through prototypes, annotated mocks, and behavioral specifications rather than relying on verbal or text descriptions. Prototypes communicate more accurately than prose and prevent misinterpretation at the design-to-engineering handoff. For enterprise software, annotated wireframes and interactive prototypes are specifications, not illustrations — they are the primary source of truth for what gets built. Verbal agreements about design intent are forgotten or misremembered; annotated prototypes are precise and persistent.

**Do.**
- Annotate all wireframes with interaction notes, state variations (empty, loading, error, disabled, hover), and edge case behaviors.
- Build interactive prototypes for all flows that are difficult to describe in static screens.
- Treat the prototype as the primary specification artifact — if it's not in the prototype, it's not specified.
- For complex components, create a state matrix document alongside the prototype showing all possible combinations.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Training time, Support tickets reduction; Adoption & Retention: Signup completion rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Compare feature activation rates and time-to-first-use for features documented with living examples versus static text documentation; track support tickets for features with and without interactive documentation to measure comprehension improvement.; Annotate all wireframes with…

Sources: [IDEO / Cantina](https://cantina.co/applying-ideo-design-thinking-principles-to-software-engineering/)
Wireframe: https://files.catbox.moe/ocmk0h.jpg
Notion: https://app.notion.com/p/Show-Don-t-Tell-Living-Documentation-f23a9aed534482f9a0b401d9b62a2121

## UX-104 — Radical Collaboration — Multidisciplinary Product Teams
- Score 5 · Design Process & Methodology / Team Structure
- Goals: Present & Defend Design Decisions
- Use when: Use when forming teams for complex product initiatives, and when design and engineering are working in silos.

**Why.** IDEO's design thinking depends on "radical collaboration" — bringing together designers, engineers, business strategists, domain experts, and customers as co-creators rather than sequential contributors. Multidisciplinary teams catch more risks earlier, generate more creative solutions, and build shared ownership of outcomes. For enterprise software, this means product designers working directly with data engineers, domain SMEs, and end users — not receiving requirements through a chain of intermediaries. Sequential waterfall handoffs between discovery, design, and development are the primary source of expensive late-stage rework.

**Do.**
- Involve at least one representative from design, engineering, business/product, and a user-facing role (customer success, sales, or actual users) in all discovery and design phases.
- Establish shared artifacts — journey maps, personas, IA diagrams — that all roles co-create and reference throughout the project.
- Schedule weekly cross-functional reviews rather than phase-gate handoffs.
- Measure collaboration health by whether engineers understand why they're building what they're building.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: SUS score, NPS; How to measure: Baseline SUS and NPS scores before and after implementing collaborative design processes across release cycles; track support ticket volume as a proxy for product-quality improvements over time.

Sources: [IDEO Design Thinking](https://cantina.co/applying-ideo-design-thinking-principles-to-software-engineering/)
Wireframe: https://files.catbox.moe/092q82.jpg
Notion: https://app.notion.com/p/Radical-Collaboration-Multidisciplinary-Product-Teams-9d9a9aed534483e6a377816d4853f824

## UX-638 — Design - System Backlog & Pilot Delivery
- Score 5 · Design Process & Methodology / Steel threads, component inventory, and pilot readiness
- Tags: design-system, enterprise, workflow, onboarding
- Goals: Design a Consistent System at Scale; Handle Complex Multi-Step Workflows; Design for Enterprise & B2B Scale
- Use when: Use when converting a new design-system strategy into an initial release plan and selecting product pilots.

**The Practice.**
Build the system backlog from a balance of foundational needs and real product demand. If the loudest product request controls everything, essential foundations are starved. If the platform team builds only abstract components, it loses contact with the work products must actually ship.

**Use Steel Threads To Define The First Backlog.**
Combine three evidence sources:
1. A viable modern technical architecture
2. A priority pilot’s UI inventory
3. The essential UI elements required for that product to deliver value
This creates a thin, end-to-end path from real application need through reusable component design, implementation, documentation, and adoption. It is stronger than a generic wish list.

**Decompose Real Applications Carefully.**
Work with product teams to inventory screens and flows, then identify recurring elements and behavior. Teach the distinction between a reusable component and a one-off assembly. For each candidate, ask:
- Is it reusable across products or user journeys?
- Which states and interactions are invisible in a static screen?
- Does it share a pattern with another component, such as selection or drag-and-drop behavior?
- Is the old interaction still worth preserving, or is this a chance to retire it?
Prioritize coherent families rather than disconnected requests. A working family that completes a real flow is more useful than a catalog of unrelated controls.

**Select Pilots For Readiness Not Enthusiasm.**
A strong pilot has five prerequisites:
1. An established delivery team
2. A product roadmap
3. Designs mature enough to integrate
4. A clear design, business, or technical objective
5. Cross-disciplinary agreement to participate
Pilot selection is a program-management decision. An enthusiastic team can still be wrong for the first pilot because of timing, team formation, design readiness, or roadmap fit. Retain an agile mindset and redirect to the product that is most ready to create a credible win.

**Delivery Cadence.**
Link the product and system backlog with pre-grooming, sprint-review participation, and clear ownership. Use the pilot to learn what documentation, API shape, component states, and contribution rules are missing before attempting broad rollout.
> Source context: distilled from the user-provided 60:46 seminar *Initiating a Design System*.

Notion: https://app.notion.com/p/Design-System-Backlog-Pilot-Delivery-594a9aed5344828aa9ca817c27d1c43c

## UX-639 — Design - System Discovery & Audit
- Score 5 · Design Process & Methodology / Discovery & audit
- Tags: design-system, workflow
- Goals: Design a Consistent System at Scale; Reduce Cognitive Load
- Use when: Use before creating or materially evolving a design system.

**Core Practice.**
Begin with a design-system discovery and audit that exposes the **real inconsistency cost** across the product, brand, and implementation. The goal is not to catalogue every screen for its own sake. It is to identify what repeats, where it diverges, why teams make local workarounds, and which improvements will create the most cross-product value.
A useful audit combines four lenses: visual consistency, interaction and user-flow quality, information architecture, and implementation/reuse. Pair the artifact review with interviews; screenshots reveal what exists, but teams explain why it exists and where the process breaks.

**Recommended Model.**
1. **Set the audit frame.** Define the products, platforms, user journeys, and teams in scope. Start with revenue-critical, high-volume, or high-risk flows rather than every page.
2. **Capture evidence.** Record screenshots and short flow videos. Include normal, loading, empty, error, and success states—not only the polished happy path.
3. **Inventory patterns.** Group repeated UI by purpose: navigation, selection, data entry, feedback, content display, and workflow. Record variants, tokens, accessibility behaviour, code locations, and ownership.
4. **Find friction.** Interview design, engineering, product, QA, and support about rework, unclear handoffs, detached components, undocumented decisions, and recurring bugs.
5. **Prioritize.** Score each finding by frequency, user/business impact, severity, and cross-product reuse. Convert the result into a sequenced foundation, component, documentation, and adoption backlog.

**Worked Example.**
**Problem:** a product suite has three “primary” buttons. One uses 12px radius, one uses 6px, and one has no visible focus state. Two products call the same destructive action “Delete”; another says “Remove.”
**Audit record:**
- **Pattern:** Primary button / destructive action
- **Evidence:** 11 screens across 3 products; 5 different implementations
- **User risk:** focus state absent in 2 implementations; destructive-action wording varies
- **Root cause:** no semantic colour token, no shared button component, and no ownership for accessibility QA
- **Decision:** create a shared button family, semantic action-danger tokens, content guidance for destructive verbs, and keyboard/focus acceptance tests
- **Priority:** high—frequent, accessible, and reusable across products
This turns “make buttons consistent” into an actionable system slice with a measurable outcome.

**Deliverables.**
- Annotated audit board with evidence links
- Pattern/component inventory with duplicate and missing-state flags
- User-flow map showing divergence and dead ends
- Interview summary grouped by design, engineering, and adoption friction
- Prioritized opportunity backlog with named owners and success signals

**Quality Checks.**
- Audit full flows and states; do not inspect only static, ideal screens.
- Include existing code and design-library evidence so that “duplicates” are not judged visually alone.
- Separate a reusable component from a product-specific composition.
- Record the reason for each inconsistency before standardizing it; some variations are intentional domain rules.
- Validate top priorities with the teams who will adopt them before committing to the roadmap.

Sources: [Build a Design System](https://thedesignsystem.guide/start-here) · [Design Audit](https://thedesignsystem.guide/design-audit) · [Design System Research Interview Questions](https://thedesignsystem.guide/design-system-research-interview-questions)
Notion: https://app.notion.com/p/Design-System-Discovery-Audit-f36a9aed534483599837011d18dd93fe

## UX-641 — Design - System Governance, Adoption & Measurement
- Score 5 · Design Process & Methodology / Contribution model, moderation, and KPIs
- Tags: design-system, enterprise, workflow, engagement, trust
- Goals: Design a Consistent System at Scale; Design for Enterprise & B2B Scale; Present & Defend Design Decisions
- Use when: Use after a system has an initial release and needs sustainable adoption across many delivery teams.

**The Practice.**
A design system should be open in contribution but clear in stewardship. Product teams need to solve immediate delivery needs; when their solution is reusable, the system gives them a visible way to return it to the platform. The core team protects coherence, accessibility, quality, and documentation.

**Make The Supported Path The Easy Path.**
Adoption follows convenience. It should be faster and less risky to use a supported component than to invent a local alternative. Supply working implementations, straightforward setup, live examples, and clear guidance. If reuse adds friction or a long approval queue, teams will bypass the system under delivery pressure.

**Moderate Without Gatekeeping.**
Use a “trust, but verify” model. Avoid turning the system into a blanket central gate. Instead, state the status of assets transparently—stable, in review, experimental—and make the review/contribution path understandable. Contributors should know what is expected, how a proposal is evaluated, and when it becomes supported.

**Measure Behavior Not Catalog Size.**
Useful indicators include:
- Component usage/adoption in new product work
- Coverage of priority journeys and complete component families
- Contributions from product teams
- External merge requests or review activity
- Delivery friction and implementation feedback
- Evidence of reduced duplicate work or improved quality where measurement is credible
A component count is a weak success metric. A smaller library that supports real end-to-end flows and attracts contributors is healthier than a large catalog that sits beside production work.

**Sustain The Community.**
Maintain recurring touchpoints: sprint reviews, pre-backlog grooming, documentation feedback, release notes, demos, and contribution recognition. These give the platform real production feedback and make the system feel like a shared operating practice rather than a team-owned asset.
> Source context: distilled from the user-provided 60:46 seminar *Initiating a Design System*.

Notion: https://app.notion.com/p/Design-System-Governance-Adoption-Measurement-9a2a9aed534483e3b5e101349d8717cf

## UX-642 — Design - System Initiation & Alignment
- Score 5 · Design Process & Methodology / Change management and executive alignment
- Tags: design-system, enterprise, workflow, human-centered-design
- Goals: Design a Consistent System at Scale; Present & Defend Design Decisions; Design for Enterprise & B2B Scale
- Use when: Use before funding or staffing a design system, especially where product teams are decentralized or leaders are removed from day-to-day delivery friction.

**The Practice.**
Start the design system by building shared agreement on the problem—not by publishing components. Establish the recurring costs of inconsistent UI, duplicate implementation, design/development drift, inaccessible patterns, and ever-growing maintenance. Then position the system as an accelerator for business priorities already in motion, such as delivery velocity, quality, or a platform transition.

**Step Zero Agree On The Assumptions.**
Make these assumptions explicit and test them with leaders and delivery teams:
- A consistent user experience across products is an organizational goal.
- Designers and developers jointly own the experience—not separate handoff artifacts.
- Important interactions should be designed deliberately and made repeatable.
- Product teams will need a practical path to contribute back to the shared library.
Leaders may not feel the pain of product inconsistency as directly as practitioners. Use a UI audit, examples of duplicate work, usability evidence, and real delivery stories to make the problem concrete before requesting commitment.

**Treat Adoption As Organizational Change.**
A design system changes roles, habits, and decision rights. Apply a change-management lens: create urgency, build a cross-functional coalition, state a clear vision and roadmap, communicate repeatedly, remove adoption friction, demonstrate early wins, then make the behavior durable.
Use different communication channels for different needs: a leadership memo for commitment; roadmap conversations for sequencing; documentation and chat spaces for daily use; demos and workshops for confidence and advocacy. Communication must include listening—discover assumptions, constraints, and potential contributors early.

**Leadership Memo Outline.**
1. Executive summary and progress so far
2. Current-state problems and evidence
3. Definition, vision, and desired outcomes
4. Intended users and adoption model
5. Goals, roadmap, and measures of success
6. Specific decisions, staffing, or sponsorship needed from leadership

**Watch Out.**
Some designers may read reuse as a reduction in their role if documentation artifacts have historically defined their value. Reframe the shift: the high-value work becomes pattern definition, user validation, interaction states, cross-product coherence, and informed trade-offs.
> Source context: distilled from the user-provided 60:46 seminar *Initiating a Design System*.

Notion: https://app.notion.com/p/Design-System-Initiation-Alignment-c02a9aed53448332ad36010c52c4965d

## UX-105 — Define Information Architecture Before Designing Navigation
- Score 4 · Design Process & Methodology / IA-first process
- Tags: forms, navigation, tables
- Goals: Present & Defend Design Decisions
- Use when: Apply at the start of any product design or major redesign project — before any navigation UI design begins.

**Why.** IA defines the information backbone of the system; navigation is the UI surface that exposes it. Starting with navigation forces the IA to conform to visual constraints rather than actual content complexity. A content inventory and audit must precede wireframing — this reveals what content exists, its relationships, and user-centric organization patterns. Navigation design decisions made without IA work are costly to reverse after engineering begins.

**Do.**
- Conduct a content inventory before defining navigation structure.
- Perform a content audit to evaluate usefulness, accuracy, and effectiveness.
- Document IA in spreadsheets and diagrams — not wireframes or prototypes.
- Group information user-centrically based on user needs, not organizational structure or database architecture.
- Develop a controlled vocabulary (taxonomy) applied consistently across all site content.
- Use card sorting to validate groupings with real users before committing to structure.

**Measure.** Effectiveness: Findability score, Task success rate; Efficiency: Time on task, Tree-test score; Satisfaction & Perception: Ease-of-use score, SUS score; How to measure: Run tree testing before and after restructuring the IA to measure direct and indirect success rates; supplement with moderated usability sessions to capture time-on-task and subjective ease-of-use scores.

Sources: [Nielsen Norman Group — IA vs. Navigation](https://www.nngroup.com/articles/ia-vs-navigation/) · [Boxes and Arrows — Information Architecture: Blueprints for the Web](https://boxesandarrows.com/information-architecture-blueprints-for-the-web/)
Wireframe: https://files.catbox.moe/oc3lsz.jpg
Notion: https://app.notion.com/p/Define-Information-Architecture-Before-Designing-Navigation-6faa9aed53448294aff281731715bfc4

## UX-106 — Card Sorting for User-Centric Information Architecture
- Score 4 · Design Process & Methodology / Information Architecture Methods
- Tags: tables, navigation, cognitive-load, search, forms
- Goals: Present & Defend Design Decisions
- Use when: Use when designing navigation, menus, or IA for a new product, when consolidating legacy systems, and when users report difficulty finding things.

**Why.** Ask users to organize cards representing features, functions, or content items into groups that make sense to them, and label those groups. Card sorting reveals users' mental models and vocabulary for organizing information, exposing mismatches between designer-imposed taxonomies and users' natural conceptual groupings. For data-heavy enterprise applications, card sorting is particularly valuable for designing navigation hierarchies, filter categories, and report taxonomies. Open card sort (users create their own categories) is for discovery; closed card sort (predefined categories) is for validation.

**Do.**
- Create cards for each major feature, report type, entity, or concept.
- Run open card sort (users create their own categories) for discovery — 15–20 participants.
- Analyze with cluster analysis to find consensus groupings.
- Run closed card sort to validate proposed navigation structures — test with 5–10 participants.
- Note terminology users apply to their groups — these become your navigation labels.
- Pay special attention to items that users consistently place inconsistently — they signal genuine conceptual ambiguity.

**Measure.** Effectiveness: Findability score, Task success rate, Direct success rate; Efficiency: Time on task, Tree-test score; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Run a tree test on the proposed IA derived from card sorting results, measuring overall success rate, direct success rate, and time per task. Compare results against a baseline tree test on the existing IA to quantify the findability improvement attributable to the card-sort-derived structure.

Sources: [IDEO Method Cards](http://designblog.uniandes.edu.co/blogs/dise1107/files/2013/01/IDEO_cards.pdf) · [Nielsen Norman Group — IA vs. Navigation](https://www.nngroup.com/articles/ia-vs-navigation/) · [Boxes and Arrows — Information Architecture: Blueprints for the Web](https://boxesandarrows.com/information-architecture-blueprints-for-the-web/)
Wireframe: https://files.catbox.moe/pmx1rv.jpg
Notion: https://app.notion.com/p/Card-Sorting-for-User-Centric-Information-Architecture-385a9aed53448229a5d001c5f9ccce35

## UX-107 — Quantify UX ROI — Measure Productivity Impact
- Score 4 · Design Process & Methodology / UX business case and ROI measurement
- Tags: enterprise, dashboard
- Goals: Present & Defend Design Decisions; Drive Conversion & Decision-Making
- Use when: Apply when making the business case for UX investment, prioritizing redesign efforts, or selecting features with the highest UX impact.

**Why.** Enterprise UX investment directly translates to productivity — reducing clicks from 4–6 to 1–2 on frequent tasks compounds over thousands of users performing those tasks daily. A 39% productivity increase documented in a KYC platform redesign demonstrates the tangible ROI available from enterprise UX investment. Measuring baseline task completion time enables calculation of compounding productivity savings that make UX work defensible at the executive level.

**Do.**
- Measure baseline task completion time for key workflows before redesign.
- Calculate time savings × daily frequency × user count × average hourly cost to quantify ROI.
- Prioritize UX improvements for the highest-frequency workflows first.
- Track adoption rate as a proxy for UX quality — poor UX is directly correlated with workarounds and tool abandonment.
- Target consumer-app standards for response time, task completion rate, and first-use success as the quality benchmark.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time saved per task, Support tickets reduction; Revenue: Cost reduction, Revenue per user; How to measure: Run time-on-task studies before and after UX improvements to quantify productivity gains; combine with support ticket volume and cost-per-task data to build an ROI case.

Sources: [UX Magazine — Enterprise UX: The Value of Usability](https://uxmag.com/articles/enterprise-ux-the-value-of-usability-for-enterprise-software)
Wireframe: https://files.catbox.moe/gzg8na.jpg
Notion: https://app.notion.com/p/Quantify-UX-ROI-Measure-Productivity-Impact-b1ba9aed534483b1940201df93713882

## UX-108 — Distinguish IA from Interaction Design — Design Both Explicitly
- Score 4 · Design Process & Methodology / Design discipline separation
- Tags: forms, navigation
- Goals: Present & Defend Design Decisions
- Use when: Apply at the start of any complex enterprise product design engagement, before wireframing begins.

**Why.** Information architecture (IA) concerns content structure, organization, labeling, and relationships. Interaction design (IxD) concerns behavior, state, workflow, action/reaction, and malfunction recovery. Both are essential for complex enterprise applications — conflating them or neglecting one leads to systems that are navigable but unusable, or functional but unfindable. Document IA and IxD deliverables separately — conflating them in wireframes creates confusion about what is structure vs. behavior.

**Do.**
- Document IA separately (spreadsheets, site diagrams) from IxD deliverables (flow diagrams, state diagrams, interaction specifications).
- IA deliverables: content inventory, taxonomy, site structure, controlled vocabulary.
- IxD deliverables: user flows, state diagrams, interaction specifications, edge case definitions.
- For every interactive component, specify all states: empty, loading, populated, hover, focus, active, selected, disabled, error.
- Map complete workflows end-to-end, not just individual screens.

**Measure.** Effectiveness: Findability score, Task success rate, Direct success rate; Efficiency: Time on task, Tree-test score; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Conduct separate tree tests for IA (findability) and usability tests for interaction design (task performance) to isolate which layer is causing problems. Track direct success rate in tree testing and task success rate in usability testing as independent metrics for each design layer.

Sources: [Boxes and Arrows — Introducing Interaction Design](https://boxesandarrows.com/introducing-interaction-design/) · [Boxes and Arrows — Foundations of Interaction Design](https://boxesandarrows.com/foundations-of-interaction-design/)
Wireframe: https://files.catbox.moe/eb5k5l.jpg
Notion: https://app.notion.com/p/Distinguish-IA-from-Interaction-Design-Design-Both-Explicitly-709a9aed534483b288b401a3a20a64f5

## UX-109 — Low-Fidelity Wireframes Early to Drive Critical Decisions
- Score 4 · Design Process & Methodology / Wireframing methodology
- Goals: Present & Defend Design Decisions
- Use when: Apply at the start of any design project, before high-fidelity work begins. Rough wireframes surface critical design questions while changes are cheap.

**Why.** The "Shallow Dive" approach uses deliberately rough, low-fidelity wireframes to surface critical design questions early — before effort is invested in high-fidelity detail. Fidelity of prototypes should reflect their stage of refinement; early explorations should be rough by design to encourage iteration rather than defense of polished solutions. Using rough wireframes to facilitate discussion about content structure and priority prevents stakeholders from engaging with layout decisions prematurely.

**Do.**
- Begin with intentionally rough wireframe fragments targeting specific design questions (hierarchy, flow, information priority).
- Use rough sketches to extract key decisions from stakeholders early while changes are cheap.
- Gradually increase fidelity as decisions are made and validated.
- Use low-fidelity wireframes to discuss content structure and priority — not visual design decisions.
- Reserve high-fidelity work for validated design directions only.
- Annotate wireframes with explicit design questions to focus review discussion.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: CSAT, Ease-of-use score; How to measure: Track design iteration cycles and the number of significant structural changes made after high-fidelity prototyping begins; compare projects that used early lo-fi wireframes vs. those that jumped to high-fidelity. Measure usability test success rates at the same project phase for both approaches as a quality proxy.

Sources: [Boxes and Arrows — The Shallow Dive](https://boxesandarrows.com/the-shallow-dive/)
Wireframe: https://files.catbox.moe/h9z0ct.jpg
Notion: https://app.notion.com/p/Low-Fidelity-Wireframes-Early-to-Drive-Critical-Decisions-f08a9aed5344830f97a90170407a139c

## UX-110 — Integrate UX Design Sprint Ahead of Development
- Score 4 · Design Process & Methodology / UX-agile integration process
- Goals: Present & Defend Design Decisions
- Use when: Apply in any agile product development team where UX/design and engineering work in the same sprint cadence.

**Why.** UX work that happens only within development sprints is constantly reactive — design decisions are made under time pressure and validated only after implementation, when changes are expensive. A "Sprint 0" or "Iteration 0" where UX defines the wireframe stack before development planning reduces costly mid-sprint redesigns. UX architecture is too expensive to fully redesign each sprint — stabilizing core patterns early is essential for maintaining velocity.

**Do.**
- Maintain a UX sprint ahead of the development sprint to provide validated wireframes for sprint planning.
- Create a complete wireframe stack as a key deliverable before release planning.
- Design UX to gracefully degrade if features are removed from scope — flexibility prevents full redesigns from scope changes.
- Treat core UX architecture as stable once validated — don't redesign foundational patterns each sprint without strong evidence.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time saved per task, Support tickets reduction; Satisfaction: Developer/designer velocity, Team satisfaction; How to measure: Track mid-sprint redesign frequency and sprint velocity before and after implementing design sprints; measure rework rate (hours spent redoing design decisions) as a key efficiency indicator.

Sources: [Boxes and Arrows — Bringing UCD to the Agile Environment](https://boxesandarrows.com/bringing-user-centered-design-to-the-agile-environment/)
Wireframe: https://files.catbox.moe/zjedtr.jpg
Notion: https://app.notion.com/p/Integrate-UX-Design-Sprint-Ahead-of-Development-ddaa9aed53448220adde81a67e8d5194

## UX-111 — Three Types of User Goals (Experience / End / Life)
- Score 4 · Design Process & Methodology / Persona Framework
- Goals: Present & Defend Design Decisions
- Use when: Use during persona development and when users report that a product is functionally adequate but emotionally dissatisfying.

**Why.** Alan Cooper identifies three distinct goal types that must all be satisfied: Experience Goals (how users want to feel: competent, in control, not stupid), End Goals (what users want to accomplish: find the report, approve the request), and Life Goals (who users want to be: a trusted analyst, a productive professional). Enterprise software consistently addresses only End Goals, creating functional but emotionally unsatisfying tools. Designing for all three creates products that users choose to use rather than endure. Experience Goals in particular drive the emotional quality of the product and long-term user loyalty.

**Do.**
- For each primary persona, write explicit statements for all three goal types before any design work begins.
- Derive Experience Goals directly from research — ask users how they want to feel at the end of a successful workday, not just what they want to accomplish.
- Use Experience Goals as quality criteria during design critique alongside functional acceptance criteria.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Error counts; Satisfaction & Perception: CSAT, Ease-of-use score, NPS; How to measure: Use post-task surveys in usability testing to assess whether users feel the product served their broader life and end goals, not just functional tasks. Compare NPS scores before and after redesigns grounded in this goal framework.

Sources: [About Face 4th Ed., Ch. 4 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
Wireframe: https://files.catbox.moe/mpi6rb.jpg
Notion: https://app.notion.com/p/Three-Types-of-User-Goals-Experience-End-Life-2b1a9aed5344825e9a918109b48df7d5

## UX-112 — Breadboarding for Interaction Flow Design
- Score 4 · Design Process & Methodology / Early-Stage Design Methods
- Tags: navigation
- Goals: Present & Defend Design Decisions
- Use when: Use during early shaping phase when defining navigation structure and key affordances for a new feature, before any visual design.

**Why.** Use text-based breadboard sketches — listing Places (screens), Affordances (buttons/fields/links), and Connections (navigation flows triggered by affordances) — to define the topology of an interface without getting trapped in visual details. Breadboards allow rapid iteration over interface logic and navigation structure using words rather than pictures, enabling teams to evaluate three different interaction approaches in the time it would take to sketch one wireframe. They are especially valuable for discovering whether a navigation model is coherent before visual design investment.

**Do.**
- Draw three columns: Places (underlined, representing screens or locations), Affordances (listed below each place, representing buttons, links, and fields), Connections (arrows between places triggered by affordances).
- Use words only — no boxes, no visual styling.
- Work alone or with one trusted partner.
- Complete a breadboard in 15–30 minutes.
- When a breadboard feels overly complex or confusing as text, that complexity is a design problem to solve before proceeding.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Error counts; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Compare usability test success rates on flows designed with breadboarding vs. those designed directly in high-fidelity. Track design iteration cycles as a proxy for whether early flow clarity reduces rework and downstream usability errors.

Sources: [Shape Up by Ryan Singer, Ch. 4 (Basecamp, 2019)](https://basecamp.com/shapeup/1.3-chapter-04)
Wireframe: https://files.catbox.moe/ojb9rj.jpg
Notion: https://app.notion.com/p/Breadboarding-for-Interaction-Flow-Design-725a9aed5344820fb03081e026f6f336

## UX-113 — Affinity Diagrams for Research Synthesis
- Score 4 · Design Process & Methodology / Research Synthesis
- Tags: search
- Goals: Present & Defend Design Decisions; Reduce Learning Curve for Complex Tools
- Use when: Use after completing a research sprint to synthesize findings from multiple sources before defining the problem statement.

**Why.** Cluster qualitative research findings — interview quotes, observation notes, pain points — according to intuitive relationships (similarity, theme, dependency) to discover connections and reveal innovation opportunities. Affinity diagrams transform hundreds of raw observations into actionable insight clusters. They are especially valuable for cross-functional teams where multiple researchers need to build a shared understanding of diverse findings. The unexpected clusters that don't fit neatly into anticipated themes often represent the most valuable insights.

**Do.**
- Write each research observation on a separate sticky note (physical or digital).
- Have team members arrange silently by affinity without discussing.
- Name clusters with insight statements, not category labels ("Users work around the approval step" not "Approval process").
- Look for the unexpected — clusters that contradict assumptions are the most valuable.
- Photograph or digitize the final affinity map.
- Convert the top 5–10 insight clusters into "How Might We" questions for ideation.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Training time, Time saved per task; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Compare the time required to synthesize research insights and identify themes using affinity diagrams versus unstructured review; track how frequently synthesized insights translate into actionable design decisions and whether teams report higher confidence in findings.

Sources: [IDEO Method Cards](http://designblog.uniandes.edu.co/blogs/dise1107/files/2013/01/IDEO_cards.pdf)
Wireframe: https://files.catbox.moe/qydyhm.jpg
Notion: https://app.notion.com/p/Affinity-Diagrams-for-Research-Synthesis-17fa9aed53448387b61601451ce92012

## UX-114 — "How Might We" Problem Framing
- Score 4 · Design Process & Methodology / Problem Definition
- Goals: Present & Defend Design Decisions
- Use when: Use after research synthesis, when a feature request arrives without clear user need context, and before any ideation session.

**Why.** Synthesize research insights into focused, human-centered problem statements using the "How Might We" (HMW) format. HMW questions are optimally sized: broad enough to allow creative solutions but narrow enough to provide meaningful direction. The format is human-centered (starts with the user's need), not solution-biased (avoids presupposing a specific answer), and inherently actionable. For complex enterprise products, good HMW questions reframe "add a feature" requests into underlying user needs that may be addressable in multiple ways.

**Do.**
- Generate HMW questions directly from pain points in research data (quote or observation → HMW question).
- Format: "How might we [verb + user benefit]?" Avoid HMW questions that imply a solution ("HMW add a filter?" implies filters are the answer; "HMW help users find the right data quickly?" is better).
- Generate 10–20 HMW questions from a research set.
- Vote on the most promising using dot voting.
- Use the selected HMW as the ideation brief.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: CSAT, NPS, Ease-of-use score; How to measure: Compare the ratio of problem-reframing to solution-jumping in design sessions and track whether HMW-grounded designs yield higher usability test success rates. Use post-launch satisfaction surveys to assess whether HMW-guided solutions better match real user needs.

Sources: [IDEO Design Thinking / Stanford](https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process) · [d.school](http://d.school/)
Wireframe: https://files.catbox.moe/wqv2cq.jpg
Notion: https://app.notion.com/p/How-Might-We-Problem-Framing-9bda9aed53448385a3e88182b192b301

## UX-115 — Diverge Before Converging — Separation of Ideation and Evaluation
- Score 4 · Design Process & Methodology / Ideation Methods
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Use at the start of every design challenge, when teams are stuck in incremental thinking, and before wireframing begins.

**Why.** Generate the broadest possible range of ideas before evaluating any of them. IDEO's core ideation principle requires explicitly separating divergent thinking (generating possibilities) from convergent thinking (evaluating and selecting). Teams that evaluate while generating consistently produce fewer and less creative ideas. For enterprise software, this combats the common tendency to jump immediately to "the obvious solution" — which often means a slightly modified version of the existing system rather than a genuinely better approach.

**Do.**
- Run a structured brainstorm: 10–15 minutes of silent individual idea generation (no talking, everyone writes/sketches), then share-outs round-robin, then "yes-and" building on others' ideas.
- Explicitly defer all judgment and critique until the ideation period ends — anyone who starts evaluating during ideation gets a gentle redirect.
- After 20–30 minutes of divergence, switch to convergent dot voting to identify the most promising directions.

**Measure.** Effectiveness: Task success rate, Completion rate; Satisfaction & Perception: CSAT, NPS, Ease-of-use score; Efficiency: Time on task, Support tickets reduction; How to measure: Compare the number of distinct solution concepts generated per ideation session when diverge/converge separation is used vs. when it is not. Track downstream usability test success rates for designs produced with structured diverge-before-converge ideation to assess whether broader exploration yields higher-quality solutions.

Sources: [IDEO Design Thinking](https://www.ama.org/marketing-news/the-5-phases-of-design-thinking/)
Wireframe: https://files.catbox.moe/yv4iol.jpg
Notion: https://app.notion.com/p/Diverge-Before-Converging-Separation-of-Ideation-and-Evaluation-b54a9aed534482ee884501086db5220b

## UX-116 — Design Critique Best Practices
- Score 4 · Design Process & Methodology / Design Review Process
- Goals: Present & Defend Design Decisions; Reduce Learning Curve for Complex Tools
- Use when: Use before major design handoffs, at key decision points in the design process, and during design system evolution.

**Why.** Design critiques are structured feedback sessions that improve design quality iteratively. Effective critiques require: clear objectives (what specific feedback is needed?), relevant stakeholders (not too many people), pre-review materials shared in advance, structured feedback (critique the design against its stated goals, not personal preference), and clear ownership (the designer makes the final decision). Without this structure, critiques become subjective opinion battles where the most senior voice dominates, producing designs that satisfy organizational politics rather than users.

**Do.**
- Share pre-review materials (video walkthrough or annotated mocks) 24 hours before the meeting.
- Open the critique with: "The design goal is [X]. We need feedback on [specific questions]." Separate problem validation from solution feedback.
- Require feedback to be framed as observations or questions, not directives ("I notice users might be confused by X" rather than "Change X to Y").
- Document decisions and rationale in a shared artifact.
- Timebox sessions at 60–90 minutes maximum.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: CSAT, Ease-of-use score; How to measure: Track usability test scores (task success rate, SUS) across product releases and correlate with the adoption of structured critique practices. Monitor support ticket volume post-launch as a signal of whether critique-driven quality improvements reduce user errors in production.

Sources: [Atlassian — Design Review Process](https://www.atlassian.com/blog/loom/design-review)
Wireframe: https://files.catbox.moe/wkv6gv.jpg
Notion: https://app.notion.com/p/Design-Critique-Best-Practices-583a9aed5344831aa271813b537409cb

## UX-117 — Empathy Mapping for Research Synthesis
- Score 4 · Design Process & Methodology / Research Synthesis
- Tags: search, animation
- Goals: Present & Defend Design Decisions; Reduce Learning Curve for Complex Tools
- Use when: Use after research interviews, as a team alignment tool before ideation, and when building or validating personas.

**Why.** Create a structured visualization of what users Think, Feel, Say, and Do to build a holistic understanding of their experience. Empathy maps surface the gap between users' external behaviors and internal emotional states — revealing frustrations users don't articulate and motivations that drive real behavior. For enterprise software, empathy maps often reveal that users "say" they want more features while they "feel" overwhelmed by complexity already present — a critical signal for prioritization. The Say/Think gap is often where the most valuable design insight lives.

**Do.**
- Use a 2×2 grid or a segmented circle: Says (direct quotes from research) / Thinks (inferred thoughts and internal narrative) / Does (observed behaviors and actions) / Feels (emotional states and reactions).
- Add "Pains" and "Gains" sections at the bottom.
- Populate with direct research data — quotes for Says, observations for Does, inferences supported by evidence for Thinks and Feels.
- Build one empathy map per primary persona.
- Use as a reference artifact in design reviews when debating how users will respond to a design decision.

**Measure.** Effectiveness: Task success rate, Completion rate; Satisfaction & Perception: CSAT, Ease-of-use score, NPS; Efficiency: Time on task, Support tickets reduction; How to measure: Compare design iteration quality (measured by usability test success rates) on projects that used empathy mapping in synthesis vs. those that did not. Survey team members on confidence in design decisions as a proxy for research synthesis quality.

Sources: [IDEO Design Thinking](https://www.ama.org/marketing-news/the-5-phases-of-design-thinking/)
Wireframe: https://files.catbox.moe/ilxwnu.jpg
Notion: https://app.notion.com/p/Empathy-Mapping-for-Research-Synthesis-9d0a9aed534483fbad0881d600f0ab07

## UX-635 — Design - Collaboration & Contribution Model
- Score 4 · Design Process & Methodology / Collaboration & governance
- Tags: design-system, workflow
- Goals: Design a Consistent System at Scale; Design for Enterprise & B2B Scale
- Use when: Use when designing ownership, contribution, and adoption practices.

**Core Practice.**
Choose an operating model that gives teams a clear path from “we found a gap” to “a reusable solution is safely released.” Collaboration is not a meeting schedule; it is the decision system for requests, contributions, reviews, releases, and feedback.
The core team should protect coherence, accessibility, and technical quality without becoming a gate that product teams bypass under delivery pressure.

**Recommended Contribution Lifecycle.**
1. **Discover:** a product team identifies a missing or divergent pattern and captures user, product, and implementation context.
2. **Triage:** system and product representatives decide whether it is a local exception, an existing asset, a variant, a component enhancement, or a new pattern.
3. **Propose:** the contributor supplies the problem statement, usage evidence, anatomy, states, accessibility behaviour, token needs, and implementation plan.
4. **Review:** design, engineering, content, QA/accessibility, and product review the proposal against shared criteria.
5. **Build and validate:** implement in a real product context, test states and assistive-technology behaviour, and record decisions.
6. **Release:** publish the code/design asset, migration notes, examples, and documentation together.
7. **Learn:** collect adoption and feedback; revise, deprecate, or extend based on real use.

**Worked Example.**
A billing squad creates a status badge for “payment pending.” During triage, the system team finds two similar badges: one is only a coloured label, and the other includes an icon and status text.
Instead of adding a third badge, the group decides:
- The user-facing need is **status communication**, so the semantic meaning comes first.
- Extend the existing Status component with a 'pending' status.
- Add semantic tokens for 'status.pending.*', including non-colour text/icon cues.
- Test the component in a dense table and on mobile.
- Release it with usage guidance: “Use Status for persistent object state; do not use it as an action button or temporary notification.”
The contribution improves three products instead of solving only the billing page.

**Decision Rights.**
Define who makes which decision:
- **System maintainers:** architecture, visual language, component API, token semantics, and release quality.
- **Product teams:** priority context, domain rules, real-flow validation, and contribution implementation.
- **Accessibility/QA:** acceptance criteria, test evidence, and known limitations.
- **Content/design:** terminology, usage guidance, and comprehensibility.

**Quality Checks.**
- Every request contains a real product problem and evidence of reuse potential.
- The team checks existing assets before proposing a new one.
- Reviews evaluate user need, accessibility, technical fit, and cross-product value—not visual preference alone.
- Contributions ship with documentation and migration guidance, not code/design files only.
- Release notes state what changed, who is affected, and how to adopt or migrate.
- Feedback visibly affects priority decisions so consumers can see the system responding.

Sources: [Collaboration](https://thedesignsystem.guide/collaboration) · [Design System Knowledge Base](https://thedesignsystem.guide/knowledge-base)
Notion: https://app.notion.com/p/Design-Collaboration-Contribution-Model-c51a9aed534482cbb710013b96ee9a21

## UX-118 — Aesthetic-Usability Effect — Visual Polish Affects Perceived Usability
- Score 3 · Design Process & Methodology / Perceived quality and trust
- Goals: Present & Defend Design Decisions; Reduce Learning Curve for Complex Tools; Improve Readability & Visual Clarity
- Use when: Important when modernizing legacy internal tools or when your users have previously dismissed the product as "ugly and hard to use." Also critical at high-stakes moments: onboarding, dashboards, externally-shared reports.

**Why.** Users often perceive aesthetically pleasing design as more usable, even when actual usability is equivalent. Research by Kurosu and Kashimura (1995) found users rated aesthetically appealing ATM interfaces as easier to use than functionally identical alternatives. Importantly, this effect can mask real usability problems in testing — recruit skeptical users and test with task completion metrics, not satisfaction ratings alone. Visual polish buys tolerance: a professional-looking interface makes a 3-second wait feel acceptable where an ugly one makes it intolerable.

**Do.**
- Invest in visual polish — consistent spacing, a clean type scale, a coherent color palette — even in data-dense UIs.
- Use the aesthetic effect strategically at high-stakes moments: onboarding, dashboards, externally shared reports.
- Be aware it masks usability problems — supplement preference testing with task-completion metrics.
- Apply it to loading screens and progress states: a well-designed loading animation makes waits feel shorter.
- Don't let it become a reason to avoid usability fixes.

**Measure.** Satisfaction & Perception: Ease-of-use score, Brand perception, CSAT; Adoption & Retention: Returning visitors, Trial requests; Engagement & Usage: Sessions per user, Abandonment rate; How to measure: Gather perceived usability ratings (e.g., SUS or UMUX-Lite) before and after visual redesign work to isolate the aesthetic-usability effect. Pair with A/B testing on returning visitor rates and session frequency to assess whether improved visual polish drives retention.

Sources: [Laws of UX — Aesthetic-Usability Effect](https://lawsofux.com/aesthetic-usability-effect/)
Wireframe: https://files.catbox.moe/vhxrl9.jpg
Notion: https://app.notion.com/p/Aesthetic-Usability-Effect-Visual-Polish-Affects-Perceived-Usability-cffa9aed5344838fbc3701c10031240e

## UX-119 — Cores and Paths — Design From the Core Content Outward
- Score 3 · Design Process & Methodology / Content-first design strategy
- Tags: navigation
- Goals: Present & Defend Design Decisions
- Use when: Apply in any application where users have a clear primary goal — product lookup, transaction processing, record management, report viewing — to ensure navigation leads efficiently to that core.

**Why.** Traditional design starts with the homepage and works down, leaving the most important content — the "core" users seek — as an afterthought. Designing from the core outward ensures all inward paths lead efficiently to the most valuable content, and outward paths from the core reflect business priorities. This approach avoids the common failure of homepage-centric design that prioritizes company structure over user destination.

**Do.**
- Identify the core offering first (what users are actually trying to get to or do).
- Map all inward paths to the core (search, navigation, direct links).
- Map all outward paths from the core (next steps, related actions, conversion points).
- Design the homepage and navigation last — after core and paths are defined.
- Rank outward paths by business importance to prioritize visual prominence.

**Measure.** Effectiveness: Completion rate, Task success rate; Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score, Satisfaction rating; How to measure: Evaluate designs produced using Cores and Paths against task completion rates in usability testing, specifically measuring whether users can reach and act on core content without unnecessary steps. Track time-on-task across key user journeys compared to designs that did not start from the core content outward.

Sources: [Boxes and Arrows — Designing Screens Using Cores and Paths](https://boxesandarrows.com/designing-screens-using-cores-and-paths/)
Wireframe: https://files.catbox.moe/6axcpw.jpg
Notion: https://app.notion.com/p/Cores-and-Paths-Design-From-the-Core-Content-Outward-930a9aed534482d589f3012b60ab691a

## UX-120 — Process-Oriented Journey Maps for Enterprise Systems
- Score 3 · Design Process & Methodology / Enterprise journey mapping
- Tags: mobile, enterprise
- Goals: Present & Defend Design Decisions; Design a Consistent System at Scale
- Use when: Apply when designing or evaluating complex enterprise workflows spanning multiple roles, departments, or systems. Not applicable to single-screen or single-user interactions.

**Why.** B2B and enterprise journey maps focus on business outcomes across roles and departments, not individual personas. Enterprise systems support mission-critical functions with system-dictated parameters — journey maps must empower users within those constraints while identifying friction points across the full process. A journey map covering only one user's portion misses the systemic nature of enterprise workflow problems. Cross-reference maps with analytics data to identify where stagnation or drop-off occurs.

**Do.**
- Map the full business process from start to completion, not just one user's portion.
- Include multiple roles and their interactions at each touchpoint.
- Capture thoughts, actions, and emotions at each stage to reveal friction points.
- Use journey maps to assign departmental ownership for each touchpoint.
- Cross-reference with analytics data to identify where stagnation or drop-off occurs.
- Use journey maps as a stakeholder alignment tool — they make cross-departmental friction visible to decision-makers.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: CSAT, NPS; How to measure: Use journey maps to identify the highest-friction process touchpoints, then measure task success rate and time on task for those specific steps before and after redesign. Track support ticket volume for processes mapped in the journey to quantify the reduction in operational pain points.

Sources: [UX Magazine — User Journey Mapping for Complex Enterprise Systems](https://uxmag.com/articles/user-journey-mapping-for-complex-enterprise-systems)
Wireframe: https://files.catbox.moe/20a4wp.jpg
Notion: https://app.notion.com/p/Process-Oriented-Journey-Maps-for-Enterprise-Systems-aa0a9aed5344839cbf808184c9eb5f66

## UX-121 — Separate Page Content Priority From Visual Layout Decisions
- Score 3 · Design Process & Methodology / Content-first design documentation
- Goals: Present & Defend Design Decisions; Improve Readability & Visual Clarity
- Use when: Apply when documenting IA for complex sites and applications, especially when stakeholders focus on layout details rather than content structure during reviews.

**Why.** Wireframes that include layout details set visual expectations that constrain designers and distract stakeholders from the real questions: what content belongs here, in what priority order, and with what functionality. Page description diagrams communicate content and priority without prescribing layout, enabling the right design conversation at the right stage. This prevents premature convergence on a layout before content decisions are fully resolved.

**Do.**
- Use diagrammatic representations showing content priority and relationships without implying specific visual arrangements.
- Reserve layout decisions for the visual design phase.
- Annotate functional requirements and behaviors on wireframes separately from visual design specifications.
- Use wireframes as "starting points for grounding design studies" rather than final specifications.
- Separate content priority reviews from layout reviews in stakeholder sessions to prevent premature visual fixation.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Document content priority decisions before visual layout work begins, then run a first-click test after design to verify alignment. Compare task success rates on pages designed with explicit content hierarchy versus pages where layout drove prioritization decisions.

Sources: [Boxes and Arrows — Where the Wireframes Are](https://boxesandarrows.com/where-the-wireframes-are-special-deliverable-3/)
Wireframe: https://files.catbox.moe/53gksl.jpg
Notion: https://app.notion.com/p/Separate-Page-Content-Priority-From-Visual-Layout-Decisions-bb3a9aed534483f18a8081d88ef95f2a

## UX-122 — Group Decision-Making Failure Modes — Structured Decision Processes
- Score 3 · Design Process & Methodology / Decision-Making
- Goals: Present & Defend Design Decisions
- Use when: Use when running design review meetings, product prioritization sessions, and any group design decision with more than 3 participants.

**Why.** Group decision-making is systematically impaired by well-documented cognitive and social failure modes that, without explicit countermeasures, reliably degrade both the quality of design decisions and team cohesion. Groupthink — the tendency for cohesive groups to suppress dissenting opinions in favor of consensus — is particularly destructive in design reviews where senior stakeholder opinions anchor early discussion and implicitly discourage challenge.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: CSAT, NPS; How to measure: Track decision cycle time (time from brief to approved design) and the number of design revision rounds as process efficiency metrics. Correlate with downstream usability test scores and support ticket volume to assess whether structured decision-making produces better-quality designs with fewer post-launch corrections.

Sources: [100 Things #96–97 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/skw9y5.jpg
Notion: https://app.notion.com/p/Group-Decision-Making-Failure-Modes-Structured-Decision-Processes-f92a9aed534483fd802f8155e799399b
