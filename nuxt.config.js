export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Simpleforms.js Documentation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Learn how to use Simpleforms.js with our detailed documentation. Explore demos, learn the ins and outs! Your forms will never be the same again!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: { 
    workbox: true,
    icon: {
      fileName: 'icon.png'
    },
    meta: { 
      name: 'Simpleforms.js Documentation',
      theme_color: '#1A1C2C', 
      lang: 'en', 
      nativeUI: true
    }, 
    manifest: { 
      name: 'Simpleforms.js Documentation', 
      short_name: 'Simpleforms.js', 
      lang: 'en', 
      display: 'standalone',
      background_color: '#FFF',
      theme_color: '#FFF'
    } 
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
