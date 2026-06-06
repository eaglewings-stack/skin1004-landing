import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2A4A",
          50: "#F0F3F8",
          100: "#D8E0ED",
          200: "#B0C0D9",
          300: "#8899B8",
          400: "#5A6F96",
          500: "#3D5278",
          600: "#2E4060",
          700: "#1B2A4A",
          800: "#141F38",
          900: "#0D1526",
        },
        aqua: {
          50: "#F0FAFF",
          100: "#E0F4FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
        },
        blush: {
          50: "#FFF5F7",
          100: "#FFE4EC",
          200: "#FECDD6",
          300: "#F9A8C4",
          400: "#F472B6",
        },
        lavender: {
          50: "#FAF5FF",
          100: "#F3E8FF",
          200: "#E9D5FF",
          300: "#D8B4FE",
          400: "#C084FC",
        },
        centella: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        accent: {
          yellow: "#FFE566",
          "yellow-dark": "#E6C200",
          orange: "#FF6B2C",
          "orange-dark": "#E85A1A",
        },
        sky: {
          deep: "#4A9FD4",
          mid: "#6BB5DE",
          light: "#87CEEB",
          pale: "#A8D8F0",
        },
        surface: {
          DEFAULT: "#FAFBFD",
          raised: "#FFFFFF",
          glass: "rgba(255, 255, 255, 0.65)",
          "glass-strong": "rgba(255, 255, 255, 0.85)",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
        display: ["var(--font-nunito)", "Nunito", "system-ui", "sans-serif"],
        editorial: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "bubble-float": "bubbleFloat 8s ease-in-out infinite",
        "droplet-drift": "dropletDrift 12s ease-in-out infinite",
        ripple: "ripple 4s ease-out infinite",
        "ripple-slow": "ripple 6s ease-out infinite",
        "float-gentle": "floatGentle 5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(2rem)", filter: "blur(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        bubbleFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "33%": { transform: "translateY(-8px) rotate(1deg)" },
          "66%": { transform: "translateY(4px) rotate(-1deg)" },
        },
        dropletDrift: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "25%": { transform: "translateY(-16px) translateX(6px)" },
          "50%": { transform: "translateY(-8px) translateX(-4px)" },
          "75%": { transform: "translateY(-20px) translateX(3px)" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(27, 42, 74, 0.06), 0 2px 8px rgba(27, 42, 74, 0.04)",
        "glass-lg": "0 16px 48px rgba(27, 42, 74, 0.08), 0 4px 16px rgba(27, 42, 74, 0.04)",
        "glass-inner": "inset 0 1px 1px rgba(255, 255, 255, 0.8)",
        soft: "0 4px 24px rgba(27, 42, 74, 0.06)",
        glow: "0 0 40px rgba(14, 165, 233, 0.15)",
        "glow-centella": "0 0 32px rgba(16, 185, 129, 0.12)",
        "glow-yellow": "0 8px 24px rgba(255, 229, 102, 0.35)",
        "glow-orange": "0 8px 24px rgba(255, 107, 44, 0.35)",
      },
      backgroundImage: {
        "mesh-pastel":
          "radial-gradient(ellipse at 20% 20%, rgba(186, 230, 253, 0.5) 0%, transparent 50%), radial-gradient(ellipse at 80% 10%, rgba(233, 213, 255, 0.4) 0%, transparent 45%), radial-gradient(ellipse at 60% 80%, rgba(254, 205, 214, 0.35) 0%, transparent 50%), radial-gradient(ellipse at 10% 70%, rgba(167, 243, 208, 0.25) 0%, transparent 45%)",
        "water-gradient":
          "linear-gradient(180deg, rgba(224, 244, 254, 0.8) 0%, rgba(240, 250, 255, 0.4) 40%, rgba(255, 255, 255, 0.9) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
