/// <reference types="cypress" />

describe('Indicator', () =>{
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })

    it('Check the Indicator functionality', () => {
    cy.get('a.dash-link').contains('Performance').should('be.visible').click();
    cy.contains('a', 'Indicator').should('be.visible').click();

    //Export
    cy.get('.ti.ti-file-export').click({force: true});

    //Create a new indicator
    cy.get('[data-title="Create New Indicator"]').click()
    
    //Select Client
    cy.get('.choices__inner').eq(0).click();
    cy.get('.choices__list--dropdown').contains('Attache Pool Club').click({force: true});
    cy.wait(1000);
    
    // Select Department 
    cy.get('.choices__inner').eq(1).click();
    cy.get("input[aria-label='Select Department']").type('Back of House {enter}')

    //select designation
    cy.xpath("//div[@class='designation_div']//select[@id='choices-multiple']").select('Waiter', {force: true});    
    cy.get("label[title='Pretty good - 4 stars'][for='technical-4-3']").click();
    cy.get('#submitBtn').click();

    //Delete Indicator
    cy.get('.ti.ti-trash.text-white.text-white').last().click();
    cy.wait(1000);
    cy.get('.swal2-confirm.btn.btn-success').click();

    })
})