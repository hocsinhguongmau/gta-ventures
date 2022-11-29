/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './pages/**/*.{js,jsx}'],
  theme: {
    textColor: (theme) => ({
      ...theme('colors'),
      main: '#50D2F9',gray:"#ccc"
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      main: '#50D2F9',gray:"#ccc"
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      main: '#50D2F9',gray:"#ccc"
    }),

    extend: {},
  },
  plugins: [require('daisyui'), require('prettier-plugin-tailwindcss')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'light',
  },
};
