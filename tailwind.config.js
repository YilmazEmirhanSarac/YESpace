/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  safelist: [
    'text-primary',
    'bg-primary',
    'border-primary',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#37368A",
        defaultText: "#1E1E1E",
        whiteText: "#F5F5F5",        
        backgroundGray: "#E3E3E3",
        border: "#767676"
      }
    },
  plugins: []
  },
}
