/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a1214",
          900: "#0f1c1f",
          800: "#153035",
          700: "#1e454c",
          600: "#2a5c66",
        },
        tide: {
          400: "#3db8b0",
          500: "#2a9d96",
          600: "#1f7f7a",
          700: "#186560",
        },
        copper: {
          400: "#d4895a",
          500: "#c46f3d",
          600: "#a85a2f",
        },
        mist: {
          50: "#f4f7f7",
          100: "#e8efef",
          200: "#d2e0e0",
          300: "#b3c5c5",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["IBM Plex Sans", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
