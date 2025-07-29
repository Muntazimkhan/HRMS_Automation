/// <reference types="cypress" />

describe('Trip', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Trip functionality', () => {
        cy.contains('a.dash-link', 'HR Admin Setup').should('be.visible').click();
        cy.get('.dash-trigger > .dash-submenu > :nth-child(4) > .dash-link').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Trip').should('be.visible');

        //Create a new 
        cy.get('[data-title="Create New Trip"]').click();
        cy.get('#start_date').clear().should('be.visible').type('2025-01-01');
        cy.get('#end_date').clear().should('be.visible').type('2025-10-01');
        cy.get('#purpose_of_visit').type('Test Purpose');
        cy.get('#place_of_visit').type('Pakistan');
        cy.get('#description').type('Test description');
        cy.get('#submitBtn').click();

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').first().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();

    })
})