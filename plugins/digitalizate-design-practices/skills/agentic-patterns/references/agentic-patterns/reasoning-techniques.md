# Agentic Patterns / Reasoning Techniques (15)

## AGP-022 — Analogical Reasoning (AR)
- Score 4 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Novel problems with existing similar solutions.
- Avoid when: Highly domain-specific technical problems; When direct methods are more efficient; Problems requiring precise quantitative analysis; When no meaningful analogies exist; Real-time critical decision making

**Why.** Solves problems by finding and applying similar patterns from known domains. The pattern: reasoning by finding structural similarities between familiar and unfamiliar domains to transfer knowledge and solutions. Leverages existing knowledge to solve new problems by identifying patterns and relationships that transcend specific domains. **Key insight:** Identify analogous source → Map structural relationships → Transfer insights → Adapt to target context → Validate

**Do.**
1. **Source Identification** — Find relevant analogous situations or domains
2. **Structural Mapping** — Identify correspondences between source and target
3. **Knowledge Transfer** — Apply insights from source to target problem
4. **Adaptation** — Modify transferred knowledge for target context
5. **Validation** — Verify analogy validity and solution quality
- Example flow: `Target Problem → Find Similar Case → Map Structure → Transfer Solution → Adapt & Validate`
- **Do:** Focus on structural similarities rather than surface features; Use multiple analogies to strengthen reasoning; Explicitly map relationships between source and target; Consider disanalogies and limitations of the mapping; Validate transferred knowledge in target domain
- **Don't:** Rely solely on superficial similarities; Use weak or irrelevant analogies without justification; Transfer knowledge without adapting to context; Ignore when analogies break down or fail; Over-extend analogies beyond their valid scope

**Measure.** Analogy Quality (Structural similarity and relevance to target problem); Mapping Accuracy (Correctness of source-target correspondences); Transfer Success (Effectiveness of knowledge application); Solution Validity (Correctness in target domain after adaptation); Creative Insight (Novel solutions generated through analogical thinking); Reasoning Efficiency (Speed of solution discovery vs direct methods); Scientific Discovery: Darwin's evolution theory inspired by Malthus population theory →…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-358.png
File: library/agentic-patterns/AGP-022-analogical-reasoning-ar.md

## AGP-028 — Chain-of-Thought (CoT)
- Score 4 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex mathematical problems.
- Avoid when: Simple factual questions; Real-time/low-latency needs; Creative/subjective tasks; Tight token budgets; When implicit reasoning works

**Why.** Breaks down complex problems into step-by-step intermediate reasoning steps. The pattern: generate explicit step-by-step reasoning before final answer. Makes reasoning transparent, improves accuracy on complex problems, enables error detection. **Key insight:** Add 'Let's think step by step' trigger + numbered reasoning steps → 2-5x accuracy gain

**Do.**
1. **Prompt Setup** — Add "Let's think step by step" trigger
2. **Examples** — Provide 2-3 reasoning examples
3. **Structure** — Number each reasoning step clearly
4. **Verify** — Check logical flow & calculations
5. **Conclude** — State final answer explicitly
- Example flow: `Problem → Step 1: [reasoning] → Step 2: [reasoning] → Answer: [result]`
- **Do:** Use consistent step numbering (Step 1, Step 2, etc.); Include verification steps for calculations; Provide diverse few-shot examples; Break complex problems into sub-problems; Use clear reasoning triggers ("Let's think...")
- **Don't:** Skip intermediate steps for "obvious" calculations; Use CoT for simple, direct questions; Ignore token cost increase (2-5x overhead); Make reasoning steps too verbose or redundant; Forget to validate logical consistency

**Measure.** Reasoning Accuracy (Correct final answers vs baseline); Step Correctness (Valid intermediate reasoning steps); Token Efficiency (Accuracy gain per token increase); Interpretability (Human rating of reasoning clarity); Consistency Rate (Agreement across multiple chains); Error Attribution (Ability to identify wrong steps); Math Word Problems: "If a train travels 60 mph for 2 hours..."

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-361.png
File: library/agentic-patterns/AGP-028-chain-of-thought-cot.md

## AGP-109 — Least-to-Most Prompting (LtM)
- Score 4 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex problems with clear hierarchical structure.
- Avoid when: Simple problems solvable in one step; Highly interconnected problems without clear decomposition; Real-time applications requiring immediate answers; Problems where context accumulation hurts performance; When Chain-of-Thought is sufficient

**Why.** Progressive problem decomposition from simple to complex components. The pattern: problem decomposition strategy that solves complex tasks by breaking them into simpler subproblems solved sequentially. Enables tackling complex problems by building solutions incrementally from simple to complex components. **Key insight:** Decompose complex problem → Solve simplest first → Use previous solutions → Build up to final answer

**Do.**
1. **Problem Decomposition** — Break complex problem into simpler subproblems
2. **Sequential Solving** — Solve subproblems from simplest to most complex
3. **Solution Building** — Use previous solutions to inform next steps
4. **Context Accumulation** — Maintain growing context of solved parts
5. **Final Integration** — Combine all solutions into complete answer
- Example flow: `Complex Problem → [Sub1, Sub2, Sub3] → Solve Sub1 → Use Sub1 in Sub2 → Use Sub1+Sub2 in Sub3 → Final Answer`
- **Do:** Decompose into truly independent subproblems first; Solve subproblems in strict order of dependency; Explicitly pass previous solutions to next steps; Validate each subproblem solution before proceeding; Use clear problem reduction prompts and examples
- **Don't:** Skip the decomposition step (jump to complex reasoning); Solve subproblems out of logical dependency order; Lose context between subproblem solving steps; Use when problems cannot be meaningfully decomposed; Over-decompose into trivial or atomic steps

**Measure.** Decomposition Quality (Appropriateness and completeness of problem breakdown); Subproblem Accuracy (Correctness of individual subproblem solutions); Context Preservation (Effective use of previous solutions in later steps); Final Solution Quality (Accuracy vs direct problem solving approaches); Efficiency Gain (Performance improvement over standard prompting); Generalization (Success across different problem types and domains); Mathematical Problem Solving: Complex equation → Break into steps →…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-364.png
File: library/agentic-patterns/AGP-109-least-to-most-prompting-ltm.md

## AGP-175 — Skeleton of Thoughts (SoT)
- Score 4 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex multi-part responses or analyses.
- Avoid when: Simple, single-concept questions; Highly sequential reasoning tasks; When parallel processing is not beneficial; Real-time applications requiring immediate response; Problems requiring deep, interconnected reasoning

**Why.** Creates structured yet adaptable reasoning frameworks that can be filled with specific details. The pattern: structured reasoning that creates a high-level skeleton then expands each component in parallel for efficient processing. Accelerates complex response generation through parallel development while maintaining logical structure and coherence. **Key insight:** Create skeleton structure → Expand points in parallel → Integrate sections → Ensure consistency → Final synthesis

**Do.**
1. **Skeleton Generation** — Create high-level structure with key points
2. **Parallel Expansion** — Develop each skeleton point independently
3. **Content Integration** — Combine expanded sections into coherent whole
4. **Consistency Check** — Ensure logical flow and coherence
5. **Final Synthesis** — Polish and refine complete response
- Example flow: `Problem → [Point 1, Point 2, Point 3] → Expand each in parallel → Integrate → Final answer`
- **Do:** Create comprehensive skeleton covering all key aspects; Ensure skeleton points are logically ordered; Use parallel processing to expand multiple points; Maintain consistency across parallel expansions; Validate final integration for coherence
- **Don't:** Create skeleton without clear logical structure; Expand points sequentially when parallel is possible; Ignore contradictions between parallel sections; Skip integration step (fragmented response); Over-decompose into trivial skeleton points

**Measure.** Skeleton Completeness (Coverage of all essential aspects in structure); Parallel Efficiency (Speed improvement from concurrent expansion); Integration Quality (Coherence and flow of combined sections); Consistency Score (Logical alignment across parallel developments); Structure Clarity (Logical organization and progression); Response Completeness (Thoroughness of final synthesized answer); Essay Writing: Outline main arguments → Develop each argument in parallel → Integrate into coherent…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-368.png
File: library/agentic-patterns/AGP-175-skeleton-of-thoughts-sot.md

## AGP-178 — Step-Back Prompting (SBP)
- Score 4 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex problems requiring foundational knowledge.
- Avoid when: Simple factual queries; Well-defined procedural tasks; When direct knowledge access is sufficient; Time-sensitive quick decisions; Problems with obvious solution paths

**Why.** Abstracts to higher-level principles before tackling specific problems. The pattern: reasoning strategy that steps back to broader principles before tackling specific problems. Improves reasoning by accessing relevant foundational knowledge and applying general principles to specific cases. **Key insight:** Specific problem → Ask broader questions → Answer general principles → Apply to specific → Enhanced solution

**Do.**
1. **Original Question** — Present the specific problem to solve
2. **Step Back** — Ask broader, more general questions
3. **High-Level Reasoning** — Answer abstract principles first
4. **Apply Principles** — Use general knowledge for specific problem
5. **Final Answer** — Solve original question with enhanced context
- Example flow: `Specific Q → "What are the general principles?" → Answer principles → Apply to specific Q → Solution`
- **Do:** Ask genuinely broader conceptual questions; Connect general principles to specific instances; Use step-back questions to access relevant knowledge; Ensure step-back questions are answerable; Bridge abstract reasoning back to concrete problem
- **Don't:** Make step-back questions too similar to original; Step back so far that context is lost; Skip the connection between general and specific; Use when direct reasoning is more efficient; Generate step-back questions without clear purpose

**Measure.** Question Quality (Appropriateness and relevance of step-back questions); Knowledge Activation (Effectiveness in accessing relevant principles); Principle-Application Bridge (Quality of connection between abstract and specific); Solution Improvement (Enhanced accuracy vs direct reasoning); Reasoning Depth (Richness of conceptual foundation provided); Transfer Efficiency (Speed of applying general knowledge to specific case); Physics Problem: "What's the acceleration?" → "What are Newton's laws?"

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-369.png
File: library/agentic-patterns/AGP-178-step-back-prompting-sbp.md

## AGP-007 — Abductive Reasoning (ABR)
- Score 3 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Diagnosing problems from symptoms.
- Avoid when: When deductive proof is required; Statistical inference problems; Well-understood routine procedures; When complete information is available; Time-critical decisions requiring speed

**Why.** Infers the most likely explanation from incomplete observations. The pattern: inference to the best explanation by generating and evaluating hypotheses that explain observed phenomena. Enables discovery and explanation by finding the most plausible account of surprising or puzzling observations. **Key insight:** Observe surprising facts → Generate explanations → Rank by plausibility → Select best → Test predictions

**Do.**
1. **Observation** — Identify surprising facts or phenomena to explain
2. **Hypothesis Generation** — Create plausible explanations for observations
3. **Plausibility Ranking** — Evaluate explanations by simplicity & likelihood
4. **Best Explanation** — Select most credible hypothesis
5. **Prediction Testing** — Generate testable predictions from hypothesis
- Example flow: `Surprising fact → Multiple explanations → Rank by plausibility → Best explanation → Test predictions`
- **Do:** Generate multiple competing hypotheses; Apply Occam's razor (prefer simpler explanations); Consider prior knowledge and domain constraints; Evaluate explanatory power and coherence; Generate testable predictions from hypotheses
- **Don't:** Stop at the first plausible explanation; Ignore contradictory evidence or anomalies; Confuse abduction with deduction or induction; Accept explanations without considering alternatives; Overly complex explanations when simple ones suffice

**Measure.** Explanation Quality (Coherence and completeness of generated hypotheses); Hypothesis Diversity (Range of alternative explanations considered); Plausibility Ranking (Accuracy of explanation preference ordering); Predictive Power (Quality of testable predictions from hypotheses); Parsimony Balance (Optimal trade-off between simplicity and completeness); Evidence Integration (Effective use of available information); Medical Diagnosis: Patient symptoms → Multiple disease hypotheses → Most likely…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-357.png
File: library/agentic-patterns/AGP-007-abductive-reasoning-abr.md

## AGP-025 — Buffer of Thoughts (BoT)
- Score 3 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Problems requiring creative reasoning approaches.
- Avoid when: Simple, one-off reasoning tasks; Domains with well-established procedures; Memory-constrained environments; Real-time applications requiring immediate response; Problems with no reusable reasoning patterns

**Why.** Maintains a dynamic buffer of reusable thought patterns for analogical reasoning. The pattern: thought-augmented reasoning that collects diverse approaches in a buffer, distills patterns, and creates reusable templates. Builds reasoning expertise over time by learning from diverse thought processes and creating reusable knowledge structures. **Key insight:** Generate diverse thoughts → Buffer storage → Distill patterns → Create templates → Apply to new problems

**Do.**
1. **Thought Collection** — Generate diverse reasoning thoughts & approaches
2. **Buffer Storage** — Store thoughts in structured buffer memory
3. **Distillation** — Extract key insights and patterns from buffer
4. **Template Creation** — Create reusable reasoning templates
5. **Application** — Apply distilled knowledge to new problems
- Example flow: `Problem → Generate many thoughts → Store in buffer → Distill patterns → Create templates → Apply`
- **Do:** Encourage diverse and creative thought generation; Implement efficient buffer storage and retrieval; Focus distillation on actionable insights; Create templates that generalize across problems; Update buffer with new successful reasoning patterns
- **Don't:** Fill buffer with redundant or low-quality thoughts; Skip the distillation step (raw thoughts ≠ knowledge); Create overly specific templates without generalization; Ignore buffer capacity limits (memory overflow); Use stale templates without updating from experience

**Measure.** Buffer of Thoughts ((); BoT ()); Maintains a dynamic buffer of reusable thought patterns for analogical reasoning (Complexity:); high (Reasoning Techniques); Overview (Flow Visualization); Interactive Demo (Code Playground); Overview (Flow); Demo (Code); 🎯 30-Second Overview (Pattern:); Thought-augmented reasoning that collects diverse approaches in a buffer, distills patterns, and creates reusable templates (Why:); Builds reasoning expertise over time by learning from diverse thought processes…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-359.png
File: library/agentic-patterns/AGP-025-buffer-of-thoughts-bot.md

## AGP-026 — Causal Reasoning (CR)
- Score 3 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Understanding cause-effect relationships.
- Avoid when: Purely descriptive or classificatory tasks; When only correlational data is available; Simple pattern recognition problems; When causal mechanisms are unknowable; Real-time systems requiring immediate responses

**Why.** Establishes and follows explicit cause-and-effect relationships. The pattern: reasoning about cause-effect relationships, mechanisms, and interventions to understand how changes produce outcomes. Enables prediction, explanation, and decision-making by understanding the underlying causal structure of systems. **Key insight:** Identify causes → Understand mechanisms → Control confounds → Predict interventions → Analyze counterfactuals

**Do.**
1. **Causal Model** — Identify variables and potential causal relationships
2. **Mechanism Analysis** — Understand how causes produce effects
3. **Confound Control** — Account for alternative explanations
4. **Intervention Reasoning** — Predict outcomes of hypothetical actions
5. **Counterfactual Analysis** — Consider what would happen if conditions changed
- Example flow: `X causes Y → Mechanism: X→M→Y → Control Z → Predict: do(X) → Counterfact: X=0?`
- **Do:** Distinguish correlation from causation explicitly; Identify plausible causal mechanisms and pathways; Consider confounding variables and alternative explanations; Use interventional thinking (what if we change X?); Apply temporal precedence (causes precede effects)
- **Don't:** Assume correlation implies causation; Ignore potential confounding factors; Use post-hoc reasoning without mechanism; Make causal claims without sufficient evidence; Oversimplify complex causal systems

**Measure.** Causal Validity (Accuracy of identified cause-effect relationships); Mechanism Plausibility (Reasonableness of proposed causal pathways); Confound Detection (Identification of alternative explanations); Intervention Prediction (Accuracy of predicted outcomes from actions); Counterfactual Reasoning (Quality of what-if scenario analysis); Evidence Integration (Synthesis of multiple sources for causal claims); Medical Diagnosis: Symptoms → Disease mechanism → Treatment intervention → Predicted…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-360.png
File: library/agentic-patterns/AGP-026-causal-reasoning-cr.md

## AGP-078 — Forest-of-Thoughts (FoT)
- Score 3 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: High-stakes decisions requiring robustness.
- Avoid when: Simple problems with clear solutions; Tight computational budgets; Real-time/low-latency requirements; When Tree-of-Thought suffices; Highly constrained solution spaces

**Why.** Generates multiple reasoning trees to enhance diversity and robustness. The pattern: generate multiple independent reasoning trees to enhance diversity and robustness. Provides error tolerance, solution diversity, and cross-validation for complex problems. **Key insight:** Multiple trees → Different strategies → Cross-validate → Robust consensus or best path

**Do.**
1. **Generate Trees** — Create multiple independent reasoning trees
2. **Diversify** — Ensure different starting points & strategies
3. **Evaluate** — Score each tree for quality & validity
4. **Cross-Validate** — Compare solutions across trees
5. **Select Best** — Choose optimal path or consensus
- Example flow: `Problem → [Tree1: Strategy A, Tree2: Strategy B, Tree3: Strategy C] → Evaluate → Best Solution`
- **Do:** Generate trees with different starting assumptions; Use diverse reasoning strategies per tree; Implement robust cross-tree validation; Set limits on forest size (typically 3-7 trees); Cache tree results to avoid redundant computation
- **Don't:** Generate too many similar trees (redundancy); Skip diversity checks between trees; Allow unlimited tree generation (cost explosion); Use same evaluation criteria for all trees; Ignore computational overhead vs single ToT

**Measure.** Solution Diversity (Unique approaches across trees); Consensus Rate (Agreement between tree solutions); Error Tolerance (Robustness to individual tree failures); Computational Efficiency (Quality improvement per additional tree); Coverage Completeness (Solution space exploration breadth); Best Path Selection (Accuracy of optimal tree identification); Investment Analysis: Tree1(Technical), Tree2(Fundamental), Tree3(Sentiment) → Consensus decision; Medical Diagnosis: Multiple specialist…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-362.png
File: library/agentic-patterns/AGP-078-forest-of-thoughts-fot.md

## AGP-084 — Graph-of-Thought (GoT)
- Score 3 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex problems with interdependent sub-goals.
- Avoid when: Simple linear reasoning tasks; Strict latency/cost constraints; Domains without reliable evaluators; When Tree-of-Thought suffices; Real-time applications

**Why.** Non-linear reasoning with thoughts as nodes and dependencies as edges. The pattern: non-linear reasoning network with nodes (thoughts) and edges (dependencies) enabling cross-path synthesis. Supports complex interdependent problems through backtracking, merging, and conflict resolution. **Key insight:** Thoughts as graph nodes → Explicit dependencies → Cross-path merging → Coherent synthesis

**Do.**
1. **Graph Init** — Create nodes (thoughts) & edges (dependencies)
2. **Expand** — Generate successor thoughts from frontier
3. **Evaluate** — Score nodes/subgraphs with evaluators
4. **Merge** — Connect compatible paths, resolve conflicts
5. **Distill** — Extract coherent solution from best subgraph
- Example flow: `Problem → [Node A ← Node B → Node C] → Merge paths → Synthesize solution`
- **Do:** Use explicit dependency tracking between thoughts; Implement robust cycle detection & deduplication; Design evaluators for scoring subgraphs not just nodes; Cache intermediate results & maintain visited states; Enable cross-path synthesis & conflict resolution
- **Don't:** Allow unlimited graph expansion (combinatorial explosion); Merge incompatible branches without conflict checks; Skip thought granularity planning (too coarse/fine); Use weak evaluators that mis-rank solution paths; Ignore token costs from graph exploration overhead

**Measure.** Solution Quality (Accuracy vs linear/tree baselines); Graph Efficiency (Useful nodes / total explored nodes); Synthesis Quality (Coherence of merged solution paths); Dependency Accuracy (Correctness of thought relationships); Exploration Cost (Tokens per node + evaluation overhead); Convergence Rate (Steps to reach stable solution); Research Analysis: Node[Theory A] ← Node[Evidence 1] → Node[Synthesis] ← Node[Theory B]; Strategic Planning: Connect market analysis → product strategy → resource…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-363.png
File: library/agentic-patterns/AGP-084-graph-of-thought-got.md

## AGP-126 — Metacognitive Monitoring (MCM)
- Score 3 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: High-stakes decisions requiring reliability.
- Avoid when: Simple, well-defined problems; Highly time-sensitive applications; When reasoning patterns are stable; Resource-constrained environments; Routine/repetitive tasks

**Why.** Self-awareness and monitoring of reasoning quality and confidence. The pattern: continuous self-awareness and strategy adjustment during reasoning processes. Enables adaptive problem-solving through confidence tracking, error detection, and method switching. **Key insight:** Monitor reasoning quality → Detect low confidence/errors → Adapt strategy → Validate improvements

**Do.**
1. **Self-Awareness** — Monitor reasoning process & confidence levels
2. **Strategy Check** — Evaluate current approach effectiveness
3. **Error Detection** — Identify potential mistakes or gaps
4. **Adapt Method** — Switch strategies when needed
5. **Validate Result** — Cross-check solution quality
- Example flow: `Problem → Monitor confidence → "Low confidence, switch strategy" → New approach → Validate`
- **Do:** Continuously assess reasoning confidence levels; Implement explicit strategy evaluation checkpoints; Use calibrated confidence scoring (0-100%); Build error detection patterns for common mistakes; Create strategy switching triggers and fallbacks
- **Don't:** Monitor without acting on low confidence signals; Use vague confidence assessments ("maybe", "probably"); Skip validation when switching reasoning strategies; Ignore consistent pattern of reasoning failures; Over-monitor simple tasks (cognitive overhead)

**Measure.** Confidence Calibration (Alignment between confidence and actual accuracy); Error Detection Rate (Percentage of mistakes caught before final answer); Strategy Switch Success (Improvement after method adaptation); Monitoring Overhead (Additional computational cost vs benefit); Self-Correction Accuracy (Quality of reasoning adjustments); Adaptation Speed (Time to recognize and change ineffective strategies); Medical Diagnosis: Monitor confidence → "Low confidence on rare disease" → Switch to…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-365.png
File: library/agentic-patterns/AGP-126-metacognitive-monitoring-mcm.md

## AGP-152 — ReAct
- Score 3 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Tasks requiring external data/tools.
- Avoid when: Simple knowledge-based questions; Tasks solvable with pure reasoning; High-latency sensitive applications; When tools are unreliable/unavailable; Static content generation

**Why.** Combines reasoning with acting through external tool use. The pattern: interleaved Reasoning and Acting through iterative Thought → Action → Observation cycles. Enables dynamic problem-solving with real-time information and tool integration. **Key insight:** Think before acting → Execute tools → Observe results → Reason about next step

**Do.**
1. **Think** — Analyze problem & plan approach
2. **Act** — Execute tool/function call
3. **Observe** — Process action results
4. **Reason** — Evaluate & plan next step
5. **Loop** — Repeat until goal achieved
- Example flow: `Thought → search("weather NYC") → Observation: "72°F sunny" → Thought → Done`
- **Do:** Clearly separate Thought and Action phases; Use structured action formats (function calls); Process all observations before next reasoning; Implement proper tool error handling; Set maximum iteration limits to prevent loops
- **Don't:** Skip observation phase after actions; Use ambiguous or unstructured action formats; Allow infinite reasoning loops without convergence; Ignore tool failures or partial results; Mix reasoning and action in single step

**Measure.** Task Success Rate (Goals achieved vs attempted); Tool Utilization (Effective vs unnecessary tool calls); Reasoning Efficiency (Steps to solution convergence); Error Recovery (Success after tool failures); Information Quality (Relevance of gathered data); Iteration Count (Thought-Action cycles per task); Web Research: Thought → search("AI trends 2024") → Observe results → search("specific trend") → Synthesize; Data Analysis: Thought → query_database() → Observe data → calculate_stats() →…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-366.png
File: library/agentic-patterns/AGP-152-react.md

## AGP-153 — Reflective Monte Carlo Tree Search (R-MCTS)
- Score 3 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex strategic domains with long-term consequences.
- Avoid when: Simple search problems with clear evaluation; Real-time applications with strict latency limits; Domains lacking meaningful reflection signals; When standard MCTS already performs well; Highly stochastic environments

**Why.** Enhanced MCTS with contrastive reflection for improved exploration. The pattern: monte Carlo Tree Search enhanced with reflective analysis at each phase for improved decision quality. Combines systematic tree search with self-reflection to identify and correct reasoning errors during exploration. **Key insight:** Select with reflection → Expand reasoning → Simulate with quality assessment → Reflect on errors → Backpropagate insights

**Do.**
1. **Selection** — Navigate tree using UCB1 + reflection score
2. **Expansion** — Generate new child nodes with reasoning
3. **Simulation** — Rollout with reflective policy evaluation
4. **Reflection** — Analyze path quality & reasoning errors
5. **Backpropagation** — Update values with reflection insights
- Example flow: `UCB1 selection → Expand with reasoning → Simulate → Reflect on mistakes → Update tree`
- **Do:** Integrate reflection into all MCTS phases; Use domain-specific reflection criteria; Balance exploration vs reflection overhead; Maintain separate reflection and value networks; Cache reflection results for similar states
- **Don't:** Add reflection without clear quality metrics; Reflect on every node (computational explosion); Use shallow reflection that misses key insights; Ignore reflection feedback in future selections; Apply uniform reflection depth regardless of uncertainty

**Measure.** Solution Quality (Performance vs standard MCTS baseline); Reflection Accuracy (Correctness of path quality assessments); Search Efficiency (Quality improvement per simulation); Error Correction Rate (Recovery from poor initial paths); Computational Overhead (Additional cost vs quality gains); Learning Transfer (Reflection knowledge reuse across problems); Strategic Game AI: Chess/Go with position evaluation reflection → Identify weak moves → Improve future selections; Code Generation: Generate…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-367.png
File: library/agentic-patterns/AGP-153-reflective-monte-carlo-tree-search-r-mcts.md

## AGP-187 — Tree-of-Thought (ToT)
- Score 3 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex problems with multiple solution paths.
- Avoid when: Simple linear reasoning tasks; Real-time/low-latency requirements; Tight computational budgets; Tasks without clear evaluation criteria; When CoT already works well

**Why.** Explores multiple reasoning paths through branching and backtracking. The pattern: explore multiple reasoning paths through branching tree structure with evaluation and pruning. Enables backtracking, lookahead, and exploration of alternatives for complex problem-solving. **Key insight:** Generate K candidates → Evaluate → Prune weak paths → Expand promising ones → Repeat until solution

**Do.**
1. **Define Tree** — Set branching factor K & max depth
2. **Generate** — Create K candidate thoughts per node
3. **Evaluate** — Score each candidate (rubrics/verifier)
4. **Prune** — Keep top candidates, discard weak paths
5. **Search** — BFS/DFS/beam until solution found
- Example flow: `Problem → [Branch 1, Branch 2, Branch 3] → Evaluate → Prune → Expand best → Solution`
- **Do:** Use small branching factor (K=3-5) to control costs; Implement explicit evaluation criteria/rubrics; Cache and deduplicate equivalent states; Set budget limits (max tokens/time) with fallbacks; Use beam search for balanced exploration
- **Don't:** Allow unlimited branching (combinatorial explosion); Skip evaluation steps (leads to random exploration); Use for simple problems (overkill vs CoT); Ignore cycles/loops in reasoning paths; Over-prune early promising paths

**Measure.** Solution Quality (Accuracy vs CoT baseline); Search Efficiency (Nodes explored per solution); Token Cost (Total tokens vs linear approaches); Path Diversity (Unique reasoning strategies explored); Evaluation Accuracy (Pruning quality (keep good, discard bad)); Budget Utilization (% of max depth/tokens used); Game of 24: Explore different operator combinations → evaluate validity → prune impossible paths; Strategic Planning: Generate scenario branches → assess outcomes → select optimal strategy…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-371.png
File: library/agentic-patterns/AGP-187-tree-of-thought-tot.md

## AGP-197 — Test-Time Compute Scaling (TTC)
- Score 3 · Agentic Patterns / Reasoning Techniques
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Problems with variable complexity levels.
- Avoid when: Uniform difficulty problems; Strict real-time constraints; Limited computational resources; Simple classification tasks; When speed matters more than quality

**Why.** Dynamically allocates computational resources based on problem complexity. The pattern: dynamic allocation of computational resources based on problem difficulty and quality requirements. Optimizes performance-cost trade-offs by investing more compute in harder problems while saving resources on easier ones. **Key insight:** Assess difficulty → Scale compute allocation → Monitor quality gains → Adjust resources dynamically

**Do.**
1. **Difficulty Assessment** — Estimate problem complexity & required compute
2. **Resource Allocation** — Scale tokens/time/iterations based on difficulty
3. **Adaptive Search** — Use more search/reasoning for harder problems
4. **Quality Monitoring** — Track solution quality vs compute spent
5. **Dynamic Adjustment** — Increase compute if quality insufficient
- Example flow: `Easy: 100 tokens → Medium: 500 tokens → Hard: 2000 tokens + search`
- **Do:** Implement difficulty detection heuristics early; Use progressive compute allocation (start small); Monitor quality-to-compute efficiency ratios; Set maximum compute budgets to prevent runaway; Cache intermediate results for reuse
- **Don't:** Use fixed compute regardless of problem difficulty; Scale linearly without diminishing returns analysis; Ignore early quality signals (continue bad paths); Allocate maximum compute to trivial problems; Skip difficulty calibration on diverse problem sets

**Measure.** Quality-Compute Efficiency (Performance improvement per additional compute unit); Difficulty Prediction Accuracy (Correct identification of problem complexity); Resource Utilization (Optimal allocation vs over/under-provisioning); Scaling Law Adherence (Performance gains following predicted scaling curves); Early Stopping Effectiveness (Quality threshold achievement speed); Cost-Benefit Ratio (Solution value vs computational expense); Mathematical Problem Solving: Easy algebra (50 tokens) →…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-370.png
File: library/agentic-patterns/AGP-197-test-time-compute-scaling-ttc.md
