/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': "'Poppins', sans-serif",
    },
    colors:{
      'color':'#44455B',
      'color2':'#F4C276'
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}