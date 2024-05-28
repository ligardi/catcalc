/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans 18pt"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}