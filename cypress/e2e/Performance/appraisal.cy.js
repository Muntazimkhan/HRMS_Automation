/// <reference types="cypress" />

describe('Appraisal', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })
    it('Check the Appraisal functionality', () => {
    cy.get('a.dash-link').contains('Performance').should('be.visible').click();
    cy.contains('a', 'Appraisal').should('be.visible').click();

    //Create a new appraisal
    cy.get(".btn.btn-sm.btn-primary").click()
    cy.get("#brances").select('37');
    cy.get("#employee").select('565');
    cy.get("#current_month").type('2025-06');
    cy.get('#remark').type('Testing Remarks');   

    //indicators
    cy.get('[for="technical-4*-19"]').click()
    cy.get('[for="technical-4-19"]').click()

    //submit
    cy.get('#submitBtn').click();
    cy.get('.d-flex').should('contain.text', 'Appraisal successfully created.');

    //Delete Appraisal
    cy.get('.ti.ti-trash.text-white.text-white').last().click();
    cy.get('.swal2-confirm.btn.btn-success').click()
    cy.get('.d-flex').should('contain.text', 'Appraisal successfully deleted.');
 
})
})