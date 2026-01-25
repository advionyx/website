/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['PolySans', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          900: '#3E5F9B',
          800: '#3F6CB9',
          700: '#4078D6',
          600: '#4184F1',
          500: '#5292F6',
          400: '#89B4F9',
          300: '#AECCFA',
          200: '#CDE0FB', // pastel start
          100: '#E9EFFE',
          50:  '#F3F8FE',
        },
        neutral: {
          900: '#1E1E1E',
          800: '#323232',
          700: '#606060',
          600: '#8D8D8D',
          500: '#BABABA',
          400: '#E6E6E6',
          300: '#ECECEC',
          200: '#F0F0F0',
          100: '#F5F5F5',
          50:  '#FAFAFA',
          5:   '#FCFCFC',
        },
        danger: {
          700: '#EB2D2F',
          600: '#F55050',
          500: '#EB6F71',
          400: '#F49998',
          300: '#FFCCD1',
          200: '#FFEBED',
          100: '#FEF2F2',
          50:  '#FFFCFA',
        },
        warning: {
          700: '#FD9B10',
          600: '#FCBE2B',
          500: '#FEDD84',
          400: '#FEEAB3',
          300: '#FFF7E2',
          200: '#FEFAEE',
          100: '#FEFDFA',
        },
        success: {
          700: '#0C9E60',
          600: '#4BB985',
          500: '#6BC498',
          400: '#97D4B3',
          300: '#C0E6D1',
          200: '#E5F5EB',
          100: '#F1FAF5',
        },
      },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0, transform: 'translateY(6px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
    animation: {
      fadeIn: 'fadeIn 300ms ease-out',
    },
      boxShadow: {
        glow: '0 0 0 1px rgba(64,120,214,0.10), 0 18px 60px rgba(16,75,177,0.10)',
      },
    },
  },
  plugins: [],
}
