/// <reference types="cypress" />
describe('Job Application', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Job Application functionality', () => {
        cy.contains('a.dash-link', 'Recruitment').should('be.visible').click();
        cy.contains('a.dash-link', 'Application Process').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Job Application').should('be.visible');

        // Create a mew Job Application
        cy.get('[data-title="Create New Job Application"]').click();
        cy.get('#jobs').should('be.visible').select('93');
        cy.get('#name').type('Test Name', {force: true});
        cy.get('#email').should('be.visible').type('Test@gmail.com');
        cy.get('#phone').should('be.visible').type('0321654987');
        cy.get('[type="submit"]').click();
        
    })
})