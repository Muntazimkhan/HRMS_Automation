// cypress/support/commands.js

// Prevent Cypress from failing tests on uncaught exceptions
Cypress.on('uncaught:exception', () => {
  return false;
});

// Custom login command
Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://stage-hrms.iaoai.io/login');
  cy.get('#email').should('be.visible').type(email);
  cy.get('#password').should('be.visible').type(password);
  cy.get('button[type="submit"]').click();
});

/**
 * @param 
 * @param 
 */
Cypress.Commands.add("selectChoice", (labelText, optionText) => {

  // Find the label
  cy.contains("label", labelText)
    .should("be.visible")
    .then(($label) => {

      // Find the FIRST .choices element that comes AFTER the label
      cy.wrap($label)
        .parent()              
        .nextAll()             
        .find(".choices__inner")
        .first()
        .should("be.visible")
        .click({ force: true });

      // Select option from active list
      cy.wrap($label)
        .parent()
        .nextAll()
        .find(".choices__list--dropdown.is-active .choices__item")
        .contains(new RegExp(`^${optionText}$`, 'i'))
        .click({ force: true });
    });
});

// CommonJS imports
require('cypress-xpath');
require('cypress-downloadfile/lib/downloadFileCommand');
require('cypress-file-upload');
