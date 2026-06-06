"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

const spring = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

type SliceConfig = {
  id: string;
  height: string;
  width: string;
  ingredient?: string;
  labelSide?: "left" | "right";
  children: ReactNode;
};

const slices: SliceConfig[] = [
  {
    id: "cap",
    height: "h-5",
    width: "w-14",
    children: (
      <div className="h-full w-full rounded-t-md bg-gradient-to-b from-white to-gray-100 shadow-inner">
        <div className="mx-auto mt-1 h-1.5 w-6 rounded-full bg-gray-200" />
      </div>
    ),
  },
  {
    id: "dropper",
    height: "h-4",
    width: "w-10",
    children: (
      <div className="mx-auto h-full w-8 rounded-sm bg-gradient-to-b from-gray-300/80 to-gray-400/60" />
    ),
  },
  {
    id: "neck",
    height: "h-6",
    width: "w-16",
    children: (
      <div className="h-full w-full rounded-sm border border-white/80 bg-gradient-to-b from-white/90 to-aqua-50/70 shadow-glass backdrop-blur-sm">
        <div className="mx-auto mt-1 h-2 w-2 rounded-full bg-aqua-200/60" />
      </div>
    ),
  },
  {
    id: "label",
    height: "h-14",
    width: "w-20",
    children: (
      <div className="flex h-full w-full flex-col items-center justify-center rounded-sm border border-white/90 bg-white/95 px-1 shadow-soft">
        <p className="text-[7px] font-extrabold tracking-[0.2em] text-navy-700 sm:text-[8px]">SKIN1004</p>
        <p className="mt-0.5 text-[5px] font-semibold leading-tight text-aqua-600 sm:text-[6px]">MADAGASCAR</p>
        <p className="text-[5px] font-semibold leading-tight text-aqua-600 sm:text-[6px]">CENTELLA</p>
        <p className="mt-1 text-[4px] font-medium text-navy-400 sm:text-[5px]">AMPOULE</p>
      </div>
    ),
  },
  {
    id: "centella",
    height: "h-10",
    width: "w-[5.5rem]",
    ingredient: "Centella Asiatica",
    labelSide: "left",
    children: (
      <div className="relative h-full w-full overflow-hidden rounded-sm border border-white/70 bg-gradient-to-r from-centella-100/90 via-emerald-50/80 to-aqua-50/70 shadow-glass">
        <div className="absolute inset-0 opacity-60">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-centella-400/50"
              style={{
                width: 4 + (i % 3) * 2,
                height: 4 + (i % 3) * 2,
                top: `${15 + (i * 13) % 60}%`,
                left: `${10 + (i * 17) % 75}%`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-x-2 top-1/2 h-px bg-white/50" />
      </div>
    ),
  },
  {
    id: "hyaluronic",
    height: "h-9",
    width: "w-[5.5rem]",
    ingredient: "Hyaluronic Acid",
    labelSide: "right",
    children: (
      <div className="relative h-full w-full overflow-hidden rounded-sm border border-white/70 bg-gradient-to-r from-aqua-100/90 via-sky-50/80 to-white/70 shadow-glass">
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-aqua-300/40 bg-aqua-200/30"
              style={{
                width: 6 + (i % 2) * 4,
                height: 6 + (i % 2) * 4,
                top: `${8 + (i * 11) % 65}%`,
                left: `${5 + (i * 19) % 80}%`,
              }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "niacinamide",
    height: "h-9",
    width: "w-[5.5rem]",
    ingredient: "Niacinamide",
    labelSide: "left",
    children: (
      <div className="relative h-full w-full overflow-hidden rounded-sm border border-white/70 bg-gradient-to-r from-lavender-100/80 via-white/90 to-blush-50/70 shadow-glass">
        <div className="absolute inset-0 opacity-50">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 w-0.5 rounded-full bg-lavender-300/60"
              style={{
                top: `${5 + (i * 9) % 85}%`,
                left: `${8 + (i * 13) % 85}%`,
              }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "madecassoside",
    height: "h-10",
    width: "w-[5.5rem]",
    ingredient: "Madecassoside",
    labelSide: "right",
    children: (
      <div className="relative h-full w-full overflow-hidden rounded-sm border border-white/70 bg-gradient-to-r from-centella-200/70 via-emerald-100/80 to-aqua-100/60 shadow-glass">
        <div className="absolute inset-2 rounded-full border border-centella-300/30 bg-centella-100/40" />
        <div className="absolute inset-4 rounded-full bg-centella-300/20" />
      </div>
    ),
  },
  {
    id: "base",
    height: "h-5",
    width: "w-[5.5rem]",
    children: (
      <div className="h-full w-full rounded-b-lg border border-white/80 bg-gradient-to-b from-white/90 to-aqua-50/60 shadow-soft" />
    ),
  },
];

const floatVariants = {
  initial: { y: 0 },
  animate: (i: number) => ({
    y: [0, -4 - (i % 3) * 2, 0],
    transition: {
      duration: 3 + (i % 4) * 0.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.15,
    },
  }),
};

const labelPositions: Record<string, { top: string; side: "left" | "right" }> = {
  centella: { top: "38%", side: "left" },
  hyaluronic: { top: "48%", side: "right" },
  niacinamide: { top: "58%", side: "left" },
  madecassoside: { top: "68%", side: "right" },
};

export default function ExplodedAmpoule() {
  const ingredientSlices = slices.filter((s) => s.ingredient);

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px]">
      {/* Desktop leader lines */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        {ingredientSlices.map((slice, i) => {
          const pos = labelPositions[slice.id];
          if (!pos) return null;
          const isLeft = pos.side === "left";
          const yPercent = parseFloat(pos.top);
          const startX = isLeft ? "42%" : "58%";
          const endX = isLeft ? "8%" : "92%";
          return (
            <motion.line
              key={slice.id}
              x1={startX}
              y1={`${yPercent}%`}
              x2={endX}
              y2={`${yPercent}%`}
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...spring, delay: 0.8 + i * 0.12 }}
            />
          );
        })}
      </svg>

      {/* Desktop ingredient labels */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        {ingredientSlices.map((slice, i) => {
          const pos = labelPositions[slice.id];
          if (!pos || !slice.ingredient) return null;
          return (
            <motion.div
              key={`label-${slice.id}`}
              initial={{ opacity: 0, x: pos.side === "left" ? -12 : 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.1, ...spring }}
              className={`absolute ${pos.side === "left" ? "left-0 text-left" : "right-0 text-right"}`}
              style={{ top: pos.top, transform: "translateY(-50%)" }}
            >
              <span className="text-[11px] font-semibold tracking-wide text-white drop-shadow-sm">
                {slice.ingredient}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Sliced ampoule stack */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.2 }}
        className="relative z-20 flex flex-col items-center gap-[6px] sm:gap-2"
      >
        {slices.map((slice, i) => (
          <motion.div
            key={slice.id}
            custom={i}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className={`${slice.height} ${slice.width} shrink-0`}
          >
            {slice.children}
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile ingredient labels */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, ...spring }}
        className="mt-6 flex flex-wrap justify-center gap-2 lg:hidden"
      >
        {ingredientSlices.map((slice) => (
          <span
            key={`mobile-${slice.id}`}
            className="rounded-full border border-white/60 bg-white/25 px-3 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur-sm"
          >
            {slice.ingredient}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
