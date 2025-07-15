/// <reference types="cypress" />

describe('Indicator', () =>{
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })

    it('Check the Indicator functionality', () => {
    cy.get('a.dash-link').contains('Performance').should('be.visible').click();
    cy.contains('a', 'Indicator').should('be.visible').click();

    //Create a new indicator

    cy.get(".btn.btn-sm.btn-primary").click()
    cy.get('.form-group > .choices > .choices__inner').click();
    cy.get('.choices__list--dropdown').contains('Client').click({force: true});
    cy.get('.choices__inner').eq(1).click()
    cy.get('.choices__list--dropdown').contains('Project').click({force: true});
    cy.get('select[name="designation"]').select('Designation');    
    cy.get('[for="technical-4-19"]').click();
    cy.get('#submitBtn').click();
    cy.get('.d-flex').should('contain.text', 'Indicator successfully created.');

    //Delete Indicator

    cy.get('.ti.ti-trash.text-white.text-white').last().click();
    cy.wait(2000);
    cy.get('.swal2-confirm.btn.btn-success').click();
    cy.get('#liveToast').should('contain.text', 'Indicator successfully deleted.');

    })
})