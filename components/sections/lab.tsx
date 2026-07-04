"use client";

import { motion } from "motion/react";
import { projects, type Project } from "@/content/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/effects/reveal";
import { cn } from "@/lib/cn";

const accentStyles: Record<
  Project["accent"],
  { card: string; orb: string; link: string; tag: "cyan" | "violet" }
> = {
  cyan: {
    card: "border-cyan-300/20 hover:border-cyan-300/50 hover:shadow-[0_0_36px_-10px_rgba(34,211,238,0.55)]",
    orb: "border-cyan-300/40 bg-cyan-400/10 shadow-[0_0_16px_-2px_rgba(34,211,238,0.55)]",
    link: "border-cyan-300/30 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-300/60",
    tag: "cyan",
  },
  violet: {
    card: "border-violet-400/20 hover:border-violet-400/50 hover:shadow-[0_0_36px_-10px_rgba(139,92,246,0.55)]",
    orb: "border-violet-400/40 bg-violet-400/10 shadow-[0_0_16px_-2px_rgba(139,92,246,0.55)]",
    link: "border-violet-400/30 text-violet-300 hover:bg-violet-400/10 hover:border-violet-400/60",
    tag: "violet",
  },
  emerald: {
    card: "border-emerald-300/20 hover:border-emerald-300/50 hover:shadow-[0_0_36px_-10px_rgba(52,211,153,0.55)]",
    orb: "border-emerald-300/40 bg-emerald-400/10 shadow-[0_0_16px_-2px_rgba(52,211,153,0.55)]",
    link: "border-emerald-300/30 text-emerald-300 hover:bg-emerald-400/10 hover:border-emerald-300/60",
    tag: "cyan",
  },
  amber: {
    card: "border-amber-300/20 hover:border-amber-300/50 hover:shadow-[0_0_36px_-10px_rgba(251,191,36,0.55)]",
    orb: "border-amber-300/40 bg-amber-400/10 shadow-[0_0_16px_-2px_rgba(251,191,36,0.55)]",
    link: "border-amber-300/30 text-amber-300 hover:bg-amber-400/10 hover:border-amber-300/60",
    tag: "violet",
  },
};

function ProjectCard({ project }: { project: Project }) {
  const accent = accentStyles[project.accent];
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white/[0.03] p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 md:p-8",
        accent.card
      )}
    >
      <span aria-hidden className="shine-sweep opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative mb-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <motion.span
            aria-hidden
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-2xl",
              accent.orb
            )}
          >
            {project.icon}
          </motion.span>
          <h3 className="font-display text-2xl font-bold text-white">
            {project.name}
          </h3>
        </div>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider",
            project.status === "active"
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
              : "border-comet/30 bg-comet/10 text-comet"
          )}
        >
          <span
            aria-hidden
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              project.status === "active"
                ? "bg-emerald-300 animate-twinkle"
                : "bg-comet"
            )}
          />
          {project.status === "active" ? "In Flight" : "Landed"}
        </span>
      </div>

      <p className="relative flex-1 text-sm leading-relaxed text-starlight-dim text-pretty md:text-[15px]">
        {project.description}
      </p>

      <ul
        className="relative mt-6 flex flex-wrap gap-2"
        aria-label={`${project.name} tech stack`}
      >
        {project.stack.map((tech) => (
          <li key={tech}>
            <Tag accent={accent.tag}>{tech}</Tag>
          </li>
        ))}
      </ul>

      {project.links.length > 0 && (
        <div className="relative mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group/link inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs tracking-wide transition-all duration-300",
                accent.link
              )}
            >
              {link.label}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export function Lab() {
  return (
    <section id="lab" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading
        callSign="LOG-04 · The Lab"
        title="Experiments in orbit"
        subtitle="Side missions that I'm building and shipping outside of work."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 0.12} amount={0.15}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
