import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "./motion";

export const Section = forwardRef(function Section(
    { children, className, id, dense = false, ...rest },
    ref
) {
    return (
        <section
            ref={ref}
            id={id}
            className={cn(
                "w-full",
                dense ? "py-16 md:py-20" : "py-24 md:py-32",
                className
            )}
            {...rest}
        >
            <div className="w-full px-4 md:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
});

export const SectionHeader = ({ overline, title, description, className }) => (
    <FadeIn className={cn("max-w-3xl", className)}>
        {overline ? (
            <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-foreground/60">
                <span className="lg-accent">{"//"}</span>
                <span>{overline}</span>
            </div>
        ) : null}
        {title ? (
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
                {title}
            </h2>
        ) : null}
        {description ? (
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-2xl text-pretty">
                {description}
            </p>
        ) : null}
    </FadeIn>
);

export default Section;
