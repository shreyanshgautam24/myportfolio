/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Tell Tailwind to scan all files in the src directory for class names
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add custom radial gradient utility
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}