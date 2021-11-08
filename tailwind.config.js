const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Roboto Condensed", "sans-serif"],
    },
    colors: {
      gray: colors.trueGray,
      indigo: colors.indigo,
      purple: colors.purple,
      transparent: "transparent",
      white: "white",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
