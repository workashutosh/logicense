import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const current = mounted ? resolvedTheme || theme : "dark";
    const isDark = current === "dark";

    return (
        <button
            type="button"
            data-testid="theme-toggle-button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-transparent text-foreground/70 transition-colors duration-200 hover:text-foreground hover:border-foreground/40"
        >
            {mounted ? (
                isDark ? (
                    <Sun className="h-4 w-4" strokeWidth={1.5} />
                ) : (
                    <Moon className="h-4 w-4" strokeWidth={1.5} />
                )
            ) : (
                <Moon className="h-4 w-4" strokeWidth={1.5} />
            )}
        </button>
    );
};

export default ThemeToggle;
