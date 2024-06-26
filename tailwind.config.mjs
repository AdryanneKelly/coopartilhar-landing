/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        staatliches : ["Staatliches", "sans"],
      },
      colors: {
        fontColor: "#555555",
        primary: "#129166",
        secondary: "#84CC6D",
        secondaryFontColor: "#505051",
      },
    },
  },
  plugins: [],
};
