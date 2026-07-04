import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stars = [
  { top: 60, left: 120, s: 3 },
  { top: 140, left: 980, s: 2 },
  { top: 90, left: 620, s: 2 },
  { top: 220, left: 320, s: 3 },
  { top: 300, left: 1080, s: 2 },
  { top: 420, left: 180, s: 2 },
  { top: 500, left: 760, s: 3 },
  { top: 560, left: 420, s: 2 },
  { top: 380, left: 900, s: 2 },
  { top: 180, left: 60, s: 2 },
  { top: 520, left: 1120, s: 3 },
  { top: 470, left: 560, s: 2 },
];

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #030014 0%, #0b0630 55%, #1e1b4b 100%)",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {stars.map((star, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: star.top,
              left: star.left,
              width: star.s,
              height: star.s,
              borderRadius: 9999,
              background: "#e8e6f5",
              opacity: 0.9,
            }}
          />
        ))}
        <div
          style={{
            fontSize: 28,
            color: "#22d3ee",
            letterSpacing: 6,
            marginBottom: 24,
          }}
        >
          SENIOR SOFTWARE ENGINEER
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          {profile.name}
        </div>
        <div style={{ fontSize: 34, color: "#9d98c4", marginBottom: 40 }}>
          Cloud & System Infrastructure • AI Integration
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#8b5cf6",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          🚀 {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
