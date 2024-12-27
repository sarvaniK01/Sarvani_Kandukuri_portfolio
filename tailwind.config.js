/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#FFFBFB',
      'black': '#362A2A',
      'blue': '#12ABC5',
      'lightBlue': '#9ECED6',
      'pRed': '#C61F3C',
      'green': '#11B555',
      'yellow': '#E69919',
      'wss': '#39A4E6',
      'ec': '#255FCD',
      'grey':'#D9D9D9'
    },
    fontFamily: {
      baskerville: ['Libre Baskerville', 'serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'rampReady': "url('/projects/rampReady.webp')",
        'netflixClone': "url('/projects/netflixClone.webp')",
      }
    },
  },
  plugins: [],
}

