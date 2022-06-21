/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        serif: ["Inter var", "serif"],
        mono: ["monospace"],
      },
    },
    plugins: [],
  },
};
