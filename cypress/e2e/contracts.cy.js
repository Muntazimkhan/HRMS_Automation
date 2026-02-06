/// <reference types="cypress" />

describe('Contracts', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Check the Contracts functionality', () => {
    cy.contains('span.dash-mtext', 'Contracts').click();
    cy.get('.m-b-10').contains('Contract').should('be.visible');

    // Create a new contract
    cy.get('.ti.ti-plus').click();
    cy.get('#subject').should('be.visible').type('Test Subject', { force: true });
    cy.get('#value').should('be.visible').type('451');
    cy.get('.choices__inner').eq(1).click();
    cy.get('.choices__list').should('be.visible').contains('Permanent').click({ force: true });
    cy.get('#start_date').should('be.visible').clear().type('2025-03-01');
    cy.get('#end_date').should('be.visible').clear().type('2025-09-01');
    cy.get('#description').should('be.visible').type('Test Description');
    cy.get('#submitBtn').click();
    cy.get('.d-flex').contains('Contract successfully created!').should('be.visible');

    // Delete Contract
    cy.get('.ti.ti-trash').last().click();
    cy.get('.swal2-confirm.btn.btn-success').click();

    //View Contract Details
    cy.get('.ti.ti-eye.text-white').last().click();
    cy.get('.m-b-10').contains('No-Subject').should('be.visible');

    // Send Email
    cy.get('[data-bs-original-title="Send Email"]').click();

    // Duplicate
    cy.get('[data-title="Duplicate"]').click();
    cy.get('.col-md-12 > #notes').should('be.visible').type('Test Notes');
    cy.get('.modal-body > .modal-footer > .btn-primary').click();

    // Delete duplicated contract
    cy.get('.ti.ti-trash').last().click();
    cy.get('.swal2-confirm.btn.btn-success').click();
  });
});
