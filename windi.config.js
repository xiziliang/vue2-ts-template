const colors = require("windicss/colors");

module.exports = {
  darkMode: "class", // or 'media'
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  shortcuts: {
    btn: "inline py-2 px-4 font-semibold rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition-all",
    "btn-green": "text-white bg-green-500 hover:bg-green-700",
  },
};
