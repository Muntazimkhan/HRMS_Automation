/// <reference types="cypress" />

describe('Trainer', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Trainer functionality', () => {
        cy.contains('a.dash-link', 'Training').should('be.visible').click();
        cy.contains('a.dash-link', 'Trainer').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Trainer').should('be.visible');

        //Create a new Trainer
        cy.get(".btn.btn-sm.btn-primary[href='#']").eq(1).click();
        cy.get('#firstname').should('be.visible').type('Test firstname');
        cy.get('#lastname').should('be.visible').type('Test lastname');
        cy.get('#contact').should('be.visible').type('9521485632');
        cy.get('#email').should('be.visible').type('abc@abc.com');
        cy.get('#expertise').should('be.visible').type('Testing.');
        cy.get('#address').should('be.visible').type('Testing Address.');
        cy.get('#submitBtn').click();

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();
     
    })
})        