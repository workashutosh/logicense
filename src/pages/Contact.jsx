import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

import Section, { SectionHeader } from "@/components/site/Section";
import { FadeIn, Stagger, StaggerItem } from "@/components/site/motion";
import { SITE, FAQ, ENGAGEMENT_MODELS, GOOD_FIT } from "@/lib/site";

const SERVICE_OPTIONS = [
    "AI Agents",
    "RAG Pipelines",
    "Chatbots & Assistants",
    "Workflow Automation",
    "Not sure yet",
];

const BUDGET_OPTIONS = [
    "< $10k (exploratory)",
    "$10k – $30k (prototype)",
    "$30k – $100k (build)",
    "$100k+ (build + operate)",
    "Prefer not to say",
];

const BRIEF_TIPS = [
    "The workflow as it exists today — who does what, in which tools",
    "Where it breaks: volume, errors, delays, or missed handoffs",
    "Systems involved (CRM, ERP, WhatsApp, Shopify, custom APIs)",
    "What 'working' would look like in one measurable sentence",
    "Any hard constraints: compliance, latency, on-prem, languages",
];

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        service: SERVICE_OPTIONS[0],
        budget: BUDGET_OPTIONS[0],
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const update = (k) => (e) =>
        setForm((f) => ({ ...f, [k]: e.target.value }));

    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = "Required";
        if (!form.email.trim()) next.email = "Required";
        else if (!/^\S+@\S+\.\S+$/.test(form.email))
            next.email = "Doesn't look like an email";
        if (!form.message.trim() || form.message.trim().length < 12)
            next.message = "Give us a couple of sentences at least";
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            toast.error("Please fix the highlighted fields.");
            return;
        }
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            toast.success(
                "Thanks — we'll be in touch. (Note: this form is not yet wired to a backend.)"
            );
            setForm({
                name: "",
                email: "",
                company: "",
                service: SERVICE_OPTIONS[0],
                budget: BUDGET_OPTIONS[0],
                message: "",
            });
        }, 700);
    };

    const inputBase =
        "w-full h-11 px-3 rounded-sm bg-background border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[hsl(var(--lg-accent))] focus:ring-2 focus:ring-[hsl(var(--lg-accent))]/25 transition-colors";

    return (
        <>
            <Section dense className="border-b border-border">
                <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end" y={16}>
                    <div className="lg:col-span-8">
                        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/60 mb-6">
                            <span className="lg-accent">{"//"}</span> Contact
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance">
                            Tell us about
                            <br />
                            the workflow.
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
                            The more concrete you are, the more useful our first
                            reply will be. If you don&rsquo;t know yet, that&rsquo;s fine &mdash;
                            write what you do know and we&rsquo;ll take it from there.
                        </p>
                    </div>
                </FadeIn>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-4"
                    >
                        <div className="lg:sticky lg:top-28 space-y-8">
                            <div>
                                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50 mb-3">
                                    Direct
                                </div>
                                <a
                                    href={`mailto:${SITE.contactEmail}`}
                                    data-testid="contact-email-direct"
                                    className="inline-flex items-center gap-3 text-lg font-display font-semibold hover:lg-accent transition-colors"
                                >
                                    <Mail className="h-4 w-4" strokeWidth={1.5} />
                                    {SITE.contactEmail}
                                </a>
                            </div>

                            <div>
                                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50 mb-3">
                                    Based
                                </div>
                                <div className="flex items-start gap-3 text-foreground/85">
                                    <MapPin className="h-4 w-4 mt-1 text-foreground/50" strokeWidth={1.5} />
                                    <span>India · Remote-first</span>
                                </div>
                            </div>

                            <div>
                                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50 mb-3">
                                    Response time
                                </div>
                                <div className="flex items-start gap-3 text-foreground/85">
                                    <Clock className="h-4 w-4 mt-1 text-foreground/50" strokeWidth={1.5} />
                                    <span>
                                        Within one working day. Faster for
                                        well-scoped briefs.
                                    </span>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border">
                                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50 mb-3">
                                    What to include
                                </div>
                                <ul className="space-y-2">
                                    {BRIEF_TIPS.map((tip) => (
                                        <li key={tip} className="flex gap-3 text-sm text-foreground/70">
                                            <span className="font-mono text-[11px] text-foreground/40 mt-0.5">↳</span>
                                            <span>{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-border">
                                <a
                                    href={SITE.bookACall}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    data-testid="contact-book-call-direct"
                                    className="group inline-flex items-center gap-2.5 h-11 px-5 rounded-sm border border-border font-mono text-[12px] uppercase tracking-[0.18em] text-foreground hover:border-foreground/40 hover:bg-muted transition-colors"
                                >
                                    Or book a 30-min call
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        onSubmit={onSubmit}
                        noValidate
                        data-testid="contact-form"
                        className="lg:col-span-8 border border-border rounded-sm p-6 md:p-10 bg-card/40"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <label className="block">
                                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/60">Name</span>
                                <input type="text" value={form.name} onChange={update("name")} data-testid="contact-input-name" aria-invalid={!!errors.name} className={`${inputBase} mt-2 ${errors.name ? "border-destructive" : ""}`} placeholder="Ada Lovelace" />
                                {errors.name ? <span className="mt-1 block font-mono text-[11px] text-destructive">{errors.name}</span> : null}
                            </label>

                            <label className="block">
                                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/60">Email</span>
                                <input type="email" value={form.email} onChange={update("email")} data-testid="contact-input-email" aria-invalid={!!errors.email} className={`${inputBase} mt-2 ${errors.email ? "border-destructive" : ""}`} placeholder="you@company.com" />
                                {errors.email ? <span className="mt-1 block font-mono text-[11px] text-destructive">{errors.email}</span> : null}
                            </label>

                            <label className="block md:col-span-2">
                                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/60">Company (optional)</span>
                                <input type="text" value={form.company} onChange={update("company")} data-testid="contact-input-company" className={`${inputBase} mt-2`} placeholder="Acme Freight" />
                            </label>

                            <label className="block">
                                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/60">Service</span>
                                <select value={form.service} onChange={update("service")} data-testid="contact-select-service" className={`${inputBase} mt-2 appearance-none pr-8`}>
                                    {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                                </select>
                            </label>

                            <label className="block">
                                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/60">Rough budget</span>
                                <select value={form.budget} onChange={update("budget")} data-testid="contact-select-budget" className={`${inputBase} mt-2 appearance-none pr-8`}>
                                    {BUDGET_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                                </select>
                            </label>

                            <label className="block md:col-span-2">
                                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/60">What are you trying to build?</span>
                                <textarea value={form.message} onChange={update("message")} data-testid="contact-input-message" aria-invalid={!!errors.message} rows={8} className={`${inputBase} mt-2 !h-auto py-3 leading-relaxed resize-y ${errors.message ? "border-destructive" : ""}`} placeholder="Describe the workflow, the users, the systems involved, and what 'working' would look like." />
                                {errors.message ? <span className="mt-1 block font-mono text-[11px] text-destructive">{errors.message}</span> : null}
                            </label>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <p className="font-mono text-[11px] text-foreground/50 max-w-md leading-relaxed">
                                <span className="lg-accent">{"//"}</span> This form is not yet wired to a backend. Submissions are dry-run only.
                            </p>
                            <button type="submit" disabled={submitting} data-testid="contact-submit-button" className="group inline-flex items-center gap-2.5 h-12 px-6 rounded-sm bg-foreground text-background font-mono text-[12px] uppercase tracking-[0.18em] hover:bg-foreground/85 transition-colors disabled:opacity-60">
                                {submitting ? "Sending…" : "Send"}
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                            </button>
                        </div>
                    </motion.form>
                </div>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader overline="What happens next" title="A clear path from message to kickoff." description="No sales theatre. If we are not a fit, we will say so quickly." />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { n: "01", t: "We read the brief", d: "Usually within one working day. Well-scoped notes get a faster, more concrete reply." },
                        { n: "02", t: "30-minute call", d: "Walk the workflow, systems, and constraints. We will tell you honestly whether we can help." },
                        { n: "03", t: "Written proposal", d: "Scope, timeline, commercial options, and what we need from you in week one." },
                        { n: "04", t: "Discovery kickoff", d: "Working sessions with operators, data access plan, and a written problem statement." },
                    ].map((step) => (
                        <StaggerItem key={step.n} className="border border-border rounded-sm p-6">
                            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/45">{step.n}</div>
                            <h3 className="mt-3 font-display text-lg font-semibold">{step.t}</h3>
                            <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{step.d}</p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader overline="Engagement options" title="Pick the smallest useful start." />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ENGAGEMENT_MODELS.map((m) => (
                        <StaggerItem key={m.title} className="border border-border rounded-sm p-7">
                            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/45">{m.range}</div>
                            <h3 className="mt-3 font-display text-xl font-semibold">{m.title}</h3>
                            <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{m.body}</p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader overline="Fit check" title="Are we the right team?" />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {GOOD_FIT.map((item) => (
                        <StaggerItem key={item.title} className="border border-border rounded-sm p-6">
                            <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                            <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{item.body}</p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            <Section className="border-t border-border">
                <SectionHeader overline="FAQ" title="Before you write." />
                <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {FAQ.slice(0, 6).map((item) => (
                        <StaggerItem key={item.q} className="border border-border rounded-sm p-6">
                            <h3 className="font-display text-lg font-semibold leading-snug">{item.q}</h3>
                            <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{item.a}</p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>
        </>
    );
}
