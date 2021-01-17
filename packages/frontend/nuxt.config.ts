import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  head: {
    title: 'nuxt-firebase-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/firebase',
  ],

  firebase: {
    lazy: false,
    config: {
      apiKey: 'AIzaSyDa-YwgWTp2GDyVYEfv-XLb62100_HoEvU',
      authDomain: 'nuxt-fire-demo.firebaseapp.com',
      databaseURL: 'https://nuxt-fire-demo.firebaseio.com',
      projectId: 'nuxt-fire-demo',
      storageBucket: 'nuxt-fire-demo.appspot.com',
      messagingSenderId: '807370470428',
      appId: '1:807370470428:web:26da98c86c3fd352',
      measurementId: 'G-XT6PVC1D4X',
    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged',
        },
        ssr: true,
        // emulatorPort: process.env.NODE_ENV === 'development' ? 9099 : undefined,
        disableEmulatorWarnings: false,
      },
    },
  },

  modules: ['@nuxtjs/pwa', '@nuxtjs/axios'],

  build: {},

  /*
   ** Nuxt.js Middleware
   */
  router: {
    middleware: ['testMiddleware'],
  },

  pwa: {
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    },
  },
}
export default config
