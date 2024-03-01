/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '300px': '300px',
        '500px': '500px',
        '3px': '3px',
        '2px': '2px',
      },
      fontFamily: {
        'arial': 'Arial'
      },
      colors: {
        'body': '#19181C',
        'card': '#272627',
        'input': '#413F47'
      }
    },
  },
  plugins: [],
}

