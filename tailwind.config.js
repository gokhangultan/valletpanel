/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#f8fbff',
        'secondaryColor' : '#f8fbff',

        'thirdColor' : '#f8fbff',
        'fourthColor' : '#f8fbff',

        'textColor':'#878a99',
        'darkTextColor':'#878a99',

        'butonColor': '#878a99',
        'darkTheme': '#878a99',
        'lightTheme': '#878a99',

        'cardColor': '#878a99',
        'darkCardColor': '#878a99',

        'darkForm': '#f8fbff',
        'lightForm': '#f8fbff',
         

      },
    },
  },
  plugins: [],
}