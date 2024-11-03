module.exports = {
  jit: true,
  content: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
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
