/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        // Menambahkan breakpoint kustom bernama 'iphone'
        'iphone': '428px',
      },
    },
  },
  plugins: [],
}