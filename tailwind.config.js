/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deep: "#020617",
        surface: "#0f172a",
        cyan: "#22d3ee",
        purple: "#a78bfa"
      },
      boxShadow: {
        glow: "0 0 20px rgba(34,211,238,0.4)"
      }
    }
  }
};
