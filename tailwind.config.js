/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'industrial': {
          'dark': '#1a1a1a',
          'gray': '#2d2d2d',
          'light': '#404040',
          'yellow': '#f59e0b',
          'blue': '#3b82f6',
        },
      },
      fontFamily: {
        'arabic': ['Tajawal', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}