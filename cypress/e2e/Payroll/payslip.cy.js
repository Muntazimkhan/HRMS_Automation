/// <reference types="cypress" />

describe('Payslip Report', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Check the Payslip Report Functionality', () => {
    // Navigate to Payslip
    cy.contains('span.dash-mtext', 'Payroll').should('be.visible').click();
    cy.contains('a', 'Payslip').should('be.visible').click();

    // === Generate Payslip ===
    cy.get('#month').should('be.visible').select('09');
    cy.get('#year').should('be.visible').select('2025');

    cy.get('.btn.btn-primary.w-100')
      .contains('Generate Payslip')
      .should('be.visible')
      .click();

    // === Re-generate Payslip ===
    cy.get('.btn.btn-primary.w-100')
      .contains('Re-generate Payslip')
      .should('be.visible')
      .click();

    // Confirm Re-generation Modal appears
    cy.get('#flexRadioDefault3').should('be.visible').check();
    cy.get('.modal-footer > .btn-primary').should('be.enabled').click();

    // === Export Payslip ===
    cy.get('.form-control.month_date')
      .eq(1)
      .should('be.visible')
      .select('09');
    cy.get('.form-control.year_date')
      .eq(1)
      .should('be.visible')
      .select('2025');

    cy.get('.btn.btn-primary.w-100')
      .contains('Export')
      .should('be.visible')
      .click();

    cy.get('#wps_payslip_export_form > .btn')
      .should('be.visible')
      .click();

    // === Bulk Payment ===
    cy.get('#bulk_payment').should('be.visible').click();

    cy.get('[type="submit"]')
      .contains('Bulk Payment')
      .should('be.enabled')
      .click();
  });
});
