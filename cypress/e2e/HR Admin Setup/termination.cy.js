/// <reference types="cypress" />
describe('Termination', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Termination functionality', () => {
        cy.contains('a.dash-link', 'HR Admin Setup').should('be.visible').click();
        cy.get('.dash-trigger > .dash-submenu > :nth-child(8) > .dash-link').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Termination').should('be.visible');

        //Create
        cy.get('[data-title="Create New Termination"]').click();
        cy.get('#notice_date').clear().should('be.visible').type('2025-01-01');
        cy.get('#termination_date').clear().should('be.visible').type('2025-08-01');
        cy.get('#description').should('be.visible').type('Test Description');
        cy.get('#submitBtn').click();
        
        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(1000);
        cy.get('.swal2-confirm.btn.btn-success').click();

    })
})