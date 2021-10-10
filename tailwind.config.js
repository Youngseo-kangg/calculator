module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      mobile: '320px',
      tablet: '640px',
      laptop: '1024px',
    },
    minHeight: {
      568: '568px',
    },
    minWidth: {
      320: '320px',
      330: '330px',
    },
    fontFamily: {
      display: ['LAB디지털', 'ui-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
