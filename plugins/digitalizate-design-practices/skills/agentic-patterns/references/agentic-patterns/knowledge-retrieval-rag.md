# Agentic Patterns / Knowledge Retrieval (RAG) (8)

## AGP-013 — Advanced RAG (ARAG)
- Score 4 · Agentic Patterns / Knowledge Retrieval (RAG)
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Production RAG systems requiring high accuracy.
- Avoid when: Simple factual Q&A with clean data; Resource-constrained environments; Real-time applications (<100ms latency); Small knowledge bases with high-quality content; Proof-of-concept or prototype systems

**Why.** Enhanced RAG with pre-retrieval and post-retrieval optimizations including query expansion, reranking, and context curation. The pattern: enhanced retrieval pipeline with query preprocessing, multi-stage retrieval, neural reranking, and context optimization. Addresses limitations of naive RAG through query understanding, relevance scoring, and context quality optimization. **Key insight:** Pre-retrieval optimization + post-retrieval processing significantly improves accuracy and relevance

**Do.**
1. **Pre-process** — Query expansion, rewriting, routing
2. **Multi-retrieve** — Multiple retrieval strategies and sources
3. **Rerank** — Neural rerankers (BGE, Cohere, etc.)
4. **Filter** — Relevance scoring and context selection
5. **Generate** — Context-optimized generation with citations
- Example flow: `expand_query → multi_retrieve → neural_rerank → filter_context → generate_with_citations`
- **Do:** Implement query expansion (HyDE, query2doc); Use neural rerankers (BGE-reranker, Cohere rerank); Apply sentence window retrieval for context preservation; Implement relevance filtering with confidence thresholds; Use multiple embedding models for retrieval diversity
- **Don't:** Skip query preprocessing and expansion; Rely solely on semantic similarity for ranking; Ignore document quality and freshness signals; Over-retrieve without proper filtering mechanisms; Neglect context window optimization

**Measure.** Retrieval Precision (Relevant docs in top-k after reranking); Answer Faithfulness (Generated content grounded in retrieved docs); Context Relevance (Retrieved context relevance to query); Reranking Effectiveness (NDCG@k improvement vs base retrieval); Query Understanding (Semantic similarity after expansion/rewriting); End-to-End Latency (Including pre-processing and reranking overhead); Enterprise Search: Complex queries over large corporate knowledge bases with reranking; Legal Research…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-446.png
File: library/agentic-patterns/AGP-013-advanced-rag-arag.md

## AGP-137 — Naive RAG (NRAG)
- Score 4 · Agentic Patterns / Knowledge Retrieval (RAG)
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Simple Q&A over documents.
- Avoid when: Complex multi-hop reasoning required; High-accuracy critical applications; Large-scale production systems; Noisy or contradictory knowledge bases; Real-time performance requirements

**Why.** Foundational "Retrieve-Read" framework following traditional indexing, retrieval, and generation process. The pattern: simple retrieve-then-read pipeline: query → retrieve documents → concatenate → generate. Provides external knowledge access with minimal complexity - foundational approach established by Lewis et al. (2020). **Key insight:** Direct concatenation of top-k retrieved documents to query prompt - no optimization or post-processing

**Do.**
1. **Index** — Create vector embeddings of knowledge base
2. **Retrieve** — Find top-k relevant documents via similarity
3. **Concatenate** — Append retrieved docs to query prompt
4. **Generate** — Submit combined prompt to LLM
5. **Return** — Output generated response directly
- Example flow: `query → vector_search → concat_context → llm_generate → response`
- **Do:** Use semantic embeddings (e.g., sentence-transformers); Implement basic chunking strategy (fixed size 512-1024 tokens); Set clear top-k retrieval limits (typically 3-5 documents); Include document metadata and source attribution; Use FAISS or similar for efficient vector search
- **Don't:** Skip query preprocessing or normalization; Retrieve too many documents (causes context pollution); Ignore relevance scoring thresholds; Concatenate without clear document boundaries; Expect sophisticated reasoning from basic approach

**Measure.** Retrieval Accuracy (Relevant docs in top-k (Recall@k)); Answer Quality (BLEU/ROUGE scores vs ground truth); Response Time (End-to-end latency (retrieval + generation)); Context Utilization (% of retrieved context used in response); Hallucination Rate (% responses with unsupported claims); Source Attribution (% responses with correct source citations); Document Q&A: Simple factual questions over company documents or knowledge bases; FAQ Systems: Automated responses to frequently asked questions…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-452.png
File: library/agentic-patterns/AGP-137-naive-rag-nrag.md

## AGP-020 — Agentic RAG (AgRAG)
- Score 3 · Agentic Patterns / Knowledge Retrieval (RAG)
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Complex multi-step research requiring strategic information gathering.
- Avoid when: Simple factual queries adequately served by standard RAG approaches; Real-time applications with strict latency and cost constraints; Domains with limited tool availability or API access restrictions; Applications where deterministic retrieval behavior is required; Resource-constrained environments unable to support complex agent reasoning

**Why.** Autonomous retrieval-augmented generation systems with self-directed planning, retrieval, and reasoning capabilities. The pattern: autonomous agent systems that dynamically plan, execute, and adapt multi-step retrieval strategies using tools and reasoning. Enables complex information gathering workflows that require strategic thinking, adaptation, and multi-source synthesis. **Key insight:** ReAct-style planning with tool orchestration allows agents to reason about retrieval strategies and adapt based on results

**Do.**
1. **Agent Planning** — Decompose complex queries into multi-step retrieval plans with reasoning
2. **Tool Orchestration** — Execute retrieval actions using specialized tools (search, DB, APIs)
3. **Dynamic Adaptation** — Adapt strategy based on intermediate results and feedback
4. **Evidence Synthesis** — Integrate multi-source evidence with reasoning chains
5. **Response Generation** — Generate final answer with full citation and reasoning trace
- Example flow: `complex_query → plan_decomposition → [retrieve_1, retrieve_2, ...] → adapt_strategy → synthesize → response`
- **Do:** Implement explicit planning with ReAct or function calling for retrieval strategies; Use tool-augmented retrieval with specialized APIs, search engines, and databases; Enable adaptive query refinement based on intermediate retrieval results; Maintain detailed reasoning traces and citation provenance throughout execution; Implement error recovery and alternative retrieval strategies for failed attempts
- **Don't:** Allow uncontrolled agent loops without termination conditions or cost limits; Skip validation of retrieved information quality and source credibility; Ignore user intent drift during multi-step retrieval processes; Rely solely on single retrieval modality without exploring alternatives; Neglect privacy and security considerations for sensitive information retrieval

**Measure.** Plan Execution Success (Percentage of agent plans successfully completed without errors); Retrieval Strategy Effectiveness (Quality improvement from adaptive vs fixed retrieval strategies); Evidence Synthesis Quality (Coherence and completeness of multi-source information integration); Reasoning Trace Fidelity (Accuracy and explainability of step-by-step reasoning chains); Tool Utilization Efficiency (Optimal use of available retrieval tools and APIs); Cost-Quality Tradeoff (Answer quality per…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-447.png
File: library/agentic-patterns/AGP-020-agentic-rag-agrag.md

## AGP-054 — Corrective RAG (CRAG)
- Score 3 · Agentic Patterns / Knowledge Retrieval (RAG)
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: High-stakes applications requiring verified accuracy and provenance.
- Avoid when: Real-time applications with strict latency requirements; Closed-book tasks where parametric knowledge suffices; High-quality homogeneous corpora with consistent recall; Environments prohibiting external web access for supplementation; Simple factual queries with reliable standard RAG performance

**Why.** RAG system that automatically detects and corrects poor retrieval results through quality assessment and re-retrieval. The pattern: enhanced RAG with explicit retrieval quality evaluation and corrective actions based on confidence scoring. Reduces hallucinations and improves accuracy through quality assessment and adaptive correction strategies. **Key insight:** Three-tier correction strategy: refine high-confidence, supplement medium-confidence, re-retrieve low-confidence results

**Do.**
1. **Initial Retrieval** — Retrieve candidate documents using dense/sparse/hybrid search
2. **Quality Assessment** — Evaluate retrieval quality with confidence scoring (high/medium/low)
3. **Corrective Action** — Refine, supplement, or re-retrieve based on confidence band
4. **Knowledge Refinement** — Decompose and recompose evidence for optimal context
5. **Generate & Verify** — Generate response with citations and optional verification
- Example flow: `query → retrieve → evaluate_quality → [correct/supplement/re-retrieve] → refine → generate`
- **Do:** Implement explicit retrieval quality evaluator with calibrated confidence thresholds; Use knowledge refinement with decompose-then-recompose for evidence processing; Apply web search supplementation for medium confidence retrieval results; Enforce strict citation requirements with provenance tracking; Cache evaluator outputs and refined knowledge for efficiency
- **Don't:** Allow evaluator miscalibration without regular confidence score validation; Skip query drift prevention during corrective re-retrieval; Create unbounded correction loops without cost and latency controls; Mix outdated and fresh sources without temporal reconciliation; Neglect abstention mechanisms when confidence remains persistently low

**Measure.** Answer Faithfulness (Factual correctness and groundedness in retrieved evidence); Evaluator Calibration (Accuracy of quality confidence predictions (ROC-AUC, ECE)); Correction Effectiveness (Quality improvement from corrective actions); Retrieval Precision (Relevance of documents after correction); Citation Coverage (Percentage of claims supported by evidence); Action Distribution (Balance of use/supplement/re-retrieve decisions); Legal Research: Case law analysis requiring verified sources and…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-448.png
File: library/agentic-patterns/AGP-054-corrective-rag-crag.md

## AGP-082 — Graph RAG (GRAG)
- Score 3 · Agentic Patterns / Knowledge Retrieval (RAG)
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Complex multi-hop reasoning requiring entity relationship understanding.
- Avoid when: Simple factual queries adequately served by document-based RAG; Domains with poor entity extraction and relation modeling quality; Real-time applications with strict latency requirements; Small datasets where graph complexity exceeds retrieval benefits; Applications lacking well-defined entity schemas or ontologies

**Why.** Knowledge graph-enhanced RAG using entity relationships and community detection for global sensemaking queries. The pattern: knowledge graph-based RAG with community detection and hierarchical summarization for large-scale reasoning. Enables complex multi-hop reasoning and relationship understanding through structured graph traversal. **Key insight:** Microsoft's approach uses community detection algorithms to create hierarchical summaries for global and local reasoning

**Do.**
1. **Extract & Build** — NER/RE to extract entities and relations, build knowledge graph
2. **Index & Store** — Create graph indexes and hybrid text-vector search capabilities
3. **Query & Map** — Parse query entities and map to graph nodes
4. **Traverse & Retrieve** — Multi-hop graph traversal with bounded expansion
5. **Assemble & Generate** — Serialize graph context and generate response
- Example flow: `query → entity_linking → graph_traversal → subgraph_assembly → llm_generation → response`
- **Do:** Implement community detection algorithms for large-scale graph summarization; Use hierarchical indexing with global and local community summaries; Apply entity resolution and deduplication to maintain graph quality; Combine vector search with graph traversal for hybrid retrieval; Implement bounded traversal with explicit hop limits (1-3 hops)
- **Don't:** Allow uncontrolled graph traversal that leads to context explosion; Skip entity linking validation and confidence scoring; Neglect graph maintenance and consistency validation; Create overly complex schemas that hinder query performance; Ignore provenance tracking for graph edges and entity sources

**Measure.** Graph Construction Quality (Precision/recall of extracted entities and relations); Community Detection Accuracy (Coherence and relevance of detected communities); Retrieval Relevance (Proportion of relevant subgraphs in query results); Multi-hop Reasoning (Accuracy of complex relationship inference); Context Completeness (Coverage of relevant graph neighborhoods); Query Response Time (End-to-end latency including graph operations); Biomedical Research: Drug-disease-gene relationship exploration…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-449.png
File: library/agentic-patterns/AGP-082-graph-rag-grag.md

## AGP-129 — Modular RAG (MRAG)
- Score 3 · Agentic Patterns / Knowledge Retrieval (RAG)
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Large-scale RAG systems requiring flexibility and maintainability.
- Avoid when: Simple single-purpose RAG applications; Resource-constrained environments with tight latency budgets; Small teams without modular architecture experience; Prototypes and proof-of-concept implementations; Systems with stable, unchanging requirements

**Why.** Flexible RAG architecture with interchangeable modules supporting iterative, adaptive, and non-sequential retrieval patterns. The pattern: decomposed RAG architecture with independent, interchangeable modules connected through standardized interfaces. Enables flexibility, maintainability, and team scalability by separating concerns into distinct, testable components. **Key insight:** Module boundaries defined by function (retrieval, ranking, fusion, generation) with standardized APIs enabling hot-swapping

**Do.**
1. **Module Design** — Create independent retrieval, generation, and augmentation modules
2. **Interface Definition** — Define standardized APIs between modules
3. **Pipeline Assembly** — Compose modules into flexible processing pipelines
4. **Dynamic Routing** — Route queries to appropriate module combinations
5. **Module Orchestration** — Coordinate execution and data flow between modules
- Example flow: `query → module_router → [retrieval_module, rerank_module, fusion_module] → generation_module → response`
- **Do:** Design modules with clear input/output interfaces and standardized APIs; Implement hot-swappable modules for A/B testing and gradual rollouts; Use dependency injection for flexible module composition; Cache module outputs at appropriate granularity levels; Implement module health checks and fallback mechanisms
- **Don't:** Create tight coupling between modules or shared mutable state; Skip module versioning and backward compatibility considerations; Ignore module-level monitoring and observability; Over-engineer module boundaries for simple use cases; Neglect module performance isolation and resource limits

**Measure.** Module Isolation (Independence and replaceability of individual modules); Pipeline Flexibility (Number of supported module combinations and configurations); Development Velocity (Time to implement new modules or modify existing ones); System Reliability (Fault isolation and graceful degradation capabilities); Performance Scalability (Independent scaling of bottleneck modules); Configuration Complexity (Ease of pipeline composition and module orchestration); Enterprise RAG Platforms: Modular…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-450.png
File: library/agentic-patterns/AGP-129-modular-rag-mrag.md

## AGP-136 — Multimodal RAG (MMRAG)
- Score 3 · Agentic Patterns / Knowledge Retrieval (RAG)
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Document analysis requiring understanding of both text and visual elements.
- Avoid when: Pure text-based applications where other modalities add no value; Strict latency requirements incompatible with multi-modal processing; Limited computational resources unable to handle vision/audio models; Privacy-sensitive environments restricting image/audio processing; Domains with poor OCR/ASR quality where visual/audio signals are unreliable

**Why.** Retrieval-augmented generation that handles and integrates text, images, audio, video, and structured data sources. The pattern: multi-modal RAG system that retrieves and fuses evidence across text, images, audio, and video using specialized encoders. Enables comprehensive understanding by combining information from multiple modalities that text-only systems miss. **Key insight:** Per-modality encoders (CLIP, Whisper, BLIP-2) with learned fusion weights for cross-modal evidence integration

**Do.**
1. **Multi-Modal Ingest** — Process text, images, audio, video with modality-specific preprocessing
2. **Index & Encode** — Create per-modality embeddings using specialized encoders (CLIP, BLIP-2)
3. **Query & Retrieve** — Search across modalities using hybrid retrieval strategies
4. **Fusion & Rerank** — Combine multi-modal results with learned fusion weights
5. **Generate & Cite** — Use vision-language models with cross-modal evidence citations
- Example flow: `multi_modal_query → [text_search, image_search, audio_search] → fusion → vlm_generation → response`
- **Do:** Use modality-specific encoders (CLIP for vision, Whisper for audio); Implement hybrid retrieval combining lexical and vector search per modality; Apply learned fusion weights calibrated for different modality combinations; Cache OCR, ASR, and visual features to reduce preprocessing overhead; Include temporal alignment for audio/video with precise timestamps
- **Don't:** Rely solely on text embeddings for visual or audio content; Skip quality validation for OCR/ASR outputs that may be noisy; Inline raw media files instead of using feature references; Mix incomparable similarity scores across modalities without calibration; Ignore privacy and compliance requirements for sensitive media content

**Measure.** Cross-Modal Retrieval (Recall@k and MRR across different modality combinations); Fusion Effectiveness (Performance improvement from multi-modal vs single-modal retrieval); Generation Faithfulness (Accuracy of vision-language model outputs with multi-modal evidence); Citation Quality (Precision of cross-modal evidence attribution and source linking); Modality Coverage (Balanced utilization of available modalities in retrieval results); Processing Efficiency (Latency and cost per modality…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-451.png
File: library/agentic-patterns/AGP-136-multimodal-rag-mmrag.md

## AGP-167 — Self-RAG (SRAG)
- Score 3 · Agentic Patterns / Knowledge Retrieval (RAG)
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Factual accuracy and verifiability are critical requirements.
- Avoid when: Simple queries where standard RAG provides sufficient accuracy; Real-time applications with strict latency constraints; Resource-constrained environments limiting multiple generation rounds; Domains with insufficient training data for reliable self-critique; Applications where citation overhead is unnecessary

**Why.** Self-reflective RAG that adaptively determines retrieval necessity and evaluates retrieval quality through reflection tokens. The pattern: rAG system with adaptive retrieval decisions and self-reflection using trained reflection tokens for quality assessment. Improves factual accuracy and reduces hallucinations through iterative self-critique and selective knowledge retrieval. **Key insight:** Reflection tokens ([Retrieve], [IsRel], [IsSup], [IsUse]) enable models to assess retrieval necessity and response quality

**Do.**
1. **Retrieval Gate** — Assess whether external knowledge is needed for the query
2. **Retrieve & Rank** — Fetch relevant passages and apply neural reranking
3. **Generate Draft** — Create initial response using retrieved context
4. **Self-Critique** — Use reflection tokens to evaluate response quality
5. **Refine Output** — Iteratively improve based on self-assessment
- Example flow: `query → retrieval_gate → retrieve → generate → self_critique → [refine] → final_response`
- **Do:** Train models with reflection tokens ([Retrieve], [IsRel], [IsSup], [IsUse]); Implement retrieval necessity prediction to avoid unnecessary context; Use calibrated confidence thresholds for triggering refinement; Enforce citation requirements with evidence grounding; Cache reflection outputs and retrieval results for efficiency
- **Don't:** Allow unconstrained reflection tokens that become verbose; Skip validation of self-critique calibration against ground truth; Create infinite refinement loops without iteration limits; Rely solely on self-assessment without external validation; Ignore computational cost of multiple generation rounds

**Measure.** Answer Faithfulness (Factual accuracy and consistency with retrieved evidence); Reflection Calibration (Correlation between confidence scores and actual accuracy); Retrieval Precision (Proportion of retrieved passages that are genuinely useful); Citation Coverage (Percentage of claims supported by retrieved evidence); Refinement Effectiveness (Quality improvement through iterative self-correction); Computational Efficiency (Quality gains per additional token or retrieval call); Medical Q&A…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-453.png
File: library/agentic-patterns/AGP-167-self-rag-srag.md
