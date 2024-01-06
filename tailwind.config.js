/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { max: "480px" },
      sm: "480px",
      lg: { max: "1440" },
    },
    extend: {
      borderRadius: {
        "3xl": "20px",
      },
      borderWidth: {
        3: "3px",
      },
      colors: {
        grey: "rgba(255, 255, 255, 0.50)",
        orange: "#FF9B33",
        lightOrange: "#FFD25F",
        darkOrange: "#FF5C01",
      },
    },
  },
  plugins: [],
};
