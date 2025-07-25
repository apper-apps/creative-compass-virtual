/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0EEFF',
          100: '#E1DEFF',
          200: '#C7BEFF',
          300: '#A89AFF',
          400: '#8C73FF',
          500: '#5B4FE5',
          600: '#4A3ED4',
          700: '#3B2FB0',
          800: '#2E248A',
          900: '#241C6B'
        },
        coral: {
          50: '#FFF5F5',
          100: '#FFEBEB',
          200: '#FFD1D1',
          300: '#FFB1B1',
          400: '#FF8A8A',
          500: '#FF6B6B',
          600: '#FF4545',
          700: '#E53E3E',
          800: '#C53030',
          900: '#9B2C2C'
        },
        turquoise: {
          50: '#F0FFFE',
          100: '#CCFFFE',
          200: '#99F6F6',
          300: '#66EDED',
          400: '#4ECDC4',
          500: '#38B2AC',
          600: '#319795',
          700: '#2C7A7B',
          800: '#285E61',
          900: '#234E52'
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        }
      }
    },
  },
  plugins: [],
}