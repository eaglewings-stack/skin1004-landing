"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoPlaceholder from "./VideoPlaceholder";
import { IconChevronLeft, IconChevronRight, IconPlay } from "./icons";

interface ViralVideo {
  id: string;
  title: string;
  creator: string;
  platform: "TikTok" | "Reels" | "YouTube";
  views: string;
  videoUrl?: string;
}

const viralVideos: ViralVideo[] = [
  {
    id: "1",
    title: "센텔라 앰플 2주 사용 후기",
    creator: "@skincare_diary",
    platform: "TikTok",
    views: "1.2M",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "민감피부 구원템 찾았다",
    creator: "@beauty_korea",
    platform: "Reels",
    views: "890K",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "올리브영 1위 앰플 솔직리뷰",
    creator: "@olive_review",
    platform: "TikTok",
    views: "2.4M",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "속건조 완전 해결",
    creator: "@dry_skin_saver",
    platform: "Reels",
    views: "560K",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "트러블 진정 3일 챌린지",
    creator: "@clear_skin_journey",
    platform: "TikTok",
    views: "1.8M",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const platformStyles: Record<string, string> = {
  TikTok: "bg-white/10 text-white border border-white/10",
  Reels: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-300 border border-pink-500/20",
  YouTube: "bg-red-500/15 text-red-300 border border-red-500/20",
};

const spring = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

export default function ViralCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const goTo = useCallback(
    (index: number, dir?: number) => {
      const newIndex = ((index % viralVideos.length) + viralVideos.length) % viralVideos.length;
      setDirection(dir ?? (index > activeIndex ? 1 : -1));
      setActiveIndex(newIndex);
    },
    [activeIndex]
  );

  const handlePrev = () => goTo(activeIndex - 1, -1);
  const handleNext = () => goTo(activeIndex + 1, 1);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollToActive = () => {
      const card = el.children[activeIndex] as HTMLElement | undefined;
      if (card) {
        card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    };
    scrollToActive();
  }, [activeIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0, scale: 0.96 }),
  };

  return (
    <section id="viral" className="relative overflow-hidden border-t border-white/5 py-20 sm:py-32">
      <div className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="break-keep text-center"
          >
            <span className="eyebrow">Social Buzz</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">SNS 바이럴 영상</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">
              TikTok · Instagram Reels에서 화제가 된 실사용 리뷰를 직접 확인하세요.
            </p>
          </motion.div>

          {/* Main featured reel — 9:16 focus, swipe on mobile */}
          <div
            className="relative mx-auto mt-12 max-w-[300px] sm:max-w-[340px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={spring}
              >
                <VideoPlaceholder
                  title={viralVideos[activeIndex].title}
                  subtitle={`${viralVideos[activeIndex].creator} · ${viralVideos[activeIndex].views} views`}
                  aspectRatio="reel"
                  videoUrl={viralVideos[activeIndex].videoUrl}
                />
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div className="min-w-0 break-keep">
                    <p className="text-sm font-semibold text-white">{viralVideos[activeIndex].title}</p>
                    <p className="mt-0.5 text-xs text-zinc-500">{viralVideos[activeIndex].creator}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-bold ${platformStyles[viralVideos[activeIndex].platform]}`}
                  >
                    {viralVideos[activeIndex].platform}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              onClick={handlePrev}
              className="absolute top-[38%] -left-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-void/80 shadow-ambient backdrop-blur-sm transition-all duration-500 ease-spring hover:scale-[1.05] hover:bg-white/10 active:scale-[0.95] sm:-left-16 sm:h-12 sm:w-12"
              aria-label="이전 영상"
            >
              <IconChevronLeft className="text-zinc-300" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute top-[38%] -right-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-void/80 shadow-ambient backdrop-blur-sm transition-all duration-500 ease-spring hover:scale-[1.05] hover:bg-white/10 active:scale-[0.95] sm:-right-16 sm:h-12 sm:w-12"
              aria-label="다음 영상"
            >
              <IconChevronRight className="text-zinc-300" />
            </button>
          </div>

          <p className="mt-3 text-center text-xs text-zinc-600 md:hidden">좌우 스와이프로 영상 탐색</p>

          {/* Dot indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {viralVideos.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
                className={`h-1.5 rounded-full transition-all duration-500 ease-spring ${
                  i === activeIndex ? "w-8 bg-centella-500" : "w-1.5 bg-white/20 hover:bg-centella-500/50"
                }`}
                aria-label={`영상 ${i + 1}`}
              />
            ))}
          </div>

          {/* Horizontal snap scroll strip */}
          <div className="section-full-bleed mt-10">
            <div
              ref={scrollRef}
              className="flex snap-x-mandatory gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide sm:justify-center sm:gap-4"
            >
              {viralVideos.map((video, i) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
                  className={`reel-card w-[100px] transition-all duration-500 ease-spring sm:w-[120px] ${
                    i === activeIndex
                      ? "ring-2 ring-centella-500 ring-offset-2 ring-offset-void scale-105"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-centella-900/30 to-surface-raised p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10">
                      <IconPlay className="ml-0.5 h-3 w-3 text-centella-400" />
                    </div>
                    <p className="mt-2 line-clamp-2 break-keep text-center text-[9px] font-medium text-zinc-400">
                      {video.title}
                    </p>
                    <span
                      className={`mt-1.5 rounded-full px-2 py-0.5 text-[8px] font-bold ${platformStyles[video.platform]}`}
                    >
                      {video.platform}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-zinc-600">
            * 실제 TikTok/Reels 영상 URL 또는 임베드로 교체 필요
          </p>
        </div>
      </div>
    </section>
  );
}
