"use client";

import { motion } from "framer-motion";
import { IconArrowRight, IconCheck } from "./icons";

const trustItems = ["Official Authentic Product", "Free Shipping over $30", "100% Refund Guarantee"];

export default function BuySection() {
  return (
    <section id="buy" className="section-padding pb-24 sm:pb-32 md:pb-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-5xl border border-white/70 shadow-glass-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-aqua-100 via-lavender-50 to-blush-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(186,230,253,0.5),transparent_60%)]" />
          <div className="absolute -right-20 -top-20 h-60 w-60 animate-pulse-soft rounded-full bg-aqua-200/40 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 animate-bubble-float rounded-full bg-lavender-200/30 blur-2xl" />

          <div className="relative px-6 py-16 text-center sm:px-16 sm:py-24">
            <span className="eyebrow">Madagascar Centella Ampoule</span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-snug text-navy-700 sm:text-5xl">
              Awaken Your Skin&apos;s
              <br />
              Natural Strength
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-navy-500 sm:text-base">
              Experience the pure energy of Madagascar Centella. The easiest way to start your
              most effective skincare routine — today.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <button
                type="button"
                className="group inline-flex min-h-[52px] items-center gap-3 rounded-full bg-accent-yellow px-10 py-4 text-base font-bold text-navy-800 shadow-glow-yellow transition-all duration-500 ease-spring hover:scale-[1.02] hover:bg-accent-yellow-dark hover:text-white active:scale-[0.98]"
                onClick={() => alert("Payment feature coming soon. PG integration will be enabled shortly.")}
              >
                Shop Now
                <span className="btn-icon-wrap">
                  <IconArrowRight />
                </span>
              </button>
              <span className="text-xs text-navy-400">Payment gateway integration coming soon</span>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              {trustItems.map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-xs text-navy-500">
                  <IconCheck className="h-3.5 w-3.5 text-centella-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
