// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.NUXT_APP_API_URL,
    },
  },
  srcDir: "src/",
  alias: {
    "@": "src/",
  },
  app: {
    head: {
      title: "Головна",
      titleTemplate: "%s",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Nuxt3",
        },
        {
          hid: "msapplication-TileColor",
          name: "msapplication-TileColor",
          content: "#ffffff",
        },
        {
          hid: "sapplication-TileImage",
          name: "sapplication-TileImage",
          content: "/favicon/ms-icon-144x144.png",
        },
        {
          hid: "theme-color",
          name: "theme-color",
          content: "#ffffff",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/favicon/apple-icon-57x57.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/favicon/apple-icon-60x60.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/favicon/apple-icon-72x72.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/favicon/apple-icon-6x76.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/favicon/apple-icon-114x114.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/favicon/apple-icon-120x120.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/favicon/apple-icon-144x144.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/favicon/apple-icon-152x152.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-icon-180x180.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/favicon/android-icon-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        { rel: "manifest", href: "/favicon/manifest.json" },
      ],
    },
  },
  css: ["~/assets/scss/common.scss"],
  modules: [

    "@nuxt/image",
  ],
});
