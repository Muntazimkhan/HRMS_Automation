/// <reference types="cypress" />

describe('Manage Account', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });

    it('Check the Manage Account functionality', () => {
    cy.contains('span.dash-mtext', 'Finance').click();
    cy.get('.dash-trigger > .dash-submenu > :nth-child(1) > .dash-link').should('be.visible').click();

    cy.get('.btn.btn-sm.btn-primary').should('be.visible').click();
    cy.get('#bank_name').should('be.visible').type('Test Bank');
    cy.get('#account_name').should('be.visible').type('Test Account');
    cy.get('#initial_balance').should('be.visible').type('2150');
    cy.get('#account_number').should('be.visible').type('1641525452');
    cy.get('#iban_number').should('be.visible').type('IBAN001641525452');
    cy.get('#branch_code').should('be.visible').type('12345'); 
    cy.get('#bank_branch').should('be.visible').type('Kanju');

    cy.get('.modal-footer > .btn-primary').should('not.be.disabled').click();

    //Assertion

    cy.get('.d-flex').should('contain.text', 'Account successfully created.');

    //Delete Account
    cy.get('.ti.ti-trash.text-white.text-white').last().click();
    cy.wait(2000);
    cy.get('.swal2-confirm').click();
    cy.get('.d-flex').should('contain.text', 'Account successfully deleted.');


});

});
