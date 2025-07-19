/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        ivory: '#F9F9F6',
        sage: '#8DAA91',
        moss: '#B8C9A8',
        charcoal: '#2C2C2C',
      },
    },
  },
  plugins: [],
};
