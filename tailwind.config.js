/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        one: "#f3f7fb",
        two: "#e4ebf5",
        three: "#cfddee",
        four: "#9ebcdc",
        five: "#87aad3",
        six: "#6b8fc6",
        seven: "#5877b8",
        eight: "#4d66a8",
        nine: "#43558a",
        ten: "#3a486e",
        eleven: "#272d44",
        creamyWhite: "#FFFDFA",
        softBlack: "#414a4c",
      },
      fontFamily: {
        narrAIte: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
