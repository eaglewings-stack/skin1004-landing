"use client";

import { motion } from "framer-motion";
import {
  IconLeaf,
  IconShield,
  IconDroplet,
  IconSparkle,
  IconMicroscope,
  IconSprout,
  IconFlask,
  IconHeart,
  IconWind,
} from "./icons";

const statBadges = [
  { value: "98%", label: "Pure Centella", accent: "border-aqua-200 bg-aqua-50/80 text-aqua-600" },
  { value: "72hr", label: "Hydration", accent: "border-sky-light/40 bg-white/70 text-sky-deep" },
  { value: "99%", label: "Agree It Soothes", accent: "border-centella-200 bg-centella-50/80 text-centella-600" },
  { value: "87%", label: "Saw Improvement", accent: "border-aqua-200 bg-aqua-50/80 text-aqua-600" },
];

const benefitIcons = [
  { icon: IconHeart, label: "Soothe", desc: "Instant calm" },
  { icon: IconShield, label: "Barrier", desc: "Strength restored" },
  { icon: IconDroplet, label: "Hydrate", desc: "Deep moisture" },
  { icon: IconSparkle, label: "Glow", desc: "Radiant finish" },
];

const ingredients = [
  {
    icon: IconLeaf,
    name: "Centella Asiatica",
    tag: "100%",
    benefit: "Calm · Barrier support",
    color: "text-centella-600 bg-centella-50 border-centella-200",
  },
  {
    icon: IconFlask,
    name: "Madecassoside",
    tag: "Active",
    benefit: "Anti-inflammatory",
    color: "text-aqua-600 bg-aqua-50 border-aqua-200",
  },
  {
    icon: IconSprout,
    name: "Asiaticoside",
    tag: "Active",
    benefit: "Elasticity · Repair",
    color: "text-lavender-400 bg-lavender-50 border-lavender-200",
  },
  {
    icon: IconShield,
    name: "Madecassic Acid",
    tag: "Active",
    benefit: "Regeneration",
    color: "text-aqua-600 bg-aqua-50 border-aqua-200",
  },
];

const usageSteps = [
  { step: "1", title: "Prep", text: "After cleansing, tone to refine skin." },
  { step: "2", title: "Apply", text: "2–3 drops. Spread across face." },
  { step: "3", title: "Press", text: "Pat gently. Let it sink in." },
];

const spring = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

function StatBadge({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <div
      className={`flex h-[7.5rem] w-[7.5rem] shrink-0 flex-col items-center justify-center rounded-full border shadow-glass backdrop-blur-md sm:h-[8.5rem] sm:w-[8.5rem] ${accent}`}
    >
      <p className="font-display text-2xl font-extrabold leading-none sm:text-3xl">{value}</p>
      <p className="mt-1.5 max-w-[5.5rem] text-center text-[10px] font-semibold leading-tight tracking-wide sm:text-[11px]">
        {label}
      </p>
    </div>
  );
}

function DetailsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-aqua-50/60 via-white/40 to-aqua-100/30" />
      <div className="absolute inset-0 bg-mesh-pastel opacity-50" />

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.7) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 8s linear infinite",
        }}
      />

      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="water-ripple-ring animate-ripple"
          style={{
            width: 100 + i * 70,
            height: 100 + i * 70,
            top: `${20 + i * 12}%`,
            left: `${55 + i * 4}%`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}

      {[
        { top: "12%", left: "8%", delay: 0 },
        { top: "38%", left: "92%", delay: 1.4 },
        { top: "68%", left: "15%", delay: 2.2 },
        { top: "52%", left: "78%", delay: 0.6 },
        { top: "82%", left: "45%", delay: 3 },
      ].map((d, i) => (
        <div
          key={i}
          className="absolute animate-droplet-drift"
          style={{ top: d.top, left: d.left, animationDelay: `${d.delay}s` }}
        >
          <div className="h-2.5 w-2.5 rounded-full bg-aqua-300/50 backdrop-blur-sm sm:h-3 sm:w-3" />
        </div>
      ))}

      <div className="absolute left-[3%] top-[35%] h-52 w-52 rounded-full bg-aqua-200/30 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-[10%] right-[5%] h-64 w-64 rounded-full bg-sky-pale/40 blur-3xl animate-pulse-soft [animation-delay:2s]" />
      <div className="absolute bottom-[40%] left-[35%] h-36 w-36 rounded-full bg-centella-100/25 blur-2xl animate-float-gentle" />
    </div>
  );
}

function FloatingProductVisual() {
  return (
    <div className="ingredient-spotlight relative">
      <div className="relative aspect-[4/5] min-h-[340px] sm:aspect-[3/4] sm:min-h-[420px]">
        <div className="absolute inset-0 bg-gradient-to-br from-aqua-100/80 via-white/70 to-sky-pale/50" />

        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute left-1/2 top-[55%] -translate-x-1/2 rounded-full border border-aqua-300/25"
            style={{
              width: `${30 + i * 22}%`,
              height: `${30 + i * 22}%`,
              animation: `ripple ${5 + i}s ease-out infinite`,
              animationDelay: `${i * 0.9}s`,
            }}
          />
        ))}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%]">
          <div className="relative animate-float-gentle">
            <div className="mx-auto h-4 w-16 rounded-t-lg bg-navy-200/25" />
            <div
              className="mx-auto h-48 w-32 rounded-b-3xl rounded-t-lg sm:h-56 sm:w-36"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(224,244,254,0.9) 35%, rgba(167,243,208,0.35) 100%)",
                boxShadow: "0 20px 56px rgba(74,159,212,0.12), inset 0 2px 8px rgba(255,255,255,0.95)",
              }}
            >
              <div className="absolute inset-x-5 top-10 h-28 rounded-2xl bg-aqua-100/40" />
              <p className="absolute inset-x-0 bottom-7 text-center text-[9px] font-bold uppercase tracking-[0.22em] text-navy-400">
                SKIN1004
              </p>
            </div>
            <div className="absolute -right-3 top-8 h-8 w-8 rounded-full bg-white/60 blur-sm" />
          </div>
        </div>

        <div className="absolute bottom-[10%] left-1/2 flex -translate-x-1/2 gap-2">
          {[IconMicroscope, IconWind, IconSprout].map((Icon, i) => (
            <div
              key={i}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/50 shadow-glass backdrop-blur-md"
            >
              <Icon className="h-4 w-4 text-aqua-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SerumTextureArt() {
  return (
    <div className="texture-visual aspect-[4/3] w-full sm:aspect-[16/10]">
      <div className="absolute inset-0 opacity-35">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-aqua-300/30"
            style={{
              width: `${40 + i * 25}%`,
              height: `${40 + i * 25}%`,
              animation: `ripple ${4 + i}s ease-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%]">
        <div className="relative animate-float-gentle">
          <div
            className="h-28 w-20 rounded-b-[50%] rounded-t-[45%] sm:h-36 sm:w-24"
            style={{
              background:
                "linear-gradient(180deg, rgba(167,243,208,0.9) 0%, rgba(110,231,183,0.7) 40%, rgba(52,211,153,0.5) 100%)",
              boxShadow: "inset 0 -8px 20px rgba(255,255,255,0.4), 0 8px 32px rgba(16,185,129,0.15)",
            }}
          />
          <div className="absolute left-[30%] top-[15%] h-8 w-3 rounded-full bg-white/50 blur-[1px]" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/60 to-transparent" />
    </div>
  );
}

export default function ProductDetails() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-aqua-100/40 py-20 sm:py-28 lg:py-36">
      <DetailsBackground />

      <div className="section-padding relative z-10">
        <div className="section-container">
          {/* Circular stat badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {statBadges.map((badge) => (
              <StatBadge key={badge.label} {...badge} />
            ))}
          </motion.div>

          {/* Icon benefit row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.08 }}
            className="mx-auto mt-10 flex max-w-lg justify-between gap-2 sm:mt-12 sm:max-w-xl sm:gap-4"
          >
            {benefitIcons.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex flex-1 flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-aqua-200/80 bg-white/60 shadow-glass backdrop-blur-md sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 text-aqua-500 sm:h-6 sm:w-6" />
                </div>
                <p className="mt-2 text-xs font-bold text-navy-700 sm:text-sm">{label}</p>
                <p className="mt-0.5 text-[10px] text-navy-400 sm:text-[11px]">{desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Editorial split — product left, copy right */}
          <div className="mt-16 grid items-center gap-10 lg:mt-24 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="order-2 lg:order-1"
            >
              <FloatingProductVisual />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              className="order-1 flex flex-col justify-center lg:order-2"
            >
              <span className="eyebrow w-fit">Madagascar Centella Ampoule</span>
              <h2 className="editorial-headline mt-5 text-4xl sm:text-5xl lg:text-[3.25rem]">
                Gently Restores
                <br />
                <span className="italic text-aqua-600">Barrier You Can Feel</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-navy-500">
                Single-extracted centella from Madagascar highlands. Pure power. Zero compromise.
              </p>
              <p className="mt-3 max-w-md text-sm text-navy-400">
                7× more actives than ordinary centella — clinically calm, deeply hydrating.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  { icon: IconMicroscope, label: "Dermatologist Tested" },
                  { icon: IconSprout, label: "Vegan" },
                  { icon: IconWind, label: "Fragrance-Free" },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="benefit-pill">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-aqua-200 bg-aqua-50 text-aqua-600">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Texture — copy left, visual right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="mt-20 rounded-4xl border border-aqua-100/50 bg-gradient-to-br from-aqua-50/70 via-white/50 to-sky-pale/30 p-6 shadow-glass backdrop-blur-sm sm:mt-28 sm:p-10 lg:mt-32"
          >
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <span className="eyebrow">Texture</span>
                <h3 className="font-display mt-4 text-3xl font-extrabold leading-tight text-navy-700 sm:text-4xl">
                  Weightless.
                  <br />
                  <span className="text-aqua-600">Absorbed.</span>
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-500">
                  Water-light essence. Sinks in fast. Leaves skin soft — never sticky.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Watery essence", "Non-sticky", "Layer-ready"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-aqua-100 bg-white/60 px-4 py-2 text-xs font-semibold text-navy-600 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <SerumTextureArt />
            </div>
          </motion.div>

          {/* Ingredients — minimal icon list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="mt-20 sm:mt-28"
          >
            <div className="text-center">
              <span className="eyebrow">Key Actives</span>
              <h3 className="font-display mt-4 text-2xl font-extrabold text-navy-700 sm:text-3xl">
                Pure. Proven. Minimal.
              </h3>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2 sm:gap-4">
              {ingredients.map((ing, i) => (
                <motion.div
                  key={ing.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, ...spring }}
                  className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/55 p-4 shadow-glass backdrop-blur-md"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${ing.color}`}
                  >
                    <ing.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <p className="truncate text-sm font-bold text-navy-700">{ing.name}</p>
                      <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-navy-400">
                        {ing.tag}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-navy-400">{ing.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How to use — 3 steps, large type */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="mt-20 sm:mt-28"
          >
            <div className="text-center">
              <span className="eyebrow">How to Use</span>
              <h3 className="font-display mt-4 text-2xl font-extrabold text-navy-700 sm:text-3xl">
                Three Steps. Daily Ritual.
              </h3>
            </div>

            <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-3 sm:gap-6">
              {usageSteps.map(({ step, title, text }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, ...spring }}
                  className="text-center"
                >
                  <span className="font-display text-6xl font-extrabold leading-none text-aqua-200 sm:text-7xl">
                    {step}
                  </span>
                  <h4 className="mt-3 text-lg font-bold text-navy-700">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy-400">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={spring}
            className="mx-auto mt-16 max-w-xl text-center text-[11px] leading-relaxed text-navy-400"
          >
            Purified Water · Centella Asiatica Extract · Sodium Hyaluronate · Made in Korea · 55ml / 100ml
          </motion.p>
        </div>
      </div>
    </section>
  );
}
