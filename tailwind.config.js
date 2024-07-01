/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["NewYork", "sans-serif"],
      body: ["SFPro", "sans-serif"],
    },
    extend: {
      textColor: "#333333",
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "768px",
            margin: "auto",
            h4: {
              color: "darkcyan",
            },
            img: {
              position: "relative",
              cursor: "zoom-in",
              transition: "all 0.5s ease",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
