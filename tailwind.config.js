/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#1E6B45',
          hover: '#165934',
          dim: 'rgba(30, 107, 69, 0.06)',
          gold: '#C9A84C',
          text: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}