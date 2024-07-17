/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0px 30px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

