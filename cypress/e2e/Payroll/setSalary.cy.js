/// <reference types="cypress" />

describe('Set Salary for Employee', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Should set salary and other payroll components correctly', () => {
    // Navigate to Set Salary
    cy.contains('span.dash-mtext', 'Payroll').click();
    cy.contains('a.dash-link', 'Set Salary').click();     

    // View salary setup
    cy.get(':nth-child(2) > .Action > span > .action-btn > .mx-3 > .ti').click({ force: true });
    cy.contains('Employee Set Salary').should('be.visible');

    // Set Basic Salary
    cy.get('.btn.btn-sm.btn-primary').eq(0).click();
    cy.get('#salary').clear().type('50000');
    cy.get('.modal-footer > .btn-primary').click();

    // Set Allowance
    cy.get('.btn.btn-sm.btn-primary').eq(1).click();
    cy.get('#allowance_option').select('Health_Allowance');
    cy.get('#title').clear().type('Health Allowance', { delay: 50 });
    cy.get('#type').select('Percentage');
    cy.get('#amount').clear().type('100');
    cy.get('[type="submit"]').click();

    // Set Commission
    cy.get('.btn.btn-sm.btn-primary').eq(2).click();
    cy.get('#title').type('New Commission');
    cy.get('#type').select('Fixed');
    cy.get('#amount').type('5000');
    cy.get('[type="submit"]').click();

    // Set Loan
    cy.get('.btn.btn-sm.btn-primary').eq(3).click();
    cy.get('#title').type('New Loan');
    cy.get(':nth-child(2) > .choices > .choices__inner').click({ force: true });
    cy.contains('.choices__item', 'SuvastuTech_Loan').click({ force: true });
    cy.get('body').click(5, 5); // Close dropdown if needed
    cy.get('#amount').type('10');
    cy.get('#reason').type('Home Loan');
    cy.get('[type="submit"]').click();

    // Set Saturation Deduction
    cy.get('.btn.btn-sm.btn-primary').eq(4).click();
    cy.get(':nth-child(1) > .choices > .choices__inner').click({ force: true });
    cy.contains('GOSI').click({ force: true });
    cy.get('#title').type('GOSI Deduction');
    cy.get(':nth-child(3) > .choices > .choices__inner').click({ force: true });
    cy.contains('Percentage').click({ force: true });
    cy.get('#amount').type('10');
    cy.get('[type="submit"]').click();

    // Set Other Payment
    cy.get('.btn.btn-sm.btn-primary').eq(5).click();
    cy.get('#title').type('Other Payment');
    cy.get('.choices__inner').click({ force: true });
    cy.contains('Fixed').click({ force: true });
    cy.get('#amount').type('1000');
    cy.get('[type="submit"]').click();

    // Set Overtime
    cy.get('.btn.btn-sm.btn-primary').eq(6).click();
    cy.get('#title').type('Overtime Payment');
    cy.get('#days').type('24');
    cy.get('#hours').type('8');
    cy.get('#overTime_rate').type('80');
    cy.get('[type="submit"]').click();
  });

  it('Check the Export functionality', () => {
    // Navigate to Set Salary
    cy.contains('span.dash-mtext', 'Payroll').click();
    cy.contains('a.dash-link', 'Set Salary').click();

    // Export Payslip
    cy.get('#export-payslip').click();
    cy.wait(2000); 
    cy.contains('span.dash-mtext', 'Payroll').click(); 
    cy.get('#export-wps').should('be.visible').click();
    cy.wait(2000); 
  });
});
