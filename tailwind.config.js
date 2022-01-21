const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const { join } = require("path");

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      // create custom fonts here
      fontFamily: {
        heading: ["'Barlow Condensed'", ...defaultTheme.fontFamily.mono],
        mono: ["'Barlow'", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        "danger-900": "hsl(0, 100%, 68%)",
        "fill-900": "hsl(230, 29%, 20%)",
        "fill-800": "hsl(230, 11%, 40%)",
        "fill-700": "hsl(231, 7%, 65%)",
        "fill-600": "hsl(207, 33%, 95%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1440px",
        },
      });
    }),
  ],
};
