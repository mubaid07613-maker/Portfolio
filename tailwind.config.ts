import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: "#07080B",
        surface: {
          50: "#1A1D27",
          100: "#141720",
          200: "#0F1219",
          300: "#0B0D12",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(56, 189, 248, 0.25)",
        },
        accent: {
          cyan: "#38BDF8",
          emerald: "#10B981",
          violet: "#818CF8",
          amber: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "border-glow": "borderGlow 3s ease infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(56, 189, 248, 0.2)" },
          "50%": { borderColor: "rgba(56, 189, 248, 0.6)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(56, 189, 248, 0.15)",
        "glow-emerald": "0 0 25px -5px rgba(16, 185, 129, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;

