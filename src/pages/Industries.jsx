import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/site/Section";
import CTAStripe from "@/components/site/CTAStripe";
import { FadeIn, Stagger, StaggerItem } from "@/components/site/motion";
import { INDUSTRIES, FAQ } from "@/lib/site";

const USE_CASES = {
    logistics: [
        "Shipment tracking assistants over TMS + carrier APIs",
        "Proof-of-delivery extraction from photos and PDFs",
        "Exception routing and freight quoting copilots",
        "Customer delay notifications drafted for human approval",
        "Lane and rate comparison from historical quotes",
    ],
    "real-estate": [
        "Lead qualification and routing across WhatsApp, web and phone",
        "Listing enrichment from raw descriptions and images",
        "Document workflows for KYC, agreements and disclosures",
        "Same-day lead summaries for sales managers",
        "Broker referral intake into a single CRM",
    ],
    retail: [
        "Catalog cleanup, deduplication and attribute extraction",
        "Product Q&A grounded on spec sheets and reviews",
        "Support deflection with clean handoff transcripts",
        "Live order-status checks via Shopify or custom backends",
        "Return and sizing policy answers without burning staff time",
    ],
    manufacturing: [
        "Spec-sheet retrieval across decades of PDFs and drawings",
        "RFQ triage and structured response drafting",
        "Shop-floor knowledge assistants for operators",
        "SOP troubleshooting with page-level citations",
        "Maintenance-log search during live stoppages",
    ],
    healthcare: [
        "Intake and eligibility copilots (non-clinical)",
        "Prior-authorization document preparation",
        "Coding assist and back-office reporting automation",
        "Appointment confirmations and reschedules via phone / WhatsApp",
        "Insurance FAQ handling with hard clinical escalation rules",
    ],
    legal: [
        "Clause extraction and playbook-based review support",
        "Matter-scoped research assistants with citations",
        "Redlining copilots that stay inside the reviewer's flow",
        "Precedent search across years of past agreements",
        "Internal memo Q&A with document-level provenance",
    ],
    "arch-3d": [
        "Parametric design assistants inside existing DCC tools",
        "Spec and code-compliance checks on drawing sets",
        "Content pipelines for renders, catalogs and marketing",
        "BIM revision summaries in plain English",
        "Design-brief deviation flags before client reviews",
    ],
    hospitality: [
        "Unified inquiry assistants across WhatsApp, web and Instagram",
        "Availability and package answers from live booking data",
        "Overnight guest Q&A without waking the front desk",
        "Immediate handoff for complaints and special requests",
        "Local recommendation answers grounded on your property notes",
    ],
    fintech: [
        "Month-end statement vs custodian reconciliation agents",
        "Discrepancy flagging above configurable thresholds",
        "Audit trails for every auto-reconciled line",
        "Back-office document classification and routing",
        "Operational copilots — never investment advice",
    ],
    edtech: [
        "Curriculum-grounded student Q&A assistants",
        "Escalation of complex or contested doubts to live tutors",
        "Support deflection on repetitive conceptual questions",
        "Course-material retrieval with lesson-level citations",
        "Tutor dashboards of unresolved topic clusters",
    ],
};

export default function Industries() {
    return (
        <>
            <Section dense className="border-b border-border">
                <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end" y={16}>
                    <div className="lg:col-span-8">
                        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/60 mb-6">
                            <span className="lg-accent">{"//"}</span> Industries
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance">
                            Domain-specific
                            <br />
                            by design.
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
                            Generic AI is a demo. Useful AI is shaped to the
                            domain — its data, its language, its regulations,
                            and the humans who have to sign off on it. We pick
                            engagements where we can learn a workflow deeply
                            before writing a single prompt.
                        </p>
                    </div>
                </FadeIn>
            </Section>

            <Section>
                <SectionHeader
                    overline="Where we work"
                    title="Sectors and example use cases."
                    description="These are the domains we've studied and shipped in. Each row is a starting point — the real system is always shaped to your operators, systems, and constraints."
                />

                <div className="mt-16 space-y-px bg-border border border-border rounded-sm overflow-hidden">
                    {INDUSTRIES.map((ind, i) => (
                        <motion.div
                            key={ind.id}
                            id={ind.id}
                            data-testid={`industry-row-${ind.id}`}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.4, delay: i * 0.03 }}
                            className="bg-background grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-10 hover:bg-muted/40 transition-colors"
                        >
                            <div className="md:col-span-3">
                                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50">
                                    {String(i + 1).padStart(2, "0")} / Sector
                                </div>
                                <div className="mt-3 font-display text-2xl md:text-3xl font-semibold tracking-tight">
                                    {ind.title}
                                </div>
                            </div>
                            <div className="md:col-span-4 space-y-4">
                                <p className="text-foreground/70 leading-relaxed">
                                    {ind.detail || ind.blurb}
                                </p>
                                {ind.pain ? (
                                    <p className="text-sm text-foreground/55 leading-relaxed border-l border-border pl-4">
                                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                                            Typical pain ·{" "}
                                        </span>
                                        {ind.pain}
                                    </p>
                                ) : null}
                            </div>
                            <div className="md:col-span-5">
                                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50 mb-3">
                                    Example use cases
                                </div>
                                <ul className="space-y-2">
                                    {(USE_CASES[ind.id] || []).map((u) => (
                                        <li
                                            key={u}
                                            className="flex gap-3 text-sm text-foreground/85"
                                        >
                                            <span className="mt-2 h-1 w-1 flex-none rounded-full lg-bg-accent" />
                                            <span>{u}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="mt-10 max-w-2xl text-sm text-foreground/50 leading-relaxed">
                    Not on this list? We take on projects outside our named
                    sectors when the workflow is well-defined and there is a
                    clear operator on the other side. Ask us.
                </p>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="How we enter a domain"
                    title="Learn the workflow before the model."
                    description="Every new sector engagement starts the same way: sit with the people who run the process, inventory the systems, and write down what 'working' means before a single prompt is written."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            n: "01",
                            t: "Shadow the operators",
                            d: "Watch the real morning routine — portals, spreadsheets, phone calls — not the process diagram on the wall.",
                        },
                        {
                            n: "02",
                            t: "Name the failure modes",
                            d: "Wrong answers, missed handoffs, stale data. We design for the ways the current process already breaks.",
                        },
                        {
                            n: "03",
                            t: "Respect the regulations",
                            d: "Healthcare stays non-clinical. Finance stays operational. Legal answers cite sources. Boundaries are product requirements.",
                        },
                        {
                            n: "04",
                            t: "Ship with the domain owner",
                            d: "The person who owns the KPI reviews the prototype. If they would not use it next week, we do not call it done.",
                        },
                    ].map((item) => (
                        <StaggerItem
                            key={item.n}
                            className="border border-border rounded-sm p-6 md:p-7"
                        >
                            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/45">
                                {item.n}
                            </div>
                            <h3 className="mt-3 font-display text-lg font-semibold">
                                {item.t}
                            </h3>
                            <p className="mt-2 text-sm text-foreground/65 leading-relaxed">
                                {item.d}
                            </p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="FAQ"
                    title="Common questions."
                    description="A few answers that come up on almost every industry intro call."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {FAQ.slice(0, 4).map((item) => (
                        <StaggerItem
                            key={item.q}
                            className="border border-border rounded-sm p-6 md:p-7"
                        >
                            <h3 className="font-display text-lg font-semibold leading-snug">
                                {item.q}
                            </h3>
                            <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                                {item.a}
                            </p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <CTAStripe />
        </>
    );
}
