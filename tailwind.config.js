/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "custom-Pale-blue": "hsl(225, 100%, 94%)",
        "custom-Bright-blue": "hsl(245, 75%, 52%)",
        "custom-Very-pale-blue": "hsl(225, 100%, 98%)",
        "custom-Desaturated-blue": "hsl(224, 23%, 55%)",
        "custom-Dark-blue": "hsl(223, 47%, 23%)"
      },
      fontFamily: {
        // font-family: 'Red Hat Display', sans-serif;
        "Red-Hat-Display": ["Red Hat Display", "sans-serif"]
      },
      screens:{
        "desktop":"376px"
      }
    },
  },
  plugins: [],
}

