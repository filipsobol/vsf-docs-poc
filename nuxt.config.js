export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Documentation',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({ path: '/docs', component: resolve(__dirname, 'pages/documentation.vue') });
      routes.push({ path: '/docs/:version', component: resolve(__dirname, 'pages/documentation.vue') });
      routes.push({ path: '/docs/:version/*', component: resolve(__dirname, 'pages/documentation.vue') });
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://image.nuxtjs.org/
    '@nuxt/image'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: '~/assets/prism.scss'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-easy-import': { prefix: '_', extensions: ['.css', '.scss'] },
        'postcss-nested': {}
      }
    }
  },

  // TailwindCSS module: https://tailwindcss.nuxtjs.org/options
  tailwindcss: {
    jit: true,
    viewer: false
  },

  // Image module: https://image.nuxtjs.org/api/options
  image: {}
};
