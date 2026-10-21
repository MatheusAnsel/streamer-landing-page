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
        background: "#0b0b0b",
        card: "#141414",
        line: "#262626",
        primary: {
          DEFAULT: "#ff7b00",
          hover: "#ff9a2f",
        },
        foreground: "#f2f2f2",
        muted: "#a3a3a3",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
