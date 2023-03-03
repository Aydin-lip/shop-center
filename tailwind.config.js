/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: {
      'red-dark-100': '#DD0426',
      'red-dark-200': '#C10421',
      'red-dark-300': '#A6031D',
      'red-dark-400': '#8A0318',
      'red-dark-500': '#6F0213',
      'red-dark-600': '#53020E',
      'red-dark-700': '#37010A',
      'red-dark-800': '#1C0105',
      'red-light-100': '#FEDCE1',
      'red-light-200': '#FEB9C4',
      'red-light-300': '#FD96A6',
      'red-light-400': '#FC7389',
      'red-light-500': '#FC506B',
      'red-light-600': '#FB2D4D',
      'red-light-700': '#FB0A30',
      'red-light-800': '#DD0426',
      'dark-50': '#F6F6F6',
      'dark-100': '#E4E4E4',
      'dark-200': '#A7A7A7',
      'dark-300': '#C3C3CE',
      'light-100': '#7F7F7F',
      'light-200': '#424242',
      'light-300': '#242323',
      'light-400': '#F1F1F1',
      'container': '#FFFFFF',
      'form': 'rgba(246, 246, 246, 0.8)',
    },
    colors: {
      'red-dark-100': '#DD0426',
      'red-dark-200': '#C10421',
      'red-dark-300': '#A6031D',
      'red-dark-400': '#8A0318',
      'red-dark-500': '#6F0213',
      'red-dark-600': '#53020E',
      'red-dark-700': '#37010A',
      'red-dark-800': '#1C0105',
      'red-light-100': '#FEDCE1',
      'red-light-200': '#FEB9C4',
      'red-light-300': '#FD96A6',
      'red-light-400': '#FC7389',
      'red-light-500': '#FC506B',
      'red-light-600': '#FB2D4D',
      'red-light-700': '#FB0A30',
      'red-light-800': '#DD0426',
      'dark-50': '#F6F6F6',
      'dark-100': '#E4E4E4',
      'dark-200': '#A7A7A7',
      'dark-300': '#C3C3CE',
      'dark-400': '#424242B2',
      'dark-500': '#000000',
      'light-100': '#7F7F7F',
      'light-200': '#424242',
      'light-300': '#242323',
      'light-400': '#91929D',
      'container': '#FFFFFF',
    },
    borderColor: {
      'dark-100': '#E4E4E4',
    },
    extend: {
      fontFamily: {
        'chewy': ['Chewy'],
        'poppins': ['Poppins'],
        'inter': ['Inter'],
      },
      backgroundPosition: {
        'bottom-right-_7': 'bottom -7rem right'
      }
    },
  },
  plugins: [],
}
