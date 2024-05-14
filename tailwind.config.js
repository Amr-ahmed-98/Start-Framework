/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        'torquaze-color':'#1ABC9C',
        'torquaze-color-low-opacity':'#1abc9ccf',
        'offcanvas-bg':'rgba(51, 65, 85, 0.361)',
      }
    },
  },
  plugins: [],
}

