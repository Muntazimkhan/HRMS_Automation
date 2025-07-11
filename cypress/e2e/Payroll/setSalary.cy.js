/// <reference types="cypress" />

describe('Set Salary for Employee', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Set Salary Functionality', () => {
        cy.get('span.dash-mtext').contains('Payroll').click();
        cy.get('a.dash-link').contains('Set Salary').click();

        //Download the Export Payslip
        cy.get('#export-payslip').click();
        cy.wait(3000);
        cy.get('#export-wps').click();
        cy.wait(3000);

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
        cy.get('#amount').clear().type('100').should('have.value', '100');
        cy.get('[type="submit"]').click();

        //Set Commission
        cy.get('.btn.btn-sm.btn-primary').eq(2).click();
        cy.get('#title').type('New Commision')
        cy.get("#type").select('Fixed');
        cy.get('#amount').clear().type('5000').should('have.value', '5000');
        cy.get('[type="submit"]').click();

        // Set Loan  
        cy.get('.btn.btn-sm.btn-primary').eq(3).click();
        cy.get('#title').type('New Loan');
        cy.get(':nth-child(2) > .choices > .choices__inner').click();
        cy.get('.choices__list--dropdown').should('be.visible').contains('SuvastuTech_Loan').click();
        cy.get(':nth-child(3) > .choices > .choices__inner').click();
        cy.get('.choices__list--dropdown').should('be.visible').contains('Fixed').click();
        cy.get('#amount').type('10')
        cy.get('#reason').type('Home Loan')
        cy.get('[type="submit"]').click();

        //Set Deduction
        cy.get('.btn.btn-sm.btn-primary').eq(4).click();
        cy.get(':nth-child(1) > .choices > .choices__inner').click();
        cy.get('.choices__list--dropdown').should('be.visible').contains('GOSI').click();
        cy.get('#title').type('GOSI Deduction');
        cy.get(':nth-child(3) > .choices > .choices__inner').click();
        cy.get('.choices__list--dropdown').should('be.visible').contains('Percentage').click();
        cy.get('#amount').type('10');
        cy.get('[type="submit"]').click();

        //Set other Payment
        cy.get('.btn.btn-sm.btn-primary').eq(5).click();
        cy.get('#title').type('Other Payment');
        cy.get('.choices__inner').click();
        cy.get('.choices__list--dropdown').should('be.visible').contains('Fixed').click();
        cy.get('#amount').type('1000').should('have.value', '1000');
        cy.get('[type="submit"]').click();

        //Set Overtime
        cy.get('.btn.btn-sm.btn-primary').eq(6).click();
        cy.get('#title').type('Overtime Payment');
        cy.get('#auto_calc').check();
        cy.get('#overtime_unit').clear().type('10')
        cy.get('#days_per_month').clear().type('24')
        cy.get('#hours_per_day').clear().type('8')
        cy.get('#days').type('20');
        cy.get('#hours').type('8');
        cy.get('#calculate').click();
        cy.get('#overTime_rate').should('have.value', '437500.00000000006');
        cy.get('.modal-footer > .btn-primary').click();

        




    })
})