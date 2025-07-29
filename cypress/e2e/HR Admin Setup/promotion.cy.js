/// <reference types="cypress" />

describe('Promotion', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Promotion functionality', () => {
        cy.contains('a.dash-link', 'HR Admin Setup').should('be.visible').click();
        cy.get('.dash-trigger > .dash-submenu > :nth-child(5) > .dash-link').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Promotion').should('be.visible');

        //Create
        cy.get('[data-title="Create New Promotion"]').click();
        cy.get('#promotion_title').should('be.visible').type('Test Promotion');
        cy.get('#promotion_date').clear().should('be.visible').type('2025-01-01');
        cy.get('#description').should('be.visible').type('Test Description');
        cy.get('#submitBtn').click();
        cy.wait(2000);
        
        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();

    })
})