/// <reference types="cypress" />

describe('Payer', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });

    it('Check the manage Payer functionality', () => {
    cy.contains('span.dash-mtext', 'Finance').click();
    cy.get('.dash-trigger > .dash-submenu > :nth-child(4) > .dash-link').should('be.visible').click();

    cy.get('.m-b-10').contains('Payer').should('be.visible');   

    //Create new Payer
    cy.get('.btn.btn-sm.btn-primary').click()
    cy.get('#payer_name').should('be.visible').type('Test Payer');
    cy.get('#contact_number').should('be.visible').type('01230123');
    cy.get('#submitBtn').click();

    //Delete Payer
    cy.get('.ti.ti-trash.text-white.text-white').first().click();
    cy.wait(2000);
    cy.get('.swal2-confirm.btn.btn-success').click();
    cy.get('.d-flex').should('contain.text', 'Payer successfully deleted.');
})
})