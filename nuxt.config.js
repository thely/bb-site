export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  publicRuntimeConfig: {
    social: {
      instagram: "https://www.instagram.com/breckelli/",
      soundcloud: "https://soundcloud.com/bardbarienne",
      vimeo: "https://vimeo.com/user45387982",
      github: "https://github.com/thely"
    }
  },
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxt/content", "@nuxtjs/axios", "@nuxtjs/dotenv"],
  content: {
    liveEdit: false
  },
  components: true,
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
};
