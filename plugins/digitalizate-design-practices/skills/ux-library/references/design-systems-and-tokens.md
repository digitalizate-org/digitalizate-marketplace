# Design Systems & Tokens (16)

## UX-123 — Consistency and Standards
- Score 5 · Design Systems & Tokens / Internal and external consistency
- Tags: cognitive-load, design-system
- Goals: Design a Consistent System at Scale
- Use when: Apply in every design decision — users spend most of their time in other products, so their prior experiences set expectations for yours. Critical when building multi-module enterprise products.

**Why.** Users should not have to wonder whether different words, situations, or actions mean the same thing. Per Jakob's Law, users bring mental models from every tool they've previously used; interfaces that violate these conventions create re-learning burden. There are two types: internal consistency (same action always looks and behaves identically within your product) and external consistency (your product follows established industry conventions). Both are essential — but violating external conventions without clear benefit is always costly. Inconsistency is only useful when deliberate, to draw attention to something novel.

**Do.**
- Build and enforce a design system with documented component variants, interaction states, voice/tone guidelines, and a pattern library.
- Follow OS-native conventions: Cmd/Ctrl+S to save, Escape to dismiss, magnifying glass = search, gear = settings.
- When building for users migrating from known tools (Salesforce, SAP, Excel), replicate familiar interaction patterns explicitly.
- Audit for consistency across interaction patterns (how modals close, how errors appear), language (same verb for same action), and visual style (button hierarchy).

**Measure.** Efficiency: Time on task, Training time; Effectiveness: Task success rate, Error rate; Satisfaction & Perception: Ease-of-use score, CSAT, Brand perception; Adoption & Retention: Returning visitors; How to measure: Audit the product for heuristic violations of consistency (terminology, interaction patterns, visual language) and track resolution over time.

Sources: [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) · [Good UI — Consistency](https://goodui.org/#27) · [Good UI — Conventions](https://goodui.org/#29) · [Laws of UX — Jakob's Law](https://lawsofux.com/jakobs-law/)
Wireframe: https://files.catbox.moe/bwhdad.jpg
File: library/design-systems-and-tokens/UX-123-consistency-and-standards.md

## UX-124 — 8pt Grid Spatial System
- Score 5 · Design Systems & Tokens / Spacing System
- Tags: design-system
- Goals: Simplify a Cluttered Interface; Design a Consistent System at Scale
- Use when: Use when establishing a design system from scratch, or when retrofitting spacing consistency onto an existing product with inconsistent spacing.

**Why.** Use a base-8 spatial system — 4pt half-step, 8pt base unit, then 16, 24, 32, 40, 48, 64, 80, 96px increments — for all spacing, padding, margin, and sizing decisions. The 8pt grid works because most screen pixel densities are divisible by 8, producing pixel-perfect rendering at all scales. It dramatically reduces the number of spacing decisions designers make daily and eliminates the "close enough" pixel discrepancies that accumulate in inconsistent codebases. This is the spacing foundation of major design systems including Material Design, Carbon, and Fluent.

**Do.**
- Define spacing tokens: `space-1: 4px`, `space-2: 8px`, `space-3: 12px`, `space-4: 16px`, `space-5: 24px`, `space-6: 32px`, `space-7: 48px`, `space-8: 64px`.
- Ban arbitrary pixel values from all component implementations.
- Document the grid in the design system and enforce via design token adoption.
- For components requiring half-steps (small icon padding), allow 4px as the minimum unit.

**Measure.** Efficiency: Time on task, Training time; Effectiveness: Task success rate, Error rate; Satisfaction & Perception: Ease-of-use score, Brand perception; How to measure: Measure design production speed and the number of spacing-related QA bugs before and after adopting the 8pt grid. Supplement with user perception surveys on perceived polish and visual consistency — consistent spatial rhythm improves brand perception and perceived quality scores even if users cannot articulate why.

Sources: [Design Systems — Space, Grids, and Layouts](https://www.designsystems.com/space-grids-and-layouts/)
Wireframe: https://files.catbox.moe/i815vx.jpg
File: library/design-systems-and-tokens/UX-124-8pt-grid-spatial-system.md

## UX-125 — Semantic Color Tokens for Dark Mode Theme Switching
- Score 5 · Design Systems & Tokens / Theme Architecture
- Tags: design-system
- Goals: Design a Consistent System at Scale; Improve Readability & Visual Clarity
- Use when: Use when implementing dark mode for the first time, or when the current theming implementation requires component-level changes to switch themes.

**Why.** Build theme switching into the design token system from the start using semantic color tokens. Each semantic token (`color-background-primary`, `color-text-danger`) maps to different base palette values in light vs. dark mode. This makes implementing and maintaining dark mode a token-mapping exercise rather than a wholesale redesign of components. Without semantic tokens, every component requires individual dark mode style overrides — a maintenance nightmare that grows with every new component.

**Do.**
- Define a two-layer token system.
- Layer 1 (Option Tokens): the full color palette with all possible values (`color-blue-500`, `color-gray-100`).
- Layer 2 (Semantic Tokens): role-based usage tokens that point to option tokens (`color-background-primary: color-white` in light, `color-background-primary: color-gray-900` in dark).
- Theme switching swaps only the semantic token mappings.
- Use CSS custom properties for web; JSON token files consumed by Style Dictionary for cross-platform.

**Measure.** Engagement & Usage: Feature usage, Sessions per user, Active users; Satisfaction & Perception: Ease-of-use score, CSAT, Brand perception; Adoption & Retention: Returning visitors, Renewed subscriptions; How to measure: Track dark mode adoption rates after launch and compare session frequency and duration between users who switch to dark mode versus those who stay in light mode.

Sources: [YNAB — Semantic Color System](https://dev.to/ynab/a-semantic-color-system-the-theory-hk7)
Wireframe: https://files.catbox.moe/0q32hl.jpg
File: library/design-systems-and-tokens/UX-125-semantic-color-tokens-for-dark-mode-theme-switching.md

## UX-126 — Typographic Scale Principles
- Score 5 · Design Systems & Tokens / Typography System
- Tags: design-system
- Goals: Design a Consistent System at Scale
- Use when: Use when establishing a design system from scratch or when standardizing typography in an existing product with inconsistent type usage.

**Why.** Define a typographic scale with a base size (typically 16px for body text) and a scaling ratio (Major Third 1.25, Perfect Fourth 1.333, or Minor Third 1.2 for compact UIs). Mathematical relationships between type sizes create visual harmony. Pair the type scale with a 4pt baseline grid so all line heights are divisible by 4, creating consistent vertical rhythm. The scale should define 6–9 steps from display down to caption, with each step having font-size, line-height (4pt grid multiple), and font-weight already decided.

**Do.**
- Define 6–9 type size steps: display, h1, h2, h3, body-lg, body, body-sm, caption.
- Each step specifies font-size, line-height (approximately 1.4–1.6× font size, rounded to a 4pt multiple), font-weight, and letter-spacing.
- Set line heights: large headings at 1.2×, body text at 1.5×, small/caption at 1.4×.
- For enterprise data-dense applications, a Minor Third ratio (1.2) produces a more compact scale than Perfect Fourth (1.333), which is more appropriate.

**Measure.** Effectiveness: Findability score, Task success rate; Efficiency: Time on task, Average session duration; Satisfaction & Perception: Ease-of-use score, SUS score; How to measure: Conduct usability tests comparing interfaces with consistent versus ad-hoc typographic scales, measuring time-on-task and findability scores; collect SUS scores to evaluate the overall clarity contribution of the scale.

Sources: [Design Systems — Space, Grids, and Layouts](https://www.designsystems.com/space-grids-and-layouts/)
Wireframe: https://files.catbox.moe/svgzzj.jpg
File: library/design-systems-and-tokens/UX-126-typographic-scale-principles.md

## UX-127 — Status Color Consistency
- Score 5 · Design Systems & Tokens / Status Communication
- Tags: error-handling
- Goals: Design a Consistent System at Scale; Improve Readability & Visual Clarity
- Use when: Use in all status indicators, alerts, banners, form validation, badges, and data visualizations.

**Why.** Use a consistent color vocabulary for status: green for success, red for error/danger, yellow/orange for warning, blue for informational. These conventions are deeply ingrained in user mental models across most cultures. Deviating from them — using red for a positive alert, or orange for an error — causes systematic confusion and erodes trust in status communication throughout the product. All status colors must also have non-color differentiation (icon + text label) for color-blind users.

**Do.**
- Define semantic tokens: `color-status-success` (green), `color-status-error` (red), `color-status-warning` (yellow/amber), `color-status-info` (blue).
- Pair every status color with a semantic icon (checkmark for success, X or ! for error, warning triangle for warning, info circle for info).
- Apply these consistently across all components — badges, banners, form validation, toasts, and table row highlights.
- Test all status indicators against WCAG contrast requirements.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Track status-related error events (e.g., users acting on wrong-status items) in analytics before and after standardizing status colors; run quick usability tests measuring time-to-status-recognition and confidence rating.

Sources: [Carbon Design System — Notification Pattern](https://carbondesignsystem.com/patterns/notification-pattern/)
Wireframe: https://files.catbox.moe/6qs574.jpg
File: library/design-systems-and-tokens/UX-127-status-color-consistency.md

## UX-128 — Status Badge and State Indicator System
- Score 5 · Design Systems & Tokens / Component Patterns
- Tags: workflow, design-system
- Goals: Design a Consistent System at Scale
- Use when: All enterprise applications with entities that have workflow states, health indicators, or priority levels. Must be defined in the design system, not ad hoc per component.

**Why.** A consistent badge/chip system for all state indicators across the application — record status, priority levels, process states, health indicators — enables users to parse state across any list or table at a glance because the visual vocabulary is the same everywhere. When different parts of the application use different colors, icons, and label conventions for "Active" records, users must learn multiple systems. The cost of inconsistency compounds as the application grows.

**Do.**
- Badge anatomy: rounded rectangle with background color, short label (1–2 words), optional leading icon.
- Semantic color conventions: green = active/healthy/approved, amber = pending/warning, red = rejected/error/critical, gray = inactive/archived/draft, blue = in-progress/informational.
- Always pair color with a text label — never color alone.
- Define the complete state vocabulary (every possible state for every entity type) in the design system documentation.
- Enforce via code review and component library constraints.

**Measure.** Effectiveness: Task success rate, Error rate, Findability score; Efficiency: Time on task, Error counts; Satisfaction & Perception: Confidence rating, Ease-of-use score, CSAT; How to measure: Run usability tests on workflows where status awareness is critical (e.g., order management, task tracking) and measure error rates in user status interpretation. Track support tickets related to status confusion before and after implementing a consistent badge system.

Sources: [Smashing Magazine — Real-Time Dashboard UX](https://www.smashingmagazine.com/2025/09/ux-strategies-real-time-dashboards/)
Wireframe: https://files.catbox.moe/afpf8u.jpg
File: library/design-systems-and-tokens/UX-128-status-badge-and-state-indicator-system.md

## UX-636 — Design - Documentation Operations
- Score 5 · Design Systems & Tokens / Documentation
- Tags: design-system, ai-patterns
- Goals: Design a Consistent System at Scale; Reduce Learning Curve for Complex Tools
- Use when: Use when documentation is lagging behind the design and code system.

**Core Practice.**
Design-system documentation must answer the questions a consumer has at the moment of use: **What is this? When should I use it? Which variation is correct? How does it behave? How do I implement, test, and migrate it?** A gallery of screenshots or props is not enough.
Treat documentation as a maintained interface connected to the actual design and implementation sources. If the docs lag behind code and libraries, teams will lose trust and re-create local solutions.

**Recommended Component Page Structure.**
Every released component or pattern should have:
1. **Purpose:** one sentence describing the user need it solves.
2. **Use when / do not use when:** explicit boundaries and links to alternatives.
3. **Anatomy:** named visual and semantic parts.
4. **Variants and states:** examples of every supported option and the conditions that control it.
5. **Behaviour:** interaction, keyboard, focus, loading, validation, error, and responsive rules.
6. **Accessibility:** semantic roles, labels, announcements, contrast, and assistive-technology expectations.
7. **Implementation:** current code package, API, tokens, dependencies, and examples.
8. **Content guidance:** terminology, sentence patterns, truncation/localization constraints, and examples.
9. **Change history:** version, migration instructions, and known limitations.

**Worked Example Button Documentation.**
A useful Button page does more than show a blue rectangle.
**Purpose:** trigger a user action.
**Use when:** the user can take a clear, immediate action, such as “Save changes.”
**Do not use when:** navigating to another URL; use Link instead.
**Variants:** primary (one dominant action per context), secondary, tertiary, danger.
**States:** default, hover, focus-visible, pressed, disabled, loading.
**Accessibility:** use the native button element for actions; accessible name must describe the outcome; a loading button remains announced and prevents duplicate submission.
**Content examples:**
- Good: “Save changes”
- Good: “Delete project”
- Avoid: “Click here”
- Avoid: “Submit” when the actual outcome is sending an invoice
That guidance prevents the most common visual, technical, and content inconsistencies simultaneously.

**Documentation Operations.**
- Use a standard page template so contributors do not invent structure.
- Reuse the same examples and data in development/testing and the reference site; that creates a single source of truth.
- Connect design asset, component package, token source, documentation page, and release record with stable identifiers.
- Automate repeated synchronization where reliable, but retain design, engineering, content, and accessibility review for meaningful changes.
- Define a freshness signal: current version, last verified date, owner, and known limitations.

**Quality Checks.**
- A new consumer can choose the right asset without asking the system team.
- Examples show complete states and real content, not “Lorem ipsum” happy paths only.
- Behaviour, accessibility, and responsive rules are documented alongside appearance.
- Code and design examples can be traced to maintained sources.
- Documentation changes ship with the asset change; neither waits for a later cleanup.
- Search terms, naming, and IA match the language teams use in their work.

Sources: [Documentation](https://thedesignsystem.guide/documentation) · [How to Automate Design System Documentation](https://learn.thedesignsystem.guide/p/how-to-automate-design-system-documentation)
File: library/design-systems-and-tokens/UX-636-design-documentation-operations.md

## UX-637 — Design - Foundations & Component Scope
- Score 5 · Design Systems & Tokens / Foundations & components
- Tags: design-system
- Goals: Design a Consistent System at Scale; Improve Readability & Visual Clarity
- Use when: Use when establishing or resetting a system's baseline.

**Do.**
1. Write 3–5 product-specific design principles that clarify trade-offs.
2. Establish the smallest viable scale for core visual decisions; avoid creating dozens of values without evidence.
3. Define the component anatomy and state model before styling variants.
4. Add a “use / do not use” rule and accessibility requirements to every released component.
5. Start with the recurring elements that unblock a priority flow; expand only when real reuse demonstrates a need.

**Core Practice.**
Build a design system from explicit foundations before attempting a large component catalog. Foundations express the product’s visual and behavioural language: principles, colour, type, spacing, elevation, icons, motion, layout, accessibility expectations, and content conventions. Components then apply those decisions consistently in a reusable interface contract.
The system should be small enough to learn from and structured enough to scale. Treat it as an adaptable operating system, not a component dump.

**Recommended Model.**
Use three layers:
- **Foundations:** primitive decisions and rules—type scale, colour scales, spacing, grid, density, radii, elevation, motion, and accessibility baselines.
- **Components:** reusable, bounded interface objects with anatomy, variants, states, behaviours, and implementation guidance.
- **Patterns:** purposeful arrangements of components that solve a recurring user job, such as bulk selection, filtering a table, or confirming a risky action.
A reliable rule: create a **component** when the same object and behaviour recur; create a **variant** when the intent is the same but a controlled property changes; create a **pattern** when several components must work together to complete a task.

**Worked Examples.**
**Example 1 — variant, not a new component**
A team requests a “marketing button” because their landing page needs a large green CTA. Do not create a second Button component if the interaction and semantics are unchanged. Use the existing Button with a size and emphasis variant:
- Button / size=large / emphasis=primary
- The semantic token maps to the approved action colour for that theme
- The component retains the same focus, disabled, loading, and keyboard behaviour
**Example 2 — pattern, not a component**
A product team requests a “patient search component.” The UI contains a text input, search button, loading state, empty result state, result list, pagination, keyboard navigation, and an error/retry state. This is a **search pattern** composed from existing inputs, buttons, list rows, feedback, and pagination; documenting it as a single opaque component would hide important variation.

**Quality Checks.**
- Every component has a repeatable job, not merely a similar appearance.
- Every variant preserves semantic intent and required behaviour.
- Foundations are available in design and code, rather than being manually recreated.
- Components cover disabled, hover, focus, selected, loading, empty, error, and responsive states where relevant.
- The initial library supports a real end-to-end flow, not just a collection of isolated atoms.

File: library/design-systems-and-tokens/UX-637-design-foundations-and-component-scope.md

## UX-640 — Design - System Foundations, Principles & Documentation
- Score 5 · Design Systems & Tokens / Foundations, decision rules, and reference site
- Tags: design-system, typography, accessibility, content-design, cognitive-load
- Goals: Improve Readability & Visual Clarity; Reduce Cognitive Load; Design a Consistent System at Scale; Design for Accessibility & Inclusion
- Use when: Use when establishing a system’s visual language, design principles, component guidance, and documentation site.

**The Practice.**
Build foundations as tested hypotheses, then document them as everyday decision support. A mature system combines design guidance, visual foundations, reusable components, interaction behavior, working code, and examples—not a style guide alone.

**Create Foundations Through Real Product Work.**
Generate multiple visual hypotheses, then apply them to screens and workflows teams are actively designing. Element collages make alternatives discussable; critical screen applications reveal whether the foundations survive the density and complexity of the domain.
Evaluate foundation choices against concrete needs. For typography, test legibility, flexibility, x-height, spacing, proportion, and confusing characters such as lowercase “l” and “1.” The right decision must work in operational product screens, not just in a brand presentation.

**Make Principles Operational.**
Distill principles into a small, memorable set rooted in product research, audits, existing brand direction, and usability evidence. Add checklists, examples, and scenarios so they actually change design choices.
One useful checklist asks:
- Does the user see only what is needed now?
- Has the product safely automated avoidable work?
- Is the purpose of each visible element clear?
- Does the pattern use familiar conventions appropriately?
- Has reliance on working memory been reduced?
- Does the interface make the next action clear when it should?

**Document With A Uniform Component Template.**
Every component page should include a concise description, live demonstrations of each variation, code for each variation, usage rules, guidance per variation, do/don’t advice, and optional screenshots that distinguish similar patterns. A standard template lowers documentation cost and makes contributions consistent.
Organize the reference site from broad to concrete: **principles and guidance → foundations → components → resources**. Maintain a developer environment for building/testing components, but reuse the same examples and data in the documentation. That shared example pipeline protects a single source of truth and prevents demo drift.
> Source context: distilled from the user-provided 60:46 seminar *Initiating a Design System*.

File: library/design-systems-and-tokens/UX-640-design-system-foundations-principles-and-documentation.md

## UX-643 — Design - System Product Team & Operating Model
- Score 5 · Design Systems & Tokens / Team composition and service model
- Tags: design-system, enterprise, workflow, content-design
- Goals: Design a Consistent System at Scale; Design for Enterprise & B2B Scale; Reduce Learning Curve for Complex Tools
- Use when: Use when forming the permanent team that will establish and run a system across multiple product teams.

**The Practice.**
Run the design system as a product, not as a side project or a one-time library release. The core team is responsible for work that feature teams rarely have capacity to prioritize: being first to design, code, organize, document, demonstrate, and improve the shared approach.

**Build A Balanced Team.**
A practical core team includes:
- **Product owner:** owns priority, business representation, roadmap, and trade-offs.
- **Experience/design practitioners:** define component behavior, visual direction, foundations, and shared language.
- **UX engineers:** bridge interaction design, front-end code, rapid prototyping, and implementation constraints.
- **Full-stack engineers:** own integration, tooling, build/distribution infrastructure, and code quality.
- **Content design:** structures documentation, creates examples, and keeps guidance comprehensible.
The UX-engineering bridge matters. The system must be concrete enough to accelerate developers and credible enough for designers to use as a design medium. If it is perceived as only a design artifact or only a framework, it will attract one audience while alienating the other.

**Work With Product Teams Not Above Them.**
The core team establishes the baseline architecture and standards. Product teams exercise those assets in real delivery, expose missing states and constraints, and contribute reusable work back. The system should therefore have two linked backlogs: a platform backlog for foundations and component families, and product backlogs for immediate delivery needs.
Create explicit ownership at the seams. Attend each other’s sprint reviews, hold pre-grooming for cross-team dependencies, and decide who designs, implements, reviews, documents, and releases a contribution. This coordination takes real work; it is the mechanism that turns consumers into co-owners.

**Principle.**
The operating model should make the system a service that improves product delivery—not a central committee that waits for requests or approves every decision.
> Source context: distilled from the user-provided 60:46 seminar *Initiating a Design System*.

File: library/design-systems-and-tokens/UX-643-design-system-product-team-and-operating-model.md

## UX-644 — Design - Token Architecture
- Score 5 · Design Systems & Tokens / Tokens & theming
- Tags: design-system
- Goals: Design a Consistent System at Scale; Improve Readability & Visual Clarity
- Use when: Use when standardizing values across design tools and code.

**Do.**
1. Audit raw values and group them into meaningful scales.
2. Define semantic roles for surfaces, text, borders, actions, feedback, and focus.
3. Build token modes for themes, density, brands, or platform needs only where there is a genuine use case.
4. Export the same canonical token source to design variables and implementation formats.
5. Version changes, document breaking impact, and provide a deprecation/migration path.

**Core Practice.**
Represent recurring values as named tokens instead of scattering raw hex values, pixel values, or font sizes through Figma files and codebases. A token system creates a shared vocabulary, supports theming and platform delivery, and makes a system-wide change safe to reason about.
The most important naming rule: name a value by **purpose**, not by its current appearance. 'color.text.default' can safely map to a different primitive in dark mode; 'blue-600' cannot communicate intent by itself.

**Recommended Model.**
Use a three-level architecture:
1. **Primitive tokens** — raw scales with no product meaning.
  - '[color.blue](http://color.blue/).600 = #2563EB'
  - 'space.4 = 16px'
  - 'font.size.300 = 16px'
2. **Semantic tokens** — intent-level aliases used by products.
  - 'color.action.primary.default → [color.blue](http://color.blue/).600'
  - 'color.text.default → color.neutral.900'
  - 'space.control.inline → space.3'
3. **Component tokens** — component-scoped aliases used only when the component has a justified rule.
  - 'button.primary.background.default → color.action.primary.default'
  - 'button.primary.background.hover → color.action.primary.hover'
Use component tokens sparingly. If several components need the same meaning, promote it to a semantic token rather than duplicating it.

**Worked Example Light And Dark Mode.**
Instead of hardcoding '#FFFFFF' in a card and '#111827' in its text, design and code reference:
- 'color.surface.default'
- 'color.text.default'
- 'color.border.subtle'
**Light mode**
- 'color.surface.default → neutral.0'
- 'color.text.default → neutral.900'
**Dark mode**
- 'color.surface.default → neutral.900'
- 'color.text.default → neutral.50'
The Card component does not change. Only the token mappings do, making the theme change reliable and testable.

**Quality Checks.**
- No raw colour, spacing, type, or radius values appear in component implementation unless documented as an approved exception.
- Names describe intent, state, and role—not only colour or visual shape.
- Every interactive token family specifies default, hover, focus, pressed, disabled, and selected behaviour when applicable.
- Contrast and focus-indicator requirements are tested in every supported mode.
- A token change has an owner, review, version, and downstream impact record.
- A component does not introduce a private token when an existing semantic token expresses the same meaning.

File: library/design-systems-and-tokens/UX-644-design-token-architecture.md

## UX-129 — Three-Layer Design Token Architecture
- Score 4 · Design Systems & Tokens / Token Structure
- Tags: design-system
- Goals: Design a Consistent System at Scale
- Use when: Use when establishing a design system serving multiple products, platforms, or teams.

**Why.** Organize design tokens in three layers: Option Tokens (the full palette — every available color, spacing value, font size with descriptive names like `color-blue-500`), Decision Tokens (semantic usage mappings — `color-background-primary`, `spacing-form-field-gap`), and Component Tokens (component-specific tokens — `button-primary-background`). Each layer builds on the one below, providing the right level of abstraction at each point of use. Option tokens are the raw materials; Decision tokens are the design language; Component tokens are implementation specifics.

**Do.**
- Store tokens as JSON in version control.
- Use Style Dictionary or Theo for token transformation into platform-specific formats (CSS custom properties, Android XML, iOS Swift).
- Keep Option tokens private/internal — only expose Decision tokens to product teams to prevent raw palette misuse.
- Automate token publishing via CI/CD pipeline with semantic versioning for breaking vs. non-breaking changes.
- Document Decision token usage in the design system with explicit examples of correct and incorrect usage.

**Measure.** Efficiency: Time on task, Training time; Effectiveness: Error rate, Task success rate; Satisfaction & Perception: Ease-of-use score, Brand perception; How to measure: Measure the time required to implement a global brand change (e.g., primary color update) before and after adopting a three-layer token architecture. Track the number of visual inconsistency bugs per release as a quality indicator that directly affects user perception of polish and trustworthiness.

Sources: [Martin Fowler — Design Token Architecture](https://martinfowler.com/articles/design-token-based-ui-architecture.html)
Wireframe: https://files.catbox.moe/3nh98h.jpg
File: library/design-systems-and-tokens/UX-129-three-layer-design-token-architecture.md

## UX-130 — Component Variants via Properties (Not Separate Components)
- Score 4 · Design Systems & Tokens / Component Architecture
- Tags: design-system
- Goals: Design a Consistent System at Scale
- Use when: Use when building design system components with multiple visual variations in size, style, and state.

**Why.** Organize component variations — size, style, state — as properties within a single component rather than as separate components. A button should have `size` (sm/md/lg), `variant` (primary/secondary/ghost/danger), and `state` (default/hover/active/disabled/loading) as composition axes rather than being 30 separate components. This reduces design system library size, makes consistent usage easier, enables systematic documentation, and allows all variants to inherit from a single base component.

**Do.**
- Define a variant matrix for each component covering all legitimate combinations.
- Use consistent property naming across all components (`size`, `variant`, `state`, `disabled`, `loading`).
- Document which property combinations are valid and which produce unsupported states.
- Test all critical variants in Storybook or equivalent.
- In code, implement using compound variants or `cva` (class-variance-authority) for CSS-in-JS implementations.

**Measure.** Efficiency: Time on task, Training time; Effectiveness: Error rate, Task success rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track design team efficiency metrics such as time-to-first-prototype and the number of inconsistency bugs filed in QA after implementing component variants via properties. Monitor user-facing error rates tied to inconsistent component behavior across product surfaces.

Sources: [Penpot — Component Variants](https://penpot.app/blog/how-to-use-component-variants-to-scale-your-design-system/)
Wireframe: https://files.catbox.moe/16w0mo.jpg
File: library/design-systems-and-tokens/UX-130-component-variants-via-properties-not-separate-components.md

## UX-131 — Composition Over Configuration in Design Systems
- Score 4 · Design Systems & Tokens / Component Architecture
- Tags: design-system
- Goals: Design a Consistent System at Scale
- Use when: Use when building complex design system components that need to be highly flexible and customizable without forking.

**Why.** Composition over configuration is a software engineering principle — canonized in the SOLID design principles and the influential "Gang of Four" Design Patterns (1994) — that holds that complex behaviors should be assembled from smaller, focused, independently useful parts rather than controlled through an ever-expanding set of configuration options within a monolithic component.

**Measure.** Efficiency: Time on task, Training time; Effectiveness: Error rate, Task success rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track the time design and engineering teams spend configuring versus composing components, and measure the number of inconsistency-related bugs per release as a quality indicator. Monitor end-user error rates on screens built with composable components versus legacy configured components to assess downstream user experience impact.

Sources: [ITNEXT — SOLID Principles for Design Systems](https://itnext.io/improving-design-systems-with-solid-principles-part-i-separation-of-concerns-c14088ed09c3)
Wireframe: https://files.catbox.moe/jvhh3w.jpg
File: library/design-systems-and-tokens/UX-131-composition-over-configuration-in-design-systems.md

## UX-634 — Design - Adoption & Value Metrics
- Score 4 · Design Systems & Tokens / Metrics & adoption
- Tags: design-system, dashboard
- Goals: Design a Consistent System at Scale; Present & Defend Design Decisions
- Use when: Use to show whether the system is improving product delivery and consistency.

**Core Practice.**
Measure whether the design system is improving product delivery, product quality, and organizational adoption. Start with the decisions you need to make—whether to invest, where to fix friction, which components to improve, or how to support a lagging team—then select a small set of signals that can change those decisions.
Combine quantitative product/engineering data with qualitative feedback. Component adoption without satisfaction may indicate coercion; positive feedback without production use may indicate that the system is not integrated into the delivery path.

**Measurement Groups.**
- **Business value:** time to value, cost avoidance, delivery capacity, system-wide change cost, and ROI.
- **Product/system health:** library usage, component reuse, detachment or snowflake rate, visual consistency, accessibility findings, and documentation freshness.
- **Delivery efficiency:** design-to-development time, time to build a flow, review/rework cycles, lint or quality findings, and UI debt.
- **Adoption/community:** products and teams using the system, contribution volume and quality, documentation usage, office-hour participation, and consumer satisfaction.

**Worked Scorecard.**
**Quarterly goal:** make the shared Form Field family the default path for account-creation work.
| Signal | Baseline | Target | Interpretation |
| --- | --- | --- | --- |
| New account flows using the shared family | 2 of 8 | 7 of 8 | Direct adoption across the intended scope |
| Local field implementations | 14 | ≤3 | Detects snowflakes that negate reuse |
| Keyboard/label accessibility defects in QA | 9 per quarter | ≤2 | Quality outcome, not mere usage |
| Median implementation time for a field | 3.5 hours | 1.5 hours | Delivery efficiency |
| Consumer satisfaction | 2.8/5 | ≥4/5 | Ensures the path is useful, not mandatory |
If adoption rises but satisfaction stays low, investigate documentation, API complexity, missing variants, or migration friction—not merely the team’s compliance.

**Metric Design Rules.**
1. Assign a clear owner, scope, source, cadence, and action threshold.
2. Compare before/after only when the work is comparable; avoid claiming causality from unrelated release changes.
3. Segment the data by product, team, platform, and maturity; an overall average can hide a serious adoption gap.
4. Track trend and narrative together. A number needs a reason, a decision, and a next experiment.
5. Retire metrics that do not drive a decision.

**Anti Patterns.**
- Counting total components as success when few solve complete user flows.
- Reporting documentation page views without knowing whether consumers found the correct guidance.
- Using adoption rate as a performance target while making the system harder to extend.
- Claiming ROI without accounting for the time spent creating, migrating, and maintaining the system.

**Quality Checks.**
- Every metric leads to a named decision or experiment.
- Metrics include both leading signals (usage, requests, contribution) and outcomes (quality, speed, satisfaction).
- Data collection is lightweight enough to sustain.
- Dashboards make degradation visible, not only cumulative growth.
- The team regularly shares what changed because of the measurements.

Sources: [Design System Metrics](https://thedesignsystem.guide/metrics) · [The Design System Metrics Collection](https://thedesignsystem.guide/design-system-metrics)
File: library/design-systems-and-tokens/UX-634-design-adoption-and-value-metrics.md

## UX-645 — Design - System Technical Architecture & Distribution
- Score 4 · Design Systems & Tokens / Build, buy, curate, and architecture review
- Tags: design-system, enterprise, workflow
- Goals: Design a Consistent System at Scale; Design for Enterprise & B2B Scale; Reduce Learning Curve for Complex Tools
- Use when: Use when deciding whether to buy, build, or curate a component implementation and when selecting the technical foundation for distribution.

**The Practice.**
Choose the system’s technology according to the organization’s actual products, stacks, delivery constraints, and need for acceleration. Do not let a framework decision precede the interface and interaction decisions the system must uphold.

**Compare Three Strategies Honestly.**
- **Buy everything:** fast to start and useful for a narrowly scoped product, but it imports a vendor’s UX decisions, roadmap, extension limits, and documentation assumptions.
- **Build everything:** maximum control and potentially strong coherence, but slow, capacity-intensive, and likely to recreate already-solved problems.
- **Curate:** own the product-specific foundations, visual language, interaction rules, and essential components; selectively adopt reliable external tools where they fit. This is often the strongest balance for a multi-product organization.

**Technology Agnosticism Is A Delivery Trade Off.**
HTML/CSS guidance can serve heterogeneous platforms, but it may not provide the ready-to-use components that change day-to-day engineering behavior. A broad organization may need both portable design guidance and framework-specific implementations. State this decision explicitly rather than treating “technology-agnostic” as automatically superior.

**Use A Formal Architecture Review Before Scaling The Backlog.**
1. Define the evaluation criteria: adoption/support, component suitability, performance, developer productivity, compatibility, and tooling.
2. Build a small comparable proof in each serious contender.
3. Benchmark and test integration realities, rather than trusting feature lists.
4. Evaluate contributor experience: installation, authoring, testing, and documentation.
5. Record a recommendation and decision rationale.
Resolve this early. Once dozens of components exist, a change in implementation foundation becomes much more expensive and destabilizes confidence in the system.

**Design Implication.**
The system architecture should preserve a single source of truth: the examples used for component development and testing should supply the documentation demonstrations too. Production code and the reference experience should not be independent artifacts.
> Source context: distilled from the user-provided 60:46 seminar *Initiating a Design System*.

File: library/design-systems-and-tokens/UX-645-design-system-technical-architecture-and-distribution.md
