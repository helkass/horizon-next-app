/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: "0.8px",
      },
    },
    fontFamily: {
      txthead: ["Inspiration", "cursive"],
      flower: ["Indie Flower", "cursive"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
