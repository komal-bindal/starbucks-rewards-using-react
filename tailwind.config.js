const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        100: "#f1f8f6",
        200: "#d4e9e2",
        300: "#008248",
        400: "#1e3932",
      },
      secondary: "#f3f1e7",
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      gold: "#CBA258",
    },
    fontFamily: {
      sans: "'Helvetica Neue','Helvetica','Arial','sans-serif'",
    },
    extend: {
      backgroundImage: {
        image: "url('./images/hero-mobile_2021.webp')",
      },
      fontSize: {
        4.25: "19px",
        3.25: "13px",
        7: "28px",
      },
      maxWidth: {
        "1/2": "50%",
        "1/4": "25%",
        "2/5": "40%",
        "1/3": "33.33%",
        54: "216px",
      },
      boxShadow: {
        top: "0px 0 10px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
