const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
      },
      spacing: {
        138: "42rem",
        "0.875rem": "0.875rem",
        "1.4rem": "1.4rem",
      },
      fontSize: {
        "1.75rem": "1.75rem",
        "2.5rem": "2.5rem",
        "100%": "100%",
      },
      lineHeight: {
        1.1: "1.1",
      },
      maxWidth: {
        "310px": "310px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
