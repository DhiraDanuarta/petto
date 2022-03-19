module.exports = {
  content: ['./public/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: ['#FF539D'],
        black: ['#1d1d1d'],
        grey: ['#686868'],
        grey2: ['#F4E5FF'],
        secondary: ['#9758EF'],
        lightgrey: ['#D2CED8'],
      },
      boxShadow: {
        blabla: '0px 12px 30px 0px rgba(255, 83, 157, 0.3)',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
