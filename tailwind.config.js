/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'color-bg-marron' : '#261A17',
        'text-color-gris': '#D0D8D9',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

