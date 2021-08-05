module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: { center: true },
    extend: {
      colors: {
        brand: {
          gray: '#58585a',
          red: '#ed1c24',
          darkRed: '#991b1e',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
