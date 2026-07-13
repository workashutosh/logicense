import { cn } from "@/lib/utils";
import { FadeIn, Stagger, StaggerItem } from "./motion";

const NODES = [
    { id: "input", label: "User input", sub: "prompt / event / trigger" },
    { id: "plan", label: "Plan", sub: "decompose → next step" },
    { id: "tool", label: "Tool call", sub: "APIs · DB · retrieval" },
    { id: "observe", label: "Observe", sub: "parse · validate · log" },
    { id: "answer", label: "Respond", sub: "grounded output" },
];

export const AgentLoop = ({ className }) => {
    return (
        <FadeIn
            data-testid="agent-loop-diagram"
            className={cn(
                "rounded-md border border-border/70 bg-card/40 p-6 md:p-10",
                className
            )}
        >
            <div className="mb-8 flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/60">
                    <span className="lg-accent">{"//"}</span> agent loop
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/40">
                    simplified
                </div>
            </div>

            <Stagger className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {NODES.map((n, i) => (
                    <StaggerItem key={n.id} className="relative">
                        <div className="rounded-sm border border-border/70 bg-background/60 px-4 py-4 h-full">
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="h-1.5 w-1.5 rounded-full lg-bg-accent" />
                            </div>
                            <div className="mt-3 font-display text-base font-semibold">
                                {n.label}
                            </div>
                            <div className="mt-1 font-mono text-[11px] text-foreground/50">
                                {n.sub}
                            </div>
                        </div>
                        {i < NODES.length - 1 ? (
                            <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-foreground/40 font-mono text-lg">
                                →
                            </div>
                        ) : null}
                    </StaggerItem>
                ))}
            </Stagger>

            <div className="mt-8 border-t border-dashed border-border/60 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[11px] text-foreground/50">
                <span>
                    <span className="lg-accent">↻</span> loop until{" "}
                    <span className="text-foreground/80">stop condition</span>{" "}
                    is met
                </span>
                <span className="uppercase tracking-widest">
                    guardrails · evals · human review
                </span>
            </div>
        </FadeIn>
    );
};

export default AgentLoop;
