# TEABLESS Landing Page — Image Prompt Library

Numbered prompt files for generating on-brand product and lifestyle imagery for the **TEABLESS Perfume Body Wash — Lily Musk White Tea** landing page. Use these prompts in your external image generation tool (Midjourney, DALL·E, Flux, Stable Diffusion, etc.), then save outputs to the matching path under `public/landing-assets/images/`.

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
| **16:9** | 1920 × 1080 | Desktop hero, brand film thumbnails, wide section backgrounds |
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
  01-hero-main.webp
  02-hero-lifestyle.webp
  03-box-bottle-set.webp
  04-scent-pyramid-lifestyle.webp
  05-texture-gel-lather.webp
  06-100hr-extraction.webp
  07-exfoliation-smooth-skin.webp
  08-ceramide-moisture.webp
  09-certifications-trust.webp
  10-fragrance-24hr-mood.webp
  11-brand-story-tea-time.webp
  12-how-to-use-ritual.webp
```

---

## Brand Constants (all prompts)

- **Product:** TEABLESS Perfume Body Wash — Lily Musk White Tea
- **Bottle:** White faceted octagonal pump bottle, silver pump collar
- **Label:** Ornate vintage black border frame on white label
- **Packaging art:** Impressionistic pastel washes — lavender, mint, sky blue, pale yellow
- **Size:** 500 g
- **Scent story:** Lily of the valley, lily, white tea, musk, white musk — transparent calm floral musk
- **Tone:** Premium K-beauty, photorealistic, luxury lifestyle, soft natural light
- **Copy language:** English (in page metadata only — **no text burned into images**)

---

## Full Prompt Index (01–12)

| # | Prompt file | Output image | Aspect | Landing placement |
|---|-------------|--------------|--------|-------------------|
| 01 | [01-hero-main-product-shot.md](./01-hero-main-product-shot.md) | `../images/01-hero-main.webp` | 4:5 | Hero — primary mobile product visual |
| 02 | [02-hero-lifestyle.md](./02-hero-lifestyle.md) | `../images/02-hero-lifestyle.webp` | 4:5 | Hero — lifestyle variant (model + product) |
| 03 | [03-box-bottle-set.md](./03-box-bottle-set.md) | `../images/03-box-bottle-set.webp` | 1:1 | Product details — packaging showcase |
| 04 | [04-scent-pyramid-lifestyle.md](./04-scent-pyramid-lifestyle.md) | `../images/04-scent-pyramid-lifestyle.webp` | 4:5 | Scent story — fragrance pyramid mood |
| 05 | [05-texture-gel-lather.md](./05-texture-gel-lather.md) | `../images/05-texture-gel-lather.webp` | 1:1 | Texture & formula — gel lather macro |
| 06 | [06-100hr-extraction.md](./06-100hr-extraction.md) | `../images/06-100hr-extraction.webp` | 4:5 | Texture & formula — low-temp extraction |
| 07 | [07-exfoliation-smooth-skin.md](./07-exfoliation-smooth-skin.md) | `../images/07-exfoliation-smooth-skin.webp` | 4:5 | Benefits — gentle exfoliation / smooth skin |
| 08 | [08-ceramide-moisture.md](./08-ceramide-moisture.md) | `../images/08-ceramide-moisture.webp` | 1:1 | Benefits — Ceramide NP moisture & barrier |
| 09 | [09-certifications-trust.md](./09-certifications-trust.md) | `../images/09-certifications-trust.webp` | 16:9 | Certifications — trust badge background |
| 10 | [10-fragrance-24hr-mood.md](./10-fragrance-24hr-mood.md) | `../images/10-fragrance-24hr-mood.webp` | 4:5 | Scent longevity — 24-hour fragrance mood |
| 11 | [11-brand-story-tea-time.md](./11-brand-story-tea-time.md) | `../images/11-brand-story-tea-time.webp` | 4:5 | Brand story — tea time ritual |
| 12 | [12-how-to-use-ritual.md](./12-how-to-use-ritual.md) | `../images/12-how-to-use-ritual.webp` | 16:9 | How to use — 3-step shower ritual |

---

## Related Files

- **Approved copy reference:** [../COPY.md](../COPY.md)
- **Generated images folder:** [../images/](../images/)
