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

// ✅ New: Custom dropdown selector for Choices.js
Cypress.Commands.add('selectChoicesItem', (containerSelector, itemText) => {
  cy.get(`${containerSelector} .choices__inner`).click();

  cy.get(containerSelector)
    .find('.choices__list--dropdown')
    .should('be.visible')
    .should('not.be.empty') // Ensure it's loaded

    // NEW: Retry until item appears
    .contains('.choices__item', itemText, { timeout: 10000 })
    .should('exist')
    .click({ force: true });
});


// ✅ Use CommonJS syntax consistently
require('cypress-xpath');
require('cypress-downloadfile/lib/downloadFileCommand');
require('cypress-file-upload');
