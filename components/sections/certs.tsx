import { certs } from "@/content/certs";
import { education } from "@/content/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/ui/glow-card";
import { Reveal } from "@/components/effects/reveal";

export function Certs() {
  return (
    <section id="certs" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading
        callSign="LOG-05 · Flight Credentials"
        title="Certifications & education"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal amount={0.2}>
          <GlowCard accent="cyan" className="h-full">
            <p className="mb-6 font-mono text-xs tracking-[0.3em] text-comet uppercase">
              Certifications
            </p>
            <ul className="space-y-5">
              {certs.map((cert) => (
                <li key={cert.id} className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-comet/40 bg-comet/10 text-comet"
                  >
                    ✦
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-white">
                      {cert.name}
                    </p>
                    <p className="text-sm text-starlight-dim">
                      {cert.issuer}
                      {cert.year ? ` · ${cert.year}` : ""}
                    </p>
                    <p
                      className={`mt-1 font-mono text-[11px] uppercase tracking-wider ${
                        cert.status === "earned" ? "text-emerald-300" : "text-amber-300"
                      }`}
                    >
                      {cert.status === "earned" ? "● Certified" : "◐ In progress"}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </GlowCard>
        </Reveal>
        <Reveal delay={0.12} amount={0.2}>
          <GlowCard accent="violet" className="h-full">
            <p className="mb-6 font-mono text-xs tracking-[0.3em] text-nebula uppercase">
              Education
            </p>
            <ul className="space-y-6">
              {education.map((entry) => (
                <li key={entry.school} className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-nebula/40 bg-nebula/10 text-nebula"
                  >
                    ✧
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-white">
                      {entry.school}
                    </p>
                    <p className="text-sm text-starlight-dim">{entry.credential}</p>
                    <p className="mt-1 font-mono text-xs text-starlight-dim">
                      {entry.location} · {entry.period}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  );
}
