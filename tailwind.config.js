/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0d",
        paper: "#f6f3ee",
        orange: "#E8642A",
        red: "#E83A2A",
        muted: "#7a7770",
        card: "#ffffff",
        border: "rgba(13, 13, 13, 0.09)",
        tagBg: "rgba(13, 13, 13, 0.055)",
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        sans: ['DM Sans', 'sans-serif'],
      },
      cursor: {
        none: 'none',
      }
    },
  },
  plugins: [],
}
