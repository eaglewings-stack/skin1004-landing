# 01 — Hero Main Product Shot

## Purpose

Primary above-the-fold hero visual for the TEABLESS landing page on mobile. Establishes premium K-beauty positioning, showcases the Lily Musk White Tea hand & body wash bottle, and optionally features a model to convey fresh, elegant daily ritual. Designed for vertical scroll-first layouts with headline and CTA overlaid in the top safe zone.

---

## Specifications

| Field | Value |
|-------|-------|
| **Aspect ratio** | 4:5 (vertical) |
| **Pixel size** | 1080 × 1350 px |
| **Output filename** | `public/landing-assets/images/01-hero-main.webp` |
| **Landing placement** | Hero section — main product visual (mobile-first; may be used as primary or paired with desktop crop later) |
| **Model** | Allowed — young beautiful Korean woman (natural, elegant) |

---

## Main Prompt

```
Premium K-beauty mobile hero photograph, vertical 4:5 composition, photorealistic luxury lifestyle campaign for TEABLESS Perfume Hand & Body Wash — Lily Musk White Tea.

Foreground: a pristine white faceted octagonal pump bottle with sharp geometric facets catching soft light, polished silver pump collar and dispenser, ornate vintage black border label frame on crisp white label surface, bottle held gently at chest level or presented on open palm by a young beautiful Korean woman with natural elegant beauty, fresh dewy skin, minimal makeup, soft relaxed expression with optional gentle smile, loose natural hair, wearing a simple cream or soft white linen top.

Alternative acceptable composition: TEABLESS bottle in sharp focus occupying lower-center foreground, model softly blurred in background with shallow depth of field, dreamy bokeh.

Background: impressionistic pastel art atmosphere echoing product packaging — soft painterly washes of lavender, mint green, sky blue, and pale yellow blending organically, airy and luminous, not cluttered, subtle watercolor texture on a bright clean backdrop.

Lighting: soft natural daylight from a large window, gentle rim light on bottle facets, editorial beauty photography, high-end skincare campaign aesthetic, clean color grading with slightly warm skin tones and cool pastel environment.

Mood: serene, refined, spa-like freshness, subtle lily and white tea serenity, cozy musk warmth suggested through soft golden undertones in the light — all-day pleasant scent embodied as calm luxury.

Camera: 85mm portrait lens look, shallow depth of field, product hero sharpness, magazine cover quality, 8K detail, no text, no logos rendered in scene, no watermarks.
```

---

## Negative Prompt

```
text, typography, words, letters, logo, watermark, signature, brand name on image, burned-in copy, ugly, deformed, blurry bottle, wrong bottle shape, round bottle, cylindrical bottle, cheap plastic look, harsh flash, overexposed, underexposed, cluttered background, dark moody lighting, neon colors, oversaturated, cartoon, illustration, anime, 3D render, CGI, plastic skin, heavy makeup, exaggerated pose, multiple bottles, cropped bottle, cut-off pump, distorted hands, extra fingers, bad anatomy, low resolution, grainy, jpeg artifacts, stock photo watermark, crowded composition, aggressive expression
```

---

## Style Modifiers

Append or weight these for consistency across the TEABLESS prompt series:

```
premium K-beauty, Korean beauty editorial, photorealistic, luxury lifestyle brand, soft natural light, pastel impressionistic background, faceted white pump bottle, silver collar, ornate vintage label border, lily musk white tea scent story, serene spa aesthetic, mobile hero composition, editorial beauty campaign, clean minimal styling, high-end skincare photography
```

**Recommended weights (if supported):** `--style raw` or low stylization; prioritize photorealism over illustration.

---

## Mobile Safe Zone Notes

```
┌─────────────────────────┐
│  TOP 20% — KEEP CLEAR   │  ← Headline, eyebrow badge, nav overlap
│  (soft sky/pastel only) │
├─────────────────────────┤
│                         │
│   Model face / upper    │  ← Face in upper-middle third if present
│   body optional         │
│                         │
│      ┌─────────┐        │
│      │ BOTTLE  │        │  ← Product centered horizontally
│      │ (hero)  │        │     Lower-middle to center vertical anchor
│      └─────────┘        │
│                         │
│  BOTTOM 15% — lighter   │  ← Room for gradient fade / CTA peek
└─────────────────────────┘
```

- **Center the bottle** horizontally; vertical anchor around 55–65% from top.
- **Top 20%** must stay visually quiet (pastel wash, no busy detail) for white or dark headline text overlay.
- **Avoid** placing the model's face in the top 15% where navigation may sit.
- **Bottom edge:** keep soft and slightly lighter for seamless fade into page background or sticky CTA.

---

## Optional Variants

### Variant A — With model (recommended default)

Use the **Main prompt** as written: model holding or presenting the bottle, eye contact optional, natural and approachable.

### Variant B — Product only

```
Premium K-beauty product hero shot, vertical 4:5, TEABLESS Perfume Hand & Body Wash Lily Musk White Tea, white faceted octagonal pump bottle with silver pump collar and ornate vintage black border label on white, bottle standing on a minimal white stone pedestal, impressionistic pastel background of lavender mint sky blue pale yellow watercolor washes, soft natural window light, sharp product focus, luxury skincare editorial, photorealistic, no model, no text, 1080x1350 composition with product centered in lower-middle third, top 20% clear pastel sky for text overlay.
```

### Variant C — Model behind product (depth)

```
Same as Main prompt but emphasize: bottle in extreme foreground sharp focus occupying 40% of frame height, young beautiful Korean woman softly blurred behind bottle, dreamy pastel bokeh background, stronger depth separation, bottle as unmistakable hero element.
```

---

## Post-Generation Checklist

- [ ] Bottle reads clearly as **white faceted octagon** with **silver pump**
- [ ] Label shows **ornate black vintage border** (no legible text required)
- [ ] Pastel background matches packaging palette
- [ ] Top 20% is clear enough for headline overlay
- [ ] Exported as `01-hero-main.webp` at 1080 × 1350
- [ ] No text or watermarks in image
