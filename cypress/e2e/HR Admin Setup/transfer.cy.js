/// <reference types="cypress" />

describe('Transfer Functionality', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Should create and delete a transfer successfully', () => {
     // Navigate to Transfer
        cy.contains('a.dash-link', 'HR Admin Setup').should('be.visible').click();
        cy.get('.dash-trigger > .dash-submenu > :nth-child(2) > .dash-link').should('be.visible').click({ force: true });

    // Confirm navigation
    cy.contains('.m-b-10', 'Manage Transfer').should('be.visible');

    // Create New Transfer
    cy.get('[data-title="Create New Transfer"]').click();

    cy.get('.choices__inner').eq(0).click();
    cy.get('.choices__list').contains('New_C').click({ force: true });
    cy.get('body').click(10, 10); 

    cy.get('#department_id').select('67');
    cy.get('#transfer_date').type('2025-10-01');
    cy.get('#description').type('Test Description');
    cy.get('#submitBtn').click();

    cy.wait(2000);
  });
});
