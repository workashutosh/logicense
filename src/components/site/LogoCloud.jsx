import BrandIcon from "./BrandIcon";
import { Stagger, StaggerItem } from "./motion";
import { cn } from "@/lib/utils";

export default function LogoCloud({
    items,
    className,
    compact = false,
    testId = "logo-cloud",
}) {
    return (
        <Stagger
            data-testid={testId}
            className={cn(
                compact
                    ? "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
                    : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4",
                className
            )}
        >
            {items.map((item) => (
                <StaggerItem
                    key={item.slug}
                    className="group flex items-center gap-3 border border-border rounded-sm px-3 py-3 md:px-4 md:py-3.5 hover:border-foreground/35 transition-colors bg-background/60"
                >
                    <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-sm border border-border bg-muted/40 text-foreground/80 group-hover:text-foreground transition-colors">
                        <BrandIcon
                            slug={item.slug}
                            title={item.label}
                            className="h-4 w-4"
                            label={false}
                        />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/70 leading-snug truncate">
                        {item.label}
                    </span>
                </StaggerItem>
            ))}
        </Stagger>
    );
}
