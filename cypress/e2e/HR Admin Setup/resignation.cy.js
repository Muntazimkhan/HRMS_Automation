/// <reference types="cypress" />

describe('Resignation', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Transfer functionality', () => {
        cy.contains('a.dash-link', 'HR Admin Setup').should('be.visible').click();
        cy.get('.dash-trigger > .dash-submenu > :nth-child(3) > .dash-link').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Resignation').should('be.visible');

        //Create a new Resignation
        cy.get('[data-title="Create New Resignation"]').click();
        cy.get('#notice_date').clear().type('2025-07-01')
        cy.get('#resignation_date').clear().type('2025-10-01')

        cy.get('#description').should('be.visible').type('Test Description');
        cy.get("input[value='Create']").click();
        cy.wait(2000);
        
        //Delete Resignation
        cy.get('.ti.ti-trash.text-white.text-white').first().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();

    })
})