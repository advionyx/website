/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        ink: {
          950: '#05070a',
          900: '#0a0f14',
          800: '#101924',
          700: '#1b2837'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 20px 80px rgba(0,0,0,0.6)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        floaty: 'floaty 8s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
