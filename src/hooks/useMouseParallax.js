import { useCallback, useEffect, useState } from "react";

/**
 * Maps pointer position to a soft -1..1 range for CSS 3D parallax.
 * Disables when user prefers reduced motion.
 */
export default function useMouseParallax(strength = 1) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const onMove = useCallback(
    (event) => {
      if (!enabled) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      setOffset({ x: x * strength, y: y * strength });
    },
    [enabled, strength]
  );

  const onLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return { offset, onMove, onLeave, enabled };
}
