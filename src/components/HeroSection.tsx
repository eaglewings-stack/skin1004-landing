"use client";

import { motion } from "framer-motion";
import VideoPlaceholder from "./VideoPlaceholder";
import SkyHeroBackground from "./SkyHeroBackground";
import ExplodedAmpoule from "./ExplodedAmpoule";
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
    <section id="hero" className="relative snap-y-proximity overflow-hidden">
      {/* Sky hero with exploded product showcase */}
      <div className="relative isolate min-h-[100dvh] overflow-hidden pt-24 sm:pt-28">
        <SkyHeroBackground />
        {/* Fade sky into page pastel background below hero */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-b from-transparent via-white/40 to-surface sm:h-40"
          aria-hidden="true"
        />

        <div className="section-padding relative z-10 pb-16 pt-4 sm:pb-24">
          <div className="section-container">
            {/* Orange benefit badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...spring, delay: 0.1 }}
              className="mb-6 flex justify-center sm:mb-8"
            >
              <span className="inline-flex items-center rounded-full bg-accent-orange px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-glow-orange sm:text-xs">
                98% Pure Centella
              </span>
            </motion.div>

            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6">
              {/* Copy column */}
              <motion.div
                initial="hidden"
                animate="visible"
                className="text-center lg:col-span-4 lg:text-left"
              >
                <motion.span
                  custom={0}
                  variants={fadeUp}
                  className="inline-flex items-center rounded-full border border-white/50 bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm"
                >
                  Madagascar Centella
                </motion.span>

                <motion.h1
                  custom={1}
                  variants={fadeUp}
                  className="mt-5 font-editorial text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
                >
                  Madagascar
                  <br />
                  <span className="italic">Centella Ampoule</span>
                </motion.h1>

                <motion.p
                  custom={2}
                  variants={fadeUp}
                  className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:text-base lg:mx-0"
                >
                  Single-extracted Centella Asiatica from the Madagascar highlands.
                  Scientifically deconstructed — every layer reveals pure, barrier-repairing power.
                </motion.p>

                <motion.div
                  custom={3}
                  variants={fadeUp}
                  className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start"
                >
                  <a
                    href="#buy"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wide text-sky-700 shadow-soft transition-all duration-500 ease-spring hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Shop Now
                  </a>
                  <a
                    href="#about"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/60 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-spring hover:bg-white/25 active:scale-[0.98]"
                  >
                    Learn More
                  </a>
                </motion.div>
              </motion.div>

              {/* Exploded product showcase */}
              <div className="relative lg:col-span-8">
                <ExplodedAmpoule />

                {/* Barrier repair floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: 0.5 }}
                  className="absolute -right-1 top-4 sm:right-4 lg:-right-2 lg:top-8"
                >
                  <div className="rounded-2xl border border-white/60 bg-white/30 px-4 py-3 backdrop-blur-xl shadow-glass">
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-white/70">
                      Key Benefit
                    </p>
                    <p className="font-display text-lg font-extrabold text-white sm:text-xl">
                      Barrier Repair
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Brand film — below showcase */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.55 }}
              className="mx-auto mt-12 max-w-2xl lg:mt-16"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px flex-1 bg-white/30" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">
                  Brand Film
                </span>
                <span className="h-px flex-1 bg-white/30" />
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/40 shadow-glass-lg">
                <VideoPlaceholder
                  title="SKIN1004 Brand Film"
                  subtitle="The Journey of Madagascar Centella"
                  videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                />
              </div>
            </motion.div>
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
