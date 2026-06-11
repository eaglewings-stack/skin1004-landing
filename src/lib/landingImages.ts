const EXTENSIONS = [".webp", ".png", ".jpg", ".jpeg"] as const;

export const LANDING_IMAGES = {
  heroMain: "01-hero-main",
  heroLifestyle: "02-hero-lifestyle",
  scentIngredients: "03-scent-ingredients",
  textureGelLather: "04-texture-gel-lather",
  extraction100hr: "05-100hr-extraction",
  exfoliationSmoothSkin: "06-exfoliation-smooth-skin",
  ceramideMoisture: "07-ceramide-moisture",
  certificationsTrust: "08-certifications-trust",
  fragrance24hr: "09-fragrance-24hr-mood",
  brandStory: "10-brand-story-tea-time",
  howToUse: "11-how-to-use-ritual",
  customerReviews: "12-customer-reviews",
} as const;

/** Resolved paths for images currently on disk (all .png). */
export const LANDING_IMAGE_PATHS = {
  heroMain: "/landing-assets/images/01-hero-main.png",
  heroLifestyle: "/landing-assets/images/02-hero-lifestyle.png",
  scentIngredients: "/landing-assets/images/03-scent-ingredients.png",
  textureGelLather: "/landing-assets/images/04-texture-gel-lather.png",
  extraction100hr: "/landing-assets/images/05-100hr-extraction.png",
  exfoliationSmoothSkin: "/landing-assets/images/06-exfoliation-smooth-skin.png",
  ceramideMoisture: "/landing-assets/images/07-ceramide-moisture.png",
  certificationsTrust: "/landing-assets/images/08-certifications-trust.png",
  fragrance24hr: "/landing-assets/images/09-fragrance-24hr-mood.png",
  brandStory: "/landing-assets/images/10-brand-story-tea-time.png",
  howToUse: "/landing-assets/images/11-how-to-use-ritual.png",
  customerReviews: "/landing-assets/images/12-customer-reviews.png",
} as const;

export function landingImageCandidates(slug: string): string[] {
  return EXTENSIONS.map((ext) => `/landing-assets/images/${slug}${ext}`);
}
