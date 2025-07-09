/// <reference types="cypress" />

describe('Logout Test', () => {
    beforeEach(() => {
        cy.viewport(1440, 900);
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    })

    it('Check Logout functionality', () => {
        // Click on the user profile icon
        cy.get('.hide-mob.ms-2').click();

        // Click on the logout button
        cy.contains('Logout').click();

        // Assert that the URL contains 'login'
        cy.url().should('include', 'login');

    });

});
