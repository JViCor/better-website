// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",        // deep black
        ivory: "#F9F9F6",      // soft off-white
        sage: "#8DAA91",       // botanical green accent
        moss: "#B8C9A8",       // lighter green
        charcoal: "#2C2C2C",   // dark gray contrast
      },
    },
  },
  plugins: [],
};
