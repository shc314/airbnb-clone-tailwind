/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '550px',
      'md': '744px',
      'lg': '950px',
      'xl': '1128px',
      '2xl': '1640px',
    },
    extend: {
      colors: {
        brand: "#ff385c",
      },
    },
  },
  plugins: [],
}
