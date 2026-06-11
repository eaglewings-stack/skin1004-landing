import { LANDING_IMAGE_PATHS } from "./landingImages";

export type BrandFilmSource =
  | { type: "youtube"; youtubeId: string }
  | { type: "local"; mp4: string; webm?: string };

export const BRAND_FILM_VIDEO = {
  slug: "cf-brand-film",
  /** Swap to local when cf-brand-film.mp4 is ready: { type: "local", mp4: "...", webm: "..." } */
  source: {
    type: "youtube",
    youtubeId: "ESzho7a1Q_c",
  } satisfies BrandFilmSource,
  mp4: "/landing-assets/videos/cf-brand-film.mp4",
  webm: "/landing-assets/videos/cf-brand-film.webm",
  poster: LANDING_IMAGE_PATHS.heroMain,
  label: "Brand Film",
} as const;

export function getBrandFilmYoutubeEmbedUrl(youtubeId: string) {
  return `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`;
}
