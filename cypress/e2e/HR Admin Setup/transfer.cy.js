/// <reference types="cypress" />

describe('Transfer', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900); // Consistent view for CI
    });

    it('Check the Transfer functionality', () => {
        // Navigate to Transfer
        cy.contains('a.dash-link', 'HR Admin Setup').should('be.visible').click();
        cy.get('.dash-trigger > .dash-submenu > :nth-child(2) > .dash-link')
          .should('be.visible')
          .click({ force: true });
        cy.get('.m-b-10').contains('Manage Transfer').should('be.visible');

        // Create a new Transfer
        cy.get('[data-title="Create New Transfer"]').click();

        // Open dropdown and select option safely
        cy.get('.choices__inner').eq(0).should('be.visible').click();
        cy.get('.choices__list').contains('New_C').click({ force: true });

        // Fill in other fields
        cy.get('#department_id').select('67');
        cy.get('#transfer_date').should('be.visible').type('2025-10-01');
        cy.get('#description').should('be.visible').type('Test Description');
        cy.get('#submitBtn').click();



        // Delete the most recent row with "Test Description"
        cy.contains('td', 'Test Description').first().parent('tr').find('.ti-trash').click({ force: true });

        cy.get('.swal2-confirm.btn.btn-success').click();

    });
});
