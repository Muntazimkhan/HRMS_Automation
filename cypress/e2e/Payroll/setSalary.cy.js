/// <reference types="cypress" />

describe('Set Salary for Employee', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
  });

  it('Set Salary Functionality', () => {
    cy.get('span.dash-mtext').contains('Payroll').click();
    cy.get('a.dash-link').contains('Set Salary').click();

    // Download payslips
    cy.get('#export-payslip').click();
    cy.wait(3000);
    cy.get('#export-wps').click();
    cy.wait(3000);

    // View employee salary setup
    cy.get('.mx-3.btn.btn-sm.align-items-center').eq(0).click();
    cy.contains('Employee Set Salary').should('be.visible');
    cy.wait(2000);

    // Set basic salary
    cy.get('.btn.btn-sm.btn-primary').eq(0).click();
    cy.get('#salary').clear().type('50000');
    cy.get('.modal-footer > .btn-primary').click();

    // Set Allowance
    cy.get('.btn.btn-sm.btn-primary').eq(1).click();
    cy.get('#allowance_option').select('Health_Allowance');
    cy.get('#title').clear().type('Health Allowance', { delay: 100 });
    cy.get('#type').select('Percentage');
    cy.get('#amount').clear().type('100');
    cy.get('[type="submit"]').click();

    // Set Commission
    cy.get('.btn.btn-sm.btn-primary').eq(2).click();
    cy.get('#title').type('New Commision');
    cy.get('#type').select('Fixed');
    cy.get('#amount').clear().type('5000');
    cy.get('[type="submit"]').click();

    // Set Loan
    cy.get('.btn.btn-sm.btn-primary').eq(3).click();
    cy.get('#title').type('New Loan');

    cy.get(':nth-child(2) > .choices > .choices__inner').click({ force: true });
    cy.wait(500); // Wait for dropdown rendering
    cy.contains('SuvastuTech_Loan').click({ force: true });

    cy.get('#amount').type('10');
    cy.get('#reason').type('Home Loan');
    cy.get('[type="submit"]').click();

    // Set Saturation Deduction
    cy.get('.btn.btn-sm.btn-primary').eq(4).click();

    cy.get(':nth-child(1) > .choices > .choices__inner').click({ force: true });
    cy.wait(500);
    cy.contains('GOSI').click({ force: true });

    cy.get('#title').type('GOSI Deduction', { force: true });

    cy.get(':nth-child(3) > .choices > .choices__inner').click({ force: true });
    cy.wait(500);
    cy.contains('Percentage').click({ force: true });

    cy.get('#amount').type('10');
    cy.get('[type="submit"]').click();

    // Set Other Payment
    cy.get('.btn.btn-sm.btn-primary').eq(5).click();
    cy.get('#title').type('Other Payment');
    cy.get('.choices__inner').click({ force: true });
    cy.wait(500);
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
});
