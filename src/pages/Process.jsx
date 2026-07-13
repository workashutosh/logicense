import { motion } from "framer-motion";

import Section, { SectionHeader } from "@/components/site/Section";
import CTAStripe from "@/components/site/CTAStripe";
import { FadeIn, Stagger, StaggerItem } from "@/components/site/motion";
import { PROCESS } from "@/lib/site";

const DELIVERABLES = {
    "01": [
        "Written problem statement",
        "Data inventory and access plan",
        "Success criteria and evaluation approach",
    ],
    "02": [
        "Working prototype on real data",
        "Small ground-truth QA set",
        "Cost / latency baseline",
    ],
    "03": [
        "Production codebase in your repo",
        "Auth, logging, retries, rate limits",
        "CI with automated evals",
    ],
    "04": [
        "Deployment to your cloud",
        "Runbook and on-call docs",
        "Handoff session with your team",
    ],
    "05": [
        "Weekly / monthly quality reports",
        "Model, prompt and retrieval updates",
        "New capability rollouts",
    ],
};

export default function Process() {
    return (
        <>
            <Section dense className="border-b border-border">
                <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end" y={16}>
                    <div className="lg:col-span-8">
                        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/60 mb-6">
                            <span className="lg-accent">{"//"}</span> Process
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance">
                            Five steps.
                            <br />
                            No mystery.
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
                            A predictable path from problem statement to
                            production system. You&rsquo;ll always know what&rsquo;s
                            happening this week, why we&rsquo;re doing it, and how
                            we&rsquo;ll know it worked.
                        </p>
                    </div>
                </FadeIn>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-28">
                            <SectionHeader
                                overline="Timeline"
                                title="Discovery to iteration."
                                description="Each step has clear deliverables. Nothing is billed against 'strategy' or 'ideation.' If we can't tell you what you're getting, we won't send an invoice for it."
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <ol className="relative border-l border-border pl-8 space-y-16">
                            {PROCESS.map((p, i) => (
                                <motion.li
                                    key={p.step}
                                    data-testid={`process-step-${p.step}`}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border border-background lg-bg-accent" />
                                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50">
                                        Step {p.step}
                                        {p.duration ? (
                                            <span className="text-foreground/35">
                                                {" "}
                                                · {p.duration}
                                            </span>
                                        ) : null}
                                    </div>
                                    <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
                                        {p.title}
                                    </h3>
                                    <p className="mt-4 text-foreground/75 leading-relaxed max-w-2xl">
                                        {p.body}
                                    </p>

                                    {p.activities?.length ? (
                                        <div className="mt-6">
                                            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50 mb-3">
                                                What we do
                                            </div>
                                            <ul className="space-y-2 max-w-2xl">
                                                {p.activities.map((a) => (
                                                    <li
                                                        key={a}
                                                        className="flex gap-3 text-sm text-foreground/80"
                                                    >
                                                        <span className="mt-2 h-1 w-1 flex-none rounded-full lg-bg-accent" />
                                                        <span>{a}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : null}

                                    <div className="mt-6 border border-border rounded-sm p-5 md:p-6 bg-card/40">
                                        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50 mb-3">
                                            Deliverables
                                        </div>
                                        <ul className="space-y-2">
                                            {(DELIVERABLES[p.step] || []).map(
                                                (d) => (
                                                    <li
                                                        key={d}
                                                        className="flex gap-3 text-sm text-foreground/85"
                                                    >
                                                        <span className="font-mono text-[11px] text-foreground/40 mt-0.5">
                                                            ↳
                                                        </span>
                                                        {d}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </motion.li>
                            ))}
                        </ol>
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Engagement shapes"
                    title="Three ways to work with us."
                    description="Pick the smallest commitment that answers your question. Most clients start with a prototype sprint, then decide whether to continue into a production build."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            t: "Prototype sprint",
                            r: "1–2 weeks",
                            d: "Prove the workflow on real data with a small eval set. Ends with a go / no-go and a production estimate you can take to your team.",
                        },
                        {
                            t: "Production build",
                            r: "6–10 weeks",
                            d: "Full system in your repo and cloud: auth, observability, CI evals, runbook, and handoff. The default path for most engagements.",
                        },
                        {
                            t: "Build + operate",
                            r: "Quarterly",
                            d: "We stay after launch for quality reports, model updates, and new capabilities when your team is thin on AI ops capacity.",
                        },
                    ].map((m) => (
                        <StaggerItem
                            key={m.t}
                            className="border border-border rounded-sm p-7 md:p-8 flex flex-col"
                        >
                            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/45">
                                {m.r}
                            </div>
                            <h3 className="mt-3 font-display text-xl font-semibold">
                                {m.t}
                            </h3>
                            <p className="mt-3 text-sm text-foreground/70 leading-relaxed flex-1">
                                {m.d}
                            </p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Working rhythm"
                    title="What a typical week looks like."
                    description="No black-box weeks. You always know what is in flight, what is blocked, and what decision we need from you."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            t: "Async by default",
                            d: "Daily written updates in your preferred channel. We do not invent status meetings to fill a calendar.",
                        },
                        {
                            t: "One decision owner",
                            d: "We need a single person on your side who can unblock data access and approve go / no-go calls within a day.",
                        },
                        {
                            t: "Shared eval set",
                            d: "Quality is not a vibe check. We maintain a shared ground-truth set that both sides can inspect and extend.",
                        },
                        {
                            t: "No surprise invoices",
                            d: "Scope changes are written down before work starts. If we cannot name the deliverable, we do not bill for it.",
                        },
                    ].map((item) => (
                        <StaggerItem
                            key={item.t}
                            className="border border-border rounded-sm p-6 md:p-7"
                        >
                            <h3 className="font-display text-lg font-semibold">
                                {item.t}
                            </h3>
                            <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                                {item.d}
                            </p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <CTAStripe />
        </>
    );
}
