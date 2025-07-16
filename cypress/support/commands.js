// cypress/support/commands.js

// Prevent Cypress from failing tests on uncaught exceptions from the app
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Custom login command
Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://iaoai.io/hrmsv2/demo/login');
  cy.get('#email').should('be.visible').type(email);
  cy.get('#password').should('be.visible').type(password);
  cy.get('button[type="submit"]').click();
});

// Plugin support
require('cypress-xpath'); // CommonJS style plugin (MUST use require here)
import 'cypress-downloadfile/lib/downloadFileCommand'; // ES6 import
import 'cypress-file-upload'; // ES6 import
