const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 12000,
  pageLoadTimeout: 60000,
  screenshotOnRunFailure: true,
  video: true,

  viewportWidth: 1280,
  viewportHeight: 720, 

  e2e: {
    retries: {
      runMode: 2,
      openMode: 0
    },
    env: {
      VALID_EMAIL: 'muntazim.khan+company@suvastutech.com',
      VALID_PASSWORD: 'Info@2024#',
    },
    baseUrl: 'https://iaoai.io/hrmsv2/demo/login',
  },
});
