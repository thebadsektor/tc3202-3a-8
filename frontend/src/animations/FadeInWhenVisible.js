import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Reusable fade-in animation on scroll
export function FadeInWhenVisible({ children, delay = 0 }) {
  const ref = useRef(null);
  const [amount, setAmount] = useState(0.1);

  useEffect(() => {
    const updateAmount = () => {
      if (window.innerWidth >= 768) {
        setAmount(0.3); //Desktop
      } else {
        setAmount(0.0); // Mobile
      }
    };

    updateAmount();
    window.addEventListener("resize", updateAmount);
    return () => window.removeEventListener("resize", updateAmount);
  }, []);

  const isInView = useInView(ref, { once: false, amount });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 30 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
