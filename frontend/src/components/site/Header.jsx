import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { NAV_LINKS } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { easeOut } from "./motion";

const Logo = () => (
    <Link
        to="/"
        data-testid="site-logo-link"
        className="group inline-flex items-center gap-2.5"
    >
        <img
            src="/logo.png"
            alt="Logicense"
            width={28}
            height={28}
            className="h-7 w-7 rounded-sm object-cover"
        />
        <span className="font-display text-[17px] font-bold tracking-tight">
            Logicense
        </span>
    </Link>
);

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-header"
            className={cn(
                "sticky top-0 z-50 w-full border-b transition-colors duration-300",
                scrolled
                    ? "border-border bg-background/80 backdrop-blur-md"
                    : "border-transparent bg-background/60 backdrop-blur-sm"
            )}
        >
            <div className="w-full px-4 md:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
                <Logo />

                <nav
                    aria-label="Primary"
                    className="hidden lg:flex items-center gap-8"
                >
                    {NAV_LINKS.map((l) => (
                        <NavLink
                            key={l.path}
                            to={l.path}
                            data-testid={`nav-link-${l.path.slice(1) || "home"}`}
                            className={({ isActive }) =>
                                cn(
                                    "font-mono text-[12px] uppercase tracking-[0.18em] transition-colors duration-200",
                                    isActive
                                        ? "text-foreground"
                                        : "text-foreground/50 hover:text-foreground"
                                )
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-2 md:gap-3">
                    <ThemeToggle />

                    <Link
                        to="/contact"
                        data-testid="header-book-call-cta"
                        className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded-sm bg-foreground text-background font-mono text-[12px] uppercase tracking-[0.18em] hover:bg-foreground/85 transition-colors"
                    >
                        Book a call
                        <span className="lg-accent">→</span>
                    </Link>

                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        data-testid="mobile-menu-toggle"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground/80 hover:text-foreground"
                    >
                        {open ? (
                            <X className="h-4 w-4" strokeWidth={1.5} />
                        ) : (
                            <Menu className="h-4 w-4" strokeWidth={1.5} />
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open ? (
                    <motion.div
                        key="mobile-menu"
                        data-testid="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: easeOut }}
                        className="lg:hidden border-t border-border bg-background overflow-hidden"
                    >
                        <div className="w-full px-4 md:px-6 py-6 flex flex-col gap-4">
                            {NAV_LINKS.map((l, i) => (
                                <motion.div
                                    key={l.path}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.04 * i,
                                        ease: easeOut,
                                    }}
                                >
                                    <NavLink
                                        to={l.path}
                                        data-testid={`mobile-nav-link-${
                                            l.path.slice(1) || "home"
                                        }`}
                                        className={({ isActive }) =>
                                            cn(
                                                "font-mono text-sm uppercase tracking-[0.18em] py-1 block",
                                                isActive
                                                    ? "text-foreground"
                                                    : "text-foreground/60"
                                            )
                                        }
                                    >
                                        {l.label}
                                    </NavLink>
                                </motion.div>
                            ))}
                            <Link
                                to="/contact"
                                data-testid="mobile-book-call-cta"
                                className="mt-2 inline-flex items-center justify-center h-11 px-5 rounded-sm bg-foreground text-background font-mono text-[12px] uppercase tracking-[0.18em]"
                            >
                                Book a call →
                            </Link>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </header>
    );
};

export default Header;
