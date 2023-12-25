/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        workSans: ['Work Sans', 'sans-serif'],
      },
      colors: {
        primary: '#FF42A5',
        secondary: '#8758F1',
      },
    },
  },
  plugins: [],
};
