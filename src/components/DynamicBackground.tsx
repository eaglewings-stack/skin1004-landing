"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const bubbles = [
  { size: 48, top: "8%", left: "6%", delay: 0, duration: 14 },
  { size: 24, top: "22%", left: "82%", delay: 1.2, duration: 11 },
  { size: 36, top: "55%", left: "12%", delay: 2.4, duration: 16 },
  { size: 16, top: "68%", left: "78%", delay: 0.8, duration: 10 },
  { size: 56, top: "38%", left: "88%", delay: 3, duration: 18 },
  { size: 20, top: "82%", left: "42%", delay: 1.8, duration: 12 },
  { size: 32, top: "15%", left: "48%", delay: 2.8, duration: 15 },
  { size: 12, top: "72%", left: "22%", delay: 0.4, duration: 9 },
];

const droplets = [
  { top: "18%", left: "28%", delay: 0 },
  { top: "45%", left: "65%", delay: 1.5 },
  { top: "62%", left: "35%", delay: 3 },
  { top: "30%", left: "72%", delay: 2 },
  { top: "78%", left: "58%", delay: 4 },
];

export default function DynamicBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const { scrollY } = useScroll();
  const orbY1 = useTransform(scrollY, [0, 1200], [0, -80]);
  const orbY2 = useTransform(scrollY, [0, 1200], [0, 60]);
  const orbY3 = useTransform(scrollY, [0, 1200], [0, -40]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-surface"
      aria-hidden="true"
    >
      {/* Base pastel mesh gradient */}
      <div className="absolute inset-0 bg-mesh-pastel opacity-90" />

      {/* Large gradient orbs with parallax */}
      <motion.div
        style={reducedMotion ? undefined : { y: orbY1 }}
        className="absolute -left-[15%] -top-[10%] h-[55vw] max-h-[520px] w-[55vw] max-w-[520px] rounded-full bg-aqua-200/35 blur-3xl animate-pulse-soft"
      />
      <motion.div
        style={reducedMotion ? undefined : { y: orbY2 }}
        className="absolute -right-[12%] top-[15%] h-[45vw] max-h-[440px] w-[45vw] max-w-[440px] rounded-full bg-lavender-200/30 blur-3xl animate-pulse-soft [animation-delay:2s]"
      />
      <motion.div
        style={reducedMotion ? undefined : { y: orbY3 }}
        className="absolute -bottom-[8%] left-[25%] h-[40vw] max-h-[400px] w-[40vw] max-w-[400px] rounded-full bg-blush-200/25 blur-3xl animate-pulse-soft [animation-delay:4s]"
      />
      <div className="absolute bottom-[20%] right-[30%] h-[28vw] max-h-[280px] w-[28vw] max-w-[280px] rounded-full bg-centella-100/20 blur-3xl animate-float" />

      {/* Floating bubbles */}
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/50 bg-white/25 backdrop-blur-[2px] animate-bubble-float"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            opacity: 0.35 + (i % 3) * 0.1,
          }}
        />
      ))}

      {/* Water droplets */}
      {droplets.map((d, i) => (
        <div
          key={`drop-${i}`}
          className="absolute animate-droplet-drift"
          style={{
            top: d.top,
            left: d.left,
            animationDelay: `${d.delay}s`,
          }}
        >
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            className="opacity-30"
          >
            <path
              d="M7 0C7 0 13 8.5 13 12.5C13 15.5 10.3 18 7 18C3.7 18 1 15.5 1 12.5C1 8.5 7 0 7 0Z"
              fill={`url(#dropGrad-${i})`}
            />
            <defs>
              <linearGradient id={`dropGrad-${i}`} x1="7" y1="0" x2="7" y2="18">
                <stop stopColor="#BAE6FD" />
                <stop offset="1" stopColor="#7DD3FC" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}

      {/* Subtle shimmer wave */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-aqua-100/20 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
          animation: reducedMotion ? "none" : "shimmer 8s linear infinite",
        }}
      />
    </div>
  );
}
