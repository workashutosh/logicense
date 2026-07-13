// Central content constants. Any [PLACEHOLDER] block below is intentionally
// left as-is and MUST be replaced by the client before going live.

export const SITE = {
    name: "Logicense",
    domain: "logicense.in",
    tagline: "AI systems, built like engineering.",
    contactEmail: "hello@logicense.in",
    bookACall: "https://cal.com/logicense", // TODO: replace with real booking link
    social: {
        github: "https://github.com/logicense", // TODO: replace with real profile
        linkedin: "https://linkedin.com/company/logicense", // TODO: replace with real profile
        x: "https://x.com/logicense", // TODO: replace with real profile
    },
};

export const NAV_LINKS = [
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Process", path: "/process" },
    { label: "Work", path: "/work" },
    { label: "Technology", path: "/technology" },
    { label: "About", path: "/about" },
];

export const SERVICES = [
    {
        id: "agents",
        code: "01",
        title: "AI Agents",
        summary:
            "Custom agents that plan, call tools, and complete multi-step tasks in your systems.",
        body:
            "Most 'agent' demos stop at a chat window. Ours run against your APIs, databases, and internal tools — with step budgets, retries, and a human checkpoint whenever the cost of being wrong is high. We design the control loop first, then pick the model.",
        bullets: [
            "Tool-using agents wired to your APIs and internal data",
            "Guardrails, retries, and observability on every step",
            "Human-in-the-loop checkpoints where they matter",
            "Cost and latency budgets enforced in the runtime, not in a slide",
            "Audit logs that show what the agent did and why",
        ],
        outcomes: [
            "Multi-step workflows that used to take hours finish in minutes",
            "Operators review exceptions instead of doing every step by hand",
            "You can swap models without rewriting the whole system",
        ],
        fitFor:
            "Ops, support, and back-office teams with clear multi-step workflows and existing systems of record.",
    },
    {
        id: "rag",
        code: "02",
        title: "RAG Pipelines",
        summary:
            "Retrieval systems that turn your documents, tickets, and databases into reliable answers.",
        body:
            "Retrieval quality is the product. We build ingestion, chunking, hybrid search, and citation-backed generation as one pipeline — with a ground-truth question set that blocks regressions in CI. If we cannot cite a source, we refuse to answer.",
        bullets: [
            "Ingestion, chunking, and embedding pipelines",
            "Hybrid search across vector and keyword indices",
            "Evaluation harness with ground-truth question sets",
            "Citation-first answers with document-level provenance",
            "Access controls that respect your existing permissions",
        ],
        outcomes: [
            "Answers grounded in your corpus, not the open web",
            "Measurable retrieval quality before you scale usage",
            "A corpus that stays fresh as documents change",
        ],
        fitFor:
            "Teams sitting on years of PDFs, tickets, contracts, or SOPs that people still search by hand.",
    },
    {
        id: "chatbots",
        code: "03",
        title: "Chatbots & Assistants",
        summary:
            "Domain-tuned conversational interfaces for support, sales, and internal operations.",
        body:
            "A useful assistant knows when to answer, when to ask a clarifying question, and when to hand off. We train on your catalog, policies, and tone — then wire live systems for order status, bookings, or CRM updates so the conversation is not just talk.",
        bullets: [
            "Grounded on your knowledge base, not the open web",
            "Handoff to humans with full transcript context",
            "Deployed to web, WhatsApp, Slack, or embedded in-app",
            "Escalation rules you can change without a redeploy",
            "Analytics on deflection, handoff rate, and unresolved topics",
        ],
        outcomes: [
            "Repetitive questions handled without burning staff time",
            "Sales and support inquiries stop getting buried in the same inbox",
            "Staff spend time on the cases that actually need judgment",
        ],
        fitFor:
            "Support, sales, and front-desk teams drowning in the same ten questions every day.",
    },
    {
        id: "workflow",
        code: "04",
        title: "Workflow Automation",
        summary:
            "LLM-augmented pipelines that replace manual, repetitive back-office work.",
        body:
            "Not every problem needs a chat UI. Many of the highest-ROI systems are quiet pipelines: parse a document, classify it, route it, write back to the ERP. We put LLMs where judgment helps and keep deterministic code where it does not.",
        bullets: [
            "Document parsing, classification, and routing",
            "Integrations with ERPs, CRMs, and spreadsheets",
            "Scheduled runs with alerting on failure or drift",
            "Confidence thresholds that send low-certainty items to review",
            "Full audit trails for compliance and month-end close",
        ],
        outcomes: [
            "Month-end and intake scrambles shrink to exception review",
            "Fewer copy-paste errors between systems",
            "Pipelines your ops team can monitor without reading model logs",
        ],
        fitFor:
            "Finance, ops, and compliance teams with high-volume document or reconciliation work.",
    },
];

export const INDUSTRIES = [
    {
        id: "logistics",
        title: "Logistics",
        blurb:
            "Shipment tracking assistants, POD extraction, exception routing, and freight quoting.",
        detail:
            "Carriers, TMS platforms, and customer WhatsApp threads rarely agree. We build systems that reconcile status across sources, flag exceptions early, and draft the update a human can send in one tap.",
        pain:
            "Ops teams logging into four portals every morning and still missing delay notifications until the customer calls.",
    },
    {
        id: "real-estate",
        title: "Real Estate",
        blurb:
            "Lead qualification, listing enrichment, and document workflows for brokers and developers.",
        detail:
            "Leads arrive from the website, walk-ins, brokers, and WhatsApp — then get lost between tools. We unify intake, qualify budget and timeline, and route to the right rep by project and territory.",
        pain:
            "Duplicate follow-ups on the same lead, or no follow-up at all, because sources never land in one CRM.",
    },
    {
        id: "retail",
        title: "Retail & E-commerce",
        blurb:
            "Catalog cleanup, product Q&A, review summarization, and support deflection.",
        detail:
            "Sizing, care, order status, and returns dominate support inboxes. We ground assistants on your catalog and policies, check live order systems, and escalate the moment a question needs a person.",
        pain:
            "Support staff typing the same return-policy answer for the fortieth time while real sales inquiries sit unread.",
    },
    {
        id: "manufacturing",
        title: "Manufacturing",
        blurb:
            "Spec-sheet retrieval, RFQ triage, and shop-floor knowledge assistants.",
        detail:
            "SOPs live in binders; drawings live in shared drives; tribal knowledge lives in one supervisor's head. We put current procedures and past maintenance logs behind a floor-side assistant with citations.",
        pain:
            "Line stoppages that stretch because nobody can find the right troubleshooting page under pressure.",
    },
    {
        id: "healthcare",
        title: "Healthcare Operations",
        blurb:
            "Non-clinical automation: intake, prior-auth prep, coding assist, and reporting.",
        detail:
            "We stay strictly on the administrative side — scheduling, insurance FAQs, document prep — with hard boundaries that route anything clinical or ambiguous to staff. No diagnostic tools. No care decisions.",
        pain:
            "Front-desk phone volume during peak hours pulling staff away from patients standing at the counter.",
    },
    {
        id: "legal",
        title: "Legal",
        blurb:
            "Clause extraction, contract review support, and matter-scoped research assistants.",
        detail:
            "Precedent research should cite the clause and the document — or it is useless. We build RAG over your past agreements and memos so associates get answers with provenance, not vibes.",
        pain:
            "Associates spending an afternoon hunting indemnity language across years of PDFs for a single review.",
    },
    {
        id: "arch-3d",
        title: "3D, Architecture & Design",
        blurb:
            "Parametric design assistants, spec compliance checks, and content pipelines for studios.",
        detail:
            "BIM revisions pile up. Diffing v12 against v18 by hand eats half a day before every client review. We summarize model changes in plain English and flag deviations against the design brief.",
        pain:
            "Junior architects burning review-prep time on manual revision notes instead of design work.",
    },
    {
        id: "hospitality",
        title: "Hospitality",
        blurb:
            "Unified inquiry assistants across WhatsApp, web, and social — wired to live booking data.",
        detail:
            "Guests do not care which channel they messaged. We answer availability and package questions from live inventory and hand off complaints or special requests immediately.",
        pain:
            "Front-desk staff juggling three inboxes mid-check-in while overnight inquiries wait until morning.",
    },
    {
        id: "fintech",
        title: "Financial Services",
        blurb:
            "Reconciliation agents, statement review, and back-office copilots — never investment advice.",
        detail:
            "Month-end reconciliation should surface the 5% that needs judgment. We cross-check statements against custodian records, flag discrepancies, and leave a full audit trail.",
        pain:
            "Ops teams in a multi-day scramble every close, catching errors only when a client notices first.",
    },
    {
        id: "edtech",
        title: "EdTech",
        blurb:
            "Curriculum-grounded Q&A that escalates hard doubts to live tutors.",
        detail:
            "Tutors should teach, not retype the same conceptual answer. We train on your course material, answer straightforward doubts instantly, and escalate anything complex or contested.",
        pain:
            "Small tutor teams spending most of support chat on the same ten concepts every day.",
    },
];

export const PROCESS = [
    {
        step: "01",
        title: "Discovery",
        duration: "3–5 days",
        body:
            "One or two working sessions to understand the workflow, the data, and where the current process breaks. We leave with a written problem statement, not a proposal deck.",
        activities: [
            "Map the current workflow with the people who run it daily",
            "Inventory systems, data access, and permission constraints",
            "Define what 'working' looks like in measurable terms",
            "Identify where humans must stay in the loop",
        ],
    },
    {
        step: "02",
        title: "Prototype",
        duration: "1–2 weeks",
        body:
            "A working prototype on real data within one to two weeks. Not a demo. Something you can click through and break, evaluated against a small ground-truth set.",
        activities: [
            "Build the thinnest path that proves the workflow",
            "Assemble a small ground-truth set with your operators",
            "Establish cost and latency baselines",
            "Decide go / no-go before a full production build",
        ],
    },
    {
        step: "03",
        title: "Build",
        duration: "4–8 weeks",
        body:
            "Production build with the boring parts done properly: auth, logging, evals, rate limits, cost caps, and a deployment pipeline you can hand off to your own team.",
        activities: [
            "Harden the prototype into a maintainable codebase",
            "Wire auth, observability, retries, and rate limits",
            "Expand the eval suite and put it in CI",
            "Document the system as we build it, not after",
        ],
    },
    {
        step: "04",
        title: "Deploy",
        duration: "1–2 weeks",
        body:
            "Ship to your cloud (or ours), wired to your existing systems. Documentation and a runbook come with it.",
        activities: [
            "Deploy to your AWS, GCP, or preferred environment",
            "Connect production APIs, webhooks, and data stores",
            "Run a handoff session with your engineering or ops team",
            "Leave a runbook for incidents, model swaps, and rollbacks",
        ],
    },
    {
        step: "05",
        title: "Iterate",
        duration: "Ongoing",
        body:
            "Ongoing evaluation of quality, cost, and latency. Model swaps, prompt updates, and new capabilities based on production signal, not vibes.",
        activities: [
            "Weekly or monthly quality and cost reports",
            "Prompt, retrieval, and model updates from production failures",
            "Roll out new capabilities only when evals pass",
            "Optional retainers for teams that want us on call",
        ],
    },
];

export const TECH_STACK = [
    {
        category: "Models",
        items: [
            "OpenAI (GPT-5.x)",
            "Anthropic (Claude Sonnet / Haiku)",
            "Google (Gemini)",
            "Open-weights via vLLM / TGI",
        ],
    },
    {
        category: "Orchestration",
        items: ["LangGraph", "LlamaIndex", "Custom Python runtimes", "Temporal"],
    },
    {
        category: "Retrieval",
        items: ["pgvector", "Qdrant", "Weaviate", "Elasticsearch (hybrid)"],
    },
    {
        category: "Backends",
        items: ["FastAPI", "Node.js", "Postgres", "Redis"],
    },
    {
        category: "Frontends",
        items: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    },
    {
        category: "Infrastructure",
        items: ["AWS", "GCP", "Vercel", "Docker + Kubernetes"],
    },
    {
        category: "Observability",
        items: [
            "OpenTelemetry",
            "Langfuse / LangSmith",
            "Prometheus + Grafana",
            "Sentry",
        ],
    },
    {
        category: "Evaluation",
        items: [
            "Ground-truth QA sets",
            "LLM-as-judge (calibrated)",
            "Cost + latency budgets",
            "Regression suites in CI",
        ],
    },
];

// FICTIONAL — internal format review only. Do not publish to logicense.in as-is.
// Every company, founder, and metric below is invented for structure/tone reference.
// Replace piece-by-piece with real client write-ups; delete each fictional entry once swapped.
export const WORK = [
    {
        id: "case-01",
        placeholder: true,
        client: " Vahaan Freight Solutions",
        industry: "Logistics",
        headline:
            "Delay notifications in 20 minutes instead of by lunchtime next day",
        summary:
            "Ops tracked shipments across four carrier portals and a master spreadsheet every morning. We built an agent that pulls status from all four APIs, reconciles against internal order IDs, flags delays past a threshold, and drafts a WhatsApp update for one-tap human approval. Two ops staff moved from data entry to real escalations.",
        stack: ["LangGraph", "Carrier APIs", "WhatsApp", "FastAPI"],
        quote:
            "We didn't need four dashboards. We needed one answer to 'what's late today.' That's what we got.",
    },
    {
        id: "case-02",
        placeholder: true,
        client: " Bhoomika Realty Group",
        industry: "Real Estate",
        headline:
            "One intake path for website, walk-in, and broker leads",
        summary:
            "Inquiries landed in a Google Form, WhatsApp threads, or handwritten notes — reps double-followed or missed leads entirely. A single intake chatbot on web and WhatsApp qualifies budget, location, and timeline, logs to one CRM, and routes by project and territory. Duplicate follow-ups dropped to near zero.",
        stack: ["Claude Sonnet", "WhatsApp Business", "CRM API", "Next.js"],
        quote:
            "The tech wasn't the hard part for us — getting five different sources of leads into one place was. That's what actually solved our problem.",
    },
    {
        id: "case-03",
        placeholder: true,
        client: " Structura Design Studio",
        industry: "Architecture",
        headline:
            "BIM revision diffs in plain English before every client review",
        summary:
            "Tracking what changed between model versions meant manually diffing revision notes for hours. An agent reads BIM metadata and revision logs, summarizes changes between any two versions, and flags spec deviations against the design brief. Pre-review prep dropped from roughly half a day to under an hour.",
        stack: ["GPT-5", "BIM metadata", "Python", "pgvector"],
        quote:
            "I stopped dreading client review day. That alone was worth it.",
    },
    {
        id: "case-04",
        placeholder: true,
        client: " Charu Handloom Co.",
        industry: "Retail & E-commerce",
        headline:
            "WhatsApp support that handles sizing and order status, not sales",
        summary:
            "Two people answered the same sizing, care, and return questions all day while real sales inquiries got buried. A WhatsApp assistant trained on the catalog and policies answers the repetitive questions, checks live Shopify order status, and hands off with full history when out of scope. Support staff now spend most of the day on escalations that need a person.",
        stack: ["Claude Sonnet", "WhatsApp", "Shopify", "FastAPI"],
        quote:
            "Our team stopped feeling like a call center and started feeling like an actual sales team again.",
    },
    {
        id: "case-05",
        placeholder: true,
        client: " Arogya Care Clinics",
        industry: "Healthcare Ops",
        headline:
            "Appointment confirmations and insurance FAQs off the front desk",
        summary:
            "Front-desk staff across six clinics spent peak hours on the phone confirming appointments and answering insurance FAQs. A scheduling assistant on phone and WhatsApp handles confirmations, reschedules, and standard policy questions — every clinical or ambiguous question routes to staff, no exceptions. Phone volume during peak hours dropped noticeably.",
        stack: ["Twilio", "WhatsApp", "Booking API", "LangGraph"],
        quote:
            "We were very clear going in — nothing clinical, nothing that touches actual patient care decisions. They built exactly that boundary in, no pushback.",
    },
    {
        id: "case-06",
        placeholder: true,
        client: " Vakeel & Associates",
        industry: "Legal",
        headline:
            "Precedent research with citations in under fifteen minutes",
        summary:
            "Associates spent afternoons searching years of past agreements for precedent clauses. A RAG system over contracts and internal memos answers natural-language questions with direct citations to the specific clause and document. Research that took an afternoon now typically takes under fifteen minutes — every answer traceable to source.",
        stack: ["GPT-5", "Qdrant", "React", "Docker"],
        quote:
            "The citation requirement mattered more to us than the speed. An answer we can't verify is useless to a lawyer.",
    },
    {
        id: "case-07",
        placeholder: true,
        client: " Pratham Precision Tools",
        industry: "Manufacturing",
        headline:
            "Floor-side SOP troubleshooting instead of printed binders",
        summary:
            "Supervisors relied on often-outdated printed SOP binders during live production stoppages. A tablet chatbot trained on current SOPs and maintenance logs returns step-by-step answers with the relevant SOP page cited. Average time to resolve common machine stoppages dropped once supervisors stopped flipping binders under pressure.",
        stack: ["Claude Sonnet", "RAG", "Tablet UI", "Postgres"],
        quote:
            "Every minute a line is down costs us money. This didn't eliminate downtime — it made troubleshooting faster, which is the part we could actually control.",
    },
    {
        id: "case-08",
        placeholder: true,
        client: " Nivesh Advisory Partners",
        industry: "Financial Services",
        headline:
            "Month-end reconciliation that surfaces only real discrepancies",
        summary:
            "Ops manually reconciled client statements against custodian records every month-end — error-prone and deadline-bound. A reconciliation agent cross-checks records, flags discrepancies above threshold for human review, and auto-marks the rest with a full audit trail. The multi-day scramble now surfaces only the 5% that needs judgment.",
        stack: ["LangGraph", "Custodian APIs", "Postgres", "FastAPI"],
        quote:
            "We didn't want a black box making financial decisions. We wanted the tedious 95% handled so people could focus on the 5% that actually needs judgment.",
    },
    {
        id: "case-09",
        placeholder: true,
        client: " Sahyadri Hill Resorts",
        industry: "Hospitality",
        headline:
            "Availability answers at 11pm across WhatsApp, web, and Instagram",
        summary:
            "Guest inquiries came through three channels while front-desk juggled check-ins. A unified assistant answers availability and package questions from live booking data and hands off guest-specific requests immediately. Guests get answers within minutes at any hour; staff stopped context-switching between three inboxes mid-shift.",
        stack: ["Claude Sonnet", "WhatsApp", "Instagram API", "Booking API"],
        quote:
            "Guests don't care which app they messaged us on. They just want an answer. Now they get one at 11pm, not 9am the next day.",
    },
    {
        id: "case-10",
        placeholder: true,
        client: " Gyanodaya Learning Platform",
        industry: "EdTech",
        headline:
            "Course Q&A that escalates the hard doubts to live tutors",
        summary:
            "Tutors spent most of support chat re-answering the same conceptual questions. A course-content assistant trained on Gyanodaya's curriculum answers straightforward doubts instantly and escalates anything complex — or anything a student pushes back on — to a live tutor. Tutors now spend more time on doubts that actually need a person.",
        stack: ["GPT-5", "pgvector", "Chat UI", "FastAPI"],
        quote:
            "Our tutors are good at teaching, not typing the same answer repeatedly. Now they mostly do the first thing.",
    },
];

export const PRINCIPLES = [
    {
        title: "Ship real systems, not demos",
        body:
            "A working prototype on your data in the first two weeks. Everything after that is production engineering — auth, logging, retries, and a deployment path your team can own.",
    },
    {
        title: "Evaluation is the product",
        body:
            "Before we optimize, we measure. Ground-truth sets, cost budgets, and latency SLOs live in the same repo as the code and block merges when they regress.",
    },
    {
        title: "Boring parts, done properly",
        body:
            "Auth, logging, retries, observability, and rate limits. The invisible 60% of the work that makes AI systems safe to run day after day.",
    },
    {
        title: "Your stack, not ours",
        body:
            "We deploy to your cloud, integrate with your existing systems, and hand off documentation your team can maintain without calling us for every change.",
    },
    {
        title: "Model-agnostic by default",
        body:
            "We benchmark model choices per task. Locking to a single provider is a business risk, not a design decision — unless you explicitly want that trade-off.",
    },
    {
        title: "Human-in-the-loop where it matters",
        body:
            "Automation is a spectrum. We build the checkpoints, dashboards, and overrides that keep humans in charge of the decisions that actually need judgment.",
    },
];

export const GOOD_FIT = [
    {
        title: "A real workflow exists today",
        body:
            "People are already doing the work by hand — in spreadsheets, inboxes, or portals. We automate what is already happening, not a hypothetical future process.",
    },
    {
        title: "Someone owns the outcome",
        body:
            "There is an operator or team lead who will use the system weekly and can tell us when it is wrong. AI without an owner becomes shelfware.",
    },
    {
        title: "Data is reachable",
        body:
            "APIs, exports, or document stores exist. We can work with imperfect data — we cannot invent access you do not have.",
    },
    {
        title: "Wrong answers have a cost you can name",
        body:
            "If a bad answer is merely annoying, chatbots are fine. If a bad answer costs money or trust, we design for review, citations, and refusal.",
    },
];

export const NOT_A_FIT = [
    {
        title: "A chatbot for the sake of having a chatbot",
        body:
            "If there is no workflow, no corpus, and no operator, we will say so. We would rather lose the deal than ship a toy.",
    },
    {
        title: "Clinical or investment decision systems",
        body:
            "We build administrative and operational tools. We do not build systems that diagnose patients or recommend securities.",
    },
    {
        title: "Replace your entire team in 30 days",
        body:
            "We automate the repetitive 80%. The remaining 20% still needs people. Anyone promising otherwise is selling a demo.",
    },
    {
        title: "No access to data or stakeholders",
        body:
            "If we cannot talk to the people who run the process and cannot see sample data, we cannot build anything useful.",
    },
];

export const FAQ = [
    {
        q: "How long before we see something real?",
        a:
            "A working prototype on your data typically lands in one to two weeks after discovery. Production systems usually take six to ten weeks depending on integrations and evaluation depth.",
    },
    {
        q: "Do we need an in-house ML team?",
        a:
            "No. We design for handoff to a competent engineering or ops team. You need someone who can own the runbook — not a research lab.",
    },
    {
        q: "Which model provider do you use?",
        a:
            "Whichever scores best on your task under your cost and latency constraints. We routinely run OpenAI, Anthropic, Google, and open-weights side by side.",
    },
    {
        q: "Where does the system run?",
        a:
            "Preferably your cloud (AWS, GCP, Azure) or a VPC we set up under your account. We avoid locking critical paths into a vendor you cannot leave.",
    },
    {
        q: "How do you measure quality?",
        a:
            "Ground-truth question sets, citation checks, calibrated LLM-as-judge where needed, plus cost and latency budgets. Evals run in CI and block regressions.",
    },
    {
        q: "What happens after launch?",
        a:
            "You can take full ownership with our docs and runbook, or keep us on a retainer for quality reports, model swaps, and new capabilities.",
    },
    {
        q: "Can you work with WhatsApp / Shopify / our ERP?",
        a:
            "Yes — if it has an API or a reliable export path. Integrations are usually the longest pole; we scope them explicitly in discovery.",
    },
    {
        q: "Do you sign NDAs and work under our security review?",
        a:
            "Yes. Production work assumes NDAs, least-privilege access, and whatever review your security team requires before we touch live data.",
    },
];

export const ENGAGEMENT_MODELS = [
    {
        title: "Prototype sprint",
        range: "1–2 weeks",
        body:
            "Prove the workflow on real data with a small eval set. Ends with a go / no-go recommendation and a clear production estimate.",
    },
    {
        title: "Production build",
        range: "6–10 weeks",
        body:
            "Full system in your repo and cloud: auth, observability, CI evals, runbook, and handoff. The default engagement for most clients.",
    },
    {
        title: "Build + operate",
        range: "Quarterly",
        body:
            "We stay on after launch for quality reports, model updates, and new capabilities — useful when your team is thin on AI ops capacity.",
    },
];

export const ABOUT_STORY = [
    "Logicense started from a simple frustration: too many AI projects end as impressive demos that never survive contact with production data, permissions, or the people who have to use them every day.",
    "We are a small, senior team based in India and working remote-first. The people on the intro call are the people writing the code, reviewing the evals, and sitting in the handoff. No layered accounts team. No slide decks pretending to be delivery.",
    "We treat large language models like any other unreliable dependency — with tests, budgets, observability, and a healthy respect for the humans on the other end of the workflow. If we cannot measure it, we do not ship it.",
];

export const TECH_CHOICES = [
    {
        title: "Why hybrid retrieval",
        body:
            "Vector search alone misses exact identifiers, SKUs, and clause numbers. Keyword search alone misses paraphrase. We fuse both and rerank before generation.",
    },
    {
        title: "Why evals in CI",
        body:
            "Prompt changes look harmless until they silently drop citation rate by 8%. If it is not tested on merge, it will regress in production.",
    },
    {
        title: "Why model-agnostic runtimes",
        body:
            "Providers change pricing, rate limits, and quality weekly. A thin adapter layer lets you swap without rewriting the business logic.",
    },
    {
        title: "Why human checkpoints",
        body:
            "The highest-ROI systems draft, classify, and route — then ask a person to approve the 5% that is ambiguous. Full autonomy is rarely the right first version.",
    },
];
