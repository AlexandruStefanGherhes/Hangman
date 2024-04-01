/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors:{
      main:"#261676",
      mainT:"rgba(38,22,118,0.9)",
      accent:"#2463FF",
      white:"#FFFFFF",
      transparent:'transparent',
      gradS:"#FE71FE",
      gradE:"#7199FF",
      red:"#f30018"
    },
    fontFamily:{
      "mouse":["Mouse Memoirs",'sans-serif']
    },
    extend: {
      backgroundImage:{
        'desktop':"url('/assets/background-desktop.svg')",
        'tablet':"url('/assets/background-tablet.svg')",
        'mobile':"url('/assets/background-mobile.svg')",
      },
      boxShadow:{
        'inner':"0px 13px 9px 4px rgba(0,0,0,0.05) inset"
      }
    },
  },
  plugins: [],
}

