const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        report: 'var(--color-report)',

        exercise: 'var(--color-exercise)',
        play: 'var(--color-play)',
        "self-care": 'var(--color-self-care)',
        social: 'var(--color-social)',
        study: 'var(--color-study)',
        work: 'var(--color-work)',

        "neutral-blue": {
          200: 'var(--color-neutral-blue-200)',
          300: 'var(--color-neutral-blue-300)',
          350: 'var(--color-neutral-blue-350)',
          400: 'var(--color-neutral-blue-400)',
          500: 'var(--color-neutral-blue-500)',
        }
      },
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
