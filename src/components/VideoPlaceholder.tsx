"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconPlay } from "./icons";

interface VideoPlaceholderProps {
  title: string;
  subtitle?: string;
  aspectRatio?: "video" | "reel";
  videoUrl?: string;
  className?: string;
}

export default function VideoPlaceholder({
  title,
  subtitle,
  aspectRatio = "video",
  videoUrl,
  className = "",
}: VideoPlaceholderProps) {
  const [playing, setPlaying] = useState(false);

  const aspectClass = aspectRatio === "reel" ? "aspect-[9/16]" : "aspect-video";

  if (playing && videoUrl) {
    return (
      <div className={`glass-card ${className}`}>
        <div className={`relative ${aspectClass} w-full overflow-hidden rounded-[calc(1.5rem-0.25rem)] bg-navy-900`}>
          <iframe
            src={`${videoUrl}?autoplay=1`}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group glass-card w-full text-left ${className}`}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      aria-label={`Play ${title}`}
    >
      <div
        className={`relative ${aspectClass} w-full overflow-hidden rounded-[calc(1.5rem-0.25rem)] bg-gradient-to-br from-aqua-100 via-lavender-50 to-blush-50`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(186,230,253,0.6),transparent_60%)]" />
        <div className="water-shimmer absolute inset-0 opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-white/70 shadow-glass backdrop-blur-sm transition-all duration-500 ease-spring group-hover:scale-110 group-hover:bg-aqua-100 sm:h-20 sm:w-20">
            <IconPlay className="ml-0.5 h-7 w-7 text-aqua-500 sm:h-8 sm:w-8" />
          </div>
          <div className="text-center">
            <p className="text-sm font-bold text-navy-700 sm:text-base">{title}</p>
            {subtitle && <p className="mt-1 text-xs text-navy-400 sm:text-sm">{subtitle}</p>}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/40 to-transparent" />
      </div>
    </motion.button>
  );
}
