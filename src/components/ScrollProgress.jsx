import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValueEvent } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(0, { stiffness: 120, damping: 28, mass: 0.2 });

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const value = max > 0 ? window.scrollY / max : 0;
      spring.set(value);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [spring]);

  useMotionValueEvent(spring, "change", (v) => setProgress(v));

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[2px] pointer-events-none">
      <div
        className="h-full origin-left bg-gradient-to-r from-tide-500 via-tide-400 to-copper-400"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
