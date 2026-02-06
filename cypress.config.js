const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 12000,
  pageLoadTimeout: 60000,
  screenshotOnRunFailure: true,
  video: true,

  viewportWidth: 1920,
  viewportHeight: 1080, 

  e2e: {
    retries: {
      runMode: 2,
      openMode: 0
    },
    env: {
      VALID_EMAIL: 'admin@chs.org',
      VALID_PASSWORD: 'Dg^^UO9)%dsk${`a',
    },
    baseUrl: 'https://stage-hrms.iaoai.io/login',
  },
});
