/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        spacing: {
          '7.5': '1.875rem',
          '12.5': '3.125rem',
          '17.5': '4.375rem',
          '25': '6.25rem',
          '30': '7.5rem',
        },
        colors: {
          LogisencePrimary: '#5D8BCF', // Primary text color: oklch(.546 .245 262.881)
          LogisenceSecondary: '#4F6B9A', // Secondary/small text color: oklch(.379 .146 265.522)
        },
      },
    },
    plugins: [],
  };