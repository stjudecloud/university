const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: "#002856",
        purple: "#7531FF",
        orange: colors.orange,
        teal: colors.teal,
        coolGray: colors.coolGray,
      },
      fontFamily: {
        sans: ['"St. Jude Sans"'],
      },
      spacing: {
        320: "320px",
        480: "480px",
        640: "640px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
