import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor = "bg-indigo-600",
  duration = 0.5,
}) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          slideControls.start("visible");
          mainControls.start("visible");
        } else {
          slideControls.start("hidden");
          mainControls.start("hidden");
        }
      },
      { threshold: 0.1, once: true }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [mainControls, slideControls]);

  return (
    <div
      ref={ref}
      className={`relative ${width === "100%" ? "w-full" : "w-fit"} overflow-hidden`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: "0%" },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration, ease: "easeIn" }}
        className={`absolute top-1 bottom-1 left-0 right-0 z-20 ${boxColor}`}
      />
    </div>
  );
};

export default BoxReveal;