/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'split-black-gray': "linear-gradient(to left, #fafafa 50%, #2C272E 50%)"
      },
      backgroundColor: {
        'custom-gray': "#2C272E",
        'custom-white': "#fafafa",
        'custom-purple': "#753188",
        'custom-orange': "#e59934"
      },
      colors: {
        'custom-orange': '#E59934',
        'custom-white': "#fafafa",
        'custom-purple': "#753188",
        'custom-gray': "#2C272E"
      }
    },
  },
  plugins: [],
}
