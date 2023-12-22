/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray-light': 'rgb(251, 250, 254)',
      'blue': 'rgb(19, 85, 107)',
      'red': 'rgb(204, 106, 95)',
      'yellow': '#E3D26F',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Eczar', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [require("daisyui")],
}

