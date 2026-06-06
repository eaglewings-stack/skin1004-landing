"use client";

import { motion } from "framer-motion";
import VideoPlaceholder from "./VideoPlaceholder";
import { IconLeaf, IconShield, IconDroplet, IconSparkle, IconMicroscope, IconSprout } from "./icons";

const effects = [
  { icon: IconLeaf, title: "즉각 진정", desc: "자극받은 피부를 빠르게 쿨링 & 진정" },
  { icon: IconShield, title: "장벽 강화", desc: "손상된 피부 장벽을 탄탄하게 회복" },
  { icon: IconDroplet, title: "깊은 보습", desc: "속부터 채워지는 수분감" },
  { icon: IconSparkle, title: "피부결 개선", desc: "매끄럽고 건강한 피부 톤" },
];

const mechanismSteps = [
  {
    step: "01",
    title: "마다가스카르 센텔라 추출",
    desc: "마다가스카르 고원의 깨끗한 환경에서 자란 센텔라 아시아티카를 단일 추출 공법으로 정제합니다.",
  },
  {
    step: "02",
    title: "피부 깊숙이 흡수",
    desc: "초저분자 앰플 포뮬러가 피부 각질층까지 빠르게 침투하여 유효 성분을 전달합니다.",
  },
  {
    step: "03",
    title: "장벽 재건 & 진정",
    desc: "마데카소사이드와 아시아티코사이드가 피부 장벽을 강화하고 염증 반응을 억제합니다.",
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
      <div className="mesh-bg" aria-hidden="true" />

      {/* Editorial split hero — mobile: vertical stack, desktop: asymmetric */}
      <div className="section-padding relative pb-8 sm:pb-16">
        <div className="section-container">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Left: headline — editorial split */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="break-keep lg:col-span-5 lg:pb-8"
            >
              <motion.span custom={0} variants={fadeUp} className="eyebrow">
                Madagascar Centella
              </motion.span>

              <motion.h1
                custom={1}
                variants={fadeUp}
                className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                마다가스카르
                <br />
                센텔라{" "}
                <span className="text-gradient-centella">앰플</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="mt-5 max-w-[65ch] text-base leading-relaxed text-zinc-400 sm:text-lg"
              >
                마다가스카르 고원의 순수 센텔라 아시아티카 100% 단일 추출.
                민감하고 지친 피부에 본연의 힘을 되찾아주는 프리미엄 앰플.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <a href="#buy" className="btn-primary group">
                  지금 구매하기
                </a>
                <a href="#details" className="btn-outline">
                  상세 정보
                </a>
              </motion.div>
            </motion.div>

            {/* Right: product + CF — overlapping z-axis cascade on desktop */}
            <div className="relative lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.3 }}
                className="relative mx-auto max-w-sm lg:max-w-none"
              >
                {/* Product visual */}
                <div className="double-bezel mx-auto max-w-[280px] sm:max-w-xs lg:max-w-sm">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[calc(2rem-0.375rem)] bg-gradient-to-b from-centella-900/30 to-surface-raised">
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                      <div className="animate-float">
                        <div className="flex h-48 w-20 flex-col items-center justify-end rounded-t-full rounded-b-lg border border-white/10 bg-gradient-to-b from-white/10 to-centella-900/20 shadow-ambient sm:h-56 sm:w-24">
                          <div className="mb-auto mt-6 h-3 w-8 rounded-sm bg-centella-500/40" />
                          <div className="mb-4 px-2 text-center">
                            <p className="text-[8px] font-bold tracking-widest text-centella-300 sm:text-[10px]">
                              SKIN1004
                            </p>
                            <p className="mt-0.5 text-[6px] text-centella-500 sm:text-[8px]">MADAGASCAR</p>
                            <p className="text-[6px] text-centella-500 sm:text-[8px]">CENTELLA</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-zinc-600">제품 이미지 Placeholder</p>
                    </div>
                  </div>
                </div>

                {/* Floating stat badge */}
                <div className="absolute -bottom-3 -right-2 double-bezel sm:-bottom-4 sm:-right-6">
                  <div className="rounded-[calc(2rem-0.375rem)] bg-surface-raised px-4 py-3">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">순도</p>
                    <p className="font-display text-2xl font-bold tabular-nums text-centella-400">100%</p>
                  </div>
                </div>
              </motion.div>

              {/* CF video — offset overlap on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.45 }}
                className="mt-8 lg:absolute lg:-bottom-12 lg:left-8 lg:mt-0 lg:w-[85%]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-centella-500">
                    Brand Film
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <VideoPlaceholder
                  title="SKIN1004 브랜드 CF"
                  subtitle="마다가스카르 센텔라의 여정"
                  videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mechanism — horizontal scroll on mobile, bento on desktop */}
      <div className="section-padding relative py-16 sm:py-24 lg:py-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={spring}
            className="break-keep lg:max-w-xl"
          >
            <span className="eyebrow">How It Works</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-snug text-white sm:text-4xl">
              제품 작용
              <br className="sm:hidden" /> 메커니즘
            </h2>
            <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-zinc-500">
              자연이 만든 센텔라의 힘을 과학적으로 정제하여, 피부가 스스로 회복하는 힘을 깨웁니다.
            </p>
          </motion.div>

          {/* Mobile: horizontal snap scroll */}
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
                    <span className="font-display text-3xl font-light text-centella-700">{item.step}</span>
                    <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 break-keep text-sm leading-relaxed text-zinc-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: bento-style staggered grid */}
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
                  <span className="font-display text-4xl font-light text-centella-700">{item.step}</span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 break-keep text-sm leading-relaxed text-zinc-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mechanism diagram — full bleed on mobile */}
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
                  { label: "피부 표면", icon: IconDroplet },
                  { label: "각질층 침투", icon: IconMicroscope },
                  { label: "진정 & 장벽 강화", icon: IconSprout },
                ].map(({ label, icon: Icon }, i) => (
                  <div key={label} className="flex items-center gap-4 sm:flex-col sm:gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-centella-500/20 bg-centella-500/10 sm:h-20 sm:w-20">
                      <Icon className="h-6 w-6 text-centella-400 sm:h-7 sm:w-7" />
                    </div>
                    <p className="break-keep text-xs font-medium text-zinc-400 sm:text-center">{label}</p>
                    {i < 2 && (
                      <svg className="hidden h-4 w-8 text-centella-700 sm:block" fill="none" viewBox="0 0 32 16">
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
              <p className="mt-8 text-center text-xs text-zinc-600">작용 메커니즘 다이어그램 Placeholder</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Effects — bento grid */}
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
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">눈에 보이는 효과</h2>
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
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-centella-500/10 text-centella-400">
                    <effect.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 break-keep text-sm font-semibold text-white">{effect.title}</h3>
                  <p className="mt-1.5 break-keep text-xs leading-relaxed text-zinc-500">{effect.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Effect promo video — 9:16 on mobile, 16:9 on desktop */}
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
                  title="제품 효과 프로모션 영상"
                  subtitle="Before & After · 실사용 후기"
                  aspectRatio="reel"
                  videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                />
              </div>
              <div className="hidden sm:block">
                <VideoPlaceholder
                  title="제품 효과 프로모션 영상"
                  subtitle="Before & After · 실사용 후기"
                  aspectRatio="video"
                  videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                />
              </div>
              <p className="mt-3 text-center text-xs text-zinc-600 sm:hidden">
                세로 영상 · 모바일 최적화
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
