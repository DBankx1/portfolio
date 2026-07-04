import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/ui/glow-card";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/effects/reveal";

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
          <Reveal key={project.id} delay={i * 0.12} amount={0.2}>
            <GlowCard
              accent={i % 2 === 0 ? "cyan" : "violet"}
              className="flex h-full flex-col"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl font-bold text-white">
                  {project.name}
                </h3>
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${
                    project.status === "active"
                      ? "bg-emerald-400/10 text-emerald-300 border border-emerald-400/30"
                      : "bg-comet/10 text-comet border border-comet/30"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`h-1.5 w-1.5 rounded-full ${
                      project.status === "active"
                        ? "bg-emerald-300 animate-twinkle"
                        : "bg-comet"
                    }`}
                  />
                  {project.status === "active" ? "In Flight" : "Landed"}
                </span>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-starlight-dim md:text-base">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} tech stack`}>
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <Tag accent={i % 2 === 0 ? "cyan" : "violet"}>{tech}</Tag>
                  </li>
                ))}
              </ul>
              {project.links.length > 0 && (
                <div className="mt-6 flex gap-4 border-t border-white/10 pt-5">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-comet underline-offset-4 hover:underline"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
