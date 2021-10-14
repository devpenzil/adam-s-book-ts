module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      green : {
        appgreen: '#BDFFFD',
        appgreendark : '#0B8E8A'
      },
      base : {
        white : '#ffffff',
        black : "#000000",
        blue : "#0000FF",
        red : "#FF0000",
        transparent : "#00FFFFFF"
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
