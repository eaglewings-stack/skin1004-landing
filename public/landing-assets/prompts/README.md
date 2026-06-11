# TEABLESS Landing Page — Image Prompt Library

Numbered prompt files for generating on-brand product and lifestyle imagery for the **TEABLESS Perfume Hand & Body Wash — Lily Musk White Tea** landing page. Use these prompts in your external image generation tool (Midjourney, DALL·E, Flux, Stable Diffusion, etc.), then save outputs to the matching path under `public/landing-assets/images/`.

---

## Numbering System

| Prefix | Meaning |
|--------|---------|
| `01–09` | Hero & above-the-fold imagery |
| `10–19` | Product detail, texture, ingredient close-ups |
| `20–29` | Lifestyle, routine, and model shots |
| `30–39` | Social proof, UGC-style, testimonials |
| `40–49` | Section backgrounds & decorative assets |
| `50+` | Seasonal variants, A/B tests, alternate crops |

**File naming convention**

- Prompts: `public/landing-assets/prompts/NN-slug-name.md` (e.g. `01-hero-main-product-shot.md`)
- Generated images: `public/landing-assets/images/NN-slug-name.webp` (e.g. `01-hero-main.webp`)

Always keep prompt numbers and image filenames aligned so the landing page can reference them predictably.

---

## Aspect Ratios

| Ratio | Pixels | Primary use |
|-------|--------|-------------|
| **4:5** | 1080 × 1350 | Mobile-first hero, product cards, Instagram-style sections |
| **1:1** | 1080 × 1080 | Feature grids, thumbnails |
| **16:9** | 1920 × 1080 | Desktop hero, brand film thumbnails |
| **9:16** | 1080 × 1920 | Reels, Stories, vertical video posters |

Default to **4:5** unless a prompt file specifies otherwise. Export as **WebP** at 80–90% quality for web performance.

---

## Workflow

1. **Read** the numbered prompt file in order (`01`, then `02`, …).
2. **Copy** the **Main prompt**, **Negative prompt**, and **Style modifiers** into your image tool.
3. **Generate** at the specified resolution and aspect ratio.
4. **Review** against **Mobile safe zone** notes (headline overlays, CTA placement).
5. **Save** to `public/landing-assets/images/` using the filename listed in each prompt file.
6. **Wire up** the landing page component to reference `/landing-assets/images/NN-slug-name.webp`.

### Image output directory

```
public/landing-assets/images/
  01-hero-main.webp          ← Hero main product shot (from 01-hero-main-product-shot.md)
  02-*.webp                  ← Future prompts
  ...
```

Create subfolders only if a section needs multiple crops (e.g. `images/hero/01-hero-main-mobile.webp`).

---

## Brand Constants (all prompts)

- **Product:** TEABLESS Perfume Hand & Body Wash — Lily Musk White Tea
- **Bottle:** White faceted octagonal pump bottle, silver pump collar
- **Label:** Ornate vintage black border frame on white label
- **Packaging art:** Impressionistic pastel washes — lavender, mint, sky blue, pale yellow
- **Size:** 500 g / 17.63 oz
- **Scent story:** Subtle lilies, cozy musk, warm white tea extract, all-day pleasant scent
- **Tone:** Premium K-beauty, photorealistic, luxury lifestyle, soft natural light
- **Copy language:** English (in page metadata only — **no text burned into images**)

---

## Current Prompt Index

| # | File | Output image | Landing placement |
|---|------|--------------|-------------------|
| 01 | [01-hero-main-product-shot.md](./01-hero-main-product-shot.md) | `../images/01-hero-main.webp` | Hero section — primary mobile product visual |

_Add new rows as prompts are added._
