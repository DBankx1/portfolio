import { cn } from "@/lib/cn";

type GlowCardProps = {
  children: React.ReactNode;
  accent?: "cyan" | "violet";
  className?: string;
};

export function GlowCard({ children, accent = "cyan", className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8 transition-all duration-500",
        accent === "cyan"
          ? "hover:border-comet/40 hover:shadow-glow-cyan"
          : "hover:border-nebula/40 hover:shadow-glow-violet",
        className
      )}
    >
      {children}
    </div>
  );
}
