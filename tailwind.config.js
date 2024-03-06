/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          '500': '#d175b6',
          '600': '#ce73b3',
          '700' : '#e100ff'
        },
      },
    },
  },
  plugins: [],
}

