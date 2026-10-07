# Agentic Patterns / Reflection (4)

## AGP-104 — LLM as Judge (LJ)
- Score 4 · Agentic Patterns / Reflection
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Evaluating multiple outputs.
- Avoid when: Subjective creative tasks; Single output generation; Real-time critical decisions; Legal/medical assessments

**Why.** Specific Producer-Critic implementation where an LLM acts as the critic to evaluate outputs. The pattern: use LLMs to evaluate and score other LLM outputs at scale. Automates quality assessment, enables best-of-N selection, scales evaluation. **Key insight:** Specific implementation of Producer-Critic where the critic is an LLM with evaluation prompts

**Do.**
1. **Define Criteria** — Specify evaluation metrics & rubrics
2. **Design Prompt** — Create structured judge prompt
3. **Feed Outputs** — Pass generated content to judge
4. **Get Scores** — Receive ratings/rankings/decisions
5. **Act on Results** — Filter, rank, or select outputs
- Example flow: `outputs[n] → LLM_Judge(criteria) → scores[n] → select_best(scores)`
- **Do:** Use clear, objective evaluation criteria; Implement panel of judges for controversial decisions; Provide rubrics and examples in judge prompts; Use structured output formats (JSON) for scores; Validate judge consistency with known test cases
- **Don't:** Use vague criteria like "good" or "better"; Rely on single judge for critical decisions; Skip calibration of judge against human evaluations; Use same model for generation and judging (bias); Ignore judge uncertainty or confidence scores

**Measure.** Judge Agreement (Correlation with human raters); Consistency (Same judgment on same input); Discrimination (Ability to rank quality differences); False Positive Rate (Good content marked as bad); Coverage (% of edge cases handled correctly); Speed (Evaluations per second); Output Selection: Generate 5 responses → Judge ranks → Return best to user; Quality Gates: Check if generated code/content meets standards before deployment; A/B Testing: Compare model versions by judging outputs on same…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-382.png
Notion: https://app.notion.com/p/LLM-as-Judge-LJ-1dea9aed53448359808c8157f190de69

## AGP-148 — Producer-Critic Pattern (PC)
- Score 4 · Agentic Patterns / Reflection
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: High-quality content generation.
- Avoid when: Simple, straightforward tasks; Real-time applications; Limited computational budget; Well-defined single-pass solutions

**Why.** Architectural pattern where separate producer and critic agents collaborate for quality improvement. The pattern: separate producer and critic agents for unbiased quality improvement. Prevents self-evaluation bias, enables specialized critique, improves output quality. **Key insight:** Producer focuses on creation, Critic provides objective evaluation → Higher quality

**Do.**
1. **Define Roles** — Producer generates, Critic evaluates
2. **Separate Prompts** — Distinct system prompts for each agent
3. **Producer Executes** — Initial content generation
4. **Critic Analyzes** — Structured evaluation & feedback
5. **Iterate** — Producer refines based on critique
- Example flow: `Producer(draft_code) → Critic(review) → Producer(refined_code)`
- **Do:** Use distinct personas (e.g., "Senior Engineer" for critic); Provide structured evaluation criteria to the critic; Separate concerns completely between producer and critic; Consider different critic implementations (LLM, rules, human); Implement stopping conditions to prevent infinite loops
- **Don't:** Use the same prompt/persona for both roles; Let producer see critic instructions (bias prevention); Skip validation of critic feedback quality; Allow unlimited iterations without convergence checks; Ignore computational costs of dual-agent approach

**Measure.** Quality Delta (Improvement from v1 to final); Critique Precision (Valid issues / Total critiques); Convergence Rate (Iterations to acceptable quality); Cost Efficiency (Quality gain / Token cost); Bias Reduction (Objective evaluation score); Error Detection (% of actual errors caught); Code Generation: Developer writes → Senior Engineer reviews → Developer refines; Content Creation: Writer drafts → Editor critiques → Writer polishes; Research Analysis: Analyst presents → Peer reviews → Analyst…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-383.png
Notion: https://app.notion.com/p/Producer-Critic-Pattern-PC-bb7a9aed5344834c958c813834ca68a3

## AGP-165 — Self-Critique (SC)
- Score 4 · Agentic Patterns / Reflection
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: High-stakes content generation.
- Avoid when: Real-time applications; Simple/straightforward tasks; Limited compute budget; Subjective quality domains

**Why.** Agent evaluates its own outputs through systematic analysis and generates targeted improvements. The pattern: single agent evaluates and iteratively improves its own outputs. Catches errors, improves quality, ensures completeness without external validation. **Key insight:** Generate → Critique → Revise → Repeat until quality threshold met

**Do.**
1. **Generate** — Initial response to task
2. **Critique** — Systematic quality evaluation
3. **Identify** — Specific issues & improvements
4. **Revise** — Address identified weaknesses
5. **Iterate** — Repeat until quality threshold
- Example flow: `generate(task) → critique(output) → revise(issues) → validate() → final_output`
- **Do:** Define clear, objective critique criteria for the task; Use structured evaluation templates (accuracy, completeness, clarity); Set maximum iteration limits (typically 2-3 cycles); Track quality metrics to measure improvement; Document critique reasoning for transparency
- **Don't:** Allow infinite revision loops without stopping criteria; Use vague criteria like "make it better"; Over-critique acceptable responses; Ignore computational cost vs quality gain tradeoffs; Apply same critique template to all task types

**Measure.** Quality Gain (% improvement from v1 to final); Iteration Count (Average cycles to convergence); Critique Accuracy (Valid issues / Total critiques); Token Efficiency (Quality gain / Extra tokens); Time to Converge (Total processing time); Error Reduction (% decrease in mistakes); Academic Writing: Draft → Critique logic/evidence → Strengthen arguments → Polish; Code Generation: Initial code → Identify bugs/inefficiencies → Fix → Optimize; Technical Docs: First version → Check…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-385.png
Notion: https://app.notion.com/p/Self-Critique-SC-387a9aed534483c8a0888100ce7bfb31

## AGP-154 — Reflexion (RX)
- Score 3 · Agentic Patterns / Reflection
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Multi-step reasoning tasks.
- Avoid when: Single-shot tasks; Time-critical applications; Simple Q&A; Deterministic problems

**Why.** Agents learn from experience through verbal self-reflection and episodic memory. The pattern: agents learn from experience through verbal self-reflection. Converts failures into linguistic insights, enabling learning without fine-tuning. **Key insight:** Actor → Evaluator → Self-Reflection → Memory → Improved Performance

**Do.**
1. **Actor Executes** — Generate actions/text for task
2. **Environment Responds** — Get feedback/results
3. **Evaluator Scores** — Assess performance objectively
4. **Self-Reflect** — Generate verbal reinforcement
5. **Update Memory** — Store reflection for next trial
- Example flow: `Actor(task) → Result → Evaluate → Reflect(verbal) → Memory → Actor(improved)`
- **Do:** Convert feedback into actionable linguistic hints; Maintain episodic memory of past reflections; Use specific, concrete reflection prompts; Implement clear evaluation metrics; Limit reflection depth to avoid overthinking
- **Don't:** Store raw trajectories without reflection; Use vague reflections like "do better"; Skip environment feedback integration; Allow unlimited reflection cycles; Ignore memory constraints in long tasks

**Measure.** Success Rate (Task completion over trials); Learning Curve (Performance improvement rate); Reflection Quality (Actionability of insights); Memory Efficiency (Relevant recall vs storage); Convergence Speed (Trials to optimal performance); Generalization (Transfer to similar tasks); Code Generation: Write → Test → Reflect on errors → Fix bugs → Improve; Game Playing: Move → Observe → Evaluate → Reflect on strategy → Adapt; Problem Solving: Attempt → Check → Analyze failure → Learn → Retry…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-384.png
Notion: https://app.notion.com/p/Reflexion-RX-198a9aed534483099380816ec0e438f4
