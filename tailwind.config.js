/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: '#AF17D5',
        uploadBackground: '#1E1E1E',
        
      },
    },
  },
  plugins: [],
};
