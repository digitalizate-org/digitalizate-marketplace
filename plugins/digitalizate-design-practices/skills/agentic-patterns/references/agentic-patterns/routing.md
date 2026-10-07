# Agentic Patterns / Routing (4)

## AGP-067 — Embedding-based Routing (EBR)
- Score 4 · Agentic Patterns / Routing
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Semantic understanding is crucial.
- Avoid when: Exact keyword matching suffices; Embedding computation is costly; Routes require strict boundaries; Low-latency requirements (<10ms)

**Why.** A semantic routing system that converts queries and route definitions into high-dimensional vector embeddings, using cosine similarity or other distance metrics to match incoming requests to the most semantically similar handler, enabling fuzzy matching, multi-lingual support, and context-aware routing beyond simple keyword matching. The pattern: route requests by comparing vector embeddings in semantic space. Captures meaning beyond keywords, enabling fuzzy matching and cross-lingual routing. **Key insight:** Same embedding model + cosine similarity + smart thresholds = semantic routing

**Do.**
1. **Embed** — Convert query to vector representation
2. **Compare** — Calculate similarity to route embeddings
3. **Select** — Choose route with highest similarity
4. **Threshold** — Verify similarity meets minimum
5. **Route** — Direct to matched handler/agent
- Example flow: `query_embedding = encode(query) → similarities = cosine_sim(query_embedding, route_embeddings) → if max(similarities) > 0.85: route()`
- **Do:** Use same embedding model for queries and routes; Normalize embeddings for consistent cosine similarity; Set appropriate similarity thresholds through testing; Cache embeddings for frequently used routes; Monitor embedding drift and update periodically
- **Don't:** Mix different embedding models without retraining; Use cosine similarity blindly without validation; Ignore magnitude when it carries meaning; Skip normalization if model expects it; Use fixed thresholds across all route types

**Measure.** Similarity Score (Distribution of route matches); Embedding Latency (Time to generate vectors); Route Precision (% correctly routed queries); Route Recall (% of queries finding a route); Cache Hit Rate (% embeddings served from cache); Threshold Effectiveness (False positive/negative rates); Semantic Search: query → embed → find most similar documents/FAQs; Intent Classification: user input → embed → match to intent clusters; Multi-lingual Support: translate meaning, not words → unified…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-374.png
Notion: https://app.notion.com/p/Embedding-based-Routing-EBR-2d1a9aed534483fabc3d812e2bd9c40d

## AGP-105 — LLM-based Routing (LBR)
- Score 4 · Agentic Patterns / Routing
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex intent classification needed.
- Avoid when: Simple keyword-based routing suffices; Ultra-low latency requirements (<100ms); Deterministic routing is mandatory; Cost constraints are tight

**Why.** An intelligent query distribution system that uses a specialized LLM router to analyze incoming requests and dynamically route them to the most appropriate model, API endpoint, or processing pipeline based on query characteristics, ensuring optimal resource utilization and response quality through intent classification and capability matching. The pattern: use LLM to analyze input and determine routing path dynamically. Handles complex, nuanced routing decisions that simple rules can't capture. **Key insight:** Prompt engineering + structured outputs = reliable intent classification

**Do.**
1. **Analyze** — Prompt LLM to classify intent/category
2. **Extract** — Parse structured output (JSON/enum)
3. **Map** — Route decision → handler/agent
4. **Execute** — Invoke selected workflow
5. **Monitor** — Track routing accuracy & latency
- Example flow: `analyze_query → "category: booking" → booking_agent.invoke(query)`
- **Do:** Use structured outputs (JSON mode) for deterministic parsing; Provide clear examples in routing prompt; Implement fallback routes for unclear classifications; Cache routing decisions for identical queries; Use temperature=0 for consistent routing
- **Don't:** Rely on free-form text parsing for routing; Skip validation of LLM routing output; Use high temperature for routing decisions; Ignore edge cases and ambiguous inputs; Route without confidence thresholds

**Measure.** Routing Accuracy (% correctly routed queries); Classification Time (P50/P95 routing latency); Ambiguity Rate (% queries needing clarification); Cost per Route (LLM tokens × price); Fallback Rate (% routed to default handler); Cache Hit Rate (% reused routing decisions); Customer Support: analyze intent → route to sales/tech/billing specialist; Multi-Tool Agents: parse request → select appropriate tool/API; Document Processing: classify type → apply correct parser/workflow; Query Routing…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-375.png
Notion: https://app.notion.com/p/LLM-based-Routing-LBR-f36a9aed534483c1a61981a0885d2b71

## AGP-160 — Rule-based Routing (RBR)
- Score 4 · Agentic Patterns / Routing
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Deterministic routing is required.
- Avoid when: Complex semantic understanding needed; Patterns frequently change; Handling ambiguous queries; Natural language nuance matters

**Why.** A deterministic routing system that uses predefined rules, conditions, and decision trees to direct queries to appropriate handlers, providing fast, predictable, and auditable routing decisions through if-else statements, switch cases, and pattern matching ideal for compliance-critical and latency-sensitive agentic AI systems. The pattern: deterministic routing using predefined rules, conditions, and decision trees. Provides traceable, auditable, ultra-fast routing decisions with guaranteed outcomes. **Key insight:** If-else chains + pattern matching + config management = predictable agent orchestration

**Do.**
1. **Define** — Create routing rules and conditions
2. **Extract** — Parse keywords/patterns from input
3. **Match** — Apply if-else/switch logic
4. **Validate** — Check rule precedence and conflicts
5. **Execute** — Route to deterministic handler
- Example flow: `if (query.contains("refund")) route("billing_agent") else if (priority == "urgent") route("escalation_handler")`
- **Do:** Order rules from most specific to general; Implement fallback/default routes; Version control your rule definitions; Log routing decisions for debugging; Combine with AI for hybrid workflows
- **Don't:** Create overlapping or conflicting rules; Hardcode rules without config management; Ignore edge cases and exceptions; Over-complicate with too many conditions; Skip validation and testing of rules

**Measure.** Rule Coverage (% queries matched by rules); Decision Latency (Time to route (usually <5ms)); Rule Conflicts (Number of overlapping rules); Fallback Rate (% routed to default handler); Rule Maintenance (Changes per month); Accuracy (% correctly routed vs manual); Priority Escalation: if urgency="critical" AND type="security" → security_team; Department Routing: switch(category) { case "billing": finance_agent; case "tech": it_support }; Compliance Workflows: regulated industries requiring…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-377.png
Notion: https://app.notion.com/p/Rule-based-Routing-RBR-325a9aed5344826e9bc7017a7ac8b886

## AGP-117 — Machine Learning Model-Based Routing (MLMR)
- Score 3 · Agentic Patterns / Routing
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: High-volume routing with labeled training data.
- Avoid when: Limited labeled data (<1000 examples); Constantly evolving routing rules; Need interpretable routing logic; Small-scale applications

**Why.** A specialized routing approach that employs discriminative models (classifiers) fine-tuned on labeled data to make routing decisions, encoding routing logic directly in model weights rather than prompts, enabling sub-10ms inference for high-volume agentic AI systems requiring deterministic and explainable routing decisions. The pattern: fine-tuned discriminative model encoding routing logic in learned weights. Enables ultra-fast (<10ms) routing decisions with high accuracy after supervised training. **Key insight:** Routing logic embedded in model parameters, not in prompts - inference without generation

**Do.**
1. **Label Data** — Create training corpus with routing labels
2. **Train Model** — Fine-tune classifier on labeled examples
3. **Embed Logic** — Encode routing in model weights
4. **Deploy** — Serve model for real-time routing
5. **Monitor** — Track accuracy, drift, and performance
- Example flow: `query → classifier → {support: 0.92, sales: 0.05, billing: 0.03} → route_to_support`
- **Do:** Use supervised fine-tuning with domain-specific labeled data; Start with smaller models (BERT-base) for lower latency; Implement confidence thresholds for routing decisions; Monitor class distribution and retrain on drift; Use synthetic data generation from LLMs to augment training set
- **Don't:** Use generative models for real-time routing decisions; Deploy without fallback mechanisms for low-confidence predictions; Ignore class imbalance in training data; Skip A/B testing against baseline routing methods; Neglect explainability for critical routing decisions

**Measure.** Routing Accuracy (F1 score per route class); Latency (P50/P95/P99 inference time); Model Drift (Distribution shift detection); Confidence Calibration (ECE (Expected Calibration Error)); Coverage (% queries above confidence threshold); Cost Efficiency (Inference cost per 1M requests); Intent Classification: customer_query → {support: 0.89, sales: 0.08, info: 0.03}; Ticket Routing: issue_description → {technical_L1: 0.72, technical_L2: 0.25, billing: 0.03}; Language Detection: multilingual_text →…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-376.png
Notion: https://app.notion.com/p/Machine-Learning-Model-Based-Routing-MLMR-aafa9aed53448211ad85011bebd5b9a9
