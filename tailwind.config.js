/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'display': ['Roboto Mono', 'sans-serif'],
      'body': ['Proxima Nova','sans-serif'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'Roboto Mono'
            },
            h2: {
              fontFamily: 'Roboto Mono'
            },
            h3: {
              fontFamily: 'Roboto Mono'
            },
          }
        }
      }
    },
  },
  // plugins: [],
  plugins: [require('@tailwindcss/typography')],
}
