/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: "#F4D06F",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};

