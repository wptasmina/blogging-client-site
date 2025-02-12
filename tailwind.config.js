/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      FontFamily: {
        'Roboto': ['"Roboto Condensed", serif']
      },
      backgroundImage: {
        bannerImg:  "url('/banner.png')",
        blogImg:  "url('/blog-1.png')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
