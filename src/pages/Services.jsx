import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Section, { SectionHeader } from "@/components/site/Section";
import Terminal from "@/components/site/Terminal";
import CTAStripe from "@/components/site/CTAStripe";
import LogoCloud from "@/components/site/LogoCloud";
import { FadeIn, Stagger, StaggerItem } from "@/components/site/motion";
import { SERVICES } from "@/lib/site";
import { AI_MODEL_LOGOS, INTEGRATION_LOGOS } from "@/lib/brands";

const RAG_SNIPPET = [
    { tokens: [{ text: "# ", type: "comment" }, { text: "hybrid retrieval + rerank", type: "comment" }] },
    {
        tokens: [
            { text: "hits ", type: "plain" },
            { text: "= ", type: "plain" },
            { text: "await ", type: "keyword" },
            { text: "asyncio", type: "accent" },
            { text: ".gather(", type: "plain" },
        ],
    },
    { tokens: [{ text: "    vector.search(q, k=40),", type: "plain" }] },
    { tokens: [{ text: "    bm25.search(q, k=40),", type: "plain" }] },
    { tokens: [{ text: ")", type: "plain" }] },
    { tokens: [{ text: "docs = fuse(hits)", type: "plain" }] },
    { tokens: [{ text: "top  = ", type: "plain" }, { text: "reranker", type: "accent" }, { text: ".rank(q, docs, k=8)", type: "plain" }] },
    { tokens: [{ text: "return ", type: "keyword" }, { text: "generator", type: "fn" }, { text: "(q, top, citations=", type: "plain" }, { text: "True", type: "accent" }, { text: ")", type: "plain" }] },
];

const AGENT_SNIPPET = [
    { tokens: [{ text: "graph = ", type: "plain" }, { text: "StateGraph", type: "accent" }, { text: "(AgentState)", type: "plain" }] },
    { tokens: [{ text: 'graph.add_node("plan", plan_step)', type: "string" }] },
    { tokens: [{ text: 'graph.add_node("act",  act_step)', type: "string" }] },
    { tokens: [{ text: 'graph.add_node("check", eval_step)', type: "string" }] },
    { tokens: [{ text: 'graph.add_edge("plan", "act")', type: "string" }] },
    { tokens: [{ text: 'graph.add_conditional_edges("check", route,', type: "string" }] },
    { tokens: [{ text: '    {"retry": "plan", "done": END, "human": HUMAN})', type: "string" }] },
];

const CHAT_SNIPPET = [
    { tokens: [{ text: "# ", type: "comment" }, { text: "grounded chat: source or refuse", type: "comment" }] },
    { tokens: [{ text: "ctx = retriever.get(user_q, filters=tenant)", type: "plain" }] },
    { tokens: [{ text: "if ", type: "keyword" }, { text: "not ", type: "keyword" }, { text: "ctx.has_evidence:", type: "plain" }] },
    { tokens: [{ text: "    return ", type: "keyword" }, { text: 'Reply.refuse("no source found")', type: "string" }] },
    { tokens: [{ text: "reply = llm.answer(user_q, ctx=ctx, ", type: "plain" }] },
    { tokens: [{ text: "                  system=SYS, style=BRAND)", type: "plain" }] },
    { tokens: [{ text: "log.trace(reply, ctx, cost=reply.cost)", type: "dim" }] },
];

const WORKFLOW_SNIPPET = [
    { tokens: [{ text: "# ", type: "comment" }, { text: "invoice ingest pipeline", type: "comment" }] },
    { tokens: [{ text: "pdf   = storage.pull(event.blob_id)", type: "plain" }] },
    { tokens: [{ text: "pages = ocr.pages(pdf)", type: "plain" }] },
    { tokens: [{ text: "doc   = extractor.parse(pages, schema=", type: "plain" }, { text: '"invoice_v3"', type: "string" }, { text: ")", type: "plain" }] },
    { tokens: [{ text: "if ", type: "keyword" }, { text: "doc.confidence < 0.92:", type: "plain" }] },
    { tokens: [{ text: "    queue.route(doc, to=", type: "plain" }, { text: '"human_review"', type: "string" }, { text: ")", type: "plain" }] },
    { tokens: [{ text: "else", type: "keyword" }, { text: ":", type: "plain" }] },
    { tokens: [{ text: "    erp.post(doc)", type: "plain" }] },
];

const SNIPPETS = {
    agents: { title: "graph.py", lines: AGENT_SNIPPET },
    rag: { title: "retrieve.py", lines: RAG_SNIPPET },
    chatbots: { title: "reply.py", lines: CHAT_SNIPPET },
    workflow: { title: "pipeline.py", lines: WORKFLOW_SNIPPET },
};

export default function Services() {
    return (
        <>
            <Section dense className="border-b border-border">
                <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end" y={16}>
                    <div className="lg:col-span-8">
                        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/60 mb-6">
                            <span className="lg-accent">{"//"}</span> Services
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance">
                            Four services.
                            <br />
                            One operating model.
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
                            Every engagement starts with the same question: what
                            does the smallest useful production system look
                            like? Then we build only that, evaluate it against
                            real data, and iterate.
                        </p>
                    </div>
                </FadeIn>
            </Section>

            {SERVICES.map((s, i) => {
                const snippet = SNIPPETS[s.id];
                const reversed = i % 2 === 1;
                return (
                    <Section
                        key={s.id}
                        id={s.id}
                        className={
                            i > 0 ? "border-t border-border" : "border-t border-border"
                        }
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                        >
                            <div
                                className={`lg:col-span-6 ${
                                    reversed ? "lg:order-2" : ""
                                }`}
                            >
                                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/60">
                                    {s.code} / Service
                                </div>
                                <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold tracking-tight">
                                    {s.title}
                                </h2>
                                <p className="mt-5 text-lg text-foreground/70 leading-relaxed max-w-xl">
                                    {s.summary}
                                </p>
                                {s.body ? (
                                    <p className="mt-4 text-foreground/65 leading-relaxed max-w-xl">
                                        {s.body}
                                    </p>
                                ) : null}
                                <ul className="mt-8 space-y-3">
                                    {s.bullets.map((b) => (
                                        <li
                                            key={b}
                                            className="flex gap-3 text-foreground/85"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full lg-bg-accent" />
                                            <span className="leading-relaxed">
                                                {b}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                {s.outcomes?.length ? (
                                    <div className="mt-10 border border-border rounded-sm p-5 md:p-6 bg-card/40">
                                        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50 mb-3">
                                            What changes
                                        </div>
                                        <ul className="space-y-2">
                                            {s.outcomes.map((o) => (
                                                <li
                                                    key={o}
                                                    className="flex gap-3 text-sm text-foreground/85"
                                                >
                                                    <span className="font-mono text-[11px] text-foreground/40 mt-0.5">
                                                        ↳
                                                    </span>
                                                    {o}
                                                </li>
                                            ))}
                                        </ul>
                                        {s.fitFor ? (
                                            <p className="mt-4 pt-4 border-t border-border text-sm text-foreground/60 leading-relaxed">
                                                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
                                                    Best fit ·{" "}
                                                </span>
                                                {s.fitFor}
                                            </p>
                                        ) : null}
                                    </div>
                                ) : null}
                                <div className="mt-10">
                                    <Link
                                        to="/contact"
                                        data-testid={`service-${s.id}-cta`}
                                        className="inline-flex items-center gap-2 h-11 px-5 rounded-sm border border-border font-mono text-[12px] uppercase tracking-[0.18em] hover:border-foreground/40 hover:bg-muted transition-colors"
                                    >
                                        Talk about a {s.title.toLowerCase()}{" "}
                                        project <span>→</span>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={`lg:col-span-6 ${
                                    reversed ? "lg:order-1" : ""
                                }`}
                            >
                                {snippet ? (
                                    <Terminal
                                        title={snippet.title}
                                        lines={snippet.lines}
                                    />
                                ) : null}
                            </div>
                        </motion.div>
                    </Section>
                );
            })}

            <Section className="border-t border-border">
                <SectionHeader
                    overline="How we scope"
                    title="Same operating model for every service."
                    description="Whether you need an agent, a retrieval pipeline, a chatbot, or a quiet back-office workflow, the engagement shape stays the same: discover, prototype on real data, harden, deploy, iterate."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            t: "Start small",
                            d: "We ship the smallest useful production slice first — usually one workflow, one channel, one success metric — then expand.",
                        },
                        {
                            t: "Measure before scale",
                            d: "A ground-truth set and cost baseline come before traffic. If quality is not measurable, we do not widen the blast radius.",
                        },
                        {
                            t: "Handoff by default",
                            d: "Code lives in your repo. Docs and a runbook ship with the system. You should be able to run it without us on the critical path.",
                        },
                    ].map((item) => (
                        <StaggerItem
                            key={item.t}
                            className="border border-border rounded-sm p-7 md:p-8"
                        >
                            <h3 className="font-display text-xl font-semibold tracking-tight">
                                {item.t}
                            </h3>
                            <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                                {item.d}
                            </p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Integrations"
                    title="Wired to the tools your team already uses."
                    description="WhatsApp, Sheets, Drive, Shopify, Slack, CRMs, and the model providers behind the agents — we meet your stack where it is."
                />
                <div className="mt-10 space-y-8">
                    <LogoCloud
                        items={AI_MODEL_LOGOS.slice(0, 8)}
                        compact
                        testId="services-ai-logos"
                    />
                    <LogoCloud
                        items={INTEGRATION_LOGOS.slice(0, 16)}
                        compact
                        testId="services-integration-logos"
                    />
                </div>
            </Section>

            <CTAStripe />
        </>
    );
}
