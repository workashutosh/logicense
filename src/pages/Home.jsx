import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";

import Section, { SectionHeader } from "@/components/site/Section";
import Terminal from "@/components/site/Terminal";
import CTAStripe from "@/components/site/CTAStripe";
import LogoCloud from "@/components/site/LogoCloud";
import BrandIcon from "@/components/site/BrandIcon";
import { Stagger, StaggerItem, FadeIn } from "@/components/site/motion";
import {
    SERVICES,
    INDUSTRIES,
    PROCESS,
    WORK,
    TECH_STACK,
    GOOD_FIT,
    FAQ,
    ENGAGEMENT_MODELS,
} from "@/lib/site";
import { AI_MODEL_LOGOS, INTEGRATION_LOGOS, stackIconSlug } from "@/lib/brands";

const AGENT_SNIPPET = [
    { tokens: [{ text: "# ", type: "comment" }, { text: "simplified agent loop", type: "comment" }] },
    {
        tokens: [
            { text: "def ", type: "keyword" },
            { text: "run", type: "fn" },
            { text: "(task: ", type: "plain" },
            { text: "Task", type: "accent" },
            { text: ") -> ", type: "plain" },
            { text: "Result", type: "accent" },
            { text: ":", type: "plain" },
        ],
    },
    { tokens: [{ text: "    state = init(task)", type: "plain" }] },
    {
        tokens: [
            { text: "    while ", type: "keyword" },
            { text: "not state.done ", type: "plain" },
            { text: "and ", type: "keyword" },
            { text: "state.steps < BUDGET:", type: "plain" },
        ],
    },
    { tokens: [{ text: "        plan   = model.plan(state)", type: "plain" }] },
    { tokens: [{ text: "        result = tools.call(plan.next)", type: "plain" }] },
    { tokens: [{ text: "        state  = observe(state, result)", type: "plain" }] },
    { tokens: [{ text: "        log(state, cost=state.cost)", type: "dim" }] },
    { tokens: [{ text: "    return ", type: "keyword" }, { text: "state.answer", type: "plain" }] },
];

const HeroStat = ({ k, v }) => (
    <div className="border-l border-border pl-5 py-1">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/50">
            {k}
        </div>
        <div className="mt-2 font-display text-2xl font-semibold">{v}</div>
    </div>
);

export default function Home() {
    return (
        <>
            <section className="relative overflow-hidden border-b border-border">
                <div className="absolute inset-0 lg-grid-bg opacity-40 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

                <div className="relative w-full px-4 md:px-6 lg:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/60"
                    >
                        <span className="lg-accent">{"//"}</span> AI development
                        agency · est. Bengaluru
                    </motion.div>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                        <div className="lg:col-span-7">
                            <motion.h1
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.05 }}
                                className="font-display text-[44px] leading-[0.98] sm:text-6xl md:text-7xl font-black tracking-tight text-balance"
                            >
                                We build AI systems
                                <br />
                                <span className="lg-accent">like engineering,</span>
                                <br />
                                not like demos.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                                className="mt-8 max-w-xl text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty"
                            >
                                Logicense designs and ships custom AI agents,
                                RAG pipelines, chatbots, and workflow
                                automation for teams that need real production
                                systems — measured, observable, and boring in
                                all the right places.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                                className="mt-10 flex flex-wrap items-center gap-3"
                            >
                                <Link
                                    to="/contact"
                                    data-testid="hero-book-call-cta"
                                    className="group inline-flex items-center gap-2.5 h-12 px-6 rounded-sm bg-foreground text-background font-mono text-[12px] uppercase tracking-[0.18em] hover:bg-foreground/85 transition-colors"
                                >
                                    Book a call
                                    <ArrowUpRight
                                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        strokeWidth={1.5}
                                    />
                                </Link>
                                <Link
                                    to="/services"
                                    data-testid="hero-services-cta"
                                    className="inline-flex items-center gap-2.5 h-12 px-6 rounded-sm border border-border text-foreground font-mono text-[12px] uppercase tracking-[0.18em] hover:border-foreground/40 hover:bg-muted transition-colors"
                                >
                                    What we build
                                    <ChevronRight
                                        className="h-4 w-4"
                                        strokeWidth={1.5}
                                    />
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mt-14 grid grid-cols-3 gap-4 max-w-xl"
                            >
                                <HeroStat k="Prototype" v="~2 wks" />
                                <HeroStat k="Production" v="6–10 wks" />
                                <HeroStat k="Handoff" v="Yours to run" />
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="lg:col-span-5 lg:pl-8"
                        >
                            <Terminal
                                title="~/logicense/agent.py"
                                lines={AGENT_SNIPPET}
                            />
                            <div className="mt-4 font-mono text-[11px] text-foreground/50">
                                <span className="lg-accent">↳</span> a
                                simplified control loop. In production: retries,
                                budgets, evals, tracing.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Section id="services">
                <SectionHeader
                    overline="What we build"
                    title="Four services, one operating model."
                    description="Every engagement starts with the same question: what does the smallest useful production system look like? Then we build only that, and iterate."
                />

                <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
                    {SERVICES.map((s) => (
                        <StaggerItem key={s.id} className="bg-background">
                        <Link
                            to={`/services#${s.id}`}
                            data-testid={`home-service-card-${s.id}`}
                            className="group block p-8 md:p-10 hover:bg-muted/40 transition-colors h-full"
                        >
                            <div className="flex items-baseline justify-between">
                                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50">
                                    {s.code} / Service
                                </span>
                                <ArrowUpRight
                                    className="h-4 w-4 text-foreground/40 transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h3 className="mt-6 font-display text-2xl md:text-3xl font-semibold tracking-tight">
                                {s.title}
                            </h3>
                            <p className="mt-3 text-foreground/70 leading-relaxed max-w-md">
                                {s.summary}
                            </p>
                            {s.fitFor ? (
                                <p className="mt-4 text-sm text-foreground/50 leading-relaxed max-w-md">
                                    {s.fitFor}
                                </p>
                            ) : null}
                        </Link>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="How we think"
                    title="Production first. Demo never."
                    description="We treat large language models like any other unreliable dependency — with tests, budgets, observability, and a clear owner on your side."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            t: "Workflow before model",
                            d: "We map the people, systems, and failure modes before we write a prompt. The model is a component, not the product.",
                        },
                        {
                            t: "Measure before scale",
                            d: "A ground-truth set and cost baseline come before traffic. If quality is not measurable, we do not widen the blast radius.",
                        },
                        {
                            t: "Humans where it matters",
                            d: "Draft, classify, route — then ask a person to approve the ambiguous 5%. Full autonomy is rarely the right first version.",
                        },
                        {
                            t: "Handoff by default",
                            d: "Code in your repo, docs in your wiki, runbook your team can follow. We should not be on the critical path forever.",
                        },
                    ].map((item) => (
                        <StaggerItem
                            key={item.t}
                            className="border border-border rounded-sm p-6 md:p-7"
                        >
                            <h3 className="font-display text-lg font-semibold">
                                {item.t}
                            </h3>
                            <p className="mt-3 text-sm text-foreground/65 leading-relaxed">
                                {item.d}
                            </p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Industries"
                    title="Domain-specific by design."
                    description="Generic AI is a demo. Useful AI is shaped to the domain. We pick engagements where we can learn a workflow deeply before we start writing prompts."
                />

                <Stagger className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {INDUSTRIES.map((ind, i) => (
                        <StaggerItem key={ind.id}>
                        <Link
                            to={`/industries#${ind.id}`}
                            data-testid={`home-industry-${ind.id}`}
                            className="group block border border-border rounded-sm p-5 hover:border-foreground/40 transition-colors h-full"
                        >
                            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/40">
                                {String(i + 1).padStart(2, "0")}
                            </div>
                            <div className="mt-2 font-display text-lg font-semibold group-hover:lg-accent transition-colors">
                                {ind.title}
                            </div>
                            <p className="mt-2 text-sm text-foreground/55 leading-relaxed">
                                {ind.blurb}
                            </p>
                        </Link>
                        </StaggerItem>
                    ))}
                </Stagger>

                <FadeIn className="mt-14">
                    <Link
                        to="/industries"
                        data-testid="home-industries-cta"
                        className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/70 hover:text-foreground"
                    >
                        See use cases per industry <span>→</span>
                    </Link>
                </FadeIn>
            </Section>

            <Section className="border-t border-border">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <SectionHeader
                            overline="Process"
                            title="Five steps. No mystery."
                            description="A predictable path from problem statement to production system. You'll always know what's happening this week, and why."
                        />
                        <Link
                            to="/process"
                            data-testid="home-process-cta"
                            className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/70 hover:text-foreground"
                        >
                            The full process <span>→</span>
                        </Link>
                    </div>
                    <div className="lg:col-span-7">
                        <Stagger as="ol" className="divide-y divide-border border border-border rounded-sm">
                            {PROCESS.map((p) => (
                                <StaggerItem
                                    as="li"
                                    key={p.step}
                                    className="grid grid-cols-12 gap-6 p-6 md:p-7 hover:bg-muted/40 transition-colors"
                                >
                                    <div className="col-span-2 font-mono text-sm text-foreground/50">
                                        {p.step}
                                    </div>
                                    <div className="col-span-10">
                                        <div className="flex flex-wrap items-baseline gap-3">
                                            <div className="font-display text-lg font-semibold">
                                                {p.title}
                                            </div>
                                            {p.duration ? (
                                                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/40">
                                                    {p.duration}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="mt-2 text-sm text-foreground/70 leading-relaxed">
                                            {p.body}
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Engagements"
                    title="Start as small as the question requires."
                    description="Most clients begin with a prototype sprint. If the numbers work, we continue into a production build — with or without an operate retainer."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ENGAGEMENT_MODELS.map((m) => (
                        <StaggerItem
                            key={m.title}
                            className="border border-border rounded-sm p-7 md:p-8"
                        >
                            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/45">
                                {m.range}
                            </div>
                            <h3 className="mt-3 font-display text-xl font-semibold">
                                {m.title}
                            </h3>
                            <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                                {m.body}
                            </p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <div className="flex items-end justify-between flex-wrap gap-6">
                    <SectionHeader
                        overline="Selected work"
                        title="Case studies."
                        description="A curated set of projects. More detail on the Work page as engagements complete and go public."
                    />
                    <Link
                        to="/work"
                        data-testid="home-work-cta"
                        className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/70 hover:text-foreground"
                    >
                        All work <span>→</span>
                    </Link>
                </div>

                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {WORK.slice(0, 3).map((w) => (
                        <StaggerItem
                            as="article"
                            key={w.id}
                            data-testid={`home-work-card-${w.id}`}
                            className="border border-border rounded-sm p-6 md:p-7 hover:border-foreground/40 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50">
                                    {w.industry}
                                </span>
                            </div>
                            <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-balance">
                                {w.headline}
                            </h3>
                            <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
                                {w.summary}
                            </p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Fit"
                    title="When we are the right team."
                    description="Four signals that usually mean we can help. If these do not sound like you, we will say so on the first call."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {GOOD_FIT.map((item) => (
                        <StaggerItem
                            key={item.title}
                            className="border border-border rounded-sm p-6 md:p-7"
                        >
                            <h3 className="font-display text-lg font-semibold">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                                {item.body}
                            </p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Stack & integrations"
                    title="Models and tools we ship with."
                    description="OpenAI, Anthropic, Gemini, WhatsApp, Sheets, Drive, Shopify, Slack — wired into your existing systems, not bolted on as a demo."
                />
                <div className="mt-10 space-y-8">
                    <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/45 mb-4">
                            AI models & orchestration
                        </div>
                        <LogoCloud
                            items={AI_MODEL_LOGOS}
                            compact
                            testId="home-ai-logos"
                        />
                    </div>
                    <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/45 mb-4">
                            Channels, data & cloud
                        </div>
                        <LogoCloud
                            items={INTEGRATION_LOGOS.slice(0, 18)}
                            compact
                            testId="home-integration-logos"
                        />
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5">
                        <SectionHeader
                            overline="Technology"
                            title="Model-agnostic. Boringly modern."
                            description="We pick the smallest set of tools that solve the problem and keep the option to swap later. Nothing exotic for the sake of it."
                        />
                        <Link
                            to="/technology"
                            data-testid="home-tech-cta"
                            className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/70 hover:text-foreground"
                        >
                            Full stack <span>→</span>
                        </Link>
                    </div>
                    <div className="lg:col-span-7">
                        <Stagger className="grid grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
                            {TECH_STACK.slice(0, 6).map((t) => (
                                <StaggerItem
                                    key={t.category}
                                    className="bg-background p-5"
                                >
                                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50">
                                        {t.category}
                                    </div>
                                    <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                                        {t.items.slice(0, 3).map((it) => {
                                            const slug = stackIconSlug(it);
                                            return (
                                                <li
                                                    key={it}
                                                    className="flex items-center gap-2"
                                                >
                                                    {slug ? (
                                                        <BrandIcon
                                                            slug={slug}
                                                            title={it}
                                                            className="h-3.5 w-3.5 flex-none text-foreground/65"
                                                            label={false}
                                                        />
                                                    ) : null}
                                                    <span>{it}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="FAQ"
                    title="Quick answers."
                    description="A few questions that come up on almost every intro call. More detail lives on the About and Technology pages."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {FAQ.slice(0, 6).map((item) => (
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
