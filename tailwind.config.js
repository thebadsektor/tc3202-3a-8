/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your React components
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1DA1F2",
        brandGray: "#657786",
      },
    },
  },
  darkMode: "class", // 'class' for manual dark mode toggling
  plugins: [],
};
