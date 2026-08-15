/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#07110D',
          card: '#0D1B15',
          border: '#1F3A2E',
          accent: '#10B981',
          gold: '#F59E0B',
        }
      }
    },
  },
  plugins: [],
}
