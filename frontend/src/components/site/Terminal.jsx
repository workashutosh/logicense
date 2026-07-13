import { cn } from "@/lib/utils";
import { FadeIn } from "./motion";

const COLOR_CLASS = {
    comment: "text-zinc-500",
    keyword: "text-sky-400",
    string: "text-emerald-300",
    fn: "text-amber-300",
    accent: "text-[hsl(var(--lg-accent))]",
    plain: "text-zinc-100",
    dim: "text-zinc-400",
    error: "text-rose-400",
};

/**
 * Terminal: a code-block styled like a terminal window.
 * lines: array of { tokens: [{ text, type }] } or plain strings.
 */
export const Terminal = ({
    title = "agent.py",
    lines = [],
    className,
    variant = "code",
}) => {
    return (
        <FadeIn
            data-testid="terminal-block"
            y={20}
            className={cn(
                "rounded-md border border-border/60 bg-[hsl(var(--lg-code-bg))] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden",
                className
            )}
        >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/40">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="ml-3 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                    {title}
                </span>
            </div>

            <pre className="px-5 py-5 md:px-6 md:py-6 overflow-x-auto text-[13px] leading-relaxed font-mono text-zinc-200">
                <code className="block">
                    {lines.map((ln, i) => {
                        const tokens =
                            typeof ln === "string"
                                ? [{ text: ln, type: "plain" }]
                                : ln.tokens || [];
                        return (
                            <span key={i} className="block whitespace-pre">
                                <span className="inline-block w-8 select-none text-zinc-600">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                {tokens.map((t, j) => (
                                    <span
                                        key={j}
                                        className={
                                            COLOR_CLASS[t.type] ||
                                            COLOR_CLASS.plain
                                        }
                                    >
                                        {t.text}
                                    </span>
                                ))}
                                {tokens.length === 0 ? "\u00A0" : null}
                            </span>
                        );
                    })}
                </code>
            </pre>
        </FadeIn>
    );
};

export default Terminal;
