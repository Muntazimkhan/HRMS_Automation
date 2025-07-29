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

    cy.get('[data-title="Create New Indicator"]').click()

    cy.get('.choices__inner').eq(0).click();
    cy.get('.choices__list--dropdown').contains('New_C').click({force: true});
    cy.wait(2000);

    cy.get('.department_div > .choices > .choices__inner').click()
    cy.get('.choices__list').contains('Project').click({force: true});
    cy.wait(2000);

    cy.get('select[name="designation"]').select('Designation', {force: true});    
    cy.get('[for="technical-4-19"]').click();
    cy.get('#submitBtn').click();

    //Delete Indicator
    cy.get('.ti.ti-trash.text-white.text-white').last().click();
    cy.wait(2000);
    cy.get('.swal2-confirm.btn.btn-success').click();

    })
})