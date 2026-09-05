/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#07110D',
          card: '#0D1B15',
          border: '#1F3A2E',
          silver: '#94A3B8',
          offwhite: '#E2E8F0',
          accent: '#10B981',
          gold: '#F59E0B',
          goldDark: '#D4AF37',
        }
      }
    },
  },
  plugins: [],
}
