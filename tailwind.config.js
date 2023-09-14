/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1db954',
        accentPrimary: '#064d1f',
        text: '#535353',
        bg: '#fff',
      },
      fontFamily: {
        signika: ['Signika', 'sans-serif'],
      },
    },
    plugins: [],
  },
}
