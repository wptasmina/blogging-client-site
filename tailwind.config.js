//** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ Moved this outside of theme.extend
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        'roboto': ['"Roboto Condensed"', 'serif'],
      },
      backgroundImage: {
        bannerImg: "url('/subscribe.png')",
        blogImg: "url('/blog-1.png')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
