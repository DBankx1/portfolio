import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/ui/glow-card";
import { Reveal } from "@/components/effects/reveal";
import { GalaxyText } from "@/components/ui/galaxy-text";

export function Mission() {
  return (
    <section id="mission" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading callSign="LOG-01 · The Mission" title="A journey to greater heights" />
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <div className="space-y-6">
          {profile.mission.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <p className="text-base leading-relaxed text-starlight-dim text-pretty md:text-lg">
                <GalaxyText text={paragraph} />
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <GlowCard accent="violet" className="h-fit">
            <p className="mb-5 font-mono text-xs tracking-[0.3em] text-nebula uppercase">
              Crew Manifest
            </p>
            <ul className="space-y-5">
              {profile.crew.map((member) => (
                <li key={member.role} className="flex items-start gap-4">
                  <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-comet shadow-glow-cyan" />
                  <div>
                    <p className="font-mono text-xs text-comet uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="font-display text-lg font-semibold text-white">
                      {member.name}
                    </p>
                    <p className="text-sm text-starlight-dim">{member.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-white/10 pt-5 font-mono text-xs text-starlight-dim">
              STATUS: <span className="text-comet">ASCENDING</span> · DESTINATION:{" "}
              <span className="text-nebula">GREATER HEIGHTS</span>
            </p>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  );
}
