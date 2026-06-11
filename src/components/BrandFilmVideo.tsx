"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BRAND_FILM_VIDEO,
  getBrandFilmYoutubeEmbedUrl,
} from "@/lib/landingVideos";

interface BrandFilmVideoProps {
  className?: string;
}

export default function BrandFilmVideo({ className = "" }: BrandFilmVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mediaReady, setMediaReady] = useState(false);
  const [mediaError, setMediaError] = useState(false);

  const { source } = BRAND_FILM_VIDEO;
  const isYoutube = source.type === "youtube";

  const showLocalPlaceholder = !isYoutube && (!mediaReady || mediaError);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className={`relative aspect-video w-full overflow-hidden rounded-2xl border border-white/60 bg-navy-900/5 shadow-glass ${className}`}
    >
      {isYoutube ? (
        <iframe
          className="h-full w-full"
          src={getBrandFilmYoutubeEmbedUrl(source.youtubeId)}
          title="TEABLESS brand film"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            controls
            playsInline
            muted
            preload="metadata"
            poster={BRAND_FILM_VIDEO.poster}
            onLoadedData={() => {
              setMediaReady(true);
              setMediaError(false);
            }}
            onError={() => setMediaError(true)}
          >
            <source src={BRAND_FILM_VIDEO.webm} type="video/webm" />
            <source src={BRAND_FILM_VIDEO.mp4} type="video/mp4" />
          </video>

          {showLocalPlaceholder && (
            <div
              className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-cover bg-center"
              style={{ backgroundImage: `url(${BRAND_FILM_VIDEO.poster})` }}
              aria-hidden={mediaReady && !mediaError}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-navy-900/20 to-navy-900/10" />
              <div className="relative flex flex-col items-center gap-2 px-4 text-center">
                <span className="inline-flex items-center rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-lavender-500 backdrop-blur-sm">
                  TEABLESS
                </span>
                <p className="font-display text-xl font-bold text-white drop-shadow-sm sm:text-2xl">
                  {BRAND_FILM_VIDEO.label}
                </p>
                {mediaError && (
                  <p className="max-w-xs text-xs text-white/80">
                    Drop your CF video at{" "}
                    <code className="rounded bg-white/20 px-1 py-0.5 text-[10px]">
                      public/landing-assets/videos/cf-brand-film.mp4
                    </code>
                  </p>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}
