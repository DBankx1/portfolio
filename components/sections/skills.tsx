import { skillGroups } from "@/content/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/ui/glow-card";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/effects/reveal";

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading
        callSign="LOG-02 · Systems Online"
        title="Skills & instrumentation"
        subtitle="Every system aboard, from cloud infrastructure and distributed backends to production AI pipelines and the human side of forward-deployed engineering."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={(i % 2) * 0.12} amount={0.15}>
            <GlowCard accent={group.accent} className="h-full">
              <div className="mb-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
                  {group.title}
                </h3>
                <span
                  className={`font-mono text-xs tracking-[0.25em] ${
                    group.accent === "cyan" ? "text-comet/70" : "text-nebula/70"
                  }`}
                >
                  {group.callSign}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label={group.title}>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Tag accent={group.accent}>{skill}</Tag>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
