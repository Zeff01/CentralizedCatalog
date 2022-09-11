/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "cursive"],
        Contrail: ["Contrail One", "cursive"]
      },
      colors:{
        background: '#f4f4f4'
      }
    },
  },
  plugins: [],
}
