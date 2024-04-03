// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
const path = require('path');
export default defineNuxtConfig({
  nitro: {
    preset: 'firebase',
    firebase: {
      gen: 2
    },
  },
  devtools: { enabled: true },
  modules:[
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/content',
    "@nuxt/image",
    "nuxt-gtag"
  ],
  colorMode: {
    classSuffix: "",
    preference: 'system'
  },
  experimental: {
    defaults: {
      nuxtLink: {
        // default values
        componentName: 'NuxtLink',
        externalRelAttribute: 'noopener noreferrer',
        activeClass: 'bg-blue-400',
        exactActiveClass: 'router-link-exact-active',
        prefetchedClass: undefined, // can be any valid string class name
        trailingSlash: undefined // can be 'append' or 'remove'
      }
    }
  },
  gtag:{
    id: "G-0H6W17YX7W"
  }
})