"use client";

import { motion } from "motion/react";
import { profile } from "@/content/profile";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

function Rocket() {
  return (
    <motion.div
      aria-hidden
      className="absolute right-[8%] bottom-[18%] hidden lg:block"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1 }}
    >
      <motion.svg
        width="120"
        height="180"
        viewBox="0 0 120 180"
        fill="none"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* body */}
        <path
          d="M60 10 C78 34 84 62 84 92 L84 118 L36 118 L36 92 C36 62 42 34 60 10 Z"
          fill="url(#hull)"
          stroke="rgba(232,230,245,0.35)"
        />
        {/* window */}
        <circle cx="60" cy="72" r="12" fill="#0b0630" stroke="#22d3ee" strokeWidth="2.5" />
        <circle cx="60" cy="72" r="5" fill="#22d3ee" opacity="0.5" />
        {/* fins */}
        <path d="M36 96 L16 128 L36 122 Z" fill="#6d28d9" />
        <path d="M84 96 L104 128 L84 122 Z" fill="#6d28d9" />
        {/* nozzle */}
        <path d="M48 118 L72 118 L66 132 L54 132 Z" fill="#312e81" />
        {/* flame */}
        <motion.path
          d="M54 134 C56 150 64 150 66 134 C64 142 56 142 54 134 Z"
          fill="url(#flame)"
          animate={{ scaleY: [1, 1.6, 1], opacity: [0.9, 0.5, 0.9] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0, originX: "60px" }}
        />
        <defs>
          <linearGradient id="hull" x1="36" y1="10" x2="84" y2="118">
            <stop offset="0%" stopColor="#e8e6f5" />
            <stop offset="55%" stopColor="#9d98c4" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>
          <linearGradient id="flame" x1="60" y1="134" x2="60" y2="150">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 text-center"
    >
      {/* nebula glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 38%, rgba(139,92,246,0.16), transparent 70%), radial-gradient(ellipse 45% 35% at 68% 62%, rgba(34,211,238,0.10), transparent 70%)",
        }}
      />
      <Rocket />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl"
      >
        <motion.p
          variants={item}
          className="mb-5 font-mono text-xs tracking-[0.4em] text-comet uppercase md:text-sm"
        >
          Mission Log · {profile.location}
        </motion.p>
        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold leading-[1.05] text-white text-balance md:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 text-lg text-starlight md:text-2xl"
        >
          {profile.title}
          <span className="mx-3 text-nebula" aria-hidden>
            ✦
          </span>
          <span className="text-starlight-dim">{profile.subtitle}</span>
        </motion.p>
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl font-mono text-sm text-nebula md:text-base"
        >
          “{profile.tagline}”
        </motion.p>
        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#mission"
            className="group inline-flex items-center gap-3 rounded-full border border-comet/40 bg-comet/5 px-8 py-4 font-mono text-sm tracking-wider text-comet transition-all duration-300 hover:bg-comet/15 hover:shadow-glow-cyan"
          >
            BEGIN THE VOYAGE
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-y-1"
            >
              ↓
            </span>
          </a>
          <a
            href={profile.resumeUrl}
            download="Dami-Hundeyin-Resume.pdf"
            className="group inline-flex items-center gap-3 rounded-full border border-nebula/40 bg-nebula/5 px-8 py-4 font-mono text-sm tracking-wider text-nebula transition-all duration-300 hover:bg-nebula/15 hover:shadow-glow-violet"
          >
            DOWNLOAD RESUME
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-y-1"
            >
              ⤓
            </span>
          </a>
        </motion.div>
      </motion.div>
      {/* bottom fade into first section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-space"
      />
    </section>
  );
}
