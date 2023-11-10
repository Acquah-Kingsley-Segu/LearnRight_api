/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/images/bg.jpg')",
        logo: "url('/src/images/logo.png)",
        404: "url('/src/images/404.svg)"
      },
    },
  },
  plugins: [],
};
