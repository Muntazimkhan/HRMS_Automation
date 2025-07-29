/// <reference types="cypress" />

describe('Payer', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });

    it('Check the manage Payer functionality', () => {
    cy.contains('span.dash-mtext', 'Finance').click();
    cy.contains('a.dash-link', 'Deposit').should('be.visible').click();
    cy.get('.m-b-10').contains('Manage Deposit').should('be.visible');   

    //Create New Deposit
    cy.get('.float-end > [href="#"]').click()

    // Open the dropdown
    cy.get(':nth-child(1) > .form-group > .choices > .choices__inner').click()
    cy.get('.choices__list--dropdown').should('be.visible').contains('.choices__item', 'Test Account').click()

    cy.get('#amount').should('be.visible').clear().type('1000');
    cy.get('#date').should('be.visible').type('2025-10-01');  

    cy.get(':nth-child(4) > .form-group > .choices > .choices__inner').click()
    cy.get('.choices__list--dropdown').should('be.visible').contains('.choices__item', 'SuvastuTech_Income').click()

    cy.get(':nth-child(5) > .form-group > .choices > .choices__inner').click()
    cy.get('.choices__list--dropdown').should('be.visible').contains('.choices__item', 'Test Payer').click()

    cy.get(':nth-child(6) > .form-group > .choices > .choices__inner').click()
    cy.get('.choices__list--dropdown').should('be.visible').contains('.choices__item', 'SuvastuTech_Payment').click()

    cy.get('#referal_id').should('be.visible').type('123');
    cy.get('#description').should('be.visible').type('Test Description');   

    cy.get('#submitBtn').click();


    //Delete Deposit
    cy.get('.ti.ti-trash.text-white.text-white').last().click();
    cy.wait(2000);
    cy.get('.swal2-confirm.btn.btn-success').click();



})
})