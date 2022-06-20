module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      'blue': '#1fb6ff',
      'white' : '#ffff',
      'red' : '#ED4848', 
      'pink': '#ff49db',
      'primary': '#363740',
      'green': '#53AD67',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      mulish: ['Mulish', 'sans-serif']
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}