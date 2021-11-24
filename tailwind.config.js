const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'blue',
        gray: colors.trueGray,
      },
      screens: {
        print: { raw: 'print' },
        // => @media print { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
