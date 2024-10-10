import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'scale(0.1)' },
          to: { opacity: 0, transform: 'scale(1)' },
        },
        fadeOut: {
          from: { opacity: 1, transform: 'scale(1)' },
          '60%': { opacity: 0.8 },
          '30%': { opacity: 0.4 },
          to: { opacity: 0.1, transform: 'scale(0.1)' },
        },
        showMain: {
          from: { opacity: 0, transform: 'scale(0.4)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
        hideMain: {
          from: { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0, transform: 'scale(1)' },
          to: { opacity: 0, transform: 'scale(0.8)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        showMain: 'showMain 0.3s ease-out forwards',
        hideMain: 'hideMain 0.3s ease-out forwards',
        fadeOut: 'fadeOut 0.3s ease-out forwards',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: ['light'],
  },
  plugins: [typography, daisyui],
}
