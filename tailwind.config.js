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
    }
  },
  darkMode: "class",
  plugins: [],
}

