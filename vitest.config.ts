import { defineVitestConfig } from "@nuxt/test-utils/config"

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    // any custom Vitest config you require
    environmentOptions: {
      nuxt: {
        overrides: {
          //       // other Nuxt config you want to pass
          runtimeConfig: {
            nghBaseUrlNoCache: "https://nghBaseNoCache.com",
            public: {
              nghBaseUrl: "https://nghBase.com",
              uhsBaseUrl: "https://uhsBase.com",
            },
          },
          gtm: {
            id: "GTM-FALSE",
            enabled: false,
          },
          storyblok: {
            accessToken: "NGH_TEST_TOKEN",
            apiOptions: {
              endpoint: "https://ngh-test-storyblok.com",
            },
          },
        },
      },
    },
  },
})
