/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
// https://colorhunt.co/palette/dddddd22283130475ef05454
module.exports = {
  darkMode: 'class',
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      'mobile-s': '320px',
      'mobile-m': '375px',
      'mobile-l': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'laptop-l': '1440px',
    },
    colors: {
      "primary": "#F05454",
      "primary-hover": "#fd3a4a",
      "secondary": "#30475E",
      "seconday-hover": "#00416a",
      "default": "#FFFFFF",
      "default-hover": "#525252",
      "black": "#000000",
      "white": "#FFFFFF",
      "off-white": "#DDDDDD",
      "gray-darker": "#3B3B3B",
      "gray-lighter": "#525252",
      "gray-placeholder": "#8f8f8f",
      "danger": "#FF0000",
      ...colors,
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
