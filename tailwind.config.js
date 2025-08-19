/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-red": "#CD291E",
        "accent-yellow": "#FDB912",
        "light-white": "#FFF9EE",
        "custom-grey": "#231F20",
        "dark-green": "#316131",
        "text-grey": "#b0b0b0",
      },
      fontFamily: {
        'lilita': ['Lilita One', 'cursive'],
        'garamond': ['adobe-garamond-pro', 'serif'],
        'din-condensed': ['din-condensed-web', 'sans-serif'],
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
} 