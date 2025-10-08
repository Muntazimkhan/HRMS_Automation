/// <reference types="cypress" />

describe('Set Salary for Employee', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Should set salary and other payroll components correctly', () => {
    // Navigate to Set Salary
    cy.contains('span.dash-mtext', 'Payroll', { timeout: 10000 }).should('be.visible').click();
    cy.contains('a.dash-link', 'Set Salary', { timeout: 10000 }).should('be.visible').click();

    // View salary setup
    cy.get(':nth-child(2) > .Action > span > .action-btn > .mx-3 > .ti', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    cy.contains('Employee Set Salary', { timeout: 10000 }).should('be.visible');

    // === Set Basic Salary ===
    cy.get('.btn.btn-sm.btn-primary').eq(0).should('be.visible').click();
    cy.get('#salary', { timeout: 10000 }).clear().type('50000');
    cy.get('.modal-footer > .btn-primary').should('be.enabled').click();

    // === Set Allowance ===
    cy.get('.btn.btn-sm.btn-primary').eq(1).should('be.visible').click();
    cy.get('#allowance_option', { timeout: 10000 }).select('Health_Allowance');
    cy.get('#title').clear().type('Health Allowance', { delay: 50 });
    cy.get('#type').select('Percentage');
    cy.get('#amount').clear().type('100');
    cy.get('[type="submit"]').should('be.enabled').click();

    // === Set Commission ===
    cy.get('.btn.btn-sm.btn-primary').eq(2).should('be.visible').click();
    cy.get('#title').type('New Commission');
    cy.get('#type').select('Fixed');
    cy.get('#amount').type('5000');
    cy.get('[type="submit"]').click();

    // === Set Loan ===
    cy.get('.btn.btn-sm.btn-primary').eq(3).should('be.visible').click();
    cy.get('#title').type('New Loan');

    cy.get(':nth-child(2) > .choices > .choices__inner', { timeout: 10000 })
      .click({ force: true });
    cy.get('.choices__list').should('be.visible').contains('SuvastuTech_Loan').click({ force: true });

    cy.get('body').click(5, 5); 
    cy.get('#amount').type('10');
    cy.get('#reason').type('Home Loan');
    cy.get('[type="submit"]').click();

    // === Set Saturation Deduction ===
    cy.get('.btn.btn-sm.btn-primary').eq(4).should('be.visible').click();

    cy.get(':nth-child(1) > .choices > .choices__inner', { timeout: 10000 }).click({ force: true });
    cy.contains('.choices__item', 'GOSI', { timeout: 10000 }).click({ force: true });

    cy.get('#title').type('GOSI Deduction');

    cy.get(':nth-child(3) > .choices > .choices__inner', { timeout: 10000 }).click({ force: true });
    cy.contains('.choices__item', 'Percentage', { timeout: 10000 }).click({ force: true });

    cy.get('#amount').type('10');
    cy.get('[type="submit"]').click();

    // === Set Other Payment ===
    cy.get('.btn.btn-sm.btn-primary').eq(5).should('be.visible').click();
    cy.get('#title').type('Other Payment');

    cy.get('.choices__inner', { timeout: 10000 }).first().click({ force: true });
    cy.contains('.choices__item', 'Fixed', { timeout: 10000 }).click({ force: true });

    cy.get('#amount').type('1000');
    cy.get('[type="submit"]').click();

    // === Set Overtime ===
    cy.get('.btn.btn-sm.btn-primary').eq(6).should('be.visible').click();
    cy.get('#title').type('Overtime Payment');
    cy.get('#days').type('24');
    cy.get('#hours').type('8');
    cy.get('#overTime_rate').type('80');
    cy.get('[type="submit"]').click();
  });

  it('Check the Export functionality', () => {
    // Navigate to Set Salary
    cy.contains('span.dash-mtext', 'Payroll', { timeout: 10000 }).should('be.visible').click();
    cy.contains('a.dash-link', 'Set Salary', { timeout: 10000 }).should('be.visible').click();

    // Export Payslip
    cy.get('#export-payslip', { timeout: 10000 }).should('be.visible').click();

    // Export WPS
    cy.contains('span.dash-mtext', 'Payroll', { timeout: 10000 }).click(); // Ensure dropdown re-opens
    cy.get('#export-wps', { timeout: 10000 }).should('be.visible').click();
  });
});
