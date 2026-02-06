/// <reference types="cypress" />
describe('Warning', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Warning functionality', () => {
        cy.contains('a.dash-link', 'HR Admin Setup').should('be.visible').click();
        cy.get('.dash-trigger > .dash-submenu > :nth-child(7) > .dash-link').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Warning').should('be.visible');

        //Create
        cy.get('[data-title="Create New Warning"]').click();
        cy.get(".choices__inner").eq(1).click();
        cy.get('.choices__list').contains('Abdellatif Hamed').click({force: true});
        cy.get('#subject').should('be.visible').type('Test subject', { force: true });
        cy.get('#warning_date').clear().should('be.visible').type('2026-10-10');
        cy.get('#description').should('be.visible').type('Test Description');
        cy.get('#submitBtn').click();
        
        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(1000);
        cy.get('.swal2-confirm.btn.btn-success').click();

    })
})