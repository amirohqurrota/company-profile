module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        // eslint-disable-next-line quote-props
        'pipeImage': "url('assets/image/people.jpg')"
      }
    }
  },
  plugins: []
}
