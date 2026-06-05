/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cosmos: { DEFAULT: '#0B0F19', deep: '#1A102F', mid: '#0F1628' },
        orange: { hot: '#FF5722', ember: '#E64A19', glow: '#FF7043', amber: '#FFAB40' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
