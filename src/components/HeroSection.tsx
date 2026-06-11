"use client";

import { motion } from "framer-motion";
import { IconLeaf, IconShield, IconDroplet, IconWind } from "./icons";
import BrandFilmVideo from "./BrandFilmVideo";
import LandingImage from "./LandingImage";
import { LANDING_IMAGES } from "@/lib/landingImages";

const highlights = [
  { icon: IconWind, title: "24-Hour Scent", desc: "Lingering lily musk white tea" },
  { icon: IconDroplet, title: "Gel Lather", desc: "Rich foam, moist cleanse" },
  { icon: IconLeaf, title: "Tea Therapy", desc: "Green tea micro-particles" },
  { icon: IconShield, title: "Barrier Care", desc: "Ceramide NP moisture lock" },
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
    <section id="hero" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(165deg, #FAF5FF 0%, #F3E8FF 25%, #E0F4FE 55%, #ECFDF5 85%, #FAFBFD 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-mesh-pastel opacity-60" aria-hidden="true" />

      <div className="section-padding relative z-10 pb-16 pt-24 sm:pb-24 sm:pt-28">
        <div className="section-container">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 lg:max-w-4xl lg:gap-12">
            <motion.div
              initial="hidden"
              animate="visible"
              className="order-2 w-full text-center lg:order-1"
            >
              <motion.div custom={0} variants={fadeUp} className="flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center rounded-full border border-lavender-200 bg-lavender-50/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-lavender-400">
                  TEABLESS
                </span>
                <span className="inline-flex items-center rounded-full border border-centella-200 bg-centella-50/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-centella-600">
                  Gel Texture
                </span>
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                className="mt-5 font-editorial text-4xl font-medium leading-[1.08] tracking-tight text-navy-700 sm:text-5xl lg:text-[3.25rem]"
              >
                Lily Musk
                <br />
                <span className="italic text-lavender-400">White Tea</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="mx-auto mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-navy-400"
              >
                Perfume Body Wash · 500g
              </motion.p>

              <motion.p
                custom={3}
                variants={fadeUp}
                className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-navy-500 sm:text-base"
              >
                A transparent, calm floral musk — soft and clean as a sip of white tea. Inspired by young
                leaves veiled in silvery down, this gel wash wraps skin in delicate scent and gentle care.
              </motion.p>

              <motion.div
                custom={4}
                variants={fadeUp}
                className="mt-7 flex flex-wrap justify-center gap-3"
              >
                <a href="#buy" className="btn-primary group">
                  Shop Now
                </a>
                <a href="#about" className="btn-outline">
                  Discover the Scent
                </a>
              </motion.div>
            </motion.div>

            <div className="order-1 flex w-full flex-col items-center gap-6 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...spring, delay: 0.15 }}
                className="relative mx-auto w-full max-w-md lg:max-w-lg"
              >
                <LandingImage
                  slug={LANDING_IMAGES.heroMain}
                  alt="TEABLESS Lily Musk White Tea Perfume Body Wash"
                  priority
                  aspect="4/5"
                  rounded="rounded-4xl"
                  sizes="(max-width: 1024px) 100vw, 28rem"
                  className="shadow-glass-lg"
                />

                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...spring, delay: 0.45 }}
                  className="absolute -right-2 top-6 sm:right-4"
                >
                  <div className="rounded-2xl border border-white/70 bg-white/50 px-4 py-3 backdrop-blur-xl shadow-glass">
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-lavender-400">
                      Tested
                    </p>
                    <p className="font-display text-lg font-extrabold text-navy-700 sm:text-xl">24 Hours</p>
                    <p className="text-[10px] text-navy-400">Fragrance longevity</p>
                  </div>
                </motion.div>
              </motion.div>

              <BrandFilmVideo className="w-full max-w-md lg:max-w-2xl" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.4 }}
            className="mt-12 sm:mt-14"
          >
            <LandingImage
              slug={LANDING_IMAGES.heroLifestyle}
              alt="TEABLESS Lily Musk White Tea lifestyle — calm tea-time shower ritual"
              aspect="4/5"
              rounded="rounded-4xl"
              sizes="100vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.5 }}
            className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4"
          >
            {highlights.map((item, i) => (
              <div key={item.title} className={`glass-card ${i === 0 ? "sm:col-span-1" : ""}`}>
                <div className="glass-card-body p-5 text-center sm:p-6">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-lavender-50 text-lavender-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-navy-700">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-navy-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
