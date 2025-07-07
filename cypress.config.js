// cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    env: {
      VALID_EMAIL: 'muntazim.khan+company@suvastutech.com',
      VALID_PASSWORD: 'Info@2024#',
      INVALID_EMAIL: 'muntazim.khancompany@suvastutech.com',
      INVALID_PASSWORD: 'Info@2024',
    },
    // other Cypress config options like baseUrl, viewport, etc.
    viewportWidth: 1440,
    viewportHeight: 900,
  },
});

