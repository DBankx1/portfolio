import { cn } from "@/lib/cn";

type TagProps = {
  children: React.ReactNode;
  accent?: "cyan" | "violet";
  className?: string;
};

export function Tag({ children, accent = "cyan", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs md:text-[13px] transition-colors duration-300",
        accent === "cyan"
          ? "border-comet/25 text-comet/90 hover:border-comet/60 hover:bg-comet/10"
          : "border-nebula/25 text-nebula/90 hover:border-nebula/60 hover:bg-nebula/10",
        className
      )}
    >
      {children}
    </span>
  );
}
