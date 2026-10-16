/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F3ECE9',
        ink: '#240E10',
        enzeta: '#0361FB',
        orange: '#F58720',
        lime: '#CDE635',
        lilac: '#C2C0F2',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 40px rgba(36, 14, 16, 0.12)',
      },
    },
  },
  plugins: [],
};
