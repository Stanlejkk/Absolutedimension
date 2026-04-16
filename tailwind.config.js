/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        bone: "#f4f0ea",
        ink: "#0d0d0d",
        muted: "#6b6458",
        gold: "#b8936a",
        bordeaux: "#6b1f2a",
      },
      letterSpacing: {
        wider2: "0.2em",
      },
    },
  },
  plugins: [],
};
