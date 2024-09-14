/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0147FF",
        primaryhover: "#0124bf",
        textcolor: "#1D1D1B",
        secondary: "#282828",
      },
      fontSize: {
        headerhero: [
          "76.29px",
          {
            lineHeight: "83.92px",
            letterSpacing: "-0.04em",
          },
        ],
        btntext: [
          "15px",
          {
            lineHeight: "22.5px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        blueTextSize: [
          "21.5px",
          {
            lineHeight: "32.25px",
            fontWeight: "400",
          },
        ],
        seoHeaderSize: [
          "25px",
          {
            lineHeight: "37.5px",
            fontWeight: "400",
            letterSpacing: "-0.03em",
          },
        ],
        headerGallery: [
          "40px",
          {
            lineHeight: "48px",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
