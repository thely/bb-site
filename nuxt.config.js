require("dotenv").config();

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  publicRuntimeConfig: {
    baseUrl:
      process.env.NODE_ENV == "production"
        ? "https://becky-brown.org/"
        : "http://localhost:3000/",
    social: {
      instagram: "https://www.instagram.com/breckelli/",
      soundcloud: "https://soundcloud.com/bardbarienne",
      vimeo: "https://vimeo.com/user45387982",
      github: "https://github.com/thely"
    }
  },
  head: {
    titleTemplate: titleChunk => {
      return titleChunk ? `${titleChunk} | Becky Brown` : "Becky Brown";
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      {
        hid: "og:locale",
        property: "og:locale",
        content: "en_US"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Becky Brown"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      }
    ]
    // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["assets/scss/style.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/color-mode",
    "@nuxtjs/google-analytics"
  ],
  googleAnalytics: {
    id: process.env.GTAG_ID
  },
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
  axios: {}
  /*
   ** Build configuration
   */
  // build: {
  //   /*
  //    ** You can extend webpack config here
  //    */
  //   extend(config, ctx) { }
  // }
};
