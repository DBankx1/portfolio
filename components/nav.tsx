"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

const links = [
  { id: "mission", label: "Mission" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "lab", label: "Lab" },
  { id: "certs", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const link of links) {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "backdrop-blur-md bg-space/70 border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8"
      >
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-wide text-white"
        >
          DH<span className="text-comet">✦</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "rounded-full px-4 py-2 font-mono text-[13px] tracking-wide transition-colors duration-300",
                  active === link.id
                    ? "text-comet bg-comet/10"
                    : "text-starlight-dim hover:text-white"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="md:hidden rounded-full border border-comet/40 px-4 py-1.5 font-mono text-xs text-comet"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
