const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseURL: 'https://spree.vercel.app/',
  },

  defaultCommandTimeout: 10000,

  viewportWidth: 1200,
  viewportHeight: 812,
});
