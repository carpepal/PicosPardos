const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    screens:{
      tablet: '950px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
