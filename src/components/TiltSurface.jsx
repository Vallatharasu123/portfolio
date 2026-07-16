import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltSurface({ children, className = "", max = 8, glare = true }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const spring = { stiffness: 200, damping: 20, mass: 0.35 };
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [max, -max]), spring);
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-max, max]), spring);
  const scale = useSpring(1, spring);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mx.set(px - 0.5);
    my.set(py - 0.5);
    setGlarePos({ x: px * 100, y: py * 100 });
    setActive(true);
    scale.set(1.015);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
    setActive(false);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: rx,
        rotateY: ry,
        scale,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: active ? 0.55 : 0,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.5), transparent 55%)`,
            mixBlendMode: "soft-light",
          }}
        />
      )}
    </motion.div>
  );
}
