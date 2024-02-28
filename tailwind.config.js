/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '300px': '300px',
        '500px': '500px',
        '3px': '3px'
      },
      fontFamily: {
        'arial': 'Arial'
      }
    },
  },
  plugins: [],
}

