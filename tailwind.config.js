/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a',
        light: '#ffffff',
        primary: '#ff4a57',
        secondary: '#a0aec0',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
}