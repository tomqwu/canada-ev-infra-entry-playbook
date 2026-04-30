/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f7",
          100: "#dde5ef",
          200: "#b6c4d8",
          300: "#8fa2bf",
          400: "#5d75a0",
          500: "#324a78",
          600: "#22355c",
          700: "#172749",
          800: "#0f1c38",
          900: "#0a1428",
          950: "#060d1c",
        },
        ink: {
          DEFAULT: "#0a1428",
          soft: "#1a2540",
          muted: "#475573",
        },
        accent: {
          50: "#eef8f1",
          100: "#d4ecdb",
          200: "#a9d8b6",
          300: "#7bc191",
          400: "#54a972",
          500: "#3a8e59",
          600: "#2c7045",
          700: "#235838",
          800: "#1c452c",
          900: "#143120",
        },
        paper: "#f7f8fb",
        line: "#e3e8f0",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: [
          "\"Source Serif 4\"",
          "\"Source Serif Pro\"",
          "ui-serif",
          "Georgia",
          "serif",
        ],
        mono: [
          "\"JetBrains Mono\"",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      maxWidth: {
        prose: "68ch",
        page: "76rem",
      },
      letterSpacing: {
        tightish: "-0.01em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,20,40,0.06), 0 8px 24px rgba(10,20,40,0.06)",
      },
    },
  },
  plugins: [],
};
