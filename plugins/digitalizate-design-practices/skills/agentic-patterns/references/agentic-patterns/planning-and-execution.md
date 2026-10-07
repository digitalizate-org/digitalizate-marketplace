# Agentic Patterns / Planning & Execution (4)

## AGP-099 — Intelligent Goal Decomposition (IGD)
- Score 4 · Agentic Patterns / Planning & Execution
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex multi-workstream programs.
- Avoid when: Trivial single-step tasks; Ill-defined goals without stakeholder alignment; Hard real-time systems with microsecond budgets; Safety-critical actions requiring formal verification; Rapidly changing requirements without stability; Simple linear processes without dependencies

**Why.** Systematic breakdown of complex objectives into achievable, measurable sub-goals with clear success criteria. The pattern: systematic breakdown of complex objectives into achievable, measurable sub-goals with clear success criteria. Transforms vague ambitions into executable plans, enables progress tracking, and reduces overwhelming complexity through structured decomposition. **Key insight:** SMART goals + dependency mapping + impact prioritization + progress monitoring = systematic achievement

**Do.**
1. **Define** — Set SMART goal with scope, constraints, and success criteria
2. **Decompose** — Break into sub-goals and validate coverage
3. **Map** — Create dependency graph (DAG) and identify critical path
4. **Prioritize** — Rank by impact × urgency × feasibility
5. **Execute** — Monitor progress and adapt based on feedback
- Example flow: `improve_model_performance → [data_quality, architecture, training, validation] → executable_tasks`
- **Do:** Write SMART goals with explicit scope and success criteria; Create dependency graph (DAG) to identify critical path; Define acceptance criteria and quality gates for each sub-goal; Use evidence-driven prioritization (impact × urgency × feasibility); Implement progress tracking with milestone checkpoints; Separate LLM ideation from symbolic validation/scheduling; Version goal trees and reuse proven templates; Track risks and maintain mitigation tasks alongside delivery
- **Don't:** Over-decompose simple goals (planning overhead vs benefit); Ignore dependencies leading to plan invalidation downstream; Create unbounded iterations without stop criteria; Focus on activity metrics instead of outcome measurements; Skip stakeholder alignment on goal definitions; Use for safety-critical actions without human review

**Measure.** Goal Attainment Rate (% of sub-goals completed successfully); Timeline Variance (Actual vs planned completion time); Critical Path Efficiency (On-time milestone delivery rate); Decomposition Quality (Coverage validation and peer review scores); Resource Utilization (Actual vs estimated effort and cost); Replanning Frequency (Number of plan adjustments per goal); Parallel Work Ratio (% tasks executed concurrently vs sequentially); AI Model Development: "Improve accuracy 87%→95%" → Data quality +…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-389.png
File: library/agentic-patterns/AGP-099-intelligent-goal-decomposition-igd.md

## AGP-182 — Task Management & Orchestration (TMO)
- Score 4 · Agentic Patterns / Planning & Execution
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex multi-step workflows with dependencies.
- Avoid when: Simple linear sequences without dependencies; One-time tasks without repetitive patterns; Real-time systems where task overhead is prohibitive; Highly predictable workflows without variability; Resource-constrained environments; Tasks that are better handled as atomic operations

**Why.** Systematic task decomposition, progress tracking, and adaptive workflow management for complex multi-step processes. The pattern: systematic task decomposition, progress tracking, and adaptive workflow management for complex multi-step processes. Reduces cognitive load, ensures progress visibility, prevents work duplication, and enables adaptive coordination in complex workflows. **Key insight:** Task registry + state tracking + dependency management + adaptive prioritization = organized execution

**Do.**
1. **Initialize** — Create task registry with state tracking schema
2. **Decompose** — Break down complex objectives into actionable tasks
3. **Orchestrate** — Manage dependencies, priorities, and execution flow
4. **Track** — Monitor progress and update task states dynamically
5. **Adapt** — Replan and reprioritize based on progress and changes
- Example flow: `task_registry.init() → decompose_goal() → orchestrate_workflow() → track_progress() → adapt_plan()`
- **Do:** Use clear task state schema (pending/in_progress/completed/blocked); Implement dependency tracking and automatic blocking/unblocking; Design adaptive priority scoring based on deadlines and impact; Track task completion metrics and identify bottlenecks; Implement real-time progress visibility and status updates; Use atomic task operations to prevent state corruption; Design for parallel task execution where possible; Implement rollback mechanisms for failed task sequences
- **Don't:** Create overly granular tasks that increase management overhead; Ignore task dependencies leading to execution deadlocks; Use static priorities without considering changing contexts; Skip validation of task completion criteria; Allow task state inconsistencies across concurrent operations; Forget to implement timeout handling for stuck tasks

**Measure.** Task Completion Rate (% tasks completed vs created over time); Cycle Time (Average time from task creation to completion); Dependency Resolution (% dependency conflicts resolved automatically); Bottleneck Detection (Time to identify and resolve workflow bottlenecks); Priority Accuracy (% high-priority tasks completed on schedule); Parallel Efficiency (% tasks executed in parallel vs sequential); Adaptive Replanning (Success rate of dynamic plan adjustments); Software Development: Sprint…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-392.png
File: library/agentic-patterns/AGP-182-task-management-and-orchestration-tmo.md

## AGP-090 — Hierarchical Task Network (HTN) Planning
- Score 3 · Agentic Patterns / Planning & Execution
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex multi-step workflows.
- Avoid when: Simple linear task sequences; Unknown or rapidly changing domains; Real-time reactive behaviors; No clear task hierarchy; Purely data-driven approaches needed; Single-shot optimization problems

**Why.** Automated planning approach that decomposes complex tasks into hierarchically structured networks of simpler tasks using domain knowledge. The pattern: hierarchical decomposition of complex tasks into manageable sub-tasks using domain knowledge. Enables efficient planning through abstraction, reusable expertise, and human-interpretable solutions. **Key insight:** Tasks (compound→primitive) + Methods (how to decompose) + Conditions (when to apply) = Hierarchical Plans

**Do.**
1. **Define Domain** — Tasks (compound/primitive), methods, conditions
2. **Create Methods** — Decomposition rules: when & how to break tasks
3. **Build Network** — Hierarchical task structure with constraints
4. **Plan & Execute** — Decompose top-level goal → primitive actions
5. **Monitor & Adapt** — Replan if conditions change or methods fail
- Example flow: `analyze_market → [gather_data, process_info, generate_report] → primitive_actions`
- **Do:** Encode domain expertise in methods and conditions; Use clear task hierarchies with proper abstraction levels; Define preconditions and effects for each method; Implement backtracking when decomposition fails; Cache successful decomposition patterns; Design reusable method libraries for domains
- **Don't:** Create overly deep hierarchies (>5-6 levels); Ignore method ordering constraints and dependencies; Use HTN for simple linear task sequences; Hard-code solutions without conditional methods; Skip validation of method preconditions

**Measure.** Plan Success Rate (% plans that execute successfully); Decomposition Depth (Average levels in task hierarchy); Planning Time (Time to generate executable plan); Method Reuse Rate (% methods reused across plans); Backtrack Frequency (% plans requiring backtracking); Domain Coverage (% domain tasks plannable); Plan Optimality (Quality vs optimal solution); Execution Efficiency (Primitive actions per goal achieved); Autonomous Research Agents: Literature review → data extraction → analysis →…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-390.png
File: library/agentic-patterns/AGP-090-hierarchical-task-network-htn-planning.md

## AGP-125 — Meta-Reasoning (MR)
- Score 3 · Agentic Patterns / Planning & Execution
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex multi-domain problems.
- Avoid when: Simple, well-defined tasks; Real-time low-latency requirements; Single optimal strategy exists; Limited computational resources; Deterministic environments; Basic query-response systems

**Why.** Higher-order reasoning about reasoning processes, including strategy selection and monitoring. The pattern: aI system that monitors and optimizes its own reasoning processes. Enables adaptive intelligence, strategy selection, and self-improvement in complex domains. **Key insight:** Three-layer architecture: Object-level execution → Monitor layer → Meta-reasoning layer for optimal strategy selection

**Do.**
1. **Monitor Layer** — Track performance, resources, decision quality
2. **Evaluate Strategy** — Assess current reasoning approach effectiveness
3. **Select Method** — Choose optimal reasoning strategy for task
4. **Execute & Monitor** — Apply strategy while tracking progress
5. **Adapt & Learn** — Switch strategies if needed, update preferences
- Example flow: `detect_problem → assess_confidence → select_strategy → execute → monitor → adapt`
- **Do:** Implement three-layer architecture: Object → Monitor → Meta; Track confidence scores and decision quality metrics; Use strategy selection based on task characteristics; Monitor resource usage and computational efficiency; Build strategy performance history for learning; Implement graceful failure handling and recovery
- **Don't:** Add meta-reasoning to every simple task (overhead); Ignore computational cost of meta-reasoning layer; Use generic confidence without domain calibration; Skip strategy switching when clearly underperforming; Implement without clear meta-cognitive questions

**Measure.** Strategy Selection Accuracy (% optimal strategy chosen); Task Completion Rate (% tasks completed successfully); Decision Quality Score (Weighted outcome quality (0-1)); Adaptation Speed (Time to switch strategies); Resource Efficiency (Performance/computational_cost); Confidence Calibration (Predicted vs actual success rate); Learning Rate (Strategy improvement over time); Meta-Reasoning Overhead (% additional computation vs direct); Autonomous Systems: Self-driving cars adapting to…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-391.png
File: library/agentic-patterns/AGP-125-meta-reasoning-mr.md
