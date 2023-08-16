/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1440px'
      }
    }
  },
  plugins: []
};
