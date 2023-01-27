/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 0px 4px rgba(0, 0, 0, 0.25)",
      },
      translate:{
        'center':'-50%'
      },
      backgroundImage:{
        'abs':"url(./assets/epigastrium-highlight.png)",
      },
      fontFamily:{
        header:['Noto Sans Thai']
      },
      screens:{
        '400':'400px',
        '500':"500px",
        normal:"600px"
      }
    },
  },
  plugins: [],
};
