/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f0e0d',
        cream: '#f5f0e8',
        warm: '#e8dcc8',
        amber: '#c8832a',
        'amber-light': '#e8a840',
        rust: '#9e3b1f',
        sage: '#5a7a5c',
        muted: '#7a7268',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
