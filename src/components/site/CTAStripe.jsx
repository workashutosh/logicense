import { Link } from "react-router-dom";
import Section from "./Section";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "./motion";

export const CTAStripe = ({
    overline = "Get in touch",
    title = "Have a workflow that could be an AI system?",
    body = "Book a 30-minute call. We'll tell you honestly whether it's a fit — and what the smallest useful first version would look like.",
    ctaLabel = "Book a call",
    testId = "cta-stripe-book-call",
}) => {
    return (
        <Section dense className="border-t border-border">
            <FadeIn className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
                <div className="md:col-span-8">
                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/60 mb-5">
                        <span className="lg-accent">{"//"}</span> {overline}
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-balance">
                        {title}
                    </h2>
                    <p className="mt-5 max-w-2xl text-foreground/70 text-lg leading-relaxed">
                        {body}
                    </p>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                    <Link
                        to="/contact"
                        data-testid={testId}
                        className="group inline-flex items-center gap-3 rounded-sm bg-foreground text-background px-6 h-12 font-mono text-[12px] uppercase tracking-[0.18em] hover:bg-foreground/85 transition-colors"
                    >
                        {ctaLabel}
                        <ArrowUpRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            strokeWidth={1.5}
                        />
                    </Link>
                </div>
            </FadeIn>
        </Section>
    );
};

export default CTAStripe;
