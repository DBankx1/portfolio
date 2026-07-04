import { Reveal } from "@/components/effects/reveal";

type SectionHeadingProps = {
  callSign: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ callSign, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <p className="font-mono text-xs md:text-sm tracking-[0.35em] text-comet mb-3 uppercase">
        {callSign}
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-starlight-dim text-base md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
