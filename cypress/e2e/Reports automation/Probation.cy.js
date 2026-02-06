/// <reference types="cypress" />

describe("Acknowledgment Report", () =>{
    beforeEach(() =>{
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    })
it('Check the Acknowledgment report functionality', ()=>{
    cy.contains('span.dash-mtext', 'Report').click();
    cy.contains('a', 'Probation').click();

    cy.contains('h4', 'Manage Probation Acknowledgment Report').should('be.visible');

    //Download and Export functionality
    cy.get('.ti.ti-file-export').click();
    
    //Filters functionality
    cy.get("#start_month").type('2025-06');
    cy.get("#end_month").type('2026-02');
    cy.get(".btn.btn-sm.btn-primary").eq(1).click();

})
})