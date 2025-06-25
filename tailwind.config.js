// tailwind.config.js
module.exports = {
  darkMode: 'class', // ← CRITICAL
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
