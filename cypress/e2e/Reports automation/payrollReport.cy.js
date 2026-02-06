/// <reference types="cypress" />

describe('Payroll Report', () => {
    beforeEach(()=>{
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    })
    it('Check the Payroll Report Functionality', () => {
        cy.contains('span.dash-mtext', 'Report').click();
        cy.contains('a', 'Payroll').click();

        // Download and Export functionality
        cy.get('.btn.btn-sm.btn-primary').eq(0).click();
        cy.get('button[type="submit"]').click();

        // Filters functionality
        cy.get('#month').type('2025-06');
        cy.get('#branch').select('Attache');
        cy.get('#project_id').select('Attache');
        cy.get('#department_id').select('CPU');
        cy.get('.btn.btn-sm.btn-primary').eq(2).click();

        // Assertion
        cy.contains('Report :').parent().should('contain.text', 'Monthly Payroll Summary');

    })
})