/// <reference types="cypress" />

describe('Appraisal', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })
    it('Check the Appraisal functionality', () => {
    cy.get('a.dash-link').contains('Performance').should('be.visible').click();
    cy.contains('a', 'Appraisal').should('be.visible').click();

    //Export
    cy.get('.ti.ti-file-export').click({force: true});

    //Create a new appraisal
    cy.get('[data-title="Create New Appraisal"]').click()
    cy.get("#brances").select('Attache');
    cy.get("#employee").select('Jamsheed Chullikkoden');
    cy.get("#current_month").type('2025-06');
    cy.get('#remark').type('Testing Remarks');   

    //indicators
    cy.get("label[title='Awesome - 5 stars'][for='technical-5*-1']").click()
    cy.get("label[title='Pretty good - 4 stars'][for='technical-4*-5']").click()

    //submit
    cy.get('#submitBtn').click();

    //Delete Appraisal
    cy.get('.ti.ti-trash.text-white.text-white').last().click();
    cy.get('.swal2-confirm.btn.btn-success').click()
 
})
})