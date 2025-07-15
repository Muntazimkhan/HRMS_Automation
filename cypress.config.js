// cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,

  screenshotOnRunFailure: true,  // ⬅️ Capture screenshot on test failure
  video: true,                   // ⬅️ Record video for each spec in CI

  e2e: {
    retries: {
      runMode: 2,   // Retry failed tests twice in CI
      openMode: 0   // No retries during local open mode
    },
    env: {
      VALID_EMAIL: 'muntazim.khan+company@suvastutech.com',
      VALID_PASSWORD: 'Info@2024#',
      INVALID_EMAIL: 'muntazim.khancompany@suvastutech.com',
      INVALID_PASSWORD: 'Info@2024',
    },
    baseUrl: 'https://iaoai.io/hrmsv2/demo/login', 
    // setupNodeEvents(on, config) { ... } // Optional if needed
  },
});
