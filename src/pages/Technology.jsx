import Section, { SectionHeader } from "@/components/site/Section";
import Terminal from "@/components/site/Terminal";
import AgentLoop from "@/components/site/AgentLoop";
import CTAStripe from "@/components/site/CTAStripe";
import LogoCloud from "@/components/site/LogoCloud";
import BrandIcon from "@/components/site/BrandIcon";
import { FadeIn, Stagger, StaggerItem } from "@/components/site/motion";
import { TECH_STACK, TECH_CHOICES, FAQ } from "@/lib/site";
import {
    AI_MODEL_LOGOS,
    INTEGRATION_LOGOS,
    stackIconSlug,
} from "@/lib/brands";

const EVAL_SNIPPET = [
    { tokens: [{ text: "# ", type: "comment" }, { text: "evals live in CI, not in a notebook", type: "comment" }] },
    { tokens: [{ text: "suite = ", type: "plain" }, { text: "EvalSuite", type: "accent" }, { text: '.load("qa/v3.jsonl")', type: "plain" }] },
    { tokens: [{ text: "results = suite.run(", type: "plain" }] },
    { tokens: [{ text: "    system=build_system(cfg),", type: "plain" }] },
    { tokens: [{ text: "    judges=[llm_judge, exact_match, citation_check],", type: "plain" }] },
    { tokens: [{ text: "    budgets={", type: "plain" }] },
    { tokens: [{ text: '        "p95_latency_ms": 4000,', type: "string" }] },
    { tokens: [{ text: '        "cost_per_query_usd": 0.02,', type: "string" }] },
    { tokens: [{ text: "    },", type: "plain" }] },
    { tokens: [{ text: ")", type: "plain" }] },
    { tokens: [{ text: "results.fail_if_regression(threshold=0.02)", type: "plain" }] },
];

export default function Technology() {
    return (
        <>
            <Section dense className="border-b border-border">
                <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end" y={16}>
                    <div className="lg:col-span-8">
                        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/60 mb-6">
                            <span className="lg-accent">{"//"}</span> Technology
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance">
                            Model-agnostic.
                            <br />
                            Boringly modern.
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
                            We pick the smallest set of tools that solve the
                            problem, and keep the option to swap later. No
                            exotic frameworks for the sake of it. No lock-in to
                            a single model provider unless you explicitly want
                            it. Every choice is justified against your latency,
                            cost, and compliance constraints.
                        </p>
                    </div>
                </FadeIn>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Models"
                    title="AI providers we work with."
                    description="Model-agnostic by default. We benchmark per task and keep the option to swap — OpenAI, Anthropic, Gemini, open-weights, and the orchestration layer around them."
                />
                <div className="mt-14">
                    <LogoCloud items={AI_MODEL_LOGOS} testId="tech-ai-logos" />
                </div>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Integrations"
                    title="Systems we wire into."
                    description="WhatsApp, Sheets, Drive, Shopify, Slack, CRMs, clouds — if it has an API or a reliable export, we can put it on the critical path."
                />
                <div className="mt-14">
                    <LogoCloud
                        items={INTEGRATION_LOGOS}
                        compact
                        testId="tech-integration-logos"
                    />
                </div>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Simplified agent loop"
                    title="A working mental model."
                    description="Every agent we ship is a variation of this pattern. Plan, act with tools, observe, decide whether to loop. Around it we add budgets, retries, evaluation, and human review — the parts that make it safe in production."
                />

                <div className="mt-14">
                    <AgentLoop />
                </div>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Stack"
                    title="What we reach for."
                    description="Defaults, not commitments. Every engagement starts by justifying a choice against the actual constraints of the workflow."
                />

                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-sm overflow-hidden">
                    {TECH_STACK.map((cat, i) => (
                        <StaggerItem
                            key={cat.category}
                            data-testid={`tech-stack-${cat.category
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            className="bg-background p-6"
                        >
                            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50">
                                {String(i + 1).padStart(2, "0")} · {cat.category}
                            </div>
                            <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                                {cat.items.map((it) => {
                                    const slug = stackIconSlug(it);
                                    return (
                                        <li
                                            key={it}
                                            className="flex gap-3 items-center"
                                        >
                                            {slug ? (
                                                <BrandIcon
                                                    slug={slug}
                                                    title={it}
                                                    className="h-3.5 w-3.5 flex-none text-foreground/70"
                                                    label={false}
                                                />
                                            ) : (
                                                <span className="mt-0 h-1 w-1 flex-none rounded-full bg-foreground/40" />
                                            )}
                                            <span>{it}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Design choices"
                    title="Why we pick what we pick."
                    description="A few opinions that show up in almost every architecture review. They are defaults — we change them when your constraints demand it."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {TECH_CHOICES.map((c) => (
                        <StaggerItem
                            key={c.title}
                            className="border border-border rounded-sm p-7 md:p-8"
                        >
                            <h3 className="font-display text-xl font-semibold tracking-tight">
                                {c.title}
                            </h3>
                            <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                                {c.body}
                            </p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5">
                        <SectionHeader
                            overline="Evaluation harness"
                            title="Evaluation is the product."
                            description="Before we optimize, we measure. Ground-truth QA sets, calibrated LLM-as-judge, cost budgets, and latency SLOs live in the same repo as the code — and block merges when they regress. A system without evals is a demo with better hosting."
                        />
                        <ul className="mt-8 space-y-3 max-w-md">
                            {[
                                "Ground-truth sets owned jointly with your operators",
                                "Citation and refusal checks for retrieval systems",
                                "Cost and p95 latency budgets per query path",
                                "Regression gates on every pull request",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex gap-3 text-sm text-foreground/80"
                                >
                                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full lg-bg-accent" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7">
                        <Terminal title="ci/evals.py" lines={EVAL_SNIPPET} />
                        <div className="mt-4 font-mono text-[11px] text-foreground/50">
                            <span className="lg-accent">↳</span> a real
                            evaluation config looks like this — not a screenshot
                            of a spreadsheet.
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Security & ops"
                    title="Production constraints are product requirements."
                    description="We assume NDAs, least-privilege access, and whatever review your security team requires before we touch live data."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            t: "Data stays yours",
                            d: "Prefer your VPC. Training on your corpus for a third-party model is opt-in and documented — never the default.",
                        },
                        {
                            t: "Least privilege",
                            d: "Service accounts scoped to the APIs the workflow needs. No shared admin keys sitting in a notebook.",
                        },
                        {
                            t: "Observable by default",
                            d: "Traces, costs, and failure modes visible in tools your team already uses — Langfuse, OpenTelemetry, Grafana, Sentry.",
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

            <Section className="border-t border-border">
                <SectionHeader
                    overline="FAQ"
                    title="Technology questions we hear often."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {FAQ.filter((_, i) => [2, 3, 4, 6].includes(i)).map(
                        (item) => (
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
                        )
                    )}
                </Stagger>
            </Section>

            <CTAStripe />
        </>
    );
}
