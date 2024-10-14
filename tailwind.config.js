/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'primaryColor': '#1C64FE',
        'secondaryColor' : '#f8fbff',

        'lightModePrimary': '#1B84FF',
        'thirdColor' : '#f8fbff',
        'fourthColor' : '#f8fbff',

        'textColor':'#252F4A',
        'darkTextColor':'#878a99',

        'butonColor': '#878a99',
        'darkTheme': '#878a99',
        'lightTheme': '#F1F1F4',

        'cardColor': '#878a99',
        'darkCardColor': '#878a99',

        'darkForm': '#f8fbff',
        'lightForm': '#f8fbff',

         'cardColor': '#FFFFFF',
         'darkCardColor': '#313131',

         'gray900':'#071437',
         'gray700':'#4B5675',
         'gray800': '#252F4A',


      },
    },
  },
  plugins: [],
}