import { motion } from "framer-motion";

import Section, { SectionHeader } from "@/components/site/Section";
import CTAStripe from "@/components/site/CTAStripe";
import BrandIcon from "@/components/site/BrandIcon";
import { FadeIn, Stagger, StaggerItem } from "@/components/site/motion";
import { WORK } from "@/lib/site";
import { stackIconSlug } from "@/lib/brands";

export default function Work() {
    return (
        <>
            <Section dense className="border-b border-border">
                <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end" y={16}>
                    <div className="lg:col-span-8">
                        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/60 mb-6">
                            <span className="lg-accent">{"//"}</span> Work
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance">
                            Selected case studies.
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
                            A curated set of engagements. Real client details
                            replace these write-ups once projects go public and
                            clients approve them.
                        </p>
                    </div>
                </FadeIn>
            </Section>

            <Section>
                <SectionHeader
                    overline="Case studies"
                    title="What we've shipped."
                    description="Each card is a short, honest write-up: the problem, what we built, and how we measured it. We link to public artifacts wherever the client permits."
                />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {WORK.map((w, i) => (
                        <motion.article
                            key={w.id}
                            data-testid={`work-card-${w.id}`}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.45, delay: i * 0.06 }}
                            className="group border border-border rounded-sm p-7 md:p-8 hover:border-foreground/40 transition-colors flex flex-col"
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50">
                                    {String(i + 1).padStart(2, "0")} ·{" "}
                                    {w.industry}
                                </span>
                            </div>

                            <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50">
                                Client
                            </div>
                            <div className="mt-1 font-display text-base font-semibold">
                                {w.client}
                            </div>

                            <h3 className="mt-6 font-display text-xl md:text-2xl font-semibold leading-snug text-balance">
                                {w.headline}
                            </h3>

                            <p className="mt-4 text-sm text-foreground/70 leading-relaxed flex-1">
                                {w.summary}
                            </p>

                            {w.quote ? (
                                <blockquote className="mt-5 border-l border-[hsl(var(--lg-accent))]/50 pl-4 text-sm italic text-foreground/60 leading-relaxed">
                                    “{w.quote}”
                                </blockquote>
                            ) : null}

                            <div className="mt-8 pt-6 border-t border-border">
                                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50 mb-3">
                                    Stack
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {w.stack.map((t) => {
                                        const slug = stackIconSlug(t);
                                        return (
                                            <span
                                                key={t}
                                                className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2 py-1 rounded-sm bg-muted text-foreground/80"
                                            >
                                                {slug ? (
                                                    <BrandIcon
                                                        slug={slug}
                                                        title={t}
                                                        className="h-3 w-3"
                                                        label={false}
                                                    />
                                                ) : null}
                                                {t}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader
                    overline="How we write case studies"
                    title="Problem, system, measurement."
                    description="Every public write-up follows the same shape. We do not invent metrics. We do not publish client names without approval."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            t: "The situation",
                            d: "What the team was doing by hand, which systems were involved, and where the process broke under load.",
                        },
                        {
                            t: "What we built",
                            d: "The smallest useful production system — channels, integrations, human checkpoints, and what was deliberately left out.",
                        },
                        {
                            t: "What changed",
                            d: "Outcomes the operators can feel: time saved, errors avoided, or work redirected. Numbers only when verifiable.",
                        },
                    ].map((item) => (
                        <StaggerItem
                            key={item.t}
                            className="border border-border rounded-sm p-7 md:p-8"
                        >
                            <h3 className="font-display text-xl font-semibold">
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
                    overline="Founding clients"
                    title="Trade a public write-up for deeper attention."
                    description="We take on a small number of founding engagements each quarter. In exchange for a public case study once the system is live, we offer tighter senior involvement and a founding-client rate."
                />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            t: "What you get",
                            items: [
                                "Direct access to the engineers building the system",
                                "Priority on the prototype sprint calendar",
                                "Founding-client commercial terms",
                                "A public write-up you approve line by line",
                            ],
                        },
                        {
                            t: "What we need",
                            items: [
                                "A well-defined workflow with a clear owner",
                                "Access to sample data within the first week",
                                "Willingness to measure quality honestly",
                                "Permission to publish once you are happy",
                            ],
                        },
                    ].map((col) => (
                        <StaggerItem
                            key={col.t}
                            className="border border-border rounded-sm p-7 md:p-8"
                        >
                            <h3 className="font-display text-xl font-semibold">
                                {col.t}
                            </h3>
                            <ul className="mt-4 space-y-2">
                                {col.items.map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 text-sm text-foreground/80"
                                    >
                                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full lg-bg-accent" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <CTAStripe
                overline="Interested in being a case study?"
                title="We're taking on 2–3 founding clients this quarter."
                body="If your problem is well-defined and you want first-class engineering attention on it, we can offer a founding-client rate in exchange for a public write-up once the system is live."
                ctaLabel="Start a conversation"
            />
        </>
    );
}
