/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '18': '69px',
      }
    },
    fontFamily: {
      default: ['Noto Sans'],
    },
    backgroundImage: {
      /*crear un light*/
      'd': "url('src/assets/img/bg-d.png')",
    }
  },
  darkMode: "class",
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

