/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
      OpenSans: ["Open Sans", "sans-serif"],
    },
    colors: {
      primary: {
        DEFAULT: "#F9F1DB",
        100: "#F9F1DB",
        200: "#F3DFB5",
        300: " #EBC986",
        400: "#E5B367",
        500: "#DB9234",
        600: "#CD7A29",
      },
      secondary: {
        DEFAULT: "#DDE2FF",
        100: "#DDE2FF",
        200: "#C2CAFF",
        300: " #9CA6FF",
        400: "#7577FF",
        500: "#6C63FF",
        600: "#6C63FF",
      },
      background: "#FFFFFF",
      white: "#F8F8F8",
      black: "#3B3B3B",
      error: "#E33A3A",
      sucess: "#47CB54",
      warning: "#47CB54",
    },
    extend: {
      backgroundColor: {
        "blue-500": "rgb(59 130 246)",
        "blue-700": "rgb(29 78 216)",
        "blue-800": "rgb(30 64 175)",
      },
      colors: {
        blueLight: "#243c5a",
        grayregal: "#9E9C9C",
        "blue-200": "rgb(191 219 254)",
        "blue-400": "rgb(96 165 250)",
        "red-500": "rgb(239 68 68)",
        "gray-300": "rgb(209 213 219)",
        "gray-400": "rgb(156 163 175)",
        "gray-700":"rgb(55 65 81)",
        "gray-900":"rgb(17 24 39)",
        'indigo-500':"rgb(99 102 241)"
      },
      dropShadow: {
        "3xl": "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        "4xl": "0 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      lineHeight: {
        space: "2.6rem",
        "extra-space": "3.5rem",
      },
    },
  },
  plugins: [],
};
