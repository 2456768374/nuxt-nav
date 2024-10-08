// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  piniaPersistedstate: {
    cookieOptions: {
      maxAge: 2 * 365 * 24 * 60 * 60 * 1000,
    },
    storage: "localStorage",
  },
});
