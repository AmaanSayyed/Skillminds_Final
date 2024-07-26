/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins:{
    preflight: false,
  },
  prefix: 'tw-', // Add this line to scope Tailwind CSS
  important: true,
  theme: {
    extend: {
      boxShadow: {
        'custom': '4px 5px 5px -1px rgba(0, 0, 0, 0.1), -2px 2px 4px 2px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}

