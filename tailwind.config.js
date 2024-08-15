/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dots': 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)'
      },
      backgroundSize: {
        'dots': '20px 20px'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(17,24,39)",
        myShadow2: "-4.1px -5px 0 0 rgb(17,24,39)",
      },
      colors: {
        primary: '#1a202c',  // replace with your primary color
        secondary: '#2d3748',  // replace with your secondary color
      },
      zIndex: {
        100000: 100000,
        99999: 99999,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        'night-sky': 'linear-gradient(180deg, #000a1a, #000a1a, #000a1a)', // Customize the colors as needed
        'dark-blue': 'linear-gradient(180deg, #002a54, #003366, #002a54)'


      },
    },
  },
  plugins: [],
}
