import { Link } from "react-router-dom";

import { NAV_LINKS, SITE } from "@/lib/site";
import BrandIcon from "./BrandIcon";

export const Footer = () => {
    return (
        <footer
            data-testid="site-footer"
            className="border-t border-border bg-background"
        >
            <div className="w-full px-4 md:px-6 lg:px-8 py-20 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-2.5">
                            <img
                                src="/logo.png"
                                alt="Logicense"
                                width={28}
                                height={28}
                                className="h-7 w-7 rounded-sm object-cover"
                            />
                            <span className="font-display text-lg font-bold">
                                Logicense
                            </span>
                        </div>
                        <p className="mt-6 text-foreground/60 max-w-sm text-sm leading-relaxed">
                            An AI development agency building production
                            systems — agents, retrieval, and automation — for
                            teams that need more than a demo.
                        </p>
                        <a
                            href={`mailto:${SITE.contactEmail}`}
                            data-testid="footer-email-link"
                            className="mt-6 inline-block font-mono text-sm text-foreground hover:lg-accent transition-colors"
                        >
                            {SITE.contactEmail}
                        </a>
                    </div>

                    <div className="md:col-span-4">
                        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50 mb-5">
                            Sitemap
                        </div>
                        <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
                            <li>
                                <Link
                                    to="/"
                                    data-testid="footer-link-home"
                                    className="text-sm text-foreground/70 hover:text-foreground"
                                >
                                    Home
                                </Link>
                            </li>
                            {NAV_LINKS.map((l) => (
                                <li key={l.path}>
                                    <Link
                                        to={l.path}
                                        data-testid={`footer-link-${l.path.slice(1)}`}
                                        className="text-sm text-foreground/70 hover:text-foreground"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="/contact"
                                    data-testid="footer-link-contact"
                                    className="text-sm text-foreground/70 hover:text-foreground"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/50 mb-5">
                            Elsewhere
                        </div>
                        <div className="flex items-center gap-2">
                            <a
                                href={SITE.social.github}
                                target="_blank"
                                rel="noreferrer noopener"
                                data-testid="footer-social-github"
                                aria-label="GitHub"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground/70 hover:text-foreground hover:border-foreground/40"
                            >
                                <BrandIcon
                                    slug="github"
                                    className="h-4 w-4"
                                    label={false}
                                />
                            </a>
                            <a
                                href={SITE.social.linkedin}
                                target="_blank"
                                rel="noreferrer noopener"
                                data-testid="footer-social-linkedin"
                                aria-label="LinkedIn"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground/70 hover:text-foreground hover:border-foreground/40"
                            >
                                <BrandIcon
                                    slug="linkedin"
                                    className="h-4 w-4"
                                    label={false}
                                />
                            </a>
                            <a
                                href={SITE.social.x}
                                target="_blank"
                                rel="noreferrer noopener"
                                data-testid="footer-social-x"
                                aria-label="X (Twitter)"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground/70 hover:text-foreground hover:border-foreground/40"
                            >
                                <BrandIcon
                                    slug="x"
                                    className="h-4 w-4"
                                    label={false}
                                />
                            </a>
                        </div>
                        <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/40">
                            India · Remote-first
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="font-mono text-[11px] text-foreground/40">
                        © {new Date().getFullYear()} Logicense. All rights
                        reserved.
                    </div>
                    <div className="font-mono text-[11px] text-foreground/40">
                        {SITE.domain}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
