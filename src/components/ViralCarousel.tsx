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
    title: "This Body Wash Smells Like a Spa",
    creator: "@tea_ritual_beauty",
    platform: "TikTok",
    views: "1.2M",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "24hr Scent Test — TEABLESS",
    creator: "@scent_lover_kr",
    platform: "Reels",
    views: "890K",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Lily Musk White Tea Honest Review",
    creator: "@kbeauty_shower",
    platform: "TikTok",
    views: "2.4M",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Sensitive Skin Approved Body Wash",
    creator: "@gentle_glow",
    platform: "Reels",
    views: "560K",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "My Shower Smells Like White Tea",
    creator: "@daily_tea_time",
    platform: "TikTok",
    views: "1.8M",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const platformStyles: Record<string, string> = {
  TikTok: "bg-navy-700/10 text-navy-700 border border-navy-200",
  Reels: "bg-gradient-to-r from-lavender-100 to-blush-100 text-lavender-600 border border-lavender-200",
  YouTube: "bg-red-50 text-red-500 border border-red-200",
};

const spring = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

export default function ViralCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const isInitialScroll = useRef(true);

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

    const card = el.children[activeIndex] as HTMLElement | undefined;
    if (!card) return;

    const targetLeft = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2;
    el.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: isInitialScroll.current ? "auto" : "smooth",
    });
    isInitialScroll.current = false;
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
    <section id="videos" className="relative overflow-hidden border-t border-aqua-100/60 py-20 sm:py-32">
      <div className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="eyebrow">Social Buzz</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-700 sm:text-5xl">
              Viral Review Videos
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy-500">
              Real user reviews trending on TikTok and Instagram Reels — see the results for yourself.
            </p>
          </motion.div>

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
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-navy-700">{viralVideos[activeIndex].title}</p>
                    <p className="mt-0.5 text-xs text-navy-400">{viralVideos[activeIndex].creator}</p>
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
              className="absolute top-[38%] -left-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/80 shadow-glass backdrop-blur-sm transition-all duration-500 ease-spring hover:scale-[1.05] hover:bg-aqua-50 active:scale-[0.95] sm:-left-16 sm:h-12 sm:w-12"
              aria-label="Previous video"
            >
              <IconChevronLeft className="text-navy-600" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute top-[38%] -right-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/80 shadow-glass backdrop-blur-sm transition-all duration-500 ease-spring hover:scale-[1.05] hover:bg-aqua-50 active:scale-[0.95] sm:-right-16 sm:h-12 sm:w-12"
              aria-label="Next video"
            >
              <IconChevronRight className="text-navy-600" />
            </button>
          </div>

          <p className="mt-3 text-center text-xs text-navy-400 md:hidden">Swipe left or right to browse videos</p>

          <div className="mt-6 flex justify-center gap-2">
            {viralVideos.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
                className={`h-1.5 rounded-full transition-all duration-500 ease-spring ${
                  i === activeIndex ? "w-8 bg-aqua-500" : "w-1.5 bg-aqua-200 hover:bg-aqua-400"
                }`}
                aria-label={`Video ${i + 1}`}
              />
            ))}
          </div>

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
                      ? "ring-2 ring-aqua-400 ring-offset-2 ring-offset-surface scale-105"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-aqua-50 to-lavender-50 p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/70 shadow-soft">
                      <IconPlay className="ml-0.5 h-3 w-3 text-aqua-500" />
                    </div>
                    <p className="mt-2 line-clamp-2 text-center text-[9px] font-semibold text-navy-500">
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

          <p className="mt-6 text-center text-xs text-navy-400">
            * Replace with actual TikTok/Reels video URLs or embeds
          </p>
        </div>
      </div>
    </section>
  );
}
