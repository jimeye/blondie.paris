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
        'sans': ['Garamond Normal', 'Times New Roman', 'Times', 'serif'],
        'lilita': ['Lilita One', 'cursive'],
        'garamond-light': ['Garamond Normal', 'Times New Roman', 'Times', 'serif'],
        'garamond-medium': ['Garamond Normal', 'Times New Roman', 'Times', 'serif'],
        'garamond-regular': ['Garamond Normal', 'Times New Roman', 'Times', 'serif'],
        'garamond-bold': ['Garamond Normal', 'Times New Roman', 'Times', 'serif'],
        'din-condensed': ['Neue Helvetica Condensed BQ', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
        '1200': '1200ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-out-left': 'slideOutLeft 2s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
} 