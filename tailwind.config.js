/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(236.97deg 40.41% 51.96%)',
      },
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}