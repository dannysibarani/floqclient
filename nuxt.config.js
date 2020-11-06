
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //'~/plugins/serve-placeholder.js',
    '~/plugins/bus', 
    {src: '~/plugins/tinymce-editor.js', ssr: false}, 
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth', 

    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ]

  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login', 
            method: 'post', 
            propertyName: 'meta.token'
          }, 
          logout: false, 
          user: {
            url: 'auth/me', 
            method: 'get', 
            propertyName: 'data'
          }
        }
      }
    }, 

    redirect: {
      login: 'http://localhost:3000', 
      logout: 'http://localhost:3000/auth/signin', 
    }
  }, 

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL : 'http://localhost:8000/api'
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }, 
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }, 

    /*transpile: [
      'serve-placeholder',
    ], */
  }, 

  router: {
    middleware: [
      'me', 
      'test', 
      //'redirectIfUnauthenticated', 
    ],
  }, 

    transpile: [
      'tinymce-editor', 
    ], 

}
