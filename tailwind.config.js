/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(50%)'
          },
          to: {
            transform: 'translateX(-50%)'
          }
        }
      },
      animation: {
        marquee: 'marquee 10s linear infinite'
      }
    },
  },
  plugins: [],
};