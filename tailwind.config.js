import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'pt-sans': ['PT Sans', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      brownFont: '#333',
      orangeFont: '#fc8507',
      greyFont: '#8c8c8c',
    },
    extend: {
      boxShadow: {
        tile: '0 1px 2px #00000029',
        btn: '0 0 0 3px #00000008',
      },
      gridTemplateRows: {
        tile: '22px min-content auto 44px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [typography, daisyui],
}
