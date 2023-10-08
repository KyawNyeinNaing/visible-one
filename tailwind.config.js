/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2DC4EA",
        green: "#3AE7AB",
        red: "#EA1A25",
        white: "#FFFFFF",
        gray: "#EBEBEB"
      }
    },
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "max-lg": { max: "1024px" },
      "max-md": { max: "992px" },
      "max-sm": { max: "768px" },
      "max-xs": { max: "375px" }
    }
  },
  plugins: []
};
