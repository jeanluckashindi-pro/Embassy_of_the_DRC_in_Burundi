import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          1: "var(--bg-1)",
          2: "var(--bg-2)",
          3: "var(--bg-3)",
        },
        theme: {
          text: "var(--color)",
          icon: "var(--color-icone)",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
        ui: ["var(--font-ui)"],
        script: ["var(--font-script)"],
      },
    },
  },
  plugins: [],
};

export default config;