import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        ember: {
          DEFAULT: "var(--ember)",
          warm: "var(--ember-warm)",
          dark: "var(--ember-dark)",
        },
        amber: "var(--amber)",
        muted: "var(--muted)",
        rule: "var(--rule)",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        title: ["var(--font-serif)", "serif"],
        body: ["var(--font-sans)", "sans-serif"],
        code: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
