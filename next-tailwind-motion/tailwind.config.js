/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "conic-red": {
          stop1: "#833ab4",
          stop2: "#fd1d1d",
          stop3: "#fcb045",
        },
        "conic-blue": {
          stop1: "#2192FF",
          stop2: "#38E54D",
          stop3: "#FDFF00",
        },
      },
      animation: {},
    },
  },
  plugins: [],
};
