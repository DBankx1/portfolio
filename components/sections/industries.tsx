import { industries, type Industry } from "@/content/industries";
import { Reveal } from "@/components/effects/reveal";
import { cn } from "@/lib/cn";

const accentStyles: Record<Industry["accent"], { chip: string; label: string; orb: string }> = {
  cyan: {
    chip: "border-cyan-300/25 hover:border-cyan-300/60 hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.6)]",
    label: "text-cyan-200",
    orb: "border-cyan-300/40 bg-cyan-400/10 shadow-[0_0_14px_-2px_rgba(34,211,238,0.55)]",
  },
  violet: {
    chip: "border-violet-400/25 hover:border-violet-400/60 hover:shadow-[0_0_24px_-6px_rgba(139,92,246,0.6)]",
    label: "text-violet-200",
    orb: "border-violet-400/40 bg-violet-400/10 shadow-[0_0_14px_-2px_rgba(139,92,246,0.55)]",
  },
  emerald: {
    chip: "border-emerald-300/25 hover:border-emerald-300/60 hover:shadow-[0_0_24px_-6px_rgba(52,211,153,0.6)]",
    label: "text-emerald-200",
    orb: "border-emerald-300/40 bg-emerald-400/10 shadow-[0_0_14px_-2px_rgba(52,211,153,0.55)]",
  },
  amber: {
    chip: "border-amber-300/25 hover:border-amber-300/60 hover:shadow-[0_0_24px_-6px_rgba(251,191,36,0.6)]",
    label: "text-amber-200",
    orb: "border-amber-300/40 bg-amber-400/10 shadow-[0_0_14px_-2px_rgba(251,191,36,0.55)]",
  },
  rose: {
    chip: "border-rose-300/25 hover:border-rose-300/60 hover:shadow-[0_0_24px_-6px_rgba(251,113,133,0.6)]",
    label: "text-rose-200",
    orb: "border-rose-300/40 bg-rose-400/10 shadow-[0_0_14px_-2px_rgba(251,113,133,0.55)]",
  },
};

function Chip({ industry }: { industry: Industry }) {
  const accent = accentStyles[industry.accent];
  return (
    <li
      className={cn(
        "flex shrink-0 items-center gap-3 rounded-full border bg-white/[0.03] py-2.5 pl-2.5 pr-6 backdrop-blur-sm transition-all duration-500",
        accent.chip
      )}
    >
      <span
        aria-hidden
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full border text-lg",
          accent.orb
        )}
      >
        {industry.icon}
      </span>
      <span
        className={cn(
          "whitespace-nowrap font-mono text-xs tracking-[0.18em] uppercase md:text-[13px]",
          accent.label
        )}
      >
        {industry.label}
      </span>
    </li>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration,
}: {
  items: Industry[];
  reverse?: boolean;
  duration: string;
}) {
  return (
    <div
      className={cn("marquee-track", reverse && "marquee-reverse")}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {/* two identical copies make the loop seamless */}
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1}
          className="flex shrink-0 items-center gap-4 pr-4 md:gap-5 md:pr-5"
        >
          {items.map((industry) => (
            <Chip key={industry.label} industry={industry} />
          ))}
        </ul>
      ))}
    </div>
  );
}

export function Industries() {
  // second row starts mid-list so the two rows never mirror each other
  const rotated = [...industries.slice(5), ...industries.slice(0, 5)];

  return (
    <section aria-label="Industries explored" className="relative py-6 md:py-10">
      <Reveal amount={0.3}>
        <p className="mb-8 text-center font-mono text-[11px] tracking-[0.4em] text-starlight-dim uppercase md:text-xs">
          <span aria-hidden className="text-comet">
            ✦
          </span>{" "}
          Transmission · Industries explored{" "}
          <span aria-hidden className="text-nebula">
            ✦
          </span>
        </p>
      </Reveal>
      <Reveal amount={0.2}>
        <div
          className="marquee-band space-y-4 md:space-y-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <MarqueeRow items={industries} duration="52s" />
          <MarqueeRow items={rotated} reverse duration="64s" />
        </div>
      </Reveal>
    </section>
  );
}
