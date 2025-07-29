const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 12000,
  pageLoadTimeout: 60000,
  screenshotOnRunFailure: true,
  video: true,

  e2e: {
    baseUrl: 'https://iaoai.io/hrmsv2/demo/login',
    retries: {
      runMode: 2,
      openMode: 0
    },
    env: {
      VALID_EMAIL: 'muntazim.khan+company@suvastutech.com',
      VALID_PASSWORD: 'Info@2024#',
    },
    setupNodeEvents(on, config) {
      // You can implement node-level event handlers here if needed
    },
  },
});
