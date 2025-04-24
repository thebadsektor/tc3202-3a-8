import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeInOnScroll({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.1,
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
      }}
    >
      {children}
    </motion.div>
  );
}
