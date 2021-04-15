module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      epilogue: "Epilogue, sans-serif",
      rubik: "Rubik, sans-serif",
      barlow: "Barlow, sans-serif"
    },
    extend: {
      backgroundImage: {
        banner: "url('/images/banner.png')"
      }
    },
    colors: {
      current: "currentColor",
      primary: "#f05e45",
      secondary: "#202020",
      white: "#ffffff",
      "black-transparent": "rgba(3, 3, 3, 0.09)",
      gray: "#4d4d4d",
      grey: "#bcbcbc"
    },
    height: {
      banner: "450px"
    }
  },
  variants: {
    extend: {
      filter: ['hover'],
      brightness: ['hover']
    },
  },
  plugins: [],
}
