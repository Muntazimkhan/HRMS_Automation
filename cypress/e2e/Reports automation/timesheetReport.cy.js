/// <reference types="cypress" />
describe('Timsheet Report', () =>{
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });

    it('Check the Timesheet Report Functionality', () => {
        cy.contains('span.dash-mtext', 'Report').click();
        cy.contains('a', 'Timesheet').click();

        // Download and Export functionality
        // cy.get('.btn.btn-sm.btn-primary').eq(0).click();
        // cy.get('button[type="submit"]').click();

        // Filters functionality

        cy.get('#start_date').type('2025-06-01');
        cy.get('#end_date').type('2025-07-30');
        cy.get('#branch').select('SuvastuTech_Client');
        cy.get('#department_id').select('SuvastuTech_');
        cy.get('.btn.btn-sm.btn-primary').eq(2).click();

        // Assertion
        cy.contains('Client :').parent().should('contain.text', 'SuvastuTech_Client');

})
})