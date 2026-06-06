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
      <div className={`double-bezel ${className}`}>
        <div className={`relative ${aspectClass} w-full overflow-hidden rounded-[calc(2rem-0.375rem)] bg-black`}>
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
      className={`group double-bezel w-full text-left ${className}`}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      aria-label={`${title} 재생`}
    >
      <div
        className={`relative ${aspectClass} w-full overflow-hidden rounded-[calc(2rem-0.375rem)] bg-gradient-to-br from-centella-900/40 via-surface-raised to-void-50`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/10 shadow-bezel-inner backdrop-blur-sm transition-all duration-500 ease-spring group-hover:scale-110 group-hover:bg-centella-500/20 sm:h-20 sm:w-20">
            <IconPlay className="ml-0.5 h-7 w-7 text-centella-300 sm:h-8 sm:w-8" />
          </div>
          <div className="break-keep text-center">
            <p className="text-sm font-semibold text-white sm:text-base">{title}</p>
            {subtitle && <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{subtitle}</p>}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-void/60 to-transparent" />
      </div>
    </motion.button>
  );
}
