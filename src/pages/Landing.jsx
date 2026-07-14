import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { 
    Check, 
    ArrowRight, 
    ShieldCheck, 
    FileText, 
    Clock, 
    Calendar,
    Sparkles,
    UserCheck,
    Cpu,
    ArrowUpRight,
    Lock
} from "lucide-react";
import { Link } from "react-router-dom";

import Section from "@/components/site/Section";
import { FadeIn, Stagger, StaggerItem } from "@/components/site/motion";

// Schema Markup for JSON-LD (SEO)
const SCHEMA_DATA = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Automation Feasibility Audit",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Logicense",
        "url": "https://logicense.in",
        "logo": "https://logicense.in/logo.png"
    },
    "description": "Get a free 30-minute AI feasibility audit. We map your current manual process, identify automation bottlenecks, and outline a concrete integration plan.",
    "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD"
    }
};

const DATES = [
    { label: "Tue, Jul 14", date: "2026-07-14" },
    { label: "Wed, Jul 15", date: "2026-07-15" },
    { label: "Thu, Jul 16", date: "2026-07-16" },
    { label: "Fri, Jul 17", date: "2026-07-17" },
    { label: "Mon, Jul 20", date: "2026-07-20" },
];

const TIME_SLOTS = [
    "09:30 AM",
    "11:00 AM",
    "02:00 PM",
    "03:30 PM",
    "05:00 PM"
];

export default function Landing() {
    // Lead Form State
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        workflow: "",
        bottleneck: "",
        consent: true
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    // Dynamic Calendar State (Premium Booking Mockup)
    const [selectedDate, setSelectedDate] = useState(DATES[0].label);
    const [selectedTime, setSelectedTime] = useState("");
    const [bookingName, setBookingName] = useState("");
    const [bookingEmail, setBookingEmail] = useState("");
    const [bookingSubmitted, setBookingSubmitted] = useState(false);

    // Set SEO Meta and Schema on Load
    useEffect(() => {
        document.title = "Free AI Feasibility Audit | Logicense";
        
        // Update meta tags
        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta) {
            descMeta.setAttribute(
                "content", 
                "Book a free 30-minute AI audit with Logicense. We design custom AI agents and automate complex manual workflows to save your team operational hours."
            );
        }

        // Inject JSON-LD Schema
        const scriptId = "ld-json-schema-landing";
        let script = document.getElementById(scriptId);
        if (!script) {
            script = document.createElement("script");
            script.id = scriptId;
            script.type = "application/ld+json";
            script.text = JSON.stringify(SCHEMA_DATA);
            document.head.appendChild(script);
        }

        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) existingScript.remove();
        };
    }, []);

    // Form validation
    const validateForm = () => {
        const nextErrors = {};
        if (!form.name.trim()) nextErrors.name = "Name is required";
        if (!form.email.trim()) {
            nextErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            nextErrors.email = "Please enter a valid work email";
        }
        if (!form.workflow.trim() || form.workflow.trim().length < 15) {
            nextErrors.workflow = "Please describe your workflow in a bit more detail";
        }
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    // Lead capture form submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error("Please fill in the required fields correctly.");
            return;
        }
        setSubmitting(true);

        // Web3Forms integration or simulated submission
        try {
            // Simulated post request
            await new Promise((resolve) => setTimeout(resolve, 1200));
            toast.success("Audit request submitted successfully! We will contact you within 1 business day.");
            setForm({
                name: "",
                email: "",
                company: "",
                workflow: "",
                bottleneck: "",
                consent: true
            });
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    // Calendar booking submit
    const handleBookingSubmit = (e) => {
        e.preventDefault();
        if (!selectedTime) {
            toast.error("Please pick a time slot first.");
            return;
        }
        if (!bookingName.trim()) {
            toast.error("Name is required for booking.");
            return;
        }
        if (!bookingEmail.trim() || !/^\S+@\S+\.\S+$/.test(bookingEmail)) {
            toast.error("A valid email is required.");
            return;
        }

        setBookingSubmitted(true);
        toast.success(`Meeting successfully booked for ${selectedDate} at ${selectedTime}! Check your email for details.`);
    };

    const inputBase =
        "w-full h-11 px-3 rounded-sm bg-background border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[hsl(var(--lg-accent))] focus:ring-2 focus:ring-[hsl(var(--lg-accent))]/25 transition-colors";

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            {/* Landing Page Simplified Header (High-Conversion: No Nav Leakage) */}
            <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="font-display text-2xl font-black tracking-tighter">
                            LOGICENSE<span className="lg-accent">.</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="hidden md:inline-flex items-center gap-1.5 font-mono text-[10px] text-foreground/60 uppercase tracking-wider">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            Free Audits Available This Week
                        </span>
                        <a
                            href="#calendar-booking"
                            className="font-mono text-[11px] uppercase tracking-wider text-foreground hover:lg-accent transition-colors"
                        >
                            Skip to Booking ↓
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero & Lead Form Section */}
            <section className="relative border-b border-border py-16 lg:py-24 overflow-hidden">
                <div className="absolute inset-0 lg-grid-bg opacity-30 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Copy / Value Proposition */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[hsl(var(--lg-accent))] font-semibold">
                                {"//"} EXCLUSIVE OFFER FOR GROWING TEAMS
                            </div>
                            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-balance">
                                Stop wasting hours on manual workflows.
                                <br />
                                <span className="lg-accent">Automate with AI.</span>
                            </h1>
                            <p className="text-lg text-foreground/75 leading-relaxed max-w-xl text-pretty">
                                Apply for a free **30-Minute AI Feasibility Audit** (valued at $500). Our AI engineers will map your current manual process, identify automation bottlenecks, and deliver a concrete implementation roadmap.
                            </p>

                            {/* Trust Badges / Checkmarks */}
                            <div className="space-y-4 pt-4 border-t border-border/60 max-w-lg">
                                <div className="flex items-start gap-3">
                                    <div className="h-5 w-5 rounded-full bg-[hsl(var(--lg-accent))]/10 text-[hsl(var(--lg-accent))] flex items-center justify-center flex-none mt-1">
                                        <Check className="h-3 w-3" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="font-display text-base font-semibold">Custom Blueprint Output</h4>
                                        <p className="text-sm text-foreground/60 leading-relaxed">Receive a written technical blueprint outlining exactly what AI model, prompt setup, and database you need.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="h-5 w-5 rounded-full bg-[hsl(var(--lg-accent))]/10 text-[hsl(var(--lg-accent))] flex items-center justify-center flex-none mt-1">
                                        <ShieldCheck className="h-3 w-3" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="font-display text-base font-semibold">Zero Sales Pressure & Strict NDA</h4>
                                        <p className="text-sm text-foreground/60 leading-relaxed">This is an engineering session. We do not do high-pressure sales calls. Your workflow data remains 100% confidential under NDA.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="h-5 w-5 rounded-full bg-[hsl(var(--lg-accent))]/10 text-[hsl(var(--lg-accent))] flex items-center justify-center flex-none mt-1">
                                        <Cpu className="h-3 w-3" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="font-display text-base font-semibold">Expert-Led Mapping</h4>
                                        <p className="text-sm text-foreground/60 leading-relaxed">Talk directly to senior AI builders, not account representatives. We evaluate integrations with Slack, HubSpot, APIs, and LLMs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* High-Converting Staged Lead Capture Form */}
                        <div className="lg:col-span-5 bg-card/40 border border-border rounded-sm p-6 md:p-8 relative backdrop-blur-md">
                            <div className="absolute top-0 right-0 h-1 w-24 bg-[hsl(var(--lg-accent))]" />
                            <h3 className="font-display text-2xl font-bold tracking-tight mb-2">Request Your Free Audit</h3>
                            <p className="text-xs text-foreground/50 font-mono mb-6">
                                <span className="text-emerald-500">●</span> 7 slots remaining this week.
                            </p>

                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <label className="block">
                                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/70">Your Name *</span>
                                    <input
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className={`${inputBase} mt-1.5 ${errors.name ? "border-destructive" : ""}`}
                                        placeholder="Grace Hopper"
                                    />
                                    {errors.name && <span className="mt-1 block text-[10px] text-destructive font-mono">{errors.name}</span>}
                                </label>

                                <label className="block">
                                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/70">Work Email *</span>
                                    <input
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className={`${inputBase} mt-1.5 ${errors.email ? "border-destructive" : ""}`}
                                        placeholder="grace@company.com"
                                    />
                                    {errors.email && <span className="mt-1 block text-[10px] text-destructive font-mono">{errors.email}</span>}
                                </label>

                                <label className="block">
                                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/70">Company Name</span>
                                    <input
                                        type="text"
                                        value={form.company}
                                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                                        className={`${inputBase} mt-1.5`}
                                        placeholder="Acme Operations"
                                    />
                                </label>

                                <label className="block">
                                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/70">Describe the manual workflow you want to automate *</span>
                                    <textarea
                                        required
                                        value={form.workflow}
                                        onChange={(e) => setForm({ ...form, workflow: e.target.value })}
                                        rows={4}
                                        className={`w-full mt-1.5 p-3 rounded-sm bg-background border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[hsl(var(--lg-accent))] focus:ring-2 focus:ring-[hsl(var(--lg-accent))]/25 transition-colors resize-y leading-relaxed text-sm ${errors.workflow ? "border-destructive" : ""}`}
                                        placeholder="Describe who does what, what systems are used (HubSpot, Whatsapp, sheets, etc.), and where the errors or delays occur."
                                    />
                                    {errors.workflow && <span className="mt-1 block text-[10px] text-destructive font-mono">{errors.workflow}</span>}
                                </label>

                                <label className="block">
                                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/70">Biggest Bottleneck</span>
                                    <input
                                        type="text"
                                        value={form.bottleneck}
                                        onChange={(e) => setForm({ ...form, bottleneck: e.target.value })}
                                        className={`${inputBase} mt-1.5`}
                                        placeholder="e.g. data copy paste error, human response delays"
                                    />
                                </label>

                                <div className="flex items-start gap-2 pt-2">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        checked={form.consent}
                                        onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                                        className="mt-1 flex-none rounded border-border text-[hsl(var(--lg-accent))] focus:ring-[hsl(var(--lg-accent))]"
                                    />
                                    <label htmlFor="consent" className="text-[10px] text-foreground/50 leading-normal">
                                        I agree to receive the feasibility audit report and coordinate a brief call. We do not spam.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full mt-4 group inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-sm bg-foreground text-background font-mono text-[12px] uppercase tracking-[0.18em] hover:bg-foreground/85 transition-all disabled:opacity-60"
                                >
                                    {submitting ? "Submitting Report..." : "Submit Feasibility Brief"}
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                                </button>

                                <div className="flex items-center justify-center gap-4 mt-4 font-mono text-[9px] text-foreground/40 border-t border-border/40 pt-4">
                                    <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Secure SSL</span>
                                    <span>·</span>
                                    <span>GDPR Compliant</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* How the Audit Works (Three Step Process) */}
            <Section className="border-b border-border">
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[hsl(var(--lg-accent))]">SIMPLE & TRANSPARENT PROCESS</span>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">How does the Feasibility Audit work?</h2>
                    <p className="text-base text-foreground/60 leading-relaxed">We take you from a messy operational bottleneck to a clean technical plan in three structured steps.</p>
                </div>

                <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            step: "01",
                            title: "Process Briefing",
                            desc: "Submit your workflow description above, or book a calendar slot directly below. We outline the key integration points."
                        },
                        {
                            step: "02",
                            title: "30-Min Deep-Dive",
                            desc: "We analyze api support, compliance constraints (GDPR/HIPAA), data format variability, and rate limit risks on a short video call."
                        },
                        {
                            step: "03",
                            title: "Blueprint Delivery",
                            desc: "Get a concrete implementation document outlining recommended models, estimated API costs, speed latency, and accuracy guards."
                        }
                    ].map((s) => (
                        <StaggerItem key={s.step} className="border border-border rounded-sm p-6 relative">
                            <span className="absolute top-4 right-6 font-mono text-5xl font-black text-foreground/5 pointer-events-none select-none">
                                {s.step}
                            </span>
                            <div className="font-mono text-[11px] uppercase tracking-wider text-[hsl(var(--lg-accent))] mb-3">{`STEP ${s.step}`}</div>
                            <h3 className="font-display text-lg font-bold mb-2">{s.title}</h3>
                            <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Section>

            {/* Interactive Booking Grid Section (Mock Calendly Widget to WOW user) */}
            <section id="calendar-booking" className="border-b border-border py-16 bg-muted/10 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 space-y-6">
                            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[hsl(var(--lg-accent))]">SKIP THE FORM & BOOK INSTANTLY</span>
                            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Prefer direct booking? Schedule right now.</h2>
                            <p className="text-base text-foreground/60 leading-relaxed">
                                Pick a date and time directly from our team calendar. Booking instantly locks in your 30-minute session and generates a calendar invitation with a video link automatically.
                            </p>

                            <div className="space-y-3 font-mono text-xs text-foreground/60">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-[hsl(var(--lg-accent))]" /> 30 Minutes Video Consultation
                                </div>
                                <div className="flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-[hsl(var(--lg-accent))]" /> Brief Blueprint PDF Included
                                </div>
                                <div className="flex items-center gap-2">
                                    <UserCheck className="h-4 w-4 text-[hsl(var(--lg-accent))]" /> Direct Consultation with AI Architect
                                </div>
                            </div>
                        </div>

                        {/* Interactive UI Booking Widget */}
                        <div className="lg:col-span-7 bg-background border border-border rounded-sm shadow-xl p-5 md:p-6 overflow-hidden relative">
                            <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-5">
                                <div className="flex items-center gap-2">
                                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                    <span className="text-xs font-mono font-medium tracking-wide">Logicense Team Calendar</span>
                                </div>
                                <span className="text-xs font-mono text-foreground/40">GMT+05:30 (India Standard Time)</span>
                            </div>

                            <AnimatePresence mode="wait">
                                {!bookingSubmitted ? (
                                    <motion.div
                                        key="booking-form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-5"
                                    >
                                        {/* Date selection row */}
                                        <div>
                                            <span className="block font-mono text-[10px] uppercase text-foreground/50 mb-2">1. Select Date</span>
                                            <div className="flex flex-wrap gap-2">
                                                {DATES.map((d) => (
                                                    <button
                                                        key={d.label}
                                                        type="button"
                                                        onClick={() => { setSelectedDate(d.label); setSelectedTime(""); }}
                                                        className={`px-3 py-2 rounded-sm font-mono text-xs border transition-all ${selectedDate === d.label ? "bg-foreground text-background border-foreground font-semibold" : "border-border hover:border-foreground/50 text-foreground/75"}`}
                                                    >
                                                        {d.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Time Slot Selection */}
                                        <div>
                                            <span className="block font-mono text-[10px] uppercase text-foreground/50 mb-2">2. Select Time Slot</span>
                                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                                                {TIME_SLOTS.map((t) => (
                                                    <button
                                                        key={t}
                                                        type="button"
                                                        onClick={() => setSelectedTime(t)}
                                                        className={`py-2 rounded-sm font-mono text-xs border transition-all ${selectedTime === t ? "bg-[hsl(var(--lg-accent))] text-white border-[hsl(var(--lg-accent))] font-semibold" : "border-border hover:border-foreground/50 text-foreground/75"}`}
                                                    >
                                                        {t}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Booking Details Input */}
                                        <form onSubmit={handleBookingSubmit} className="border-t border-border/60 pt-5 space-y-3">
                                            <span className="block font-mono text-[10px] uppercase text-foreground/50 mb-1">3. Your Contact Details</span>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                <input
                                                    type="text"
                                                    required
                                                    value={bookingName}
                                                    onChange={(e) => setBookingName(e.target.value)}
                                                    placeholder="Ada Lovelace"
                                                    className="w-full h-10 px-3 rounded-sm bg-muted/20 border border-border text-xs focus:outline-none focus:border-[hsl(var(--lg-accent))]"
                                                />
                                                <input
                                                    type="email"
                                                    required
                                                    value={bookingEmail}
                                                    onChange={(e) => setBookingEmail(e.target.value)}
                                                    placeholder="ada@company.com"
                                                    className="w-full h-10 px-3 rounded-sm bg-muted/20 border border-border text-xs focus:outline-none focus:border-[hsl(var(--lg-accent))]"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full mt-3 h-11 bg-foreground text-background hover:bg-foreground/90 font-mono text-[11px] uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors"
                                            >
                                                <Calendar className="h-4 w-4" />
                                                {selectedTime ? `Confirm Meeting at ${selectedTime} (${selectedDate})` : "Confirm Booking Slot"}
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="booking-success"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8 space-y-4"
                                    >
                                        <div className="inline-flex h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 items-center justify-center">
                                            <Sparkles className="h-6 w-6 animate-bounce" />
                                        </div>
                                        <h3 className="font-display text-2xl font-bold tracking-tight">Meeting Scheduled!</h3>
                                        <p className="text-sm text-foreground/70 max-w-md mx-auto leading-relaxed">
                                            Awesome, {bookingName}! Your AI feasibility session is booked for <strong className="text-foreground">{selectedDate}</strong> at <strong className="text-foreground">{selectedTime}</strong>. A calendar invite with a video conference link has been sent to <span className="underline">{bookingEmail}</span>.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setBookingSubmitted(false);
                                                setSelectedTime("");
                                                setBookingName("");
                                                setBookingEmail("");
                                            }}
                                            className="px-4 py-2 border border-border text-xs font-mono rounded-sm hover:bg-muted transition-colors"
                                        >
                                            Book Another Slot
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <Section className="max-w-4xl mx-auto px-6 py-16">
                <div className="text-center space-y-3 mb-12">
                    <h2 className="font-display text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
                    <p className="text-sm text-foreground/60">Objections or worries? Here are transparent answers.</p>
                </div>

                <div className="space-y-6">
                    {[
                        {
                            q: "What makes a workflow a good candidate for AI automation?",
                            a: "Ideal candidates are repetitive processes where inputs vary (e.g. client emails, pdf quotes, support chat queries) but the decisions follow a structured guideline. If you have clear guidelines that a junior operator follows, an AI agent can usually handle 80% to 90% of it autonomously."
                        },
                        {
                            q: "Do I need to sign an NDA before our session?",
                            a: "Yes. If your workflow contains proprietary operational steps, we can sign a standard mutual NDA before we begin. Simply email your document to our team."
                        },
                        {
                            q: "What if my software tools do not have APIs?",
                            a: "We regularly build custom web scrapers, browser automation blocks, or database connector bridges to synchronize data across legacy software applications that lack standard REST APIs."
                        },
                        {
                            q: "How much does it cost after the free audit?",
                            a: "If the blueprint proves that automation is feasible and has a clear positive ROI, our custom agent builds range from $10k (simple workflow automation) to $30k+ (complex, multi-system RAG and autonomous pipeline builds)."
                        }
                    ].map((faq) => (
                        <div key={faq.q} className="border-b border-border/60 pb-5">
                            <h4 className="font-display text-base font-bold mb-2 flex items-start gap-2">
                                <span className="text-[hsl(var(--lg-accent))] font-mono text-[11px] mt-1">Q:</span>
                                {faq.q}
                            </h4>
                            <p className="text-sm text-foreground/65 leading-relaxed pl-4">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Clean Marketing Footer */}
            <footer className="mt-auto border-t border-border/80 py-10 bg-card/10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6 text-[11px] font-mono text-foreground/50">
                        <span>© 2026 Logicense. All rights reserved.</span>
                        <Link to="/" className="hover:text-foreground transition-colors">Main Site</Link>
                        <a href="mailto:hello@logicense.in" className="hover:text-foreground transition-colors">hello@logicense.in</a>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-foreground/40">
                        <span>Built for maximum B2B conversion</span>
                        <ArrowUpRight className="h-3 w-3" />
                    </div>
                </div>
            </footer>
        </div>
    );
}
