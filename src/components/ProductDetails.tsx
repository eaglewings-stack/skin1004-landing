"use client";

import { motion } from "framer-motion";
import { IconCheck } from "./icons";

const ingredients = [
  { name: "센텔라 아시아티카 추출물", percent: "100%", role: "핵심 활성 성분 · 진정 & 장벽 강화" },
  { name: "마데카소사이드", percent: "함유", role: "항염 · 상처 치유 촉진" },
  { name: "아시아티코사이드", percent: "함유", role: "콜라겐 합성 · 피부 탄력" },
  { name: "마데카식산", percent: "함유", role: "피부 재생 · 항산화" },
];

const skinTypes = ["민감성", "건성", "지성", "복합성", "트러블", "아토피 경향"];

const usageSteps = [
  "세안 후 토너로 피부 결을 정돈합니다.",
  "적당량(2~3방울)을 덜어 얼굴 전체에 부드럽게 펴 발라줍니다.",
  "손바닥으로 가볍게 두드려 흡수시킵니다.",
  "건조한 부위에는 한 번 더 레이어링합니다.",
  "아침·저녁 스킨케어 루틴에 매일 사용하세요.",
];

const textureInfo = [
  { label: "제형", value: "수분감 있는 에센스 타입 앰플" },
  { label: "색상", value: "투명에 가까운 연한 녹색" },
  { label: "향", value: "무향 (Fragrance Free)" },
  { label: "흡수력", value: "빠른 흡수, 끈적임 없음" },
  { label: "용량", value: "100ml / 55ml" },
  { label: "제조국", value: "대한민국" },
];

const benefits = [
  "즉각적인 피부 진정 및 붉은기 완화",
  "손상된 피부 장벽 강화 및 수분 보호막 형성",
  "트러블 케어 및 피부 컨디션 안정화",
  "피부 톤 균일화 및 건강한 광채 부여",
  "외부 자극(미세먼지, UV)으로부터 피부 보호",
  "속건조 개선 및 장시간 수분 유지",
];

const spring = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

export default function ProductDetails() {
  return (
    <section id="details" className="relative border-t border-white/5 py-20 sm:py-32 lg:py-40">
      <div className="mesh-bg opacity-50" aria-hidden="true" />

      <div className="section-padding relative">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="break-keep lg:max-w-2xl"
          >
            <span className="eyebrow">Product Details</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-snug text-white sm:text-5xl">
              제품 상세 정보
            </h2>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-zinc-500">
              마다가스카르 센텔라 앰플 하나로 완성하는 미니멀 스킨케어.
              불필요한 성분은 덜고, 피부에 필요한 것만 담았습니다.
            </p>
          </motion.div>

          {/* Bento grid layout — different from hero */}
          <div className="mt-14 grid gap-4 sm:gap-6 lg:grid-cols-12">
            {/* Brand story — large bento cell */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="glass-card lg:col-span-7"
            >
              <div className="glass-card-body p-6 sm:p-10">
                <h3 className="font-display text-xl font-semibold text-white">브랜드 스토리</h3>
                <div className="mt-5 space-y-4 break-keep text-sm leading-relaxed text-zinc-400">
                  <p>
                    SKIN1004는{" "}
                    <strong className="font-medium text-zinc-200">마다가스카르 센텔라</strong>에 집착하는
                    K-뷰티 브랜드입니다. 마다가스카르 고원의 깨끗한 토양과 기후에서 자란 센텔라
                    아시아티카는 일반 센텔라보다 7배 높은 활성 성분을 함유하고 있습니다.
                  </p>
                  <p>
                    단일 추출 공법(Single Extraction)으로 정제된 순수 센텔라만을 담아, 민감하고
                    예민한 피부도 안심하고 사용할 수 있는{" "}
                    <strong className="font-medium text-zinc-200">저자극 고효능 앰플</strong>을
                    완성했습니다.
                  </p>
                  <p>
                    화해 20주년 어워드 수상, 올리브영 1위 앰플 등 수많은 고객과 전문가의 선택을
                    받은 SKIN1004의 대표 제품입니다.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skin types — compact bento */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              className="glass-card lg:col-span-5"
            >
              <div className="glass-card-body p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-white">피부 타입 적합성</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skinTypes.map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-centella-500/20 bg-centella-500/10 px-3 py-1.5 text-xs font-medium text-centella-300"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs text-zinc-600">모든 피부 타입에 적합 · 임상 테스트 완료</p>
              </div>
            </motion.div>

            {/* Benefits — zig-zag list */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.15 }}
              className="glass-card lg:col-span-5 lg:translate-y-4"
            >
              <div className="glass-card-body p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-white">주요 효능</h3>
                <ul className="mt-5 space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 break-keep text-sm text-zinc-400">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-centella-500/15 text-centella-400">
                        <IconCheck className="h-3 w-3" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.2 }}
              className="glass-card lg:col-span-7 lg:-translate-y-4"
            >
              <div className="glass-card-body p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-white">핵심 성분</h3>
                <div className="mt-5 space-y-4">
                  {ingredients.map((ing) => (
                    <div
                      key={ing.name}
                      className="flex items-start justify-between gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="break-keep">
                        <p className="text-sm font-medium text-zinc-200">{ing.name}</p>
                        <p className="mt-0.5 text-xs text-zinc-500">{ing.role}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-centella-500/10 px-3 py-1 text-xs font-semibold tabular-nums text-centella-400">
                        {ing.percent}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 break-keep text-xs leading-relaxed text-zinc-600">
                  * 전성분: 정제수, 부틸렌글라이콜, 센텔라 아시아티카 추출물(100%), 1,2-헥산다이올,
                  하이드록시아세토페논, 소듐하이알루로네이트 등
                </p>
              </div>
            </motion.div>

            {/* Texture — horizontal scroll on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.25 }}
              className="glass-card lg:col-span-6"
            >
              <div className="glass-card-body p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-white">제형 & 텍스처</h3>
                <div className="section-full-bleed mt-5 lg:mx-0">
                  <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide lg:grid lg:grid-cols-2 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
                    {textureInfo.map((item) => (
                      <div
                        key={item.label}
                        className="min-w-[140px] shrink-0 rounded-xl border border-white/5 bg-white/[0.02] p-4 lg:min-w-0"
                      >
                        <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-600">
                          {item.label}
                        </p>
                        <p className="mt-1 break-keep text-sm text-zinc-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 rounded-xl border border-centella-500/10 bg-centella-500/5 p-4">
                  <p className="break-keep text-xs leading-relaxed text-zinc-400">
                    물처럼 가볍게 스며들면서도 촉촉한 마무리감을 남기는{" "}
                    <strong className="text-zinc-200">워터리 에센스 제형</strong>입니다. 레이어링해도
                    무겁지 않아 여름에도 부담 없이 사용 가능합니다.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Usage steps */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.3 }}
              className="glass-card lg:col-span-6"
            >
              <div className="glass-card-body p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-white">사용 방법</h3>
                <ol className="mt-5 space-y-4">
                  {usageSteps.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-centella-500 text-xs font-bold tabular-nums text-void">
                        {i + 1}
                      </span>
                      <p className="break-keep pt-1 text-sm leading-relaxed text-zinc-400">{step}</p>
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
