import { motion } from "framer-motion";

import Section, { SectionHeader } from "@/components/site/Section";
import CTAStripe from "@/components/site/CTAStripe";
import { FadeIn, Stagger, StaggerItem } from "@/components/site/motion";
import {
    PRINCIPLES,
    ABOUT_STORY,
    GOOD_FIT,
    NOT_A_FIT,
    FAQ,
    ENGAGEMENT_MODELS,
} from "@/lib/site";

export default function About() {
    return (
        <>
            <Section dense className="border-b border-border">
                <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end" y={16}>
                    <div className="lg:col-span-8">
                        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/60 mb-6">
                            <span className="lg-accent">{"//"}</span> About
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance">
                            An engineering firm
                            <br />
                            that happens to work
                            <br />
                            in AI.
                        </h1>
                        <p className="mt-8 max-w-2xl text-lg text-foreground/70 leading-relaxed">
                            Logicense is a small, senior team building
                            production AI systems for teams that need more than
                            a demo. We treat LLMs like any other unreliable
                            dependency: with tests, budgets, and a healthy
                            respect for the humans on the other end.
                        </p>
                    </div>
                </FadeIn>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Story"
                    title="Why we exist."
                    description="Too many AI projects end as impressive demos that never survive contact with production data, permissions, or the people who have to use them every day."
                />
                <Stagger className="mt-12 max-w-3xl space-y-6">
                    {ABOUT_STORY.map((para) => (
                        <StaggerItem
                            as="p"
                            key={para.slice(0, 32)}
                            className="text-lg text-foreground/75 leading-relaxed"
                        >
                            {para}
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Principles"
                    title="How we work."
                    description="Six commitments that show up in every engagement, in the same order."
                />

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
                    {PRINCIPLES.map((p, i) => (
                        <motion.div
                            key={p.title}
                            data-testid={`principle-${i + 1}`}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.4, delay: i * 0.04 }}
                            className="bg-background p-8 md:p-10"
                        >
                            <div className="flex items-baseline justify-between">
                                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50">
                                    Principle · {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="h-1.5 w-1.5 rounded-full lg-bg-accent" />
                            </div>
                            <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                                {p.title}
                            </h3>
                            <p className="mt-3 text-foreground/70 leading-relaxed">
                                {p.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section className="border-t border-border">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <SectionHeader
                            overline="Fit"
                            title="Who we work best with."
                            description="We take on a small number of engagements at a time. These are the signals that usually mean we can help."
                        />
                    </div>
                    <Stagger className="lg:col-span-7 space-y-4">
                        {GOOD_FIT.map((item) => (
                            <StaggerItem
                                key={item.title}
                                className="border border-border rounded-sm p-6"
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
                </div>
            </Section>

            <Section className="border-t border-border">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <SectionHeader
                            overline="Not a fit"
                            title="When we will say no."
                            description="If we're not the right team, we'll tell you early — and where we can, point you at someone who is."
                        />
                    </div>
                    <Stagger className="lg:col-span-7 space-y-4">
                        {NOT_A_FIT.map((item) => (
                            <StaggerItem
                                key={item.title}
                                className="border border-border rounded-sm p-6"
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
                </div>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="Engagements"
                    title="How clients usually start."
                    description="Most relationships begin with a short prototype sprint. If the numbers work, we continue into a production build."
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
                <SectionHeader
                    overline="Team"
                    title="Small, senior, hands-on."
                    description="No layered accounts team. The people you meet on the intro call are the ones writing the code and reviewing the evals. Names and photos will be published here shortly."
                />

                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            n: 1,
                            role: "Founding engineer",
                            blurb:
                                "Owns agents, orchestration, and production handoff. The person on the intro call is the person in the repo.",
                        },
                        {
                            n: 2,
                            role: "Applied AI",
                            blurb:
                                "Retrieval, evaluation harnesses, and model selection against your cost and latency budgets.",
                        },
                        {
                            n: 3,
                            role: "Product & delivery",
                            blurb:
                                "Scopes the workflow with your operators and keeps the engagement honest about what ships when.",
                        },
                    ].map((member) => (
                        <StaggerItem
                            key={member.n}
                            data-testid={`team-card-${member.n}`}
                            className="border border-border rounded-sm p-7 flex flex-col"
                        >
                            <div className="h-14 w-14 rounded-sm border border-border grid place-items-center font-mono text-sm text-foreground/40">
                                {String(member.n).padStart(2, "0")}
                            </div>
                            <div className="mt-6 font-display text-xl font-semibold">
                                Team member
                            </div>
                            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50">
                                {member.role}
                            </div>
                            <p className="mt-4 text-sm text-foreground/70 leading-relaxed flex-1">
                                {member.blurb}
                            </p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="FAQ"
                    title="Questions from intro calls."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {FAQ.map((item) => (
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

            <CTAStripe
                overline="Want to work with us?"
                title="We take on a small number of engagements at a time."
                body="If your problem is well-scoped and you want it built properly, book a call. If we're not the right fit, we'll tell you and, where we can, point you at someone who is."
            />
        </>
    );
}
