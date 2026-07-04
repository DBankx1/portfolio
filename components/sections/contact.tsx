import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/effects/reveal";

const channels = [
  {
    label: "Email",
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hundy",
    href: profile.contact.linkedin,
    icon: "in",
  },
  {
    label: "GitHub",
    value: "GitHub profile",
    href: profile.contact.github,
    icon: "⌥",
  },
  {
    label: "Phone",
    value: profile.contact.phone,
    href: `tel:${profile.contact.phone.replace(/[^+\d]/g, "")}`,
    icon: "☏",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading
        callSign="LOG-06 · Open a Channel"
        title="Let's chart the next mission"
        subtitle="Open to senior software engineering roles across cloud infrastructure, distributed systems, AI integration, and forward-deployed work. All frequencies open."
      />
      <Reveal amount={0.2}>
        <a
          href={`mailto:${profile.contact.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-12 inline-flex items-center gap-4 rounded-2xl border border-comet/40 bg-comet/5 px-8 py-6 transition-all duration-300 hover:bg-comet/10 hover:shadow-glow-cyan"
        >
          <span className="font-display text-xl font-semibold text-white md:text-2xl">
            {profile.contact.email}
          </span>
          <span
            aria-hidden
            className="text-comet transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            ↗
          </span>
        </a>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((channel, i) => (
          <Reveal key={channel.label} delay={i * 0.08} amount={0.2}>
            <a
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-nebula/40 hover:shadow-glow-violet"
            >
              <span
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-nebula/30 bg-nebula/10 font-mono text-sm text-nebula"
              >
                {channel.icon}
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-[0.25em] text-starlight-dim">
                  {channel.label}
                </span>
                <span className="block truncate text-sm font-medium text-white group-hover:text-comet">
                  {channel.value}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
