/// <reference types="cypress" />

describe('Evaluation', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1920, 1080);
    })

    it('Check the Evaluation functionality', () => {
    cy.get('a.dash-link').contains('Performance').should('be.visible').click();
    cy.contains('a', 'Evaluation').should('be.visible').click();

    //Export
    cy.get('.float-end > .btn').click();    

    //edit
    cy.get(':nth-child(3) > :nth-child(9) > .action-btn').click();
        cy.wait(2000);
    cy.get('.btn.btn-sm.btn-primary').click();    
    cy.get('#level_1_66').check();
    cy.get('#level_2_66').check();
    cy.get('#level_3_66').check();
    cy.get('#level_4_66').check();

    //cy.get('.modal-footer > .btn-primary').click();

})
})