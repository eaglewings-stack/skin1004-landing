"use client";

import { motion } from "framer-motion";
import {
  IconLeaf,
  IconShield,
  IconDroplet,
  IconSparkle,
  IconFlask,
  IconHeart,
  IconWind,
  IconMicroscope,
  IconSprout,
} from "./icons";
import LandingImage from "./LandingImage";
import { LANDING_IMAGES } from "@/lib/landingImages";

const scentNotes = [
  {
    layer: "Top",
    notes: "Lily of the Valley",
    desc: "A transparent floral opening — crisp, refreshing, and quietly luminous.",
    accent: "border-lavender-200 bg-lavender-50/80 text-lavender-400",
  },
  {
    layer: "Mid",
    notes: "Lily · White Tea",
    desc: "Petals unfold with warmth; white tea brings a serene, unhurried calm.",
    accent: "border-aqua-200 bg-aqua-50/80 text-aqua-600",
  },
  {
    layer: "Base",
    notes: "Musk · White Musk",
    desc: "A clear, soft finish — like white mist settling on skin after tea.",
    accent: "border-centella-200 bg-centella-50/80 text-centella-600",
  },
];

const benefits = [
  {
    icon: IconSparkle,
    value: "59.82%",
    label: "Keratin improvement*",
    desc: "Green tea powder micro-particles gently refine without irritation.",
  },
  {
    icon: IconShield,
    value: "Ceramide NP",
    label: "Barrier support",
    desc: "White tea actives help reinforce skin's moisture barrier after shower.",
  },
  {
    icon: IconDroplet,
    value: "Lasting",
    label: "Post-shower moisture",
    desc: "Skin feels moist and smooth — never tight, never stripped.",
  },
];

const certifications = [
  {
    title: "Sensitive Skin Test",
    org: "Korea Institute of Dermatological Sciences",
    detail: "31 subjects · irritation test completed",
  },
  {
    title: "Skin Irritation Test",
    org: "SkinMed",
    detail: "30 subjects · completed",
  },
  {
    title: "Antioxidant Effect",
    org: "Intertek",
    detail: "DPPH method · completed",
  },
  {
    title: "Korea Vegan",
    org: "Certified",
    detail: "No animal-derived ingredients",
  },
];

const ingredients = [
  {
    icon: IconLeaf,
    name: "White Tea",
    tag: "Hero",
    benefit: "Antioxidant · delicate scent",
    color: "text-centella-600 bg-centella-50 border-centella-200",
  },
  {
    icon: IconSprout,
    name: "Green Tea Powder",
    tag: "Texture",
    benefit: "Gentle exfoliation · TEA therapy",
    color: "text-aqua-600 bg-aqua-50 border-aqua-200",
  },
  {
    icon: IconShield,
    name: "Ceramide NP",
    tag: "Barrier",
    benefit: "Moisture lock · skin support",
    color: "text-lavender-400 bg-lavender-50 border-lavender-200",
  },
  {
    icon: IconFlask,
    name: "Black Tea Ferment",
    tag: "Active",
    benefit: "Deep, soft nourishment",
    color: "text-aqua-600 bg-aqua-50 border-aqua-200",
  },
  {
    icon: IconHeart,
    name: "Botanical Blend",
    tag: "Complex",
    benefit: "Lavender · Peony · Green Tea extracts",
    color: "text-lavender-400 bg-lavender-50 border-lavender-200",
  },
  {
    icon: IconWind,
    name: "Premium Fragrance",
    tag: "Scent",
    benefit: "Lily musk white tea · 24hr longevity",
    color: "text-centella-600 bg-centella-50 border-centella-200",
  },
];

const usageSteps = [
  {
    step: "1",
    title: "Dispense",
    text: "Apply an appropriate amount to wet hands or a shower towel.",
  },
  {
    step: "2",
    title: "Lather",
    text: "Work into a rich, creamy foam and gently wash your body.",
  },
  {
    step: "3",
    title: "Rinse",
    text: "Rinse thoroughly. Enjoy soft, scented skin that lasts.",
  },
];

const productInfo = [
  { label: "Product Name", value: "TEABLESS Lily Musk White Tea Perfume Body Wash" },
  { label: "Volume", value: "500g" },
  { label: "Origin", value: "Made in Korea" },
  { label: "Manufacturer", value: "CNF Co., Ltd." },
  { label: "Distributor", value: "LOC Co., Ltd." },
];

const spring = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

function SectionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-lavender-50/60 via-white/40 to-aqua-50/30" />
      <div className="absolute inset-0 bg-mesh-pastel opacity-50" />
      <div className="absolute left-[5%] top-[20%] h-52 w-52 rounded-full bg-lavender-200/25 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-[15%] right-[8%] h-64 w-64 rounded-full bg-aqua-100/35 blur-3xl animate-pulse-soft [animation-delay:2s]" />
    </div>
  );
}

export default function ProductDetails() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-lavender-100/50 py-20 sm:py-28 lg:py-36">
      <SectionBackground />

      <div className="section-padding relative z-10">
        <div className="section-container space-y-20 sm:space-y-28">
          {/* Brand Story — 10 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="space-y-8"
          >
            <LandingImage
              slug={LANDING_IMAGES.brandStory}
              alt="TEABLESS brand story — tea time ritual and everyday comfort"
              aspect="4/5"
            />
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">Brand Story</span>
              <h2 className="editorial-headline mt-5 text-4xl sm:text-5xl">
                Tea Time,
                <br />
                <span className="italic text-lavender-400">Every Day</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-500">
                Tea time is a small healing moment — a pause to share hearts and find rest. TEABLESS was
                born from the temperature and scent of tea: delicate fragrance paired with a low-irritation
                formula for comfortable, everyday relaxation.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-navy-400">
                For those sensitive to skin and scent, we offer body care that feels as gentle as a cup of
                white tea. Tea extracts and premium fragrances create a deep, soft, lingering scent — your
                daily comfort, bottled.
              </p>
            </div>
          </motion.div>

          {/* Scent Pyramid — 03 + 09 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="space-y-10"
          >
            <LandingImage
              slug={LANDING_IMAGES.scentIngredients}
              alt="Lily Musk White Tea scent ingredients and fragrance notes"
              aspect="4/5"
            />

            <div className="text-center">
              <span className="eyebrow">Scent Story</span>
              <h3 className="font-display mt-4 text-3xl font-extrabold text-navy-700 sm:text-4xl">
                Lily Musk White Tea
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-navy-500">
                Inspired by the delicate scent of young white tea leaves covered in silvery down — a
                transparent, calm floral musk that feels as soft and clean as your first sip.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
              {scentNotes.map((note, i) => (
                <motion.div
                  key={note.layer}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, ...spring }}
                  className="glass-card"
                >
                  <div className="glass-card-body p-6 sm:p-8">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${note.accent}`}
                    >
                      {note.layer}
                    </span>
                    <h4 className="mt-4 text-lg font-bold text-navy-700">{note.notes}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">{note.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <LandingImage
              slug={LANDING_IMAGES.fragrance24hr}
              alt="24-hour fragrance longevity — lily musk white tea mood"
              aspect="4/5"
            />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-2xl border border-lavender-200/80 bg-lavender-50/60 px-6 py-4 backdrop-blur-sm"
            >
              <IconWind className="h-5 w-5 shrink-0 text-lavender-400" />
              <p className="text-sm font-semibold text-navy-600">
                24-hour fragrance longevity — exceptional staying power, test completed
              </p>
            </motion.div>
          </motion.div>

          {/* Texture & 100hr Extraction — 04 + 05 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="rounded-4xl border border-aqua-100/50 bg-gradient-to-br from-aqua-50/70 via-white/50 to-lavender-50/40 p-6 shadow-glass backdrop-blur-sm sm:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <span className="eyebrow">Texture & Formula</span>
                <h3 className="font-display mt-4 text-3xl font-extrabold leading-tight text-navy-700 sm:text-4xl">
                  Gel Lather.
                  <br />
                  <span className="text-aqua-600">Tea Therapy.</span>
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-500">
                  A gel-type texture that builds rich foam for moist, satisfying cleansing. Fine green tea
                  leaf particles meet a luxurious lather — our signature TEA therapy texture that leaves
                  skin smooth and hydrated.
                </p>
                <div className="mt-6 rounded-2xl border border-white/70 bg-white/50 p-5 backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-wider text-centella-600">
                    100-Hour Low-Temperature Extraction
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    White tea nutrients and subtle scent are preserved through gentle, low-heat extraction
                    — never rushed, never overheated. The result: actives that nourish while the fragrance
                    stays true.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Rich foam", "Moist cleanse", "Green tea particles"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-aqua-100 bg-white/60 px-4 py-2 text-xs font-semibold text-navy-600 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <LandingImage
                  slug={LANDING_IMAGES.textureGelLather}
                  alt="TEABLESS gel lather texture — rich foam with green tea particles"
                  aspect="4/5"
                />
                <LandingImage
                  slug={LANDING_IMAGES.extraction100hr}
                  alt="100-hour low-temperature white tea extraction process"
                  aspect="4/5"
                />
              </div>
            </div>
          </motion.div>

          {/* Benefits — 06 + 07 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="space-y-10"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <LandingImage
                slug={LANDING_IMAGES.exfoliationSmoothSkin}
                alt="Gentle exfoliation with green tea particles — smooth, refined skin"
                aspect="4/5"
              />
              <LandingImage
                slug={LANDING_IMAGES.ceramideMoisture}
                alt="Ceramide NP moisture barrier care — hydrated post-shower skin"
                aspect="4/5"
              />
            </div>

            <div className="text-center">
              <span className="eyebrow">Benefits</span>
              <h3 className="font-display mt-4 text-3xl font-extrabold text-navy-700 sm:text-4xl">
                Care You Can Feel
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
              {benefits.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, ...spring }}
                  className="glass-card text-center"
                >
                  <div className="glass-card-body p-6 sm:p-8">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lavender-50 text-lavender-400">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <p className="mt-4 font-display text-3xl font-extrabold text-navy-700">{item.value}</p>
                    <p className="mt-1 text-sm font-bold text-navy-600">{item.label}</p>
                    <p className="mt-3 text-sm leading-relaxed text-navy-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
          >
            <div className="text-center">
              <span className="eyebrow">Key Ingredients</span>
              <h3 className="font-display mt-4 text-2xl font-extrabold text-navy-700 sm:text-3xl">
                Tea. Barrier. Scent.
              </h3>
            </div>

            <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 sm:gap-4">
              {ingredients.map((ing, i) => (
                <motion.div
                  key={ing.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, ...spring }}
                  className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/55 p-4 shadow-glass backdrop-blur-md"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${ing.color}`}
                  >
                    <ing.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <p className="truncate text-sm font-bold text-navy-700">{ing.name}</p>
                      <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-navy-400">
                        {ing.tag}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-navy-400">{ing.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications — 08 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="space-y-10"
          >
            <LandingImage
              slug={LANDING_IMAGES.certificationsTrust}
              alt="TEABLESS certifications — sensitive skin tested, vegan, antioxidant verified"
              aspect="16/9"
            />

            <div className="text-center">
              <span className="eyebrow">Certifications</span>
              <h3 className="font-display mt-4 text-2xl font-extrabold text-navy-700 sm:text-3xl">
                Tested. Trusted.
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, ...spring }}
                  className="flex flex-col items-center rounded-2xl border border-white/70 bg-white/55 p-4 text-center shadow-glass backdrop-blur-md sm:p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-aqua-200 bg-aqua-50 text-aqua-600">
                    <IconMicroscope className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-xs font-bold text-navy-700 sm:text-sm">{cert.title}</p>
                  <p className="mt-1 text-[10px] font-semibold text-navy-500">{cert.org}</p>
                  <p className="mt-1 text-[10px] leading-snug text-navy-400">{cert.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How to Use — 11 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="space-y-10"
          >
            <LandingImage
              slug={LANDING_IMAGES.howToUse}
              alt="How to use TEABLESS — three-step shower ritual"
              aspect="16/9"
            />

            <div className="text-center">
              <span className="eyebrow">How to Use</span>
              <h3 className="font-display mt-4 text-2xl font-extrabold text-navy-700 sm:text-3xl">
                Your Shower Ritual
              </h3>
            </div>

            <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-3 sm:gap-6">
              {usageSteps.map(({ step, title, text }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, ...spring }}
                  className="text-center"
                >
                  <span className="font-display text-6xl font-extrabold leading-none text-lavender-200 sm:text-7xl">
                    {step}
                  </span>
                  <h4 className="mt-3 text-lg font-bold text-navy-700">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy-400">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Customer Reviews — 12 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="space-y-6"
          >
            <div className="text-center">
              <span className="eyebrow">Customer Reviews</span>
              <h3 className="font-display mt-4 text-2xl font-extrabold text-navy-700 sm:text-3xl">
                Loved by Real Users
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-navy-500">
                See what customers are saying about the scent, texture, and everyday comfort of TEABLESS.
              </p>
            </div>
            <LandingImage
              slug={LANDING_IMAGES.customerReviews}
              alt="TEABLESS customer reviews and social proof"
              aspect="4/5"
            />
          </motion.div>

          {/* Product Info Table */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="mx-auto max-w-2xl"
          >
            <div className="text-center">
              <span className="eyebrow">Product Info</span>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/70 bg-white/55 shadow-glass backdrop-blur-md">
              <table className="w-full text-left text-sm">
                <tbody>
                  {productInfo.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i < productInfo.length - 1 ? "border-b border-aqua-100/60" : ""}
                    >
                      <th className="w-[40%] px-5 py-4 text-xs font-semibold uppercase tracking-wider text-navy-400">
                        {row.label}
                      </th>
                      <td className="px-5 py-4 font-medium text-navy-700">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={spring}
            className="mx-auto max-w-xl text-center text-[11px] leading-relaxed text-navy-400"
          >
            * 59.82% dead skin cell (keratin) improvement based on clinical testing. Individual results may
            vary. Fragrance longevity claim based on completed product testing.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
