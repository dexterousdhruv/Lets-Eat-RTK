/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tangy-orange': '#f97316',
        'light-fade': '#F1F5F9',
        'slate-gray': '#64748B',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

