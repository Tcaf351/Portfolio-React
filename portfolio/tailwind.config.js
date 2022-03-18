module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1800px',

      '4xl': '2100px',

      '5xl': '2350px',

      '6xl': '2700px',
      
      '7xl': '3100px',
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        }
      }
    }
  },
  plugins: [],
}
