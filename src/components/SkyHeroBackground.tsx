"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const clouds = [
  { width: "w-48", height: "h-16", bottom: "8%", left: "-5%", delay: 0, duration: 28 },
  { width: "w-64", height: "h-20", bottom: "4%", left: "25%", delay: 2, duration: 32 },
  { width: "w-56", height: "h-[4.5rem]", bottom: "10%", left: "55%", delay: 1, duration: 26 },
  { width: "w-40", height: "h-14", bottom: "2%", left: "78%", delay: 3, duration: 30 },
  { width: "w-72", height: "h-24", bottom: "14%", left: "40%", delay: 1.5, duration: 34 },
];

function CloudShape({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute bottom-0 left-[10%] h-[55%] w-[35%] rounded-full bg-white/90" />
      <div className="absolute bottom-0 left-[30%] h-[75%] w-[45%] rounded-full bg-white/95" />
      <div className="absolute bottom-0 left-[55%] h-[60%] w-[38%] rounded-full bg-white/85" />
      <div className="absolute bottom-0 left-0 right-0 h-[35%] rounded-full bg-white/90 blur-[1px]" />
    </div>
  );
}

export default function SkyHeroBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #4A9FD4 0%, #6BB5DE 35%, #87CEEB 70%, #A8D8F0 100%)",
        }}
      />

      {/* Soft horizon glow */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/30 to-transparent" />

      {/* Floating orbs */}
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -8, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[15%] top-[20%] h-24 w-24 rounded-full bg-white/15 blur-2xl"
      />
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, 6, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[20%] top-[30%] h-32 w-32 rounded-full bg-white/10 blur-3xl"
      />

      {/* Animated clouds */}
      {clouds.map((cloud, i) => (
        <motion.div
          key={i}
          className={`absolute opacity-80 ${cloud.width} ${cloud.height}`}
          style={{ bottom: cloud.bottom, left: cloud.left }}
          animate={reducedMotion ? undefined : { x: [0, 20, 0] }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: cloud.delay,
          }}
        >
          <CloudShape className="h-full w-full" />
        </motion.div>
      ))}

      {/* Bottom cloud bank */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent sm:h-40" />
    </div>
  );
}
