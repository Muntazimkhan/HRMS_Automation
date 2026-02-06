/// <reference types="cypress" />

describe('Zoom Meeting', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Check the Zoom Meeting functionality', () => {
    cy.contains('span.dash-mtext', 'Zoom Meeting').click();

    // Create new Meeting
    cy.get('[data-title="Create New Zoom Meeting"]').click();
    cy.get('#title').should('be.visible').type('Test Meeting');

    cy.get('.choices__inner').should('be.visible').click();
    cy.get('.choices__list').should('be.visible').contains('Abdellatif Hamed').click();

    cy.get('#current_date').type('2025-07-22T10:00');
    cy.get('#duration').type('30');
    cy.get('#password').type('ABCD1234');
    cy.get('.modal-footer > .btn-primary').click();

    // Delete
    cy.get('.ti.ti-trash.text-white.text-white').last().should('be.visible').click();
    cy.get('.swal2-confirm.btn.btn-success').should('be.visible').click();
  });
});
