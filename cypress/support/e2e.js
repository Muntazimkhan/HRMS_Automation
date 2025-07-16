// cypress/support/e2e.js

// Import custom commands
import './commands'

// Set a consistent viewport for all tests
beforeEach(() => {
  cy.viewport(1440, 900);
});
