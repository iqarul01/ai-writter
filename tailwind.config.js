/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi: ["Satoshi", "Sans-Serif"],
        inter: ["Inter", "Sans-Serif"],
      }
    },
  },
  plugins: [],
}