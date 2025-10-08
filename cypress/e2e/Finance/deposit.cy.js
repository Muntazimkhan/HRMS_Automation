/// <reference types="cypress" />

describe('Deposit', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Check the manage Deposit functionality', () => {
    cy.contains('span.dash-mtext', 'Finance').click();
    cy.contains('a.dash-link', 'Deposit').should('be.visible').click();
    cy.get('.m-b-10').contains('Manage Deposit').should('be.visible');

    // Create New Deposit
    cy.get('.float-end > [href="#"]').click();

    // Select Account
    cy.get("div.col-md-12 .choices__inner").should('be.visible').click({ force: true });
    cy.get('.choices__list--dropdown').should('be.visible');
    cy.get('.choices__list--dropdown .choices__item')
      .should('have.length.greaterThan', 0)
      .filter(':visible')
      .contains('Test Account')
      .click({ force: true });

    cy.get('#amount').should('be.visible').clear().type('1000');
    cy.get('#date').should('be.visible').clear().type('2025-10-01');

    // Select Income Category
    cy.get(':nth-child(4) > .form-group > .choices > .choices__inner').should('be.visible').click({ force: true });
    cy.get('.choices__list--dropdown').should('be.visible');
    cy.get('.choices__list--dropdown .choices__item')
      .should('have.length.greaterThan', 0)
      .filter(':visible')
      .contains('SuvastuTech_Income')
      .click({ force: true });

    // Select Payer
    cy.get(':nth-child(5) > .form-group > .choices > .choices__inner').should('be.visible').click({ force: true });
    cy.get('.choices__list--dropdown').should('be.visible');
    cy.get('.choices__list--dropdown .choices__item')
      .should('have.length.greaterThan', 0)
      .filter(':visible')
      .contains('Test Payer')
      .click({ force: true });

    // Select Payment Method
    cy.get(':nth-child(6) > .form-group > .choices > .choices__inner').should('be.visible').click({ force: true });
    cy.get('.choices__list--dropdown').should('be.visible');
    cy.get('.choices__list--dropdown .choices__item')
      .should('have.length.greaterThan', 0)
      .filter(':visible')
      .contains('SuvastuTech_Payment')
      .click({ force: true });

    cy.get('#referal_id').should('be.visible').clear().type('123');
    cy.get('#description').should('be.visible').clear().type('Test Description');

    cy.get('#submitBtn').should('be.visible').click();

    // Delete Deposit
    cy.get('.ti.ti-trash.text-white').last().should('be.visible').click();
    cy.wait(2000);
    cy.get('.swal2-confirm.btn.btn-success').should('be.visible').click();
  });
});
