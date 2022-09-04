module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        "cyan-grey": "#2e3131",
        "cyan-lightgrey": "#aeaeae"
      },
      fontSize: {
        "4xl": "2rem"
      },
      margin: {
        "0.5": "0.5rem",
        "0.1": "0.06rem"
      },
      height: {
        "150": "35rem"
      },
      width: {
        "0.75": "0.15rem",
        "100": "49.5rem",
        "150": "35rem"
      },
      transitionProperty: {
        "left": "left",
        "height": "height",
        "top": "top"
      },
      animation: {
        "blink": "blink 1.5s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: 0 }
        }
      }
    },
    fontFamily: {
      openSans: "Open Sans"
    }
  },
  plugins: []
}
