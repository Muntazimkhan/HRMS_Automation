/// <reference types="cypress" />

describe('Set Salary for Employee', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Set Salary Functionality', () => {
        cy.get('span.dash-mtext').contains('Payroll').click();
        cy.get('a.dash-link').contains('Set Salary').click();

        //Download the Export Payslip
        // cy.get('#export-payslip').click();
        // cy.wait(3000);
        // cy.get('#export-wps').click();
        // cy.wait(3000);

        //View and set salary for an employee
        cy.get('.mx-3.btn.btn-sm.align-items-center').eq(0).click();
        cy.contains('Employee Set Salary').should('be.visible');

        //emoloyee salary
        cy.get('.btn.btn-sm.btn-primary').eq(0).click();
        cy.get('#salary').clear().type('50000');
        cy.get('.modal-footer > .btn-primary').click();

        //Set Allowance
        cy.get('.btn.btn-sm.btn-primary').eq(1).click();
        cy.get('#allowance_option').select('Health_Allowance');
        cy.get('#title').clear().type('Health Allowance', { delay: 150 }).should('have.value', 'Health Allowance');
        cy.get('#type').select('Percentage');
        cy.get('#amount').clear().type('1000').should('have.value', '1000');
        cy.get('[type="submit"]').click();




    })
})