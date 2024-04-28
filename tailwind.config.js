/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // For forms
    require('@tailwindcss/typography'), // For typography
    require('@tailwindcss/aspect-ratio'), // For aspect ratio
    require('@tailwindcss/line-clamp'), // For line clamp
    // Add more plugins as needed
  ],
}
