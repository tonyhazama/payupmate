/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "winter"
      // {
      //   mytheme: {
      //     "primary": "#a0b6e8",
      //     "secondary": "#7bad1f",
      //     "accent": "#ffd84c",
      //     "neutral": "#1B161D",
      //     "base-100": "#E6E4E7",
      //     "info": "#218AF2",
      //     "success": "#24B277",
      //     "warning": "#F6B309",
      //     "error": "#E23C57",
      //   },
      // },
    ],
  }
};
