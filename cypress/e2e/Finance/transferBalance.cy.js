/// <reference types="cypress" />

describe('Manage Balance', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });

    it('Check the manage Balance functionality', () => {
    cy.contains('span.dash-mtext', 'Finance').click();
    cy.get('.dash-trigger > .dash-submenu > :nth-child(7) > .dash-link').click();
    cy.get('.m-b-10').contains('Manage Transfer Balance').should('be.visible'); 

    //Export
    // cy.get('.btn.btn-sm.btn-primary').eq(0).click();
    
    //Create a new entry
    cy.get('.btn.btn-sm.btn-primary').eq(1).click();
    cy.get(':nth-child(1) > .form-group > .choices > .choices__inner').click();
    cy.get('.choices__list--dropdown').should('be.visible').contains('SuvasutTech').click();    

    // Open the "To Account" dropdown
    cy.get('[data-type="select-one"]').eq(1).click();
    // Type to search
    cy.get('[data-type="select-one"]').eq(1).find('input').type('Test Account{downarrow}{enter}');

    cy.get('#date').type('2025-10-01');
    cy.get('#amount').type('1000');

    // Open the "To Account" dropdown
    cy.get('[data-type="select-one"]').eq(2).click();
    // Type to search
    cy.get('[data-type="select-one"]').eq(2).find('input').type('SuvastuTech_Payment{downarrow}{enter}');

    cy.get('#referal_id').type('123');
    cy.get('#description').type('Test Transfer');
    cy.get('#submitBtn').click();

    cy.get('.d-flex').contains('TransferBalance successfully created.');

    //Delete
    cy.get('.ti.ti-trash.text-white.text-white').first().click();
    cy.wait(2000);
    cy.get('.swal2-confirm.btn.btn-success').click();
    cy.get('#liveToast').should('contain.text', 'TransferBalance successfully deleted.');

    })
})