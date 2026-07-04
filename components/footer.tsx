import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <p className="font-mono text-xs text-starlight-dim">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js, Tailwind
          CSS & Motion · Somewhere past the Kármán line
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 font-mono text-xs text-comet transition-colors hover:text-white"
          aria-label="Back to top"
        >
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 group-hover:-translate-y-1"
          >
            🚀
          </span>
          RETURN TO LAUNCHPAD
        </a>
      </div>
    </footer>
  );
}
