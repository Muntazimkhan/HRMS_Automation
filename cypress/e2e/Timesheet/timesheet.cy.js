/// <reference types="cypress" />

describe('Timesheet Navigation', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Navigates to Timesheet page through menu', () => {
    // Expand parent Timesheet dropdown
    cy.xpath("//li[contains(@class, 'dash-hasmenu')]/a/span[normalize-space()='Timesheet']")
      .should('be.visible')
      .click({ force: true });

    //  Wait until the submenu is rendered
    cy.xpath("//ul[contains(@class,'dash-submenu') and contains(@style,'display: block')]")
      .should('be.visible');

    //  Click the actual Timesheet submenu item
    cy.get('[style="display: block; box-sizing: border-box;"] > :nth-child(2) > .dash-link')
      .should('be.visible')
      .click({ force: true });

    //  Confirm page has loaded
    cy.contains('h4', 'Manage Timesheet', { timeout: 10000 }).should('be.visible');

    // Export functionality
    cy.get('.ti.ti-file-export').should('be.visible').click();

    // Import functionality
    cy.get('[data-title="Import Timesheet CSV file"]').should('be.visible').click({ force: true });

    cy.get('input[type="file"]').should('exist').attachFile('timesheet.csv');

    cy.get('.modal-footer > .btn-primary').should('be.visible').click();

    // Delete Employee - first record
    cy.get(".ti.ti-trash.text-white.text-white").eq(-2).should('be.visible').click({ force: true });
    cy.get('.swal2-confirm').should('be.visible').click();

    // Delete Employee - second record
    cy.get(".ti.ti-trash.text-white.text-white").eq(-1).should('be.visible').click({ force: true });
    cy.get('.swal2-confirm').should('be.visible').click();

    // Filter
    cy.get('#current_date').should('be.visible').clear().type('2025-06-29');
    cy.get('#current_date').clear().type('2025-07-10');
    cy.get('#employee_id').select('Rheazel Mae', { force: true });
    cy.get('.col-auto > .btn-primary').should('be.visible').click();

    // Wait for potential filter results to load
    cy.get('.table-responsive').should('exist');

    // Reset Filter
    cy.get('.btn-danger').should('be.visible').click();
  });
});
