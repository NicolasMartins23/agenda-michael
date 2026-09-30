const { configure } = require('quasar/wrappers')

module.exports = configure(() => ({
  boot: ['pinia', 'pwa'],
  css: ['app.scss'],
  extras: ['material-icons'],
  framework: {
    config: {},
    plugins: ['Notify', 'Dialog']
  },
  build: {
    vueRouterMode: 'history'
  },
  devServer: {
    port: 4000,
    open: false
  }
}))
