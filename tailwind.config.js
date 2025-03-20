/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your React components
  ],
  theme: {
    extend: {
      colors: {
        creamywhite: "#FFFDFA",
        softblack: "#333333",
        brandBlue: "#1DA1F2",
        brandGray: "#657786",
      },
      fontFamily: {
        inter: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  darkMode: "class", // 'class' for manual dark mode toggling
  plugins: [],
};
