/// <reference types="cypress" />

describe('Trip', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Trip functionality', () => {
        cy.contains('a.dash-link', 'HR Admin Setup').should('be.visible').click();
        cy.get('.dash-trigger > .dash-submenu > :nth-child(4) > .dash-link').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Trip').should('be.visible');

    })
})