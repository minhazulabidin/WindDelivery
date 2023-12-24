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
      'color2':'#3A8700'
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}