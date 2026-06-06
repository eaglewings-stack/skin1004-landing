"use client";

import { motion } from "framer-motion";
import { IconCheck } from "./icons";

const ingredients = [
  { name: "Centella Asiatica Extract", percent: "100%", role: "Core active · Calming & barrier strengthening" },
  { name: "Madecassoside", percent: "Included", role: "Anti-inflammatory · Wound healing support" },
  { name: "Asiaticoside", percent: "Included", role: "Collagen synthesis · Skin elasticity" },
  { name: "Madecassic Acid", percent: "Included", role: "Skin regeneration · Antioxidant protection" },
];

const skinTypes = ["Sensitive", "Dry", "Oily", "Combination", "Acne-Prone", "Eczema-Prone"];

const usageSteps = [
  "After cleansing, prep skin with toner to refine texture.",
  "Dispense 2–3 drops and gently spread across the entire face.",
  "Pat lightly with palms to aid absorption.",
  "Layer an extra drop on dry areas if needed.",
  "Use morning and evening as part of your daily skincare routine.",
];

const textureInfo = [
  { label: "Texture", value: "Light, watery essence-type ampoule" },
  { label: "Color", value: "Near-transparent pale green" },
  { label: "Scent", value: "Fragrance-free" },
  { label: "Absorption", value: "Fast-absorbing, non-sticky finish" },
  { label: "Size", value: "100ml / 55ml" },
  { label: "Origin", value: "South Korea" },
];

const benefits = [
  "Instant skin calming and redness reduction",
  "Strengthens damaged skin barrier and forms a moisture shield",
  "Acne care and skin condition stabilization",
  "Evens skin tone and restores healthy radiance",
  "Protects skin from external stressors (pollution, UV)",
  "Relieves inner dryness and maintains long-lasting hydration",
];

const spring = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

export default function ProductDetails() {
  return (
    <section id="about" className="relative border-t border-aqua-100/60 py-20 sm:py-32 lg:py-40">

      <div className="section-padding relative">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="lg:max-w-2xl"
          >
            <span className="eyebrow">Product Details</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-snug text-navy-700 sm:text-5xl">
              Everything You Need to Know
            </h2>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-navy-500">
              Complete your minimalist skincare with one ampoule. We removed what your skin
              doesn&apos;t need — and kept only what it truly requires.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:gap-6 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="glass-card lg:col-span-7"
            >
              <div className="glass-card-body p-6 sm:p-10">
                <h3 className="font-display text-xl font-bold text-navy-700">Brand Story</h3>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-navy-500">
                  <p>
                    SKIN1004 is a K-beauty brand{" "}
                    <strong className="font-semibold text-navy-700">obsessed with Madagascar Centella</strong>.
                    Centella Asiatica grown in the pristine soil and climate of the Madagascar
                    highlands contains up to 7× more active compounds than ordinary centella.
                  </p>
                  <p>
                    Refined through a single-extraction method, this ampoule contains only pure
                    centella — a{" "}
                    <strong className="font-semibold text-navy-700">low-irritation, high-efficacy formula</strong>{" "}
                    safe even for the most sensitive skin.
                  </p>
                  <p>
                    Winner of the Hwahae 20th Anniversary Award and Olive Young&apos;s #1 ampoule,
                    this is SKIN1004&apos;s most trusted product — chosen by countless customers
                    and skincare experts worldwide.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              className="glass-card lg:col-span-5"
            >
              <div className="glass-card-body p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-navy-700">Suitable Skin Types</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skinTypes.map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-aqua-200 bg-aqua-50 px-3 py-1.5 text-xs font-semibold text-aqua-700"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs text-navy-400">All skin types · Clinically tested</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.15 }}
              className="glass-card lg:col-span-5 lg:translate-y-4"
            >
              <div className="glass-card-body p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-navy-700">Key Benefits</h3>
                <ul className="mt-5 space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm text-navy-500">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-centella-100 text-centella-600">
                        <IconCheck className="h-3 w-3" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.2 }}
              className="glass-card lg:col-span-7 lg:-translate-y-4"
            >
              <div className="glass-card-body p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-navy-700">Key Ingredients</h3>
                <div className="mt-5 space-y-4">
                  {ingredients.map((ing) => (
                    <div
                      key={ing.name}
                      className="flex items-start justify-between gap-4 border-b border-aqua-100 pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="text-sm font-semibold text-navy-700">{ing.name}</p>
                        <p className="mt-0.5 text-xs text-navy-400">{ing.role}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-aqua-50 px-3 py-1 text-xs font-bold tabular-nums text-aqua-600">
                        {ing.percent}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-relaxed text-navy-400">
                  * Full ingredients: Purified Water, Butylene Glycol, Centella Asiatica Extract
                  (100%), 1,2-Hexanediol, Hydroxyacetophenone, Sodium Hyaluronate, and more.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.25 }}
              className="glass-card lg:col-span-6"
            >
              <div className="glass-card-body p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-navy-700">Texture & Feel</h3>
                <div className="section-full-bleed mt-5 lg:mx-0">
                  <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide lg:grid lg:grid-cols-2 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
                    {textureInfo.map((item) => (
                      <div
                        key={item.label}
                        className="min-w-[140px] shrink-0 rounded-2xl border border-aqua-100 bg-white/50 p-4 lg:min-w-0"
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-navy-400">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm text-navy-600">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-aqua-100 bg-aqua-50/60 p-4">
                  <p className="text-xs leading-relaxed text-navy-500">
                    A{" "}
                    <strong className="font-semibold text-navy-700">watery essence texture</strong>{" "}
                    that sinks in like water yet leaves a comfortably hydrated finish. Light enough
                    to layer without feeling heavy — perfect even in summer.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.3 }}
              className="glass-card lg:col-span-6"
            >
              <div className="glass-card-body p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-navy-700">How to Use</h3>
                <ol className="mt-5 space-y-4">
                  {usageSteps.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-yellow text-xs font-bold tabular-nums text-navy-800">
                        {i + 1}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-navy-500">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
