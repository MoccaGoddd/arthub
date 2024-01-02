/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html", "./pages/*.html", ".src/script/*.js"],
  theme: {
    extend: {
      colors: {
        main: "#4F200D",
        second: "#FF8400",
        third: "#FFDA3E",
        bg: "#F6F1E9",
      },
      fontFamily: {
        'awikwok': ['Poppins'],
      }
    },
  },
  plugins: [],
};
