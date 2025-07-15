/// <reference types="cypress" />

describe('Training List', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Training List functionality', () => {
        cy.contains('a.dash-link', 'Training').should('be.visible').click();
        cy.contains('a.dash-link', 'Training List').should('be.visible').click();

        cy.get('.m-b-10').contains('Manage Training').should('be.visible');
    })
})