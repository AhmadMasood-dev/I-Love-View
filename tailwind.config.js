/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EF1919",
        secondary: "#4D4D4D",
        blue:"#196FEF"
      },
    },
  },
  plugins: [],
};
