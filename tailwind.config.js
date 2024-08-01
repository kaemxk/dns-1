import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '990px',
      'xl': '1200px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [typography, daisyui],
}
