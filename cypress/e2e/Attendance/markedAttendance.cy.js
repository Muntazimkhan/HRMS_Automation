/// <reference types="cypress" />

describe('Marked Attendance', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });

    it('Marked Attendance functionality', () => {
    cy.get('.dash-link').contains('Timesheet').click();    
    cy.wait(2000);
    cy.get('.dash-link').contains('Attendance').click();
    cy.get('.dash-link').contains('Marked Attendance').click();

    //Filter
    cy.get('#month').type('2025-06', { force: true });
    cy.get('#branch_id').select('67');
    cy.wait(500); 
    cy.get('#department_id').select('New Depart', { force: true });
    cy.wait(1000);
    cy.get('#department_id').select('New Depart', { force: true });
    cy.wait(1000); 
    cy.get('#employee_id').select('Muntazim User');
    cy.wait(1000);
    cy.get('.ti.ti-search').click()
    cy.wait(1000);

    //Export functionality
    cy.get('#attendance_form > .btn').click();
    cy.wait(2000);

    //Reset Filter
    cy.get('.btn-inner--icon').eq(1).click();



    });
});