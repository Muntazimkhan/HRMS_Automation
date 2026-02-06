/// <reference types="cypress" />

describe('Payee', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });

    it('Check the manage Payee functionality', () => {
    cy.contains('span.dash-mtext', 'Finance').click();
    cy.get('.dash-trigger > .dash-submenu > :nth-child(3) > .dash-link').should('be.visible').click();

    cy.get('.m-b-10').contains('Manage Payee').should('be.visible');   
    
    //Create new Payee
    cy.get('.btn.btn-sm.btn-primary').click()
    cy.get('#payee_name').should('be.visible').type('Test Payee', {force: true});
    cy.get('#contact_number').should('be.visible').type('01230123', {force: true});
    cy.get('#submitBtn').click({force: true});

    //Delete Payee
    cy.get('.ti.ti-trash.text-white.text-white').first().click();
    cy.wait(1000);
    cy.get('.swal2-confirm.btn.btn-success').click();

})
})