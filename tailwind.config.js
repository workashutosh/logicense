/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          LogisencePrimary: '#5D8BCF', // Primary text color: oklch(.546 .245 262.881)
          LogisenceSecondary: '#4F6B9A', // Secondary/small text color: oklch(.379 .146 265.522)
        },
      },
    },
    plugins: [],
  };