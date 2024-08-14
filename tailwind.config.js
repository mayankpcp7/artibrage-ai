/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#1E1F27",
        "dark-sky-blue": "#103852",
        "light-sky": "#00A4FF",
        "off-white": "#F6F6F6",
      },
      fontSize: {
        lg: "22px",
        "custom-2xl": "28px",
        "3xl": "36px",
      },
      fontFamily: {
        inter: ["Inter"],
        lato: ["Lato"],
        roboto: ["Roboto"],
        oxygen: ["Oxygen"],
        oxanium: ["Oxanium"],
      },
      lineHeight: {
        113: "113%",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow-darkblue": {
            textShadow: "0px 4px 25px 0px #00A4FF",
          },
          ".text-shadow-skyblue": {
            textShadow: "0px 4px 25px 0px #00A4FF",
          },
          ".text-shadow-white": {
            textShadow: "0px 1.33px 33.3px 0px #FFFFFF",
          },
          ".text_shadow_blue": {
            textShadow:
              "0px 0px 20px 0px #00BFFF, 0px 0px 20px 0px #00BFFF, 0px 0px 0px 0px #00BFFF, 0px 0px 0px 0px #00BFFF, 0px 1px 0px 0px #00BFFF, 0px 1px 0px 0px #00BFFF",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
