/// <reference types="cypress" />

describe('Bulk Attendance', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });

    it('Bulk Attendance functionality', () => {
    cy.get('.dash-link').contains('Timesheet').click();    
    cy.wait(2000);
    cy.get('.dash-link').contains('Attendance').click();
    cy.get('.dash-link').contains('Bulk Attendance').click();

    //Filter

    cy.get('#date').clear().type('2025-06-10')
    cy.get('#branch_id').select('37');
    cy.get('#department_id').select('67');
    cy.get('.col-auto > .btn-primary').click();

    //Select All
    cy.get('#present_all').check()

    //Update
    cy.get('.attendance-btn > .btn').click();

    //Assertions
    cy.get('.d-flex').contains('Employee attendance successfully created.');
    



    })
})