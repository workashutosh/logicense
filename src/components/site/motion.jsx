import { motion, useReducedMotion } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1];

export const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easeOut },
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.45, ease: easeOut },
    },
};

export const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.04,
        },
    },
};

export const viewportOnce = { once: true, margin: "-80px" };

/** Fade/slide in when scrolled into view. Respects reduced-motion. */
export function FadeIn({
    children,
    className,
    delay = 0,
    y = 18,
    as = "div",
    ...rest
}) {
    const reduce = useReducedMotion();
    const Comp = motion[as] || motion.div;

    if (reduce) {
        const Tag = as === "div" ? "div" : as;
        return (
            <Tag className={className} {...rest}>
                {children}
            </Tag>
        );
    }

    return (
        <Comp
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay, ease: easeOut }}
            {...rest}
        >
            {children}
        </Comp>
    );
}

/** Parent for staggered children using fadeUp variants. */
export function Stagger({ children, className, as = "div", ...rest }) {
    const reduce = useReducedMotion();
    const Comp = motion[as] || motion.div;

    if (reduce) {
        const Tag = as === "div" ? "div" : as;
        return (
            <Tag className={className} {...rest}>
                {children}
            </Tag>
        );
    }

    return (
        <Comp
            className={className}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            {...rest}
        >
            {children}
        </Comp>
    );
}

export function StaggerItem({ children, className, as = "div", ...rest }) {
    const reduce = useReducedMotion();
    const Comp = motion[as] || motion.div;

    if (reduce) {
        const Tag = as === "div" ? "div" : as;
        return (
            <Tag className={className} {...rest}>
                {children}
            </Tag>
        );
    }

    return (
        <Comp className={className} variants={fadeUp} {...rest}>
            {children}
        </Comp>
    );
}
