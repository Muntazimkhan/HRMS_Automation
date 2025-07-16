/// <reference types="cypress" />

describe('Login Test', () => {
  beforeEach(() => {
    // Ensuring the viewport size is set for all tests
    cy.viewport(1440, 900);
  });

  it('Check Login functionality with Valid Credentials', () => {
    console.log(Cypress.env('VALID_EMAIL'));  
    console.log(Cypress.env('VALID_PASSWORD'));  

    // Visit the login page
    cy.visit("https://iaoai.io/hrmsv2/demo/login");

    // Type the valid credentials into the input fields
    cy.get('#email').should('be.visible').type(Cypress.env('VALID_EMAIL'));
    cy.get('#password').should('be.visible').type(Cypress.env('VALID_PASSWORD'));

    cy.get('button[type="submit"]').click();

    // Assert that the URL contains 'dashboard'
    cy.url().should('include', 'dashboard');
  });
});


