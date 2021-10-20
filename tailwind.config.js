const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx,css}', './public/index.html'],
    safelist: [
      'bg-exercise',
      'bg-play',
      'bg-self-care',
      'bg-social',
      'bg-study',
      'bg-work',
      'bg-img-exercise',
      'bg-img-play',
      'bg-img-self-care',
      'bg-img-social',
      'bg-img-study',
      'bg-img-work',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'img-exercise': 'url("./assets/images/icon-exercise.svg")',
        'img-play': 'url("./assets/images/icon-play.svg")',
        'img-self-care': 'url("./assets/images/icon-self-care.svg")',
        'img-social': 'url("./assets/images/icon-social.svg")',
        'img-study': 'url("./assets/images/icon-study.svg")',
        'img-work': 'url("./assets/images/icon-work.svg")',
      },
      backgroundPosition: {
       'right-above-top' : 'right top -9px',
      },
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
      },
      gridTemplateColumns: {
        "user-report": 'auto 1fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
