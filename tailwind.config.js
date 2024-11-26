/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary-color":"#FF5A5F",
        "secondary-color":"#f7f7f7",
    }
    },
  },
  plugins: [],
};
