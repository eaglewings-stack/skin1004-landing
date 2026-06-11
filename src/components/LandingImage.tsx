"use client";

import { useState } from "react";
import Image from "next/image";
import { landingImageCandidates } from "@/lib/landingImages";

type AspectRatio = "4/5" | "4/3" | "16/9" | "1/1";

const aspectClasses: Record<AspectRatio, string> = {
  "4/5": "aspect-[4/5]",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
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

  return (
    <div
      className={`relative w-full overflow-hidden border border-white/60 shadow-glass ${aspectClasses[aspect]} ${rounded} ${className}`}
    >
      {!failed ? (
        <Image
          src={candidates[index]}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes={sizes}
          onError={() => setIndex((i) => i + 1)}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-lavender-50 via-white to-aqua-50" />
      )}
    </div>
  );
}
