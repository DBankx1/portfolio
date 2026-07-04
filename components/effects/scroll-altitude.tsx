"use client";

import { motion, useScroll, useSpring } from "motion/react";

const ticks = [
  { id: "top", label: "LAUNCH" },
  { id: "mission", label: "MISSION" },
  { id: "skills", label: "SYSTEMS" },
  { id: "journey", label: "JOURNEY" },
  { id: "lab", label: "LAB" },
  { id: "certs", label: "CREDS" },
  { id: "contact", label: "COMMS" },
];

export function ScrollAltitude() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div
      aria-hidden
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:flex flex-col items-center gap-2"
    >
      <span className="font-mono text-[9px] tracking-[0.3em] text-starlight-dim rotate-0">
        ALT
      </span>
      <div className="relative h-56 w-px bg-white/10">
        <motion.div
          style={{ scaleY: progress }}
          className="absolute inset-0 origin-top bg-gradient-to-b from-comet to-nebula"
        />
        {ticks.map((tick, i) => (
          <a
            key={tick.id}
            href={`#${tick.id}`}
            title={tick.label}
            className="group pointer-events-auto absolute -left-[3px] block h-[7px] w-[7px] rounded-full border border-white/30 bg-space transition-colors hover:border-comet hover:bg-comet/40"
            style={{ top: `${(i / (ticks.length - 1)) * 100}%` }}
          >
            <span className="absolute right-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded border border-white/10 bg-space-deep px-2 py-0.5 font-mono text-[9px] tracking-[0.25em] text-comet opacity-0 transition-opacity group-hover:opacity-100">
              {tick.label}
            </span>
          </a>
        ))}
      </div>
      <span className="font-mono text-[9px] tracking-[0.3em] text-starlight-dim">
        GND
      </span>
    </div>
  );
}
