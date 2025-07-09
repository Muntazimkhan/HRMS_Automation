// cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    env: {
      VALID_EMAIL: 'muntazim.khan+company@suvastutech.com',
      VALID_PASSWORD: 'Info@2024#',
      INVALID_EMAIL: 'muntazim.khancompany@suvastutech.com',
      INVALID_PASSWORD: 'Info@2024',
    },
    viewportWidth: 1440,
    viewportHeight: 900,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  }
});
