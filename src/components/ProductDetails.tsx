"use client";

import { motion } from "framer-motion";
import {
  IconLeaf,
  IconShield,
  IconDroplet,
  IconMicroscope,
  IconSprout,
  IconFlask,
  IconHeart,
  IconWind,
} from "./icons";

const heroStats = [
  { icon: IconLeaf, label: "98% Pure Centella", accent: "text-centella-600 bg-centella-50 border-centella-200" },
  { icon: IconMicroscope, label: "Dermatologist Tested", accent: "text-aqua-600 bg-aqua-50 border-aqua-200" },
  { icon: IconSprout, label: "Vegan", accent: "text-centella-600 bg-centella-50 border-centella-200" },
  { icon: IconWind, label: "Fragrance-Free", accent: "text-lavender-600 bg-lavender-50 border-lavender-200" },
];

const ingredients = [
  {
    name: "Centella Asiatica Extract",
    percent: "100%",
    role: "Core active · Calming & barrier strengthening",
    position: "top-[12%] left-[8%]",
    color: "bg-centella-100 text-centella-700 border-centella-200",
  },
  {
    name: "Madecassoside",
    percent: "Key compound",
    role: "Anti-inflammatory · Wound healing support",
    position: "top-[28%] right-[6%]",
    color: "bg-aqua-100 text-aqua-700 border-aqua-200",
  },
  {
    name: "Asiaticoside",
    percent: "Key compound",
    role: "Collagen synthesis · Skin elasticity",
    position: "bottom-[32%] left-[4%]",
    color: "bg-lavender-100 text-lavender-700 border-lavender-200",
  },
  {
    name: "Madecassic Acid",
    percent: "Key compound",
    role: "Skin regeneration · Antioxidant protection",
    position: "bottom-[18%] right-[10%]",
    color: "bg-blush-100 text-blush-400 border-blush-200",
  },
];

const skinTypes = [
  { label: "Sensitive", color: "border-blush-200 bg-blush-50 text-blush-400" },
  { label: "Dry", color: "border-aqua-200 bg-aqua-50 text-aqua-600" },
  { label: "Oily", color: "border-centella-200 bg-centella-50 text-centella-600" },
  { label: "Combination", color: "border-lavender-200 bg-lavender-50 text-lavender-400" },
  { label: "Acne-Prone", color: "border-aqua-200 bg-aqua-50 text-aqua-600" },
  { label: "Eczema-Prone", color: "border-centella-200 bg-centella-50 text-centella-700" },
];

const usageSteps = [
  { step: "01", text: "After cleansing, prep skin with toner to refine texture." },
  { step: "02", text: "Dispense 2–3 drops and gently spread across the entire face." },
  { step: "03", text: "Pat lightly with palms to aid absorption." },
  { step: "04", text: "Layer an extra drop on dry areas if needed." },
  { step: "05", text: "Use morning and evening as part of your daily routine." },
];

const spring = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

function DetailsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aqua-50/30 to-lavender-50/20" />

      {/* God-ray light beams */}
      <div
        className="absolute -left-[10%] top-[5%] h-[60%] w-[45%] opacity-20"
        style={{
          background:
            "linear-gradient(115deg, rgba(255,255,255,0.8) 0%, rgba(186,230,253,0.3) 40%, transparent 70%)",
          transform: "rotate(-8deg)",
        }}
      />
      <div
        className="absolute -right-[5%] top-[20%] h-[50%] w-[35%] opacity-15"
        style={{
          background:
            "linear-gradient(245deg, rgba(255,255,255,0.6) 0%, rgba(233,213,255,0.25) 50%, transparent 80%)",
          transform: "rotate(12deg)",
        }}
      />

      {/* Water ripple rings */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="water-ripple-ring animate-ripple"
          style={{
            width: 120 + i * 80,
            height: 120 + i * 80,
            top: `${30 + i * 8}%`,
            left: `${60 + i * 5}%`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}

      {/* Floating droplets */}
      {[
        { top: "15%", left: "12%", delay: 0 },
        { top: "45%", left: "85%", delay: 1.2 },
        { top: "70%", left: "20%", delay: 2.4 },
        { top: "55%", left: "72%", delay: 0.8 },
      ].map((d, i) => (
        <div
          key={i}
          className="absolute animate-droplet-drift"
          style={{ top: d.top, left: d.left, animationDelay: `${d.delay}s` }}
        >
          <div className="h-3 w-3 rounded-full bg-aqua-300/40 backdrop-blur-sm" />
        </div>
      ))}

      {/* Soft gradient orbs */}
      <div className="absolute left-[5%] top-[40%] h-48 w-48 rounded-full bg-aqua-200/25 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-[15%] right-[8%] h-56 w-56 rounded-full bg-lavender-200/20 blur-3xl animate-pulse-soft [animation-delay:2s]" />
      <div className="absolute bottom-[30%] left-[40%] h-32 w-32 rounded-full bg-centella-100/20 blur-2xl animate-float-gentle" />
    </div>
  );
}

function SerumTextureArt() {
  return (
    <div className="texture-visual aspect-[4/3] w-full sm:aspect-[16/10]">
      {/* Ripple surface */}
      <div className="absolute inset-0 opacity-40">
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

      {/* Serum droplet — CSS art */}
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

      {/* Cream swatch */}
      <div className="absolute bottom-[18%] left-[15%] animate-float-gentle [animation-delay:1s]">
        <div
          className="h-16 w-24 rounded-2xl sm:h-20 sm:w-28"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(224,244,254,0.8) 50%, rgba(186,230,253,0.6) 100%)",
            boxShadow: "0 4px 16px rgba(27,42,74,0.06), inset 0 2px 4px rgba(255,255,255,0.8)",
          }}
        />
        <div className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-centella-200/60 blur-sm" />
      </div>

      {/* Dropper silhouette */}
      <div className="absolute bottom-[22%] right-[18%] animate-float-gentle [animation-delay:2s]">
        <div className="flex flex-col items-center">
          <div className="h-3 w-5 rounded-t-full bg-navy-200/40" />
          <div className="h-14 w-2 rounded-full bg-gradient-to-b from-navy-200/50 to-navy-300/30 sm:h-16" />
          <div className="h-4 w-4 rounded-full bg-centella-300/50" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/60 to-transparent" />
    </div>
  );
}

function IngredientSpotlight() {
  return (
    <div className="ingredient-spotlight">
      <div className="relative aspect-[4/5] min-h-[320px] sm:aspect-[3/4] sm:min-h-[400px]">
        {/* Product visual placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-aqua-50 via-white/80 to-lavender-50/60" />

        {/* Product bottle silhouette */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%]">
          <div className="relative animate-float-gentle">
            <div className="mx-auto h-4 w-16 rounded-t-lg bg-navy-200/30" />
            <div
              className="mx-auto h-44 w-28 rounded-b-3xl rounded-t-lg sm:h-52 sm:w-32"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(224,244,254,0.85) 30%, rgba(167,243,208,0.4) 100%)",
                boxShadow: "0 16px 48px rgba(27,42,74,0.08), inset 0 2px 8px rgba(255,255,255,0.9)",
              }}
            >
              <div className="absolute inset-x-4 top-8 h-24 rounded-xl bg-centella-100/30" />
              <p className="absolute inset-x-0 bottom-6 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-navy-400">
                SKIN1004
              </p>
            </div>
          </div>
        </div>

        {/* Floating ingredient labels */}
        {ingredients.map((ing, i) => (
          <motion.div
            key={ing.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, ...spring }}
            className={`absolute ${ing.position} max-w-[140px] sm:max-w-[160px]`}
          >
            <div
              className={`rounded-2xl border px-3 py-2 shadow-glass backdrop-blur-md ${ing.color}`}
            >
              <p className="text-[10px] font-bold leading-tight">{ing.name}</p>
              <p className="mt-0.5 text-[9px] opacity-70">{ing.percent}</p>
            </div>
          </motion.div>
        ))}

        {/* Water ripple accent */}
        <div className="absolute bottom-[8%] left-1/2 h-16 w-16 -translate-x-1/2 rounded-full border border-aqua-300/30 animate-ripple-slow" />
      </div>
    </div>
  );
}

export default function ProductDetails() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-aqua-100/40 py-20 sm:py-28 lg:py-36">
      <DetailsBackground />

      <div className="section-padding relative z-10">
        <div className="section-container">
          {/* Hero stat row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {heroStats.map(({ icon: Icon, label, accent }) => (
              <span key={label} className="benefit-pill">
                <span className={`flex h-7 w-7 items-center justify-center rounded-full border ${accent}`}>
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {label}
              </span>
            ))}
          </motion.div>

          {/* Editorial headline block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.1 }}
            className="mx-auto mt-14 max-w-3xl text-center sm:mt-16"
          >
            <span className="eyebrow">Madagascar Centella Ampoule</span>
            <h2 className="editorial-headline mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Prescription
              <br />
              <span className="italic text-aqua-600">for Calm Skin</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-navy-500">
              Single-extracted Centella Asiatica from the Madagascar highlands — a low-irritation,
              high-efficacy formula that soothes, strengthens, and restores your skin barrier.
            </p>
          </motion.div>

          {/* Ingredient spotlight + brand story */}
          <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={spring}
            >
              <IngredientSpotlight />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <h3 className="font-editorial text-2xl font-medium text-navy-700 sm:text-3xl">
                Pure Centella,
                <br />
                Nothing Else
              </h3>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-navy-500">
                <p>
                  SKIN1004 is obsessed with{" "}
                  <strong className="font-semibold text-navy-700">Madagascar Centella</strong> — grown
                  in pristine highland soil with up to 7× more active compounds than ordinary centella.
                </p>
                <p>
                  Refined through a single-extraction method, this ampoule delivers pure centella power
                  in a formula safe even for the most sensitive skin.
                </p>
              </div>

              {/* Benefit callouts */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { stat: "99%", label: "Agree It Soothes", icon: IconHeart },
                  { stat: "7×", label: "More Active", icon: IconFlask },
                  { stat: "#1", label: "Olive Young Ampoule", icon: IconShield },
                ].map(({ stat, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/60 bg-white/50 p-4 text-center shadow-glass backdrop-blur-sm"
                  >
                    <Icon className="mx-auto h-4 w-4 text-aqua-500" />
                    <p className="mt-2 font-display text-xl font-extrabold text-navy-700">{stat}</p>
                    <p className="mt-0.5 text-[10px] font-medium leading-tight text-navy-400">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Texture section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="mt-20 lg:mt-28"
          >
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <span className="eyebrow">Texture & Feel</span>
                <h3 className="editorial-headline mt-4 text-3xl sm:text-4xl">
                  Lightweight
                  <br />
                  <span className="italic text-centella-600">Absorption</span>
                </h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-navy-500">
                  A watery essence texture that sinks in like water yet leaves a comfortably hydrated
                  finish. Light enough to layer without feeling heavy — perfect even in summer.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    { label: "Texture", value: "Watery essence" },
                    { label: "Finish", value: "Non-sticky" },
                    { label: "Scent", value: "Fragrance-free" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-aqua-100 bg-white/50 px-4 py-2.5 backdrop-blur-sm"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-navy-400">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-navy-600">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <SerumTextureArt />
            </div>
          </motion.div>

          {/* How to use + Skin types */}
          <div className="mt-20 grid gap-8 lg:mt-28 lg:grid-cols-12 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="lg:col-span-7"
            >
              <span className="eyebrow">How to Use</span>
              <h3 className="editorial-headline mt-4 text-2xl sm:text-3xl">Your Daily Ritual</h3>
              <ol className="mt-8 space-y-5">
                {usageSteps.map(({ step, text }, i) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, ...spring }}
                    className="flex gap-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-aqua-200 bg-aqua-50 font-display text-xs font-bold tabular-nums text-aqua-600">
                      {step}
                    </span>
                    <p className="pt-1.5 text-sm leading-relaxed text-navy-500">{text}</p>
                  </motion.li>
                ))}
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="glass-card h-full">
                <div className="glass-card-body flex h-full flex-col justify-center p-6 sm:p-8">
                  <span className="eyebrow w-fit">Suitable For</span>
                  <h3 className="editorial-headline mt-4 text-2xl">All Skin Types</h3>
                  <p className="mt-3 text-sm text-navy-500">
                    Clinically tested and gentle enough for reactive, compromised skin.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {skinTypes.map(({ label, color }) => (
                      <span key={label} className={`skin-chip ${color}`}>
                        {label}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-3 rounded-2xl border border-centella-100 bg-centella-50/60 p-4">
                    <IconDroplet className="h-5 w-5 shrink-0 text-centella-500" />
                    <p className="text-xs leading-relaxed text-navy-500">
                      <strong className="font-semibold text-navy-700">Barrier Repair</strong> — strengthens
                      damaged skin and forms a moisture shield against external stressors.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full ingredients footnote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={spring}
            className="mx-auto mt-16 max-w-2xl text-center text-xs leading-relaxed text-navy-400"
          >
            Full ingredients: Purified Water, Butylene Glycol, Centella Asiatica Extract (100%),
            1,2-Hexanediol, Hydroxyacetophenone, Sodium Hyaluronate, and more. Made in South Korea ·
            100ml / 55ml available.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
