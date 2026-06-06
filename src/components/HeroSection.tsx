"use client";

import { motion } from "framer-motion";
import VideoPlaceholder from "./VideoPlaceholder";
import { IconLeaf, IconShield, IconDroplet, IconSparkle, IconMicroscope, IconSprout } from "./icons";

const effects = [
  { icon: IconLeaf, title: "Instant Calming", desc: "Rapidly cools and soothes irritated skin" },
  { icon: IconShield, title: "Barrier Repair", desc: "Rebuilds and strengthens damaged skin barrier" },
  { icon: IconDroplet, title: "Deep Hydration", desc: "Replenishes moisture from within" },
  { icon: IconSparkle, title: "Radiant Glow", desc: "Smooth, healthy, even-toned complexion" },
];

const mechanismSteps = [
  {
    step: "01",
    title: "Madagascar Centella Extract",
    desc: "Centella Asiatica grown in the pristine highlands of Madagascar, refined through a single-extraction method.",
  },
  {
    step: "02",
    title: "Deep Skin Absorption",
    desc: "Ultra-light ampoule formula penetrates quickly through the stratum corneum to deliver active ingredients.",
  },
  {
    step: "03",
    title: "Barrier Rebuild & Calm",
    desc: "Madecassoside and Asiaticoside strengthen the skin barrier and suppress inflammatory responses.",
  },
];

const spring = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.1, ...spring },
  }),
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative snap-y-proximity overflow-hidden pt-28 sm:pt-32">
      <div className="section-padding relative pb-8 sm:pb-16">
        <div className="section-container">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
            <motion.div initial="hidden" animate="visible" className="lg:col-span-5 lg:pb-8">
              <motion.span custom={0} variants={fadeUp} className="eyebrow">
                Madagascar Centella
              </motion.span>

              <motion.h1
                custom={1}
                variants={fadeUp}
                className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-navy-700 sm:text-5xl lg:text-6xl"
              >
                Madagascar
                <br />
                Centella{" "}
                <span className="text-gradient-water">Ampoule</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="mt-5 max-w-[65ch] text-base leading-relaxed text-navy-500 sm:text-lg"
              >
                100% single-extracted Centella Asiatica from the Madagascar highlands. A premium
                ampoule that restores your skin&apos;s natural resilience — gentle enough for the
                most sensitive skin.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <a href="#buy" className="btn-primary group">
                  Shop Now
                </a>
                <a href="#about" className="btn-outline">
                  Learn More
                </a>
              </motion.div>
            </motion.div>

            <div className="relative lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.3 }}
                className="relative mx-auto max-w-sm lg:max-w-none"
              >
                <div className="glass-card mx-auto max-w-[280px] sm:max-w-xs lg:max-w-sm">
                  <div className="product-hero-visual relative aspect-[3/4] overflow-hidden rounded-[calc(1.5rem-0.25rem)]">
                    {/* Water ripple layers */}
                    <div className="absolute inset-0 bg-gradient-to-b from-aqua-200/40 via-transparent to-lavender-100/30" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-aqua-300/20 to-transparent" />
                    <div className="water-shimmer absolute inset-0 opacity-20" />

                    {/* Floating bubbles */}
                    <div className="absolute left-6 top-12 h-8 w-8 rounded-full border border-white/60 bg-white/30 backdrop-blur-sm animate-bubble-float" />
                    <div className="absolute right-8 top-24 h-5 w-5 rounded-full border border-white/50 bg-aqua-100/40 animate-float" />
                    <div className="absolute bottom-32 left-10 h-4 w-4 rounded-full bg-lavender-200/50 animate-float" style={{ animationDelay: "2s" }} />

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                      <div className="animate-float">
                        <div className="relative flex h-48 w-20 flex-col items-center justify-end rounded-t-full rounded-b-lg border border-white/70 bg-gradient-to-b from-white/80 to-aqua-100/60 shadow-glass sm:h-56 sm:w-24">
                          <div className="absolute -top-1 left-1/2 h-3 w-10 -translate-x-1/2 rounded-full bg-white/90 shadow-soft" />
                          <div className="mb-auto mt-8 h-3 w-8 rounded-sm bg-centella-400/60" />
                          <div className="mb-4 px-2 text-center">
                            <p className="text-[8px] font-extrabold tracking-widest text-navy-600 sm:text-[10px]">
                              SKIN1004
                            </p>
                            <p className="mt-0.5 text-[6px] font-semibold text-aqua-600 sm:text-[8px]">MADAGASCAR</p>
                            <p className="text-[6px] font-semibold text-aqua-600 sm:text-[8px]">CENTELLA</p>
                          </div>
                          {/* Water line inside bottle */}
                          <div className="absolute bottom-8 left-2 right-2 h-24 rounded-b-lg bg-gradient-to-t from-aqua-300/30 to-transparent" />
                        </div>
                      </div>
                      <p className="text-xs text-navy-400">Product image placeholder</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-2 glass-card sm:-bottom-4 sm:-right-6">
                  <div className="rounded-[calc(1.5rem-0.25rem)] bg-white/60 px-4 py-3 backdrop-blur-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-navy-400">Purity</p>
                    <p className="font-display text-2xl font-extrabold tabular-nums text-centella-500">100%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.45 }}
                className="mt-8 lg:absolute lg:-bottom-12 lg:left-8 lg:mt-0 lg:w-[85%]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px flex-1 bg-aqua-200" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-aqua-500">
                    Brand Film
                  </span>
                  <span className="h-px flex-1 bg-aqua-200" />
                </div>
                <VideoPlaceholder
                  title="SKIN1004 Brand Film"
                  subtitle="The Journey of Madagascar Centella"
                  videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding relative py-16 sm:py-24 lg:py-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={spring}
            className="lg:max-w-xl"
          >
            <span className="eyebrow">How It Works</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-snug text-navy-700 sm:text-4xl">
              Product Action
              <br className="sm:hidden" /> Mechanism
            </h2>
            <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-navy-500">
              Nature&apos;s centella power, scientifically refined to awaken your skin&apos;s own
              ability to heal and recover.
            </p>
          </motion.div>

          <div className="section-full-bleed mt-10 lg:hidden">
            <div className="flex snap-x-mandatory gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
              {mechanismSteps.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, ...spring }}
                  className="glass-card w-[85vw] max-w-[320px] shrink-0 snap-center"
                >
                  <div className="glass-card-body p-6">
                    <span className="font-display text-3xl font-light text-aqua-300">{item.step}</span>
                    <h3 className="mt-3 text-base font-bold text-navy-700">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10 hidden gap-4 lg:grid lg:grid-cols-12">
            {mechanismSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, ...spring }}
                className={`glass-card ${i === 1 ? "lg:col-span-5 lg:row-span-2" : "lg:col-span-4"} ${i === 0 ? "lg:translate-y-8" : ""} ${i === 2 ? "lg:-translate-y-4" : ""}`}
              >
                <div className={`glass-card-body ${i === 1 ? "p-10" : "p-8"}`}>
                  <span className="font-display text-4xl font-light text-aqua-300">{item.step}</span>
                  <h3 className="mt-4 text-lg font-bold text-navy-700">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="mt-12 glass-card"
          >
            <div className="glass-card-body p-6 sm:p-10">
              <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-16">
                {[
                  { label: "Skin Surface", icon: IconDroplet },
                  { label: "Stratum Corneum", icon: IconMicroscope },
                  { label: "Calm & Strengthen", icon: IconSprout },
                ].map(({ label, icon: Icon }, i) => (
                  <div key={label} className="flex items-center gap-4 sm:flex-col sm:gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-aqua-200 bg-aqua-50 sm:h-20 sm:w-20">
                      <Icon className="h-6 w-6 text-aqua-500 sm:h-7 sm:w-7" />
                    </div>
                    <p className="text-xs font-semibold text-navy-500 sm:text-center">{label}</p>
                    {i < 2 && (
                      <svg className="hidden h-4 w-8 text-aqua-300 sm:block" fill="none" viewBox="0 0 32 16">
                        <path
                          d="M0 8h28M24 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-xs text-navy-400">Action mechanism diagram placeholder</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-padding relative pb-20 sm:pb-28">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="text-center"
          >
            <span className="eyebrow">Key Benefits</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-700 sm:text-4xl">
              Visible Results
            </h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {effects.map((effect, i) => (
              <motion.div
                key={effect.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ...spring }}
                className={`glass-card ${i === 0 ? "sm:col-span-2 sm:row-span-1" : ""}`}
              >
                <div className={`glass-card-body text-center ${i === 0 ? "p-8" : "p-5 sm:p-6"}`}>
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-aqua-50 text-aqua-500">
                    <effect.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-navy-700">{effect.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-navy-500">{effect.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="mt-12"
          >
            <div className="mx-auto max-w-[280px] sm:max-w-2xl">
              <div className="sm:hidden">
                <VideoPlaceholder
                  title="Results Promo Video"
                  subtitle="Before & After · Real User Reviews"
                  aspectRatio="reel"
                  videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                />
              </div>
              <div className="hidden sm:block">
                <VideoPlaceholder
                  title="Results Promo Video"
                  subtitle="Before & After · Real User Reviews"
                  aspectRatio="video"
                  videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                />
              </div>
              <p className="mt-3 text-center text-xs text-navy-400 sm:hidden">
                Vertical video · Mobile optimized
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
