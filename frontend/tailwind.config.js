const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./index.html",
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      fontSize: {
        xs: ["0.813rem", "1rem"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "pale-green": "#CFE6FF",      // was: #CDEBDC
      "light-green": "#63A4FF",     // was: #29BC68
      "lighter-green": "#E3F4FE",   // was: #EBF7EF
      green: "#1976D2",             // was: #00994C
      "dark-green": "#1561AC",      // was: #1C7D45
      "darkest-green": "#004BA0",   // was: #007F36

      "light-blue": "#53A2FF",
      blue: "#006BE8",
      orange: "#E5A800",
      yellow: "#FFE8B8",
      "dark-yellow": "#997700",
      white: "#FFFFFF",
      "off-white": "#F2F2F2",
      black: "#000000",
      gray: "#BDBDBD",
      "dark-gray": "#6B6B6B",
      "very-dark-gray": "#4F4F4F",
      "light-gray": "#f3f4f6",
      "light-gray-stroke": "#dfdfdf",
      "avail-green": "#2196F3",      // was: colors.emerald
      red: "#DB1616",
    },
    screens: {
      sm: "640px",
      md: "768px",
      mdlg: "896px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
  prefix: "tw-",
  safelist: [],
}
