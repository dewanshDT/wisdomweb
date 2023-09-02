/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#FEFCF4',
        'primary-400': '#F1C12B',
        'primary-600': '#A9871E',
        'neutral-black': '#121317',
        'neutral-grey': '#404555',
        'neutral-divider': '#DCDEE5',
        'neutral-charcoal': '#606880',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
