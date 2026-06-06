"use client";

import { motion } from "framer-motion";
import { IconArrowRight, IconCheck } from "./icons";

const trustItems = ["공식 정품", "무료 배송 (3만원 이상)", "100% 환불 보장"];

export default function BuySection() {
  return (
    <section id="buy" className="section-padding pb-24 sm:pb-32 md:pb-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-centella-500/20"
        >
          {/* Full-bleed CTA with mesh gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-centella-900/40 via-void to-void-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_60%)]" />
          <div className="absolute -right-20 -top-20 h-60 w-60 animate-pulse-glow rounded-full bg-centella-500/10 blur-3xl" />

          <div className="relative px-6 py-16 text-center sm:px-16 sm:py-24">
            <span className="eyebrow">Madagascar Centella Ampoule</span>
            <h2 className="mt-6 break-keep font-display text-3xl font-bold leading-snug text-white sm:text-5xl">
              피부 본연의 힘을
              <br />
              깨우세요
            </h2>
            <p className="mx-auto mt-5 max-w-md break-keep text-sm leading-relaxed text-zinc-400 sm:text-base">
              마다가스카르 센텔라의 순수한 에너지를 경험하세요. 지금 바로 시작하는 가장 쉬운
              스킨케어.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <button
                type="button"
                className="group inline-flex min-h-[52px] items-center gap-3 rounded-full bg-centella-500 px-10 py-4 text-base font-semibold text-void shadow-glow-centella transition-all duration-500 ease-spring hover:scale-[1.02] hover:bg-centella-400 active:scale-[0.98]"
                onClick={() => alert("결제 기능은 준비 중입니다. PG 연동 후 활성화됩니다.")}
              >
                구매하기
                <span className="btn-icon-wrap bg-void/20">
                  <IconArrowRight />
                </span>
              </button>
              <span className="text-xs text-zinc-600">PG 결제 연동 예정</span>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              {trustItems.map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-xs text-zinc-500">
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
