/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        chit: {
          primary: '#FFD600',
          background: '#161309',
          surface: '#272418',
          'surface-deep': '#2E2A1E',
          cream: '#EAE2CF',
          sand: '#D0C6AB',
          muted: '#778598',
          border: '#44474C',
        },
      },
    },
  },
  plugins: [],
};
