/// <reference types="cypress" />

describe('Account Balance', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });

    it('Check the Account Balance functionality', () => {
    cy.contains('span.dash-mtext', 'Finance').click();
    cy.get('.dash-trigger > .dash-submenu > :nth-child(2) > .dash-link').should('be.visible').click();

    cy.get('.m-b-10').contains('Manage Account Balances').should('be.visible');    
})
})