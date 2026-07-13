import { Link } from "react-router-dom";
import Section from "@/components/site/Section";

export default function NotFound() {
    return (
        <Section>
            <div className="max-w-2xl">
                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/60 mb-6">
                    <span className="lg-accent">{"//"}</span> 404
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-black tracking-tight">
                    Page not found.
                </h1>
                <p className="mt-6 text-foreground/70 text-lg">
                    The route you tried doesn&rsquo;t exist. Head back home or check
                    the sitemap in the footer.
                </p>
                <Link
                    to="/"
                    data-testid="notfound-home-link"
                    className="mt-10 inline-flex items-center gap-2 h-11 px-5 rounded-sm bg-foreground text-background font-mono text-[12px] uppercase tracking-[0.18em] hover:bg-foreground/85 transition-colors"
                >
                    Back to home <span className="lg-accent">→</span>
                </Link>
            </div>
        </Section>
    );
}
