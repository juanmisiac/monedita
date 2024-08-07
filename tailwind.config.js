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
      fontSize: {
        '1.5xl': '1.45rem',
        '4.5xl': '2.6rem'
      },
      lineHeight: {
        '11': '2.75rem'
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
  plugins: []
}

