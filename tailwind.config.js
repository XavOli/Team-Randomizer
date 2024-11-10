module.exports = {
  jit: true,
  content: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#1B1A55',
        secondary: '#070F2B',
        tertiaryDark: '#535C91',
        tertiaryLight: '#9290C3',
      },
      backgroundImage: {
        volley: "url('../img/volleyball.jpg')",
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
