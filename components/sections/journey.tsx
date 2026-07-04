"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  contractRoles,
  professionalRoles,
  type Role,
} from "@/content/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/effects/reveal";
import { cn } from "@/lib/cn";

const ringStyles: Record<Role["planet"]["ring"], { border: string; text: string; dot: string }> = {
  cyan: { border: "border-cyan-300/40", text: "text-cyan-300", dot: "bg-cyan-300" },
  violet: { border: "border-violet-400/40", text: "text-violet-300", dot: "bg-violet-400" },
  emerald: { border: "border-emerald-300/40", text: "text-emerald-300", dot: "bg-emerald-300" },
  amber: { border: "border-amber-300/40", text: "text-amber-300", dot: "bg-amber-300" },
  rose: { border: "border-rose-300/40", text: "text-rose-300", dot: "bg-rose-300" },
};

/* Accent-tinted mission-briefing panel styles, keyed by planet ring */
const briefingStyles: Record<
  Role["planet"]["ring"],
  { panel: string; badge: string; label: string }
> = {
  cyan: {
    panel: "border-cyan-300/20 bg-gradient-to-br from-cyan-400/[0.12] via-cyan-400/[0.04] to-transparent",
    badge: "border-cyan-300/40 bg-cyan-400/10 shadow-[0_0_18px_-4px_rgba(34,211,238,0.5)]",
    label: "text-cyan-300",
  },
  violet: {
    panel: "border-violet-400/20 bg-gradient-to-br from-violet-400/[0.12] via-violet-400/[0.04] to-transparent",
    badge: "border-violet-400/40 bg-violet-400/10 shadow-[0_0_18px_-4px_rgba(139,92,246,0.5)]",
    label: "text-violet-300",
  },
  emerald: {
    panel: "border-emerald-300/20 bg-gradient-to-br from-emerald-400/[0.12] via-emerald-400/[0.04] to-transparent",
    badge: "border-emerald-300/40 bg-emerald-400/10 shadow-[0_0_18px_-4px_rgba(52,211,153,0.5)]",
    label: "text-emerald-300",
  },
  amber: {
    panel: "border-amber-300/20 bg-gradient-to-br from-amber-400/[0.12] via-amber-400/[0.04] to-transparent",
    badge: "border-amber-300/40 bg-amber-400/10 shadow-[0_0_18px_-4px_rgba(251,191,36,0.5)]",
    label: "text-amber-300",
  },
  rose: {
    panel: "border-rose-300/20 bg-gradient-to-br from-rose-400/[0.12] via-rose-400/[0.04] to-transparent",
    badge: "border-rose-300/40 bg-rose-400/10 shadow-[0_0_18px_-4px_rgba(251,113,133,0.5)]",
    label: "text-rose-300",
  },
};

function MissionBriefing({ role, isLeft }: { role: Role; isLeft: boolean }) {
  const brief = briefingStyles[role.planet.ring];
  return (
    <div
      className={cn(
        "relative mt-4 overflow-hidden rounded-xl border p-4 md:p-5",
        brief.panel
      )}
    >
      <span aria-hidden className="shine-sweep" />
      <div
        className={cn(
          "relative flex items-start gap-4",
          isLeft && "md:flex-row-reverse"
        )}
      >
        <motion.span
          aria-hidden
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-xl md:h-12 md:w-12 md:text-2xl",
            brief.badge
          )}
        >
          {role.domain.icon}
        </motion.span>
        <div className="min-w-0">
          <p
            className={cn(
              "font-mono text-[10px] tracking-[0.3em] uppercase md:text-[11px]",
              brief.label
            )}
          >
            {role.domain.label}
          </p>
          <p className="mt-1.5 text-sm italic leading-relaxed text-starlight md:text-[15px]">
            {role.summary}
          </p>
        </div>
      </div>
    </div>
  );
}

type TabId = "professional" | "contract";

const tabs: {
  id: TabId;
  label: string;
  callSign: string;
  blurb: string;
  roles: Role[];
}[] = [
  {
    id: "professional",
    label: "Professional",
    callSign: "FULL-TIME MISSIONS",
    blurb:
      "The main flight log. Eight years of full-time missions, each stop a system scaled, a team lifted, and a harder problem solved.",
    roles: professionalRoles,
  },
  {
    id: "contract",
    label: "Contract",
    callSign: "SIDE EXPEDITIONS",
    blurb:
      "The side expeditions. Contract missions took me through Web3 social video, education, and crypto worlds, showing me how software gets built in workshops of every shape and giving me room to have fun showcasing my skills.",
    roles: contractRoles,
  },
];

function Planet({ role }: { role: Role }) {
  const ring = ringStyles[role.planet.ring];
  return (
    <div className="relative flex h-20 w-20 items-center justify-center md:h-24 md:w-24">
      {/* orbit ring */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 rounded-full border border-dashed animate-orbit",
          ring.border
        )}
      >
        <span
          className={cn("absolute -top-1 left-1/2 h-2 w-2 rounded-full", ring.dot)}
        />
      </div>
      {/* planet sphere */}
      <div
        className={cn(
          "h-12 w-12 rounded-full bg-gradient-to-br shadow-[inset_-6px_-6px_12px_rgba(0,0,0,0.55)] md:h-14 md:w-14",
          role.planet.gradient
        )}
      />
    </div>
  );
}

function RoleCard({ role, index }: { role: Role; index: number }) {
  const ring = ringStyles[role.planet.ring];
  const isLeft = index % 2 === 0;

  return (
    <article
      className={cn(
        "relative grid items-start gap-6 md:grid-cols-2 md:gap-0",
        // leave the center column free for the flight path on desktop
        "pl-16 md:pl-0"
      )}
    >
      {/* planet pinned to the flight path */}
      <div className="absolute left-0 top-0 -translate-x-[30%] md:left-1/2 md:-translate-x-1/2">
        <Reveal amount={0.6}>
          <Planet role={role} />
        </Reveal>
      </div>

      <Reveal
        className={cn(
          "md:col-span-1",
          isLeft ? "md:pr-20 md:text-right" : "md:col-start-2 md:pl-20"
        )}
        delay={0.1}
        amount={0.2}
      >
        <p className={cn("font-mono text-xs tracking-[0.25em] uppercase", ring.text)}>
          {role.period} · {role.location}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
          {role.company}
        </h3>
        <p className="mt-1 text-base font-medium text-starlight md:text-lg">
          {role.title}
        </p>
        <MissionBriefing role={role} isLeft={isLeft} />
        <ul
          className={cn(
            "mt-5 space-y-3 text-sm leading-relaxed text-starlight-dim md:text-[15px]",
            isLeft && "md:[direction:rtl] md:[&>li]:[direction:ltr]"
          )}
        >
          {role.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                aria-hidden
                className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", ring.dot)}
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <ul
          className={cn(
            "mt-5 flex flex-wrap gap-2",
            isLeft && "md:justify-end"
          )}
          aria-label={`${role.company} tech stack`}
        >
          {role.stack.map((tech) => (
            <li key={tech}>
              <Tag accent={role.planet.ring === "violet" ? "violet" : "cyan"}>{tech}</Tag>
            </li>
          ))}
        </ul>
      </Reveal>
    </article>
  );
}

function FlightPath({ roles }: { roles: Role[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.7", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  const shipTop = useTransform(progress, (v) => `${Math.min(v * 100, 100)}%`);

  return (
    <div ref={trackRef} className="relative">
      {/* flight path track */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-[9px] w-px border-l border-dashed border-white/15 md:left-1/2"
      />
      {/* animated fill */}
      <motion.div
        aria-hidden
        style={{ scaleY: progress }}
        className="absolute inset-y-0 left-[9px] w-px origin-top bg-gradient-to-b from-comet via-nebula to-comet md:left-1/2"
      />
      {/* ship marker riding the path */}
      <motion.div
        aria-hidden
        style={{ top: shipTop }}
        className="absolute left-[9px] z-10 -translate-x-1/2 -translate-y-1/2 md:left-1/2"
      >
        <div className="flex h-7 w-7 rotate-180 items-center justify-center rounded-full bg-space border border-comet/60 shadow-glow-cyan">
          <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden>
            <path d="M6 0 L11 12 L6 9.5 L1 12 Z" fill="#22d3ee" />
          </svg>
        </div>
      </motion.div>

      <div className="space-y-24 pb-8 pt-4 md:space-y-36">
        {roles.map((role, i) => (
          <RoleCard key={role.id} role={role} index={i} />
        ))}
      </div>
    </div>
  );
}

export function Journey() {
  const [activeTab, setActiveTab] = useState<TabId>("professional");
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section id="journey" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading
        callSign="LOG-03 · The Journey"
        title="Flight path through many worlds"
        subtitle="One voyage, two flight logs. Full-time missions built deep systems, and contract expeditions landed me in workshops of every kind. Pick a log and scroll to fly the route."
      />

      {/* tab switcher */}
      <div className="mb-6 flex justify-center md:mb-8">
        <div
          role="tablist"
          aria-label="Experience type"
          className="inline-flex w-full max-w-md rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-sm sm:w-auto"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative flex-1 rounded-full px-5 py-2.5 font-mono text-xs tracking-wider transition-colors duration-300 sm:flex-none sm:px-8 md:text-sm",
                  isActive ? "text-comet" : "text-starlight-dim hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="journey-tab-pill"
                    aria-hidden
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full border border-comet/40 bg-comet/10 shadow-glow-cyan"
                  />
                )}
                <span className="relative z-10">
                  {tab.label.toUpperCase()}
                  <span className="ml-2 text-[10px] opacity-70">
                    {tab.roles.length}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -28 }}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
            <p className="font-mono text-[11px] tracking-[0.35em] text-nebula uppercase">
              {active.callSign}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-starlight-dim md:text-base">
              {active.blurb}
            </p>
          </div>
          <FlightPath roles={active.roles} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
