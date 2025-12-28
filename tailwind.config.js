/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      // colors: {
      //   primary: '#1E40AF',
      //   secondary: '#FBBF24',
      // },
    },
  },
  plugins: [],
}
