/// <reference types="cypress" />

describe("Account Statement", () =>{
    beforeEach(() =>{
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    })
it('Check the Account Statement report functionality', ()=>{
    cy.contains('span.dash-mtext', 'Report').click();
    cy.contains('a', 'Account Statement').click();

    //Download and Export functionality
    cy.get('.btn.btn-sm.btn-primary').eq(0).click();
    cy.wait(1000);
    cy.get('button[type="submit"]').click();

    //Filters functionality
    cy.get('#start_month').type('2025-06');
    cy.get('#end_month').type('2025-07');
    cy.get('#account').select('1');
    cy.get('#type').select('Expense');

    cy.get('[data-bs-original-title="Apply"]').click();

})  


})