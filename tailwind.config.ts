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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#00f2ff", // Cyan
          dark: "#0088cc",
        },
        secondary: {
          DEFAULT: "#10b981", // Emerald
          dark: "#065f46",
        },
        accent: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
        },
        graphite: {
          950: "#0a0a0a",
          900: "#121212",
          800: "#1e1e1e",
          700: "#2d2d2d",
        },
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(to right, #1e1e1e 1px, transparent 1px), linear-gradient(to bottom, #1e1e1e 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 242, 255, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 242, 255, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
