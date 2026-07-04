"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const TRAIL_LENGTH = 5;

export function AsteroidCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  // trailing embers, progressively softer springs
  const trail = [
    useSpring(x, { stiffness: 260, damping: 30 }),
    useSpring(y, { stiffness: 260, damping: 30 }),
    useSpring(x, { stiffness: 160, damping: 28 }),
    useSpring(y, { stiffness: 160, damping: 28 }),
    useSpring(x, { stiffness: 100, damping: 26 }),
    useSpring(y, { stiffness: 100, damping: 26 }),
    useSpring(x, { stiffness: 65, damping: 24 }),
    useSpring(y, { stiffness: 65, damping: 24 }),
    useSpring(x, { stiffness: 40, damping: 22 }),
    useSpring(y, { stiffness: 40, damping: 22 }),
  ];

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reducedMotion) return;

    const onMove = (e: PointerEvent) => {
      // activate on first movement so the asteroid never sits at a stale spot
      setEnabled(true);
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element | null;
      setHoveringInteractive(
        Boolean(target?.closest("a, button, [role='button'], input, textarea"))
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.classList.remove("asteroid-cursor");
    };
  }, [x, y]);

  useEffect(() => {
    if (enabled) document.documentElement.classList.add("asteroid-cursor");
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      {/* ember trail */}
      {Array.from({ length: TRAIL_LENGTH }, (_, i) => (
        <motion.div
          key={i}
          style={{
            x: trail[i * 2],
            y: trail[i * 2 + 1],
            opacity: 0.5 - i * 0.09,
            scale: 1 - i * 0.16,
          }}
          className="absolute -left-[3px] -top-[3px] h-1.5 w-1.5 rounded-full bg-gradient-to-br from-comet to-nebula"
        />
      ))}
      {/* asteroid */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute -left-3 -top-3"
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          animate={{
            rotate: 360,
            scale: hoveringInteractive ? 1.6 : 1,
          }}
          transition={{
            rotate: { duration: 9, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.25 },
          }}
        >
          {/* irregular rock */}
          <path
            d="M12 2.5 L17.5 4.5 L21 9 L20 14.5 L15.5 20 L9.5 21 L4.5 17.5 L3 11.5 L5.5 5.5 Z"
            fill="#8b8299"
            stroke="#e8e6f5"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          {/* craters */}
          <circle cx="9" cy="9" r="1.7" fill="#5d5470" />
          <circle cx="15" cy="13" r="2.1" fill="#5d5470" />
          <circle cx="10.5" cy="16" r="1.1" fill="#5d5470" />
        </motion.svg>
      </motion.div>
    </div>
  );
}
