const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          10: "#d7d7d7",
          20: "#bdbdbd",
          30: "#9c9c9c",
          40: "#7b7b7b",
          50: "#5a5a5a",
          base: "#393939",
          60: "#303030",
          70: "#262626",
          80: "#1d1d1d",
          90: "#131313",
          100: "#0b0b0b",
          DEFAULT: "#393939",
        },
        gray: {
          10: "#f7f7f7",
          20: "#f1f1f1",
          30: "#ebebeb",
          40: "#e4e4e4",
          50: "#dddddd",
          base: "#d6d6d6",
          60: "#b2b2b2",
          70: "#8f8f8f",
          80: "#6b6b6b",
          90: "#474747",
          100: "#2b2b2b",
          DEFAULT: "#d6d6d6",
        },
        green: {
          10: "#cee7ea",
          20: "#add6dc",
          30: "#84c2cb",
          40: "#5baeba",
          50: "#3299a8",
          base: "#098597",
          60: "#086f7e",
          70: "#065965",
          80: "#05434c",
          90: "#032c32",
          100: "#021b1e",
          DEFAULT: "#098597",
        },
      },
      backgroundColor: {
        "black-90": "hsl(0deg, 0%, 7%)"
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, hsl(188deg, 89%, 10%), hsl(188deg, 89%, 31%))"
      },
      fontFamily: {
        "primary": ['"SF Pro Display"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
