import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090909",
        card: "#111111",
        primary: {
          DEFAULT: "#ff7b00",
          hover: "#ff9a2f",
        },
        secondary: "#1b1b1b",
        foreground: "#ffffff",
        muted: "#bdbdbd",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #ff7b00 0%, #ff4d00 100%)",
        "radial-glow":
          "radial-gradient(circle at center, rgba(255,123,0,0.35) 0%, rgba(255,123,0,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,123,0,0.35)",
        "glow-lg": "0 0 80px rgba(255,123,0,0.45)",
        deep: "0 20px 60px rgba(0,0,0,0.6)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(-6%, -4%) scale(1.08)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        drift: "drift 20s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
