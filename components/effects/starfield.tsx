"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  layer: number; // 0 (far) .. 2 (near)
  baseAlpha: number;
  twinklePhase: number;
  twinkleSpeed: number;
};

const LAYER_SPEED = [0.008, 0.018, 0.034]; // px per frame drift, by depth
const LAYER_PARALLAX = [6, 14, 26]; // max px shift from pointer, by depth
const STAR_DENSITY = 1 / 9000; // stars per px²

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let stars: Star[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    const pointer = { x: 0, y: 0 }; // -0.5..0.5, smoothed
    const pointerTarget = { x: 0, y: 0 };

    const seed = () => {
      const count = Math.floor(width * height * STAR_DENSITY);
      stars = Array.from({ length: count }, () => {
        const layer = Math.floor(Math.random() * 3);
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 0.4 + layer * 0.35 + Math.random() * 0.5,
          layer,
          baseAlpha: 0.25 + Math.random() * 0.55,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.008 + Math.random() * 0.02,
        };
      });
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      pointer.x += (pointerTarget.x - pointer.x) * 0.04;
      pointer.y += (pointerTarget.y - pointer.y) * 0.04;

      for (const star of stars) {
        if (!reducedMotion) {
          star.y += LAYER_SPEED[star.layer];
          if (star.y > height + 4) star.y = -4;
          star.twinklePhase += star.twinkleSpeed;
        }
        const twinkle = reducedMotion
          ? 1
          : 0.65 + 0.35 * Math.sin(star.twinklePhase);
        const px = star.x + pointer.x * LAYER_PARALLAX[star.layer];
        const py = star.y + pointer.y * LAYER_PARALLAX[star.layer];

        ctx.beginPath();
        ctx.arc(px, py, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 230, 245, ${star.baseAlpha * twinkle})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onPointerMove = (e: PointerEvent) => {
      pointerTarget.x = e.clientX / width - 0.5;
      pointerTarget.y = e.clientY / height - 0.5;
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
