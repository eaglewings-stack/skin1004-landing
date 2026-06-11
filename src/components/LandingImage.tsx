"use client";

import { useState } from "react";
import Image from "next/image";
import { landingImageCandidates } from "@/lib/landingImages";

type AspectRatio = "4/5" | "4/3" | "16/9" | "1/1";

const dimensionsByAspect: Record<AspectRatio, { width: number; height: number }> = {
  "4/5": { width: 1080, height: 1350 },
  "4/3": { width: 1200, height: 900 },
  "16/9": { width: 1920, height: 1080 },
  "1/1": { width: 1080, height: 1080 },
};

interface LandingImageProps {
  slug: string;
  alt: string;
  priority?: boolean;
  aspect?: AspectRatio;
  className?: string;
  rounded?: string;
  sizes?: string;
}

export default function LandingImage({
  slug,
  alt,
  priority = false,
  aspect = "4/5",
  className = "",
  rounded = "rounded-3xl",
  sizes = "100vw",
}: LandingImageProps) {
  const candidates = landingImageCandidates(slug);
  const [index, setIndex] = useState(0);
  const failed = index >= candidates.length;
  const { width, height } = dimensionsByAspect[aspect];

  return (
    <div
      className={`relative w-full border border-white/60 bg-gradient-to-br from-lavender-50/80 via-white to-aqua-50/80 shadow-glass ${rounded} ${className}`}
    >
      {!failed ? (
        <Image
          src={candidates[index]}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`h-auto w-full ${rounded}`}
          sizes={sizes}
          onError={() => setIndex((i) => i + 1)}
        />
      ) : (
        <div
          className={`aspect-[4/5] w-full bg-gradient-to-br from-lavender-50 via-white to-aqua-50 ${rounded}`}
        />
      )}
    </div>
  );
}
