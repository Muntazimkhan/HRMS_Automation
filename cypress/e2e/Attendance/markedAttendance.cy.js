/// <reference types="cypress" />

describe('Marked Attendance', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Marked Attendance functionality', () => {
        cy.get('.dash-link').contains('Timesheet').click();
        cy.get('.dash-link').contains('Attendance').should('be.visible').click();
        cy.get('.dash-link').contains('Marked Attendance').should('be.visible').click();

        // Filter
        cy.get('#month').type('2025-07', { force: true });
        cy.get('#branch_id').select('Project', { force: true });
        cy.get('#department_id').select('Department', { force: true });
        cy.get('#employee_id').select('Muntazim Khan k36', { force: true });
        cy.get('.ti.ti-search').click();

        // Export functionality
        cy.get('#attendance_form > .btn').click();

        // Reset Filter
        cy.get('.btn-inner--icon').eq(1).click();
    });
});
