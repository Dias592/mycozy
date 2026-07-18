/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        plaster: '#EDE7DC',
        linen: '#F7F3EA',
        ink: '#2E2A24',
        sand: '#8A8070',
        moss: {
          DEFAULT: '#4B5D45',
          dark: '#354029',
        },
        sienna: {
          DEFAULT: '#A6512F',
          light: '#C97A54',
        },
        line: '#DCD4C4',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
