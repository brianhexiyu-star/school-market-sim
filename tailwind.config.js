/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB'
        },
        positive: '#10B981'
      }
    },
  },
  plugins: [],
}
