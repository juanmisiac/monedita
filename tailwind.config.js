/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '0.5': '2.5px',
        '5.5': '22px',
        '7.5': '30px',
        '18': '69px',
      },
      backgroundImage: {
        'd': "url('src/assets/img/dark-grid.png')",
      }
    },
    fontFamily: {
      default: ['Noto Sans'],
    },
  },
  darkMode: "class",
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

