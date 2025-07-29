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
        cy.get('#branch').select('New_C');
        cy.get('#project_id').select('Project');
        cy.get('#department_id').select('New Depart');
        cy.get('.btn.btn-sm.btn-primary').eq(2).click();

        // Assertion
        cy.contains('Report :').parent().should('contain.text', 'Monthly Payroll Summary');

    })
})